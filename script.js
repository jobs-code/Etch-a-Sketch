let container = document.querySelector("#container");

let btn = document.querySelector("button");


btn.addEventListener('click', ()=>{
    let uin = 0;
    while (uin == 0 || uin > 100){
        uin = prompt("Enter num of box (max :100)");
    }
    canvasDraw(uin);
} )
let op = 0.1;
function canvasDraw(pix){
    for (let i = 0;  i < pix; i++){
        let box = document.createElement("div");
        box.className="square";
        box.id= i+1;
        container.appendChild(box);
    }
    let boxes = document.querySelectorAll(".square");
    boxes.forEach(box => {
    box.addEventListener('mouseenter', (e)=>{
        box.style.backgroundColor = colorSelect();
        box.style.opacity = op;
        op += 0.01;
        
     });
     
    });

};

// func for random color
function colorSelect(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0');
}




