import express from 'express';
import organizationRouter from "./modules/organization/organization.route.js";
import { errorMiddleware } from './common/middleware/error.middleware.js';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running' })
})
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use('/api/organizations', organizationRouter)
app.use(errorMiddleware)

export default app;