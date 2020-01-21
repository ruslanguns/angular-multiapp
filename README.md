
# Angular MultiApp Prototype

Esta aplicación ofrece una propuesta para hacer una multi aplicación de Angular para grandes arquitecturas.

> De momento no funciona!
> Agradezco quien quiera echarme una mano.

## Instrucciones

Para instalar el proyecto simplemente corremos `npm i`

### Modo developer

Para ejecutar una applicación en `ng serve` devemos usar la bandera "--project":

`ng serve --project app1`.

Así conseguiremos lanzar cada sub aplicación por separado. Lo mismo para usar los schematics para creación de módulos, componentes, servicios, directivas, pipes, etc... solo debemos apuntar el project donde querramos usarlo.

### Para lanzar la App principal

Simple se necesitaría lanzar `ng serve` esto lanzaría la app principal o mejor llamada el CORE. El problema es que aún no consigo que funcione el Lazy loading para que cargue como rutas las sub aplicaciones. `EN PROCESO DE TRABAJO`

Saludos!
