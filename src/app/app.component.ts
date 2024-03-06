import {Component, OnInit} from '@angular/core';
import {accounts, DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  name = "Angular";
  winner: any;
  accountList = accounts;
  isShowEntryBackground = true;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  resetWheel() {
    this.dataService.resetToDefault();
  }

  getResult(result: any[]) {
    console.log('result: ', result);
    if (result && result.length > 0) {
      this.winner = this.accountList.find(acc => acc.account === result[0]);
    } else {
      this.winner = null;
    }
  }

  getBackgroundImage() {
    if (this.winner) {
      return `url(\"../assets/images/${this.winner.background}\")`;
    } else {
      return null;
    }
  }
}
