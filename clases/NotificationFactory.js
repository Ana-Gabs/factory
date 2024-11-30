const EmailNotification = require('./EmailNotification');
const SMSNotification = require('./SMSNotification');

// implemeta  em metodo factory para crear las
class NotificationFactory {
    /**
     * fatory que crea y devuelve el tipo de notificacion.
     * @param {string} type 
     * @returns {Notification}
     **/
    static createNotification(type) {
        if (type === "email") {
            return new EmailNotification();
        } else if (type === "sms") {
            return new SMSNotification();
        } else {
            throw new Error(`Tipo de notificación desconocido: ${type}`);
        }
    }
}

module.exports = NotificationFactory;
