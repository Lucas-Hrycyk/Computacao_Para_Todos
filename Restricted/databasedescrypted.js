const CryptoJS = require('crypto-js');

const secretKey = '84641599aA@';
const username = 'lucas_hrycyk';
const password = 'y4tbBVtlL0WMGeqArw0O3X5yvz7ucDSO';

const encryptedUsername = CryptoJS.AES.encrypt(username, secretKey).toString();
const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();

console.log('DB_USERNAME:', encryptedUsername);
console.log('DB_PASSWORD:', encryptedPassword);
