<template>
  <div id="app" class="text-end max-w-screen-xl mx-auto">
    <nav class="flex items-center justify-between bg-slate-200 text-black px-10">
      <div>
        <h1>
          <router-link to="/">
            <img src="./assets/logo.png" alt="logo" class="w-auto h-14 object-cover py-1">
          </router-link>
        </h1>
      </div>
      <div class="flex items-center text-lg py-4 gap-4 cursor-pointer">
        <router-link to="/">Home</router-link>
        <router-link to="/market">Market</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/add-product" v-if="username">Add Product</router-link>
        <router-link to="/login" v-if="!username">Login</router-link>
        <router-link to="/register" v-if="!username">Register</router-link>
        <button v-if="username" @click="logout" class="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </nav>
    <router-view :username="username" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem('username') || null // Initialize with the username from localStorage
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.username = null;
      this.$router.push('/');
    }
  }
};
</script>
