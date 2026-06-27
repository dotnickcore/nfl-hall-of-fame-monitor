import { Application } from 'express';
import monitorRoutes from './nfl-hall-of-fame-monitor/monitorRoutes.js';

export default function appRoutes(app: Application): void {
  app.use('/api/v1/nfl-hall-of-fame-monitor', monitorRoutes);
}