import axios from 'axios'

const Auth = {

  login: (email, password) => {
    return axios.post('/provider/login.json', {email: email, password: password})
  }

}

export default Auth