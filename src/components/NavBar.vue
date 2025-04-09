<template>
  <nav class="navBar container" v-if="user">
    <div>
      <p>Welcome {{user.displayName}}</p>
      <p>Login as {{user.email}}</p>
    </div>
    <button>Logout</button>
  </nav>
</template>

<script>
import { auth } from '@/firebase/config'
import { ref } from 'vue'
export default {
    setup(){
        let user=ref(auth.currentUser);
        // onAuthStateChanged is always run when auth change anything like (singUp,login,logout)
        auth.onAuthStateChanged((_user)=>{
            user.value=_user
        })

        return {user}
    }
}
</script>

<style>
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>