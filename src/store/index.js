import { createStore } from 'vuex'

export default createStore({
  state: {
    node_a : undefined,
    node_b : undefined,
    nodos_creados: 0,
    max_nodos: 30,
    visited :[],
    Grafo: []
    
  },
  mutations: {
    Insertar_nodo (state) {
      if (state.nodos_creados >= state.max_nodos){
          console.log ("Se superó el maximo de nodos permitidos")
          return
      }
      state.Grafo[`${state.nodos_creados}`] = {
          id: state.nodos_creados,
          min_dist: "∞",
          visited: false,
          edges: [],
          origin: false
      }
      state.nodos_creados ++
  },
    Eliminar_nodo (state) {
    if (state.nodos_creados <= 0){
        console.log ("No hay mas nodos para eliminar")
        return
    }
    state.Grafo.pop()
    state.nodos_creados --
  },
  Añadir_edge (a,b,peso,state) {
      if(a == b){
          console.log("No se puede unir un nodo a si mismo")
          return
      }
      if(!state.Grafo.includes(a)||!state.Grafo.includes(b)){
          console.log("Uno de los nodos que se quiere conectar no existe")
          return
      }
      var edge = {peso : peso, route : {in : a,out : b} }
      state.Grafo[`${a}`].edges.push(edge)
      edge = {peso : peso , route : {in : b,out : a} }
      state.Grafo[`${b}`].edges.push(edge)
  },
  Analizar_ruta (nodo_actual,state){
      state.visited = []
      var next = []
      if(state.visited.length == state.nodos_creados){
          return
      }
      if(!(state.visited.includes(nodo_actual))){
          for (var ruta of (state.Grafo[`${nodo_actual}`].edges)){
              if (state.Grafo[`${ruta.route.out}`].visited){continue}
              var dist = state.Grafo[`${nodo_actual}`].min_dist + ruta.peso
              if((state.Grafo[`${ruta.route.out}`].min_dist == "∞") || (state.Grafo[`${ruta.route.out}`].min_dist > dist) ){
                  state.Grafo[`${ruta.route.out}`].min_dist = dist
              }
              next.push(ruta.route.out)
          }
          state.Grafo[`${nodo_actual}`].visited = true
          state.visited.push(nodo_actual)
          for( let i of next){
              this.$store.commit("Analizar_ruta",i)
          }
      }    
  },
  Dijkstra (state) {
    var origin
    for(let nodo in state.Grafo){
      if (nodo.origin){
        origin = nodo.id
      }
    }
    //////////////////////////////////////////////////////////////////////////////////
    //ENCONTRAR DISTANCIA MINIMA
    this.$store.commit("Analizar_ruta",origin)
  },
  Definir_origen(state,select_node){
    for(var nodo of state.Grafo){
      console.log(nodo)
      if (nodo.origin){
          state.Grafo[`${nodo.id}`].min_dist = "∞"
          state.Grafo[`${nodo.id}`].visited = false
          state.Grafo[`${nodo.id}`].origin = false
      }
    }
    state.Grafo[`${select_node}`].min_dist = 0
    state.Grafo[`${select_node}`].visited = true
    state.Grafo[`${select_node}`].origin = true
    console.log(`se ha definido ${select_node} como el origen`)
  }
  },
  actions: {
  },
  modules: {
  }
})
