import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'

// if (this.props.user) {
//   if (this.props.user._id === question.owner) {
//     return (
//       <Button href={`#questions/${question._id}/update-question`}>Edit Question</Button>
//     )
//   }
// }

class Question extends Component {
  state = {
    question: null
  }

  async componentDidMount () {
    console.log('user is ', this.props.user)
    console.log('match params is ', this.props.match.params.id)
    try {
      const response = await axios(`${apiUrl}/questions/${this.props.match.params.id}`)

      this.setState({
        question: response.data.question
      })
    } catch (error) {
      console.error(error)
    }
  }

  // const responseJsx = question.responses.map(response => (
  //   <li key={response.id}>
  //     {response.answer}
  //   </li>
  // ))

  render () {
    const { question } = this.state
    let answersJsx
    if (question) {
      answersJsx = question.answers.map(answer => (
        <li key={answer}>
          {answer}
        </li>
      ))
    }
    return (
      <div>
        { question && (
          <Fragment>
            <h1>Question Subject: {question.subject}</h1>
            <p>Answers: { answersJsx || 'No Responses for Current Question'}</p>
            {(this.props.user && question) && this.props.user._id === question.owner ? <Button href={`#questions/${question._id}/update-question`}>Edit Question</Button> : ''}
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Question)
