import React, { Component } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'

import apiUrl from '../../apiConfig'

class Questions extends Component {
  constructor () {
    super()

    this.state = {
      questions: [],
      isLoading: true
    }
  }

  async componentDidMount () {
    try {
      // await the response from API call
      const response = await axios(`${apiUrl}/questions`)
      // do something with the response
      this.setState({ questions: response.data.questions, isLoading: false })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const questionsJsx = this.state.questions.map(question => (
      <ListGroup.Item key={question._id}>
        <Link to={ `/questions/${question._id}` }>{question.subject} </Link>
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
          {this.state.questions.length ? questionsJsx : <ListGroup.Item>No Questions Found :(</ListGroup.Item>}
        </ul>
      </ListGroup>
    )
  }
}

export default Questions
