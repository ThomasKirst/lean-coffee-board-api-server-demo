import mongoose from 'mongoose';

const { Schema } = mongoose;

// Blaupause
const questionSchema = new Schema({
  text: { type: String, required: true },
  name: { type: String, required: true },
});

// Question Model erlaubt uns die CRUD-Operationen
const Question =
  mongoose.models.Question || mongoose.model('Question', questionSchema);

export default Question;
