## Mi E-Commerce de Materiales de arte.
Esta es una tienda virtual de materiales de arte. Usando firebase como base de datos, utlicé CSS con estilos libres y totalmente mios.

## Como instalar el proyecto.
- Clonar el repositorio.
- npm install.
- npm run dev.

## Cosas a tener en cuenta.
Mientras realizada el proyecto, me aparecian inumerables errores, entre ellos unos relacionados con ErrorBoundary. Por lo que investigué estaba relacionado en errores de renderización en DOM. Como soluciones que encontré fue actualizar react-dom con el codigo

- npm update react react-dom

Este codigo solucionaba el problema de manera temporal por lo que me puse a investigar mas y di a la solucion de crear el componente ErrorBoundary.jsx que me brinda mas detalles del error que estaba teniendo y pude solucionar. Este componente debe envolverse en el app para que pueda detectar los errores. Como me funcionó, decidi dejar el componente en el proyecto ya que me funcionará para futuros errores.

Espero mucho que este proyecto sea de su agrado ya que lo hice con mucha dedicacion y consulté mas temas por mi parte para brindar un mejor proyecto. Aprendí muchisimo. Gracias a todos.
