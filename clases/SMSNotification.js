const Notification = require('./Notificacion');

// implemetado el metodo send mesage para crear notificaciones por SMS
class SMSNotification extends Notification {
    sendMessage(message) {
        console.log(`📱 Enviando SMS: ${message}`);
    }
}

module.exports = SMSNotification;
