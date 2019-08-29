import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Spinner from 'react-bootstrap/Spinner'
import apiUrl from '../../apiConfig'
import QuestionForm from './QuestionForm'

class UpdateQuestion extends Component {
  state = {
    question: {
      subject: '',
      answers: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/questions/${this.props.match.params.id}`)
      .then(response => this.setState({ question: response.data.question }))
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Somethin Dun Went RONG',
        variant: 'danger'
      }))
  }

  handleChange = event => {
    this.setState({
      question: { ...this.state.question, [event.target.name]: event.target.value }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const headers = {
      'Authorization': `Token token=${this.props.user.token}`
    }
    const data = { question: this.state.question }

    axios.patch(`${apiUrl}/questions/${this.state.question._id}`, data, { headers: headers })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!',
          message: 'You Successfully Updated a Question!',
          variant: 'success'
        })
        this.props.history.push(`/questions/${this.state.question._id}`)
      })
      .catch(console.error)
  }

  render () {
    if (!this.state.question) {
      return (
        <h1>LEAVE ME ALONE iM LOADING BRO</h1>
      )
    }
    return (
      <QuestionForm
        question={this.state.question}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(UpdateQuestion)
