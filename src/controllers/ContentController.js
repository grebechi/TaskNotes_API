import Annotation from "../models/AnnotationData.js";

export const updateContentAnnotation = async (request, response) => {
    const { id } = request.params;
    const { notes }= request.body; // enviado pelo usuário
    try {
        const annotation = await Annotation.findOne({ _id : id });

        if(notes){
            annotation.notes = notes;
            await annotation.save();
        }
        
        response.status(200).json({ success: true, data: annotation });
    } catch (error) {
        console.log("erro procurar Annotation pelo ID:", error.message);
        response.status(500).json({ success: false, message: "ID não encontrado" });
    }
};