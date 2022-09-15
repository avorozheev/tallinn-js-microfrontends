<template>
  <div class="container">
    <h1>
      Main page
    </h1>

    <ul>
      <li>
        View <router-link to="/live-data">live data</router-link>
      </li>
      <li>
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .container{
    padding: 0 20px;

    ul {
      li {
        padding:0 0 20px;
      }

    }
  }
</style>
