import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';



@NgModule({
  declarations: [
    ModalDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule
  ]
})
export class SharedModule { }
