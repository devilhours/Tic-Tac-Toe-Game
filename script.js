let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector("#reset");
let msg = document.querySelector("#w");
let msgContainer = document.querySelector(".msgContainer");

let turn = true;

const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn) { //player0
            box.innerText = "0";
            turn = false;
        } else { //playerX
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        if(count == 9) {
            msg.innerText = "Draw";
            msgContainer.classList.remove("hide");
        }
    })
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let p of arr) {
        let p1 = boxes[p[0]].innerText;
        let p2 = boxes[p[1]].innerText;
        let p3 = boxes[p[2]].innerText;

        if(p1 != "" && p2 != "" && p3 != "") {
            if(p1 === p2 && p2 === p3) {
                showWinner(p1);
            }
        }
    }
}

newGame.addEventListener("click", resetGame);