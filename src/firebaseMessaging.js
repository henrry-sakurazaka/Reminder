/* eslint-disable no-console */
import { getMessaging } from "firebase/messaging";

const messaging = getMessaging();
// getToken 関数の定義
export async function getToken(options) {
   
  try {
    // FCM トークンの取得を試行
    const currentToken = await messaging.getToken(options);
    if (currentToken) {
      return currentToken;
    } else {
      console.log('No Instance ID token available. Request permission to generate one.');
      return null;
    }
  } catch (error) {
    console.error('An error occurred while retrieving token. ', error);
    throw error;
  }
}
