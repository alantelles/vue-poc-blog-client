<template>
    <div class='show_post'>
        <h4>{{ got_post.title }}</h4>
        <small>{{ got_post.author.name }}</small>
        <span v-html="post_body"></span>
    </div>
</template>
<script>
import { endpoints, defHeaders } from '../../helpers/config'
export default {
    name: 'Post',
    data: function () {
        return {
            got_post: {author: {}},
            post_body: ''
        }
    },
    mounted: function () {
        this.getPost()
    },
    methods: {
        getPost () {
            const endpt = endpoints.posts + '/' + this.$route.params.id
            const body = {
                method: 'GET',
                headers: defHeaders(),
            }
            fetch(endpt, body).
                catch(err => console.log(err.message)).
                then(r => r.json()).
                then(data => {
                    this.got_post = data
                    this.post_body = data.body.split("\n").map((e) => `<p>${e}</p>`).join('')
                    this.loaded = true
                })
        }
    }
}
</script>