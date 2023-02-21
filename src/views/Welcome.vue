<template>
    <div class="welcome container">
        <div v-if="showLoginForm">
            <Login></Login>
            <p>Not a member? <span @click="showLoginForm = !showLoginForm">Signup Account</span></p>
        </div>
        <div v-else>
            <Signup></Signup>
            <p>Already memnber? <span @click="showLoginForm = !showLoginForm">Login Account</span></p>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'

import Login from '../components/login'
import Signup from '../components/Signup'
export default {
  components: {
    Login, Signup },

    setup(){
        let showLoginForm = ref(true);

        return {showLoginForm}
    }

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
    .welcome span{
        font-weight: bold;
        cursor: pointer;
        text-decoration: underline;
    }
    .welcome button{
        padding: 10px 20px;
        margin: 20px auto;
        font-size: 1.2rem;
    }
</style>