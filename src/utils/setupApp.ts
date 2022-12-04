import express from "express";
import cors from "cors";
import apiRoute from "../routes";
export function setupApp(): express.Express {
  const app = express();
  // json
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // cors
  app.use(
    cors({
      origin: ["http://localhost:3000"],
    })
  );

  //app use
  app.use("/api", apiRoute);

  return app;
}
