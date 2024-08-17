# Rest Project + TypeScript

Este proyecto previamente inicializado tiene todo lo necesario para trabajar con TypeScript, Express y Rest.

Cada paso de su configuración ya se ha realizado previamente en el curso, por lo que solo es necesario clonar el proyecto y comenzar a trabajar.


## Instalación

1. Clonar .env.template a .env y configurar las variables de entorno
2. Ejecutar `npm install` para instalar las dependencias
3. En caso de necesitar base de datos, configurar el docker-compose.yml y ejecutar `docker-compose up -d` para levantar los servicios deseados.
4. Llenar la base de datos con los datos de prueba ejecutando `npm run seed` no hacerlo en producción
5. Ejecutar `npm run dev` para levantar el proyecto en modo desarrollo
6. Generar el password de nodemailer en: `https://myaccount.google.com/u/0/apppasswords?pli=1&rapt=AEjHL4NrecPVJVzHW2f0IyYdm0YyG3vhGmSim9OTNJDSbxkR2X9lF6PwQAH5EJULlnEBlt1Iyn5g1jO7WV8Fhitjle3T4As_NlSq2CRQIfQqARNkeUajEr8`
7. Tener el dominio como `gmail` y la doble verificacion en el email