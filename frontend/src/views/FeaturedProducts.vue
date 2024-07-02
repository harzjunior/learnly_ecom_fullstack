<!-- FeaturedProducts.vue -->
<template>
    <div class="text-center">
        <h2 class="text-3xl font-bold">Featured Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div v-for="(product, index) in products" :key="index" class="rounded-lg shadow-md overflow-hidden">
                <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-bold">{{ product.name }}</h3>
                    <p class="text-gray-700 mt-2 text-green-500">{{ `₦${product.price}` }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    }
};
</script>
