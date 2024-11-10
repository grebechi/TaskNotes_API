import express from "express";
import * as AnnotationController from "./controllers/AnnotationController.js";

const routes = express.Router();

routes.post("/annotations", AnnotationController.createAnnotation);
routes.get("/annotations", AnnotationController.getAnnotations);
routes.delete("/annotations/:id", AnnotationController.deleteAnnotation);
//routes.delete("/:id", deleteAnnotation);

export default routes;
