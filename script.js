let container = document.querySelector("#container");

let btn = document.querySelector("button");


btn.addEventListener('click', ()=>{
    let uin = 0;
    while (uin == 0 || uin > 100){
        uin = prompt("Enter num of box (max :100)");
    }
    container.innerHTML='';
    canvasDraw(uin);
} )
let op = 0.1;
function canvasDraw(pix){
    for(let i = 0; i < pix; i++){
        for (let j = 0;  j < pix; j++){
            let box = document.createElement("div");
            let bsize = 900 / pix;
            console.log(bsize);
            box.className="square";
            box.style.width = `${bsize}px`;
            box.style.height = `${bsize}px`;
            box.id= j+1;
            container.appendChild(box);
    }
}
    let boxes = document.querySelectorAll(".square");
    boxes.forEach(box => {
    box.addEventListener('mouseenter', (e)=>{
        box.style.backgroundColor = colorSelect();
        box.style.opacity = op;
        op += 0.001;
        
     });
     
    });
    rbtn.addEventListener('click', ()=>{
        boxes.forEach(box => {
            box.style.opacity = 1;
            box.style.backgroundColor = "black";
        });
})

};

// func for random color
function colorSelect(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0');
}

let rbtn = document.querySelector("#rb");




canvasDraw(10);