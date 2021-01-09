class paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            resitution:0.3,
            friction:0.5,
            density:1.2
        }

      this.x = x
      this.y = y
      this.r = r
      this.body=Bodies.circle(this.x,this.y,this.r,options);
      this.y = this.y +1;
      World.add(world,this.body);


    }
display(){
    ellipseMode(RADIUS);
    fill("blue");
    
    circle(this.body.position.x,this.body.position.y, this.r ,this.r);
   
}
}
