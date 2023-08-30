<script setup>
import formularioproducto from '../../componente/formularioproducto.vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import productolacteows from '../../ws/productolacteows.js';
const router = useRouter()
const route = useRoute()


let producto = ref(productolacteows.vacio());

let funciones = {
    accion: function () {
        // aqui deberia insertar el producto
        productolacteows.insertar(producto.value)
            .then((resultado) => {
                router.push('/'); // redireccione al inicio
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