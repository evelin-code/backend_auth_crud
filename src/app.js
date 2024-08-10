import express from "express";
import morgan from "morgan";
import employeeRoutes from './routes/employees.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

const app = express();

app.use(morgan('dev'));
app.use(express.json()); 
app.use('/api/employees', employeeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

export default app;