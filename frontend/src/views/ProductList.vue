<template>
  <div class="flex flex-col items-center justify-between min-h-screen bg-gray-200 mt-1 mb-10 pt-10">
    <div class="w-full max-w-5xl">

      <!-- Search input field -->
      <div class="md:flex flex-col md:flex-row items-center justify-between mb-10">
        <h1 class="text-4xl text-center font-bold text-gray-800 px-20 mb-5 md:mb-0">Product List</h1>
        <input v-model="searchTerm" type="text" placeholder="Search products..."
          class="md:w-1/2 w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>

      <h2 class="text-2xl text-center font-bold mb-10 text-gray-600">Welcome {{ username }}</h2>
      <div v-if="loading" class="text-center">
        <p>Loading products...</p>
      </div>
      <div v-else>
        <div v-if="products.length === 0" class="text-center text-gray-500">
          <p>No products available.</p>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="product in filteredProducts" :key="product._id" :username="username" :product="product"
            @toggle-edit-mode="toggleEditMode(product)" @cancel-edit="cancelEdit(product)"
            @save-product="saveProduct(product)" @delete-product="deleteProduct(product._id)"
            @buy-product="buyProduct(product._id)" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import Footer from './Footer.vue';

export default {
  components: {
    ProductCard,
    Footer
  },
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      products: [],
      loading: true,
      searchTerm: ''
    };
  },
  created() {
    this.fetchProducts();
  },
  computed: {
    filteredProducts() {
      if (!this.searchTerm.trim()) {
        return this.products;
      }
      const searchTermLower = this.searchTerm.trim().toLowerCase();
      return this.products.filter(product =>
        product.name.toLowerCase().includes(searchTermLower)
      );
    }
  },
  methods: {
    fetchProducts() {
      fetch('http://localhost:5050/api/products')
        .then(response => response.json())
        .then(data => {
          this.products = data.map(product => ({
            ...product,
            editMode: false,
            updatedName: product.name,
            updatedDescription: product.description,
            updatedPrice: product.price,
            updatedImageURL: product.imageURL,
            errorMessage: ''
          }));
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          this.loading = false;
        });
    },
    toggleEditMode(product) {
      product.editMode = !product.editMode;
    },
    cancelEdit(product) {
      product.editMode = false;
      product.updatedName = product.name;
      product.updatedDescription = product.description;
      product.updatedPrice = product.price;
      product.updatedImageURL = product.imageURL;
    },
    saveProduct(product) {
      if (!product.updatedName || !product.updatedDescription || !product.updatedPrice || !product.updatedImageURL) {
        product.errorMessage = 'Please fill in all fields';
        return;
      }

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
          product.editMode = false;
          this.fetchProducts();
        })
        .catch(error => {
          console.error('Error updating product:', error);
          product.errorMessage = 'An error occurred. Please try again.';
        });
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
          this.fetchProducts();
        })
        .catch(error => console.error('Error deleting product:', error));
    },
    buyProduct(productId) {
      console.log(`Buying product with ID ${productId}`);
      // Implement buy logic here
    }
  }
};
</script>
