export default {
  name: 'Header',
  data() {
    return {
      currentActive: 'home',
    };
  },
  methods: {
    getActive(name) {
      return name === this.currentActive ? 'active' : '';
    },
    onClickHome() {
      this.currentActive = 'home';
    },
    onClickContact() {
      this.currentActive = 'contact';
    },
    onClickAbout() {
      this.currentActive = 'about';
    },
  },
};
