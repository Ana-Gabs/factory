# Proyecto de Notificaciones con Factory Method en Node.js

Este proyecto implementa el **patrón de diseño Factory Method** para crear y enviar notificacionespor medio de distintos medios como **correo electrónico** y **SMS**. El programa permite al usuario seleccionar el tipo de notificación que desea enviar, y si se elige una opción no valida, el sistema maneja el error adecuadamente.

## Estructura del Proyecto
La estructura de directorios es la siguiente:

.
│   index.js                    # Entrada del programa
│   package-lock.json           # Arhivo de dependencias del proyecto
│   package.json                # Archivo de bloqueo de dependencias
│   README.md                   # Archivo readme
│
└───clases/                     # Carpeta para las clases de notificaciones
    └───EmailNotification.js    # Implemetación de notificaciones por correo electronico
    └───Notificacion.js         # Clase base de las notificaciones
    └───NotificationFactory.js  # Clase factory se encarga de crear la notificaciones     
    └───SMSNotification.js      # Implemetación de notificaciones por SMS

## Ejecute el programa 
Para correr el programa ectrba **node index.js** sobre la terminal donde esta abierto el programa
El programa solicitara que seelccione el tipo de notificación que desea recibir 
    **1** Para recir una notificaión por correo electronico
    **2** Para recibir una notificación por SMS
En caso de no seleccionar una opción valida el programa arrojara un mensaje de error en la consola

## Flujo de Ejecución "1"
************** Patron Factory **************
Seleccione una opcion de notificación:
1. Correo electronico
2. SMS
Ingresa el numero de la opción (1 o 2): 1
📧 Enviando correo electrónico: Este es un mensaje de prueba para email.

## Flujo de Ejecución "2"
************** Patron Factory **************
Seleccione una opcion de notificación:
1. Correo electronico
2. SMS
Ingresa el numero de la opción (1 o 2): 2
📱 Enviando SMS: Este es un mensaje de prueba para sms.
PS C:\Users\Gaby_Contreras\patrones\factory>

## Flujo de Ejecución "erroneo"
************** Patron Factory **************
Seleccione una opcion de notificación:
1. Correo electronico
2. SMS
Ingresa el numero de la opción (1 o 2): 3
❌ Error: Tipo de notificación desconocido: 3
Ingresa el numero de la opción (1 o 2): 1
📧 Enviando correo electrónico: Este es un mensaje de prueba para email.
PS C:\Users\Gaby_Contreras\patrones\factory>

## Clases principales
1. Notification (clase base): Define la interfaz comun para todas las notificaciones con el metodo sendMessage(message).
2. EmailNotification y SMSNotification (clases concretas): Extienden la clase base Notification e implementan el metodo sendMessage() para su canal correspondiente.
4. NotificationFactory: Contiene el metodo estático createNotification(type), que crea y devuelve una instancia del tipo de notificación solicitado.

## Metodos
**NotificationFactory.createNotification(type):**
1. Recibe como parámetro el tipo de notificación (email o sms).
2. Devuelve una instancia de la clase EmailNotification o SMSNotification.
3. Si el tipo no es válido, lanza un error.