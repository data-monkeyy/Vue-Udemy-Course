const app = Vue.createApp({
    data() {
      return {
        userInput: '',
        enterInput: ''
      };
    },
    methods: {
      showAlert() {
        alert('amongus');
      },
      recordInput(event) {
        this.userInput = event.target.value;
      },
      recordEnterInput(event) {
        if (event.key === 'Enter') {
          this.enterInput = event.target.value;
        }
      }
    }
  });
  
  app.mount('#app');
  