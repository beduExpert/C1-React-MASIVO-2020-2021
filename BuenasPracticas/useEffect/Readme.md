## Buenas prácticas para `useEffect`

Cada que veamos los siguientes escenarios, podemos hacerlo de una mejor manera más limpia y ordenada:
   - Cuando veamos [alertas en la consola del navegador](#alertas-en-la-consola-del-navegador).
   - Cuando tengamos [funcionalidades diferentes mezcladas](#funcionalidades-diferentes-mezcladas).

Recuerda que no es necesario hacer esto, pero es sugerido para facilitar el entendimiento del código.

### Alertas en la consola del navegador

1. Cada vez que veamos una alerta como la siguiente `React Hook React.useEffect has a missing dependency: 'cualquierCosa'` podemos evitarla haciendo una función fuera del `useEffect` y añadiendola después.

2. Ejemplo que causa alerta:
```
React.useEffect(() => {
   console.log('Te damos la bienvenida ' + props.nombre);
}, []);
```

3. En este caso estamos utilizando `props.nombre` dentro del `useEffect` pero no lo mandamos dentro de `[]`.

4. Para poder mantener el código actual sin alerta, creamos una función y la pasamos directamente al `useEffect`.
```
const didMount = () => {
   console.log('Te damos la bienvenida ' + props.nombre);
};
React.useEffect(didMount, []);
```

5. Recomendado llamar a la función `didMount` para que en el futuro tú u otros desarrolladores entiendan con más claridad para que funciona ese código.

6. En el caso en que tu `useEffect` tenga varios ciclos de vida como aquí:
```
React.useEffect(() => {
   console.log('Te damos la bienvenida ' + props.nombre);
   return () => {
      console.log('Adiós');
   }
}, []);
```

7. Hacemos lo mismo pero cambiamos el nombre de la función haciendo referencia a lo que trata. Como en este caso trata de `nombre`, llamaremos a la función `nombreLifecycle`.
```
const nombreLifecycle = () => {
   console.log('Te damos la bienvenida ' + props.nombre);
   return () => {
      console.log('Adiós');
   }
};
React.useEffect(nombreLifecycle, []);
```

8. Ó podemos crear 2 funciones, una `didMount` y una `willUnmount` y usar 2 `useEffect` diferentes.
```
const didMount = () => {
   console.log('Te damos la bienvenida ' + props.nombre);
};
React.useEffect(didMount, []);

const willUnmount = () => {
   return () => {
      console.log('Adiós');
   }
};
React.useEffect(willUnmount, []);
```

### Funcionalidades diferentes mezcladas

1. Si vemos un `useEffect` que tenga demasido código o que haga cosas que no tengan nada que ver con lo que se esta haciendo, podemos separarlos.

2. Este `useEffect` tiene funcionalidades de 2 tipos, usuarios y tareas:
```
React.useEffect(() => {
   props.traerUsuarios()
      .then((usuarios) => {
         console.log(usuarios.data);
      });

   props.traerTareas()
      .then((tareas) => {
         console.log(tareas.data);
      });

   return () => {
      props.borrarUsuarios();
   }
}, []);
``` 

3. Tenemos 2 opciones, separarlas por funcionalidad:
```
const usuariosLifecycle = () => {
   props.traerUsuarios()
      .then((usuarios) => {
         console.log(usuarios.data);
      });

   return () => {
      props.borrarUsuarios();
   }
};
React.useEffect(usuariosLifecycle, []);

const didMount = () => {
   props.traerTareas()
      .then((tareas) => {
         console.log(tareas.data);
      });
};
React.useEffect(didMount, []);
```

4. Ó separarlos por ciclo de vida:
```
const didMountUsuarios = () => {
   props.traerUsuarios()
      .then((usuarios) => {
         console.log(usuarios.data);
      });
};
React.useEffect(didMountUsuarios, []);

const willUnmountUsuarios = () => {
   return () => {
      props.borrarUsuarios();
   }
};
React.useEffect(willUnmountUsuarios, []);

const didMountTareas = () => {
   props.traerTareas()
      .then((tareas) => {
         console.log(tareas.data);
      });
};
React.useEffect(didMountTareas, []);
```
