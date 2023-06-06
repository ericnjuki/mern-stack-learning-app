import moment from "moment";
import path from "path";
import fs from "fs";
import axios from "axios";
import qs from "qs";

const formatList = (str) => {
    let res = null;
    try {
       res = JSON.parse(str);
       // is array of objects
    } catch (error) {
        if (str.includes('1.')) {
            // is numbered list of objects
            const jsonStr = `[${str.replace('1.', '').replace(/\d.\s*{/g, ',{')}]`;
            res = JSON.parse(jsonStr);
        }
    }
    return res;
}