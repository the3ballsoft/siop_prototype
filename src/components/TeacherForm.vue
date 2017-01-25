<template>
  <div class="container">
    <div style="display: inline-block" class="valign-wrapper">
      <router-link to="/teacherplant" class="valign" style="display: inline-block">
        <i class="material-icons">keyboard_arrow_left</i>
      </router-link>
      <h5 style="display: inline-block">{{ title }} Docente</h5>
    </div>
    <!-- -step 1 -->
    <div class="row" v-if="step==1">
      <div class="col s12 m6 offset-m3">
        <div class="card">
          <div class="card-content">
            <div class="row">
              <div class="input-field col s12">
                <input type="text" placeholder="Numero documento o Nombre" v-on:keyup="searchPerson" v-model="query">

                <div v-if="loading" class="spinner"></div>

                <ul class="collection" v-if="personsResult.length">
                  <li class="collection-item selectable" 
                    v-for="(person, index) in personsResult" 
                    v-bind:class="{'active': person.active}"
                    v-on:click="selectPerson(index)">
                    C.C. {{ person.dni }} - {{ person.name }} (grado {{ person.grade }})
                  </li>
                </ul>

                <small v-if="personsResult.length == 0 && touch">No hay resultados</small>
                <small v-if="!touch">El sistema validara si la persona esta registrada en SIOOP</small>
              </div>
            </div> 
          </div>
        </div>
        <div class="col s12">
          <router-link class="btn btn-flat" to="/teacherplant">Cancelar</router-link>
          <button class="btn btn-flat blue white-text right" 
                  v-bind:disabled="!ok1" 
                  v-on:click="step = step + 1">
            Siguiente
          </button>
        </div>
      </div>
    </div>
    <!-- -step 2 -->
    <div class="row" v-if="step==2">
      <div class="col s12 m4 hide-on-small-only">
        <div class="card">
          <div class="card-content">
            <div class="row" style="text-align: center;">
              <strong>{{ teacher.person.name }}</strong>
            </div>
            <div class="row">
              <div class="col s12 m3">
                <label for="">Documento:</label>
              </div>
              <div class="col s12 m9 mutted">
                {{ teacher.person.dni }}
              </div>
            </div>
            <div class="row">
              <div class="col s12 m3">
                <label for="">Grado:</label>
              </div>
              <div class="col s12 m9 mutted">
                {{ teacher.person.grade }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col m8 s12">
        <div class="card">
          <div class="card-content">
            <div class="row">
              <label>Cargo</label>
              <input type="text" v-model="teacher.position">
            </div> 

            <div class="row">
              <label>Nivel Contratacion</label>
              <select class="browser-default" v-model="teacher.contract_level">
                <option value="" disabled>-- Seleccione una --</option>
                <option value="Propiedad">Propiedad</option>
                <option value="Provisional Vacante Temporal">Provisional Vacante Temporal</option>
                <option value="Provisional Vacante Definitiva">Provisional Vacante Definitiva</option>
              </select>
            </div> 

            <div class="row">
              <label>Situacion</label>
              <select class="browser-default" v-model="teacher.status">
                <option value="" disabled >-- Seleccione una --</option>
                <option value="Normal">Normal</option>
                <option value="Encargo Vacante Definitiva">Encargo Vacante Definitiva</option>
                <option value="Reemplazo Encargo">Reemplazo Encargo</option>
                <option value="Situacion laboral remunerada">Situacion laboral remunerada</option>
              </select>
            </div> 

            <div class="row">
              <label>Esquema</label>
              <select class="browser-default" v-model="teacher.schema">
                <option value="" disabled >-- Seleccione uno --</option>
                <option value="Primaria">Primaria</option>
                <option value="Secundaria">Secundaria</option>
                <option value="Administrativos">Administrativo</option>
              </select>
            </div> 

            <div class="row">
              <label>Profesion</label>
              <input type="text" placeholder="Lic. en Matematicas, Lic. en Ciencias Basicas, etc" v-model="teacher.profession">
            </div> 

            <div class="row">
              <label>Sede</label>
              <select class="browser-default" v-model="teacher.headquaters">
                <option value="" disabled >-- Seleccione una --</option>
                <option value="I.E.D Jhon F Kennedy - Principal">I.E.D Jhon F Kennedy - Principal</option>
                <option value="I.E.D Bonda">I.E.D Jhon F Kenndy - Bonda</option>
              </select>
            </div> 

            <div class="row">
              <label>Area de desempeño</label>
              <input type="text" placeholder="" v-model="teacher.area">
            </div> 

            <div class="row">
              <label>Observacion (Opcional)</label>
              <textarea v-model="teacher.observation" class="materialize-textarea"></textarea>
            </div> 

          </div>
        </div>
        <div class="col s12">
          <button class="btn btn-flat left" v-on:click="step = step -1">
            Atras 
          </button>
          <button class="btn btn-flat blue white-text right" v-on:click="save">
            Guardar 
          </button>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TeacherFormComponent',
  data () {
    return {
      loading: false,
      title: 'Nuevo',
      touch: false,
      personsResult: [],
      currentPerson: {},
      teacher: { person: {} },
      ok1: false,
      step: 1,
      isEdit: false
    }
  },
  watch: {
    step(next) {
      if(next == 2) {
        this.teacher.person = this.currentPerson
      }
    }
  },
  created () {
    if(this.$route.path !== '/teacherplant/new') {
      this.title = 'Editar'
      this.currentPerson = this.current.person
      this.teacher = this.current 
      this.step = 2
      this.isEdit = true
    }
  },
  methods: {
    ...mapActions([
      'selectTeacher',
      'createTeacher',
      'updateTeacher'
    ]),
    searchPerson () {
      this.loading = true
      setTimeout(() => {
        this.personsResult = this.persons.filter( item => {
          return item.dni.indexOf(this.query) > -1 && this.query  != ""
        })
        this.loading = false 
        this.touch = true
      }, 700)
    },
    selectPerson (index) {
      if(this.currentPerson.dni == this.personsResult[index].dni) {
        this.personsResult[index].active = false
        this.ok1 = false 
      } else {
        this.personsResult.forEach( p => p.active = false)
        this.personsResult[index].active = true 
        this.currentPerson = this.personsResult[index]
        this.ok1 = true 
      }
    },
    save(){ 
      if(this.isEdit) {
        this.updateTeacher({ teacher: this.teacher, cb: res => {
          Materialize.toast(`Docente actualizado`, 4000) 
        }})
      } else {
        this.createTeacher({ teacher: this.teacher, cb: res => {
          Materialize.toast(`Docente creado`, 4000) 
        }})
      }
      this.$router.push('/teacherplant')
    }
  },
  computed: {
    persons() {
      return this.$store.getters.persons
    },
    current() {
      return this.$store.getters.currentTeacher
    }
  }
}
</script>

<style>
.spinner {
  margin: 5px;
  height: 28px;
  width: 28px;
  animation: rotate 0.8s infinite linear;
  border: 8px solid #2196f3;
  border-right-color: transparent;
  border-radius: 50%;
  margin: 0 auto;
}

@keyframes rotate {
  0%    { transform: rotate(0deg); }
  100%  { transform: rotate(360deg); }
}
.selectable {
  cursor: pointer;
}
.mutted {
  color: #8a8a8a;
}
</style>
