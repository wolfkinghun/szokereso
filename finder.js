console.log(abc);
abc.forEach(char=>
    document.querySelector('.letters-holder').innerHTML+=`<span>${char}</span>` 
    )
console.log(words);
console.log(words.length);
let rnr = Math.floor(Math.random()*words.length)
//console.log(rnr)
let secret_word = words[rnr]
console.log(secret_word)
let letters=secret_word.split('')
let errors=0
let wordStatus=letters.map(char=>'_')
//console.log(wordStatus);
function showWordStatus(){
    document.querySelector(".secret-word").innerHTML=wordStatus.map(char=>`<span>${char}</span>`).join('')
}
showWordStatus()


function handleClick(e){
    if(e.target.tagName!='SPAN') return
    let clickedLetter=e.target.innerText
    console.log(clickedLetter);
    let match=false;
    for(let i in letters){
        if(letters[i].toUpperCase()==clickedLetter){
            wordStatus[i]=clickedLetter
            match=true;
        }
    }
    showWordStatus()
    errors=match ? errors : ++errors
    console.log(errors);
    /*
    if(errors>0 && errors<=6){
        document.getElementById(errors).style.display="block"
    }
    if(errors==6){
        console.log('game over...')
    }
    if(wordStatus.indexOf('_')==-1){
        console.log('nyertel');
    }*/


}