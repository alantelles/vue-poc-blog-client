<template>
  <div id="app">
    <div class="sidebar">
      <div id="vue-logo" >
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
      <p class="nav-label">User: {{ logged_user }}</p>
      <Navbar v-bind:is_logged="login_state" />
      <p class="nav-label">Built with VueJS and FeathersJS</p>
    </div>
    <div class="main-content">
      <header>
        <h1>PoC blog Vue Client</h1>
      </header>
      <nav class="navbar">
        <ul>
          <li><a target="_blank" href="https://github.com/alantelles/vue-poc-blog-client">GitHub</a></li>
          <li><a target="_blank" href="https://vuejs.org/v2/guide/">Vue docs</a></li>          
          <li><a target="_blank" href="https://docs.feathersjs.com/guides/">FeathersJS docs</a></li>
        </ul>
      </nav>
      <div class="router-view">
        <router-view></router-view>
      </div>
    </div>
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
* {
    margin: 0; padding: 0;
    box-sizing: border-box;
}
body {
  margin: 0;
}
h1 {font-size: 4em;}
h2 {font-size: 2.8em;}
h3 {font-size: 2.5em;}
h4 {font-size: 2em;}
h5 {font-size: 1.5em;}
h6 {font-size: 1.1em;}
header {
  padding: 30px;
  font-family: 'Jost', sans-serif;
}
#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
  display: flex;
}
.sidebar {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgb(14, 41, 27);
}
.sidebar > div {
  background-color: rgb(14, 41, 27);
}
.main-content {
  width: 100%
}
.router-view {
  margin: 15px;
}
.show_post {
  margin: 0 10px;
  text-align: left;
}
button {
    cursor: pointer;
    min-width: 100px;
    font-family: 'Quicksand', sans-serif;
}
button > a, button > a:hover {
  text-decoration: none;
}
h2 {
  margin: 10px 0;
}
textarea {
  border-radius: 3px;
  padding: 5px;
  resize: vertical;
  width: 100%; height: 150px;
}
.nav-label {
  text-align: left;
  margin-left: 10px;
  color: white;
}
.navbar ul{
  display: flex;
  justify-content: right;
  list-style-type: none;
  background-color: rgb(112, 119, 112);
}
.navbar li {
  font-family: 'Quicksand', sans-serif;
}
.navbar a {
  display: block;
  padding: 8px 13px;
  color: #fff;
  background-color: rgb(112, 119, 112);
  text-decoration: none;
  text-transform: uppercase;
}
.navbar a:hover {
  color:rgb(5, 8, 1);
  background-color: rgb(172, 182, 172);
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
.panel p, .panel a {
  color: white;
  margin: 4px 0;
  text-decoration: none;
}
.panel a:hover {
  text-decoration: underline;
}
.main-screen {
    display: flex;
    flex-direction: column;
}
.panels {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.panel {
    width: 100%;
    margin: 10px; padding: 20px;
    background-color: rgb(119, 150, 88);
    text-align: left;
}
.reg-button {
  display:contents
}
.my-btn {
    display: block;
    background-color: rgb(25, 54, 40);
    border: none;
    margin-top: 6px;
    padding: 6px 25px;
    color: white;
    display: block;
}
.my-btn:hover, .reg-button:hover {
    background-color: rgb(45, 80, 63);
}
.btn-group {
  display: flex;
}
.btn-group .my-btn {
  margin-right: 10px;
}
.mini-btn {
  display: inline;
  padding: 0px;
  margin-left: 5px;
  font-size: 0.8em;
}
#vue-logo {
  text-align: center;
}
</style>
