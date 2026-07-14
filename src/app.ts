import express from 'express';
import organizationRouter from "./modules/organization/organization.route.js";
import { errorMiddleware } from './common/middleware/error.middleware.js';
import userRouter from "./modules/user/user.route.js";

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running' })
})

app.use('/api/organizations', organizationRouter)
app.use('/api/users', userRouter)
app.use(errorMiddleware)

export default app;