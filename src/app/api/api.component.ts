import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent {
  title = 'angular';
  data: Array<any>;

  constructor(private ApiServicio: ApiService) {
    this.data = new Array<any>();
  }
  GetDataFromAPI() {
    this.ApiServicio.getData().subscribe((data) => {
      // console.log(data);
      this.data = data;
    });
  }
}
