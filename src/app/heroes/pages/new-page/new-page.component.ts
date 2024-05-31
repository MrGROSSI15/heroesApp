import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public publishers = [
    { id: 'DC comics', desc: 'dc comics' },
    { id: 'marvel comics', desc: 'marvel comics' },

  ]

}
