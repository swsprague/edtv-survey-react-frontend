import React from 'react'
import { Form, Row, Col } from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// import Question from '../Questions/Question'

const ResponseForm = ({ handleChange, handleSubmit, response, question }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="answer">
      <Form.Label>Response</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter a Response"
        value={response.answer}
        onChange={handleChange}
        name="answer"
      />
    </Form.Group>
    <fieldset>
      <Form.Group controlId="question" as={Row}>
        <Form.Label as="legend" column sm={2}>
        Associated Question
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label={question.subject}
            name={question.subject}
            id={question._id}
          />
          <Form.Check
            type="radio"
            label="second radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
          <Form.Check
            type="radio"
            label="third radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
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
