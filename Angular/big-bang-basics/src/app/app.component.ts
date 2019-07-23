import { Component } from '@angular/core';

@Component({
  selector: 'lovelace-root',
  template: `
  <NavBar></NavBar>
  <events-list></events-list>
  `
})
export class MsLovelace {
  title = 'big-bang-basics';
}
