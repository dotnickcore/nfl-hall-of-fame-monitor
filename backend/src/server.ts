import express, { Application } from 'express';
import appRoutes from './api/routes/appRoutes.js';

export default class Server {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public start(): void {
    this.setupMiddleware();
    this.setupRoutes();
    this.listenServer();
  }

  private setupRoutes(): void {
    appRoutes(this.app);
  }

  private setupMiddleware(): void {
     this.app.use(express.json());
  }

  private listenServer(): void {
    const port = process.env.PORT || 3000;

    this.app.listen(port, () => {
      console.log(`Connected to server with port ${port}`);
    });
  }
}