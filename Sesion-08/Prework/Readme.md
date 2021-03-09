### OBJETIVO
- Conocer qué es Material UI y como funciona.

#### DESARROLLO

# ¿Qué es Material UI?

<img src="https://s3.amazonaws.com/creativetim_bucket/products/80/original/opt_mdp_react_thumbnail.jpg?1522160852" width="470" align="left">

[**Material UI**](https://material-ui.com/) es actualmente el marco de interfaz de usuario más popular para React, y la biblioteca proporciona una gama de componentes listos para usar listos para usar. La biblioteca consta de componentes para diseño, navegación, entrada, comentarios y más. Material UI se basa en [**Material Design**](https://material.io/design/), un lenguaje de diseño que Google anticipó originalmente, pero que ahora es ampliamente adoptado en toda la comunidad de desarrolladores front-end.

Material Design se anunció originalmente en 2014 y se basó en el diseño anterior basado en tarjetas de [**Google Now**](https://en.wikipedia.org/wiki/Google_Now). Material Design es un lenguaje de diseño probado en batalla que viene con soporte para estándares modernos de desarrollo de front-end, como capacidad de respuesta, temas, dispositivos móviles primero y construido para ser muy personalizable.

Material UI toma lo que Material Design ha evolucionado y proporciona una biblioteca de componentes React que se pueden usar para construir React UX desde cero. Para tener una idea de lo que es posible con Material UI, hay una variedad de temas premium en la [**tienda Material UI**](https://material-ui.com/store/) que se adaptan a casos de uso comunes como paneles de administración y diseños de páginas de destino.

Material UI admite una [**variedad de soluciones CSS**](https://material-ui.com/guides/interoperability/) que incluyen componentes con estilo listos para usar, lo que facilita la migración de estilos existentes a la biblioteca. Aunque esto ayuda en el proceso de migración, resultará evidente que la [**propia solución de estilo de Material UI**](https://material-ui.com/styles/basics/#why-use-material-uis-styling-solution) construida sobre [**JSS**](https://github.com/cssinjs/jss) será más intuitiva y capaz de usarse junto con la biblioteca.

## ¿Estás pensando en adoptar Material UI?

Si recientemente te has encontrado con Material UI y te preguntas si vale la pena tomarse el tiempo para familiarizarse con la biblioteca y finalmente adoptarla, es posible que haya importantes beneficios para hacerlo. A continuación algnos ejemplos donde Material UI será muy atractivo:

+ Si se ha desarrollado aplicaciones React ad-hoc cuyo mantenimiento requiere mucho tiempo, la migración a Material UI le quitará gran parte de ese mantenimiento. Si tiene tipos de entrada complejos, por ejemplo, o un rango detallado de puntos de interrupción para administrar para que su comportamiento de respuesta sea el correcto, o su tema se vuelve más complejo y más difícil de mantener, Material UI abstraerá esos problemas y los hará mucho más fáciles de administrar a través de sus API pulidas y una variedad de accesorios útiles para cada componente.
+ Si necesita crear prototipos de nuevos diseños y diseños de aplicaciones, el sistema de cuadrícula de Material UI será más que suficiente para jugar con un diseño centrado en flexbox y un comportamiento receptivo.

Otras alternativas, aparte de Material UI con la cuales puedes trabajar son:

+ [Ant Design](https://ant.design/)
+ [React Bootstrap](https://react-bootstrap.github.io/)
+ [Blueprintjs](https://blueprintjs.com/)

**En los siguientes ejemplos y retos estaremos utilizando Material UI por las siguientes razones:**

+ Los componentes de Material-UI funcionan sin ninguna configuración adicional, y no ensucian el global scope, son autosuficientes y sólo inyectarán los estilos necesarios para su presentación. No dependen de ninguna hoja de estilos global como normalize.css.
+ La instalación de los archivos de Material-UI son a través de npm.
+ Soporta la carga modular si se utiliza alguna herramienta de paquetización como webpack o browserify, por lo que únicamente se cargarán en la aplicación web los componentes que se utilicen realmente.
