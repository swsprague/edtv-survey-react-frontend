import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Spinner from 'react-bootstrap/Spinner'
import apiUrl from '../../apiConfig'
import SurveyForm from './SurveyForm'

class UpdateSurvey extends Component {
  state = {
    survey: {
      subject: '',
      questions: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/surveys/${this.props.match.params.id}`)
      .then(response => this.setState({ survey: response.data.survey }))
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Somethin Dun Went RONG',
        variant: 'danger'
      }))
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
    event.preventDefault()
    const headers = {
      'Authorization': `Token token=${this.props.user.token}`
    }
    const data = { survey: this.state.survey }

    axios.patch(`${apiUrl}/surveys/${this.state.survey._id}`, data, { headers: headers })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!',
          message: 'You Successfully Updated a Survey!',
          variant: 'success'
        })
        this.props.history.push(`/surveys/${this.state.survey._id}`)
      })
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Unable to Update Survey',
        variant: 'danger'
      }))
  }

  render () {
    if (!this.state.survey) {
      return (
        <h1>LEAVE ME ALONE iM LOADING BRO</h1>
      )
    }
    return (
      <SurveyForm
        survey={this.state.survey}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(UpdateSurvey)
