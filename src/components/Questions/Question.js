import React, { Component, Fragment } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
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
    question: null,
    deleted: false
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

  delete = async () => {
    try {
      await axios.delete(`${apiUrl}/questions/${this.props.match.params.id}`)
      this.setState({ deleted: true })
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
    const { question, deleted } = this.state
    let answersJsx
    const currentSurvey = `/surveys/${this.props.match.params.survey_id}`

    if (deleted) {
      return <Redirect to={
        {
          pathname: currentSurvey,
          state: {
            msg: 'Question Successfully Deleted'
          }
        }
      }/>
    } else if (question) {
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
            <h1>Question: {question.subject}</h1>
            <p>Answers: { answersJsx || 'No Responses for Current Question'}</p>
            <Link to={currentSurvey}>Back to Survey</Link>
            {(this.props.user && question) && this.props.user._id === question.owner ? <Button href={`#update-question/${question._id}/edit`}>Edit Question</Button> : ''}
            {(this.props.user && question) && this.props.user._id === question.owner ? <Button onClick={this.delete}>Delete This Question</Button> : ''}
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Question)
