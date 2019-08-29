import React, { Component, Fragment } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
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
    survey: null,
    deleted: false
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

  delete = async () => {
    try {
      await axios.delete(`${apiUrl}/surveys/${this.props.match.params.id}`)
      this.setState({ deleted: true })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { survey, deleted } = this.state
    let questionsJsx

    if (deleted) {
      return <Redirect to={
        {
          pathname: '/surveys',
          state: {
            msg: 'Survey Has Been Deleted'
          }
        }
      }/>
    } else if (survey) {
      questionsJsx = survey.questions.map(question => (
        <ListGroup.Item key={question._id}>
          <Link to={ `/questions/${question._id}` }>{question.subject} </Link>
        </ListGroup.Item>
      ))
    }
    return (
      <div>
        { survey && (
          <Fragment>
            <h1>Survey Title: {survey.subject}</h1>
            Questions: { questionsJsx || 'No Questions for Current Survey'}
            <Link to='/surveys'>Back to Surveys List</Link>
            {(this.props.user && survey) && this.props.user._id === survey.owner ? <Button href={`#update-survey/${survey._id}/edit`}>Edit Survey</Button> : ''}
            {(this.props.user && survey) && this.props.user._id === survey.owner ? <Button href={`#create-question/${survey._id}`}>Add Question</Button> : ''}
            {(this.props.user && survey) && this.props.user._id === survey.owner ? <Button onClick={this.delete}>Delete This Survey</Button> : ''}
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
