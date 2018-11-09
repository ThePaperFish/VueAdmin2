<template>
    
    <div id="navigationSidebar" class="navbar-default sidebar" role="navigation">
        
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
                
                <li class="sidebar-search">
                    <div class="input-group custom-search-form">
                        <input type="text" class="form-control" placeholder="Search...">
                        <span class="input-group-btn">
                        <button class="btn btn-default" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
                    </div>
                    <!-- input-group -->
                </li>

                <greeting2></greeting2>
                <greeting></greeting>

                <li v-for="item in menuItems" :item="item" :key="item.link">

                    <router-link :to="item.link">
                        <i class="fa  fa-fw" :class="item.icon"></i> 
                        {{item.title}} 
                        <span class="fa arrow" v-if="item.nextlevel !== udf"></span>
                    </router-link>  


                    <ul class="nav nav-second-level" v-if="item.nextlevel !== udf">

                        <li v-for="itemb in item.nextlevel" :item="itemb" :key="itemb.link">
                            
                            <router-link :to="itemb.link">
                                 {{itemb.title}} 
                                <span class="fa arrow" v-if="itemb.nextlevel !== udf"></span>
                            </router-link>

                            <ul class="nav nav-third-level"  v-if="itemb.nextlevel !== udf">

                                <li v-for="itemc in itemb.nextlevel" :item="itemc" :key="itemc.link">
                                    <router-link :to="itemc.link">
                                        {{itemc.title}} 
                                    </router-link>
                                </li>

                                <!-- Thrid Level Menu -->

                            </ul>
                        </li>

                        <!-- Second Level Menu -->

                    </ul>
                </li>
                
                <!-- First Level Menu -->

            </ul>


        </div>
        <!-- /.sidebar-collapse -->
    </div>
    <!-- /.navbar-static-side -->

</template>

<script>
import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';

Vue.component("greeting2", {
    template: "<h1>Hwllo World</h1>"
});

export default {
    name: 'navigationSidebar',
    props: ['userId'],  
    components: {
        greeting:  HelloWorld
    },
    methods:{
        parentLink: function(extendedlink) {
            return `/user/${this.userId}/${extendedlink}`;
        }
    },
    data: function(){
        return {
            parentMessage: 'Parent',
            udf : undefined,
            menuItems: [
                // {link: "index",title: "Dashboard",icon: "fa-dashboard"},
                // {link: "#",title: "Charts",icon: "fa-bar-chart"},
                // {link: "tables",title: "Tables",icon: "fa-table"},
                // {link: parentLink + "ttest",title: "Forms",icon: "fa-edit"},
                // {link: "ttest",title: "UI Elements",icon: "fa-wrench"},
                // {link: "about", title:"Multi-Level Dropdown", icon: "fa-sitemap"},
                {link: "#", title:"Home", icon: "fa-files-o",
                nextlevel: [
                    {link: "/blank",title: "Blank Page"},
                    {link: "/about",title: "About Page"},
                    {link: "/homepage",title: "Home Page"},
                    {link: "/test",title: "Test Page"},
                    {link: "/login",title: "Login Page"}
                ]},
                {link: "#", title:"User", icon: "fa-files-o",
                nextlevel: [
                    {link: this.parentLink("home"   ) ,title: "User Home Page"   },
                    {link: this.parentLink("profile") ,title: "User Profile Page"},
                    {link: this.parentLink("blank"  ) ,title: "User Blank Page"  },
                ]}
            ]
        }
    }
}
</script>



