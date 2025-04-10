<template>
  <form>
    <textarea 
        placeholder="text message and enter to send" 
        v-model="message"
        @keypress.enter="messageSend"
    ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/composable/getUser';
import { timestamp } from '@/firebase/config';
export default {
    setup(){
        let message = ref("");
        let user = getUser();
        let messageSend = ()=>{
            let chat={
                message:message.value,
                name:user.value.displayName,
                created_at:timestamp()
            }
        }
        return {message,messageSend}
    }
}
</script>

<style>
    textarea{
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        padding: 10px;
        color: rgb(135, 135, 135);
        font-size: 15px;
        outline: none;
        border-color: lightgray;
    }
    textarea::placeholder{
        color: rgb(186, 186, 186);
        position: relative;
        font-weight: bold;
        bottom: 0;
    }
</style>