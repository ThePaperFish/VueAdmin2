<template>
  <div>
       <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0"> 
            <navigationHeader></navigationHeader>
            <navigationIcon></navigationIcon>
            <navigationSidebar :userId="userId"></navigationSidebar>
       </nav>
    <router-view></router-view>
  </div>
</template>

<script >
import navigationHeader from '../components/naviHeader.vue';
import navigationSidebar from '../components/naviSidebar.vue';
import navigationIcon from '../components/naviIcon.vue';

    export default ({
        props:['userId'],
        components:{
            navigationHeader,
            navigationSidebar,
            navigationIcon
        }
    })
</script>
