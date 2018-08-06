'use strict';
const fetch = require('node-fetch');

module.exports = {
    getData: async function (url, topic) {
        // read JSON from URL
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data)
        console.log("Getting data from %s for %s...", url, topic)
        console.log(data[topic])

        return data[topic];

    },

    getSchedule: async function (url, mm_dd) {
        // read JSON from URL
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data)
        console.log("Getting calender schedule from %s for %s...", url, mm_dd)
        console.log(data[mm_dd])

        return data[mm_dd];
    }
}
