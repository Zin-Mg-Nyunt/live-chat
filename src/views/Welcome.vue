<template>
    <div class="welcome container">
        <Signup></Signup>
        <Login></Login>
    </div>
</template>

<script>

import Login from '../components/login'
import Signup from '../components/Signup'
export default {
  components: {
    Login, Signup },


}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }
    .welcome form{
        display: inline-block;
        max-width: 350px;
    }
    .welcome input{
        width: 100%;
        margin: 15px 0;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        font-size: 1.2rem;
    }
    .welcome button{
        padding: 10px 20px;
        margin: 20px auto;
        font-size: 1.2rem;
    }
</style>