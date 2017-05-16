const Auth = {
  // locally simulated asynchronous request
  login: (email, password) => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (email === 'a@b.com' && password === 'abcd') {
          resolve({ authToken: '12345', userId: 'abcd' })
        } else {
          resolve({ status: 'Error' })
        }
      }, 1000)
    })
  },

  logout: userId => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ userId: userId })
      }, 1000)
    })
  }
}

export default Auth
