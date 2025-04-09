<template>
  <div class="welcome container">
    <div v-if="toggle">
      <SignUp @enterChatroom="enterChatroom"></SignUp>
      <p>Already have an account? <span @click="toggle=!toggle">Login Account?</span></p>
    </div>
    <div v-if="!toggle">
      <Login @enterChatroom="enterChatroom"></Login>
      <p>Not a member? <span @click="toggle=!toggle">Signup Account?</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useRouter } from 'vue-router'
export default {
  components: {
    Login, SignUp },
  setup(){
    let router = useRouter();
    let toggle= ref(true);
    let enterChatroom = ()=>{
      router.push({name:'chatroom'})
    }
    return {toggle,enterChatroom}
  }
}
</script>

<style>
  .welcome{
    text-align: center;
  }
  p{
    color: rgb(186, 186, 186);
  }
  p span{
    color: black;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
</style>