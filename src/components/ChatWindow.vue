<template>
  <div class="chatWindow">
    <div class="messages" v-if="messages">
        <div class="single" v-for="message in formattedMessages" :key="message.id">
            <span class="time">{{message.created_at}}</span>
            <span class="name">{{message.name}}</span>
            <span class="text">{{message.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { computed, ref } from 'vue'
import { formatDistanceToNow, FormatDistanceToNow } from "date-fns";
export default {
    setup(){
        let messages = ref([]);
        let formattedMessages = computed(()=>{ //format date depend on messages array
            return messages.value.map(msg=>{
                let formattedTime = formatDistanceToNow(msg.created_at.toDate())
                return {...msg,created_at:formattedTime}
            })
        })
        // fetch messages with realtime database
        db.collection('messages').orderBy('created_at').onSnapshot((snap)=>{
            let result = [];
            snap.docs.forEach(doc=>{
                // fixing calling toDate() from null error
                // if (doc.data().created_at) {
                //     result.push({...doc.data(),id:doc.id});
                // }
                doc.data().created_at && result.push({...doc.data(),id:doc.id}); // shorthand
            })
            messages.value=result;
        })
        return {messages,formattedMessages}
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
        max-height: 600px;
        overflow: auto;
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