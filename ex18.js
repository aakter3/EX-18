// https://www.w3schools.com/js/js_arrays.asp
//https://www.w3schools.com/jsref/jsref_filter.asp
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.w3schools.com/jsref/jsref_push.asp
const sentenceInput = document.getElementById("sentence");
const wordInput = document.getElementById("word");
const alert = document.getElementById("alert");
const btnAdd = document.getElementById("btnAdd");
const wordList = document.getElementById("wordList");


sentenceInput.oninput = handleChange;
wordInput.oninput = handleChange;
alert.innerHTML ='';
function handleChange(){
    let sentence = sentenceInput.value;
        let word= wordInput.value;

    if(sentence.includes(word)&& word.length !=0){
        alert.innerHTML = "Found";

    }else {
        alert.innerHTML = "Not Found";
    }
};
let wordListArray =[];
//let index =0;
btnAdd.onclick= ()=>{
    // console.log(documemt.getElementById("word2"))
    // wordList.innerHTML = documemt.getElementById("word2").value;
   
//    wordListArray[index] = document.getElementById("word2").value;
//    index++;
//    wordList.innerHTML = wordListArray;
wordListArray.push(word2.value);
wordList.innerHTML = wordListArray;
word2.value ='';

};