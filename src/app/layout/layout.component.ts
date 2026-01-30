import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NzMenuModule, NzLayoutModule, NzDropDownModule, HeaderComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  classObj:object={
    name: "javaScript",
    teacher: "jack",
    link: "www.example.com"
  }
}
