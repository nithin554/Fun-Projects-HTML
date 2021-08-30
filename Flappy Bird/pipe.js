class Pipe{
    constructor(x,y,height,dir){
        this.x = x;
        this.y = y;
        this.height = height;
        this.dir = dir;
    }
    draw(){
        if(x<0){
            ctx.clearRect(this.x+1.5,this.y,20,this.height);
            return;
        }
        ctx.clearRect(this.x+1.5,this.y,21,this.height);
        ctx.fillRect(this.x, this.y, 20, this.height);
    }
    hits(dy){
        if(dy+(this.dir*15) >= this.y && dy+(this.dir*15) <= this.height + this.y){
            if(this.x <= 65 && this.x >= 15){
                ctx.fillStyle = 'red'
                ctx.fillRect(this.x, this.y, 22, this.height);
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
}