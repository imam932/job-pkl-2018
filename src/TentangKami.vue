<template>
	<div class="section-contact">
			<div class="container">

			<app-static></app-static>
			<app-maps></app-maps>

			</div>
	</div>
</template>
<script>
import KontakMaps from "@/components/KontakMaps.vue";
import KontakStatis from "@/components/KontakStatis.vue";
export default {
    components:{
        'app-static': KontakStatis,
        'app-maps': KontakMaps,
    }   
}
</script>