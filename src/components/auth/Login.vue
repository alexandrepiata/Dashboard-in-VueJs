      
      <template>
       <div class="container" style="width:50%;">
           <form class="text-center border border-light p-5" @submit.prevent="login">  
            <p class="h4 mb-4">Poket admin</p>
            <!-- Name -->
            <input v-model="email" type="email" class="form-control mb-4" placeholder="Email">

            <!-- Email -->
            <input required v-model="password" type="password" class="form-control mb-4" placeholder="senha">

            <!-- Sign in button -->
            <button class="btn btn-info btn-block" type="submit">Login</button>
            <p>
              <button @click="$router.push('/register')" class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" >Cadastre-se</button>
            </p>
        </form>
       </div>
      </template>
      <script>
      export default {
        data() {
          return {
            email: "",
            password: ""
          };
        },
        methods: {
          login: function() {
            let email = this.email;
            let password = this.password;
            this.$store
              .dispatch("login", { email, password })
              .then(() => this.$router.push("/dashboard"))
              .catch();
          }
        }
      };
      </script>