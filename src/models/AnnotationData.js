import * as mongoose from 'mongoose';

const AnnotationDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean,
});

const Annotation =  mongoose.model('annotations',AnnotationDataSchema);
export default Annotation;