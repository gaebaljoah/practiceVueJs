<template>
    <div>
        <h2>Composition2</h2>
        <div>
            <input type="text" v-model="num1" />
            <span> + </span>
            <input type="text" v-model="num2" />
            <span> = </span>
            <span> {{ result }} </span>
        </div>
    </div>
</template>
<script>

    import {reactive, computed, toRefs} from 'vue'; //toRefs 추가
    function plusCalculator(){
        let state = reactive({
            num1 : 0,
            num2 : 0,
            result : computed(() => parseInt(state.num1) + parseInt(state.num2))
            //computed를 이용해서 num1,num2가 변경이 일어나면 즉시 result로 더한 값을 반환
        });
        return toRefs(state);//반응형으로 선언된 num1, num2 result가 외부 function에서 정상적으로 동작하기 위해서는 toRefs를 사용해야 함
    }
    export default {
        setup(){
            let{num1, num2, result} = plusCalculator(); //외부 function
            return{
                num1,num2,result
            }
        }
    }
</script>