import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { JavaComponent } from './home/courses/java/java.component';
import { CoursesComponent } from './home/courses/courses.component';
import { PythonComponent } from './home/courses/python/python.component';
import { TypescriptComponent } from './home/courses/typescript/typescript.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'courses', component:CoursesComponent},
    {path: 'courses/java', component:JavaComponent},
    {path: 'courses/python', component:PythonComponent},
    {path: 'courses/typescript', component:TypescriptComponent},
    {path: '**', component:NotFoundComponent}
];
