import axios from 'axios';

export default {
    methods:{
        async $api(url, method, data) { //함수명 앞에 $라는 prefix 사용이유 : 믹스인 파일을 사용하는 컴포넌트 내에 동일한 메소드명이 있어서 오바리이딩 되는 것을 방지.
            return (await axios({
                method: method,
                url,
                data            
            }).catch(e => {
                console.log(e);
            })).data
        }
    }
}