<template>
    <div class="container">
        <h1>Bienvenido a S.I.O.O.P</h1>
        <small>Sistema de informacion para organizacion de planta docente</small>
        <ul>
            <li>
                <router-link to="/teacherplant" class="btn btn-flat blue white-text">Ver planta docente</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  created () {
    this.$parent.url = this.$route.path
  }
}
</script>

<style>
</style>
