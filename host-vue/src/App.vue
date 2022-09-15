<template>
  <div>
    <nav>
        <ul>
            <li>
              <router-link to="/" class="nav-link">Main page</router-link>
            </li>
            <li>
              <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            </li>
          <li>
            <router-link to="/live-data" class="nav-link">Live data</router-link>
          </li>
        </ul>
    </nav>
   <router-view/>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: 'Verdana', sans-serif;
  font-weight: 100;
}

nav {
  background: lightblue;
  height: 60px;

  ul {
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      list-style: none;

      &:hover {
        background: black;
      }

      .nav-link {
        color: #fff;
        text-decoration: none;
        display: block;
        line-height: 60px;
        padding: 0 20px;
      }
    }
  }
}
</style>