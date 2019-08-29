import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import Home from '../shared/Home'

import Surveys from '../Surveys/Surveys'
import SurveyCreate from '../Surveys/SurveyCreate'
import Survey from '../Surveys/Survey'
import SurveyUpdate from '../Surveys/SurveyUpdate'
import Responses from '../Responses/Responses'
import ResponseCreate from '../Responses/ResponseCreate'
import Response from '../Responses/Response'
import Questions from '../Questions/Questions'
import QuestionCreate from '../Questions/QuestionCreate'
import Question from '../Questions/Question'
// import UpdateSurvey from '../Surveys/UpdateSurvey'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/surveys' component={Surveys} />
          <Route exact path='/questions' component={Questions} />
          <Route exact path='/responses' component={Responses} />
          <Route exact path='/surveys/:id' user={user} render={() => (
            <Survey user={user} />
          )}
          />
          <Route exact path='/questions/:id' user={user} render={() => (
            <Question user={user} />
          )}
          />
          <Route exact path='/responses/:id' user={user} render={() => (
            <Response user={user} />
          )}
          />
          <Route exact path="/" component={Home}/>
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/create-survey' render={() => (
            <SurveyCreate user={user} alert={this.alert} />
          )} />
          <AuthenticatedRoute user={user} path='/create-question/:id' render={() => (
            <QuestionCreate user={user} alert={this.alert} />
          )} />
          <AuthenticatedRoute user={user} path='/create-response' render={() => (
            <ResponseCreate user={user} alert={this.alert} />
          )} />
          <AuthenticatedRoute user={user} path='/update-survey/:id/edit' render={() => (
            <SurveyUpdate user={user} alert={this.alert} />
          )} />
          <AuthenticatedRoute user={user} path='/update-question/:id/edit' render={() => (
            <SurveyUpdate user={user} alert={this.alert} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
