[`React Fundamentals`](../../README.md) > [`Sesión 07: Progressive web apps (PWA)`](../Readme.md) > `Ejemplo 1`

## Push notifications

### OBJETIVO
- Configurar la aplicación react para hacerla progressive web app.
- Configurar un service worker.
- Recibir push notifications

#### REQUISITOS 
- Tener Node instalado.
- Tener un servidor que mande la push notifications (carpeta `push-notification`)

#### DESARROLLO

1. Agregar el archivo `serviceWorker.js` a la carpeta `src` con el siguiente script.
```
export function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
    navigator.serviceWorker.ready
      .then(function(registration) {
        return registration.pushManager.getSubscription();
      })
      .then(function(subscription) {
        if (!subscription) {
          subscribe();
        } else {
          console.log(
            JSON.stringify({
              subscription: subscription,
            })
          );
        }
      });
  }
}

function subscribe() {
  navigator.serviceWorker.ready
    .then(function(registration) {
      const vapidPublicKey = 'BDThDairU5meugiFMDGdOPkmf3ZJN_5Ajf8KuDPHPYTERDCrQJjBKEdBPKQvKoPv_vZSXN5EflwLaXenajwd1e0';

      return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
      });
    })
    .then(function(subscription) {
      console.log(
        JSON.stringify({
          subscription: subscription,
        })
      );
    })
    .catch(err => console.error(err));
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}

```

2. La función `register` nos registra el service worker `service-worker.js` y su vez establece la subscripción para poderla usar en el servicio que envía las Push Notifications.

3. La función `subscribe` establece el registro de las llaves públicas que son válidas para enviar Push Notifications al navegador dónde se está corriendo esta aplicación.

4. La función `urlBase64ToUint8Array` es un helper que nos permite escribir un array de enteros sin signo para poder hacer la codificación en base64.

5. Agregamos el service worker `service-worker.js` a la carpeta `public` pues siempre tiene que estar en la raíz de lo desplegado en el servidor web.
```
self.addEventListener('push', event => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Tarea agregada';
  const options = {
    body: event.data.text(),
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
```

6. Esete service worker solo está a la escucha de los eventos `push` (las Push Notifications), y cuándo llega alguna, simplemente la despliega.

7. En el frontend es todo lo que se necesita para tener un service worker funcionando (registrarlo) y hacer algo con él.

8. Con nuestro proyecto ayuda, le mandamos Push Notifications a la aplicaicón. (Este proyecto está probado en Mac os X y Linux, probablemente funciona el Windows, pero noe está probado ahí). Además depende de cURL y de Go.
```
$ cd push-notification
$ curl -X POST http://localhost:4000/todos -H 'Content-Type: application/json' -d'{"title": "Agregar push notifications", "details": ["uno", "dos"], "done": false}' && go run main.go -m 'Agregar push notifications'
```

[`Siguiente: Reto-01`](../Reto-01)
