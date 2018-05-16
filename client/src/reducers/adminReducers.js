
const initialState = {
  default_challenges: [],
  all_challenges: [],
  logo_url: '',
  company_information: '',
  company_schedule: [],
  is_initial: false,
  current_live_challenge_title: '',
  current_live_challenge_duration: '',
  challenge_info: '',
  results: [],
  username: '',
  candidate_list: [],
  challenge_id: null
}


const defaultChallenges = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DEFAULT_CHALLENGES':
      return {
        ...state,
        default_challenges: action.payload
      }
    default:
      return state;
  }
}

const allChallenges = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ALL_CHALLENGES':
      return {
        ...state,
        all_challenges: action.payload
      }
      default:
        return state;
  }
}

const companyInfo = (state = '', action) => {
  switch(action.type) {
    case 'GET_COMPANY_INFO':
      return {
        logo_url: action.logo_url,
        company_information: action.information
      }
    default:
      return state;
  }
}

const companySchedule = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_COMPANY_SCHEDULE':
      return {
        ...state,
        company_schedule: action.payload
      }
    default:
      return state;
  }
}

const isInitial = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_INITIAL_ON':
      return {
        ...state,
        is_initial: action.payload
      }
    case 'TOGGLE_INITIAL_OFF':
      return {
        ...state,
        is_initial: action.payload
      }
    default:
      return state;
  }
}

const currentLiveChallenge = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_CURRENT_LIVE_CHALLENGE':
      return {
        ...state,
        current_live_challenge_title: action.title,
        current_live_challenge_duration: action.duration
      }
    default:
      return state;
  }
}

const challengeInfo = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CHALLENGE_INFO':
      return {
        ...state,
        challenge_info: action.payload
      }
    default:
      return state;
  }
}

const results = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_COMPANY_RESULTS':
      return {
        ...state,
        results: action.payload
      }
    default: 
      return state;
  }
}

const candidateList = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CANDIDATE_LIST':
      return {
        ...state,
        candidate_list: action.payload
      }
    default: 
      return state;
  }
}


const username = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_USER':
      return {
        ...state,
        username: action.payload
    }
    default:
      return state;
  }
}

export default { defaultChallenges, allChallenges, companyInfo, companySchedule, isInitial, currentLiveChallenge, results, candidateList, challengeInfo, username };
