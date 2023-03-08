<template>
  <nav v-if="user">
    <div>
        <p>Hi {{user.displayName}}</p>
        <p class="email">logged in as {{user.email}}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
    setup(){
        let {user} = getUser();

        let {error,logoutAccount}=useLogout()
        let logout = async() =>{
            await logoutAccount()
        }

        return {logout,error,user}
    }
}
</script>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        /* border-bottom: 1px solid #eee; */
    }
    nav p{
        font-size: 16px;
        color: #444;
        margin: 2px auto;
    }
    .email{
        font-size: 14px;
        color: #999;
    }
</style>