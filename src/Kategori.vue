<template>
    <div class="main-content2 main-content3">
		<div class="container">
			<div class="mag-inner">
				<div class="col-md-8 mag-innert-left cont-kategori">
					<div class="technology">
						<h2 class="tittle"><i class="glyphicon glyphicon-tags"> </i>OLAHRAGA</h2>
						
						<div class="col-md-12 kategori" v-for="(articel) in articles" :key="articel.news_id">
							<div class="col-md-3 tech-img">
                                <progressive-img class="img-responsive" :src="articel.news_image_new" placeholder="http://cancer.pybossa.com/static/img/placeholder.project.png" fallback="http://cancer.pybossa.com/static/img/placeholder.project.png" :blur="30" />
							</div>
							<div class="col-md-9 tech-text">
								<div class="editor-pics">
									<div class="col-md-12 item-details">
										<h5 class="inner two"><router-link :to="{ name: 'Detail', params: { id: articel.news_id }}">{{articel.news_title}}</router-link></h5>
										<span>{{articel.news_description}}</span>
										<div class="td-post-date two">
											<span>
												<b class="glyphicon glyphicon-calendar"></b>{{articel.created}} | 
												<b class="glyphicon glyphicon-time"></b>{{articel.news_view}}
											</span>
										</div>
									</div>
									<div class="clearfix"></div>
								</div>
							</div>
						</div>

						<div class="clearfix"></div>
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
    name: 'Kategori',
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
        NewsApi.CategoriNewsAll(this.$route.params.kategori).then((result) => {
            this.articles = result.data.result;
            console.log(result.data.result);
            
		}).catch((err) => {
			console.log(err);
		}).finally(()=>{
			this.loading = false
        });
	},
}
</script>


