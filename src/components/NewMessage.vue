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
import useCollection from "../composable/useCollection";
export default {
    setup(){
        let message = ref("");
        let user = getUser();
        let {error,addDoc}=useCollection("messages"); // composable function

        let messageSend = async ()=>{
            let chat={
                message:message.value,
                name:user.value.displayName,
                created_at:timestamp()
            }
            await addDoc(chat) // add data
            message.value = "";
        }

        return {message,messageSend,error}
    }
}
</script>

<style>
    textarea{
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        padding: 10px;
        color: rgb(135, 135, 135);
        font-size: 15px;
        outline: none;
        border: none;
        border-radius: 20px;
        margin-top: 10px;
    }
    textarea::placeholder{
        color: rgb(186, 186, 186);
        position: relative;
        bottom: 0;
    }
</style>