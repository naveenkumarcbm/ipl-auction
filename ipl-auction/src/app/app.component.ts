import { PlayersService } from './services/players.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { players } from '../model/players';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

/**
 * 
 *   @author : Naveen kumar
 *   @date : 07-Aug-2018
 *   @class name : AppComponent 
 *      - Root component for the ipl-auction application
 *      It holds the available and selected player from the jsonData/players.json file   
 * 
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  
  constructor(
    private service: PlayersService,
    private bsService: BsModalService
  ){ }

  @ViewChild('template') modalRef;
  warnModal: BsModalRef;
  avialablePalyers : Array<players> = [];
  selectedPalyers : Array<players> = [];
  selectedIndex = 0;
  dataFrom = 'from';
  warnMsg = '';

  plyMsg = 'You have exceeded the maximum no of players selection';
  budgetMsg = 'You are trying to exceeded the allocated budget for no of players selection, Please redefine your selection';

  budget = 100000;
  used = 0;
  available = 0
  strength = 0;
  
  expression = 'red';
  title = 'IPL Online Team Selection';

  ngOnInit(){
    //Called once, before the initializing the template file.
    this.service.getAllPalyersDetails().subscribe(players => this.avialablePalyers = players);
    this.available = this.budget - this.used;
  }
/**
* This function allows us to select the index 
*   @argument index - selected index from the array
*   @argument store - Availabel array / Selected Array 
**/
  drag(index,store) {
    this.selectedIndex = index;
    this.dataFrom = store;
  }

  /**
   *   Manipulate the list from the drag and drop operation
   *   using the HTML5 drop event
   *  
   **/
  drop(ev) {
    ev.preventDefault();
    if(this.dataFrom == 'from'){
      this.selectedPalyers.push(this.avialablePalyers[this.selectedIndex]);
      this.avialablePalyers.splice(this.selectedIndex,1);
    }else{
      this.avialablePalyers.push(this.selectedPalyers[this.selectedIndex]);
      this.selectedPalyers.splice(this.selectedIndex,1);
    }
    this.calculateBudget();
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  /** 
   * Calculates the Strength and Availabel budget 
   * Based on the Selected list of players 
   *
   **/

  calculateBudget(){
    if(this.validateSelection()){
      let rankCal = 0;
      let totRank = 0;
      this.used = 0;
      this.selectedPalyers.forEach(val =>{
        rankCal = (100 - val.batting) + (100 - val.bowling) + (100 - val.allRounder);
        this.used = this.used + val.price;
        totRank = (totRank) + rankCal;
      });
      this.available = this.budget - this.used;
      this.strength = (totRank)/(this.selectedPalyers.length*3);
      this.strength = Math.round(this.strength * 100) / 100;
      if(this.strength < 50){
        this.expression = 'red';
      }else if(this.strength >50 && this.strength<85){
        this.expression = 'orange'
      }else if(this.strength > 80){
        this.expression = 'green'
      }     
    }
  }

  /**
   *   
   * Validates the budget as 1,00,000 and 
   * No. of players 15 players
   * 
   **/
  validateSelection(){
    let totValue = 0;
    let valid = true;
    if(this.selectedPalyers.length == 15){
      this.warnMsg =this.plyMsg;
      this.warnModal = this.bsService.show(this.modalRef);
      valid = false;
    }
    this.selectedPalyers.forEach(val =>{
      totValue = totValue + val.price;
    });
    if(this.budget - totValue < 0){
      this.warnMsg =this.budgetMsg;
      this.warnModal = this.bsService.show(this.modalRef);
      valid = false;
    }
    return valid;
  }
}
