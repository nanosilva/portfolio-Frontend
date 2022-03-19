import { Component, OnInit } from '@angular/core';
import { pencilFill } from 'ngx-bootstrap-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pencilfill= pencilFill
  

  constructor() { }

  ngOnInit(): void {
  }

}
