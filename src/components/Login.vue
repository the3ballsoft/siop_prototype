<template>
  <div class="login">
    <div class="l-content">
      <div class="l-left">
        <div class="info-logo" style="text-align: center">
          <!--<img src="http://i67.tinypic.com/33z2nag.jpg">-->
          <h1 style="text-shadow: white 1px 3px; margin-bottom: 0">S.I.O.P.</h1>
          <h3 style="text-shadow: white 1px 3px;">Guajira</h3>
        </div>
      </div>

      <div class="l-right">
        <form novalidate v-on:submit.prevent="login">
          <div class="row mobile-info-logo">
            <div class="info-logo">
              <!--<img src="http://i63.tinypic.com/2mmef80.jpg">-->
              <h3>SIOP</h3>
              <p>Guajira</p>
            </div>
          </div>
          <div class="row title-info" style="">
            <div class="col s12">
              <h5>Iniciar Sessión</h5>
              <span class="subtitle">Ingrese sus credenciales de acceso</span>
            </div>
          </div>
          <div class="row nomargin" >
            <div class="col s12">
              <div class="input-field">
                <input id="username" type="text" class="validate"
                                                 name="username"
                                                 required=""
                                                 placeholder="Nombre de usuario o email">
                <label for="username">Nombre de usuario</label>
              </div>
            </div>
          </div>
          <div class="row nomargin">
            <div class="col s12">
              <div class="input-field">
                <input id="password" type="password" class="validate"
                                                     required=""
                                                     name="email"
                                                     placeholder="xxxxxx">
                <label for="password">Contrasena</label>
              </div>
            </div>
          </div>
          <div class="row ">
            <div class="col s12">
              <p>
              <input type="checkbox" />
              <label for="test5" style="color: #212121">Recordarme</label>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <button class="btn waves-effect waves-light blue" type="submit">
                Ingresar
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col s12 center">
              <a href="" style="color: #039be5">Olvido su contrasena?</a>
            </div>
          </div>

        </form>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                username: 'admin',
                password: '123456',
                loading: false,
                error: false
            }
        },
        created () {
          this.$parent.url = this.$route.path
        },
        methods: {
            login () {
              this.$router.replace('/')
            }
        }
    }
</script>

<style lang="scss">

.login {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .l-content{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    height: 100%;
    .l-left{
      flex: 0.7;
      background-color: #fcf9c4;
      background-image: url(http://travelisanart.com/wp-content/uploads/2014/02/desierto-de-la-guajira-8.jpg);
      background-position: center;
      background-size: cover;
      .info-logo{
        padding: 40px;
        img {
          width: 300px;
        }
      }
    }
    .l-right{
      background-color: white;
      flex: 0.3;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: -4px 0px 9px -4px rgba(0,0,0,0.25);
      padding: 20px;
      overflow: overlay;
      .title-info {
        margin-bottom: 50px;
      }
      form {
        width: 320px;
        margin: 20px;
        button {
          width: 100%;
        }
      }

      .mobile-info-logo {
        margin-bottom: 10px;
      }
      .info-logo{
        display: none;
        text-align: center;
        img {
          width: 140px;
        }
      }

    }
    //RESPONSIVE

    @media(max-width: 1000px){
      .l-right {
        flex: 0.5;
        align-items: flex-start;
      }
    }
    @media(max-width: 830px){
      .l-left {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .info-logo{
          display: none;
        }

      }
      .l-right {
        margin: 0 auto;
        z-index: 22;
        flex: 0.7;
        .info-logo{
          display: block;
        }
        .title-info {
          text-align: center;
          margin-bottom: 20px;
        }
      }
    }

    @media(max-width: 580px){
      .l-right {
        flex: 1;
        form {
          width: 100%;
        }
      }
    }
  }
}

.nopadding {
  padding: 0 !important;
}

.nomargin {
  margin: 0 !important;
}
</style>
