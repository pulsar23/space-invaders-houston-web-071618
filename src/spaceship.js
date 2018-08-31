class Spaceship {

  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged",phasersCharge = "uncharged"){
    this.name = name;
    this.crew = crew;
    crew.forEach(function(crewMember){
      console.log(this);
      crewMember.currentShip = this;
    }.bind(this))
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.phasersCharge = phasersCharge;
    this.docked = this.crew.length === 0? true : false ;
  }

}
