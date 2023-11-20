import React from "react";
import "./tictactoe.css";
import circle from '../assets/icons8-circle-100.png';
import x from '../assets/icons8-x-100.png';

let data = ["", "", "", "", "", "", "", "", ""];


const TicTacToe = () => {
    let [count, setCount] = React.useState(0);
    let [lock, setLock] = React.useState(false);

    let winBanner = document.querySelector(".winBanner");
    

const checkWinner = () => {
    if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
        won(data[2])
    }
    else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
        won(data[5])
    }
    else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
        won(data[8])
    }
    else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
        won(data[6])
    }
    else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
        won(data[7])
    }
    else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
        won(data[8])
    }
    else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
        won(data[8])
    }
    else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
        won(data[6])
    }
    else if(count === 9){
        won();
    }
}
const won = (winner) => {
    setLock(true);
    if(winner === "x"){
        winBanner.innerHTML = `<img src=${x} alt="x" />  wins`;
    }
    else if(winner === "o"){
        winBanner.innerHTML = `<img src=${circle} alt="circle" />  wins`;
    }
    else{
        winBanner.innerHTML = "Draw";
    }
}

const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    winBanner.innerHTML = "";
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => {
        box.innerHTML = "";
    });

}

const toggle =(e, num) => {
        if(lock){
            return 0;
        }
        if(count % 2 === 0){
            e.target.innerHTML = `<img src=${x} alt="x" />`;
            data[num] = "x";
            setCount(++count);
    }
    else{
        e.target.innerHTML = `<img src=${circle} alt="circle" />`;
        data[num] = "o";
        setCount(++count);
    }
    checkWinner();
}


    return (
    <div className="container">
        <h1 className="title">Tic Tac Toe</h1>
        <h2 className="winBanner"></h2>
        <div className="gameBoard">
            <div className="row1">
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
    )};

export default TicTacToe;