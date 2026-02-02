import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ThemeService } from '../../services/theme.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';

interface menuInfo {
  name: string;
  list?: menuInfo[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzIconModule, NzMenuModule, NzLayoutModule, NzDropDownModule, CommonModule, NzAvatarModule, NzInputModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})

export class HeaderComponent {
  constructor(private themeService: ThemeService) {}

  menuList:menuInfo[] = [
    { name: 'HomePage'},
    { name: 'All Courses', list:[{ name: 'Java'},{ name: 'Python'},{ name: 'TypeScript'},]},
    { name: 'Unity', list:[{ name: 'Unity 全部课程'},{ name: 'Unity 高薪就业班'},{ name: 'Unity 学习线路'},]},
    { name: 'Cocos'},
    { name: '小程序'},
    { name: 'AI'},
    { name: '其他'}, 
  ];

  changeTheme(theme:string) {
    localStorage.setItem('theme', theme);
    this.themeService.change();
  }
}
