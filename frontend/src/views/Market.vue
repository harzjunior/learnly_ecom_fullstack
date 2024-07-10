<template>
    <div class="flex flex-col items-center justify-between min-h-screen bg-gray-200 mt-1 mb-10 pt-10">
        <div class="container mx-auto text-center">
            <h1 class="text-gray-700">Market</h1>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from './Footer.vue';

export default {
    name: 'Market',

    components: {
        Footer
    },
};
</script>