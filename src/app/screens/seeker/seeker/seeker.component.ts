import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericService } from 'src/app/shared/genericHttp/generic.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.scss']
})
export class SeekerComponent implements OnInit {

  public Myform!:FormGroup;
  public url:string = environment.url
  public vermas:boolean = false;

  constructor(private fb: FormBuilder , private prd: GenericService) { }

  ngOnInit(): void {
    this.Myform= this.createForm('');
  }

  public createForm(obj:any){
    return this.fb.group({
        nhc:'',
        nombre:'',
        apellido:'',
        curp:''
    })
  }

 public onSubmit() {  
       this.prd.getObject(`${this.url}/PATIENT/dd6fec1b-30e2-4e46-945d-4ec8773d7372/REGISTRY?format=json&token=it4s`).subscribe(resp =>{
        console.log(resp);
       })

  } 

  public get f() {
    return this.Myform.controls;
  }
}
