<template>
  <div 
  class="node"
  @click="Task(tool)">
    <span>{{`N-${id}`}}</span>
    <span>{{`D= ${Grafo[id].min_dist}`}}</span>
  </div>
  <div class = "i-node"/> 
</template>

<script>
import {mapMutations, mapState} from "vuex"
export default {
  name: "Nodos",
  created() {},
  data() {
    return {
      x : 0
    };
  },
  props: [
    "id",
    "tool"
  ],
  methods: {
    ...mapMutations([
      "Definir_origen",
      "Añadir_edge"
    ]),
    Task(tool){
      if(tool == "S-O"){
        this.Definir_origen(this.id)
        return
      }
      if (node_a == undefined & node_b == undefined){
        node_a = this.id
        return
      }
      if (node_a != undefined & node_b == undefined){
        node_b = this.id
      }

      
    }
  },
  computed:{
    ...mapState([
      "Grafo",
      "node_a",
      "node_b"
    ])
  }
};
</script>

<style lang="scss" scoped>
.node{
  display:flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(43, 155, 155);
  width: calc(40px + 2vw);
  height : calc(40px + 2vw);
  border-radius: 50%;
  margin: 20px 120px;
}
.i-node{
  display:flex;
  width: calc(40px + 2vw);
  height : calc(40px + 2vw);
  border-radius: 50%;
  margin: 45px 120px;
}
</style>