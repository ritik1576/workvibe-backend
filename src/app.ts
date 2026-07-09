import express from 'express';
import organizationRouter from "./modules/organization/organization.route.js";

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Middleware
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running' })
})
app.use('/api/organizations', organizationRouter)

export default app;