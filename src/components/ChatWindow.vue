<template>
  <div class="chatWindow">
    <div class="messages">
        <div class="single">
            <span class="time">2mins ago</span>
            <span class="name">minmin</span>
            <span class="text">hi</span>
        </div>
        <div class="single">
            <span class="time">2mins ago</span>
            <span class="name">minmin</span>
            <span class="text">hi</span>
        </div>
        <div class="single">
            <span class="time">2mins ago</span>
            <span class="name">minmin</span>
            <span class="text">hi</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .chatWindow{
        width: 100%;
        background-color: rgb(248, 247, 247);
    }
    .messages{
        padding: 15px;
        color: rgb(90, 90, 90);
        letter-spacing: .5px;
    }
    .single{
        margin: 15px 0;
    }
    .time{
        display: block;
        padding: 5px 0;
        color: rgb(182, 182, 182);
    }
    .name{
        font-weight: bold;
    }
    .text{
        padding-left: 10px;
    }
</style>