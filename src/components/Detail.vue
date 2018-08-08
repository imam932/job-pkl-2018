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
                    <p class="text">{{ this.articles.news_content}}</p><br>
                </div>
            </div>
        </div>

        <div class="col-md-4 mag-inner-right">
            <h4 class="side"><i class="glyphicon glyphicon-share"> </i>SHARE BERITA</h4>
            <div class="edit-pics">
                <ul class="social-network social-circle">
                    <li>
                        <a href="#" class="icoRss" title="Rss"><i class="fa fa-rss"></i></a>
                    </li>
                    <li>
                        <a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a>
                    </li>
                    <li>
                        <a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
            <div class="top-news">
                <h4 class="side"><i class="glyphicon glyphicon-bookmark"> </i>Terbaru</h4>
                <div class="edit-pics">
                    <div class="editor-pics" v-for="(articel) in top" :key="articel.news_id">
                        <div class="col-md-12 item-details">
                            <a href="#"><progressive-img class="img-responsive" :src="articel.news_image_new" placeholder="http://cancer.pybossa.com/static/img/placeholder.project.png" fallback="http://cancer.pybossa.com/static/img/placeholder.project.png" :blur="30" /></a>
                            <h5 class="inner two"><a href="#">{{articel.news_title}}</a></h5>
                            <div class="td-post-date two">
                                <span>
                                    <b class="glyphicon glyphicon-calendar"></b> {{articel.created}} |  
                                    <b class="glyphicon glyphicon-time"></b>{{articel.news_view}}
                                </span>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>

            <div class="top-news">
                <h4 class="side"><i class="glyphicon glyphicon-star"> </i>Terpopuler</h4>
                <div class="top-inner">
                    <div class="top-text" v-for="(articel) in newS" :key="articel.news_id">
                        <a href="#"><progressive-img class="img-responsive" :src="articel.news_image_new" placeholder="http://cancer.pybossa.com/static/img/placeholder.project.png" fallback="http://cancer.pybossa.com/static/img/placeholder.project.png" :blur="30" /></a>
                        <h5 class="top"><a href="#">{{articel.news_title}}</a></h5>
                        <div class="td-post-date two">
                            <span>
                                <b class="glyphicon glyphicon-calendar"></b> {{articel.created}} |  
                                <b class="glyphicon glyphicon-time"></b>{{articel.news_view}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="clearfix"></div>
    </div>
</div>
</div>
</template>
<script>
import  NewsApi  from "@/service/api/News";
export default {
    name: 'Detail',
    data() {
        return {
            articles:[],
            newS :[],
            top :[],
        }
    },
    async created(){
        NewsApi.detailNews(this.$route.params.id).then((result) => {
            this.articles = result.data.result;
            console.log(result.data.result);
            
		}).catch((err) => {
			console.log(err);
		}).finally(()=>{
			this.loading = false
        });

        NewsApi.newNews().then((result) => {
            this.newS = result.data.result;
            console.log(this.newS);
        }).catch((err) => {
            console.log(err);
        }).finally(()=>{
            this.loading = false
        });  

        NewsApi.populerNews().then((result) => {
            this.top = result.data.result;
        }).catch((err) => {
            console.log(err);
        }).finally(()=>{
            this.loading = false
        });
	},
}
</script>

