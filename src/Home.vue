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
        <app-categori></app-categori>
    </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
export default {
    components:{
        'app-banner': Banner,
    }   

}
</script>
