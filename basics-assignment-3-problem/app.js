const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    computed: {
      result() {
        if (this.counter < 37) {
          return 'Not there yet';
        } else if (this.counter > 37) {
          return 'Too much!';
        } else {
          return '';
        }
      },
    },
    methods: {
      addFive() {
        this.counter += 5;
        return 'sus'
      },
      addOne() {
        this.counter += 1;
      },
    },
    watch: {
      counter(newValue, oldValue) {
        if (newValue !== oldValue) {
          setTimeout(() => {
            this.counter = 0;
          }, 5000); // Reset counter to 0 after 5 seconds
        }
      },
    },
  });
  
  app.mount('#assignment');
  