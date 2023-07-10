function dis(num){ //지역변수 
    console.log(num);
}

const value =4;
dis(value);

//지역변수 개념 num dis내부에서 바꿔도 value에 바뀌지않음
//상태 변경이 필요한 경우, 새로운 상태 (오브젝트,값) 만들어서 반환해야함
//원시값 - 값에 의한 복사
//객체값 - 주소에 의한 복사 --> 주소접근해서 값 바꾸면 이를 가리키고 있는 모든 변수에 적용 

//메모리 셀에 무엇이 있는가.. 변수 


//뭐 변경한다면, 변경하는 함수 만들어 
//기존 오브젝트 변경하지말고, copy한 다음에 (new) 변경값만 적용된 오브젝트 return하는게 좋은 습관

function change(obj){
    return {...obj,name:'bob'}; //반환시 새로운 오브젝트 만들어요
}
 
