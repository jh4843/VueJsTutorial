const app = {
    data() {
      return {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
            ]
      }
    }
  }

Vue.createApp(app).mount("#app");