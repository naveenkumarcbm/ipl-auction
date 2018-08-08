import { Component, OnInit, Input } from '@angular/core';
/**
 *   @author : Naveen kumar
 *   @date : 07-Aug-2018
 *   @class name : PlayerDetailsComponent 
 *      - Players card - Plyers detail View Template file used in the AppComponent 
 *          
 * */
@Component({
  selector: 'player-details',
  template: `
  <div class="card">
  <div class="card-body details">
    <div>
      <img src="src/assets/images/player.png" alt="No Image">
    </div>
    <br>
    <div>
      <span>
        <label>{{player.name}}</label>
        <br>
        <label> Rs. {{player.price | currency:'':'' }}</label>
      </span>
    </div>
    <ul>
      <li><label> Batting Rank:</label><span>{{player.batting}}</span></li>
      <li><label> Bowling Rank:</label><span>{{player.bowling}}</span></li>
      <li><label> All Rounder Rank:</label><span>{{player.allRounder}}</span></li>
    </ul>
  </div>
</div>
  `,
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  constructor() { }

  @Input() player;

  ngOnInit() {
  }

}
