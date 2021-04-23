<template>
  <div>
    This test app should be updating the root field <strong>test</strong> between true and false every second.
    <br>
    <br>
    Current value: <strong>{{ testValue }}</strong>

    <div v-if="error">
      <h3>Error</h3>
      {{ error }}
    </div>
  </div>
</template>

<script>
import { database } from './firebase'

export default {
  name: 'App',
  data() { 
    return { 
      testValue: false, 
      error: null
    }
  },
  created() {
   const self = this
    database.ref('test').on('value', snapshot => {
      console.log(snapshot.val())
    })
    setInterval(function () {
      database.ref('test').set(self.testValue).catch(error => {
        self.error = error
      })
      self.testValue = !self.testValue
    }, 1000)
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
