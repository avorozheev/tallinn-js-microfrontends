<template>
  <div>
    <div id="dashboardModule"></div>
  </div>
</template>

<script>
  import { mount } from "dashboardModule/DashboardProvider";
  export default {
    data() {
      return {
        iswatch: true,
      };
    },
    mounted() {
      this.initialPath = this.$route.matched[0].path;

      const {onParentNavigate, onUnmount} = mount(document.getElementById("dashboardModule"), {
        baseUrl: '/dashboard',
        initialPath: this.initialPath,
        onNavigate: ({pathname: nextPathname}) => {
          const pathname = this.$route.path;

          if (pathname !== nextPathname) {
            this.iswatch = false;
            this.$router.push(nextPathname);
          }
        },
        displayToast: (text) => {
          console.log('Displaying toast', { text })
        }
      })

      this.onParentNavigate = onParentNavigate;
      this.onUnmount = onUnmount;
    },
    unmounted() {
      this.onUnmount()
    },
    watch: {
      $route(to, from) {
        let innerRoute = this.getInnerRoute(to.path);

        if (this.iswatch) {
          if(innerRoute) {
            this.onParentNavigate(innerRoute);
          }else {
            return true
          }
        } else {
          this.iswatch = true;
        }
      },
    },
    methods: {
      getInnerRoute(path) {
        return path.split(this.initialPath)[1];
      },
    },
  };
</script>
