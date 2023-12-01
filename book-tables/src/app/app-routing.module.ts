import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { DescPageComponent } from './desc-page/desc-page.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { CreateReviewComponent } from './create-review/create-review.component';

const routes:Routes = [
    {path:'', redirectTo: '/all-books', pathMatch: 'full'},
    { path: 'books/:', component: DescPageComponent },
    {path:'all-books', component:AllBooksComponent},
    {path:'description', component:DescPageComponent},
    {path:'review/:', component:BookReviewComponent},
    {path:'create-review', component:CreateReviewComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(private router: RouterModule) {}
}
export {routes};