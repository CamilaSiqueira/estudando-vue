import Vue from 'vue'

const comp = {
  data: function () {
    return {
      titulo: 'Curso de VueJs',
      cont: 0
    }
  },
  methods: {
    incrementar: function () {
      this.cont++
    }
  },
  template: `
    <div>
      <h1> Vue Components </h1>
      <button @click="incrementar"> Clicado {{cont}} vezes </button>
    </div>
  `
}

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components:{

  }
})
