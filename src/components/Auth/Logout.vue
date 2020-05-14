<template>
    <p>Logging out...</p>
</template>

<script>
export default {
    name: 'Logout',
    mounted: function () {
        sessionStorage.clear()
        this.$router.push({path: '/'})
    }
}
</script>