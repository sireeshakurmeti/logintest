import { generateForwardRef } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validator, Validators } from '@angular/forms';





@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    firstname : new FormControl("", [Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    lastname : new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    email : new FormControl("", [Validators.required,Validators.email]),
    mobile : new FormControl("", [Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    gender : new FormControl(""),
    pwd : new FormControl(""),
    rpwd : new FormControl("")
 });
 registersubmited(){
  console.log(this.registerForm.get("firstname"));
 }
 get FirstName(): FormControl{
  return this.registerForm.get("firstname") as FormControl;
 }
 get lastName(): FormControl{
  return this.registerForm.get("LastName") as FormControl;
 }
 get Email(): FormControl{
  return this.registerForm.get("email") as FormControl;
 }
 get Mobile(): FormControl{
  return this.registerForm.get("mobile") as FormControl;
 }
 get Gender(): FormControl{
  return this.registerForm.get("gender") as FormControl;
 }
 get pwd(): FormControl{
  return this.registerForm.get("pwd") as FormControl;
 }
}

