import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultWhenNullPipe } from './pipes/default-when-null.pipe';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SimpleDropdownComponent } from './components/simple-dropdown/simple-dropdown.component';
import { PerformObjectPipe } from './pipes/perform-object.pipe';
import { SimplePaginationComponent } from './components/simple-pagination/simple-pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DefaultWhenNullPipe,
    ProgressBarComponent,
    PaginationComponent,
    SimpleDropdownComponent,
    PerformObjectPipe,
    SimplePaginationComponent,
    
  ],
  exports: [
    FormsModule,
    CommonModule,
    DefaultWhenNullPipe,
    ProgressBarComponent,
    PaginationComponent,
    SimplePaginationComponent,
    SimpleDropdownComponent
  ]
})

export class SharedModule { }
