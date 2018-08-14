<script>
import  NewsApi  from "@/service/api/News";
import ButtonShare from "@/components/ShareButton.vue";
import Rating from "@/components/Rating.vue";
import InfiniteLoading from "vue-infinite-loading";
import Axios from 'axios';

export default {
    name: 'Kategori',
	template: `
		<div class="main-content2 main-content3">
		<div class="container">
			<div class="mag-inner">
				<div class="col-md-8 mag-innert-left cont-kategori">
					<div class="technology">
						<h2 class="tittle"><i class="glyphicon glyphicon-tags"> </i>{{this.$route.params.kategori}}</h2>
						
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
												<b class="glyphicon glyphicon-eye-open"></b>{{articel.news_view}}
											</span>
										</div>
									</div>
									<div class="clearfix"></div>
								</div>
							</div>
						</div>

						<infinite-loading @infinite="created">
							<span slot="no-more">
							Konten Berakhir
							</span>
						</infinite-loading>

						<div class="clearfix"></div>
					</div>
				</div>

				<div class="col-md-4 mag-inner-right">
                    <div>
                    <h4 class="side"><i class="glyphicon glyphicon-share"> </i>TEMUKAN KAMI</h4>
				        <div class="edit-pics">
				            
				            <ul class="social-network social-circle">
				                <li>
				                    <a href="#" class="icoRss" title="Rss" target="_blank"><i class="fa fa-rss"></i></a>
				                </li>
				                <li>
				                    <a href="https://id-id.facebook.com/MalangTimes/" class="icoFacebook" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
				                </li>
				                <li>
				                    <a href="https://twitter.com/malangtimes" class="icoTwitter" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
				                </li>
				                <li>
				                    <a href="https://plus.google.com/109285582542046078077" class="icoGoogle" title="Google +" target="_blank"><i class="fa fa-google-plus"></i></a>
				                </li>
				                <li>
				                    <a href="https://www.linkedin.com/company/jatim-times-network" class="icoLinkedin" title="Linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
				                </li>
					        </ul>
					        </div>
					    </div>
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
        'app-share' : ButtonShare,
		InfiniteLoading,
    },
    data() {
        return {
            articles:[],
        }
    },
	methods : {
		async created($state) {

			var params;

		if(this.$route.params.kategori === 'Politik'){
			params = 2;
		}else if (this.$route.params.kategori === 'Peristiwa') {
			params = 1;
		}else if (this.$route.params.kategori === 'Ekonomi') {
			params = 3;
		}else if (this.$route.params.kategori === 'Pendidikan') {
			params = 9;
		}else if (this.$route.params.kategori === 'Riset') {
			params = 7;
		}else if (this.$route.params.kategori === 'Olahraga') {
			params = 6;
		}else if (this.$route.params.kategori === 'Tekno') {
			params = 4;
		}else if (this.$route.params.kategori === 'Wisata') {
			params = 8;
		}else if (this.$route.params.kategori === 'Kuliner') {
			params = 10;
		}else if (this.$route.params.kategori === 'Sehat') {
			params = 11;
		}else if (this.$route.params.kategori === 'Gaya') {
			params = 12;
		}
		var pages = this.articles.length / 20 + 1;

			Axios.get('news/categori/'+pages+'/'+params,
			).then((result) => {
				if(result.data.result.length){
            		this.articles = this.articles.concat(result.data.result);
					$state.loaded();
					if(this.articles.length / 20 === 10){
						$state.complete();
					}
				}else{
					$state.complete();
				}
			});
			console.log(params);
		},

	},
}
</script>


