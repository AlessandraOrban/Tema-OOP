import Masina from "./masina.js";

class MasinaDeCurse extends Masina {
    constructor(
        marca,
        model,
        culoare,
        kilometraj,
        pozitiaInCampionat
    ) {
      super(
        marca,
        model,
        culoare,
        kilometraj);
        this.pozitiaInCampionat = pozitiaInCampionat;
    }
  
    participaLaCampionat(pozitiaInCampionat)
     {
      if (pozitiaInCampionat > 0) {
        console.log(`Am castigat locul ${pozitiaInCampionat}.`);
      } else {
        console.log("Nu am castigat niciun premiu.");
      }
    }
}

export default MasinaDeCurse;