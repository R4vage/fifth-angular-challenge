import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.scss']
})
export class WarningModalComponent implements OnInit {
  @Input() warningText:string = ""
  constructor() { }

  
  ngOnInit(): void {
  }

  /* The modal activates if you input text to the warning */

}
