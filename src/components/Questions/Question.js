import React, { Component, Fragment } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'
import ResponseForm from '../Responses/ResponseForm'
// import CreateResponse from '../Responses/ResponseCreate'

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
    userResponse: '',
    deleted: false,
    answered: false
  }

  async componentDidMount () {
    // console.log('user is ', this.props.user)
    // console.log('match params is ', this.props.match.params.id.survey_id)
    try {
      const response = await axios(`${apiUrl}/questions/${this.props.match.params.id}`)

      this.setState({
        question: response.data.question,
        survey: response.data.question.survey
      })
      // console.log('survey at mount is ', this.state.survey)
      // console.log('question at mount is ', this.state.question)
    } catch (error) {
      this.props.alert({
        heading: 'Error',
        message: 'Failed to Load Question!',
        variant: 'danger'
      })
    }
  }

  delete = async () => {
    const headers = {
      'Authorization': `Token token=${this.props.user.token}`
    }
    try {
      await axios.delete(`${apiUrl}/questions/${this.props.match.params.id}`, { headers })
      this.setState({ deleted: true })
      this.props.alert({
        heading: 'Success!!!',
        message: 'You Successfully Deleted a Question!',
        variant: 'success'
      })
    } catch (error) {
      this.props.alert({
        heading: 'Error',
        message: 'Failed to Delete Question!',
        variant: 'danger'
      })
    }
  }

  // handleChange = event => {
  //   this.setState({
  //     userResponse: { ...this.state.userResponse, [event.target.name]: event.target.value }
  //   })
  // }
  //
  handleSubmit = event => {
    event.preventDefault()
    const form = new FormData(event.target)
    // console.log('question xxx is ', this.state.question)
    // form.append('question_id', this.state.question._id)
    let output = ''
    for (const pair of form.entries()) {
      output = pair[1]
    }
    // console.log('data is ', output)
    // const test = this.state.userResponse
    // this.setState({
    //   userResponse: { ...test, [event.target.name]: event.target.value }
    // })
    // console.log('userResponse is ', this.state.userResponse)
    const headers = {
      'Authorization': `Token token=${this.props.user.token}`
    }
    const data = { answer: output }

    axios.post(`${apiUrl}/responses`, data, { headers: headers })
      .then(response => {
        // console.log('response after response post is ', response)
        this.setState({ answered: true })
        // console.log('this props is ', this.props)
        this.props.alert({
          heading: 'Success!!!',
          message: 'My Nightmare LLC thanks you for your response! If you type your Social Security Number into your keyboard now you will become a wizard!',
          variant: 'success'
        })
        this.props.history.push(`/responses/${response.data.response._id}`)
      })
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Failed to Log Response',
        variant: 'danger'
      }))
  }

  // const responseJsx = question.responses.map(response => (
  //   <li key={response.id}>
  //     {response.answer}
  //   </li>
  // ))

  render () {
    const { question, deleted } = this.state
    // let answersJsx
    // console.log('question at render is ', this.state.question)
    // console.log('survey at render is ', survey)
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
    }
    return (
      <div>
        { question && (
          <Fragment>
            <h1>Question: {question.subject}</h1>
            <ResponseForm
              userResponse={this.state.userResponse}
              question={question}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <Link to={currentSurvey}>Back to Surveys</Link>
            {(this.props.user && question) && this.props.user._id === question.owner ? <Button href={`#update-question/${question._id}/edit`}>Edit Question</Button> : ''}
            {(this.props.user && question) && this.props.user._id === question.owner ? <Button variant="danger" onClick={this.delete}>Delete This Question</Button> : ''}
          </Fragment>
        )}
      </div>
    )
  }
}

// <p>Answers: { answersJsx || 'No Responses for Current Question'}</p>

// else if (question) {
//   answersJsx = question.answers.map(answer => (
//     <li key={answer}>
//       {answer}
//     </li>
//   ))
// }

// <Button href={`#create-response/${question._id}`}>Answer This Survey Question</Button>

export default withRouter(Question)
