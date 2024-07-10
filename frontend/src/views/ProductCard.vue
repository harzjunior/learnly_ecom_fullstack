<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow product-card">
        <img :src="product.imageURL" alt="Product Image" class="w-full h-64 object-cover">
        <div class="p-4">
            <!-- Conditional rendering for Listed by -->
            <p v-if="username" class="text-gray-500 my-2 text-start">Listed by: {{ username }}</p>
            <h2 class="text-xl text-center font-bold text-gray-800">{{ product.name }}</h2>
            <p class="text-gray-700 text-center mt-2">{{ product.description }}</p>
            <p class="text-green-500 text-center font-semibold mt-2">₦ {{ product.price }}</p>
            <div class="mt-4 flex justify-between">
                <!-- Conditional rendering for Edit and Delete buttons -->
                <button v-if="username && !product.editMode" @click="toggleEditMode"
                    class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded focus:outline-none mr-2">Edit</button>
                <button v-if="username && product.editMode" @click="saveProduct"
                    class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none mr-2">Save</button>
                <button v-if="username && product.editMode" @click="cancelEdit"
                    class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded focus:outline-none">Cancel</button>
                <button v-if="username" @click="deleteProduct"
                    class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none">Delete</button>
            </div>
            <div v-if="product.editMode" class="mt-4">
                <label for="editName" class="block text-lg font-semibold">Name:</label>
                <input type="text" v-model="product.updatedName" id="editName"
                    class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <label for="editDescription" class="block text-lg font-semibold mt-4">Description:</label>
                <input type="text" v-model="product.updatedDescription" id="editDescription"
                    class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <label for="editPrice" class="block text-lg font-semibold mt-4">Price:</label>
                <input type="number" v-model="product.updatedPrice" id="editPrice"
                    class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <label for="editImageURL" class="block text-lg font-semibold mt-4">Image URL:</label>
                <input type="text" v-model="product.updatedImageURL" id="editImageURL"
                    class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <p v-if="product.errorMessage" class="mt-4 text-red-500 text-center">{{ product.errorMessage }}</p>
            </div>
        </div>
        <button v-if="!product.editMode" @click="buyProduct"
            class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none mt-4 w-full">
            Sell
        </button>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        },
        username: {
            type: String,
            default: null // Default to null to handle cases where username is not provided
        }
    },
    methods: {
        toggleEditMode() {
            this.$emit('toggle-edit-mode');
        },
        cancelEdit() {
            this.$emit('cancel-edit');
        },
        saveProduct() {
            this.$emit('save-product');
        },
        deleteProduct() {
            this.$emit('delete-product');
        },
        buyProduct() {
            this.$emit('buy-product');
        }
    }
};
</script>

<style scoped>
.product-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
