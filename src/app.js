import express from "express";
import morgan from "morgan";
import employeeRoutes from './routes/employee.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import requestRoutes from './routes/request.routes';

const app = express();

app.use(morgan('dev'));
app.use(express.json()); 
app.use('/api/employees', employeeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/request', requestRoutes);

export default app;