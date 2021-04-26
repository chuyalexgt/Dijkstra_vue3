<template>
  <div>
    <div class = "node-counter">
     <h2> Nodos creados: {{nodos_creados}} </h2>
    </div>
    <div class = "node-container">
      <nodos v-for="N in Grafo" :key = "N.id" :id = "N.id" :tool = "selected_option"/>
    </div>
    <div class = "grafo-adm">
      <button @click = "Insertar_nodo">+</button>
      <button @click = "Eliminar_nodo">-</button>
      <br />
      <input type="radio" id="select_origin" value="S-O" v-model="selected_option" />
      <label for="select_origin">Seleccionar origen</label>
      <br />
      <input type="radio" id="create_edge" value="C-E" v-model="selected_option" />
      <label for="create_edge">Crear arista</label>
      <br />
    </div>

    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex"
import Nodos from "./Nodos.vue"
export default {
  name: "Grafo",
  created() {},
  data() {
    return {
      selected_option: '',
      dialog: false
    };
  },
  components: {
    Nodos
  },
  methods: {
    ...mapMutations([
      "Insertar_nodo",
      "Eliminar_nodo"
    ])
  },
  computed:{
    ...mapState([
      "nodos_creados",
      "Grafo"
    ])
  }
};
</script>

<style lang="scss" scoped>
.node-container{
  background-color: rgb(175, 173, 173);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
</style>