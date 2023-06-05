import { Component, Input } from '@angular/core';

import { Twimp } from '../twimp.model';

@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css']
})
export class TwimpCardComponent {
  @Input() twimp!: Twimp;

  favorite(event: any) :void {
    this.twimp.favorite === true ? this.twimp.favorite = false : this.twimp.favorite = true;
  }
}
