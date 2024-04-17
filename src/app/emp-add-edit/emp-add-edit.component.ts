import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-emp-add-edit',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class EmpAddEditComponent {

  empForm: FormGroup;

  educations: any[] = [
    { value: 'matric', viewValue: 'Matric' },
    { value: 'diploma', viewValue: 'Diploma' },
    { value: 'intermediate', viewValue: 'Intermediate' },
    { value: 'graduate', viewValue: 'Graduate' },
    { value: 'post_graduate', viewValue: 'Post Graduate' },

  ];

  constructor(
    public dialogRef: MatDialogRef<EmpAddEditComponent>,
    private _fb: FormBuilder,
    private _empService: EmployeeService
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''
    });
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          console.log(val);
          console.log("Employee addedd successfully...");
          this.closeDialog();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      this.closeDialog();
      console.log("Form validation failed.");
    }
  }

}
