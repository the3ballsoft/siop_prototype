<template>
    <div id="app">
        <nav v-if="url != '/login'">
            <div class="nav-wrapper">
              <ul class="left hide-on-med-and-down">
                <li>
                  <router-link to="/">
                    <i class="material-icons left">dashboard</i> SIOOP
                  </router-link>
                </li>
              </ul>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <router-link to="/teacherplant">Planta docente</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>


<script>

export default {
  data () {
    return { 
      url: this.$route.path
    }
  },
  created() { }
}
</script>

<style>

@import url(http://fonts.googleapis.com/css?family=Roboto);
@import url(http://fonts.googleapis.com/icon?family=Material+Icons);

nav {
  background-color: #2196F3 !important;
  i.left {
    margin-right: 5px;
  }
}
.side-nav .userView .circle {
    object-fit: cover;
}
.corner-btn {
    position: fixed !important;
    bottom: 5% !important;
    right: 3% !important;
}

</style>
