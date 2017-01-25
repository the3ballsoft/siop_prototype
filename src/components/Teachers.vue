<template>
  <div class="container">
    <h4>Planta docente</h4>
    <a class="btn-floating btn-large waves-effect waves-light blue corner-btn" v-on:click="newTeacher()">
      <i class="material-icons">add</i>
    </a>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-content">
            <div class="loading" v-if="loading">
              Loading...
            </div>
            <table class="highlight responsive-table" v-if="!loading">
              <thead>
                <tr>
                  <th data-field="dni">C.C</th>
                  <th data-field="nombre">Nombre</th>
                  <th data-field="cargo">Cargo</th>
                  <th data-field="area">Area de desempeño</th>
                  <th data-field="action">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="teacher in teachers" :key="teacher.person.dni">
                  <td>{{ teacher.person.dni }}</td>
                  <td>{{ teacher.person.name }}</td>
                  <td>{{ teacher.position }}</td>
                  <td>{{ teacher.area }}</td>
                  <td>
                    <a class="btn-small waves-effect waves-light" v-on:click="openModalDetail(teacher)"><i class="material-icons">remove_red_eye</i></a>
                    <a class="btn-small waves-effect waves-light" v-on:click="editTeacher(teacher)"><i class="material-icons">edit</i></a>
                    <a class="btn-small waves-effect waves-light" v-on:click="confirmDelete(teacher)"><i class="material-icons">delete</i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div id="teacherDetailModal" class="modal">
      <div class="modal-content">
        <h4 v-if="current.person">{{ current.person.name }}</h4>
        <div class="user-info">
          <!--DNI-->
          <div class="row">
            <div class="col s12 m3">
              <label for="">Documento:</label>
            </div>
            <div class="col s12 m9" v-if="current.person">
              {{ current.person.dni }}
            </div>
          </div>
          <div class="row">
            <div class="col s12 m3">
              <label for="">Grado:</label>
            </div>
            <div class="col s12 m9" v-if="current.person">
              {{ current.person.grade }}
            </div>
          </div>
          <div class="row">
            <div class="col s12 m3">
              <label for="">Cargo:</label>
            </div>
            <div class="col s12 m9" v-if="current.person">
              {{ current.position}}
            </div>
          </div>
          <div class="row">
            <div class="col s12 m3">
              <label for="">Nivel Contratacion:</label>
            </div>
            <div class="col s12 m9">
              {{ current.contract_level }}
            </div>
          </div>
          <div class="row">
            <div class="col s12 m3">
              <label for="">Situacion:</label>
            </div>
            <div class="col s12 m9">
              {{ current.status }}
            </div>
          </div>
          <div class="row">
            <div class="col s12 m3">
              <label for="">Esquema:</label>
            </div>
            <div class="col s12 m9">
              {{ current.schema }}
            </div>
          </div>
          <div class="row">
            <div class="col s12 m3">
              <label for="">Profesion:</label>
            </div>
            <div class="col s12 m9">
              {{ current.profession }}
            </div>
          </div>
          <div class="row">
            <div class="col s12 m3">
              <label for="">Sede:</label>
            </div>
            <div class="col s12 m9">
              {{ current.headquaters }}
            </div>
          </div>
          <div class="row">
            <div class="col s12 m3">
              <label for="">Area de Desempeño:</label>
            </div>
            <div class="col s12 m9">
              {{ current.area }}
            </div>
          </div>
          <div class="row">
            <div class="col s12 m3">
              <label for="">Observacion:</label>
            </div>
            <div class="col s12 m9">
              {{ current.observation }}
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a v-on:click="closeModal()" class="modal-action modal-close waves-effect blue-text btn-flat">Cerrar</a>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TeachersComponent',
  data () {
    return {
      loading: false
    }
  },
  created () {
    this.$parent.url = this.$route.path
    this.getTeachers()
    setTimeout(() => $('.modal').modal({ in_duration: 150, out_duration: 0 }))
  },
  watch: {
    '$route': 'getTeachers'
  },
  methods: {
    ...mapActions([
      'getTeachers',
      'selectTeacher',
      'createTeacher',
      'updateTeacher',
      'deleteTeacher'
    ]),
    editTeacher(teacher) {
      this.selectTeacher(teacher)
      this.$router.push(`/teacherplant/edit/${teacher.person.dni}`)
    },
    openModalDetail(teacher) {
      this.selectTeacher(teacher);
      $('#teacherDetailModal').modal('open')
    },
    closeModal() {
      $('#teacherDetailModal').modal('close')
    },
    confirmDelete(teacher) {
      const response = confirm(`¿Esta seguro que desea eliminar el docente "${teacher.person.name}"`)
      if(response) {
        this.deleteTeacher({teacher, cb: () => Materialize.toast(`Docente eliminado`, 4000) })
      }
    },
    newTeacher() {
      this.$router.push('/teacherplant/new')
    }
  },
  computed: {
    teachers() {
      return this.$store.getters.teachers
    },
    current() {
      return this.$store.getters.currentTeacher
    }
  }
}
</script>

<style>
 .loading {
     text-align: center;
     font-size: 1.5em;
 }
 .modal-overlay {
   background: rgba(128, 128, 128, 0.36) !important;
 }
 .modal {
   max-height: 80% !important;
 }

 @media(max-width: 460px){
   .modal {
     top: 0 !important;
     height: 100% !important;
     width: 100% !important;
     max-height: 100% !important;
     max-width: 100% !important;
   }
 }
</style>
