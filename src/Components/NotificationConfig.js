import PushNotification from "react-native-push-notification"

class NotificationConfig {

    setNavigation = (novoNavegador) => {
        navegador = novoNavegador
    }

    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token);
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification);
                navegador.navigate(notification.message);
            },
        })
    }

    createChannel = () => {
        PushNotification.createChannel(
            {
              channelId: "my-channel",
              channelName: "My channel",
              channelDescription: "A channel to categorise your notifications",
            },
            (created) => console.log(`createChannel returned '${created}'`)
          );
    }

    scheduleNotificationIp = () => {
        
        PushNotification.localNotificationSchedule({

            id: 1,
            channelId: "my-channel",
            message: "O que é endereço Ip ?", 
            date: new Date(Date.now() + 60 * 1000), 
            allowWhileIdle: false, 
          
            repeatType: "minute",
            repeatTime: 3, 
          });

    }

    scheduleNotificationCIDR = () => {
        
        PushNotification.localNotificationSchedule({

            id: 2,
            channelId: "my-channel",
            message: "O que é CIDR ?", 
            date: new Date(Date.now() + 60 * 1000),
            allowWhileIdle: false, 
        
            repeatType: "minute",
            repeatTime: 1,
          });

    }

    scheduleNotificationSubCalc = () => {
        PushNotification.localNotificationSchedule({

            id: 3,
            channelId: "my-channel",
            message: "O que é uma sub-rede ?", 
            date: new Date(Date.now() + 60 * 1000), 

            repeatType: "minute",
            repeatTime: 2, 
          });
    }

    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
    }

}

export const Notification = new NotificationConfig();