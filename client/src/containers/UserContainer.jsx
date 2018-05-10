import React, { Component } from 'react';

import UserInitialChallengeView from '../components/UserView/UserChallenge/UserInitialChallengeView.jsx';
import UserLiveCodingView from '../components/UserView/UserChallenge/UserLiveCodingView.jsx';
import UserProfileView from '../components/UserView/UserProfileView.jsx';
import CompanyListView from '../components/UserView/CompanyList/CompanyListView.jsx';
import CompanyScheduleView from '../components/UserView/CompanyList/CompanyScheduleView.jsx';
import UserDashBoard from '../components/UserView/UserDashBoard.jsx';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchAllCompanyCalendars, fetchCandidateCalendar, fetchInitialChallenge, fetchCandidateInfo, saveCandidateInfo, saveCandidateCalendar, deleteCandidateSchedule, currentCompanyCalendar } from '../actions/userActions';
import { fetchCompanySchedule } from '../actions/adminActions' ;
 
import axios from 'axios';

class UserContainer extends Component {

  componentDidMount() {
    // this.props.fetchAllCompanyCalendars();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/user' component={UserDashBoardComponent}/>
        <Route exact path='/user/companylist' component={CompanyListViewComponent}/>
        <Route exact path='/user/schedule' component={CompanyScheduleViewComponent}/>
        <Route exact path='/user/challenge' component={UserInitialChallengeViewComponent}/>
        <Route exact path='/user/live' component={UserLiveCodingViewComponent}/>
        <Route exact path='/user/profile' component={UserProfileViewComponent}/>
      </Switch>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    all_company_calendars: state.all_company_calendars.all_company_calendars,
    initial_challenge: state.initial_challenge.initial_challenge,
    username: state.username.username,
    user_id: state.user_id.user_id,
    candidate_information: state.candidate_information.candidate_information,
    candidate_skills: state.candidate_skills.candidate_skills,
    candidate_calendar: state.candidate_calendar.candidate_calendar,
    company_schedule: state.company_schedule.company_schedule,
    current_company_calendar: state.current_company_calendar.current_company_calendar
}};

const connectComponent = connect(mapStateToProps, { fetchAllCompanyCalendars })(UserContainer);

const UserDashBoardComponent = connect(mapStateToProps, { fetchCandidateCalendar, deleteCandidateSchedule })(UserDashBoard);
const CompanyListViewComponent = connect(mapStateToProps, { fetchInitialChallenge, fetchCandidateCalendar, deleteCandidateSchedule, fetchAllCompanyCalendars, currentCompanyCalendar })(CompanyListView);
const CompanyScheduleViewComponent = connect(mapStateToProps, { saveCandidateCalendar })(CompanyScheduleView);
const UserInitialChallengeViewComponent = connect(mapStateToProps)(UserInitialChallengeView);
const UserLiveCodingViewComponent = connect(mapStateToProps)(UserLiveCodingView);
const UserProfileViewComponent = connect(mapStateToProps, { fetchCandidateInfo, saveCandidateInfo })(UserProfileView);

const routeUserComponent = withRouter(connectComponent);
export default routeUserComponent;
