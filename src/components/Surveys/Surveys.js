import React, { Component } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'

import apiUrl from '../../apiConfig'

class Surveys extends Component {
  constructor () {
    super()

    this.state = {
      surveys: [],
      isLoading: true
    }
  }

  async componentDidMount () {
    try {
      // await the response from API call
      const response = await axios(`${apiUrl}/surveys`)
      // do something with the response
      this.setState({ surveys: response.data.surveys, isLoading: false })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const surveysJsx = this.state.surveys.map(survey => (
      <ListGroup.Item key={survey._id}>
        <Link to={ `/surveys/${survey._id}` }>{survey.subject} </Link>
      </ListGroup.Item>
    ))

    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <Spinner animation="grow" variant="info" />
        </div>
      )
    }
    return (
      <ListGroup>
        <ul>
          {this.state.surveys.length ? surveysJsx : <ListGroup.Item>No Surveys Found :(</ListGroup.Item>}
        </ul>
      </ListGroup>
    )
  }
}

export default Surveys
