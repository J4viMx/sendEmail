
# Prueba Técnica envio de email


## Descripción
Este proyecto es una prueba técnica para Customer Scoops para el puesto de Frontend Developer Jr, desarrollado con Node y typescript. Consiste en la maquetación de una platilla de correo y el envio de esta por un servicio llamado resend.

## Características Principales
- **Plantilla html**: Se hace uso de html y estilos en linea para una correcta visualización de la plantilla
- **Función de envio del correo**: Se crea una función que permite el envio del correo al ejecutarla 

## Instalación y Uso
Sigue los pasos a continuación para instalar y ejecutar el proyecto en tu máquina local:

1. **Requisitos previos**: Asegúrate de tener [Node.js](https://www.npmjs.com/package/nodemon), [ts-node](https://www.npmjs.com/package/ts-node) y [typescript](https://www.typescriptlang.org/download/) instalado en tu sistema.
2. **Clona el repositorio**:
   ```bash
   git clone https://github.com/J4viMx/sendEmail.git
   cd tu-repositorio
   ```
3. **Instala las dependencias**:
   ```bash
   npm install
   ```
4. **Declarar variables de entorno**: Hacer una copia de el archivo .env.template y renombrarlo como .env y colocar los datos correspondientes
5. **Ejecuta el proyecto**:
   ```bash
   npm start
   ```

## Proyecto frontend 
[Repositorio](https://github.com/J4viMx/customerScoops)

## Detalles
- Se uso la libreria resend recomendada en las instrucciones del examen, para la configuración de uso de esta libreria a dominios no propios se uso un hosting personal y se configuraron DNS para el correcto funcionamiento

## Estructura del Proyecto
La estructura de carpetas del proyecto es la siguiente:

```
src/
|-- assets/         # Plantilla HTML
|-- index.ts/       # Función para envio de correo

```
## Autor
Desarrollado por **Javier Juarez**.

## Estado del Proyecto
El proyecto está completado y no se encuentra en desarrollo activo.
