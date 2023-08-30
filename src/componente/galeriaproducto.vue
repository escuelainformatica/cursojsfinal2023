<script setup>
    import tarjetaproducto from './tarjetaproducto.vue';
    const props = defineProps(['listado']);
</script>
<template>
    <div class="row">
        <template v-for="producto in props.listado">
            <tarjetaproducto :producto="producto" />
        </template> 
    </div>
</template>
<style scoped>
</style>