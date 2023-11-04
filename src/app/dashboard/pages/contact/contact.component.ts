import { Component, inject } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { ErrorMessage } from '../../interfaces';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  ngAfterViewInit(): void {
    this.isImgLoaded = true;
  }
  private fb = inject(FormBuilder);

  public  isImgLoaded:boolean = false;
  public  emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  public  fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';


  public myForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern(this.fullNamePattern)]],
    email:['',[Validators.required, Validators.pattern(this.emailPattern)]],
    subject:['',[Validators.required,Validators.minLength(3),Validators.maxLength(25),this.emptyField()]],
    message:['',[Validators.required]]
  })


  submitForm(){
    this.myForm.markAllAsTouched();
    if(this.myForm.invalid) return;
  }

  isValidField(field:string){
    return this.myForm.get(field)?.touched &&
    this.myForm.get(field)?.errors;
  }

  showError(field: string):string | null{
    if (!this.myForm.contains(field)) return null;
    const errors = this.myForm.get(field)!.errors || {};

    const errorMessages:ErrorMessage = {
      required: 'This field is required',
      minlength:`Minimun lenght accepted ${errors['minlength']?.requiredLength}`,
      min:`Minimun value accepted ${errors['min']?.min}`,
      pattern:'Invalid format',
      emptyField:'The field must contain characters'
    }

    for (const key of Object.keys(errors)) {
        return errorMessages[key as keyof ErrorMessage];
    }
    return null;
  }

  emptyField():ValidatorFn{

    return (control:AbstractControl)=>{
      if(!control.value)return null;
     return (control.value.trim().length === 0)? {emptyField:true} : null;
    }
  }

  formSubmitAlert(text:string, icon:SweetAlertIcon, timer:number){
    Swal.fire({
      position: 'center',
      icon,
      title: text,
      showConfirmButton: false,
      timer
    })
  }
}
