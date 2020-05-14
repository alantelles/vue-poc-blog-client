<template>
    <div>
        <h2>Edit post</h2>
        <div class="form">
            <form v-on:submit.prevent="sendPost" action="">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" v-model="post_title" name="title" id="title" class="form-control">                    
                </div>
                <div class="form-group">
                    <label for="body">Body</label>
                    <textarea v-model="post_body" name="body" class="form-control"></textarea>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    </div>
</template>

<script>
import { endpoints, defHeaders, isAuthenticated } from '../../helpers/config'
import { noBlanks } from '../../helpers/validations'
export default {
    name: 'EditPost',
    data: function () {
        return {
            post_title: '',
            post_body: '',
            in_edition: ''
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
                    this.post_title = data.title
                    this.post_body = data.body
                    this.loaded = true
                    sessionStorage.setItem('in_edition', data._id)
                    this.in_edition = data._id
                })
        },
        sendPost () {
            if (noBlanks(this.post_title, this.post_body)) {
                if (isAuthenticated()) {
                    const reqData = {
                        method: 'PATCH',
                        headers: defHeaders(),
                        body: JSON.stringify({
                            title: this.post_title,
                            body: this.post_body
                        })
                    }
                    fetch(endpoints.posts + '/' + this.in_edition, reqData).
                        then(r => r.json()).
                        then(data => this.$router.push({
                            name: 'Post',
                            params: {id: data._id}
                        }))
                }
            }
            else {
                console.log('Há campos em branco')
            }
        }
    }
}
</script>