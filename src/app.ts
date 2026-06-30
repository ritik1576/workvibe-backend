import express from 'express';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Middleware
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running' })
})

export default app;