<template>
    <p>Deleting post...</p>
</template>

<script>
import { endpoints, isAuthenticated, defHeaders } from '../../helpers/config'
export default {
    name: 'DeletePost',
    mounted: function () {
        this.deletePost()
    },
    methods: {
        deletePost () {
            if (isAuthenticated()) {
                const reqData = {
                    method: 'DELETE',
                    headers: defHeaders()
                }
                console.log(endpoints.posts + '/' + this.$route.params.id + '?cascade=true')
                fetch(endpoints.posts + '/' + this.$route.params.id, reqData).
                    then(r => r.json()).
                    then((data) => {
                        this.$router.push({name: 'Posts'})
                        console.log(data)
                    }).
                    catch(err => console.log(err.message))
            }
        }
    }
}
</script>