<template>
    <div class="rounded-lg shadow-md overflow-hidden">
        <img :src="imageUrl" :alt="altText" class="w-full h-64 object-cover">
        <div class="p-4">
            <h3 class="text-xl font-bold">{{ title }}</h3>
            <p class="text-gray-700 mt-2">{{ price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        }
    }
};
</script>