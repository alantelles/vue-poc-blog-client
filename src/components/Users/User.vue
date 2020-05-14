<template>
    <div class='show_post'>
        <h2>{{ got_user.name }}</h2>
        <p>{{ got_user.username }}</p>
        <p>{{ got_user.email }}</p>
    </div>
</template>
<script>
import { endpoints, defHeaders } from '../../helpers/config'
export default {
    name: 'User',
    data: function () {
        return {
            got_user: {}
        }
    },
    mounted: function () {
        this.getUser()
    },
    methods: {
        getUser () {
            const endpt = endpoints.users + '/' + this.$route.params.id
            const body = {
                method: 'GET',
                headers: defHeaders(),
            }
            fetch(endpt, body).
                catch(err => console.log(err.message)).
                then(r => r.json()).
                then(data => {
                    this.got_user = data
                    this.loaded = true
                })
        }
    }
}
</script>