const {getFirstPlayer,addScore} = require('../src/player');

let player1 = {
    name: "Sarvesh",
    score: 20,
}

let player2 = {
    name: "Sarvesh",
    score: 20,
} 




test('First Player check to be',()=>{
    
    expect(getFirstPlayer(player1,player2)).toBe(player1);
})

test('First Player to Equal',()=>{
    //ddScore(player1,20);
    expect(getFirstPlayer(player1,player2)).not.toBe(player2);
})


test('player1 and player2 tobe', () => {
    expect(addScore(player1,20)).toBe({name:"Sarvesh", score:20}); 
  })
  
  test('player1 and player2 not tobe', () => {
    expect(addScore(player1,20)).toEqual({name:"Sarvesh", score:20}); 
  })