<template>
  <div class="header">
    <a href="home" class="logo">TVC12</a>
    <div class="header-right">
      <a :class="[getActive('home')]" @click="onClickHome">Home</a>
      <a :class="[getActive('contact')]" @click="onClickContact">Contact</a>
      <a :class="[getActive('about')]" @click="onClickAbout">About</a>
    </div>
  </div>
</template>

<script src = './index.js'/>

<style src = './index.css'/>
