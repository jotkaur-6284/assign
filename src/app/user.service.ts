
// import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private workouts: any[] = [];

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {
//     if (isPlatformBrowser(this.platformId)) { 
//       const storedWorkouts = localStorage.getItem('workouts');
//       this.workouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];
//     }
//   }

//   addWorkout(workout: any) {
//     this.workouts.push(workout);

//     if (isPlatformBrowser(this.platformId)) { 
//       localStorage.setItem('workouts', JSON.stringify(this.workouts));
//     }
//   }

//   getWorkouts() {
//     return this.workouts;
//   }
// }


// this
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private workouts: any[] = []; // Stores workouts locally

  constructor() {}

  // Add a workout
  addWorkout(workout: { name: string; type: string; duration: number }) {
    this.workouts.push(workout);
  }

  // Get all workouts
  getWorkouts() {
    return this.workouts;
  }
}
