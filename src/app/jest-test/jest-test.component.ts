import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock-service.service';

@Component({
  selector: 'app-jest-test',
  templateUrl: './jest-test.component.html',
  styleUrls: ['./jest-test.component.css']
})
export class JestTestComponent implements OnInit {
  data: any;
  constructor(private _getOccupation: MockService) { }

  ngOnInit(): void {
  }

  getOccy() {
    this.data = this._getOccupation.getOccupation();
  }

}
