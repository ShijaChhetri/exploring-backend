function doSomething(){
    console.log("**doSomething called from newModule.js ***")
}
function againdoSomething(){
    console.log("**againdoSomething called from newModule.js ***")
}

//crud
let arr = [];
function createFun(element){
    arr.push(element);
    return arr;
}

function readFun(element){
    return arr;
}

function updateFun(index, element){
    arr[index] = element;
    return arr;

}
function deleteFun(index){
    arr.splice(index,1);
    return arr;

}

module.exports = {
    doSomething,
    againdoSomething,
    createFun,
    readFun,
    updateFun,
    deleteFun
};