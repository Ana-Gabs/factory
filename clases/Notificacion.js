//clase base
class Notification {
    sendMessage(message) {
        throw new Error("El método sendMessage debe ser implementado");
    }
}

module.exports = Notification;
