// import { initializeApp } from 'firebase-admin/app';
import { Expo } from 'expo-server-sdk';
import 'dotenv/config';
import { createRequire } from 'module'; 
import admin from 'firebase-admin';
// import * as serviceAccount from './src/config/firebase/config.json';
const { FIREBASE_SERVICE_ACCOUNT } = process.env;
const require = createRequire(import.meta.url);
const serviceAccount = require('./src/config/firebase/config.json')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3030
const fs = require('fs');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount[FIREBASE_SERVICE_ACCOUNT])
});

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.post('/', (req, res) => {
res.send('success: Got a POST request')
})
app.post('/users', (req, res) => {
    res.send('success: Got a POST request at /users')
})   // this is a route handler
app.put('/', (req, res) => {
    res.send('success: Got a PUT request')
})
app.delete('/', (req, res) => {
    res.send('success: Got a DELETE request')
})
app.patch('/', (req, res) => {
    res.send('success: Got a PATCH request')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/500', (req, res) => {
    res.sendStatus(500)
})
app.get('/502', (req, res) => {
    res.sendStatus(502)
})
app.get('/408', (req, res) => {
    res.sendStatus(408)
})
app.get('/404', (req, res) => {
    res.sendStatus(404)
})
app.get('/401', (req, res) => {
    res.sendStatus(401)
})
app.get('/notification', async (req, res) => {
    const registrationToken = 'cpy3Yr4HQaubU3gY_ACS10:APA91bEr2lcD4Mp9JlS8UEULTGYa06n7n3t-ZdHXSAyoExB_Be4sksqxZfL0tkkB6TWiino7uDsWj4PtaYGXD2AXsh_m8XBfr5Do5DB1Gr3f-Fvteouai4eujPJpMTucKLwTy4Vpb7UT';
    // const notificationBody = {
    //     notification: {
    //       title: 'Test Title',
    //       body: 'This is my body'
    //     },
    //     data: { key1: '<no data>' },
    //     tokens: [registrationToken]
    //   };
    //   console.log(notificationBody);

    // const { responses } = await admin.messaging().sendMulticast(notificationBody); 
    // res.send({ status: 200, responses });

    const notif = {
        data: {
            score: '850',
            time: '2:45'
        },
    };
    admin.messaging().sendToDevice(registrationToken, notif)
        .then(function(response) {
            console.log("Successfully sent message:", response);
            res.send({ response });
        })
        .catch(function(error) {
            console.log("Error sending message:", error);
            res.send({ error });
        });


    // // Send a message to the device corresponding to the provided
    // registration token.
    // const message = {
    //     data: {
    //         score: '850',
    //         time: '2:45'
    //     },
    //     token: registrationToken
    // };
    // admin.messaging().getMessaging().send(message)
    // .then((response) => {
    //     // Response is a message ID string.
    //     res.send({ response })
    //     console.log('Successfully sent message:', response);
    // })
    // .catch((error) => {
    //     res.send({ error })
    //     console.log('Error sending message:', error);
    // });
});

app.get('/expo-notification', (req, res) => {

let expo = new Expo();
const somePushTokens = ['ExponentPushToken[r2CrWSI93UpjfHINv_1Cga]']

// Create the messages that you want to send to clients
let messages = [];
for (let pushToken of somePushTokens) {
  if (!Expo.isExpoPushToken(pushToken)) {
    console.error(`Push token ${pushToken} is not a valid Expo push token`);
    continue;
  }

  messages.push({
    to: pushToken,
    sound: 'default',
    body: 'Erics test notification from server',
    data: { ifWereTalking: 'body', then: 'put it on me' },
  })
}

let chunks = expo.chunkPushNotifications(messages);
let tickets = [];
(async () => {
  for (let chunk of chunks) {
    try {
      let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
      console.log('ticketChunk: ', ticketChunk);
      tickets.push(...ticketChunk);
      res.send({ status: 200, ticket: ticketChunk});
    } catch (error) {
        console.error('error sending notification: ', error);
        res.send({ status: 500, error });
    }
  }
})();

let receiptIds = [];
for (let ticket of tickets) {
  if (ticket.id) {
    receiptIds.push(ticket.id);
  }
}

let receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
(async () => {
  for (let chunk of receiptIdChunks) {
    try {
      let receipts = await expo.getPushNotificationReceiptsAsync(chunk);
      console.log('receipts: ', receipts);

      for (let receiptId in receipts) {
        let { status, message, details } = receipts[receiptId];
        if (status === 'ok') {
          continue;
        } else if (status === 'error') {
          console.error(
            `There was an error sending a notification: ${message}`
          );
          if (details && details.error) {
            console.error(`The error code is ${details.error}`);
          }
        }
      }
    } catch (error) {
      console.error('error getting receipts: ', error);
    }
  }
})();
})

app.get('/taxformpdf', (req, response) => {
  const filePath = "public/taxform.pdf"; // or any file format

  // Check if file specified by the filePath exists
  fs.exists(filePath, function (exists) {
      if (exists) {
          // Content-type is very interesting part that guarantee that
          // Web browser will handle response in an appropriate manner.
          response.writeHead(200, {
              "Content-Type": "application/octet-stream",
              "Content-Disposition": "attachment; filename=1.pdf"
          });
          fs.createReadStream(filePath).pipe(response);
          return;
      }
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.end("ERROR File does not exist");
  });

})
app.get('/taxformjpg', (req, response) => {
  const filePath = "public/taxform.jpeg"; // or any file format

  // Check if file specified by the filePath exists
  fs.exists(filePath, function (exists) {
      if (exists) {
          // Content-type is very interesting part that guarantee that
          // Web browser will handle response in an appropriate manner.
          response.writeHead(200, {
              "Content-Type": "image/jpeg",
              "Content-Disposition": "attachment; filename=1.jpeg"
          });
          fs.createReadStream(filePath).pipe(response);
          return;
      }
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.end("ERROR File does not exist");
  });

})

app.get('/invoicepdf', (req, response) => {
  const filePath = "public/invoice.pdf"; // or any file format

  // Check if file specified by the filePath exists
  fs.exists(filePath, function (exists) {
      if (exists) {
          // Content-type is very interesting part that guarantee that
          // Web browser will handle response in an appropriate manner.
          response.writeHead(200, {
              "Content-Type": "application/octet-stream",
              "Content-Disposition": "attachment; filename=1.pdf"
          });
          fs.createReadStream(filePath).pipe(response);
          return;
      }
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.end("ERROR File does not exist");
  });

})
app.get('/invoicejpg', (req, response) => {
  const filePath = "public/invoice.jpeg"; // or any file format

  // Check if file specified by the filePath exists
  fs.exists(filePath, function (exists) {
      if (exists) {
          // Content-type is very interesting part that guarantee that
          // Web browser will handle response in an appropriate manner.
          response.writeHead(200, {
              "Content-Type": "image/jpeg",
              "Content-Disposition": "attachment; filename=1.jpeg"
          });
          fs.createReadStream(filePath).pipe(response);
          return;
      }
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.end("ERROR File does not exist");
  });

})