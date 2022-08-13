import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AsyncValidator } from './custom-validator/asyncValidator';
import { EmpIDValidator } from './custom-validator/empID';
import { ForbiddenNameValidator } from './custom-validator/forbiddenName';
import { NoSpaceAllowValidator } from './custom-validator/noSpace';
import { CustomRegex } from './shared/validators-regax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ReactiveForms';
  genders: string[] = ["Female", "Male", "Others"];
  signUpForm!: FormGroup;
  typeProp :string = "password";

  ngOnInit(): void {
    this.createSignUpForm();
    this.signUpForm.valueChanges
                      .subscribe((data)=>{
                        if(this.getPassword.valid){
                          this.getConfirmPass.enable({emitEvent : false});
                        }
                      })
  }

  createSignUpForm() {
    this.signUpForm = new FormGroup({
      "userDetails": new FormGroup({
        // 'userName': new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.textOnly)]),
        'userName': new FormControl(null, [Validators.required, NoSpaceAllowValidator.spaceNotAllow]),
        'empID' : new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4), EmpIDValidator.checkEmpID]),
        // 'email': new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
        'email': new FormControl(null, [Validators.required, 
                                        Validators.pattern(CustomRegex.email), 
                                        ForbiddenNameValidator.forbiddName,
                                        // AsyncValidator.forbiddenEmail
                                      ]),
      }),
      'gender': new FormControl(null),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confirmPass' : new FormControl({value : null, disabled : true}, [Validators.required, Validators.minLength(8)]),
      'skills': new FormArray([]),
    })
  }

  onSubmit() {
    console.log(this.signUpForm)
    console.log(this.signUpForm.value)
    // this.signUpForm.reset();
  }

  onAddSkill(){
    if(this.getSkillsArray.length < 5){
      this.getSkillsArray.push(new FormControl(null));
    }
  }

  onDeleteSkill(i : number){
    this.getSkillsArray.removeAt(i);
  }

  // onShowPassword(){
  //   if(this.typeProp === "password"){
  //     return this.typeProp = "text";
  //   } else{
  //     return this.typeProp = "password";
  //   }
  // }


  get getUserNameControl() {
    return this.signUpForm.get('userDetails.userName') as FormControl;
  }

  get getEmpIDControl() {
    return this.signUpForm.get('userDetails.empID') as FormControl;
  }

  get getEmailControl() {
    return this.signUpForm.get('userDetails.email') as FormControl;
  }

  get getSkillsArray(){
    return this.signUpForm.get('skills') as FormArray;
  }

  get getPassword(){
    return this.signUpForm.get('password') as FormControl;
  }

  get getConfirmPass(){
    return this.signUpForm.get('confirmPass') as FormControl;
  }

  get fControls(){
    return this.signUpForm.controls; // to get all control into it
  }
}
