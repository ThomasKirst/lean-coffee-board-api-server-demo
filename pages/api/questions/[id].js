import dbConnect from '../../../db/dbConnect';
import Question from '../../../db/models/Question';

// /api/questions/6390625d81028414270e1657 // [id]
export default async function handler(req, res) {
  await dbConnect();

  const id = req.query.id;

  const question = await Question.findById(id);

  res
    .status(200)
    .json({ id: question._id, name: question.name, text: question.text });
}
