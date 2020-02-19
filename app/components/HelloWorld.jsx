const React = require('react');
const UnorderedList = require('./UnorderedList');
const Square = require("./squares.jsx");
var clicks=0;
var winner;
var numbers = [0,0,0,0,0,0,0,0,0];
var currenttext;
var comment ='';
var text = '';

/* the main page for the index route of this app */
const HelloWorld = function() {
  
 
  
  const [player, setPlayer] = React.useState(true);
  const [player_id,setId] = React.useState("O");

  const [text1,settext1] = React.useState('');
  const [text2,settext2] = React.useState('');
  const [text3,settext3] = React.useState('');
  const [text4,settext4] = React.useState('');
  const [text5,settext5] = React.useState('');
  const [text6,settext6] = React.useState('');
  const [text7,settext7] = React.useState('');
  const [text8,settext8] = React.useState('');
  const [text9,settext9] = React.useState('');

  //let player_id = 'A';
  //let text='';

  //intialize 9 text, associate to -1/0/1, a logic function that tracks if anyone wins
  const endGame = ()=>{
    //endgame shoud be called when someone is winning, or everywhere is filled
    //reset everything

    settext1("");
    settext2("");
    settext3("");
    settext4("");
    settext5("");
    settext6("");
    settext7("");
    settext8("");
    settext9("");
    winner = '';
    clicks = 0;
    comment = '';
    numbers = [0,0,0,0,0,0,0,0,0];
    text = '';

  }
  const detectThree = () =>{

    //check if anyone is winning
    //(1,2,3),(4,5,6),(7,8,9)
    //(1,4,7),(2,5,8),(3,6,9)
    //(1,5,9),(3,5,7)
    //o is 1 and x is -1
    wins = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    for(i=0;i<wins.length;i++){
      
      if(numbers[wins[i][0]-1]+numbers[wins[i][1]-1]+numbers[wins[i][2]-1]==3){
        winner = 'X';
        comment = "Game over! X won!!";
        //console.log("o is winning");
      }
      else if(numbers[wins[i][0]-1]+numbers[wins[i][1]-1]+numbers[wins[i][2]-1]==-3){
        winner = 'O';
        comment = "Game over! O won!!";
        //console.log("x is winning");
      }
    }

    

  }

  const changePlayer = (id) => {
    //check if there's need to change player
      // change only when the current square is not drawn yet

      
      if(id == 1){currenttext = text1;}
      else if(id == 2){currenttext = text2;}
      else if(id == 3){currenttext = text3;}
      else if(id == 4){currenttext = text4;}
      else if(id == 5){currenttext = text5;}
      else if(id == 6){currenttext = text6;}
      else if(id == 7){currenttext = text7;}
      else if(id == 8){currenttext = text8;}
      else if(id == 9){currenttext = text9;}
      
      if(currenttext==''){
        setPlayer(!player);

        player2num(!player,id);
        //currenttext='-';
        clicks = clicks + 1;
      }
      console.log('cr = '+currenttext);
          
    }

  const player2num = (player,id) => {
    
    var number;
    
    if(player == true){
      setId('O'); 
      text = 'X';
      number = 1;
    }
    else if(player == false){
      setId('X');
      text = 'O';
      number = -1;
    }
    //set number corresponding to the square 
    numbers[id-1]=number; 
    //console.log("number right now is"+numbers[id-1]+" "+ number);
  if(id == 1){
    if(text1 == ''){settext1(text);}
    }
    else if (id==2){
      if(text2 == ''){settext2(text);}
    }
    else if (id==3){
      if(text3 == ''){settext3(text);}
    }
    else if (id==4){
      if(text4 == ''){settext4(text);}
    }
    else if (id==5){
      if(text5 == ''){settext5(text);}
    }
    else if(id == 6){
      if(text6 == ''){settext6(text);}
    }
    else if (id==7){
      if(text7 == ''){settext7(text);}
    }
    else if (id==8){
      if(text8 == ''){settext8(text);}
    }
    else if (id==9){
      if(text9 == ''){settext9(text);}
    }
    }

  const drawText = (id) => {
    if (winner != ''){
      endGame();
    }
    
    changePlayer(id);
    console.log(`the player right now is ${player_id} or ${player} and the text is ${text1}, id is ${id},clicks is ${clicks}`);
    detectThree();
   if(clicks == 9){
        endGame();
        comment = "Game over! Tie!";
    }
  }


  React.useEffect(()=>{
    //component called just once when the page is loaded
    //setInterval(setPlayer,!player);
    document.title = `It's player ${player_id}'s turn.`;
    //console.log("is it running"+ player_id + player);
  });//empty bracket means useeffect will only be called once
  

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <button onClick = {endGame}>Reset</button>
      <p>It's player {player_id}'s turn.</p>
      <br/>
      <Square items = {text1} draw = {drawText} id = {1}/>
      <Square items = {text2} draw = {drawText} id = {2}/>
      <Square items = {text3} draw = {drawText} id = {3}/>
      <br/>
      <Square items = {text4} draw = {drawText} id = {4}/>
      <Square items = {text5} draw = {drawText} id = {5}/>
      <Square items = {text6} draw = {drawText} id = {6}/>
      <br/>
      <Square items = {text7} draw = {drawText} id = {7}/>
      <Square items = {text8} draw = {drawText} id = {8}/>
      <Square items = {text9} draw = {drawText} id = {9}/>
      <p>{comment}</p>

    </div>
  );
}

module.exports = HelloWorld;