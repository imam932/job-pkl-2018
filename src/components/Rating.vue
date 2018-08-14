<template>
    <div class="top-news">
        <h4 class="side"><i class="glyphicon glyphicon-bookmark"> </i>{{this.title}}</h4>
        <div class="edit-pics">
            <div class="editor-pics" v-for="(articel) in articles" :key="articel.news_id">
                <div class="col-md-12 item-details">
                    <a href="#"><progressive-img class="img-responsive" :src="articel.news_image_new" placeholder="http://cancer.pybossa.com/static/img/placeholder.project.png" fallback="http://cancer.pybossa.com/static/img/placeholder.project.png" :blur="30" /></a>
                    <h5 class="inner two"><router-link :to="{ name: 'Detail', params: { id: articel.news_id }}">{{articel.news_title}}</router-link></h5>
                    <div class="td-post-date two">
                        <span>
                            <b class="glyphicon glyphicon-calendar"></b> {{articel.created}} |  
                            <b class="glyphicon glyphicon-eye-open"></b>{{articel.news_view}}
                        </span>
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
    name: 'Rating',
	props:{
		title : String,
    },
    data () {
        return {
        	articles: []
        }
    },
    async created(){
        if (this.title === 'Terbaru') {
            NewsApi.newNews().then((result) => {
			    this.articles = result.data.result;
			    // console.log(result.data.result);
            }).catch((err) => {
                console.log(err);
            }).finally(()=>{
                this.loading = false
            });   
        }else{
            NewsApi.populerNews().then((result) => {
    			this.articles = result.data.result;
                // console.log(result.data.result);
            }).catch((err) => {
                console.log(err);
            }).finally(()=>{
                this.loading = false
            });
        }
	},
}
</script>

