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
    userResponse: {
      answer: '',
      question: null
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/questions/${this.props.match.params.id}`)
      .then((response) => {
        const userRep = this.state.userResponse
        userRep.question = response.data.question
        this.setState({ userResponse: {
          question: userRep.question
        } })
        console.log('question at response is ', this.state.userResponse.question)
        console.log('response data at createResource is ', response.data.question)
      })
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Somethin Dun Went RONG',
        variant: 'danger'
      }))
  }

  handleChange = event => {
    this.setState({
      userResponse: { ...this.state.response, [event.target.name]: event.target.value }
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
    console.log('userResponse says ', this.state.userResponse)
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
        response={this.state.userResponse}
        question={this.state.userResponse.question}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(CreateResponse)
