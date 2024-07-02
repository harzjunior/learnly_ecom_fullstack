<template>
    <div class="container mx-auto mt-10">
      <h1 class="text-3xl font-bold">Add Product</h1>
      <form @submit.prevent="addProduct" class="mt-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="name" class="block text-lg font-semibold">Name:</label>
            <input type="text" v-model="name" id="name" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label for="description" class="block text-lg font-semibold">Description:</label>
            <input type="text" v-model="description" id="description" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label for="price" class="block text-lg font-semibold">Price:</label>
            <input type="number" v-model="price" id="price" step="0.01" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label for="imageURL" class="block text-lg font-semibold">Image URL:</label>
            <input type="text" v-model="imageURL" id="imageURL" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
          </div>
        </div>
        <button type="submit" class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        description: '',
        price: '',
        imageURL: ''
      };
    },
    methods: {
      addProduct() {
        const newProduct = {
          name: this.name,
          description: this.description,
          price: this.price,
          imageURL: this.imageURL
        };
        // Replace with your API endpoint
        fetch('http://localhost:5050/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProduct)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Product added:', data);
            this.name = '';
            this.description = '';
            this.price = '';
            this.imageURL = '';
          })
          .catch(error => console.error('Error adding product:', error));
      }
    }
  };
  </script>
  