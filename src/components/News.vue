<template>
    <div class="col-md-6 tech-text">
    <div class="technology">
        <h2 class="tittle"><i class="glyphicon glyphicon-star"> </i>Terbaru</h2>
    </div>

    <div class="editor-pics" v-for="(articel) in articles" :key="articel.id">
        <div class="col-md-5 item-pic">
            <img v-bind:src="articel.news_image_new" class="img-responsive" alt="">
        </div>
        <div class="col-md-7 item-details">
            <span>suporter damai</span>
            <h5 class="inner two"><a href="#">{{articel.news_title}}</a></h5>
            <div class="td-post-date two">{{articel.news_datepub}}</div>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
</template>
<script>
import newsApi from "@/service/api/News";
export default {
    name: 'News',
    data() {
        return {
            articles : []
        }
    },
    created(){
        NewsApi.newNews().then((result) => {
			this.articles = result.data.result;
			console.log(result.data.result);
		}).catch((err) => {
			console.log(err);
		}).finally(()=>{
			this.loading = false
		});
    }
}
</script>

