<template>
    <div class="main-screen ">
        <div v-if="loaded">
            <h2>All posts ({{ got_posts.length }})</h2>
            <div class="panels">
                <div class="panel">
                    <div v-bind:key="post._id" v-for="post in got_posts">
                        <p>
                            <router-link 
                            :to="{name: 'Post', params: {id: post._id}}"
                            >{{ post.title }}</router-link>
                            <router-link v-if="post.author._id == user_logged" class="reg-button" :to="{name: 'EditPost', params: {id: post._id}}">
                                <button class="my-btn mini-btn" type="button">Edit this post</button>
                            </router-link>
                            <router-link v-if="post.author._id == user_logged" class="reg-button" :to="{name: 'DeletePost', params: {id: post._id}}">
                                <button class="my-btn mini-btn" type="button">Delete this post</button>
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>Loading...</div>
        <div class="btn-group">
            <router-link class="reg-button" :to="{name: 'NewPost'}">
                <button class="my-btn" type="button">Write new post</button>
            </router-link>            
        </div>
    </div>
</template>
<script>
import { endpoints, defHeaders } from '../../helpers/config'
export default {
    name: 'Posts',
    data: function () {
        return {
            got_posts: [],
            loaded: false,
            user_logged: ''
        }
    },
    mounted: function () {
        this.getPosts()
        this.user_logged = sessionStorage.getItem('_id')
    },
    methods: {
        getPosts() {
            const body = {
                method: 'GET',
                headers: defHeaders()
            }
            const endpt = endpoints.posts + '?$sort[title]=1'
            fetch(endpt, body).
                catch(err => console.log(err.message)).
                then(r => r.json()).
                then(data => {
                    this.got_posts = data.data
                    this.loaded = true
                })
        }
    }
}
</script>