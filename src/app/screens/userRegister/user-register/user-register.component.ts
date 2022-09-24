import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {


  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.createform();
  }


  public createform() {
    return this.fb.group({
      nombre: '',
      apellido: '',
      curp: '',
      fechanacimiento: '',
      sexo: '',
    });
  }

  enviar() {
    console.log("datos enviar", this.myForm.value);
  }

}
