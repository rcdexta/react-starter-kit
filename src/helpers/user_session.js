module.exports = {

  isLoggedIn() {
    return !!localStorage.authToken
  },

  setSession(data) {
    localStorage.authToken = data.authToken
  },

  destroySession() {
    delete localStorage.authToken
  },

  getToken(){
    return localStorage.authToken
  },

}
