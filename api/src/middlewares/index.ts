import express, { Express } from "express";
import { requestResponseFormatter } from "./request-response-formatter";

export const setupMiddlewares = (app: Express) => {
  app.use(express.json());
  app.use(requestResponseFormatter);
};
