import { Component, OnInit, EventEmitter, Output} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string }>() ;
  @Output() bluePrintCreated = new EventEmitter<{bluePrintName: string, bluePrintContent: string}>() ;
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent });
  }
  onAddBlueprint() {
    this.bluePrintCreated.emit({bluePrintName: this.newServerName, bluePrintContent: this.newServerContent });
  }
}
