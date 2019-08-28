import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const QuestionForm = ({ handleChange, handleSubmit, question }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="subject">
      <Form.Label>Question Subject</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter a Subject"
        value={question.subject}
        onChange={handleChange}
        name="subject"
      />
    </Form.Group>

    <Form.Group controlId="answers">
      <Form.Label>Answer 1</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter an Answer"
        value={question.answers.answer1}
        onChange={handleChange}
        name="answer1"
      />
    </Form.Group>

    <Form.Group controlId="answers">
      <Form.Label>Answer 2</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter an Answer"
        value={question.answers.answer2}
        onChange={handleChange}
        name="answer2"
      />
    </Form.Group>

    <Form.Group controlId="answers">
      <Form.Label>Answer 3</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter an Answer"
        value={question.answers.answer3}
        onChange={handleChange}
        name="answer3"
      />
    </Form.Group>

    <Form.Group controlId="answers">
      <Form.Label>Answer 4</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter an Answer"
        value={question.answers.answer4}
        onChange={handleChange}
        name="answer4"
      />
    </Form.Group>

    <Button
      variant="primary"
      type="submit"
    >
      Submit
    </Button>
  </Form>
)

// <Form.Group controlId="responses">
//   <Form.Label>Responses</Form.Label>
//   <Form.Control
//     type="text"
//     placeholder="Enter a Response"
//     value={question.responses}
//     onChange={handleChange}
//     name="responses"
//   />
// </Form.Group>

// <Form.Label>Response 1</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={question.questions[0].responses[0]}
//   onChange={handleChange}
//   name="q1r1"
// />
// <Form.Label>Response 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={question.questions[0].responses[1]}
//   onChange={handleChange}
//   name="q1r2"
// />
// <Form.Label>Response 3</Form.Label>
// <Form.Control
//   type="text"
//   placeholder="Enter a Response"
//   value={question.questions[0].responses[2]}
//   onChange={handleChange}
//   name="q1r3"
// />
//
// <Form.Label>Question 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Question"
//   value={question.questions[1]}
//   onChange={handleChange}
//   name="question 2"
// />
// <Form.Label>Response 1</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={question.questions[1].responses[0]}
//   onChange={handleChange}
//   name="q2r1"
// />
// <Form.Label>Response 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={question.questions[1].responses[1]}
//   onChange={handleChange}
//   name="q2r2"
// />
// <Form.Label>Response 3</Form.Label>
// <Form.Control
//   type="text"
//   placeholder="Enter a Response"
//   value={question.questions[1].responses[2]}
//   onChange={handleChange}
//   name="q2r3"
// />
//
// <Form.Label>Question 3</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Question"
//   value={question.questions[2]}
//   onChange={handleChange}
//   name="question 3"
// />
// <Form.Label>Response 1</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={question.questions[2].responses[0]}
//   onChange={handleChange}
//   name="q3r1"
// />
// <Form.Label>Response 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={question.questions[2].responses[1]}
//   onChange={handleChange}
//   name="q3r2"
// />
// <Form.Label>Response 3</Form.Label>
// <Form.Control
//   type="text"
//   placeholder="Enter a Response"
//   value={question.questions[2].responses[2]}
//   onChange={handleChange}
//   name="q3r3"
// />

export default QuestionForm
