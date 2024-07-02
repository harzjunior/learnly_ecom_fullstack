<template>
  <div id="app" class="text-end max-w-screen-xl mx-auto">
    <nav class="flex items-center justify-between bg-slate-200 text-black px-10">
      <div>
        <h1 class="text-2xl">Logo</h1>
      </div>
      <div class="flex items-center text-lg py-4 gap-4 cursor-pointer">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/add-product">Add Product</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>
