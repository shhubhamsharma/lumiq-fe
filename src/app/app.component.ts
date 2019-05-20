import { Component } from '@angular/core';
import { DataService } from './api/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lumiq-fe';
  code: string;
  superHeroName = '';
  constructor(private api: DataService) {
    this.code = '';
  }
  name(num) {
    this.code = this.code + num;
  }
  call() {
    this.api.callSuperHero({ code: Number(this.code) }).subscribe(r => {
      this.superHeroName = !!r[0] ? r[0] : 'Incorrect Code';
    });
  }
  clear() {
    this.code = '';
  }

}
