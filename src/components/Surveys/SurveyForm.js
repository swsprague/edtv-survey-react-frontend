import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import { Row, Col } from 'reactstrap'

const SurveyForm = ({ handleChange, handleSubmit, survey }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="subject">
      <Form.Label>Survey Subject</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter a Subject"
        value={survey.subject}
        onChange={handleChange}
        name="subject"
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

// <fieldset>
//   <Form.Group as={Row}>
//     <Form.Label as="legend" column sm={2}>
//       Radios
//     </Form.Label>
//     <Col sm={10}>
//       <Form.Check
//         type="radio"
//         label="first radio"
//         name="formHorizontalRadios"
//         id="formHorizontalRadios1"
//       />
//       <Form.Check
//         type="radio"
//         label="second radio"
//         name="formHorizontalRadios"
//         id="formHorizontalRadios2"
//       />
//       <Form.Check
//         type="radio"
//         label="third radio"
//         name="formHorizontalRadios"
//         id="formHorizontalRadios3"
//       />
//     </Col>
//   </Form.Group>
// </fieldset>

// <Form.Label>Response 1</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={survey.questions[0].responses[0]}
//   onChange={handleChange}
//   name="q1r1"
// />
// <Form.Label>Response 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={survey.questions[0].responses[1]}
//   onChange={handleChange}
//   name="q1r2"
// />
// <Form.Label>Response 3</Form.Label>
// <Form.Control
//   type="text"
//   placeholder="Enter a Response"
//   value={survey.questions[0].responses[2]}
//   onChange={handleChange}
//   name="q1r3"
// />
//
// <Form.Label>Question 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Question"
//   value={survey.questions[1]}
//   onChange={handleChange}
//   name="question 2"
// />
// <Form.Label>Response 1</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={survey.questions[1].responses[0]}
//   onChange={handleChange}
//   name="q2r1"
// />
// <Form.Label>Response 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={survey.questions[1].responses[1]}
//   onChange={handleChange}
//   name="q2r2"
// />
// <Form.Label>Response 3</Form.Label>
// <Form.Control
//   type="text"
//   placeholder="Enter a Response"
//   value={survey.questions[1].responses[2]}
//   onChange={handleChange}
//   name="q2r3"
// />
//
// <Form.Label>Question 3</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Question"
//   value={survey.questions[2]}
//   onChange={handleChange}
//   name="question 3"
// />
// <Form.Label>Response 1</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={survey.questions[2].responses[0]}
//   onChange={handleChange}
//   name="q3r1"
// />
// <Form.Label>Response 2</Form.Label>
// <Form.Control
//   required
//   type="text"
//   placeholder="Enter a Response"
//   value={survey.questions[2].responses[1]}
//   onChange={handleChange}
//   name="q3r2"
// />
// <Form.Label>Response 3</Form.Label>
// <Form.Control
//   type="text"
//   placeholder="Enter a Response"
//   value={survey.questions[2].responses[2]}
//   onChange={handleChange}
//   name="q3r3"
// />

export default SurveyForm
