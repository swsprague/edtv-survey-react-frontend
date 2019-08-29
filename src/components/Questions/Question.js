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
    console.log('match params is ', this.props.match.params.id.survey_id)
    try {
      const response = await axios(`${apiUrl}/questions/${this.props.match.params.id}`)

      this.setState({
        question: response.data.question,
        survey: response.data.question.survey
      })
      console.log('survey at mount is ', this.state.survey)
      console.log('question at mount is ', this.state.question)
    } catch (error) {
      console.error(error)
    }
  }

  delete = async () => {
    const headers = {
      'Authorization': `Token token=${this.props.user.token}`
    }
    try {
      await axios.delete(`${apiUrl}/questions/${this.props.match.params.id}`, { headers })
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
    const { question, deleted, survey } = this.state
    let answersJsx
    console.log('question at render is ', this.state.question)
    console.log('survey at render is ', survey)
    const currentSurvey = '/surveys'

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
            <Link to={currentSurvey}>Back to Surveys</Link>
            {(this.props.user && question) && this.props.user._id === question.owner ? <Button href={`#update-question/${question._id}/edit`}>Edit Question</Button> : ''}
            {(this.props.user && question) && this.props.user._id === question.owner ? <Button onClick={this.delete}>Delete This Question</Button> : ''}
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Question)
