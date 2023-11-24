import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { DescPageComponent } from './desc-page/desc-page.component';

const routes:Routes = [
    {path:'', redirectTo: '/all-books', pathMatch: 'full'},
    { path: 'books/:isbn', component: DescPageComponent },
    {path:'all-books', component:AllBooksComponent},
    {path:'description', component:DescPageComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export {routes};