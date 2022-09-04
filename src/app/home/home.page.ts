import { Component, OnInit } from '@angular/core';
import { CardData, HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cardData: CardData[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.cardData = this.homeService.getCardData();

    }, 3000);
  }

}
