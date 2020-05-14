<template>
    <div>
        <div v-if="loaded">
            <h2>All posts ({{ got_posts.length }})</h2>
            <div v-bind:key="post._id" v-for="post in got_posts">
                <p><router-link 
                    :to="{name: 'Post', params: {id: post._id}}"
                    >{{ post.title }}</router-link></p>
            </div>
        </div>
        <div v-else>Loading...</div>
        <h5><router-link to="/post/new">New post</router-link></h5>
    </div>
</template>
<script>
import { endpoints, defHeaders } from '../../helpers/config'
export default {
    name: 'Posts',
    data: function () {
        return {
            got_posts: [],
            loaded: false
        }
    },
    mounted: function () {
        this.getPosts()
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