import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <!-- <app-user /> -->
    
    
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
