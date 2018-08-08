<template>
    <div class="col-md-6 tech-text">
        <div class="technology">
            <h2 class="tittle"><i class="glyphicon glyphicon-star"> </i>Berita {{this.title}}</h2>
        </div>

        <div class="editor-pics" v-for="(articel) in articles" :key="articel.news_id">
            <div class="col-md-5 item-pic">
                <progressive-img class="img-responsive" :src="articel.news_image_new" placeholder="http://cancer.pybossa.com/static/img/placeholder.project.png" fallback="http://cancer.pybossa.com/static/img/placeholder.project.png" :blur="30" />
            </div>
            <div class="col-md-7 item-details">
                <span>{{articel.news_tags}}</span>
                <h5 class="inner two"><router-link :to="{ name: 'Detail', params: { id: articel.news_id }}">{{articel.news_title}}</router-link></h5>
                <div class="td-post-date two">{{articel.news_datepub}} | {{articel.news_writer}}</div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
import  NewsApi  from "@/service/api/News";
export default {
    name: 'News',
    props:{
        title : String
    },
    data() {
        return {
            articles : []
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
    }
}
</script>

