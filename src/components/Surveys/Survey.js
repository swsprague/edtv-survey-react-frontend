import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'

// if (this.props.user) {
//   if (this.props.user._id === survey.owner) {
//     return (
//       <Button href={`#surveys/${survey._id}/update-survey`}>Edit Survey</Button>
//     )
//   }
// }

class Survey extends Component {
  state = {
    survey: null
  }

  async componentDidMount () {
    console.log('user is ', this.props.user)
    try {
      const response = await axios(`${apiUrl}/surveys/${this.props.match.params.id}`)

      this.setState({
        survey: response.data.survey
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { survey } = this.state
    const responseJsx = survey.questions[0].responses.map(response => (
      <li key={response.id}>
        {response.answer}
      </li>
    ))
    return (
      <div>
        { survey && (
          <Fragment>
            <h1>Survey Title: {survey.subject}</h1>
            <h2>Question 1: {survey.question[0].subject || 'No Questions in Current Survey'}</h2>
            <p>Choices: {responseJsx}</p>
            {(this.props.user && survey) && this.props.user._id === survey.owner ? <Button href={`#surveys/${survey._id}/update-survey`}>Edit Survey</Button> : ''}
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Survey)
