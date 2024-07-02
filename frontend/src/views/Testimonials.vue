<!-- Testimonials.vue -->
<template>
    <div class="bg-gray-100 py-10">
      <h2 class="text-3xl text-gray-800 font-bold text-center">What Our Customers Say</h2>
      <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-6 md:space-y-0 md:space-x-6">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="max-w-sm mx-4 mb-6 md:mb-0">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-700 italic">{{ testimonial.text }}</p>
            <p class="mt-4 text-green-500 font-bold">- {{ testimonial.author }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      testimonials: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  