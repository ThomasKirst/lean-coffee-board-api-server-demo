import mongoose from 'mongoose';

const { Schema } = mongoose;

// Blaupause
const questionSchema = new Schema({
  id: { type: String },
  text: { type: String, required: true },
  name: { type: String, required: true },
});

// Question Model erlaubt uns die CRUD-Operationen
const Question =
  mongoose.model.Question || mongoose.model('Question', questionSchema);

export default Question;
