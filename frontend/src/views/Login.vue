<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-3xl font-bold">Login</h1>
    <form @submit.prevent="login" class="mt-6">
      <div class="grid grid-cols-1 gap-4">
        <div>
          <label for="username" class="block text-lg font-semibold">Username:</label>
          <input type="text" v-model="loginUsername" id="username" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
        </div>
        <div>
          <label for="password" class="block text-lg font-semibold">Password:</label>
          <input type="password" v-model="loginPassword" id="password" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
        </div>
      </div>
      <button type="submit" class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">Login</button>
    </form>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        loginUsername: '',
        loginPassword: ''
      };
    },
    methods: {
      login() {
        const user = {
          loginUsername: this.loginUsername,
          loginPassword: this.loginPassword
        };
        fetch('http://localhost:5050/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(response => response.json())
          .then(data => {
            console.log('User logged in:', data);
            // Save the token in local storage or state management
            localStorage.setItem('token', data.token);
             // Redirect to another page after login
            this.$router.push('/products');
            this.loginUsername = '';
            this.loginPassword = '';
          })
          .catch(error => console.error('Error logging in:', error));
      }
    }
  };
  </script>
  