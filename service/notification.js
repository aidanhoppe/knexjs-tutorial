const { Expo } = require("expo-server-sdk")
const { getUserPushTokens } = require("../dao/user_push_token")

class NotificationService {
  async sendNotification(notificationDto) {
    const { sender_id, recipient_id, title, body, data } = notificationDto

    try {
      // add { accessToken: process.env.EXPO_ACCESS_TOKEN } once we generate an access token through our Expo dashboard
      const expo = new Expo()
      const pushTokens = await getUserPushTokens(recipient_id)
      for (let pushToken of pushTokens) {
        if (!Expo.isExpoPushToken(pushToken.push_token)) {
          console.error(
            `Push token ${pushToken.push_token} is not a valid Expo push token`
          )
          continue
        }

        // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
        await expo.sendPushNotificationsAsync([{
          to: pushToken.push_token,
          sound: "default",
          title: title,
          body: body,
          data: data,
        }]).then((receipt)=> {
          return receipt
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new NotificationService()
