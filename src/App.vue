<template>
  <div id="app">
    <Header @onClickHeader="handleOnClickHeader" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
import cons from './constant';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  methods: {
    handleOnClickHeader(data) {
      this.$store.commit(cons.navigatePage, data);
    },
  },
  components: {
    Header,
    Footer,
  },
};
</script>
