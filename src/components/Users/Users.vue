<template>
    <div>
        <div v-if="loaded">
            <h2>All users ({{ got_users.length }})</h2>
            <div v-if="got_users.length > 0">
                <p v-bind:key="user.id" v-for="user in got_users"
                ><router-link 
                    :to="{name: 'User', params: {id: user._id}}"
                    >{{ user.name }} ({{ user.username }})</router-link></p>
            </div>
            <div v-else>
                <p>There are no users registered</p>
            </div>
        </div>
        <div v-else><p>Loading...</p></div>
        <h5><router-link to="/user/new">New user</router-link></h5>
    </div>
</template>

<script>
import { defHeaders, endpoints } from '../../helpers/config'
export default {
    name: 'Users',
    data: function () {
        return {
            got_users: {total: 0},
            loaded: false
        }
    },
    mounted: function () {
        this.getUsers()
    },
    methods: {
        getUsers() {
            const body = {
                method: 'GET',
                headers: defHeaders()
            }            
            fetch(endpoints.users, body).
                catch(err => console.log(err.message)).
                then(r => r.json()).
                then(data => {
                    this.got_users = data.data
                    this.loaded = true
                })
        }
    }
}
</script>