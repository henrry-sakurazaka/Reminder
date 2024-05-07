/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// データベースの特定の場所を監視するトリガー関数を定義する
exports.monitorDatabaseChanges = functions.database.ref("/todos/{todoId}")
    .onWrite((change, context) => {
        // 変更を取得する
        const beforeData = change.before.val();
        const afterData = change.after.val();

        // 変更を処理する
        // ここにプッシュ通知の送信などの処理を追加します

        // 変更をログに記録する
        console.log("Database change detected:", context.params.todoId, beforeData, "->", afterData);
        
        // 処理が完了したことを示すPromiseを返す
        return Promise.resolve();
    });


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
