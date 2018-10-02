import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc-spa';
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();

    this.oktaAuth.$authenticationState.subscribe (
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

}
