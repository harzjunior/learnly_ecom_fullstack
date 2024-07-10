<!-- Home.vue -->
<template>
  <div class="container mx-auto">
    <!-- Hero Section -->
    <div class="mt-1 bg-cover bg-center bg-no-repeat h-96"
      style="background-image: url('https://assets-global.website-files.com/5f625f22a6be0f573da59f72/5f7cd0a92719b56db8a4099c_Wide_format1.jpg');">
      <div class="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">Welcome to Our Learnly Store</h1>
        <p class="mt-4 text-xl text-white animate-slide-up">Explore our amazing products!</p>
        <router-link to="/products" class="mt-8">
          <button
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none animate-bounce">
            Shop Now
          </button>
        </router-link>
      </div>
    </div>

    <!-- Featured Products Section -->
    <FeaturedProducts :products="featuredProducts" />

    <!-- Testimonials Section -->
    <Testimonials :testimonials="testimonials" />

    <!-- Newsletter Signup Section -->
    <div class="mt-10 bg-cover bg-center bg-no-repeat py-10 text-center"
      style="background-image: url('https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg');">
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

    <!-- Contact Information Section -->
    <div class="mt-10 bg-gray-100 py-10 text-center text-gray-800">
      <h2 class="text-3xl font-bold">Contact Us</h2>
      <p class="mt-4 text-lg">Have any questions? Reach out to us!</p>
      <div class="mt-6">
        <p class="text-gray-700">Email: info@learnly_ecom.com</p>
        <p class="text-gray-700">Phone: (+234) 1230-7060-160</p>
        <p class="text-gray-700">Address: 1234 Street Name, F.C.T, Abuja City</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue';
import FeaturedProducts from './FeaturedProducts.vue';
import Testimonials from './Testimonials.vue';

export default {
  components: {
    Footer,
    FeaturedProducts,
    Testimonials,

  },
  data() {
    return {
      featuredProducts: [
        { name: 'Damascus Kitten', price: 99000.99, image: 'https://i.etsystatic.com/42678828/r/il/b5bfb4/4878450308/il_600x600.4878450308_lfmv.jpg' },
        { name: 'Grandpa Street Style', price: 129000.99, image: 'https://img.freepik.com/premium-photo/image-cat-wearing-hoodie-generative-ai_97167-1329.jpg' },
        { name: 'Neo Era Designers', price: 79000.99, image: 'https://img.freepik.com/premium-photo/cute-cartoon-cat-character-generative-ai_570929-3968.jpg' },
        // Add more products as needed
      ],
      testimonials: [
        { text: 'Fast delivery and top-notch quality. Highly recommended!', author: 'Tunde Ola' },
        { text: 'Amazing store! Great products and excellent customer service.', author: 'Akinde Lolade' },
        { text: 'Fast delivery and top-notch quality. Highly recommended!', author: 'Acolyte Sasha' },
        // Add more testimonials as needed
      ]
    };
  }
};
</script>
