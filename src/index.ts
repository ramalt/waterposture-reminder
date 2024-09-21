import notifier from 'node-notifier';
import path from 'path';

interface NotificationItem {
    key: string;
    title: string;
    message: string;
    iconPath: string;
}
const items: NotificationItem[] = [
    {
        key: "water",
        title: "Su Hatırlatıcı",
        message: "Su içmeyi unutma, Rica ederim.",
        iconPath: path.join(__dirname, '../water.jpg'),
    },
    {
        key: "posture",
        title: "Postür Hatırlatıcı",
        message: "Dik otur, Rica ederim.",
        iconPath: path.join(__dirname, '../painman.jpg'),
    }
]

function sendNotification(item: NotificationItem): void {
    console.log(`WaterPosture Reminder | ${item.title} - ${item.message}`);
    notifier.notify({
        title: item.title,
        message: item.message,
        icon: item.iconPath,
        sound: true,
        wait: true
    }, (err: any, response: any) => {
        if (err) {
            console.error("Bildirim gönderirken bir hata oluştu:", err);
        }
    });
}

setInterval(() => {
    let i = Math.floor(Math.random() * items.length);
    sendNotification(items[i]);
}, 2400000);