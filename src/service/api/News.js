import Axios from "axios"
export default{
    bannerNews(){
        return Axios.get('news/headline').then((response) => {
            return response
        }).catch((err) => {
            console.log(err);
        });
    },
    newNews(){
        return Axios.get('news/new').then((response) => {
            return response
        }).catch((err) => {
            console.log(err);
        });
    },
    populerNews(){
        return Axios.get('news/populer').then((response) => {
            return response
        }).catch((err) => {
            console.log(err);
        });
    },
    CategoriNews(categori){
        return Axios.get('news/limit/'+categori).then((response) => {
            return response
        }).catch((err) => {
            console.log(err);
        });
    },
    detailNews(id){
        return Axios.get('news/'+id).then((response) => {
            return response
        }).catch((err) => {
            console.log(err);
        });
    },
    CategoriNewsAll(categori,limit){
        return Axios.get('news/categori/'+categori+'/'+limit).then((response) => {
            return response
        }).catch((err) => {
            console.log(err);
        });
    },
    search(params){
        return Axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyBw4pHumXbRMqXK4N0vjTQogglrnr43Ydk&cx=015149305562143392698:0j-yfpftjgg&q='+params).then((response) => {
            return response.data.items
        }).catch((err) => {
            console.log(err);
        });
    }

}