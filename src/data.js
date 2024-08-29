export const API_KEY='AIzaSyB4n7BM6FFF_UtZYGX6We3ES-wf9IhLjbE'


 export const valueConverter = (value)=>{ //function to display views
    if(value >1000000){
        return  Math.floor(value/1000000)+'M';
    }else if (value >= 1000){
        return  Math.floor(value/1000)+'K';
    }else{
        return value;
    }
}