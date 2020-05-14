<template>
    <nav class="menu">
      <ul>
        <li><router-link to='/' exact>Home</router-link></li>
        <li><router-link to='/posts'>Posts</router-link></li>
        <li><router-link to='/users'>Users</router-link></li>
        <li v-if="is_logged"><router-link to='/logout'>Logout</router-link></li>
        <li v-else><router-link to='/login'>Login</router-link></li>
      </ul>
    </nav>
</template>
<script>
export default {
    name: 'Navbar',
    props: ['is_logged']
}
</script>
<style>
.menu {
  width: 230px;
}
.menu ul{
    background-color: rgb(9, 184, 125);
    justify-content:center;
    list-style: none;
    margin: 10px 0;
    padding: 0 0;
    display: flex;
    flex-direction: column;

    }
.menu li {
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    text-transform: uppercase;  
    font-family: 'Quicksand', sans-serif;
    }
.menu a {
    color: white;
    padding: 10px;
    display: block;
    text-decoration: none;
    }
.menu a:hover {
    background-color: rgb(50, 95, 80);    
}
.menu .router-link-active {
  background-color: rgb(25, 54, 40);
}
</style>