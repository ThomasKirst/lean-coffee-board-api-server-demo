import dbConnect from '../../../db/dbConnect';
import Question from '../../../db/models/Question';

// /api/questions
export default async function handler(req, res) {
  // 1. Connect to the database and wait for the connection to be established
  await dbConnect();

  // 2. Read data from database !!asynchronously!! await for it!
  const questions = await Question.find(); // []? => It is a mongoose Collection

  // 3. Translate Collection to Array
  // const questionsArray = questions.map((question) => {
  //   return {
  //     id: question.id,
  //     name: question.name,
  //     text: question.text,
  //   };
  // });

  console.log(questions);

  res.status(200).json(questions);
}
