<template>
    <div class="flex flex-col items-center justify-between min-h-screen bg-gray-200 mt-1 mb-10 pt-10">
        <div class="container mx-auto text-center">
            <h1 class="text-gray-700">Market</h1>
            <Toaster />
            <Button @click="() => {
                toast({
                    title: 'Scheduled: Catch up',
                    description: 'Friday, February 10, 2023 at 5:57 PM',
                });
            }">
                Add to calendar
            </Button>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast/use-toast'
import { Toaster } from '@/components/ui/toast'
import Footer from './Footer.vue';

const { toast } = useToast()


export default defineComponent({
    name: 'Market',

    components: {
        Footer
    }
});
</script>
