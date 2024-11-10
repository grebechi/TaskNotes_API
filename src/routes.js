import express from "express";
import * as AnnotationController from "./controllers/AnnotationController.js";

const routes = express.Router();

routes.post("/annotations", AnnotationController.createAnnotation);
routes.get("/annotations", AnnotationController.getAnnotations);
//routes.put("/:id", updateAnnotation);
//routes.delete("/:id", deleteAnnotation);

export default routes;
