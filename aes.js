// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const fs = require('fs');
// const path = require('path');

// let encrytped = '$2a$10$Aw/ZSTB/uzmoAxjikaXZiew5OQhDlehW1Sh0lVDiqQPrmd/SsfMTC'
// let publicKey = fs.readFileSync(path.join(__dirname + '/pub_key.key'), 'utf-8');
// const bytes  = CryptoJS.AES.decrypt(encrytped, publicKey);
// //console.log(bytes.toString(CryptoJS.enc.Utf8));
// console.log(bytes);

const publicKey = require('./publicKey');
const CryptoJS = require('crypto-js');

const encryptPassword = (password) => {
    const result = CryptoJS.AES.encrypt(password, publicKey.login).toString();
    console.log(result);
    return result;
};

const decryptPassword = (encrytped) => {
    const bytes  = CryptoJS.AES.decrypt(encrytped, publicKey.login);
    const result = bytes.toString(CryptoJS.enc.Utf8) || 'null';
    console.log(result);
    return result;
}
encryptPassword("triptax2022");
// decryptPassword('U2FsdGVkX1/ZvZoZdqEup5HuL5MBYLBzgWQDRnhAFpY=')