import VueRouter from 'vue-router'
import Home from '../components/Pages/Home'
import Posts from '../components/Posts/Posts'
import Post from '../components/Posts/Post'
import Login from '../components/Auth/Login'
import Logout from '../components/Auth/Logout'
import Users from '../components/Users/Users'
import User from '../components/Users/User'
import NewPost from '../components/Posts/NewPost'
import EditPost from '../components/Posts/EditPost'
import DeletePost from '../components/Posts/DeletePost'
import NewUser from '../components/Users/NewUser'

const routes = [    
    {path: '/posts', component: Posts, name: 'Posts'},
    {path: '/login', component: Login, name: 'Login'},
    {path: '/users', component: Users, name: 'Users'},
    {path: '/logout', component: Logout, name: 'Logout'},
    {path: '/post/:id/edit', component: EditPost, name: 'EditPost'},
    {path: '/post/:id/delete', component: DeletePost, name: 'DeletePost'},
    {path: '/post/new', component: NewPost, name: 'NewPost'},
    {path: '/user/new', component: NewUser, name: 'NewUser'},
    {path: '/post/:id', component: Post, name: 'Post'},
    {path: '/user/:id', component: User, name: 'User'},
    {path: '/', component: Home, name: 'Home'}
  ]

export default new VueRouter({routes})