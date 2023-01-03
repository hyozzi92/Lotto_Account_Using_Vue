<template>
  <qrcode-stream @decode="onDecode"/>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'


export default {
  name: "TabContent2",
  methods : {
    onDecode(result){
      this.qrCodeData = result
    }
  },
  components : {
    QrcodeStream
  }
}
</script>

<style scoped>

</style>