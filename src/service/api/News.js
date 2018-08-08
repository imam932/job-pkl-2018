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
    CategoriNewsAll(categori){
        return Axios.get('news/categori/'+categori).then((response) => {
            return response
        }).catch((err) => {
            console.log(err);
        });
    }

}