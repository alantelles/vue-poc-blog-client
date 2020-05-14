<template>
    <div>
        <h2>New post</h2>
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
import { isAuthenticated, defHeaders, endpoints } from '../../helpers/config'
import { noBlanks } from '../../helpers/validations'
export default {
    name: 'NewPost',
    data: function () {
        return {
            post_body: '',
            post_title: '',
            post_author: ''
        }
    },
    mounted: function () {
        this.post_author = sessionStorage.getItem('_id')
    },
    methods: {
        sendPost () {
            if (noBlanks(this.post_title, this.post_body)) {
                if (isAuthenticated()) {
                    const reqData = {
                        method: 'POST',
                        headers: defHeaders(),
                        body: JSON.stringify({
                            title: this.post_title,
                            body: this.post_body,
                            userId: this.post_author
                        })
                    }
                    console.log(reqData, ':', endpoints.posts)
                    fetch(endpoints.posts, reqData).
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