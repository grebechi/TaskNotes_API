import Annotation from "../models/AnnotationData.js";

export const getAnnotations = async (request, response) => {
    try {
        const annotations= await Annotation.find({});
        response.status(200).json({ success: true, data: annotations });
    } catch (error) {
        console.log("erro ao carregar a anotação:", error.message);
        response.status(500).json({ success: false, message: "Erro no servidor" });
    }
};

export const createAnnotation = async (request, response) => {
    const annotation = request.body; // Data enviada pelo usuário

    if (!annotation.title || !annotation.notes || annotation.priority === undefined) {
        return response
            .status(400)
            .json({ success: false, message: "Por favor, preencha todos os campos" });
    }

    const newAnnotation = new Annotation(annotation);

    try {
        await newAnnotation.save();
        response.status(201).json({ success: true, data: newAnnotation });

    } catch (error) {
        console.error("Erro ao criar Anotação:", error.message);
        response.status(500).json({ success: false, message: "Erro no servidor" });
    }
}; 

export const deleteAnnotation = async (request, response) => {
    const { id } = request.params; // ID enviada pelo usuário
    try {
        const annotationDeleted = await Annotation.findOneAndDelete({ _id : id });
        response.status(200).json({ success: true, data: annotationDeleted });
    } catch (error) {
        console.log("Erro ao tentar deletar:", error.message);
        response.status(401).json({ success: false, message: "Não foi possível encontrar o registro para deletar" });
    }
};
