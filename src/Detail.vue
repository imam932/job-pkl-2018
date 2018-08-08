<template>
<div class="main-content3">
<div class="container">
    <div class="mag-inner">
        <div class="col-md-8 mag-innert-left">
            <div class="banner-bottom-left-grids">
                <div class="single-left-grid">
                    <h4>{{ this.articles.news_title}}</h4>

                    <div class="col-md-12 info-posting">
                        <div class="col-md-5">
                            <span>
                                <b class="glyphicon glyphicon-pencil"></b> {{ this.articles.news_writer}}
                            </span>
                        </div>
                        <div class="col-md-7">
                            <span>
                                <b class="glyphicon glyphicon-calendar"></b> {{ this.articles.created}} |
                                <b class="glyphicon glyphicon-time"></b> {{ this.articles.news_view}}
                            </span>
                        </div>
                    </div>

                    <figure class="figure">
                        <progressive-img class="img-responsive" :src="this.articles.news_image_new" placeholder="http://cancer.pybossa.com/static/img/placeholder.project.png" :blur="30" />
                        <figcaption class="figure-caption"> {{ this.articles.news_caption}}</figcaption>
                    </figure>
                    <p class="text" v-html="this.articles.news_content"></p><br>
                </div>
            </div>
        </div>

        <div class="col-md-4 mag-inner-right">
            <app-share></app-share>
            <app-rating title="Terbaru"></app-rating>
            <app-rating title="Populer"></app-rating>
        </div>

        <div class="clearfix"></div>
    </div>
</div>
</div>
</template>
<script>
import  NewsApi  from "@/service/api/News";
import ButtonShare from "@/components/ShareButton.vue";
import Rating from "@/components/Rating.vue";
export default {
    name: 'Detail',
    components:{
        'app-rating' : Rating,
        'app-share' : ButtonShare
    },
    data() {
        return {
            articles:[],
        }
    },
    async created(){
        NewsApi.detailNews(this.$route.params.id).then((result) => {
            this.articles = result.data.result;
            // console.log(result.data.result);
            
		}).catch((err) => {
			console.log(err);
		}).finally(()=>{
			this.loading = false
        });
	},
}
</script>

