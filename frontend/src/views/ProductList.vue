<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-3xl font-bold mb-6">Product List</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product._id" class="rounded-lg shadow-md overflow-hidden">
        <img :src="product.imageURL" alt="Product Image" class="w-full h-64 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold">{{ product.name }}</h2>
          <p class="text-gray-700 mt-2">{{ product.description }}</p>
          <p class="text-gray-800 font-semibold mt-2">$ {{ product.price }}</p>
          <div class="mt-4 flex justify-end">
            <button v-if="!product.editMode" @click="toggleEditMode(product)"
              class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded focus:outline-none mr-2">Edit</button>
            <button v-if="product.editMode" @click="saveProduct(product)"
              class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none mr-2">Save</button>
            <button v-if="product.editMode" @click="cancelEdit(product)"
              class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded focus:outline-none">Cancel</button>
            <button @click="deleteProduct(product._id)"
              class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none">Delete</button>
          </div>
          <div v-if="product.editMode" class="mt-4">
            <label for="editName" class="block text-lg font-semibold">Name:</label>
            <input type="text" v-model="product.updatedName" id="editName"
              class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
            <label for="editDescription" class="block text-lg font-semibold mt-4">Description:</label>
            <input type="text" v-model="product.updatedDescription" id="editDescription"
              class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
            <label for="editPrice" class="block text-lg font-semibold mt-4">Price:</label>
            <input type="number" v-model="product.updatedPrice" id="editPrice"
              class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
            <label for="editImageURL" class="block text-lg font-semibold mt-4">Image URL:</label>
            <input type="text" v-model="product.updatedImageURL" id="editImageURL"
              class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch('http://localhost:5050/api/products')
        .then(response => response.json())
        .then(data => {
          // Set initial products data
          this.products = data.map(product => ({
            ...product,
            editMode: false,
            updatedName: product.name,
            updatedDescription: product.description,
            updatedPrice: product.price,
            updatedImageURL: product.imageURL
          }));
        })
        .catch(error => console.error('Error fetching products:', error));
    },
    toggleEditMode(product) {
      // Enable edit mode for the selected product
      product.editMode = true;
    },
    cancelEdit(product) {
      // Cancel edit mode for the selected product
      product.editMode = false;
      // Reset updated fields to original values
      product.updatedName = product.name;
      product.updatedDescription = product.description;
      product.updatedPrice = product.price;
      product.updatedImageURL = product.imageURL;
    },
    saveProduct(product) {
      const updatedProduct = {
        name: product.updatedName,
        description: product.updatedDescription,
        price: product.updatedPrice,
        imageURL: product.updatedImageURL
      };

      fetch(`http://localhost:5050/api/products/${product._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct)
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Failed to update product');
        })
        .then(data => {
          console.log('Product updated:', data);
          // Exit edit mode after successful update
          product.editMode = false;
          // Optionally, refresh the product list after update
          this.fetchProducts();
        })
        .catch(error => console.error('Error updating product:', error));
    },
    deleteProduct(productId) {
      fetch(`http://localhost:5050/api/products/${productId}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Failed to delete product');
        })
        .then(data => {
          console.log('Product deleted:', data);
          // Refresh the product list after deletion
          this.fetchProducts();
        })
        .catch(error => console.error('Error deleting product:', error));
    }
  }
};
</script>