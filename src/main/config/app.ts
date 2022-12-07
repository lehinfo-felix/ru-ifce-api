import express, { Express } from "express"
import setupRoutes from '../config/routes'

export const setupApp = async (): Promise<Express> => {
  const app = express();
  setupRoutes(app);
  return app;
}