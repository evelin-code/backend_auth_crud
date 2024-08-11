import express from "express";
import morgan from "morgan";
import cors from 'cors';
import employeeRoutes from './routes/employee.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import requestRoutes from './routes/request.routes';

const app = express();

// Habilitar CORS primero
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
}));

// Middleware
app.use(morgan('dev'));
app.use(express.json()); 

// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/request', requestRoutes);

export default app;