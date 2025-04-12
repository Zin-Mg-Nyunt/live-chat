<template>
  <div class="chatWindow">
    <div class="messages" v-if="messages">
        <div class="single" v-for="message in messages" :key="message.id">
            <span class="time">{{message.created_at}}</span>
            <span class="name">{{message.name}}</span>
            <span class="text">{{message.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { ref } from 'vue'
export default {
    setup(){
        let messages = ref([]);
        db.collection('messages').orderBy('created_at').onSnapshot((snap)=>{
            snap.docs.forEach(doc=>{
                messages.value.push({...doc.data(),id:doc.id})
            })
        })
        return {messages}
    }
}
</script>

<style>
    .chatWindow{
        width: 100%;
        background-color: rgb(248, 247, 247);
    }
    .messages{
        padding: 5px 15px;
        color: rgb(90, 90, 90);
        letter-spacing: .5px;
    }
    .single{
        margin: 15px 0;
    }
    .time{
        display: block;
        padding-bottom: 5px;
        color: rgb(182, 182, 182);
    }
    .name{
        font-weight: bold;
    }
    .text{
        padding-left: 10px;
    }
</style>