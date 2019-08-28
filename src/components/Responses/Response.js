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

      this.setState({
        response: response.data.response
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { response } = this.state
    return (
      <div>
        { response && (
          <Fragment>
            <h1>Response: {response.answer}</h1>
            <h2>Associated Question: {response.question.subject}</h2>
            {(this.props.user && response) && this.props.user._id === response.owner ? <Button href={`#responses/${response._id}/update-response`}>Edit Response</Button> : ''}
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Response)
