<template>
    <div class="main-content2">
		<div class="container">
			<div class="mag-inner">
				<div class="col-md-9 mag-innert-left">
					<div class="technology">
						<h2 class="tittle"><i class="glyphicon glyphicon-tags"> </i>RISET</h2>
						<div class="col-md-6 tech-img">
						  <progressive-img class="img-responsive" :src="articles[0].news_image_new" placeholder="http://cancer.pybossa.com/static/img/placeholder.project.png" fallback="http://cancer.pybossa.com/static/img/placeholder.project.png" :blur="30" />
						</div>
						<div class="col-md-6 tech-text">
							<div class="editor-pics">
								<div class="col-md-12 item-details" v-for="(articel) in articles" :key="articel.id">
								<span>{{articel.news_tags}}</span>
								<h5 class="inner two"><a href="#">{{articel.news_title}}</a></h5>
								<div class="td-post-date two">{{articel.news_datepub}} | {{articel.news_writer}}</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div class="col-md-12 view-all">
							<div class="btn-group" role="group" aria-label="">
								<a href="#">View All</a>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>

				<div class="col-md-3 mag-inner-right">
				</div>

				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</template>
<script>
import  NewsApi  from "@/service/api/News";
export default {
    name: 'Criset',
    data () {
        return {
        articles: []
        }
	},
	async created (){
		NewsApi.CategoriNews(6).then((result) => {
			this.articles = result.data.result;
			// console.log(result.data.result);
		}).catch((err) => {
			console.log(err);
		}).finally(()=>{
			this.loading = false
		});
	}
}
</script>

