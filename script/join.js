// 인풋에 대한 참조
const uid = document.getElementById('uid'),
upw = document.getElementById('upw'),
upwCheck = document.getElementById('upw_check'),
uname = document.getElementById('uname'),
birthYear = document.getElementById('yy'),
birthMonth = document.getElementById('mm'),
birthDay = document.getElementById('dd'),
phone = document.getElementById('phone'),
emailId = document.getElementById('email_id'),
emailAdress = document.getElementById('email_adress'),
adressList = document.getElementById('adress_list');

// 유효성 검사 메시지에 대한 참조
const uidMessage = document.getElementById('uid_message'),
upwMessage = document.getElementById('upw_message'),
upwCheckMessage = document.getElementById('upw_check_message'),
unameMessage = document.getElementById('uname_message'),
birthMessage = document.getElementById('birth_message'),
phoneMessage = document.getElementById('phone_message'),
emailMessage = document.getElementById('email_message');

// 정규표현식
const uidReg = /^[a-z0-9]{1}[a-z0-9]{5,20}$/,
upwReg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^*])[\da-zA-Z!@#$%^*]{9,20}$/,
unameReg = /^[가-힣]{2,30}$/,
yearReg = /^(19[0-9][0-9]|20\d{2})$/,
dayReg = /^([1-9]|[1-2][0-9]|3[0-1])$/,
phoneReg = /^(010|011|016|017|018|019)(\d{3}|\d{4})(\d{4})$/;

// 폼 유효성 합격 기준 (합격 : true(기본값) / 불합격 : false)
let formCheckArr = [];
let finalFormCheck = true;
// 포커스 아웃 이벤트
uid.addEventListener('focusout',inputUid);
upw.addEventListener('focusout',inputUpw);
upwCheck.addEventListener('focusout',inputUpwCheck);
uname.addEventListener('focusout',inputUname);
birthYear.addEventListener('focusout', inputBirthYear);
birthMonth.addEventListener('focusout', inputBirthYear);
birthDay.addEventListener('focusout', inputBirthYear);
phone.addEventListener('focusout',inputPhone);

// onsubmit 속성함수로, 포커스 함수와 유효성 검사 함수 모두 합쳐서 작동시키는 메인 함수
function joinFormCheck(){
    inputUid();
    inputUpw();
    inputUpwCheck();
    inputUname();
    inputBirthYear();
    inputPhone();
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
    // return finalFormCheck;
    return false;
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
        uidMessage.textContent = "";
        uidMessage.classList.add("error-message");
        uidMessage.classList.remove("success-message");
        uidMessage.textContent = "값이 입력되지 않았습니다.";
        formCheckArr[0] = false;
    }
    else{
        if(!uidReg.test(uid.value)){
            uidMessage.textContent = "";
            uidMessage.classList.add("error-message");
            uidMessage.classList.remove("success-message");
            uidMessage.textContent = "값이 올바르게 입력되지 않았습니다.";
            formCheckArr[0] = false;
        }
        else{
            uidMessage.textContent = "";
            uidMessage.classList.remove("error-message");
            uidMessage.classList.add("success-message");
            uidMessage.textContent = "완벽합니다!";
            formCheckArr[0] = true;
        }
    }
}

function inputUpw(){
    if(!upw.value){
        upwMessage.textContent = "";
        upwMessage.classList.add("error-message");
        upwMessage.classList.remove("success-message");
        upwMessage.textContent = "값이 입력되지 않았습니다.";
        formCheckArr[1] = false;
    }
    else{
        if(!upwReg.test(upw.value)){
            upwMessage.textContent = "";
            upwMessage.classList.add("error-message");
            upwMessage.classList.remove("success-message");
            upwMessage.textContent = "값이 올바르게 입력되지 않았습니다.";
            formCheckArr[1] = false;
        }
        else{
            upwMessage.textContent = "";
            upwMessage.classList.remove("error-message");
            upwMessage.classList.add("success-message");
            upwMessage.textContent = "완벽합니다!";
            formCheckArr[1] = true;
        }
    }
}

function inputUpwCheck(){
    if(!upw.value){
        upwCheckMessage.textContent = "";
        upwCheckMessage.classList.add("error-message");
        upwCheckMessage.classList.remove("success-message");
        upwCheckMessage.textContent = "값이 입력되지 않았습니다.";
        formCheckArr[2] = false;
    }
    else{
        if(upwCheck.value !== upw.value){
            upwCheckMessage.textContent = "";
            upwCheckMessage.classList.add("error-message");
            upwCheckMessage.classList.remove("success-message");
            upwCheckMessage.textContent = "값이 올바르게 입력되지 않았습니다.";
            formCheckArr[2] = false;
        }
        else{
            upwCheckMessage.textContent = "";
            upwCheckMessage.classList.remove("error-message");
            upwCheckMessage.classList.add("success-message");
            upwCheckMessage.textContent = "완벽합니다!";
            formCheckArr[2] = true;
        }
    }
}

function inputUname(){
    if(!uname.value){
        unameMessage.textContent = "";
        unameMessage.classList.add("error-message");
        unameMessage.classList.remove("success-message");
        unameMessage.textContent = "값이 입력되지 않았습니다.";
        formCheckArr[3] = false;
    }
    else{
        if(!unameReg.test(uname.value)){
            unameMessage.textContent = "";
            unameMessage.classList.add("error-message");
            unameMessage.classList.remove("success-message");
            unameMessage.textContent = "값이 올바르게 입력되지 않았습니다.";
            formCheckArr[3] = false;
        }
        else{
            unameMessage.textContent = "";
            unameMessage.classList.remove("error-message");
            unameMessage.classList.add("success-message");
            unameMessage.textContent = "완벽합니다!";
            formCheckArr[3] = true;
        }
    }
}

function inputBirthYear(){
    if(!birthYear.value){
        birthMessage.textContent = "";
        birthMessage.classList.add("error-message");
        birthMessage.classList.remove("success-message");
        birthMessage.textContent = "값이 입력되지 않았습니다.";
        formCheckArr[4] = false;
    }
    else{
        if(!yearReg.test(birthYear.value)){
            birthMessage.textContent = "";
            birthMessage.classList.add("error-message");
            birthMessage.classList.remove("success-message");
            birthMessage.textContent = "값이 올바르게 입력되지 않았습니다.";
            formCheckArr[4] = false;
        }
        else{
            inputBirthMonth();
        }
    }
}

function inputBirthMonth(){
    if(!birthMonth.value){
        birthMessage.textContent = "";
        birthMessage.classList.add("error-message");
        birthMessage.classList.remove("success-message");
        birthMessage.textContent = "값이 선택되지 않았습니다.";
        formCheckArr[4] = false;
    }
    else{
        inputBirthDay();
    }
}

function inputBirthDay(){
    if(!birthDay.value){
        birthMessage.textContent = "";
        birthMessage.classList.add("error-message");
        birthMessage.classList.remove("success-message");
        birthMessage.textContent = "값이 입력되지 않았습니다.";
        formCheckArr[4] = false;
    }
    else{
        if(!dayReg.test(birthDay.value)){
            birthMessage.textContent = "";
            birthMessage.classList.add("error-message");
            birthMessage.classList.remove("success-message");
            birthMessage.textContent = "값이 올바르게 입력되지 않았습니다.";
            formCheckArr[4] = false;
        }
        else{
            birthMessage.textContent = "";
            birthMessage.classList.remove("error-message");
            birthMessage.classList.add("success-message");
            birthMessage.textContent = "완벽합니다!";
            formCheckArr[4] = true;
        }
    }
}

function inputPhone(){
    if(!phone.value){
        phoneMessage.textContent = "";
        phoneMessage.classList.add("error-message");
        phoneMessage.classList.remove("success-message");
        phoneMessage.textContent = "값이 입력되지 않았습니다.";
        formCheckArr[5] = false;
    }
    else{
        if(!phoneReg.test(phone.value)){
            phoneMessage.textContent = "";
            phoneMessage.classList.add("error-message");
            phoneMessage.classList.remove("success-message");
            phoneMessage.textContent = "값이 올바르게 입력되지 않았습니다.";
            formCheckArr[5] = false;
        }
        else{
            phoneMessage.textContent = "";
            phoneMessage.classList.remove("error-message");
            phoneMessage.classList.add("success-message");
            phoneMessage.textContent = "완벽합니다!";
            formCheckArr[5] = true;
        }
    }
}

function inputEmailAdress(){
    if(adressList.value === 'type'){
        emailAdress.readOnly = false;
        emailAdress.value ='';
        emailAdress.style.backgroundColor = "white";
        emailAdress.focus();
    }
    else{
        emailAdress.readOnly = true;
        emailAdress.style.backgroundColor = "rgb(214, 214, 214)";
        emailAdress.value = adressList.value;
    }
}