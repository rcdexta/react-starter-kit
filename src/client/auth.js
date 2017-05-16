const Auth = {

  // locally simulated asynchronous request
  login: (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'a@b.com' && password === 'abcd') {
          resolve({authToken: '12345'})
        } else {
          resolve({status: 'Error'})
        }
      }, 1000);
    });

  }

}

export default Auth