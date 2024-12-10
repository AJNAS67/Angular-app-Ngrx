import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent implements OnInit{
  postForm!:FormGroup;
  constructor(private fb:FormBuilder){
    
  }
  ngOnInit(): void {
    this.postForm=new FormGroup({
      title:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      description:new FormControl(null,[Validators.required,Validators.minLength(10)])
    })
  }

  addOnPost(){
    console.log(this.postForm.value,'form value');
    
  }
  showDescriptionError(){
    const descriptionForm=this.postForm.get('description')
    if(!descriptionForm?.valid && descriptionForm?.touched){
      if(descriptionForm?.errors?.['required']){
        return 'Description is required'
        
      }
      console.log(descriptionForm.errors,'rr');
      if(descriptionForm?.errors?.['minlength']){
        return 'Description should be min 10 character'
      }
    }
    return ''

  }
}
// showDescriptionError(){
//   const descriptionForm=this.postForm.get('description')
//   if(descriptionForm?.touched && !descriptionForm.valid){
//     console.log(descriptionForm,'form');
    
//     return 'Min 6 character required'
//   }

// }
