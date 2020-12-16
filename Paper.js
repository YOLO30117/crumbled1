class Paper{
    constructor(x,y,r){
        var options = {
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}
    this.mypaper = Bodies.circle(x,y,r/2,options)
    World.add(world,this.mypaper)
   // this.r = r/2
    }
    display(){
    push()
    translate(this.mypaper.position.x,this.mypaper.position.y)
    rectMode(CENTER)
    ellipse(0,0,this.r,this.r)
    pop()
    }
}
