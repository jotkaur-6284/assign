import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { UserService } from '../user.service';

@Component({
  selector: 'app-health-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './health-tracker.component.html',
  styleUrls: ['./health-tracker.component.css']
})
export class HealthTrackerComponent implements OnInit {
  workouts: any[] = [];
  filteredWorkouts: any[] = [];
  searchQuery: string = '';
  selectedType: string = '';
  currentPage: number = 1;
  pageSize: number = 5; // Items per page
  totalPages = 0;  // Initialize with 0, will be updated after filtering
  // paginatedWorkouts = this.getPaginatedWorkouts();

  get paginatedWorkouts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.workouts.slice(startIndex, startIndex + this.pageSize);
  }

  setPage(page: number) {
    this.currentPage = page;
  }
  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadWorkouts();
  }

  loadWorkouts() {
    this.workouts = this.userService.getWorkouts();
    this.filteredWorkouts = [...this.workouts]; // 
    this.cdr.detectChanges();
  }

  filterWorkouts() {
    this.filteredWorkouts = this.workouts.filter(workout => {
      return (
        (this.searchQuery === '' || workout.name.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
        (this.selectedType === '' || workout.type === this.selectedType)
      );
    });
    this.cdr.detectChanges(); 
  }
}
