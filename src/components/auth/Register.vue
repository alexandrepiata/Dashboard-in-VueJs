      <template>
        <div>
          <h4>Cadastrar Usuário</h4>
          <div class="container" style="width:20%;">
          <form @submit.prevent="register">
            <label for="name">Nome</label>
            <div>
                <input class="form-control mb-2" id="name" type="text" v-model="name" required autofocus>
            </div>
            <label for="email" >Email</label>
            <div>
                <input class="form-control mb-2" id="email" type="email" v-model="email" required>
            </div>
            <label for="password">Senha</label>
            <div>
                <input class="form-control mb-2" id="password" type="password" v-model="password" required>
            </div>
            <label for="password-confirm">Confirmar Senha</label>
            <div>
                <input class="form-control mb-2" id="password-confirm" type="password" v-model="password_confirmation" required>
            </div>
            <div>
                <button class="btn btn-info btn-block" type="submit">Cadastrar</button>
            </div>
          </form>
          </div>
        </div>
      </template>
      <script>
      export default {
        data() {
          return {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
          };
        },
        methods: {
          register: function() {
            let data = {
              name: this.name,
              email: this.email,
              password: this.password,
            };
            this.$store
              .dispatch("register", data)
              .then(() => this.$router.push("/"))
              .catch();
          }
        }
      };
      </script>