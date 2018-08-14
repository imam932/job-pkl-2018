<script>
import  NewsApi  from "@/service/api/News";
import ButtonShare from "@/components/ShareButton.vue";
import Rating from "@/components/Rating.vue";
import InfiniteLoading from "vue-infinite-loading";
import Axios from 'axios';
export default {
    name: 'Detail',
    template:`<div class="main-content3">
    <div class="container">
        <div class="mag-inner">
            <div class="col-md-8 mag-innert-left">
                <div class="banner-bottom-left-grids"  v-for="(articel) in articles" :key="articel.news_id">
                    <div class="single-left-grid">
                        <h4>{{ articel.news_title}}</h4>

                        <div class="col-md-12 info-posting">
                            <div class="col-md-5">
                                <span>
                                    <b class="glyphicon glyphicon-pencil"></b> {{ articel.news_writer}}
                                </span>
                            </div>
                            <div class="col-md-7">
                                <span>
                                    <b class="glyphicon glyphicon-calendar"></b> {{ articel.created}} |
                                    <b class="glyphicon glyphicon-eye-open"></b> {{ articel.news_view}}
                                </span>
                            </div>
                        </div>

                        <figure class="figure">
                            <progressive-img class="img-responsive" :src="articel.news_image_new" placeholder="http://cancer.pybossa.com/static/img/placeholder.project.png" :blur="30" />
                            <figcaption class="figure-caption"> {{articel.news_caption}}</figcaption>
                        </figure>
                        <p class="text" v-html="articel.news_content"></p><br>
                    </div>
                </div>
                <div class="clearfix"></div>
                <infinite-loading @infinite="load">
                    <span slot="no-more">
                    
                    </span>
                </infinite-loading>
            </div>
            <div class="col-md-4 mag-inner-right">
                <app-share></app-share>
                <app-rating title="Terbaru"></app-rating>
                <app-rating title="Populer"></app-rating>
            </div>

            <div class="clearfix"></div>
        </div>
    </div>
    </div>`,
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
        async load($state){
            var pages = this.articles.length + 1;
            NewsApi.detailNews(this.$route.params.id,pages).then((result) => {
                // console.log(result[0]);
                
                if (pages == 1) {
                    this.articles = this.articles.concat(result);
                    // this.articles.push(result);    
                }else{
                    this.articles = this.articles.concat(result[0]);
                    // this.articles.push(result[0]);
                }
                // console.log(result[0]);
            }).catch((err) => {
                console.log(err);
                $state.complete();
            }).finally(()=>{
                $state.loaded();
                if(this.articles.length === 5){
                    $state.complete();
                }
            });
	    },
    },
}
</script>

