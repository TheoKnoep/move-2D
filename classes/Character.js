class Character {
    constructor(domElt, canevas) {
        this.canevas = canevas; 
        this.sprite = null; 
        this.position = {x: 0, y: 0}; 
        this.orientation = 'down'; 
        this.domElt = domElt; 
    }


    move(direction) {
        let authorizedMoves = [4,8,6,2, 'top', 'left', 'right', 'down']; 
        if (authorizedMoves.indexOf(direction) === -1) { throw new Error("Unauthorized move") }

        if (direction === 8 || direction === 'top') {
            this.orientation = 'top'; 
            this.position.y = Math.min(this.canevas.y, this.position.y + 1); 
        }
        if (direction === 2 || direction === 'down') {
            this.orientation = 'down'; 
            this.position.y = Math.max(0, this.position.y - 1); 
        }
        if (direction === 6 || direction === 'right') {
            this.orientation = 'right'; 
            this.position.x = Math.min(this.canevas.x, this.position.x + 1); 
        }
        if (direction === 4 || direction === 'left') {
            this.orientation = 'left'; 
            this.position.x = Math.max(0, this.position.x - 1); 
        }
        this.applyPositionInHTML(); 
        return 'new position : ', this.position; 

    } 

    applyPositionInHTML() {
        this.domElt.style.bottom = `${((100/this.canevas.y)*this.position.y) - ((100/this.canevas.y)/2)}%`; 
        this.domElt.style.left = `${((100/this.canevas.x)*this.position.x) - ((100/this.canevas.x)/2)}%`; 
    }
}