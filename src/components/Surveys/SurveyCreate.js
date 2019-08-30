import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Spinner from 'react-bootstrap/Spinner'
import apiUrl from '../../apiConfig'
import SurveyForm from './SurveyForm'
// import QuestionForm from '../Questions/QuestionForm'
// import CreateQuestion from '../Questions/QuestionCreate'
// import QuestionForm from '../Questions/QuestionForm'
// import ResponseForm from '../Responses/ResponseForm'

class CreateSurvey extends Component {
  state = {
    survey: {
      subject: ''
    }
  }

  handleChange = event => {
    this.setState({
      survey: { ...this.state.survey, [event.target.name]: event.target.value }
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
    // console.log('survey says ', this.state.survey)
    event.preventDefault()
    const headers = {
      'Authorization': `Token token=${this.props.user.token}`
    }
    const data = { survey: this.state.survey }

    axios.post(`${apiUrl}/surveys`, data, { headers: headers })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!',
          message: 'You Successfully Created a Survey!',
          variant: 'success'
        })
        this.props.history.push(`/surveys/${response.data.survey._id}`)
      })
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Unable to Create Survey',
        variant: 'danger'
      }))
  }

  render () {
    return (
      <Fragment>
        <SurveyForm
          survey={this.state.survey}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    )
  }
}

// <CreateQuestion/>

export default withRouter(CreateSurvey)
