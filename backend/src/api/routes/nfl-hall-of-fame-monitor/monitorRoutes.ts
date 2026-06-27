import express from 'express';
import asyncWrapper from '../../../utils/asyncWrapper.js';
import { monitorController } from '../../controllers/monitorController.js';

export default function monitorRoutes(): void {
    const authRoute = express.Router();

    authRoute.get('/test', asyncWrapper(monitorController.test));
}