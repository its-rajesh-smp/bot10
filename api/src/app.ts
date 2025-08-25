import { setupMiddlewares } from "@/middlewares";
import { router } from "@/routes";
import express from "express";

export const createApp = () => {
  const app = express();
  setupMiddlewares(app);
  app.use(router);
  return app;
};
