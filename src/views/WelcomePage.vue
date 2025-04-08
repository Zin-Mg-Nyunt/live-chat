<template>
  <div class="welcome container">
    <div v-if="toggle">
      <SignUp></SignUp>
      <p>Already have an account? <span @click="toggle=!toggle">Login Account?</span></p>
    </div>
    <div v-if="!toggle">
      <Login></Login>
      <p>Not a member? <span @click="toggle=!toggle">Signup Account?</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
export default {
  components: {
    Login, SignUp },
  setup(){
    let toggle= ref(true);

    return {toggle}
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