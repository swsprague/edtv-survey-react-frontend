import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'

// if (this.props.user) {
//   if (this.props.user._id === response.owner) {
//     return (
//       <Button href={`#responses/${response._id}/update-response`}>Edit Response</Button>
//     )
//   }
// }

class Response extends Component {
  state = {
    response: null
  }

  async componentDidMount () {
    console.log('user is ', this.props.user)
    try {
      const response = await axios(`${apiUrl}/responses/${this.props.match.params.id}`)
      console.log('response api get is ', response)
      this.setState({
        response: response.data.response
      })
      console.log('response at blurg is ', this.state.response)
    } catch (error) {
    }
  }

  render () {
    const { response } = this.state
    return (
      <div>
        { response && (
          <Fragment>
            <h1>You Chose: {response.answer}</h1>
            <p>Thank you for your answer plz sign my yearbook</p>
            <Button href={'#/surveys'}>Back 2 Surveys List</Button>
          </Fragment>
        )}
      </div>
    )
  }
}

// <h2>Associated Question: {response.question.subject}</h2>

export default withRouter(Response)
