<script setup>
import formularioproducto from '../../componente/formularioproducto.vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import productolacteows from '../../ws/productolacteows.js';
const router = useRouter()
const route = useRoute()

console.log(route.params.id);

let producto = ref(productolacteows.vacio());

productolacteows.get(route.params.id)
    .then((resultado) => producto.value=resultado.data)
    .catch((error)=>console.log(error));


let funciones = {
    accion: function () {
        // aqui deberia insertar el producto
        productolacteows.actualizar(producto.value)
            .then((resultado) => {
                router.push('/'); // redireccion al inicio
            }
            )
            .catch((resultado) => { alert("error") });
    }
}

</script>
<template>
    <div style="col-12">
        <formularioproducto :producto="producto" :funciones="funciones" />
    </div>
</template>
<style scoped></style>