import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
    <!-- <app-user /> -->
    
    <router-outlet />
    `,
  styles: [ `
    main{
      padding: 16px;
    }
    `
    
  ],
})
export class AppComponent {
  title = 'first-angular-projectv2';
}
