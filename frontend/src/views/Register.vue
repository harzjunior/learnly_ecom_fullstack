<template>
    <div class="container mx-auto mt-10">
      <h1 class="text-3xl font-bold">Register</h1>
      <form @submit.prevent="register" class="mt-6">
        <div class="grid grid-cols-1 gap-4">
          <div>
            <label for="username" class="block text-lg font-semibold">Username:</label>
            <input type="text" v-model="username" id="username" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label for="email" class="block text-lg font-semibold">Email:</label>
            <input type="email" v-model="email" id="email" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label for="password" class="block text-lg font-semibold">Password:</label>
            <input type="password" v-model="password" id="password" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
          </div>
        </div>
        <button type="submit" class="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        const newUser = {
          username: this.username,
          email: this.email,
          password: this.password
        };
        // Replace with your API endpoint
        fetch('http://localhost:5050/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(response => response.json())
          .then(data => {
            console.log('User registered:', data);
            this.username = '';
            this.email = '';
            this.password = '';
            this.$router.push('/login');
          })
          .catch(error => console.error('Error registering user:', error));
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles if necessary */
  </style>
  