<script setup>
    import imagenlacteows from '../ws/imagenlacteows';
    import categorialacteows from '../ws/categorialacteows';
    import { ref, onMounted,computed } from 'vue';
    const props = defineProps(['producto','funciones']);
    


    let imagenes=ref([]);
    let categorias=ref([]);
    let imagenAMostrar=ref('');


    function cambioImagen() {        
        const found = imagenes.value.find((imagen) => imagen.id==props.producto.idimagen);
        //console.log(found);
        imagenAMostrar.value=found.url;
    }

    imagenlacteows.listar()
        .then((resultado)=>imagenes.value=resultado.data)
        .catch((error)=>console.log(error));
    categorialacteows.listar()
        .then((resultado)=>categorias.value=resultado.data)
        .catch((error)=>console.log(error));
    
</script>
<template>
    <form>
        <div class="mb-3">
            <label class="form-label" for="nombre">nombre</label>
            <input class="form-control" id="nombre" type="text" placeholder="nombre" data-sb-validations="" v-model="props.producto.nombre" />
        </div>
        <div class="mb-3">
            <label class="form-label" for="cantidad">cantidad</label>
            <input class="form-control" id="cantidad" type="text" placeholder="cantidad" data-sb-validations="" v-model="props.producto.cantidad" />
        </div>
        <div class="mb-3">
            <label class="form-label" for="imagen">imagen</label>
            <select class="form-select" id="imagen" aria-label="imagen" v-model="props.producto.idimagen" v-on:change="cambioImagen" >
                <option v-for="imagen in imagenes" :value="imagen.id">{{ imagen.nombre }}</option>
            </select>
            <img :src="imagenAMostrar"/>
        </div>
        <div class="mb-3">
            <label class="form-label" for="categoria">categoria</label>
            <select class="form-select" id="categoria" aria-label="categoria" v-model="props.producto.idcategoria">
                <option v-for="categoria in categorias" :value="categoria.id">{{ categoria.nombre }}</option>
             
            </select>
        </div>
        <div class="d-grid">
            <button class="btn btn-primary btn-lg" type="button" v-on:click="props.funciones.accion" >Submit</button>
        </div>        
    </form>
</template>
<style scoped>
</style>