<template>
  <div class="container">
    <NavBar></NavBar>
    <ChatWindow></ChatWindow>
    <NewMessage></NewMessage>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewMessage from '../components/NewMessage'
import { watch } from 'vue'
import NavBar from '../components/NavBar'
import { useRouter } from 'vue-router';
import getUser from "../composable/getUser";
export default {
  components: {
    ChatWindow,
    NewMessage, NavBar },
  setup(){
    let router = useRouter();
    let user = getUser();
    // watch method is always watching its first para and if it changes something, sec para run
    watch(user,()=>{ 
      if (!user.value) {
        router.push({name:'welcome'})
      }
    })
  }
}
</script>

<style>

</style>