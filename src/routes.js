import express from "express";
import * as AnnotationController from "./controllers/AnnotationController.js";
import * as PriorityController from "./controllers/PriorityController.js";

const routes = express.Router();


// Rotas Annotations
routes.get("/annotations", AnnotationController.getAnnotations);
routes.post("/annotations", AnnotationController.createAnnotation);
routes.delete("/annotations/:id", AnnotationController.deleteAnnotation);

// Rotas Priority
routes.get("/priorities", PriorityController.getPriorityAnnotations);
routes.post("/priorities/:id", PriorityController.changePriorityAnnotation);



export default routes;
