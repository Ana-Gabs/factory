const Notification = require('./Notificacion');

// implemetado el metodo send mesage para crear notificaciones por email
class EmailNotification extends Notification {
    sendMessage(message) {
        console.log(`📧 Enviando correo electrónico: ${message}`);
    }
}

module.exports = EmailNotification;
