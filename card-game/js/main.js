


let deckId = ''

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json())
  .then(data => {
      console.log(data)
      deckId = data.deck_id
    
    
    })
    .catch(err =>{
        console.log(`error ${err}`)
    });
    
    


document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data)
  document.getElementById('player1').src = data.cards[0].image
  document.getElementById('player2').src = data.cards[1].image

  let player1Val = convertToNums(data.cards[0].value)
  let player2Val = convertToNums(data.cards[1].value) 

  if(player1Val > player2Val){
    document.querySelector('h3').innerText = "Player 1 wins!"
  }else if (player1Val < player2Val){
    document.querySelector('h3').innerText = "Player 2 wins!"
  }else{
    document.querySelector('h3').innerText = "Time for war!"
  }
})
.catch(err =>{
  console.log(`erron ${err}`)
});
}


function convertToNums(val){
  if(val === "ACE"){
 return 14
}else if(val === "KING"){
  return 13
}else if(val === "QUEEN"){
  return 12
}else if(val === "JACK"){
  return 11
} else{
  return Number(val)
}
}
