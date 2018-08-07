<template>
    <div class="main-content2">
		<div class="container">
			<div class="mag-inner">
				<div class="col-md-9 mag-innert-left">
					<div class="technology">
						<h2 class="tittle"><i class="glyphicon glyphicon-tags"> </i>POLITIK</h2>
						<div class="col-md-6 tech-img">
				          <img src="images/03-news.jpg" class="img-responsive" alt=""/>
						</div>
						<div class="col-md-6 tech-text">
							<div class="editor-pics">
								<div class="col-md-12 item-details">
								<span>ayo nyapres</span>
								<h5 class="inner two"><a href="#">Menanti Pasangan Jokowi dan Prabowo di Pilpres 2019</a></h5>
								<div class="td-post-date two">Senin, 06 Agustus 2018 | 10.00</div>
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
    name: 'Categoris',
    data () {
        return {
        articles: []
        }
	},
	created (){
		NewsApi.bannerNews().then((result) => {
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

