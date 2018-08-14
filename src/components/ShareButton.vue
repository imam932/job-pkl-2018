<script>
export default {

    name: 'ShareButton',
    template:
    `
    <social-sharing :url="url"
                        title="Malang Times"
                         inline-template>
        <div>
            <h4 class="side"><i class="glyphicon glyphicon-share"> </i>SHARE BERITA</h4>
            <div class="edit-pics">
                
                <ul class="social-network social-circle">
                    <li>
                        <a href="#" class="icoRss" title="Rss"><i class="fa fa-rss"></i></a>
                    </li>
                    <li>
                        <network network="facebook">
                        <a class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a>
                        </network>
                    </li>
                    <li>
                        <network network="twitter">
                        <a class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i>
                        </a>
                        </network>
                    </li>
                    <li>
                        <network network="googleplus">
                        <a class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a>
                        </network>
                    </li>
                    <li>
                        <network network="linkedin">
                        <a class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a>
                        </network>
                    </li>
                </ul>
            </div>
        </div>
    </social-sharing>
    `,
    data() {
        return {
            url : window.location.href,
        }
    },
    async created()
    {

    },
}
</script>

