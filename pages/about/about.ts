import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    feet: number;
    inches: number;
    gender: string;
    idealWeight: number;
    robinsonFormula: number;
    millerFormula: number;
    hamwiFormula: number;
    devineFormula: number;
  constructor(public navCtrl: NavController) {

  }
calculateIdealWeight(){

    if (this.gender = "m") {
      this.robinsonFormula = 52 + 1.9 * ((this.feet - 5) + this.inches);
       this.robinsonFormula = parseFloat(this.robinsonFormula.toFixed(0)) + " kg.";
      this.millerFormula = 56.2 + 1.41 * ((this.feet - 5) + this.inches);
       this.millerFormula = parseFloat(this.millerFormula.toFixed(0)) + " kg.";
      this.hamwiFormula = 48 + 2.7  * ((this.feet - 5) + this.inches);
       this.hamwiFormula = parseFloat(this.hamwiFormula.toFixed(0)) + " kg.";
      this.devineFormula = 50 + 2.3  * ((this.feet - 5) + this.inches);
      this.devineFormula = parseFloat(this.devineFormula.toFixed(0)) + " kg.";
    } else if (this.gender = "f") {
      this.robinsonFormula = 49 + 1.7 * ((this.feet - 5) + this.inches);
       this.robinsonFormula = parseFloat(this.robinsonFormula.toFixed(0)) + " kg.";
      this.millerFormula = 53.1 + 1.36 * ((this.feet - 5) + this.inches);
       this.millerFormula = parseFloat(this.millerFormula.toFixed(0)) + " kg."; 
      this.hamwiFormula = 45.5 + 2.2  * ((this.feet - 5) + this.inches);
       this.hamwiFormula = parseFloat(this.hamwiFormula.toFixed(0)) + " kg."; 
      this.devineFormula = 45.5 + 2.3  * ((this.feet - 5) + this.inches);
       this.devineFormula = parseFloat(this.devineFormula.toFixed(0)) + " kg."; 
    } else {
    }
}
}
