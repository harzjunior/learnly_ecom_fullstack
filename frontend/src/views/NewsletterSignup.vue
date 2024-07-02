<!-- NewsletterSignup.vue -->
<template>
  <div class="mt-10 bg-cover bg-center bg-no-repeat py-10 text-center"
    style="background-image: url('/path/to/newsletter-background.jpg');">
    <div class="bg-black bg-opacity-50 py-10">
      <h2 class="text-3xl font-bold text-white">Stay Updated</h2>
      <p class="mt-4 text-lg text-gray-200">Sign up for our newsletter to get the latest news and offers.</p>
      <div class="mt-6 flex justify-center">
        <input type="email" placeholder="Enter your email"
          class="px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:border-blue-500">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r focus:outline-none">Subscribe</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
