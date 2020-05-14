<template>
    <div>
        <h2>New user</h2>
        <div class="form">
            <form v-on:submit.prevent="sendPost" action="">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" v-model="post_name" name="name" id="name" class="form-control">                    
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" v-model="post_email" name="email" id="email" class="form-control">                    
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="text" v-model="post_password" name="password" id="password" class="form-control">                    
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" v-model="post_username" name="username" id="username" class="form-control">                    
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
    name: 'NewUser',
    data: function () {
        return {
            post_username: '',
            post_name: '',
            post_email: '',
            post_password: '',
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
                            name: this.post_name,
                            username: this.post_username,
                            email: this.post_email,
                            password: this.post_password
                        })
                    }
                    fetch(endpoints.users, reqData).
                        then(r => r.json()).
                        then(data => this.$router.push({
                            name: 'User',
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