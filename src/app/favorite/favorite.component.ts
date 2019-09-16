import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  faStar = faStar;
  size = 'lg';
  isOn = 0;
  
  constructor() { }

  ngOnInit() {
  }

  changeState()
  {
    if (this.isOn)
    {
      this.isOn = 0;
    } else
    {
      this.isOn = 1;
    }
  }
}
