
// const a = 1.2;
// const b = (Math.round(a * 100) / 100).toFixed(2).toString()
// console.log(b);

// var defaultDiacriticsRemovalMap =
// [
//     {'base':'A', 'letters':'\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'},
//     {'base':'AA','letters':'\uA732'},
//     {'base':'AE','letters':'\u00C6\u01FC\u01E2'},
//     {'base':'AO','letters':'\uA734'},
//     {'base':'AU','letters':'\uA736'},
//     {'base':'AV','letters':'\uA738\uA73A'},
//     {'base':'AY','letters':'\uA73C'},
//     {'base':'B', 'letters':'\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'},
//     {'base':'C', 'letters':'\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'},
//     {'base':'D', 'letters':'\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0'},
//     {'base':'DZ','letters':'\u01F1\u01C4'},
//     {'base':'Dz','letters':'\u01F2\u01C5'},
//     {'base':'E', 'letters':'\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'},
//     {'base':'F', 'letters':'\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'},
//     {'base':'G', 'letters':'\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'},
//     {'base':'H', 'letters':'\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'},
//     {'base':'I', 'letters':'\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'},
//     {'base':'J', 'letters':'\u004A\u24BF\uFF2A\u0134\u0248'},
//     {'base':'K', 'letters':'\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'},
//     {'base':'L', 'letters':'\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'},
//     {'base':'LJ','letters':'\u01C7'},
//     {'base':'Lj','letters':'\u01C8'},
//     {'base':'M', 'letters':'\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'},
//     {'base':'N', 'letters':'\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'},
//     {'base':'NJ','letters':'\u01CA'},
//     {'base':'Nj','letters':'\u01CB'},
//     {'base':'O', 'letters':'\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'},
//     {'base':'OI','letters':'\u01A2'},
//     {'base':'OO','letters':'\uA74E'},
//     {'base':'OU','letters':'\u0222'},
//     {'base':'OE','letters':'\u008C\u0152'},
//     {'base':'oe','letters':'\u009C\u0153'},
//     {'base':'P', 'letters':'\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'},
//     {'base':'Q', 'letters':'\u0051\u24C6\uFF31\uA756\uA758\u024A'},
//     {'base':'R', 'letters':'\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'},
//     {'base':'S', 'letters':'\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'},
//     {'base':'T', 'letters':'\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'},
//     {'base':'TZ','letters':'\uA728'},
//     {'base':'U', 'letters':'\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'},
//     {'base':'V', 'letters':'\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'},
//     {'base':'VY','letters':'\uA760'},
//     {'base':'W', 'letters':'\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'},
//     {'base':'X', 'letters':'\u0058\u24CD\uFF38\u1E8A\u1E8C'},
//     {'base':'Y', 'letters':'\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'},
//     {'base':'Z', 'letters':'\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'},
//     {'base':'a', 'letters':'\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'},
//     {'base':'aa','letters':'\uA733'},
//     {'base':'ae','letters':'\u00E6\u01FD\u01E3'},
//     {'base':'ao','letters':'\uA735'},
//     {'base':'au','letters':'\uA737'},
//     {'base':'av','letters':'\uA739\uA73B'},
//     {'base':'ay','letters':'\uA73D'},
//     {'base':'b', 'letters':'\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'},
//     {'base':'c', 'letters':'\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'},
//     {'base':'d', 'letters':'\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'},
//     {'base':'dz','letters':'\u01F3\u01C6'},
//     {'base':'e', 'letters':'\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'},
//     {'base':'f', 'letters':'\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'},
//     {'base':'g', 'letters':'\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'},
//     {'base':'h', 'letters':'\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'},
//     {'base':'hv','letters':'\u0195'},
//     {'base':'i', 'letters':'\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'},
//     {'base':'j', 'letters':'\u006A\u24D9\uFF4A\u0135\u01F0\u0249'},
//     {'base':'k', 'letters':'\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'},
//     {'base':'l', 'letters':'\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'},
//     {'base':'lj','letters':'\u01C9'},
//     {'base':'m', 'letters':'\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'},
//     {'base':'n', 'letters':'\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'},
//     {'base':'nj','letters':'\u01CC'},
//     {'base':'o', 'letters':'\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'},
//     {'base':'oi','letters':'\u01A3'},
//     {'base':'ou','letters':'\u0223'},
//     {'base':'oo','letters':'\uA74F'},
//     {'base':'p','letters':'\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'},
//     {'base':'q','letters':'\u0071\u24E0\uFF51\u024B\uA757\uA759'},
//     {'base':'r','letters':'\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'},
//     {'base':'s','letters':'\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'},
//     {'base':'t','letters':'\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'},
//     {'base':'tz','letters':'\uA729'},
//     {'base':'u','letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'},
//     {'base':'v','letters':'\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'},
//     {'base':'vy','letters':'\uA761'},
//     {'base':'w','letters':'\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'},
//     {'base':'x','letters':'\u0078\u24E7\uFF58\u1E8B\u1E8D'},
//     {'base':'y','letters':'\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'},
//     {'base':'z','letters':'\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'}
// ];

// var diacriticsMap = {};
// for (var i=0; i < defaultDiacriticsRemovalMap .length; i++){
//     var letters = defaultDiacriticsRemovalMap [i].letters;
//     for (var j=0; j < letters.length ; j++){
//         diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap [i].base;
//     }
// }
// const removeDiacritics = (str) => {
//     return str.replace(/[^\u0000-\u007E]/g, function(a){
//        return diacriticsMap[a] || a;
//     });
// }

// const obj = {
//     shop_address: 'lalala',
//     shop_name: 'YUP'
// }
// console.log(obj?.shop_name ? removeDiacritics(obj?.shop_name?.replace(/\r?\n|\r/g, ' ')) : 'NOPE');
// const a = new Date('2022-05-26T02:55:05Z');
// const today = new Date();

// function datediff(first, second) {
//     return Math.round((second-first)/(1000*60*60*24));
// }

// console.log(datediff(a, today))

// const array = [
//     {
//         date: 'Mar 13 2012 10:00:00 AM'
//     },
//     {
//         date: 'Mar 12 2012 10:00:00 AM'
//     },
//     {
//         date: 'Mar 17 2012 10:00:00 AM'
//     },
//     {
//         date: 'Mar 15 2012 10:00:00 AM'
//     }
// ]
// const array2 = array.sort(function(a , b) {
//     return new Date(a.date) - new Date(b.date);
// });

// console.log('eric'.substring(0, 2));

// let obj1 = {
//     a: 1,
//     b: 2
// }

// console.log({
//     ...{
//         ...obj1,
//         b: 23
//     },
//     items: [5, 6, 7]
// });

// const arr = [
//     {
//       "email": "eric@triptax.com",
//     },
//     {
//       "language": {
//         "key": "en",
//         "name": "English",
//       },
//     },
//   ]
// console.log(/.+/.test(' '));

// const arr = [
//   undefined,
//   {
//     "language": {
//       "key": "en",
//       "name": "English",
//     },
//   },
// ]
// const obj1 = {
//   "email": "eric@triptax.com",
// }

// let detailsObj = {};

// arr?.forEach((item) => {
//     if (item) detailsObj = { ...detailsObj, ...item };
// });
// detailsObj = { ...detailsObj, ...obj1 };

// const obj = {
//   "accountNumber": {
//     "message": "this field is required",
//     "ref": {
//       "name": "accountNumber",
//     },
//     "type": "required",
//   },
//   "address": {
//     "city": {
//       "message": "this field is required",
//       "ref": {
//         "name": "address.city",
//       },
//       "type": "required",
//     },
//     "firstLine": {
//       "message": "this field is required",
//       "ref": {
//         "name": "address.firstLine",
//       },
//       "type": "required",
//     },
//   },
//   "swiftCode": {
//     "message": "this field is required",
//     "ref": {
//       "name": "swiftCode",
//     },
//     "type": "required",
//   },
// }
// console.log(obj?.address?.['address.city'.replace('address.', '')]);
// const la = 'address.city'.replace('address.', '')
// console.log(obj?.address?.['city']);

// const lb = {"trip":"{\"draftShopping\":\"users/9a8116d8-ce33-4056-a4b6-791b9de995cb/signature/8c92307d-80e4-4ea8-a5f5-79412c05afa4.jpg\"}","tripSetup":"{\"exitPointType\":\"Air\",\"exitPoint\":\"Roissy-Charles de Gaulle\",\"exitPointCode\":\"0\",\"destination\":\"France\",\"dateArrival\":\"2022-06-22T10:53:02.390Z\",\"dateDeparture\":\"2022-06-22T10:53:02.390Z\",\"address\":\"Nrb 1983\",\"signature\":\"users/9a8116d8-ce33-4056-a4b6-791b9de995cb/signature/8c92307d-80e4-4ea8-a5f5-79412c05afa4.jpg\"}","_persist":"{\"version\":-1,\"rehydrated\":true}"}
// // console.log(JSON.parse(lb.trip));
// // console.log(JSON.stringify(JSON.stringify({
// //     draftShopping: 'users/9a8116d8-ce33-4056-a4b6-791b9de995cb/signature/8c92307d-80e4-4ea8-a5f5-79412c05afa4.jpg',
// //     eric: {
// //         nestedEric: null
// //     }
// //   })));
// const lc = {"exitPointType":"Air","exitPoint":"Roissy-Charles de Gaulle","exitPointCode":"0","destination":"France","dateArrival":"2022-06-22T12:09:23.348Z","dateDeparture":"2022-06-22T12:09:23.348Z","address":"Nrb 1983","signature":"users/9a8116d8-ce33-4056-a4b6-791b9de995cb/signature/012c6716-50d2-41bb-9454-a728facba91d.jpg"}

// const la = `{"exitPointType":"Air","exitPoint":"Roissy-Charles…nature/012c6716-50d2-41bb-9454-a728facba91d.jpg"}`
// console.log(JSON.parse(la));
// console.log(new Date() > new Date('2022-07-28T00:00:00Z'))
// const d = new Date();
// // console.log(new Date(today.setDate(today.getDate() - 1)).toISOString());
// var hour = d.getHours() == 0 ? 12 : (d.getHours() > 12 ? d.getHours() - 12 : d.getHours());
// var min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
// var ampm = d.getHours() < 12 ? 'AM' : 'PM';
// var time = hour + ':' + min + ' ' + ampm;
// console.log(d.toDateString(), time)

// const arr = [
//       {
//         "M": {
//           "description": {
//             "S": "Germinal Poche"
//           },
//           "identification_number": {
//             "S": "5100"
//           },
//           "product_code": {
//             "S": "55"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "95b6dbc0-b292-4dae-aa38-b1baf8a97b6e"
//           },
//           "TTC_amount": {
//             "S": "4.84"
//           },
//           "VAT_amount": {
//             "N": "0.23"
//           },
//           "VAT_rate": {
//             "S": "0.0500"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "Liver-Les Dans Yeul"
//           },
//           "identification_number": {
//             "S": "5600"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "95b6dbc0-b292-4dae-aa38-b1baf8a97b6e"
//           },
//           "TTC_amount": {
//             "S": "2.85"
//           },
//           "VAT_amount": {
//             "S": "0.14"
//           },
//           "VAT_rate": {
//             "S": "0.0500"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "Livre-L'Accent"
//           },
//           "identification_number": {
//             "S": "5300"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "95b6dbc0-b292-4dae-aa38-b1baf8a97b6e"
//           },
//           "TTC_amount": {
//             "S": "2.85"
//           },
//           "VAT_amount": {
//             "S": "0.14"
//           },
//           "VAT_rate": {
//             "S": "0.0500"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "Livre-Gagtim"
//           },
//           "identification_number": {
//             "S": "5400"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "95b6dbc0-b292-4dae-aa38-b1baf8a97b6e"
//           },
//           "TTC_amount": {
//             "S": "2.85"
//           },
//           "VAT_amount": {
//             "S": "0.14"
//           },
//           "VAT_rate": {
//             "S": "0.0500"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "Livre-Le Petit"
//           },
//           "identification_number": {
//             "S": "5500"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "95b6dbc0-b292-4dae-aa38-b1baf8a97b6e"
//           },
//           "TTC_amount": {
//             "S": "2.85"
//           },
//           "VAT_amount": {
//             "S": "0.14"
//           },
//           "VAT_rate": {
//             "S": "0.0500"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "Les Soures Germillet"
//           },
//           "identification_number": {
//             "S": "5200"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "95b6dbc0-b292-4dae-aa38-b1baf8a97b6e"
//           },
//           "TTC_amount": {
//             "S": "13.25"
//           },
//           "VAT_amount": {
//             "S": "0.63"
//           },
//           "VAT_rate": {
//             "S": "0.0500"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "SANDALE Camel 39 "
//           },
//           "identification_number": {
//             "S": "KN98NZWXRWO5A4B6Z"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "fb3d0101-f814-41ca-af4d-527d7498243a"
//           },
//           "TTC_amount": {
//             "S": "17.50"
//           },
//           "VAT_amount": {
//             "S": "2.92"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "BERMUDA Bleu fonc 12 A "
//           },
//           "identification_number": {
//             "S": "D4PKS42PYHBYLPSTW"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "fb3d0101-f814-41ca-af4d-527d7498243a"
//           },
//           "TTC_amount": {
//             "S": "12.50"
//           },
//           "VAT_amount": {
//             "N": "2.08"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "SANS GENE, TOILE"
//           },
//           "identification_number": {
//             "S": "832H4D99R0UOILP7E"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "53c5907a-dbb2-424c-b714-7b6cad6b5781"
//           },
//           "TTC_amount": {
//             "S": "14.95"
//           },
//           "VAT_amount": {
//             "S": "2.49"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "SLIPS GARCON X3P"
//           },
//           "identification_number": {
//             "S": "1UDWD486SJS5CUSCC"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "53c5907a-dbb2-424c-b714-7b6cad6b5781"
//           },
//           "TTC_amount": {
//             "S": "1.95"
//           },
//           "VAT_amount": {
//             "S": "0.32"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "CEINTURE HOMME 0456970MS HE"
//           },
//           "identification_number": {
//             "S": "PQ2IVDDYQ5PRZQSNA"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "53c5907a-dbb2-424c-b714-7b6cad6b5781"
//           },
//           "TTC_amount": {
//             "S": "5.05"
//           },
//           "VAT_amount": {
//             "S": "0.84"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "TEE-SHIRT MC 36"
//           },
//           "identification_number": {
//             "S": "PKCFQBN52A4OY1F6G"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "53c5907a-dbb2-424c-b714-7b6cad6b5781"
//           },
//           "TTC_amount": {
//             "S": "2.95"
//           },
//           "VAT_amount": {
//             "S": "0.49"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "BERMUDA EG"
//           },
//           "identification_number": {
//             "S": "729ETZLGXXDCACLRN"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "53c5907a-dbb2-424c-b714-7b6cad6b5781"
//           },
//           "TTC_amount": {
//             "S": "6.95"
//           },
//           "VAT_amount": {
//             "S": "1.16"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "TEE-SHIRT FEMME"
//           },
//           "identification_number": {
//             "S": "2SVWBRU9YQRUFXWRE"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "53c5907a-dbb2-424c-b714-7b6cad6b5781"
//           },
//           "TTC_amount": {
//             "S": "9.95"
//           },
//           "VAT_amount": {
//             "S": "1.66"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "ELASTIQUE ESSENTIELS REF 11"
//           },
//           "identification_number": {
//             "S": "QORBZTH77L8O37ENF"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "53c5907a-dbb2-424c-b714-7b6cad6b5781"
//           },
//           "TTC_amount": {
//             "S": "3.00"
//           },
//           "VAT_amount": {
//             "N": "0.5"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "Pantalon Promod (R) Solde"
//           },
//           "identification_number": {
//             "S": "1823069998736141"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "799efead-099a-4ca4-b3e9-1bfe1cd4d8fe"
//           },
//           "TTC_amount": {
//             "S": "9.99"
//           },
//           "VAT_amount": {
//             "S": "1.66"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "Pantalon Promod (R) Solde"
//           },
//           "identification_number": {
//             "S": "1823064471336111"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "799efead-099a-4ca4-b3e9-1bfe1cd4d8fe"
//           },
//           "TTC_amount": {
//             "S": "23.99"
//           },
//           "VAT_amount": {
//             "S": "4.00"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "Ref. P47620-05R-B70"
//           },
//           "identification_number": {
//             "S": "IS3JAWJ9CJ8WEGB74"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "8fc897d9-34de-498f-b0c1-3d8be9d47e82"
//           },
//           "TTC_amount": {
//             "S": "22.47"
//           },
//           "VAT_amount": {
//             "S": "3.74"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "Rif P49620-0QQ-870"
//           },
//           "identification_number": {
//             "S": "4MADZM8IH17YLPWHO"
//           },
//           "product_code": {
//             "S": "60"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "8fc897d9-34de-498f-b0c1-3d8be9d47e82"
//           },
//           "TTC_amount": {
//             "S": "22.47"
//           },
//           "VAT_amount": {
//             "S": "3.74"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "TROUSERS DAM 160.164 14"
//           },
//           "identification_number": {
//             "S": "262006"
//           },
//           "product_code": {
//             "S": "56"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "e54b8c08-669c-4ce0-8b31-595cfb4a674c"
//           },
//           "TTC_amount": {
//             "S": "16.00"
//           },
//           "VAT_amount": {
//             "N": "2.67"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "canqueluetooth JBL Te 46"
//           },
//           "identification_number": {
//             "S": "0001157831"
//           },
//           "product_code": {
//             "S": "59"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "6ffb7af3-b07e-4c66-9b44-e7096648e166"
//           },
//           "TTC_amount": {
//             "S": "54.99"
//           },
//           "VAT_amount": {
//             "N": "9.16"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "GUIDE FEDERAL FFE GALOP 4"
//           },
//           "identification_number": {
//             "S": "903500004"
//           },
//           "product_code": {
//             "S": "56"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "fcc1fc8a-72bf-4133-87ef-f8592f0fa084"
//           },
//           "TTC_amount": {
//             "S": "10.00"
//           },
//           "VAT_amount": {
//             "N": "0.52"
//           },
//           "VAT_rate": {
//             "S": "0.0550"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "EQUINATURA TONIQUE CRINS 250ML 3"
//           },
//           "identification_number": {
//             "S": "S7ZCFHG7G4Y5IY01E"
//           },
//           "product_code": {
//             "S": "56"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "fcc1fc8a-72bf-4133-87ef-f8592f0fa084"
//           },
//           "TTC_amount": {
//             "S": "8.99"
//           },
//           "VAT_amount": {
//             "S": "1.50"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "PEIGNE CRINIERE MANCHE BOIS 3"
//           },
//           "identification_number": {
//             "S": "08Y184ZOZ5IO4PNSL"
//           },
//           "product_code": {
//             "S": "56"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "fcc1fc8a-72bf-4133-87ef-f8592f0fa084"
//           },
//           "TTC_amount": {
//             "S": "1.99"
//           },
//           "VAT_amount": {
//             "S": "0.33"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "M.CHAPS STRETCH GRAIN. NOIR S 3"
//           },
//           "identification_number": {
//             "S": "BVIMOHNE7PI7FI6F0"
//           },
//           "product_code": {
//             "S": "56"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "fcc1fc8a-72bf-4133-87ef-f8592f0fa084"
//           },
//           "TTC_amount": {
//             "S": "34.90"
//           },
//           "VAT_amount": {
//             "S": "5.82"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       },
//       {
//         "M": {
//           "description": {
//             "S": "ORIGIN LACET BOOTS NOIR 39"
//           },
//           "identification_number": {
//             "S": "3AB29WL2ICVMK3MX9"
//           },
//           "product_code": {
//             "S": "56"
//           },
//           "quantity": {
//             "S": "1"
//           },
//           "shop_id": {
//             "S": "fcc1fc8a-72bf-4133-87ef-f8592f0fa084"
//           },
//           "TTC_amount": {
//             "S": "59.43"
//           },
//           "VAT_amount": {
//             "S": "9.91"
//           },
//           "VAT_rate": {
//             "S": "0.2000"
//           }
//         }
//       }
//     ]
//     const arr2 = []

//     arr.forEach(item => {
//         const obj = {}
//         Object.keys(item['M']).forEach(key => {
//             obj[key] = item['M'][key]['S'] || item['M'][key]['N']
//         })
//         arr2.push(obj);
//     })
//     console.log(JSON.stringify(arr2));

// const str = "Nice-Côte-d'Azur";
// console.log(Buffer.from(str, 'utf-8').toString())

// var d = new Date('2022-06-30T09:33:25.416+02:00');
// console.log(d.toLocaleTimeString());
// console.log(d.toLocaleString());

// const a = 'BTN';
// const b = 'USD, EUR';
// console.log(a.split(',')?.length);

// const countries = [
//     {
//         "name": "Chad",
//         "native": "Tchad",
//         "phone": "235",
//         "continent": "AF",
//         "capital": "N'Djamena",
//         "currency": "XAF",
//         "languages": [
//             "fr",
//             "ar"
//         ],
//         "emoji": "🇹🇩",
//         "emojiU": "U+1F1F9 U+1F1E9",
//         "countryCode": "TD"
//     },
//     {
//         "name": "Chile",
//         "native": "Chile",
//         "phone": "56",
//         "continent": "SA",
//         "capital": "Santiago",
//         "currency": "CLF,CLP",
//         "languages": [
//             "es"
//         ],
//         "emoji": "🇨🇱",
//         "emojiU": "U+1F1E8 U+1F1F1",
//         "countryCode": "CL"
//     },
//     {
//         "name": "China",
//         "native": "中国",
//         "phone": "86",
//         "continent": "AS",
//         "capital": "Beijing",
//         "currency": "CNY",
//         "languages": [
//             "zh"
//         ],
//         "emoji": "🇨🇳",
//         "emojiU": "U+1F1E8 U+1F1F3",
//         "countryCode": "CN"
//     },
// ]

// console.log(countries?.filter(c => c?.countryCode !== 'CN' && c?.countryCode !== 'CL'))
// console.log(Math.random())
// const app = { "eric": 'eric' };
// console.log(JSON.parse(JSON.parse(JSON.stringify(null))));

// let a = () => {};
// let b = (para) => {
//     console.log(para?.val);
// }
// a = b({ val: 'yay'});
// console.log(a);

// const arr = [1, 2, 3, 4]
// arr.some((val, index) => {
//     if (val === 4) {
//         console.log('i run', index);
//         return true;
//     }
//     else {
//         console.log('i run else', index);
//         return false;
//     }
// }) ;

// console.log(''.toString().toLowerCase().includes('triptax'))
// const nameof = (obj) => Object.keys(obj)[0];
// console.log(nameof({ Object }))

// const obj =  {
//     BIC: "BARCGB22111",
//     IBAN: "DE123456780974"
//   }
//   console.log(Object.entries(obj));

// const str = "{\"serviceName\":\"TRANSFERWISE\",\"type\":\"swift_code\",\"user_id\":\"9aba9a08-3ae9-4c81-a97d-677a5bcfce01\",\"amount\":0,\"totalAmount\":0,\"details\":{\"swiftCode\":\"Bukbgb22\",\"accountNumber\":\"12314564\"},\"accountHolderName\":\"undefined undefined\",\"location\":{\"latitude\":0,\"longitude\":0},\"currency\":\"EUR\"}"
// console.log(JSON.parse(str));

// const paymentDetails = {
//     accountHolderName: `${firstname} ${lastname}`,
//     amount: refundAmt,
//     currency: selectedCurrency?.currency,
//     details: detailsObj,
//     location: signupLocation,
//     serviceName: paymentMethod?.serviceName,
//     totalAmount: refundAmt,
//     type: paymentMethod.type,
//     user_id: user?.user_id,
// };

// const paymentDetails2 = {
//     accountHolderName: 'undefined undefined',
//     amount: 0,
//     currency: 'USD',
//     details: {
//       accountNumber: '12313123131',
//       address: {
//         city: 'Luanda',
//         firstLine: 'My Angolan address',
//         postCode: '5465'
//       },
//       'address.country': 'AO',
//       swiftCode: 'Bukbgb22'
//     },
//     location: { latitude: 0, longitude: 0 },
//     serviceName: 'TRANSFERWISE',
//     totalAmount: 0,
//     type: 'swift_code',
//     user_id: '9aba9a08-3ae9-4c81-a97d-677a5bcfce01'
//   }
// console.log(JSON.parse('{"accountHolderName":"Sam undefined","amount":0,"currency":"USD","details":{"swiftCode":"BUKBGB22","accountNumber":"1231321321","address":{"city":"Guam","firstLine":"Gigachad","postCode":"55646aa"}},"location":{"latitude":0,"longitude":0},"serviceName":"TRANSFERWISE","totalAmount":0,"type":"swift_code","user_id":"9aba9a08-3ae9-4c81-a97d-677a5bcfce01","currencyCountryCode":"TL","paymentMethod":"SWIFT"}'))

// const obj = { a: { c: { country: 'laa' } } }
// function index(obj, i) {
//   console.log('obj: ', obj)
//   console.log('i: ', i)
//   return obj[i];
// }

// function index(obj, is, value) {
//   if (typeof is === 'string')
//       return index(obj,is.split('.'), value);
//   else if (is.length === 1 && value!==undefined)
//       return obj[is[0]] = value;
//   else if (is.length === 0)
//       return obj;
//   else
//       return index(obj[is[0]],is.slice(1), value);
// }

// console.log(index(obj, 'a.b.etc', 123))
// console.log(obj)
// console.log('a.b.etc'.split('.').reduce(index, obj));

// console.log('a.b.etc'.split('.'))
// const arr = [ 'a', 'b', 'etc']

// var a = 'eric';
// const obj = {};
// obj[a] = ''
// console.log(obj)

// function multiIndex(obj,is) {  // obj,['1','2','3'] -> ((obj['1'])['2'])['3']
//   return is.length ? multiIndex(obj[is[0]],is.slice(1)) : obj
// }
// function pathIndex(obj,is) {   // obj,'1.2.3' -> multiIndex(obj,['1','2','3'])
//   return multiIndex(obj,is.split('.'))
// }
// pathIndex('a.b.etc')

// console.log(arr.reduce((o, i, index) => o + i, 1))

// 'a.b.etc'.split('.')
// var x = 'aslkfjkalsjfklajskfjklsajfklajsfkljaklsjfklsajfkljsaklfj'.slice(-5);
// console.log(x);
// const axios = require('axios');
// axios.get(`http://192.168.100.27:3030/502`).then((res) => {
//     // console.log(res);
//     console.log('ok');
// }).catch((err) => {
//     console.log('not ok');
//     console.log(err?.response?.request?.path)
// });

// var a = 'receipt'
// var b = 'passport'
// var req = '/passport'
// console.log(!(req.includes('passport') || req.includes('receipt')))

// var dayDiff = Math.floor((Date.parse(new Date().toISOString()) - Date.parse(new Date('2022-07-25T14:25:20Z').toISOString())) / 86400000);
// console.log(dayDiff);

// console.log(JSON.parse(null))
// const b = new RegExp('^\\d{4}$');
// console.log(b.test('0010'))

// console.log(JSON.stringify({"accountHolderName":"WEN LOONG WEN","amount":0,"currency":"EUR","details":{"number":["4242","U2FsdGVkX18sH6+UTYJrK3n3oT23/XeOAZZ/UPHTx433AUtRlbn8grx3irQI17jq"],"month":"05","year":"2027","cvv":["xxx","U2FsdGVkX19cOQcoM74LwHjrxN6GyOKly/jnq9lC+eE="]},"location":{"latitude":0,"longitude":0},"serviceName":"CHECKOUT","totalAmount":0,"type":"credit-card","user_id":"9aba9a08-3ae9-4c81-a97d-677a5bcfce01","currencyCountryCode":"FR","paymentMethod":"Credit Card"}))
// const b = { c: '' }
// const a = Object.keys(b.c.d);
// console.log(a);

// var lodashSet = require('lodash.set');
// var detailsObj = {
//     'accountNumber': '456456',
//     'address': { city: 'Sfa', firstLine: 'Sf', postCode: 'Sdf' },
//     'swiftCode': 'Bukbgb55',
//     'address.country': "AD",
//   }
// // function index(obj,i) {return obj[i]}
// // 'a.b.etc'.split('.').reduce(index, obj)
// var a = {};
// var b = null;
// if (Object.keys(detailsObj)?.includes('address.country')) {
//     console.log('ah?')
//     detailsObj = { ...detailsObj, address: lodashSet(detailsObj?.address, 'country', detailsObj['address.country'])};
//     delete detailsObj['address.country'];
// }

// // console.log({ ...detailsObj, ...b })
// console.log(detailsObj)

// var d = new Date(1660199133000)
// console.log(d.toISOString())
// const countryISOMapping = {
//     AFG: 'AF',
//     ALA: 'AX',
//     ALB: 'AL',
//     DZA: 'DZ',
//     ASM: 'AS',
//     AND: 'AD',
//     AGO: 'AO',
//     AIA: 'AI',
//     ATA: 'AQ',
//     ATG: 'AG',
//     ARG: 'AR',
//     ARM: 'AM',
//     ABW: 'AW',
//     AUS: 'AU',
//     AUT: 'AT',
//     AZE: 'AZ',
//     BHS: 'BS',
//     BHR: 'BH',
//     BGD: 'BD',
//     BRB: 'BB',
//     BLR: 'BY',
//     BEL: 'BE',
//     BLZ: 'BZ',
//     BEN: 'BJ',
//     BMU: 'BM',
//     BTN: 'BT',
//     BOL: 'BO',
//     BES: 'BQ',
//     BIH: 'BA',
//     BWA: 'BW',
//     BVT: 'BV',
//     BRA: 'BR',
//     VGB: 'VG',
//     IOT: 'IO',
//     BRN: 'BN',
//     BGR: 'BG',
//     BFA: 'BF',
//     BDI: 'BI',
//     KHM: 'KH',
//     CMR: 'CM',
//     CAN: 'CA',
//     CPV: 'CV',
//     CYM: 'KY',
//     CAF: 'CF',
//     TCD: 'TD',
//     CHL: 'CL',
//     CHN: 'CN',
//     HKG: 'HK',
//     MAC: 'MO',
//     CXR: 'CX',
//     CCK: 'CC',
//     COL: 'CO',
//     COM: 'KM',
//     COG: 'CG',
//     COD: 'CD',
//     COK: 'CK',
//     CRI: 'CR',
//     CIV: 'CI',
//     HRV: 'HR',
//     CUB: 'CU',
//     CUW: 'CW',
//     CYP: 'CY',
//     CZE: 'CZ',
//     DNK: 'DK',
//     DJI: 'DJ',
//     DMA: 'DM',
//     DOM: 'DO',
//     ECU: 'EC',
//     EGY: 'EG',
//     SLV: 'SV',
//     GNQ: 'GQ',
//     ERI: 'ER',
//     EST: 'EE',
//     ETH: 'ET',
//     FLK: 'FK',
//     FRO: 'FO',
//     FJI: 'FJ',
//     FIN: 'FI',
//     FRA: 'FR',
//     GUF: 'GF',
//     PYF: 'PF',
//     ATF: 'TF',
//     GAB: 'GA',
//     GMB: 'GM',
//     GEO: 'GE',
//     DEU: 'DE',
//     GHA: 'GH',
//     GIB: 'GI',
//     GRC: 'GR',
//     GRL: 'GL',
//     GRD: 'GD',
//     GLP: 'GP',
//     GUM: 'GU',
//     GTM: 'GT',
//     GGY: 'GG',
//     GIN: 'GN',
//     GNB: 'GW',
//     GUY: 'GY',
//     HTI: 'HT',
//     HMD: 'HM',
//     VAT: 'VA',
//     HND: 'HN',
//     HUN: 'HU',
//     ISL: 'IS',
//     IND: 'IN',
//     IDN: 'ID',
//     IRN: 'IR',
//     IRQ: 'IQ',
//     IRL: 'IE',
//     IMN: 'IM',
//     ISR: 'IL',
//     ITA: 'IT',
//     JAM: 'JM',
//     JPN: 'JP',
//     JEY: 'JE',
//     JOR: 'JO',
//     KAZ: 'KZ',
//     KEN: 'KE',
//     KIR: 'KI',
//     PRK: 'KP',
//     KOR: 'KR',
//     KWT: 'KW',
//     KGZ: 'KG',
//     LAO: 'LA',
//     LVA: 'LV',
//     LBN: 'LB',
//     LSO: 'LS',
//     LBR: 'LR',
//     LBY: 'LY',
//     LIE: 'LI',
//     LTU: 'LT',
//     LUX: 'LU',
//     MKD: 'MK',
//     MDG: 'MG',
//     MWI: 'MW',
//     MYS: 'MY',
//     MDV: 'MV',
//     MLI: 'ML',
//     MLT: 'MT',
//     MHL: 'MH',
//     MTQ: 'MQ',
//     MRT: 'MR',
//     MUS: 'MU',
//     MYT: 'YT',
//     MEX: 'MX',
//     FSM: 'FM',
//     MDA: 'MD',
//     MCO: 'MC',
//     MNG: 'MN',
//     MNE: 'ME',
//     MSR: 'MS',
//     MAR: 'MA',
//     MOZ: 'MZ',
//     MMR: 'MM',
//     NAM: 'NA',
//     NRU: 'NR',
//     NPL: 'NP',
//     NLD: 'NL',
//     ANT: 'AN',
//     NCL: 'NC',
//     NZL: 'NZ',
//     NIC: 'NI',
//     NER: 'NE',
//     NGA: 'NG',
//     NIU: 'NU',
//     NFK: 'NF',
//     MNP: 'MP',
//     NOR: 'NO',
//     OMN: 'OM',
//     PAK: 'PK',
//     PLW: 'PW',
//     PSE: 'PS',
//     PAN: 'PA',
//     PNG: 'PG',
//     PRY: 'PY',
//     PER: 'PE',
//     PHL: 'PH',
//     PCN: 'PN',
//     POL: 'PL',
//     PRT: 'PT',
//     PRI: 'PR',
//     QAT: 'QA',
//     REU: 'RE',
//     ROU: 'RO',
//     RUS: 'RU',
//     RWA: 'RW',
//     BLM: 'BL',
//     SHN: 'SH',
//     KNA: 'KN',
//     LCA: 'LC',
//     MAF: 'MF',
//     SPM: 'PM',
//     VCT: 'VC',
//     WSM: 'WS',
//     SMR: 'SM',
//     STP: 'ST',
//     SAU: 'SA',
//     SEN: 'SN',
//     SRB: 'RS',
//     SYC: 'SC',
//     SLE: 'SL',
//     SGP: 'SG',
//     SXM: 'SX',
//     SVK: 'SK',
//     SVN: 'SI',
//     SLB: 'SB',
//     SOM: 'SO',
//     ZAF: 'ZA',
//     SGS: 'GS',
//     SSD: 'SS',
//     ESP: 'ES',
//     LKA: 'LK',
//     SDN: 'SD',
//     SUR: 'SR',
//     SJM: 'SJ',
//     SWZ: 'SZ',
//     SWE: 'SE',
//     CHE: 'CH',
//     SYR: 'SY',
//     TWN: 'TW',
//     TJK: 'TJ',
//     TZA: 'TZ',
//     THA: 'TH',
//     TLS: 'TL',
//     TGO: 'TG',
//     TKL: 'TK',
//     TON: 'TO',
//     TTO: 'TT',
//     TUN: 'TN',
//     TUR: 'TR',
//     TKM: 'TM',
//     TCA: 'TC',
//     TUV: 'TV',
//     UGA: 'UG',
//     UKR: 'UA',
//     ARE: 'AE',
//     GBR: 'GB',
//     USA: 'US',
//     UMI: 'UM',
//     URY: 'UY',
//     UZB: 'UZ',
//     VUT: 'VU',
//     VEN: 'VE',
//     VNM: 'VN',
//     VIR: 'VI',
//     WLF: 'WF',
//     ESH: 'EH',
//     YEM: 'YE',
//     ZMB: 'ZM',
//     ZWE: 'ZW',
//     XKX: 'XK',
// };

// const swapKeyValue = (json) => {
//     const ret = {};
//     /* eslint-disable */
//     for (const key in json) {
//         ret[json[key]] = key;
//     }
//     return ret;
// };

// const getCountryISO2 = (countryCode) => countryISOMapping[countryCode];
// const getCountryISO3 = (countryCode) => swapKeyValue(countryISOMapping)[countryCode];

// console.log(getCountryISO2('FRA'))

// window.navigator.geolocation.getCurrentPosition((pos) => console.log(pos))
// var x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }

// const removeScpecialChars = function (text) {
  //     var regex = /([\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]+)/g;
  //     return text.match(regex).join(" ");
  // };
  
  // console.log(removeScpecialChars('Düsseldorf, Köln, Москва, 北京市, إسرائيل !@#$'));
  
  // console.log('mimi niko mimi siko'.replace('mimi', ''))
  // console.log(['FR', 'MC'].includes('MC'));
  // const d = new Date('2022-09-06T08:34:32.346Z');
  // if (moment('').isValid()) console.log(d.toISOString())
  // else console.log('not a date');
  
  // const iso = 'ISO3166A2;ISO3166A3;ISO3166N3;FIPS104;ISOen_name;ISOen_proper;ISOen_ro_name;ISOen_ro_proper;ISOfr_name;ISOfr_proper;ISOes_name;UNGEGNen_name;UNGEGNen_longname;UNGEGNfr_name;UNGEGNfr_longname;UNGEGNes_name;UNGEGNes_longname;UNGEGNru_name;UNGEGNru_longname;UNGEGNlc_ro_name;UNGEGNlc_ro_longname;BGN_name;BGN_proper;BGN_longname;BGNlc_longname;BGNlc_name;PCGN_name;PCGN_proper;PCGN_longname;FAOit_name;FAOit_proper;FAOit_longname;EKI_name;EKI_longname;conabbr;HasCapital;BGN_capital;UNGEGNlc_capital;UNen_capital;UNfr_capital;UNes_capital;UNru_capital;EKI_capital;BGNc_latitude;BGNc_longitude;UNc_latitude;UNc_longitude;continent;subcontinent;ISOregion;ISOsubregion;language;population;year;BGN_demonym;BGN_demomyn_adj;ITU;IVC;land;water;land_total;latitude;longitude;maxlatitude;minlatitude;maxlongitude;minlongitude;url_gov;url_stats;url_gis;url_post';
  // const ke = 'KE; KEN; 404; KE; Kenya; Kenya; Kenya; Kenya; Kenya; Kenya; Kenya; Kenya; the Republic of Kenya; Kenya (le); la République du Kenya; Kenya; la República de Kenya; Кения; Республика Кения; Kenya; the Republic of Kenya[en]/Jamhuri ya Kenya[sw]; Kenya; Kenya; Republic of Kenya; Kenya; Republic of Kenya[en]/Jamhuri ya Kenya[sw]; Kenya; Kenya; Republic of Kenya; Kenya; Kenya; Repubblica del Kenya; Kenya/Keenia; Kenya Vabariik; ; 1; Nairobi; Nairobi; Nairobi; Nairobi; Nairobi; Найроби; Nairobi; -1.28333333333; 36.8166666667; -1.25; 36.89; AF; ; 2; 14; en,sw; 43013341; 2012; Kenyan(s); Kenyan; 254; EAK; 569140; 11227; 580367; 1; 38; 4.63; -4.68; 41.9; 33.9; kenya.go.ke; knbs.or.ke; ; posta.co.ke'
  // const arr = [];
  // console.log();
  // ke.split(';').forEach((el, i) => arr.push({ [i]: el }));
  // console.log(arr);
  
  // var arr = [1, 2, 3, 4, 5, 6, 7].some(x => {
  //     console.log(x);
  //     if (x === 4) {
  //         return true;
  //     }
  //     return false;
  // });
  // console.log(arr);
  
  // var x = '';
  
  // if (x) console.log('is x');
  // else console.log('nope nada');
  
  // const file1 = 'users/9aba9a08-3ae9-4c81-a97d-677a5bcfce01/receipt/2022-08-27-b3ebf705-dee3-45ac-9e63-a6ba99b70518.pdf'
  // const file2 = 'users/9aba9a08-3ae9-4c81-a97d-677a5bcfce01/receipt-old/2022-08-27-b3ebf705-dee3-45ac-9e63-a6ba99b70518.pdf/1.pdf'
  
  // // const file2Name = path.parse(file2).name; // WORKS 1
  // const file2Ext = path.parse(file2).ext;
  // const file2Name = file2.replace(/\.[^/.]+$/, '');
  // // console.log(file2Name);
  // // console.log(file2Name.substring('old'.length, file2Name.length - 1)); // WORKS 1
  // // console.log(file2.substring((file2.indexOf('/receipt/') + '/receipt/'.length), file2.length - 1));
  // // console.log(file2.substring(0, (file2.indexOf('/receipt/') + '/receipt/'.length)));
  // // console.log(file2Name.match(new RegExp('old\\d'))[0]);
  // // console.log(file2Name.replace('/receipt', '/receipt-old'));
  // console.log(file2Ext);
  // console.log(new Date('Thu Sep 22 2022 09:40:43 GMT+0300 (East Africa Time)').toISOString());
  
  // const a = 'users/ee2aa039-90b5-443f-9fdc-98837452ea20/Invoices/TT0000000000811.pdf'
  // console.log()
  // fs.readdir('./src/invoices', (err, files) => {
  //     // console.log(files);
  //     files.forEach(file => {
  //         const refs = file.split('-');
  //         const transactionId = refs[1].split('.')[0]
  //         console.log('transacId: ', transactionId, 'seq: ', refs[0]);
  //     })
  // })
  
  // const a = "https://triptax-prod.s3.eu-west-3.amazonaws.com/users/eeb7a285-5c03-49cb-8f4a-eac6768a40d7/receipt/1661583450874.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVUI2YP53YAHYTAYQ%2F20220929%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20220929T171126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMyJHMEUCIBi64VbbBR346KHt%2B6BSx7PGyU0R65kvx3uQFR6ayfoaAiEAxU6kIk3fa0vp0wULfuClL6kid3Saeww%2FNK7uN6AWXrUqnwMIShACGgwzODcxNDAwNTg5OTkiDBg0GovyoNxgRvtb5Cr8Ar4xFdd%2FMziVJz15kayClCpk3p%2BDcn3Q9RT%2BlQMwcngs4M6Uv%2BzbAkXhLNhNy65uEpO%2FKA8mh4w2h23QuaxKyVrFFp84dStAxVOs3xoeUeNc8HwtNi9pjB%2FiIXZy3H5PCB8i8hKVlbzCi1%2FuvDV51lJI786rDv%2FBGTT37WLJzJzHoCgUBNXN0AjQ%2F80FvgW4PdyCzE3qxUqaVgtmuLc9kSdXAZtG%2FSJmmmQMo2WRHR6Cnpw47an2xQHxJ1lF9VeZy7vFs30NMfMe9rL%2FxIWMBBB%2FPJNQ8IcfV6EZZ9%2FSGbjy279vWmY%2FiC70G2IIyRuQ%2BODP9VWyZcPmJOUQmnuD0N%2Bsh2%2BNlduoq%2FkPw3ZdhVO3fxaOKAI24peCM8lXrHCu2kfC%2FGs7YPtDjfQsyyGW7P7QhLjDmlfcnsC6ZxtU1sGaVStL3WKWBxXvZVP6F1PiKJ40Swisv9ieGpckK32Q%2FXsVFHrbCZSZzcHH%2FIGDjdE7uX3O7AS1yNt63EJeMJSX15kGOp0Ba2pkfuxuvA2YnFvo5uNX7qgtng8aksuCYHYQipu1dpV6fLQUEQd6M7VvhjHFO3Ii8Q55G%2Fm2X44f3rVuWuCz9bw%2B3BcDY9Kha1jt1IwethCI715H8A0uWK7MjqTsMHibj6jBmWzksV7V4KeAEVtlO3sLQ%2Fg7DOjJwLysgPFCsNOLp3uBLCgDdFV1VdbpLvN%2Bwq6dF8rnx4uSh1FbCw%3D%3D&X-Amz-Signature=be27aeaa69fb7183c0a4daa578876ba0083dde871bf4d98b4e65213da7f034e9&X-Amz-SignedHeaders=host"
  // console.log(a.substring(a.indexOf('users/'), a.indexOf('?')))
  
  // console.log(((1664529853725 - 60000 )> Date.now()))
  // console.log(new Date(1664529853725))
  // const REFUND_STATUS = {
  //     PENDING_ADMIN_CHECK: 'PENDING_ADMIN_CHECK',
  //     PENDING_VERIFY_COUNTRY: 'PENDING_VERIFY_COUNTRY',
  //     APPLICATION_CREATED: 'APPLICATION_CREATED',
  //     PENDING_TAXFORM_UPLOAD: 'PENDING_TAXFORM_UPLOAD',
  //     PENDING_PABLO_SCAN: 'PENDING_PABLO_SCAN',
  //     PENDING_PHYSICAL_TAXFORM: 'PENDING_PHYSICAL_TAXFORM',
  //     WAITING_DEPARTURE_EU: 'WAITING_DEPARTURE_EU',
  //     PAYMENT_READY: 'PAYMENT_READY',
  //     PAYMENT_SENT: 'PAYMENT_SENT',
  //     PENDING_CANCEL: 'PENDING_CANCEL',
  //     CANCELED: 'CANCELED',
  //     REJECTED: 'REJECTED'
  //   }
  // console.log({...Object.values(REFUND_STATUS)})
  // var moment1 = moment('10/06/22', 'MM/DD/YYYY');
  // var moment2 = moment();
  // console.log( moment1.isSame(moment2, 'day') ); // true
  // console.log( moment1.isSame(moment2, 'date') ); // true
  
  // console.log(1665568545 < (new Date().getTime() + 1) / 1000)
  // console.log(new Date(1668061571000));
  // axios({
  //   method: "get",
  //   url: "https://api.transferwise.com/v1/account-requirements/",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer 255578ed-8648-412e-a1f9-0b5836432863",
  //   },
  //   params: {
  //     source: "EUR",
  //     target: "SGD",
  //     sourceAmount: 0,
  //   },
  // }).then(res => console.log('success', res.data)).catch(e => console.log(e));
  
  // axios({
  //   method: "get",
  //   url: "https://api-uat.trip.tax:3000/uat/api/v1/translations/en",
  //   headers: {},
  // }).then(res => console.log('success', res)).catch(e => console.log('err', e));
  
  // const b = { statuss: 'verified'}
  // console.log(b.status && b?.status === 'verified')
  // const data = {
  //   // client_id: 'ack_kyj62jr77xeejhq6lldsqwvfbm',
  //   // client_secret: 'I3QO8J3qzKLYLY6WDzdTBbZbj2XT9_i1lB5OX1TdwUzZAnNqQF4Cz7QltbZAPJK0Je_JLYbgTav1Kkvtc0XRXg',
  //   grant_type: 'client_credentials',
  //   scope: 'gateway'
  // };
  // console.log(qs.stringify(data));
  
  // import { Checkout } from 'checkout-sdk-node';
  // const ACCESS_KEY = 'ack_kyj62jr77xeejhq6lldsqwvfbm'
  // const ACCESS_SECRET = 'I3QO8J3qzKLYLY6WDzdTBbZbj2XT9_i1lB5OX1TdwUzZAnNqQF4Cz7QltbZAPJK0Je_JLYbgTav1Kkvtc0XRXg'
  
  // let cko = new Checkout(ACCESS_SECRET, {
  // 	client: ACCESS_KEY,
  // 	scope: ['fx'], // array of scopes
  // 	// environment: 'sandbox', // or "production"
  // });
  
  // let forex = await cko.forex.request({
  //   source_currency: 'EUR',
  //   source_amount: '100',
  //   destination_currency: 'USD',
  // });
  // console.log(forex);
  
  // const arr = [7,4,1,9,13,6,5,9];
  // arr.sort((a, b) => {
  //   if (a < b) return -1;
  //   if (a > b) return 1;
  //   return 0;
  // })
  // console.log(arr);
  
  // const uat = {
  //   "_id": "FR0000000000906",
  //   "shop": [
  //     {
  //       "$oid": "610e428cd026ec0008998ba2"
  //     },
  //     {
  //       "$oid": "610e428cd026ec0008998ba2"
  //     },
  //     {
  //       "$oid": "610e428cd026ec0008998ba2"
  //     },
  //     {
  //       "$oid": "610e428cd026ec0008998ba2"
  //     },
  //     {
  //       "$oid": "610e428cd026ec0008998ba2"
  //     },
  //     {
  //       "$oid": "610e428cd026ec0008998ba2"
  //     }
  //   ],
  //   "receipt_img": [
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/3231c27d-a67e-4053-896c-8c50001463f5.jpg",
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/3231c27d-a67e-4053-896c-8c50001463f5.jpg",
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/3231c27d-a67e-4053-896c-8c50001463f5.jpg",
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/3231c27d-a67e-4053-896c-8c50001463f5.jpg",
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/3231c27d-a67e-4053-896c-8c50001463f5.jpg",
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/3231c27d-a67e-4053-896c-8c50001463f5.jpg"
  //   ],
  //   "receipt_signed_pdf": [
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/2023-02-24-27e94727-d98e-4060-80c8-f8ca2f65fe49.pdf",
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/2023-02-24-74c42caa-7bf3-432b-8a1a-f5b926737db2.pdf",
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/2023-02-24-78f1b91e-23c4-4afc-b2bc-78c3d8d1ae64.pdf",
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/2023-02-24-98361cc7-04b3-41be-aa59-df5265d1c064.pdf",
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/2023-02-24-dfd225c7-b296-4021-af62-8a5212a4b4a2.pdf",
  //     "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/2023-02-24-e3904cda-c358-4ce8-92ef-f44a12798251.pdf"
  //   ],
  //   "user_id": "5ca4152a-8958-47b5-bcce-2cdf7be50bf7",
  //   "signature_img": "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/signature/6ce96ec1-deef-450e-b4f3-520e550e50d1.jpg",
  //   "passport_img": "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/passport/9cd5f836-a73e-4526-a9c0-c8dd14f1e46b.jpg",
  //   "isFaceScanFailed": false,
  //   "isPassportScanFailed": false,
  //   "status": "BVE_CREATION_SUCCESS",
  //   "traveler": {
  //     "address": "test140",
  //     "passport": "05CK02237",
  //     "nationality": "FR",
  //     "date_expiration_passport": "26/07/2025",
  //     "date_of_birth": "01/02/1972",
  //     "last_name": "LAPIERRE",
  //     "first_name": "David Bernard ",
  //     "pays_residence": "SG",
  //     "email": "eric+test140@triptax.com"
  //   },
  //   "merchant": {
  //     "website": "www.triptax.com",
  //     "identification": "39251085500027",
  //     "address": "128 Rue La Boetie 75008 Paris",
  //     "loyalty_code": "N/A",
  //     "name": "TRIPTAX FRANCE",
  //     "identification_type": "1",
  //     "operator_email": "operateur@fr.trip.tax",
  //     "email": "shop@fr.trip.tax"
  //   },
  //   "merchandises": [
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7c1"
  //       },
  //       "shop_id": "27e94727-d98e-4060-80c8-f8ca2f65fe49",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "23026684",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD NAIF",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7c2"
  //       },
  //       "shop_id": "27e94727-d98e-4060-80c8-f8ca2f65fe49",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "23990445",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7c3"
  //       },
  //       "shop_id": "27e94727-d98e-4060-80c8-f8ca2f65fe49",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "RAD8DLU2NZ14DFBH2",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD P FI",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7c4"
  //       },
  //       "shop_id": "27e94727-d98e-4060-80c8-f8ca2f65fe49",
  //       "TTC_amount": 29.99,
  //       "quantity": 1,
  //       "identification_number": "23067036",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 5,
  //       "description": "TOP ORANGINA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7c5"
  //       },
  //       "shop_id": "27e94727-d98e-4060-80c8-f8ca2f65fe49",
  //       "TTC_amount": 49.99,
  //       "quantity": 1,
  //       "identification_number": "21083640",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 8.33,
  //       "description": "ROBE DUSTY",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7c6"
  //       },
  //       "shop_id": "27e94727-d98e-4060-80c8-f8ca2f65fe49",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "MUH4W0VX23SICOKIQ",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7c7"
  //       },
  //       "shop_id": "74c42caa-7bf3-432b-8a1a-f5b926737db2",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "23026684",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD NAIF",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7c8"
  //       },
  //       "shop_id": "74c42caa-7bf3-432b-8a1a-f5b926737db2",
  //       "TTC_amount": 29.99,
  //       "quantity": 1,
  //       "identification_number": "23067036",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 5,
  //       "description": "TOP ORANGINA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7c9"
  //       },
  //       "shop_id": "74c42caa-7bf3-432b-8a1a-f5b926737db2",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "LL56CQ3QSCNNUA3U9",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD P FI",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7ca"
  //       },
  //       "shop_id": "74c42caa-7bf3-432b-8a1a-f5b926737db2",
  //       "TTC_amount": 49.99,
  //       "quantity": 1,
  //       "identification_number": "21083640",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 8.33,
  //       "description": "ROBE DUSTY",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7cb"
  //       },
  //       "shop_id": "74c42caa-7bf3-432b-8a1a-f5b926737db2",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "23990445",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7cc"
  //       },
  //       "shop_id": "74c42caa-7bf3-432b-8a1a-f5b926737db2",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "70PFW7YJ9P0U95DIY",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7cd"
  //       },
  //       "shop_id": "78f1b91e-23c4-4afc-b2bc-78c3d8d1ae64",
  //       "TTC_amount": 29.99,
  //       "quantity": 1,
  //       "identification_number": "23067036",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 5,
  //       "description": "TOP ORANGINA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7ce"
  //       },
  //       "shop_id": "78f1b91e-23c4-4afc-b2bc-78c3d8d1ae64",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "23026684",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD NAIF",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7cf"
  //       },
  //       "shop_id": "78f1b91e-23c4-4afc-b2bc-78c3d8d1ae64",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "23990445",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7d0"
  //       },
  //       "shop_id": "78f1b91e-23c4-4afc-b2bc-78c3d8d1ae64",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "3FPN94WACS5C130D0",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD P FI",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7d1"
  //       },
  //       "shop_id": "78f1b91e-23c4-4afc-b2bc-78c3d8d1ae64",
  //       "TTC_amount": 49.99,
  //       "quantity": 1,
  //       "identification_number": "21083640",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 8.33,
  //       "description": "ROBE DUSTY",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7d2"
  //       },
  //       "shop_id": "78f1b91e-23c4-4afc-b2bc-78c3d8d1ae64",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "BS24GQNXX5F9Q82O7",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7d3"
  //       },
  //       "shop_id": "98361cc7-04b3-41be-aa59-df5265d1c064",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "23990445",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7d4"
  //       },
  //       "shop_id": "98361cc7-04b3-41be-aa59-df5265d1c064",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "ZA92EOO1CT6GA7IUJ",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7d5"
  //       },
  //       "shop_id": "98361cc7-04b3-41be-aa59-df5265d1c064",
  //       "TTC_amount": 29.99,
  //       "quantity": 1,
  //       "identification_number": "23067036",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 5,
  //       "description": "TOP ORANGINA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7d6"
  //       },
  //       "shop_id": "98361cc7-04b3-41be-aa59-df5265d1c064",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "23026684",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD NAIF",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7d7"
  //       },
  //       "shop_id": "98361cc7-04b3-41be-aa59-df5265d1c064",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "IGP0VVFLJ8VGR9H0Q",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD P FI",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7d8"
  //       },
  //       "shop_id": "98361cc7-04b3-41be-aa59-df5265d1c064",
  //       "TTC_amount": 49.99,
  //       "quantity": 1,
  //       "identification_number": "21083640",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 8.33,
  //       "description": "ROBE DUSTY",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7d9"
  //       },
  //       "shop_id": "dfd225c7-b296-4021-af62-8a5212a4b4a2",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "23990445",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7da"
  //       },
  //       "shop_id": "dfd225c7-b296-4021-af62-8a5212a4b4a2",
  //       "TTC_amount": 49.99,
  //       "quantity": 1,
  //       "identification_number": "21083640",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 8.33,
  //       "description": "ROBE DUSTY",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7db"
  //       },
  //       "shop_id": "dfd225c7-b296-4021-af62-8a5212a4b4a2",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "UDS2OL66NVGVHGSOQ",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7dc"
  //       },
  //       "shop_id": "dfd225c7-b296-4021-af62-8a5212a4b4a2",
  //       "TTC_amount": 29.99,
  //       "quantity": 1,
  //       "identification_number": "23067036",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 5,
  //       "description": "TOP ORANGINA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7dd"
  //       },
  //       "shop_id": "dfd225c7-b296-4021-af62-8a5212a4b4a2",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "X312C0907PNI76JUX",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD P FI",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7de"
  //       },
  //       "shop_id": "dfd225c7-b296-4021-af62-8a5212a4b4a2",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "23026684",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD NAIF",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7df"
  //       },
  //       "shop_id": "e3904cda-c358-4ce8-92ef-f44a12798251",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "23026684",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD NAIF",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7e0"
  //       },
  //       "shop_id": "e3904cda-c358-4ce8-92ef-f44a12798251",
  //       "TTC_amount": 29.99,
  //       "quantity": 1,
  //       "identification_number": "23067036",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 5,
  //       "description": "TOP ORANGINA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7e1"
  //       },
  //       "shop_id": "e3904cda-c358-4ce8-92ef-f44a12798251",
  //       "TTC_amount": 49.99,
  //       "quantity": 1,
  //       "identification_number": "21083640",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 8.33,
  //       "description": "ROBE DUSTY",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7e2"
  //       },
  //       "shop_id": "e3904cda-c358-4ce8-92ef-f44a12798251",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "FK41RTOPROEAZY6QM",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7e3"
  //       },
  //       "shop_id": "e3904cda-c358-4ce8-92ef-f44a12798251",
  //       "TTC_amount": 19.99,
  //       "quantity": 1,
  //       "identification_number": "23990445",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3.33,
  //       "description": "PANTALON COLA",
  //       "product_code": "54"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "63f8bbe10d3d720008ade7e4"
  //       },
  //       "shop_id": "e3904cda-c358-4ce8-92ef-f44a12798251",
  //       "TTC_amount": 12.99,
  //       "quantity": 1,
  //       "identification_number": "1HARIOBAHPG89ZF13",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 2.16,
  //       "description": "FOULARD P FI",
  //       "product_code": "54"
  //     }
  //   ],
  //   "total_VAT": 145.86,
  //   "total_TTC": 875.64,
  //   "refund_rate": 0.75,
  //   "refund_amount": 109.39,
  //   "exit_by": "Air",
  //   "exit_point": "Roissy-Charles de Gaulle",
  //   "exit_point_code": "0",
  //   "total_stores": 6,
  //   "payment_method": "1",
  //   "payment_detail": "other",
  //   "refund_method": "1",
  //   "refund_detail": "other",
  //   "refund_type": "INTERNATIONAL FRANCE",
  //   "originCountryCode": "SG",
  //   "countryCode": "FR",
  //   "transactionId": "FR0000000000906",
  //   "PK": "USER#5ca4152a-8958-47b5-bcce-2cdf7be50bf7",
  //   "SK": "TRAN#FR0000000000906",
  //   "date_issued": "2023-02-24T14:29:30.873+01:00",
  //   "BVE_id": "38NRLWO0NEYW6NCO71PZJJO",
  //   "refund_status": "PENDING_PABLO_SCAN",
  //   "createdAt": "2023-02-24T13:29:32Z",
  //   "updatedAt": "2023-02-24T13:30:08Z",
  //   "commission_amount": 36,
  //   "__v": 0,
  //   "invoice_thumbnail_url": "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/Invoices/FR0000000000906.jpeg",
  //   "invoice_url": "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/Invoices/FR0000000000906.pdf",
  //   "invoicedAt": "2023-02-24T13:29:47.718Z",
  //   "barcode_img": "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/BVEs/38NRLWO0NEYW6NCO71PZJJO/BVE_barcode.png",
  //   "bveFormCreatedAt": "2023-02-24T13:29:44Z",
  //   "bve_form_thumbnail_url": "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/BVE Forms/38NRLWO0NEYW6NCO71PZJJO.jpeg",
  //   "bve_form_url": "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/BVE Forms/38NRLWO0NEYW6NCO71PZJJO.pdf"
  // }
  // const prod = {
  //   "_id": "FR0000000001011",
  //   "shop": [
  //     {
  //       "$oid": "61c318b7989ab2000815d25c"
  //     },
  //     {
  //       "$oid": "61c318b7989ab2000815d25c"
  //     },
  //     {
  //       "$oid": "61c319f4989ab2000815d263"
  //     },
  //     {
  //       "$oid": "61c333b2c8b1a20009d63d16"
  //     },
  //     {
  //       "$oid": "61c318b7989ab2000815d25c"
  //     },
  //     {
  //       "$oid": "61c31942989ab2000815d25f"
  //     },
  //     {
  //       "$oid": "61c31a51989ab2000815d265"
  //     },
  //     {
  //       "$oid": "61c333b2c8b1a20009d63d16"
  //     }
  //   ],
  //   "receipt_img": [
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/1640175830185.jpeg",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/1640175742232.jpeg",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/1640176083859.jpeg",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/1640182665104.jpeg",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/1640176019849.jpeg",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/1640175958475.jpeg",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/1640176139917.jpeg",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/1640182836193.jpeg"
  //   ],
  //   "receipt_signed_pdf": [
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/2021-12-22-0a0e88a6-4d0b-43a5-a857-b5915c9fe001.pdf",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/2021-12-22-57e699bb-4a2c-4f8b-8e71-92b6605fc4d0.pdf",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/2021-12-22-b086510e-c8ef-499a-b9c0-438eae4d4920.pdf",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/2021-12-22-a4d36440-98bc-46e8-b070-d7bca0081009.pdf",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/2021-12-22-014fc846-6554-46f7-b8a1-e0a7e0fe5109.pdf",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/2021-12-22-16765cc9-14b7-44ba-8005-35b419d47766.pdf",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/2021-12-22-5ad565e2-1506-4d10-886b-e6684b60340d.pdf",
  //     "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/2021-12-22-d6acf395-cb4e-4566-9f8e-d94e647b7280.pdf"
  //   ],
  //   "user_id": "2f517dea-2abd-40c1-88d8-96ada3f21eac",
  //   "refund_amount": 405.94,
  //   "refund_rate": 0.75,
  //   "total_VAT": 541.25,
  //   "total_TTC": 3247.54,
  //   "face_scanned_img": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/face/1640190568401.jpeg",
  //   "passport_img": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/passport/1640109864358.jpeg",
  //   "isFaceScanFailed": false,
  //   "isPassportScanFailed": false,
  //   "exit_by": "Air",
  //   "exit_point": "Marseille-Provence",
  //   "signature_img": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/signature/1640175258991.jpeg",
  //   "traveler": {
  //     "address": "21a lengkong dua",
  //     "passport": "20FV13944",
  //     "nationality": "FR",
  //     "date_expiration_passport": "09/06/2031",
  //     "date_of_birth": "08/10/1980",
  //     "last_name": "LEGA",
  //     "first_name": "ALEXANDRE JEAN DAMIEN",
  //     "pays_residence": "SG",
  //     "email": "alex.lega.sg@gmail.com"
  //   },
  //   "merchandises": [
  //     {
  //       "_id": {
  //         "$oid": "6335756a9030ad0009295082"
  //       },
  //       "shop_id": "014fc846-6554-46f7-b8a1-e0a7e0fe5109",
  //       "TTC_amount": 319.9,
  //       "quantity": 1,
  //       "identification_number": "B01C3SCKTO",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 53.32,
  //       "description": "Sigma Objectif 30 mm F1.4 DC ON Contemporary - Monture Micro 4/3",
  //       "product_code": "59"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "6335756a9030ad0009295083"
  //       },
  //       "shop_id": "0a0e88a6-4d0b-43a5-a857-b5915c9fe001",
  //       "TTC_amount": 2167.5,
  //       "quantity": 1,
  //       "identification_number": "B096MSRNTY",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 361.25,
  //       "description": "Panasonic Lumix GHSM2L Appareil photo Hybride Expert Objectif Panasonic Leica 12-6mm (Capteur 4/3 20.3MP, Double stab.. CAK 60p 4:2:2 10bit, Live Stream, Tropicalise) Noir - Version Française",
  //       "product_code": "60"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "6335756a9030ad0009295084"
  //       },
  //       "shop_id": "16765cc9-14b7-44ba-8005-35b419d47766",
  //       "TTC_amount": 6.9,
  //       "quantity": 1,
  //       "identification_number": "B01M3U10",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 1.15,
  //       "description": "52-77 Step UP Bague D'ADAPTATION pour objectif 52MM vers Fire 77MM Adaptateur 52 mm 77 mm 100% Metal Step up Adaptation Compatible Toutes Marques",
  //       "product_code": "59"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "6335756a9030ad0009295085"
  //       },
  //       "shop_id": "57e699bb-4a2c-4f8b-8e71-92b6605fc4d0",
  //       "TTC_amount": 56.44,
  //       "quantity": 1,
  //       "identification_number": "B07T1621YR",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 9.41,
  //       "description": "Carte Lexar Professional 1667 258 Go SDXC UHS",
  //       "product_code": "59"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "6335756a9030ad0009295086"
  //       },
  //       "shop_id": "5ad565e2-1506-4d10-886b-e6684b60340d",
  //       "TTC_amount": 261.8,
  //       "quantity": 1,
  //       "identification_number": "5712850548415",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 43.63,
  //       "description": "Gudsen - Moza AirCross 2 Professionnel",
  //       "product_code": "59"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "6335756a9030ad0009295087"
  //       },
  //       "shop_id": "a4d36440-98bc-46e8-b070-d7bca0081009",
  //       "TTC_amount": 18.03,
  //       "quantity": 1,
  //       "identification_number": "BOKKIUSZ",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 3,
  //       "description": "PEDEA DSLR-Sac photo Fashion Sac photo pour Appareils Photo Reflex avec Protection étanche à la Pluie Bandoulière et Compartiments pour Accessoires, Argent, XL",
  //       "product_code": "59"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "6335756a9030ad0009295088"
  //       },
  //       "shop_id": "b086510e-c8ef-499a-b9c0-438eae4d4920",
  //       "TTC_amount": 389,
  //       "quantity": 1,
  //       "identification_number": "H212",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 64.83,
  //       "description": "Système de filtres magnétiques VND 77mm Freewell Réductions",
  //       "product_code": "59"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "6335756a9030ad0009295089"
  //       },
  //       "shop_id": "d6acf395-cb4e-4566-9f8e-d94e647b7280",
  //       "TTC_amount": 7.15,
  //       "quantity": 1,
  //       "identification_number": "BOOXNMWZKO",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 1.19,
  //       "description": "Amazon Basics Fitre de protection LV - 60mm",
  //       "product_code": "59"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "6335756a9030ad000929508a"
  //       },
  //       "shop_id": "d6acf395-cb4e-4566-9f8e-d94e647b7280",
  //       "TTC_amount": 11.18,
  //       "quantity": 1,
  //       "identification_number": "BOXNMXAEG",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 1.86,
  //       "description": "Amazon Basics Fibre de protection UV - 67mm",
  //       "product_code": "59"
  //     },
  //     {
  //       "_id": {
  //         "$oid": "6335756a9030ad000929508b"
  //       },
  //       "shop_id": "d6acf395-cb4e-4566-9f8e-d94e647b7280",
  //       "TTC_amount": 9.64,
  //       "quantity": 1,
  //       "identification_number": "BOOXNWCFB",
  //       "VAT_rate": 0.2,
  //       "VAT_amount": 1.61,
  //       "description": "Amazon Basics Filtre de protection UV-52mm",
  //       "product_code": "59"
  //     }
  //   ],
  //   "exit_point_code": "4",
  //   "total_stores": 8,
  //   "payment_method": "1",
  //   "payment_detail": "other",
  //   "refund_method": "1",
  //   "refund_detail": "other",
  //   "merchant": {
  //     "website": "www.triptax.com",
  //     "identification": "39251085500027",
  //     "address": "128 Rue La Boetie 75008 Paris",
  //     "loyalty_code": "N/A",
  //     "name": "TRIPTAX FRANCE",
  //     "identification_type": "1",
  //     "operator_email": "operateur@fr.trip.tax",
  //     "email": "shop@fr.trip.tax"
  //   },
  //   "refund_type": "INTERNATIONAL FRANCE",
  //   "originCountryCode": "SG",
  //   "countryCode": "FR",
  //   "transactionId": "FR0000000001011",
  //   "PK": "USER#2f517dea-2abd-40c1-88d8-96ada3f21eac",
  //   "SK": "TRAN#FR0000000001011",
  //   "date_issued": "2021-12-22T17:30:05.292+01:00",
  //   "BVE_id": "3895DGPE9T58YWFRGHN7PBJ",
  //   "refund_status": "PAYMENT_SENT",
  //   "status": "BVE_CLEARANCE_SUCCESS",
  //   "createdAt": "2021-12-22T16:30:05Z",
  //   "updatedAt": "2022-09-29T10:37:26Z",
  //   "commission_amount": 135,
  //   "__v": 0,
  //   "invoice_thumbnail_url": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/Invoices/FR0000000001011.jpeg",
  //   "invoice_url": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/Invoices/FR0000000001011.pdf",
  //   "invoicedAt": "2021-12-22T16:30:16.764Z",
  //   "barcode_img": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/BVEs/3895DGPE9T58YWFRGHN7PBJ/BVE_barcode.png",
  //   "bveFormCreatedAt": "2021-12-22T16:30:14Z",
  //   "bve_form_thumbnail_url": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/BVE Forms/3895DGPE9T58YWFRGHN7PBJ.jpeg",
  //   "bve_form_url": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/BVE Forms/3895DGPE9T58YWFRGHN7PBJ.pdf",
  //   "pabloConfirmedAt": "2021-12-28T23:46:53Z",
  //   "paymentRequestedAt": "2021-12-31T05:48:42Z",
  //   "paymentId": "a5013bc4-d3e8-4a4e-a79a-63b320b7864e",
  //   "paymentSentAt": "2022-01-03T07:49:13.903Z"
  // }
  
  // const uatShopping = {
  //   "_id": "74c42caa-7bf3-432b-8a1a-f5b926737db2",
  //   "PK": "USER#5ca4152a-8958-47b5-bcce-2cdf7be50bf7",
  //   "SK": "SHOP#74c42caa-7bf3-432b-8a1a-f5b926737db2",
  //   "shop_id": "74c42caa-7bf3-432b-8a1a-f5b926737db2",
  //   "user_id": "5ca4152a-8958-47b5-bcce-2cdf7be50bf7",
  //   "receipt_number": "",
  //   "dateIssued": "2023-02-23T12:26:38.294Z",
  //   "shop_name": "Mango France",
  //   "shop_address": "Rue la Fayette Paris France",
  //   "shop_contact_number": "0328364478",
  //   "location": {
  //     "country": "France",
  //     "city": "Paris",
  //     "postalCode": "75009",
  //     "isoCountryCode": "FR",
  //     "name": "Mango France",
  //     "lat": "48.874907",
  //     "long": "2.339817"
  //   },
  //   "currency": "EUR",
  //   "face_img": "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/face/73b99bdf-7a1c-4570-8813-9a49c5c4abb1.jpg",
  //   "receipt_img": "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/3231c27d-a67e-4053-896c-8c50001463f5.jpg",
  //   "VAT_rate": 0.2,
  //   "VAT_amount": 24.31,
  //   "total_incl_VAT": 145.94,
  //   "discount_rate": 0,
  //   "item_count": 6,
  //   "date_arrival": "Thu Feb 23 2023 15:25:37 GMT+0300 (East Africa Time)",
  //   "date_departure": "Thu Feb 23 2023 15:25:37 GMT+0300 (East Africa Time)",
  //   "isReceiptModified": true,
  //   "status": "REFUND_CREATED",
  //   "refund_type": "INTERNATIONAL FRANCE",
  //   "signature_img": "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/signature/6ce96ec1-deef-450e-b4f3-520e550e50d1.jpg",
  //   "exit_by": "Air",
  //   "exit_point": "Roissy-Charles de Gaulle",
  //   "exit_point_code": "0",
  //   "createdAt": "2023-02-24T13:15:39Z",
  //   "updatedAt": "2023-02-24T13:29:33Z",
  //   "__v": 0,
  //   "history": "74c42caa-7bf3-432b-8a1a-f5b926737db2",
  //   "receipt_signed_pdf": "users/5ca4152a-8958-47b5-bcce-2cdf7be50bf7/receipt/2023-02-24-74c42caa-7bf3-432b-8a1a-f5b926737db2.pdf",
  //   "shop": {
  //     "$oid": "610e428cd026ec0008998ba2"
  //   },
  //   "BVE_id": "38NRLWO0NEYW6NCO71PZJJO",
  //   "refund_amount": 18.23,
  //   "transactionId": "FR0000000000906"
  // }
  
  // const prodShopping = {
  //   "_id": "57e699bb-4a2c-4f8b-8e71-92b6605fc4d0",
  //   "PK": "USER#2f517dea-2abd-40c1-88d8-96ada3f21eac",
  //   "SK": "SHOP#57e699bb-4a2c-4f8b-8e71-92b6605fc4d0",
  //   "shop_id": "57e699bb-4a2c-4f8b-8e71-92b6605fc4d0",
  //   "user_id": "2f517dea-2abd-40c1-88d8-96ada3f21eac",
  //   "receipt_number": "FR117JOMSAEUI",
  //   "dateIssued": "2021-12-14T00:00:00Z",
  //   "shop_name": "Ste Amazon Eu",
  //   "shop_address": "67 Boulevard Du Général Leclerc, 92110 Clichy, France",
  //   "shop_contact_number": "",
  //   "location": {
  //     "country": "France",
  //     "city": "Provence-Alpes-Côte d'Azur",
  //     "postalCode": "13220",
  //     "isoCountryCode": "FR",
  //     "name": "Les Aiguilles",
  //     "lat": "43.3831229",
  //     "long": "5.1952327"
  //   },
  //   "currency": "EUR",
  //   "face_img": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/face/1640175793351.jpeg",
  //   "receipt_img": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/1640175742232.jpeg",
  //   "VAT_rate": 0.2,
  //   "VAT_amount": 9.41,
  //   "total_incl_VAT": 56.44,
  //   "discount_rate": 0,
  //   "item_count": 1,
  //   "date_arrival": "2021-12-20 12:00:00.000Z",
  //   "date_departure": "2021-12-28 23:00:00.000Z",
  //   "isReceiptModified": true,
  //   "issue_detail": "Sum of item's price does not match with the total price., VAT of all item's base price does not match with the total VAT, Receipt Expired., cannot extract shop contact number., Total price including VAT does not match sum of all items' unit prices.",
  //   "status": "REFUND_CREATED",
  //   "refund_type": "INTERNATIONAL FRANCE",
  //   "signature_img": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/signature/1640175258991.jpeg",
  //   "exit_by": "Air",
  //   "exit_point": "Marseille-Provence",
  //   "exit_point_code": "4",
  //   "createdAt": "2021-12-22T12:23:18Z",
  //   "updatedAt": "2021-12-22T16:30:05Z",
  //   "__v": 0,
  //   "history": "57e699bb-4a2c-4f8b-8e71-92b6605fc4d0",
  //   "receipt_signed_pdf": "users/2f517dea-2abd-40c1-88d8-96ada3f21eac/receipt/2021-12-22-57e699bb-4a2c-4f8b-8e71-92b6605fc4d0.pdf",
  //   "shop": {
  //     "$oid": "61c318b7989ab2000815d25c"
  //   },
  //   "BVE_id": "3895DGPE9T58YWFRGHN7PBJ",
  //   "refund_amount": 7.06,
  //   "transactionId": "FR0000000001011"
  // }
  
  // const uatKeys = Object.keys(uatShopping);
  // const prodKeys = Object.keys(prodShopping);
  
  // console.log('in uat but not in prod: ')
  // for (let i = 0; i < uatKeys.length; i++) {
  //   if (!prodKeys.includes(uatKeys[i])) console.log(uatKeys[i])
  // }
  // console.log('====================')
  // console.log('in prod but not in uat: ')
  // for (let i = 0; i < prodKeys.length; i++) {
  //   if (!uatKeys.includes(prodKeys[i])) console.log(prodKeys[i])
  // }
  
  // modify array while looping foreach
  // var arr = ["one","two","three"];
  
  // arr.forEach(function(part, i, theArray){
  //   theArray[i] = 'four';
  // })
  
  // console.log(arr);
  
  // const a = 0.2000
  // const b = parseFloat(a).toFixed(4).toString();
  // console.log(b);
  
  // const isAndroidPhone = (str) => {
  //   if (str.includes('Android') && /Chrome\/[.0-9]* Mobile/.test(str)) {
  //     return true;
  //   } return false;
  // }
  // const isAndroidTablet = (str) => {
  //   if (str.includes('Android') && /Chrome\/[.0-9]* (?!Mobile)/.test(str)) {
  //     return true;
  //   } return false;
  // }
  
  // const isChromeIOS = (str) => {
  //   if ((str.includes('iPhone')
  //   || str.includes('iPod')
  //   || str.includes('iPad')) && /CriOS\/[.0-9]*/.test(str)) {
  //     return true;
  //   } return false;
  // }
  
  // const isAndroidWVOld = (str) => {
  //   if (!isChromeIOS(str) && /Version\/[.0-9]*/.test(str)) {
  //     return true;
  //   } return false;
  // }
  
  // const isAndroidWVNew = (str) => {
  //   if (str.includes('Android') && str.includes('wv')) {
  //     return true;
  //   } return false;
  // }
  
  // console.log(isAndroidWVNew(`Mozilla/5.0 (Linux; Android 12; SM-G973N Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/110.0.5481.154 Mobile Safari/537.36`));
  
  // const a = {
  //   abn_number: "",
  //   account_number: "",
  //   bill_to_address: "128 RUE LA BOETIE",
  //   bill_to_name: "TRIPTAX FRANCE",
  //   bill_to_vat_number: "",
  //   card_number: "",
  //   cashback: 0,
  //   category: "Job Supplies",
  //   created: "2023-03-07 09:02:37",
  //   currency_code: "EUR",
  //   date: "2022-07-07 13:18:00",
  //   delivery_date: "",
  //   discount: 0,
  //   document_reference_number: "",
  //   document_title: "",
  //   document_type: "receipt",
  //   due_date: "",
  //   duplicate_of: "",
  //   external_id: "",
  //   id: 124000976,
  //   img_file_name: "124000976.png",
  //   img_thumbnail_url: "https://scdn.veryfi.com/receipts/d7169a6ab56a7981/5bac4991-84cc-4bc2-bc1a-573ee663d5b4/thumbnail.png?Expires=1678180658&Signature=WaPqrCOWNx9lWojvNjo1rU9~gizmnQc4UqMPBnbmzn3FzFA8vxYjNioOT0LbTIq7wrIJE0kf10NRI9H1J1Sf4VE78Ubu0SVcKo-zJzVBMofWmEln7aiyu0RNkAY1edadc~KccolQXsUkckptP6yBNsgV0AxNCFbtq1uONEBTHwQEdco1cqLZZAn~c0TUeOeCXVPy2gOwykOLDXvMX2pMbEqNf8bBZcJLyLENF0uT85rbwRBL6RDVsdCCp-oXJWnPRtkB4CR~wfjRjDjWHwVgPf2u0yuhuvTvSZC2z3UV3n~kI3diKLz8vd1ujkPTuVt59Iwya2kupFgq5~tBtX8ivg__&Key-Pair-Id=APKAJCILBXEJFZF4DCHQ",
  //   img_url: "https://scdn.veryfi.com/receipts/d7169a6ab56a7981/5bac4991-84cc-4bc2-bc1a-573ee663d5b4/a7d1bd81-16b4-4358-a8b7-bd4f3a1eb78f.png?Expires=1678180658&Signature=YG8SG1TdejLEgtmaN3O0I4VxhM1zf7NIZzHjOyEErwbHJVVL9yzkzBd~MCwoMRqNqC0lFoV3wgXy5XiJX7SAogJuAbqfZ-aioSDlezr2E5nZZ5KWP4slvUCEDybb7fmvTgktSjo0ENyFVWYPDPgyBuyaA85VesCVATjReTJyGGGu3w9FljQnQaaX-4nb8cXBHTujSTiVtYTl5cGw3Lg325nVOz0RYdGdxDVgRkuZKcsj5ul5FdeozRs4SXJAsZJ7NYoL6MCGg-h8EO2I-CmAeJGEMN4DShtQFVVCdPhDE42bMzDQJDlxK0Jb77J46V2oXsnd9T2pc-CahaLxdUJ1aw__&Key-Pair-Id=APKAJCILBXEJFZF4DCHQ",
  //   insurance: 0,
  //   invoice_number: "92754",
  //   is_duplicate: 0,
  //   line_items: [
  //     {
  //       date: "",
  //       description: "CREW TEE S/S\nWHITE",
  //       discount: 0,
  //       discount_rate: 0,
  //       end_date: "",
  //       hsn: "",
  //       id: 506032612,
  //       order: 0,
  //       price: 55,
  //       quantity: 1,
  //       reference: "",
  //       section: "",
  //       sku: "",
  //       start_date: "",
  //       tags: [
  //       ],
  //       tax: 0,
  //       tax_rate: 0,
  //       text: "CREW TEE S/S\t\t55.00 €\nWHITE55.00 €",
  //       total: 55,
  //       type: "product",
  //       unit_of_measure: "",
  //     },
  //     {
  //       date: "",
  //       description: "CHAS E TEE\nJUNIPER",
  //       discount: 0,
  //       discount_rate: 0,
  //       end_date: "",
  //       hsn: "",
  //       id: 506032613,
  //       order: 1,
  //       price: 0,
  //       quantity: 1,
  //       reference: "",
  //       section: "",
  //       sku: "",
  //       start_date: "",
  //       tags: [
  //       ],
  //       tax: 0,
  //       tax_rate: 0,
  //       text: "CHAS E TEE\t\t35.00\nJUNIPER",
  //       total: 35,
  //       type: "product",
  //       unit_of_measure: "",
  //     },
  //     {
  //       date: "",
  //       description: "REGULAR TAPERED",
  //       discount: 0,
  //       discount_rate: 0,
  //       end_date: "",
  //       hsn: "",
  //       id: 506032614,
  //       order: 2,
  //       price: 0,
  //       quantity: 1,
  //       reference: "",
  //       section: "",
  //       sku: "",
  //       start_date: "",
  //       tags: [
  //       ],
  //       tax: 0,
  //       tax_rate: 0,
  //       text: "REGULAR TAPERED\t180.00€",
  //       total: 180,
  //       type: "product",
  //       unit_of_measure: "",
  //     },
  //     {
  //       date: "",
  //       description: "BLACK RINSED\n31/32",
  //       discount: 0,
  //       discount_rate: 0,
  //       end_date: "",
  //       hsn: "",
  //       id: 506032615,
  //       order: 3,
  //       price: 180,
  //       quantity: 1,
  //       reference: "",
  //       section: "",
  //       sku: "",
  //       start_date: "",
  //       tags: [
  //       ],
  //       tax: 0,
  //       tax_rate: 0,
  //       text: "BLACK RINSED\t31/32180.00 €",
  //       total: 0,
  //       type: "product",
  //       unit_of_measure: "",
  //     },
  //     {
  //       date: "",
  //       description: "TAPERED 3204 12.50Z",
  //       discount: 0,
  //       discount_rate: 0,
  //       end_date: "",
  //       hsn: "",
  //       id: 506032616,
  //       order: 4,
  //       price: 0,
  //       quantity: 1,
  //       reference: "",
  //       section: "",
  //       sku: "",
  //       start_date: "",
  //       tags: [
  //       ],
  //       tax: 0,
  //       tax_rate: 0,
  //       text: "TAPERED 3204 12.50Z\t179.00 €",
  //       total: 179,
  //       type: "product",
  //       unit_of_measure: "",
  //     },
  //     {
  //       date: "",
  //       description: "INDIGO\n33",
  //       discount: 0,
  //       discount_rate: 0,
  //       end_date: "",
  //       hsn: "",
  //       id: 506032617,
  //       order: 5,
  //       price: 0,
  //       quantity: 1,
  //       reference: "",
  //       section: "",
  //       sku: "",
  //       start_date: "",
  //       tags: [
  //       ],
  //       tax: 0,
  //       tax_rate: 0,
  //       text: "INDIGO\t33",
  //       total: 0,
  //       type: "product",
  //       unit_of_measure: "",
  //     },
  //   ],
  //   notes: "",
  //   ocr_text: "GUANITY ****\n\tKST.\nBARNABÉ\n\t2114\nDENIM AND SHOKY\nBARNABE MAGASIN GENERAL\n11 RUE DE L'ARGENTERIE\n34000 MONTPELLIER\nTel: 09 64 42 08 44\nMail:\tcontact@shopbarnabe.com\nRCS 519 393 396 00020\nTVA Intracom.: FR94 319 593 396\nVENTE 92754\n\tjeu. 28 juillet 2022\n\t13:18\nTRIPTAX FRANCE\n128 RUE LA BOETIE\n75008\tPARIS\n\nCREW TEE S/S\t\t55.00 €\nWHITE\n1X\t55.00 €\nCHAS E TEE\t\t35.00\nJUNIPER\tM\n\n1X\t35.00 €\nREGULAR TAPERED\t180.00€\nBLACK RINSED\t31/32\n1X\t180.00 €\nTAPERED 3204 12.50Z\t179.00 €\nINDIGO\t33\n179.00 €\nTOTAL TTC\t449.00 €\n\n\tCARTES\t449.00 €\n\nVendeur: GHISLAIN\nRetours ou change sous 7 jours. Pas de rembourseme\nAvoiry sables, horg wilde, jusqu'à 3 mois après",
  //   order_date: "",
  //   payment_display_name: "Other",
  //   payment_terms: "",
  //   payment_type: "other",
  //   phone_number: "519 393 396",
  //   purchase_order_number: "",
  //   rounding: 0,
  //   service_end_date: "",
  //   service_start_date: "",
  //   ship_date: "",
  //   ship_to_address: "",
  //   ship_to_name: "BARNABE MAGASIN GENERAL",
  //   shipping: 0,
  //   store_number: "",
  //   subtotal: 449,
  //   tags: [
  //   ],
  //   tax: 0,
  //   tax_lines: [
  //   ],
  //   tip: 0,
  //   total: 449,
  //   total_weight: "",
  //   tracking_number: "",
  //   updated: "2023-03-07 09:02:38",
  //   vat_number: "FR94 319 593 396",
  //   vendor: {
  //     address: "11 RUE DE L'ARGENTERIE\n34000 MONTPELLIER",
  //     category: "",
  //     email: "",
  //     fax_number: "",
  //     lat: 0,
  //     lng: 0,
  //     name: "",
  //     phone_number: "519 393 396",
  //     raw_name: "",
  //     vendor_logo: "",
  //     vendor_reg_number: "00020",
  //     vendor_type: "",
  //     web: "",
  //   },
  //   vendor_account_number: "",
  //   vendor_bank_name: "",
  //   vendor_bank_number: "",
  //   vendor_bank_swift: "",
  //   vendor_iban: "",
  //   warnings: [
  //   ],
  // }
  // console.log(JSON.stringify(a));
  
  // const a = {
  //   location: '',
  //   shop_contact_number: '',
  //   shop_address: '',
  //   shop_name: '',
  //   BVE_id: '',
  //   user_id: '',
  //   transactionId: '',
  //   shop: '',
  //   receipt_number: '',
  //   dateIssued: '',
  //   currency: '',
  //   face_img: '',
  //   receipt_img: '',
  //   receipt_signed_pdf: '',
  //   VAT_rate: '',
  //   VAT_amount: '',
  //   total_incl_VAT: '',
  //   discount_rate: '',
  //   item_count: '',
  //   date_arrival: '',
  //   date_departure: '',
  //   isReceiptModified: '',
  //   refund_amount: '',
  //   refund_type: '',
  //   issue_detail: '',
  //   signature_img: '',
  //   exit_by: '',
  //   exit_point: '',
  //   exit_point_code: '',
  //   dueRefundAt: '',
  //   status: '',
  //   createdAt: '',
  //   updatedAt: ''
  // };
  // const b = ['shop_name', 'total_incl_VAT', 'VAT_amount', 'receipt_img', 'receipt_signed_pdf', 'status', 'createdAt']
  
  // Object.keys(a).forEach(val => {
  //   if (!b.includes(val)) {
  //     console.log(val + ' ');
  //   }
  // })
  
  // const a = [
  //   {
  //     "glossary": {
  //         "title": "example glossary",
  // 		"GlossDiv": {
  //             "title": "S",
  // 			"GlossList": {
  //                 "GlossEntry": {
  //                     "ID": "SGML",
  // 					"SortAs": "SGML",
  // 					"GlossTerm": "Standard Generalized Markup Language",
  // 					"Acronym": "SGML",
  // 					"Abbrev": "ISO 8879:1986",
  // 					"GlossDef": {
  //                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
  // 						"GlossSeeAlso": ["GML", "XML"]
  //                     },
  // 					"GlossSee": "markup"
  //                 }
  //             }
  //         }
  //     }
  // },
  // {
  //   "glossary": {
  //       "title": "example glossary",
  //   "GlossDiv": {
  //           "title": "S",
  //     "GlossList": {
  //               "GlossEntry": {
  //                   "ID": "SGML",
  //         "SortAs": "SGML",
  //         "GlossTerm": "Standard Generalized Markup Language",
  //         "Acronym": "SGML",
  //         "Abbrev": "ISO 8879:1986",
  //         "GlossDef": {
  //                       "para": "A meta-markup language, used to create markup languages such as DocBook.",
  //           "GlossSeeAlso": ["GML", "XML"]
  //                   },
  //         "GlossSee": "markup"
  //               }
  //           }
  //       }
  //   }
  // }
  // ]
  // for (const key in a) {
  //   console.log(key);
  // }
  
  // let todoList = [
  
  //     {item_name:"Apple", price:"$5", quantity:1, brand_details: {name:"Golden Delicious", location:"San Francisco"}, isChecked:true},
  
  //     {item_name:"Bannana", price:"$3", quantity:2, brand_details: {name:"Fuji", location:"San Diego"}, isChecked:false},
  
  //     {item_name:"Pears", price:"$7", quantity:4, brand_details: {name:"Golden Delicious", location:"San Francisco"}, isChecked:true},
  
  //     {item_name:"Milk", price:"$4", quantity:3, brand_details: {name:"Mother Dairy", location:"California"}, isChecked:false},
  
  // ];
  
  // const mapped = todoList.map((val) => {
  //     if(val.item_name === 'Apple') return {item_name:"Apple2", price:"$5", quantity:1, brand_details: {name:"Golden Delicious", location:"San Francisco"}, isChecked:true}
  //     else return val;
  // })
  // console.log(mapped);
  
  // EXP: does moment log current date if null is passed to it?
  // const trip = null;
  // console.log(trip?.boom);
  // console.log(moment(undefined).format('MMM Do YY'))
  
  // console.log(moment().isBefore(moment(new Date(2022, 5, 20))));
  
  // let dates = [
  //   moment(new Date(2022, 5, 20)),
  //   moment(new Date(2023, 5, 20)),
  //   moment(new Date(2021, 5, 20)),
  //   moment(new Date(2021, 5, 20)),
  //   moment(new Date(2019, 5, 20)),
  // ]
  
  // dates.sort((a, b) => {
  //   if (a.isBefore(b)) return -1
  //   if (a.isAfter(b)) return 1
  //   if (a.isSame(b)) return 0;
  // })
  // console.log(dates);
  
  // console.log(moment().year())
  
  // var twoSum = function(nums, target) {
  //     if (nums.length === 2) return [0, 1];
  //     else {
  //       const map = {}
  //       for (let i = 0; i < nums.length; i++) {
  //         const otherHalf = (target - nums[i]).toString();
  //         if (Object.keys(map).includes(otherHalf)) return [map[otherHalf], i]
  //         map[nums[i]] = i;
  //       }
  //     }
  // };
  // console.log(twoSum([3, 2, 3], 6));
  
  // var groupAnagrams = function(strs) {
  //   let map = {};
  //   let ans = [];
  
  //   for (let i = 0; i < strs.length; i++) {
  //     let key = strs[i].split('').sort().join('');
  //     if (!Object.keys(map).includes(key)) map[key] = [];
  //     map[key].push(strs[i]);
  //   }
  
  //   for (let i = 0; i < Object.keys(map).length; i++) {
  //     ans.push(map[Object.keys(map)[i]]);
  //   }
  //   return ans;
  // };
  
  // console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
  
  // var topKFrequent = function(nums, k) {
  //   const map = {}
  //   for (let i = 0; i < nums.length; i++) {
  //       const currNum = nums[i];
  //       if (!map[currNum]) {
  //           map[currNum] = {a: currNum, b: 1};
  //       }
  //       else {
  //           map[currNum] = {a: currNum, b: ++map[currNum].b};
  //       }
  //   }
  //   const sortedMapValues = Object.values(map).sort((a, b) => b.b - a.b);
  //   return sortedMapValues.slice(0, k).map(val => val.a);
  // };
  
  // console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))
  
  // var productExceptSelf = function(nums) {
  //   const length = nums.length;
  //   const result = new Array(length).fill(1);
  
  //   // Calculate the product of elements before the current index
  //   let productBefore = 1;
  //   for (let i = 0; i < length; i++) {
  //     result[i] *= productBefore;
  //     productBefore *= nums[i];
  //     console.log('currentNum: ', nums[i]);
  //     console.log('productBefore: ', productBefore);
  //     console.log('result: ', result);
  //     console.log("*****************")
  //   }
  //   console.log(".")
  //   console.log(".")
  //   console.log(".")
  //   console.log(".")
  //   console.log(".")
  
  //   // Calculate the product of elements after the current index
  //   let productAfter = 1;
  //   for (let i = length - 1; i >= 0; i--) {
  //     result[i] *= productAfter;
  //     productAfter *= nums[i];
  //     console.log('currentNum: ', nums[i]);
  //     console.log('productAfter: ', productAfter);
  //     console.log('result: ', result);
  //     console.log("*****************")
  //   }
  
  //   return result;
  // };
  // console.log(productExceptSelf([1,2,3,4]))
  // function notInBox(arr, startRow, startCol) {
  // 	let st = new Set();
  
  // 	for (let row = 0; row < 3; row++) {
  // 		for (let col = 0; col < 3; col++) {
  // 			let curr = arr[row + startRow][col + startCol];
  
  // 			// If already encountered before, return
  // 			// false
  // 			if (st.has(curr)) return false;
  
  // 			// If it is not an empty cell,
  // 			// insert value at current cell in set
  // 			if (curr !== ".") st.add(curr);
  // 		}
  // 	}
  // 	return true;
  // }
  
  // var isValidSudoku = function (board) {
  // 	// find dups in columns and rows
  // 	for (let i = 0; i < board.length; i++) {
  // 		// rows
  // 		const rowCells = board[i].filter((c) => c !== ".");
  // 		const rowsSet = new Set(rowCells);
  // 		if (rowsSet.size !== rowCells.length) return false;
  
  // 		// columns
  // 		const colCells = [];
  // 		const colsSet = new Set();
  // 		for (let j = 0; j < board[i].length; j++) {
  // 			if (board[j][i] !== ".") {
  // 				colsSet.add(board[j][i]);
  // 				colCells.push(board[j][i]);
  // 			}
  // 		}
  // 		if (colsSet.size !== colCells.length) return false;
  // 	}
  
  //     // cubes
  //     const boxMap = {};
  //     for (let i = 0; i < 9; i++) {
  //         const rowCube = Math.floor(i/3);
  //         for (let j = 0; j < 9; j++) {
  //             const colCube = Math.floor(j/3);
  //             if (board[i][j] !== '.') {
  //                 if (boxMap[`${rowCube}${colCube}`]) {
  //                     boxMap[`${rowCube}${colCube}`].push(board[i][j]);
  //                 } else {
  //                     boxMap[`${rowCube}${colCube}`] = [board[i][j]];
  //                 }
  //             }
  //         }
  //     }
  //     const cubes = Object.keys(boxMap);
  //     for (let i = 0; i < cubes.length; i++) {
  //         const currCube = boxMap[cubes[i]];
  //         const set = new Set(currCube);
  //         if (set.size !== currCube.length) return false;
  //     }
  
  // 	return true;
  // };
  
  // const board = [
  // 	["5", "3", ".", ".", "7", ".", ".", ".", "."],
  // 	["6", ".", ".", "1", "9", "5", ".", ".", "."],
  // 	[".", "9", "8", ".", ".", ".", ".", "6", "."],
  // 	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  // 	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  // 	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  // 	[".", "6", ".", ".", ".", ".", "2", "8", "."],
  // 	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
  // 	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
  // ];
  // const board2 = [
  //     [".","3",".",".","7",".",".",".","."],
  //     ["6",".",".","1","9","5",".",".","."],
  //     [".","9","8",".",".",".",".","6","."],
  //     ["8",".",".",".","6",".",".",".","3"],
  //     ["4",".",".","8",".","3",".",".","1"],
  //     ["7",".",".",".","2",".",".",".","6"],
  //     [".","6",".",".",".",".","2","8","."],
  //     ["3",".",".","4","1","9",".",".","5"],
  //     [".",".","3",".","8",".",".","7","9"]
  // ]
  
  // console.log(isValidSudoku(board2));
  
  // let count = 0;
  // for(let i = 1; i <= 81; i++) {
  //   if ((i+2) % 3 === 0) process.stdout.write('|');
  //   // console.log(i*9);
  //   process.stdout.write(`${i.toString().padStart(2,0)} `);
  //   if ((i) % 9 === 0) console.log('')
  //   if (i === 27 || i === 54) {
  //     console.log('\n--------------------------');
  //   }
  // }
  
  // var isValidSudoku = function(board) {
  //   for (let i = 0; i < 9; i++) {
  //     let row = new Set(),
  //         col = new Set(),
  //         box = new Set();
  
  //     for (let j = 0; j < 9; j++) {
  //       let _row = board[i][j];
  //       let _col = board[j][i];
  //       let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
  
  //       process.stdout.write(`i: ${(3*Math.floor(i/3)+Math.floor(j/3)).toString()}, `);
  //       process.stdout.write(`j: ${(3*(i%3)+(j%3)).toString()}`);
  //       console.log('\n');
  
  //       if (_row !== '.') {
  //         if (row.has(_row)) return false;
  //         row.add(_row);
  //       }
  //       if (_col !== '.') {
  //         if (col.has(_col)) return false;
  //         col.add(_col);
  //       }
  
  //       if (_box !== '.') {
  //         if (box.has(_box)) return false;
  //         box.add(_box);
  //       }
  //     }
  //   }
  //   return true
  // };
  
  // console.log(isValidSudoku(board));
  
  // console.log(isNaN(+'c'));