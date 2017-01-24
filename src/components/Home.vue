<template>
    <div class="container">
        <h1>El home</h1>
        <ul>
            <li>
                <router-link to="/teacherplant">Planta docente</router-link>
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
