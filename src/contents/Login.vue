
<template>
  <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Please Sign In</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" v-on:submit.prevent="login(username,password);">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Username" name="username" type="none" autofocus v-model="username">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" name="password" type="password" value="" v-model="password">
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me"  v-model="remember">Remember Me
                                    </label>
                                </div>
                                <!-- Change this to a button or input when using this as a form -->
                                <button class="btn btn-lg btn-success btn-block">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default{
    name: 'login',
    title: 'test',
    data: function(){
        return {
            remember:false,
            username:"admin",
            password:"admin"
        }
    },
    methods: {
        login: function(username,password){
            if(username == "admin" && password == "admin")
            {
            // // named route
            // router.push({ name: 'user', params: { userId: 123 }})

            // // with query, resulting in /register?plan=private
            // router.push({ path: 'register', query: { plan: 'private' }})

                this.$router.push({ name:"hello",params:{userId:"123"}});

            }
            else
                alert('Wrong Password. (default for now)');
        }
    }
}
</script>
