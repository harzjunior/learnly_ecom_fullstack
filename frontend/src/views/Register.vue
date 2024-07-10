<template>
  <div class="flex flex-col items-center justify-between min-h-screen bg-gray-200 pt-40 bg-cover bg-center bg-no-repeat"
    style="background-image: url('https://wallpapercave.com/wp/wp7969113.jpg')">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mb-6">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">Register</h1>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label for="username" class="block text-lg font-semibold text-gray-700 mb-2 text-left">Username:</label>
          <input type="text" v-model="username" id="username"
            class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-lg font-semibold text-gray-700 mb-2 text-left">Email:</label>
          <input type="email" v-model="email" id="email"
            class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-lg font-semibold text-gray-700 mb-2 text-left">Password:</label>
          <input type="password" v-model="password" id="password"
            class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <button type="submit"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-4">
          Register
        </button>
        <p v-if="errorMessage" class="mt-4 text-red-500 text-center">{{ errorMessage }}</p>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue';

export default {
  components: {
    Footer
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    register() {
      if (!this.username || !this.email || !this.password) {
        this.errorMessage = 'Please fill in all fields';
        return;
      }

      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password
      };

      // fetch('http://localhost:5050/api/register', {
      fetch('https://learnly-ecom-fullstack.vercel.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            this.errorMessage = data.message;
          } else {
            console.log('User registered:', data);
            this.username = '';
            this.email = '';
            this.password = '';
            this.errorMessage = '';
            this.$router.push('/login');
          }
        })
        .catch(error => {
          console.error('Error registering user:', error);
          this.errorMessage = 'An error occurred. Please try again.';
        });
    }
  }
};
</script>
