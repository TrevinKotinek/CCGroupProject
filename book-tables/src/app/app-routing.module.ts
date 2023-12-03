import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { DescPageComponent } from './desc-page/desc-page.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes:Routes = [
    {path:'', redirectTo: '/login', pathMatch: 'full'},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'books/:', component: DescPageComponent },
    {path:'all-books', component:AllBooksComponent},
    {path:'description', component:DescPageComponent},
    {path:'review/:', component:BookReviewComponent},
    {path:'create-review/:', component:CreateReviewComponent},
    {path:'header', component:Headers}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(private router: RouterModule) {}
}
export {routes};