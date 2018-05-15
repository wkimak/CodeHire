import { SAVE_COMPANY, SAVE_CANDIDATE, CHECK_USER, GET_USER } from '../constants/actionTypes';
import { auth, provider } from '../../../firebase/index.js';
import axios from 'axios';
import history from '../components/history.jsx';

export const saveCandidate = (token, fullName,username, phone, github_url) => (dispatch) => {
  console.log('auth actions save candidate')
	axios.post('/api/registerCandidate', { token, fullName, username, phone, github_url })
	.then((response) => {
		dispatch({ type: SAVE_CANDIDATE, payload: response.data })
	})
	.catch((err) => {
		console.log('Error saving user', err);
	})
}

export const saveCompany = (token, companyName, username, phone, logoUrl, companyInfo) => (dispatch) => {
  console.log('calling save company')
  axios.post('/api/registerCompany', { token, companyName, username, phone, logoUrl, companyInfo })
  .then((response) => {
  	dispatch({ type: SAVE_COMPANY, payload: response.data })
  })
	.catch((err) => {
		console.log('Error saving user', err);
	})
}

export const handleLogin = (email, password) => (dispatch) => {
  if (auth.currentUser) {
    auth.signOut();
  }
  auth.signInWithEmailAndPassword(email, password)
  .then(({user}) => {
    axios.post('/api/login', {token: user.uid})
    .then((response) => {
      dispatch({ type: CHECK_USER, payload: response.data })
      if (response.data[0] === 'company') {
        history.push('/admin');
      } else if (response.data[0] === 'candidate') {
        history.push('/user');
      }
    })
    .catch((err) => {
      console.log('Error checking user', err);
    })
  })
  .catch((err) => {
    if (err) {
      alert(err.message);
    }
  })
}

// export const googleLogin = () => (dispatch) => {
//   auth.signInWithPopup(provider)
//   .then(({user}) => {
//     axios.post('/api/login', {token: user.uid})
//     .then((response) => {
//       console.log(response.data)
//       dispatch({ type: CHECK_USER, payload: response.data })
//     })
//     .catch((err) => {
//       console.log('Error checking user', err);
//     })
//   })
//   .catch((err) => {
//     if (err) {
//       alert(err.message);
//     }
//   })
// }


export const handleSignUp = (email, username, password, form, name, phone, logoUrl, githuburl, companyInfo, cb) => (dispatch) => {
  auth.createUserWithEmailAndPassword(email, password)
  .then(({user}) => {
    if (form === 'companyForm') {
      dispatch(saveCompany(user.uid, name, username, phone, logoUrl, companyInfo));
    } else {
      dispatch(saveCandidate(user.uid, name, username, phone, githubUrl));
    }
  })
  .then(() => {
    if (cb) {
      cb();
    }
  })
  .catch((error) => {
    if(error) {
      console.log('error for signup')
      alert(error.message)
    }
  })
}





