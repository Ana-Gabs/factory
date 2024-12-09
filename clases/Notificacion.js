//clase base
class Notification {
    sendMessage(message) {
        throw new Error("El metodo sendMessage debe ser implementado");
    }
}

module.exports = Notification;
