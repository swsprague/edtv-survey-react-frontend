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
    let questionsJsx
    if (survey) {
      questionsJsx = survey.questions.map(question => (
        <li key={question._id}>
          {question.subject}
        </li>
      ))
    }
    return (
      <div>
        { survey && (
          <Fragment>
            <h1>Survey Title: {survey.subject}</h1>
            <p>Questions: { questionsJsx || 'No Questions for Current Survey'}</p>
            {(this.props.user && survey) && this.props.user._id === survey.owner ? <Button href={`#update-survey/${survey._id}/edit`}>Edit Survey</Button> : ''}
            {(this.props.user && survey) && this.props.user._id === survey.owner ? <Button href={`#create-question/${survey._id}`}>Add Question</Button> : ''}
          </Fragment>
        )}
      </div>
    )
  }
}

// <h2>Question 1: {survey.questions || 'No Questions in Current Survey'}</h2>
// <p>Choices: {responseJsx}</p>
// {(this.props.user && survey) && this.props.user._id === survey.owner ? <Button href={`#surveys/${survey._id}/update-survey`}>Edit Survey</Button> : ''}

export default withRouter(Survey)
