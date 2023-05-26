// 참조
const uid = document.getElementById('uid'),
upw = document.getElementById('upw');
// 정규표현식
const uidReg = /^[a-z0-9]{1}[a-z0-9]{5,20}$/,
upwReg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^*])[\da-zA-Z!@#$%^*]{9,20}$/;

// 폼 유효성 합격 기준 (합격 : true(기본값) / 불합격 : false)
let formCheckArr = [];
let finalFormCheck = true;
// onsubmit 속성함수로, 포커스 함수와 유효성 검사 함수 모두 합쳐서 작동시키는 메인 함수
function joinFormCheck(){
    inputUid();
    inputFocusAll();
    for(i=0;i<formCheckArr.length;i++){
        if(!formCheckArr[i]){
            finalFormCheck = formCheckArr[i];
            break;
        }
        else{
            finalFormCheck = formCheckArr[i];
        }
    }
    return finalFormCheck;
}
// 포커스 함수
function inputFocusAll(){
    const inputFocus = document.querySelectorAll('.focus');
    for(i=0;i<inputFocus.length; i++){
        if(!inputFocus[i].value){
            inputFocus[i].focus();
            return;
        }
    }
}
// 아이디 유효성 검사 함수
function inputUid(){
    if(!uid.value){
        console.log("값 없음");
        formCheckArr[0] = false;
    }
    else{
        if(!uidReg.test(uid.value)){
            console.log("유효성 검사 불합격");
            formCheckArr[0] = false;
        }
        else{
            console.log("유효성 검사 합격")
            formCheckArr[0] = true;
        }
    }
}