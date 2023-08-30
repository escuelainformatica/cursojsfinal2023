<script setup>
 const props = defineProps(['producto']);
 console.log(props.producto);
</script>
<template>
    <div class="col-2">
        <div class="card">
            <a :href="'/producto/actualizar/'+props.producto.id"><img :src="props.producto.imagenlacteo.url" class="card-img-top" ></a>
            <div class="card-body">
                <p class="card-text">{{ props.producto.nombre }}</p>
                <p class="card-text">{{ props.producto.cantidad }}</p>
                <p class="card-text">{{ props.producto.categorialacteo.nombre }}</p>
            </div>
        </div>
        <br>
    </div>
</template>
<style scoped></style>