<template>
    <div class="form">
        <form 
            v-on:submit.prevent="processSubmit" 
            action="/authentication">
            <div class="form-group">
                <label
                    for="username"
                    >Username</label>
                <input
                    id="username"
                    type='text'
                    class="form-control"
                    v-model="username" 
                />
            </div>
            <div class="form-group">
                <label for="password"
                    >Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    v-model="password" 
                />
            </div>
            <button type="submit">Log in</button>
        </form>
        <p>{{ login_state }}</p>
    </div>
</template>
<script>
import { endpoints } from '../../helpers/config'
export default {
    name: 'Login',
    data: function () {
        return {
            username: '',
            password: '',
            login_state: 'TRY LOGIN'
        }
    },
    methods: {
        processSubmit () {
            const valid = (this.username.trim().length > 0) && (this.password.trim().length > 0)
            //const got_response = false
            if (valid) {
                sessionStorage.clear()
                const body = {
                    "strategy": "local",
                    "username": this.username,
                    "password": this.password
                }                
                const headers = {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
                const params = {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers
                }                
                fetch(endpoints.auth, params).
                    then(r => {                        
                        const contType = r.headers.get("content-type")
                        if (contType && contType.indexOf('application/json') !== -1) {
                            r.json().then(data => {
                                if (data.accessToken !== undefined) {
                                    this.login_state = 'You are logged in now'
                                    sessionStorage.setItem('accessToken', data.accessToken)
                                    // sessionStorage.setItem('loggedUser', data.user._id)
                                    for (let [key, value] of Object.entries(data.user)) {
                                        sessionStorage.setItem(key, value)
                                    }
                                    this.$router.push({path: '/'})
                                } else {
                                    console.log(data)
                                    sessionStorage.setItem('accessToken', '')
                                }
                            })
                        }
                        else {
                            console.log("Response is not a JSON")
                        }
                    })
            } else {
                console.log('not valid')
            }
        }
    }
}
</script>

