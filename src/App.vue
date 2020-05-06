<template>
  <div id="app">
    <Header />
    <p/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
