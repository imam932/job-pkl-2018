<template>
    <div>
        <app-banner></app-banner>
        <!-- content terbaru dan terpopuler -->
	<div class="main-content">
		<div class="container">
			<div class="mag-inner">
				<div class="col-md-9 mag-innert-left">
                    <app-newsNew></app-newsNew>
                    <app-newsPopuler></app-newsPopuler>
				</div>
				<div class="col-md-3 mag-inner-right">
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
	<!-- end content terbaru dan terpopuler -->
        <app-cPolitik></app-cPolitik>
        <app-cPendidikan></app-cPendidikan>
        <app-cRiset></app-cRiset>
        <app-cEkonomi></app-cEkonomi>
    </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import Terbaru from "@/components/NewNews.vue";
import Populer from "@/components/PopulerNews.vue";
import Cpolitik from "@/components/Cpolitik.vue";
import Cpendidikan from "@/components/Cpendidikan.vue";
import Criset from "@/components/Criset.vue";
import Cekonomi from "@/components/Cekonomi.vue";
export default {
    components:{
        'app-banner': Banner,
        'app-newsNew': Terbaru,
        'app-newsPopuler': Populer,
        'app-cPolitik': Cpolitik,
        'app-cPendidikan': Cpendidikan,
        'app-cRiset': Criset,
        'app-cEkonomi': Cekonomi
    }   
}
</script>
