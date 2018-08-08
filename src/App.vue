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
						<li><span class="hari_tgl">Senin, 06 Agustus 2018</span></li>
						<li>
							<form class="navbar-form form-inline form-group">
								<input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search">
								<i class="fa fa-search" aria-hidden="true"></i>
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
							<li><a href="/">Home</a></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">Peristiwa</a>
								<ul class="dropdown-menu">
									<li><a href="#">Surabaya</a></li>
									<li class="divider"></li>
									<li><a href="#">Malang</a></li>
									<li class="divider"></li>
									<li><a href="#">Jombang</a></li>
									<li class="divider"></li>
									<li><a href="#">Madura</a></li>
								</ul>
							</li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 2 }}">Politik</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 3 }}">Ekonomi</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 9 }}">Pendidikan</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 7 }}">Riset</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 6 }}">Olahraga</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 4 }}">Tekno</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 8 }}">Wisata</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 10 }}">Kuliner</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 11 }}">Sehat</router-link></li>
							<li><router-link :to="{ name: 'Kategori', params: { kategori: 12 }}">Gaya</router-link></li>
							<li><a href="#">Lapsus</a></li>
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
    <router-view />
    <div class="clearfix"></div>

	<div class="col-md-12 copyright">
		<div class="col-md-7">
			<p>&copy; 2018 Malang TIMES | Design by <a href="#">Acil Group</a> </p>
		</div>
		<div class="col-md-5 menu-footer">
			<ul class="list-inline navbar-right">
				<li class="list-inline-item"><a href="#">Tentang Kami</a></li>
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
  name: 'app'
}
</script>