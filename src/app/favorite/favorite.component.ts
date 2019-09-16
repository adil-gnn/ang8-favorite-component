import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  faStar = faStar;
  size = 'lg';
  @Input('is-selected') isOn :boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeState()
  {
    this.isOn = !this.isOn;
    this.change.emit();
  }
}
