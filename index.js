const readline = require('readline');
const NotificationFactory = require('./clases/NotificationFactory');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("************** Patron Factory **************");
console.log("Seleccione una opcion de notificación:");
console.log("1. Correo electronico");
console.log("2. SMS");

function solicitarOpcion() {
    rl.question('Ingresa el número de la opción (1 o 2): ', (opcion) => {
        let tipoNotificacion;

        if (opcion === '1') {
            tipoNotificacion = 'email';
        } else if (opcion === '2') {
            tipoNotificacion = 'sms';
        } else {

            try {
                const unknownNotification = NotificationFactory.createNotification(opcion);
                unknownNotification.sendMessage(`Este es un mensaje de prueba para el tipo ${opcion}.`);
            } catch (error) {
                console.error(`❌ Error: ${error.message}`);
            }
            solicitarOpcion(); // volver a solicitar un nemero
            return;  
        }

        // crea la notificación según la solicitud
        try {
            const notification = NotificationFactory.createNotification(tipoNotificacion);
            notification.sendMessage(`Este es un mensaje de prueba para ${tipoNotificacion}.`);
        } catch (error) {
            console.error(`❌ Error: ${error.message}`);
        }

        rl.close();  
    });
}

solicitarOpcion();
