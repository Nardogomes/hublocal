import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";

import * as CompanyController from "./src/controllers/CompanyController";
import * as LocationController from "./src/controllers/LocationController";
import * as ResponsibleController from "./src/controllers/ResponsibleController";

const PORT = 3333

async function startup() {
  await createConnection();
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.post('/savecompany', CompanyController.save);
  app.get('/allcompany', CompanyController.getAll);

  app.post('/savelocation', LocationController.save);
  app.get('/alllocation', LocationController.getAll);

  app.post('/saveresponsible', ResponsibleController.save);
  app.get('/allresponsible', ResponsibleController.getAll);

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

startup();
