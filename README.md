
NOMBRE COMPLETO : HUBERT CHIM MOSIEJ 

RESPUESTA A LAS PREGUNTAS:
Para implementar paginación:
* Frontend: Añadir un control de paginación (botones de "Siguiente", "Anterior") que pase el número de página al backend. En Angular, se podría usar un servicio que realice las solicitudes API con un parámetro page, actualizando la lista de películas según el número de página seleccionado.
* Backend: Al recibir el parámetro page, el backend puede hacer una consulta a la base de datos con un offsetbasado en el número de página. Por ejemplo, en SQL:
SELECT * FROM movies LIMIT 20 OFFSET (page - 1) * 20;
Esto devolvería 20 películas por página.

Si tuviera que eliminar películas de un array de 7 millones de elementos en Angular, lo haría de la siguiente manera:
1. Usar filter(): Primero, utilizaría el método filter() de JavaScript para filtrar las películas según el valor de vote_average. 
2. Procesamiento paralelo con Web Workers: Para mejorar el rendimiento, aprovecharía Web Workers para procesar los datos en segundo plano sin bloquear la interfaz de usuario, haciendo que el filtrado de datos sea más rápido y eficiente.
3. Optimización de estructuras de datos: Si la eficiencia es crítica, consideraría utilizar una estructura de datos optimizada como un árbol binario para realizar búsquedas rápidas y filtrar de manera más eficiente las películas que no superen el umbral de vote_average.

LIBRERIAS Y COMPONENTES DE TERCEROS
FormsModule: Para manejar formularios reactivos.
CommonModule: Para usar directivas comunes como ngFor y ngIf.
HttpClientModule: Para realizar solicitudes HTTP.

