let result = document.getElementById('result');
function insertvalue(value){
    result.value += value;
}
function clearresult(){
    result.value = '';
}
function deleteresult(){
    result.value = result.value.slice(0, -1);
}
function calculate(){
    try{
        result.value = eval(result.value);
    }
    catch (error){
        result.value = "error";
    }
}