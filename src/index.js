import express from 'express';
import cors from 'cors';
import app from './app';
import './databaseSync';

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
