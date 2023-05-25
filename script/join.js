// 포커스 함수
function inputFocusAll(){
    const inputFocus = document.querySelectorAll('.focus');
    for(i=0;i<inputFocus.length; i++){
        if(!inputFocus[i].value){
            inputFocus[i].focus();
            return false;
        }
    }
}