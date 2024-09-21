#!/bin/bash

# Node.js packages
if ! command -v node &> /dev/null
then
    echo "Node.js yüklü değil. Lütfen Node.js'i yükleyin."
    exit 1
fi

if ! command -v npm &> /dev/null
then
    echo "npm yüklü değil. Lütfen npm'i yükleyin."
    exit 1
fi

npm install

APP_DIR="$(dirname "$(realpath "$0")")"

pm2 start "$APP_DIR/dist/index.js" --name waterposture --env production

pm2 startup

pm2 save

echo "Water Posture Reminder servisi başarıyla kuruldu ve başlatıldı!"
