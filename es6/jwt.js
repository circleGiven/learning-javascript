const header = {
    "typ": "JWT",
    "alg": "HS256"
};

// encode to base64
const encodedHeader = new Buffer(JSON.stringify(header))
    .toString('base64')
    .replace('=', '');
console.log('header: ',encodedHeader);

const payload = {
    "iss": "circlegiven.github.io",
    "exp": "1485270000000",
    "https://circlegiven.github.io/": true,
    "userId": "11028373727102",
    "username": "circlegiven"
};

// encode to base64
const encodedPayload = new Buffer(JSON.stringify(payload))
    .toString('base64')
    .replace('=', '');

console.log('payload: ',encodedPayload);

const crypto = require('crypto');
const signature = crypto.createHmac('sha256', 'secret')
    .update(encodedHeader + '.' + encodedPayload)
    .digest('base64')
    .replace('=', '');

console.log('signature: ',signature);