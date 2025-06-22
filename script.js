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
        let op = parseFloat(box.dataset.opacity) || 0;
        if (op < 1){
            op += 0.05;
            box.dataset.opacity = op;
            box.style.backgroundColor = colorSelect();
            box.style.opacity = op;
        }
        else{
            box.style.backgroundColor = colorSelect();
        }
        
     });
     
    });
    rbtn.addEventListener('click', ()=>{
        boxes.forEach(box => {
           
            box.style.opacity = 1;
            box.style.backgroundColor = "white";
             box.dataset.opacity = 0;
        });
})



};

// func for random color
function colorSelect(){
    if (ctoggle.dataset.enabled === "true"){
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0');
    }
    else{
        return "black";
    }
}

let rbtn = document.querySelector("#rb");
let ctoggle = document.querySelector("#ct");
ctoggle.dataset.enabled = "false";

console.log(ctoggle.dataset.enabled);

// function to toggle colorize
ctoggle.addEventListener('click', ()=>{

    if (ctoggle.dataset.enabled === "true"){
        ctoggle.dataset.enabled = "false";
        ctoggle.textContent = "Colorize OFF";
    }else{
        ctoggle.dataset.enabled = "true";
        ctoggle.textContent = "Colorize ON";
    }
    console.log(ctoggle.dataset.enabled);
});

canvasDraw(10);