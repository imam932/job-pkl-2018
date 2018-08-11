<template>
  <div id="app">
   <div class="header" id="home">
		<div class="content white">
			<!-- navbar top -->
			<nav class="navbar navbar-default navbar-top">
				<div class="container">
					<a href="#" class="pull-left img-logo"><img src="@/assets/images/logo.png"></a>
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<ul class="nav navbar-nav navbar-right top-kanan">
						<li><span class="hari_tgl" id="date">{{new Date() | moment('dddd, Do MMMM YYYY')}}</span></li>
						<li>
							<form class="navbar-form form-inline form-group">
								<input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" v-model="message">
								<!-- <input v-model="message" placeholder="edit me"> -->
								<!-- <p>Message is: {{ message }}</p> -->
								<router-link :to="{ name: 'Search', params: { parameter: this.message }}"><i class="fa fa-search" aria-hidden="true"></i></router-link>
							</form>
						</li>
					</ul>
				</div>
			</nav>
			<!-- end navbar top -->

			<!-- navbar down -->
			<nav class="navbar navbar-default navbar-down">
				<div class="container">
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li><router-link :to="{ name: 'Home'}">Home</router-link></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">Peristiwa</a>
								<ul class="dropdown-menu">
									<li><a href="https://www.surabayatimes.com/kanal/peristiwa" target="_blank"  >Surabaya</a></li>
									<li class="divider"></li>
									<li><a href="#">Malang</a></li>
									<li class="divider"></li>
									<li><a href="https://www.jombangtimes.com/kanal/peristiwa" target="_blank" >Jombang</a></li>
									<li class="divider"></li>
									<li><a href="https://www.maduratimes.com/kanal/peristiwa" target="_blank" >Madura</a></li>
								</ul>
							</li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 'Politik' }}">Politik</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 'Ekonomi' }}">Ekonomi</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 'Pendidikan' }}">Pendidikan</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 'Riset' }}">Riset</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 'Olahraga' }}">Olahraga</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 'Tekno' }}">Tekno</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 'Wisata' }}">Wisata</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 'Kuliner' }}">Kuliner</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 'Sehat' }}">Sehat</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 'Gaya' }}">Gaya</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 'Lapsus' }}">Lapsus</router-link></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">Other</a>
								<ul class="dropdown-menu">
									<li><a href="#">Galeri</a></li>
									<li class="divider"></li>
									<li><a href="#">Indeks</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<!-- end navbar down -->

			<div class="clearfix"></div>
		</div>
	</div>
	<!-- end header -->
    <router-view :key="$route.path"/>
    <div class="clearfix"></div>

	<div class="col-md-12 copyright">
		<div class="col-md-7">
			<p>&copy; 2018 Malang TIMES | Design by <a href="#">Acil Group</a> </p>
		</div>
		<div class="col-md-5 menu-footer">
			<ul class="list-inline navbar-right">
				<li class="list-inline-item"><router-link to="/tentangkami">Tentang Kami</router-link></li>
				<li class="list-inline-item"><a href="#">Redaksi</a></li>
				<li class="list-inline-item"><a href="#">PMC</a></li>
			</ul>
		</div>
		<div class="clearfix"></div>
	</div>
  </div>
</template>
<script>
export default {
  name: 'app',
  props:{
        message : String
    },
  methods: {
	  
  },
}
</script>