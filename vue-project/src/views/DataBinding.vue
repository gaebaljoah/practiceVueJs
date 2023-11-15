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
        checkedList:[]
    };
  }
}
</script>
<style>
hr {
    width:400px;
}
</style>