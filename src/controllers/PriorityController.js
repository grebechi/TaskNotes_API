import Annotation from "../models/AnnotationData.js";

export const getPriorityAnnotations = async (request, response) => {
    const priority = request.query;
    try {
        const priorityAnnotations= await Annotation.find(priority);
        response.status(200).json({ success: true, data: priorityAnnotations });
    } catch (error) {
        console.log("erro ao listar as anotações por prioridade:", error.message);
        response.status(500).json({ success: false, message: "Erro no servidor" });
    }
};

export const changePriorityAnnotation = async (request, response) => {
    const { id } = request.params;
    try {
        const annotation = await Annotation.findOne({ _id : id });

        if(annotation.priority){
            annotation.priority = false;
        }else{
            annotation.priority = true;
        }

        await annotation.save();
        response.status(200).json({ success: true, data: annotation });
    } catch (error) {
        console.log("erro procurar Annotation pelo ID:", error.message);
        response.status(500).json({ success: false, message: "ID não encontrado" });
    }
};