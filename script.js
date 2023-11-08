import Masina from "./masina.js";
import MasinaDeCurse from "./masinaDeCurse.js";

const masina1 = new Masina("VOLVO", "XC-60", "Negru", "234 000");
    const masina2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
    const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");

    const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
    const m2 = new MasinaDeCurse("Ford", "Super", "Albastru", 150000);
  
    console.log(masina1.proprietati());
    console.log(masina2.proprietati());
    console.log(masina3.proprietati());
    console.log(m1.proprietati());
    m1.participaLaCampionat(2);
    console.log(m2.proprietati());
    m2.participaLaCampionat(-1);