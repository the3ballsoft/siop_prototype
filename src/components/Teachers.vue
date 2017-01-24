<template>
  <div class="container">
    <h3>Docentes</h3>
    <a class="btn-floating btn-large waves-effect waves-light blue corner-btn" v-on:click="openModal({})">
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
                  <th data-field="id">ID</th>
                  <th data-field="nombre">Nombre</th>
                  <th data-field="action">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="area in areas" :key="area._id">
                  <td>{{ area._id }}</td>
                  <td>{{ area.name }}</td>
                  <td>
                    <a class="btn-small waves-effect waves-light" v-on:click="openModal(area)"><i class="material-icons">edit</i></a>
                    <a class="btn-small waves-effect waves-light" v-on:click="confirmDelete(area)"><i class="material-icons">delete</i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div id="areaForm" class="modal">
      <div class="modal-content">
        <h4>
          <span v-if="!current._id">Nueva</span>
          <span v-if="current._id">Editar</span> 
          Area
        </h4>
        <label for="name">Nombre</label>
        <input type="text" v-model="current.name" id="name" autofocus="true" v-on:keyup.enter="save">
      </div>
      <div class="modal-footer">
        <a v-on:click="save()" class="modal-action modal-close waves-effect waves-green btn-flat">Guardar</a>
        <a v-on:click="closeModal()" class="modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
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
    //this.getAreas()
    setTimeout(() => $('.modal').modal({ dismissible: false }))
  },
  watch: {
    '$route': 'getAreas'
  },
  methods: {
    ...mapActions([
      'getAreas',
      'selectArea',
      'createArea',
      'updateArea',
      'deleteArea'
    ]),
    save(){
        if(!this.current._id) 
            this.createArea({ area: this.current, cb: this.notify('creada')})
        else 
            this.updateArea({ area: this.current, cb: this.notify('editada')})
        this.closeModal()
    },
    openModal(area) {
      this.selectArea(area);
      $('#areaForm').modal('open')
    },
    closeModal() {
      $('#areaForm').modal('close')
    },
    confirmDelete(area){
      const response = confirm(`¿Esta seguro que desea eliminar el area "${area.name}"`)
      if(response) this.deleteArea({area, cb: this.notify('eliminada') });
    },
    notify(verb) {
        return function(res){
            if(res) return Materialize.toast(`Area ${verb} correctamente`, 4000)
        }
    }
  },
  computed: {
    areas() {
      return this.$store.getters.areas
    },
    current() {
      return this.$store.getters.currentArea
    }
  }
}
</script>

<style>
 .loading {
     text-align: center;
     font-size: 1.5em;
 }
</style>
