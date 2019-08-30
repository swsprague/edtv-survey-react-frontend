import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Spinner from 'react-bootstrap/Spinner'
import apiUrl from '../../apiConfig'
// import SurveyForm from './SurveyForm'
import QuestionForm from '../Questions/QuestionForm'
// import UpdateSurvey from '../Surveys/SurveyUpdate'
// import ResponseForm from '../Responses/ResponseForm'

class CreateQuestion extends Component {
  state = {
    question: {
      subject: '',
      answers: [],
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      survey: this.props.match.params.id
    }
  }

  handleChange = event => {
    // console.log(event.target.value)
    this.setState({
      question: { ...this.state.question, [event.target.name]: event.target.value }

    })
    // you could also do it this way:

    // create a new object to hold our updated field/value
    // const updatedField = {
    //   [event.target.name]: event.target.value
    // }
    //
    // combine that object with our current state object
    // const editedMovie = Object.assign(this.state.movie, updatedField)
    //
    // finally, use setState to update our movie
    // this.setState({ movie: editedMovie })
  }

  handleSubmit = event => {
    // console.log('question says ', this.state.question)
    // console.log('survey is ', this.props.match.params.id)
    event.preventDefault()
    const test = this.state.question
    test.answers = []
    test.answers.push(test.answer1)
    test.answers.push(test.answer2)
    test.answers.push(test.answer3)
    test.answers.push(test.answer4)
    this.setState({ question: test })
    // console.log('This is array', this.state.question.answers)
    const headers = {
      'Authorization': `Token token=${this.props.user.token}`
    }
    const data = { question: this.state.question }
    // const questionsArr = []

    axios.post(`${apiUrl}/questions`, data, { headers: headers })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!',
          message: 'You Successfully Created a Question!',
          variant: 'success'
        })
        // console.log('response is ', response)
        this.props.history.push(`/surveys/${response.data.question.survey}`)
        // questionsArr.push(response.data.question._id)
        // console.log('questions array is ', questionsArr)
      })
      // .then(response => {
      //   questionsArr = response.data.survey.questions
      //   console.log(questionsArr)
      //   questionsArr.push(data)
      //   console.log('question is ', questionsArr)
      // })
      // .then(axios.patch(`${apiUrl}/surveys/${this.props.match.params.id}`, {
      //   headers: {
      //     'Authorization': `Token token=${this.props.user.token}`
      //   },
      //   data: {
      //     survey: {
      //       questions: questionsArr
      //     }
      //   }
      // }))
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Unable to Create Question',
        variant: 'danger'
      }))
  }

  render () {
    return (
      <QuestionForm
        question={this.state.question}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(CreateQuestion)
