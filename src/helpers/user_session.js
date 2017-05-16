module.exports = {

  isLoggedIn() {
    return !!localStorage.authToken
  },

  setSession(data) {
    localStorage.authToken = data.authToken
    localStorage.userId = data.userId
  },

  destroySession() {
    delete localStorage.authToken
  },

  getToken(){
    return localStorage.authToken
  },

  getUserId() {
    return localStorage.userId
  }

}
