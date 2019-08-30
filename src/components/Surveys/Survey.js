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
    // console.log('user is ', this.props.user)
    try {
      const response = await axios(`${apiUrl}/surveys/${this.props.match.params.id}`)

      this.setState({
        survey: response.data.survey
      })
    } catch (error) {
      this.props.alert({
        heading: 'Error',
        message: 'Failed to Load Survey',
        variant: 'danger'
      })
    }
  }

  delete = async () => {
    const headers = {
      'Authorization': `Token token=${this.props.user.token}`
    }
    // console.log('match params at delete is ', this.props.match.params.id)
    try {
      await axios.delete(`${apiUrl}/surveys/${this.props.match.params.id}`, { headers })
      this.setState({ deleted: true })
      this.props.alert({
        heading: 'Success!!!',
        message: 'You Successfully Deleted a Survey!',
        variant: 'success'
      })
    } catch (error) {
      this.props.alert({
        heading: 'Error',
        message: 'Unable to Delete Survey',
        variant: 'danger'
      })
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
            <h1>Survey: {survey.subject}</h1>
            <h2>¿Questions? </h2>
            {questionsJsx || <p>No Questions for Current Survey</p> }
            <br/>
            <Link to='/surveys'>Back to Surveys List</Link>
            {(this.props.user && survey) && this.props.user._id === survey.owner ? <Button href={`#update-survey/${survey._id}/edit`}>Edit Survey</Button> : ''}
            {(this.props.user && survey) && this.props.user._id === survey.owner ? <Button href={`#create-question/${survey._id}`}>Add Question</Button> : ''}
            {(this.props.user && survey) && this.props.user._id === survey.owner ? <Button variant="danger" onClick={this.delete}>Delete This Survey</Button> : ''}
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
