import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})

export class HomeComponent {
  array = [1, 2, 3, 4];
  list = [{src:'../../assets/images/carousel/1.jpg'},
    {src:'../../assets/images/carousel/2.jpg'},
    {src:'../../assets/images/carousel/3.jpg'},
    {src:'../../assets/images/carousel/4.png'},
    {src:'../../assets/images/carousel/5.jpg'}];
}
