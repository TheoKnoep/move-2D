

let map = new Map(); 
console.log(map); 

console.log(map.block['2-3']); 


let chara= new Character(document.querySelector('#character'), map.size); 
console.log(chara); 

listOfActions = {
    "ArrowDown": "down", 
    "ArrowRight": "right", 
    "ArrowUp": "top", 
    "ArrowLeft": "left"
}

window.addEventListener('keydown', event => {
    console.log(event); 
    let action = listOfActions[event.key]; 
    let currentPos = chara.position.x + '-' + chara.position.y; 
    console.log(map.block[currentPos])
    if (map.block[currentPos] && map.block[currentPos].indexOf(action) > -1) { 
        alert('Bloqué'); 
        return "Blocked movement !"; 
    }

    if (event.key === "ArrowDown") { console.log(chara.move('down') )}; 
    if (event.key === "ArrowRight") { console.log(chara.move('right') )}; 
    if (event.key === "ArrowUp") { console.log(chara.move('top') )}; 
    if (event.key === "ArrowLeft") { console.log(chara.move('left') )}; 
})