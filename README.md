# Servicio de Carga de Excels - Reto de backend

Un servicio para cargar y validar archivos Excel.

## Endpoints

-   **Subir un archivo Excel con mapeo y callback**

    -   URL: `/upload`
    -   Método: `POST`
    -   Descripción: Permite subir un archivo Excel junto con un mapeo y un callback para procesarlo.
    -   Respuesta: El cuerpo de la respuesta contendrá el ID de la tarea de carga (`taskId`).

-   **Obtener el estado de una tarea de carga de archivos**

    -   URL: `/tasks/:taskId`
    -   Método: `GET`
    -   Descripción: Obtiene el estado de una tarea de carga de archivos mediante su ID (`:taskId`).

-   **Obtener los errores de una tarea de carga de archivos**

    -   URL: `/tasks/:taskId/errors`
    -   Método: `GET`
    -   Descripción: Obtiene los errores de una tarea de carga de archivos mediante su ID (`:taskId`).

## Ejemplo de uso

Aquí tienes un ejemplo de cómo utilizar los endpoints:

1. Subir un archivo Excel con mapeo y callback:

    ```
    POST /upload
    ```

    En el cuerpo de la solicitud, incluye el archivo Excel junto con el mapeo y el callback.

2. Obtener el estado de una tarea de carga de archivos:

    ```
    GET /tasks/:taskId
    ```

    Reemplaza `:taskId` en la URL con el ID de la tarea que deseas consultar.

3. Obtener los errores de una tarea de carga de archivos:

    ```
    GET /tasks/:taskId/errors
    ```

    Reemplaza `:taskId` en la URL con el ID de la tarea de la cual deseas obtener los errores.

## Guía de inicio rápido

Sigue estos pasos para poner en marcha el servicio de carga de Excels.

### Prerrequisitos

Asegúrate de tener instalado Docker en tu máquina.

### Pasos

1. Clona este repositorio:

    ```shell
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega al directorio del proyecto:

    ```shell
    cd <DIRECTORIO_DEL_PROYECTO>
    ```

3. Construye la imagen de Docker:

    ```shell
    docker-compose up -d
    ```

4. Levante el servidor:

    ```shell
    npm run start
    ```

5. El servicio estará disponible en `http://localhost:3000`.

### Librerías instaladas

El proyecto utiliza las siguientes librerías:

#### Dependencias

-   **axios**: Se utiliza para realizar solicitudes HTTP a otros servicios.
-   **body-parser**: Permite analizar los cuerpos de las solicitudes HTTP.
-   **express**: Framework web utilizado para crear la API REST.
-   **mongoose**: Biblioteca de modelado de objetos MongoDB para Node.js.
-   **multer**: Middleware para el manejo de datos de formularios multipart en Express.
-   **xlsx**: Biblioteca para leer y escribir archivos Excel.

#### Dependencias de desarrollo

-   **nodemon**: Utilidad que ayuda a desarrollar aplicaciones Node.js reiniciando automáticamente la aplicación cuando se detectan cambios en el código.

Estas librerías se han elegido por su eficiencia, facilidad de uso y popularidad en la comunidad de desarrollo de Node.js.

## Mejoras

Sugerencias para mejorar el proyecto:

1. **Agregar validación con Joi**: Incorporar la biblioteca Joi para validar los datos de entrada en las solicitudes. Joi proporciona una forma sencilla y expresiva de definir esquemas y reglas de validación para los datos. Esto permitirá asegurar que los datos recibidos en la API cumplan con ciertos criterios antes de procesarlos.

2. **Manejar errores con Boom**: Emplear la biblioteca Boom en lugar de utilizar objetos `Error` genéricos para manejar los errores de manera más estructurada y consistente en toda la aplicación. Boom facilita la creación de respuestas de error con códigos, mensajes y datos adicionales, lo que mejora la comprensión y el manejo de errores tanto en el lado del cliente como en el lado del servidor.

3. **Implementar autenticación en la API y en la base de datos**: Considerar agregar autenticación a la API para proteger rutas o recursos sensibles. Se pueden utilizar bibliotecas populares como Passport.js o JSON Web Tokens (JWT) para implementar diferentes estrategias de autenticación, como autenticación basada en tokens o autenticación con nombre de usuario y contraseña. Además, es importante aplicar prácticas adecuadas de seguridad en la base de datos, como encriptación de contraseñas y control de acceso basado en roles.

Estas mejoras fortalecerán la seguridad y la confiabilidad de la API, así como mejorarán la experiencia general del usuario al proporcionar una validación más sólida y un manejo de errores más consistente.
