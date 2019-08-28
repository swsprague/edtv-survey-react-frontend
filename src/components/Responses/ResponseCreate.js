import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Spinner from 'react-bootstrap/Spinner'
import apiUrl from '../../apiConfig'
// import SurveyForm from './SurveyForm'
// import QuestionForm from '../Questions/QuestionForm'
import ResponseForm from '../Responses/ResponseForm'

class CreateResponse extends Component {
  state = {
    response: {
      answer: '',
      question: ''
    }
  }

  handleChange = event => {
    this.setState({
      response: { ...this.state.response, [event.target.name]: event.target.value }
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
    console.log('response says ', this.state.response)
    event.preventDefault()
    const headers = {
      'Authorization': `Token token=${this.props.user.token}`
    }
    const data = { response: this.state.response }

    axios.post(`${apiUrl}/responses`, data, { headers: headers })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!',
          message: 'You Successfully Created a Response!',
          variant: 'success'
        })
        this.props.history.push(`/responses/${response.data.response._id}`)
      })
      .catch(console.error)
  }

  render () {
    return (
      <ResponseForm
        response={this.state.response}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(CreateResponse)
