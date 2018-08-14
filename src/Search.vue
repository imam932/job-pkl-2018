<script>
import  NewsApi  from "@/service/api/News";
import ButtonShare from "@/components/ShareButton.vue";
import Rating from "@/components/Rating.vue";

export default {
    name: 'Search',
	template: `
		<div class="main-content2 main-content3">
		<div class="container">
			<div class="mag-inner">
				<div class="col-md-8 mag-innert-left cont-kategori">
					<div class="technology">
						<h2 class="tittle"><i class="glyphicon glyphicon-tags"> </i>Search</h2>
						
						<div v-for="(news) in data">
						<div class="col-md-12 kategori" v-if="news.pagemap.article">
							<div class="col-md-3 tech-img">
									<progressive-img v-if="news.pagemap.cse_thumbnail.length" class="img-responsive" :src="news.pagemap.cse_thumbnail[0].src" placeholder="http://cancer.pybossa.com/static/img/placeholder.project.png" fallback="http://cancer.pybossa.com/static/img/placeholder.project.png" :blur="30" />
								</div>
								<div class="col-md-9 tech-text">
									<div class="editor-pics">
										<div class="col-md-12 item-details">
											<span><a :href="news.link">{{ news.pagemap.webpage[0].name }}</a></span>
											<h5 class="inner two">{{ news.pagemap.webpage[0].description}}</h5>
											<div class="td-post-date two">
												<span>
													<b class="glyphicon glyphicon-calendar"></b>{{news.pagemap.metatags[0].author}} | 
													<b class="glyphicon glyphicon-eye-open"></b>{{ news.pagemap.article[0].datepublished }}
												</span>
											</div>
										</div>
										<div class="clearfix"></div>
									</div>
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
	`,
    components:{
        'app-rating' : Rating,
        'app-share' : ButtonShare
    },
    data() {
        return {
            data:[],
        }
    },
    async created(){
		var params = this.$route.params.parameter;
		// console.log(params);
        NewsApi.search(params).then((result) => {
            this.data = result;
            // console.log(this.data);
		}).catch((err) => {
			console.log(err);
		}).finally(()=>{
			this.loading = false
        });
	},
}
</script>


