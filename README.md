# Water Posture Reminder

Bu proje, kullanıcıları su içmeleri ve düzgün bir postürde oturmaları konusunda hatırlatmalar yapan bir uygulamadır. Uygulama, PM2 kullanarak arka planda çalışır ve bildirimleri kullanıcının masaüstünde gösterir.

## Özellikler

- Su içmeyi hatırlatma
- Düzgün postür hatırlatma
- PM2 ile yönetim ve otomatik başlatma

## Gereksinimler

- Node.js (v14 veya daha yenisi)
- NPM (Node Paket Yöneticisi)

## Kurulum

Projeyi klonlayın:

```bash
git clone https://github.com/kullaniciadi/posture_reminder.git
cd posture_reminder
npm install
chmod +x setup.sh
sudo ./setup.sh
```

## Kullanım
```bash
pm2 status
```
## Yeniden Başlatma

```bash
pm2 startup
pm2 save

```

## Katkıda Bulunma

Herhangi bir katkıda bulunmak isterseniz aşağıdaki "Todo" listesinden bir başlık seçip pull request açın :) 

### TODO Listesi

- **Systemd Servis Başlatma Sorunu:** `setup.sh` dosyası ile doğrudan sistem hizmeti başlatılamıyor. Bu durumu çözmek için:
  - Uygulamanın çalışma yolu ve gerekli izinler kontrol edilmelidir.
  - `pm2` ile uygulamanın yönetimi önerilmektedir; manuel olarak başlatma veya `pm2`'yi sistem başlangıcında otomatik çalışacak şekilde yapılandırma gereklidir.
  - Gelecek sürümlerde bu sorun için daha kalıcı bir çözüm sağlanacaktır.

