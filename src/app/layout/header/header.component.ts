import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';

interface menuInfo {
  name: string;
  list?: menuInfo[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzMenuModule, NzLayoutModule, NzDropDownModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  menuList:menuInfo[] = [
    { name: 'HomePage'},
    { name: 'All Courses', list:[{ name: 'Java'},{ name: 'Python'},{ name: 'TypeScript'},]},
    { name: 'Unity', list:[{ name: 'Unity 全部课程'},{ name: 'Unity 高薪就业班'},{ name: 'Unity 学习线路'},]},
    { name: 'Cocos'},
    { name: '小程序'},
    { name: 'AI'},
    { name: '其他'}, 
  ];
}
