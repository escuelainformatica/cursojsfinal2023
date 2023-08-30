<script setup>
    import galeriaproducto from '../../componente/galeriaproducto.vue';
    import { ref, onMounted } from 'vue';
    import productolacteows from '../../ws/productolacteows.js';
    import { RouterLink, RouterView } from 'vue-router'
    // ref, reactivo
    let listado=ref([]);
    productolacteows.listar()
        .then((resultado)=>listado.value=resultado.data)
        .catch((error)=>console.log(error));


</script>
<template>
    <RouterLink to="/producto/insertar" class="btn btn-primary">Insertar</RouterLink> &nbsp;&nbsp;
    <a href="/producto/insertar" class="btn btn-primary">Insertar</a><br><br>
    <galeriaproducto :listado="listado" />
    

</template>
<style>
</style>