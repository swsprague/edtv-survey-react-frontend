import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import Question from '../Questions/Question'

const ResponseForm = ({ handleSubmit, userResponse, question }) => {
  console.log('this question is ', question)
  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <Form.Group controlId="answers" as={Row}>
          <Form.Label as="legend" column sm={2}>
            CHOOSE WISELY!!!!
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              onSubmit={handleSubmit}
              type="radio"
              label={question.answers[0]}
              name="answer"
              value={question.answers[0]}
              id="formHorizontalRadios1"
              // onChange={handleChange}
            />
            <Form.Check
              onSubmit={handleSubmit}
              type="radio"
              label={question.answers[1]}
              name="answer"
              value={question.answers[1]}
              id="formHorizontalRadios2"
              // checked={userResponse === question.answers[1]}
              // onChange={handleChange}
            />
            <Form.Check
              onSubmit={handleSubmit}
              type="radio"
              label={question.answers[2]}
              name="answer"
              value={question.answers[2]}
              // checked={userResponse === question.answers[2]}
              id="formHorizontalRadios3"
              // onChange={handleChange}
            />
            <Form.Check
              onSubmit={handleSubmit}
              type="radio"
              label={question.answers[3]}
              value={question.answers[3]}
              name="answer"
              // checked={userResponse === question.answers[3]}
              id="formHorizontalRadios4"
              // onChange={handleChange}
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Button
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  )
}
// <Form.Check
//   type="radio"
//   label={question.answers[0]}
//   name={question.subject}
//   id={question._id}
// />

// <Form.Label>Response 1</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={response.questions[0].responses[0]}
//   onChange={handleChange}
//   name="q1r1"
// />
// <Form.Label>Response 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={response.questions[0].responses[1]}
//   onChange={handleChange}
//   name="q1r2"
// />
// <Form.Label>Response 3</Form.Label>
// <Form.Control
//   type="text"
//   placeholder="Enter a Response"
//   value={response.questions[0].responses[2]}
//   onChange={handleChange}
//   name="q1r3"
// />
//
// <Form.Label>Question 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Question"
//   value={response.questions[1]}
//   onChange={handleChange}
//   name="question 2"
// />
// <Form.Label>Response 1</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={response.questions[1].responses[0]}
//   onChange={handleChange}
//   name="q2r1"
// />
// <Form.Label>Response 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={response.questions[1].responses[1]}
//   onChange={handleChange}
//   name="q2r2"
// />
// <Form.Label>Response 3</Form.Label>
// <Form.Control
//   type="text"
//   placeholder="Enter a Response"
//   value={response.questions[1].responses[2]}
//   onChange={handleChange}
//   name="q2r3"
// />
//
// <Form.Label>Question 3</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Question"
//   value={response.questions[2]}
//   onChange={handleChange}
//   name="question 3"
// />
// <Form.Label>Response 1</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={response.questions[2].responses[0]}
//   onChange={handleChange}
//   name="q3r1"
// />
// <Form.Label>Response 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={response.questions[2].responses[1]}
//   onChange={handleChange}
//   name="q3r2"
// />
// <Form.Label>Response 3</Form.Label>
// <Form.Control
//   type="text"
//   placeholder="Enter a Response"
//   value={response.questions[2].responses[2]}
//   onChange={handleChange}
//   name="q3r3"
// />

export default ResponseForm
