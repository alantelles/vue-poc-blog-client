<template>
    <div class='main-screen'>
        <h2>Home</h2>
        <div class="panel">
            <h4>Users</h4>
            <p>{{ users_count }} users registered</p>
            <router-link class="reg-button" :to="{name: 'Users'}">
                <button class="my-btn" type="button">See all</button>
            </router-link>
        </div>
        <div class="panel">
            <h4>Posts</h4>
            <p>{{ posts_count }} posts registered</p>
            <router-link :to="{name: 'Posts'}">
                <button class="my-btn" type="button">See all</button>
            </router-link>
        </div>
    </div>
</template>
<script>
import { defHeaders, endpoints } from '../../helpers/config'
export default {
    name: 'Home',
    data: function () {
        return {
            posts_count: 0,
            users_count: 0
        }
    },
    mounted: function () {
        this.getResources()
    },
    methods: {
        getResources () {
            const body = {
                method: 'GET',
                headers: defHeaders()
            }
            let endpt = endpoints.posts
            fetch(endpt, body).
                catch(err => console.log(err.message)).
                then(r => r.json()).
                then(data => {
                    this.posts_count = data.total                    
                })
            endpt = endpoints.users
            fetch(endpt, body).
                catch(err => console.log(err.message)).
                then(r => r.json()).
                then(data => {
                    this.users_count = data.total                    
                })
        }
    }
}
</script>

<style>
    .main-screen {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .panel {
        width: 90vw;
        margin: 10px; padding: 20px;
        background-color: rgb(146, 197, 96);
        text-align: left;
    }
    .my-btn {
        background-color: rgb(25, 54, 40);
        border: none;
        margin-top: 6px;
        padding: 5px;
        color: white;
    }
    .my-btn:hover, .reg-button:hover {
        background-color: rgb(45, 80, 63);
    }
</style>