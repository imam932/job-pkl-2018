<template>
    <div>
        <app-banner></app-banner>
        <!-- content terbaru dan terpopuler -->
	<div class="main-content">
		<div class="container">
			<div class="mag-inner">
				<div class="col-md-9 mag-innert-left">
                    <app-news title="Terbaru"></app-news>
                    <app-news title="Populer" ></app-news>
				</div>
				<div class="col-md-3 mag-inner-right">
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
	<!-- end content terbaru dan terpopuler -->
        <app-categori title="Peristiwa" id_kategori="1"></app-categori>
        <app-categori title="Politik" id_kategori="2"></app-categori>
        <app-categori title="Olahraga" id_kategori="6"></app-categori>
        <app-categori title="Teknologi" id_kategori="4"></app-categori>
    </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import News from "@/components/News.vue";
import Kategori from "@/components/Categori.vue";
export default {
    components:{
        'app-banner': Banner,
        'app-news': News,
        'app-categori': Kategori,
    }   
}
</script>
