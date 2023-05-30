import moment from "moment";
import path from "path";
import fs from "fs";
import axios from "axios";
import qs from "qs";


function encode(strs) {
    // write your code here
    let output = "";
    strs.forEach(s => {
        output += `${s.length}#${s}`;
    });
    return output;
}

function decode(str) {
    // write your code here
    let output = [], i = 0;
    
    while (i < str.length) {
        let numOfDigits = str.indexOf('#', i) - i + 1;
        let length = +str.split('').slice(i, str.indexOf('#', i)).join('');
        console.log(length);
        const start = i + numOfDigits;
        const end = i + length + numOfDigits;
        output.push(str.split('').slice(start, end).join(''));
        i = i + length + numOfDigits;
    }
    console.log(output);
    return output;
}

const original = ["le+f", "7#code", "##loves", "6#3you"]
decode(encode(original))