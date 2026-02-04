import { Component } from '@angular/core';
import { NzResultModule } from 'ng-zorro-antd/result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NzResultModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.less'
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['']); // Navigate to home page
  }
}
