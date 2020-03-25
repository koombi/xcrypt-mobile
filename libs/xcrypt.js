const CryptoJS = require("react-native-crypto-js");

export const encrypt = (password, masterKey) => {
  const cipher = CryptoJS.AES.encrypt(password, masterKey);
  return cipher.toString();
}

export const decrypt = (cipher, masterKey) => {
  const decipher = CryptoJS.AES.decrypt(cipher, masterKey);
  return decipher.toString(CryptoJS.enc.Utf8);
}