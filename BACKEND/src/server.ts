import swaggerUi from 'swagger-ui-express';
import app from './app';
import swaggerDocs from './swagger.json';

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
