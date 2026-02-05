import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ThemeService } from '../../services/theme.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Router } from '@angular/router';

interface menuInfo {
  name: string;
  path: string;
  list?: menuInfo[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzIconModule, NzMenuModule, NzLayoutModule, NzDropDownModule, CommonModule, NzAvatarModule, NzInputModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})

export class HeaderComponent {
  constructor(private themeService: ThemeService, private router: Router) {}

  menuList:menuInfo[] = [
    { name: 'HomePage', path: ''},
    { name: 'All Courses', path: '/courses', list:[{ name: 'Java', path: '/courses/java'}, { name: 'Python', path: '/courses/python'}, { name: 'TypeScript', path: '/courses/typescript'},]},
    { name: 'Unity', path: '/unity', list:[{ name: 'Unity 全部课程', path: '/unity/all-course'},{ name: 'Unity 高薪就业班', path: '/unity/high-salary-class'},{ name: 'Unity 学习线路', path: '/unity/study-path'},]},
    { name: 'Cocos', path: '/cocos',},
    { name: '小程序', path: '/miniprogram'},
    { name: 'AI', path: '/ai'},
    { name: '其他', path: '/other'}
  ];

  changeTheme(theme:string) {
    localStorage.setItem('theme', theme);
    this.themeService.change();
  }

  goToPage(path: string) {
    this.router.navigate([path]);
  }
}
