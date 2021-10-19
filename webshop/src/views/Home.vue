<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Message>test</Message>
  </div>
</template>

<script>
import Message from '../components/Message.vue'
export default {
  name: 'Home',
  components: {
    Message
  }
}
</script>
