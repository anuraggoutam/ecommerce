import CryptoJS from 'crypto-js';

const secretKey = import.meta.env.REDUX_STORE_KEY;

export const encryptData = (data) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretKey
  ).toString();
  return encryptedData;
};

export const decryptData = (encryptedData) => {
  try {
    const decryptedData = CryptoJS.AES.decrypt(
      encryptedData,
      secretKey
    ).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  } catch (error) {
    console.error('Error while decrypting data:', error);
    return undefined;
  }
};
