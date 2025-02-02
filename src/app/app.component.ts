// import { ChangeDetectorRef, Component } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';
// // import { NgZone, Component } from '@angular/core';
// import { UserService } from './user.service'; 
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';


// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,RouterLink],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'assignment';
//   currentview: string='health-tracker';
//   constructor(private cdr:ChangeDetectorRef){}
//   updateView(newView:string){
//     this.currentview=newView;
//     this.cdr.detectChanges();
//   }
// }


// this
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // 
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService] 
})
export class AppComponent {
  title = 'assignment';
  currentview: string = 'health-tracker';

  constructor(private cdr: ChangeDetectorRef) {}

  updateView(newView: string) {
    this.currentview = newView;
    this.cdr.detectChanges();
  }
}


