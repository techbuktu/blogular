import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, 
  MatGridListModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [CommonModule,
    MatButtonModule, MatCardModule, 
    MatToolbarModule, MatIconModule, 
    MatGridListModule, MatListModule
  ],
      
  exports: [
    MatButtonModule, MatCardModule, 
    MatToolbarModule, MatIconModule, 
    MatGridListModule, MatListModule],

    declarations: [
      
    ]
})
/*
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
*/
export class MaterialModule { }
