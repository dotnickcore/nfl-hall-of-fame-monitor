import express, { Application } from 'express';

export default class Server {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public start(): void {
    this.listenServer();
  }

  private listenServer() {
    const port = process.env.PORT || 3000;

    this.app.listen(port, () => {
      console.log(`Connected to server with port ${port}`);
    });
  }
}