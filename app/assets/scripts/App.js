var $ = require("jquery");
import Person from "./modules/Person";
class Adult extends Person {
  payTaxes() {
    console.log(this.name + " Now Pays Taxes")
  }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Doe", "orange");
jane.greet();
jane.payTaxes();

$("h1").remove();