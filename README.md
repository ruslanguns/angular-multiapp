# Angular MultiApp Monorepo Prototype

Esta aplicación ofrece una propuesta para hacer una multi aplicación de Angular para grandes arquitecturas.

> Esta aplicación está en proceso de desarrollo. Bienvenidas las ideas para mejorar las buenas prácticas en monorepos de Angular.

## Instrucciones

Para instalar el proyecto simplemente corremos `npm i`

### Modo developer

Para ejecutar una applicación en `ng serve` devemos usar la bandera "--project":

`ng serve --project app1`.

Así conseguiremos lanzar cada sub aplicación por separado. Lo mismo para usar los schematics para creación de módulos, componentes, servicios, directivas, pipes, etc... solo debemos apuntar el project donde querramos usarlo.

### Para lanzar la App principal

Simple se necesitaría lanzar `ng serve` esto lanzaría la app principal o mejor llamada el CORE. Esto nos enviará a la estructura de navegación multiApp.

## TOFIX:

Recomiento la extensión Todo Tree y TODO Highlight para VsCode para tener mas organizado estas cosas:

- [x] Comunicación entre aplicaciones desde el Core App
- [x] En las Sub Aplicaciones la ruta '\*' no tiene efecto o no funciona.
- [x] El home '/' debería ir a 'core' pero no funciona.

Saludos!
