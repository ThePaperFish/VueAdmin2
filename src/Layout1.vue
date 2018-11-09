<template>
<div>
    <vue-headful
            title="Title from vue-headful"
            description="Description from vue-headful"
        />
    <button @click='goApp()' >Hello Wrodl</button>
    <router-view></router-view>
</div>
</template>

<script>

export default {
    name: 'Container1',
    title: 'test',
    data: function(){
        return {
            hey: "hi"
        }
    },
    methods: {
        goApp: function(){
            //alert('hi');
            this.$router.push({ name: 'user', params: { userId: 123 }})
        }
    }
}
</script>