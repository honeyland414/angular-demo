import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-java',
  standalone: true,
  imports: [],
  templateUrl: './java.component.html',
  styleUrl: './java.component.less'
})
export class JavaComponent {
  constructor(public router: ActivatedRoute) {
    this.router.queryParams.subscribe(params => {
      console.log(params);
    });
  }
}
