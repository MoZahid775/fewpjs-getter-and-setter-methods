// Add your Circle class here
class Circle{

     constructor(radius){

        this.radius = radius
    }


    set diameter(diameter){
    this.radius = diameter/2
    }

    set circumference(circumference){
    
    let diameter= circumference/Math.PI
    this.radius = diameter/2
    }

    set area(area){
    
    let areaDivPi = area/Math.PI
    this.radius = Math.sqrt(areaDivPi)
    }



    get diameter(){
        return this.radius*2
    }
    
    get circumference(){

        return 2*Math.PI*this.radius
    }

    get area(){
        let piSquared = Math.pow(this.radius, 2)
        return Math.PI*piSquared
    }







}