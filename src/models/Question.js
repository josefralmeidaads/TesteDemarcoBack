const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
questions: 
[
  {
    name: String,
    question: String,
    propositions: [{
      props: String,
      correct: Boolean,
    }],
  }
],
user: {
  type: mongoose.Schema.Types.ObjectId,
ref: 'User',
}
})

module.exports = mongoose.model('Question', QuestionSchema);