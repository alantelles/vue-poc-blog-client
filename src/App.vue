<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <h1>PoC blog Vue Client</h1>
    <p v-if="login_state">{{ logged_user }}</p>
    <Navbar v-bind:is_logged="login_state" />
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from './components/Pages/Navbar'
import { isAuthenticated } from './helpers/config'

  
export default  {
  name: 'App',
  data: function () {
    return {
      accessToken: "",
      login_state: false,
      logged_user: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    updateUserShow() {
      this.login_state = isAuthenticated()
      if (this.login_state) {
        this.logged_user = sessionStorage.getItem('name')
      }
    }
  },
  mounted: function () {
    this.updateUserShow()
  },
  updated: function () {
    this.updateUserShow()
  }
}
</script>

<style>
body {
  margin: 0;
}
h1 {font-size: 4em;}
h2 {font-size: 2.8em;}
h3 {font-size: 2.5em;}
h4 {font-size: 2em;}
h5 {font-size: 1.5em;}
h6 {font-size: 1.1em;}
#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.show_post {
  margin: 0 10px;
  text-align: left;
}
* {
    margin: 0; padding: 0;
    box-sizing: border-box;
}
button {
    cursor: pointer;
    width: 120px;
}
h2 {
  margin: 10px 0;
}
.form > form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-group {
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin: 0 30px;
}
.form-control {
    margin: 10px 0;
}
textarea {
  border-radius: 3px;
  padding: 5px;
  resize: vertical;
  width: 100%; height: 150px;
}

</style>
