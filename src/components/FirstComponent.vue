<template>
  <div id="first-component">
    <h1>I am first title</h1>
    <a>written by {{ author }} </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: 'EnjoyMe'
    }
  }
}
</script>

<style>

</style>
