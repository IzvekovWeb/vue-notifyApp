<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container"> 
        <notify
          :messages="messages"
        />
      </div>
    </section>
  </div>
</template>

<script>
import notify from '@/components/Notify.vue'

export default {
  components: { notify },
  data() {
    return {
      messages: [
        {title: 'message 1'},
        {title: 'message 2'},
        {title: 'message 3'},
        {title: 'message 4'},
        {title: 'message 5'},
        {title: 'message 6'}
      ]
    }
  }
}
</script> 