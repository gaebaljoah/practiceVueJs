<template>
    <div>
        <div>{{htmlString}}</div><hr/>
        <div v-html ="htmlString"></div><hr/>
        <input type="text" v-model="valueModel"/><hr/>    
        <input type="number" v-model.number="numberModel"/><hr/>  
        <textarea v-model="message"></textarea><hr/>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select><hr/>
        <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no">{{ checked }}</label><br/>
        <label><input type="checkbox" v-model="checkedList" value="서울"/>서울</label>
        <label><input type="checkbox" v-model="checkedList" value="부산"/>부산</label>
        <label><input type="checkbox" v-model="checkedList" value="제주"/>제주</label>
        <br/>
        <span>체크한 지역 {{ checkedList }}</span><hr/>
        <label><input type="radio" v-bind:value="radioValue1" v-model="picked"/>서울</label>
        <label><input type="radio" v-bind:value="radioValue2" v-model="picked"/>부산</label>
        <label><input type="radio" v-bind:value="radioValue3" v-model="picked"/>제주</label>
        <br/>
        <span>선택한 지역 : {{ picked }}</span><hr/>
        <img id="vueImg" v-bind:src="imgsrc" /><hr/>
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disabled="textValue==''">Click</button>
        <div class="container1" v-bind:class="{'active1': isActive1, 'text-red1': hasError1}">Class Binding1</div>
        <hr/>
        <div class="container1" v-bind:class="[activeClass, errorClass]">Class Binding2</div>
        <hr/>
        <div v-bind:style="styleObject">인라인 스타일 바인딩1</div>
        <hr/>
        <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 바인딩2</div><hr/>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product,i) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>
            </tbody>
        </table> 
        <hr/>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>
        <hr/>
        <h1 v-show="showType=='A'">A</h1>
        <!-- toggle이 자주 일어나면 show toggle일어나는 빈도가 적다면 if사용 추천 -->
        <div>
            <button type="button" @click="increasCounter">Add 1</button>
            <p>The counter is : {{ counter1 }}</p>
            <button type="button" @click="setCount(7)">Set 7</button>
            <p>The counter is : {{ counter2 }}</p>
            <button type="button" @click="one(),two()">one(),two() 함수 두개 다 부르기 Click</button>    
        </div>
        <hr/>
        <select v-model="selectedValue" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
    </div>
</template>
<script>
export default {
  data() {
    return {
        htmlString: '<p style="color:red;">Thisis a red string.</p>',
        valueModel: 'South Korea',
        numberModel: 3,
        message: "텍스트 아리아 영역입니다.",
        city:"064",
        checked:"true",
        checkedList:[],
        picked : '',
        radioValue1 : '서울',
        radioValue2 : '부산',
        radioValue3 : '제주', 
        imgsrc: "http://kr.vuejs.org/images/logo.png",
        textValue:"",
        isActive1:true,
        hasError1:false, //true로 바뀌면 빨간색으로 변경 
        activeClass:'active1',
        errorClass: 'text-red1',
        styleObject:{
            color:'blue',
            fontSize:'25px'
        },
        baseStyle:'background-color:green; width:100%; height:150px;',
        addStyle:'color:yellow; font-weight:bold;',
        productList: [
            {"product_name":"기계식키보드","price":25000,"category":"노트북/태블릿","delivery_price":5000},
            {"product_name":"무선마우스","price":12000,"category":"노트북/태블릿","delivery_price":5000},
            {"product_name":"태블릿거치대","price":32000,"category":"노트북/태블릿","delivery_price":5000},
            {"product_name":"아이패드","price":75000,"category":"노트북/태블릿","delivery_price":5000},
            {"product_name":"무선충전기","price":42000,"category":"노트북/태블릿","delivery_price":5000}
        ],
        type: 'G',
        showType : 'A',
        counter1 : 0,
        counter2 : 0,
        selectedValue : ''
    };
  },
  methods:{
    increasCounter(){
        this.counter1 = this.counter1 + 1;
    },
    setCount(counter2){
        this.counter2 = counter2;
    },
    one(){
        alert('one');
    },
    two(){
        alert('two');
    },
    changeSelect(){
        alert(this.selectedValue);
    }
  }
}
</script>
<style>

#vueImg {
    width: 200px;
}

.container1{
    width: 100%;
    height: 200px;
}

.active1{
    background-color: yellow;
    font-weight: bold;
}

.text-red1{
    color:red;
}

table{
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width:800px;
    }

td,th{
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
</style>