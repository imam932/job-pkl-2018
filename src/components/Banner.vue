<template>
 <div class="container-banner">
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner" v-for="(articel,index) in articles" :key="articel.id">
				<div class="item" :class="{'active' : index == 4}">
					<progressive-background style="max-width: 100%;" placeholder="http://cancer.pybossa.com/static/img/placeholder.project.png" :src="articel.news_image_new" fallback="http://cancer.pybossa.com/static/img/placeholder.project.png" :blur="100" />
					<div class="carousel-caption">
						<h4 class="col-sm-4 kategori">
						</h4>
						<h4 class="col-sm-8 tanggal-post">
							<span>
								<b class="glyphicon glyphicon-calendar"></b>{{articel.news_datepub}}| 
								<b class="glyphicon glyphicon-eye-open"></b>{{articel.news_view}}
							</span>
						</h4>
						<div class="clearfix"></div>

						<p class="deskripsi">{{articel.news_caption}} <a href="#"><br><kbd class="btn-info"><router-link :to="{ name: 'Detail', params: { id: articel.news_id }}">Baca selengkapnya ...</router-link></kbd></a></p>
					</div>
				</div>
			</div>

			<ul class="list-group col-sm-4">
				<li data-target="#myCarousel" class="list-group-item" v-for="(articel,index) in articles" :class="{'active' : index === 0}" :key="articel.id"  :data-slide-to="index">
					<h4>{{articel.news_title}}</h4>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import  NewsApi  from "@/service/api/News";
export default {
  name: 'Banner',
  data () {
    return {
      articles: []
    }
	},
	async created (){
		NewsApi.bannerNews().then((result) => {
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