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

  constructor(private fb: FormBuilder , private prd: GenericService) { }

  ngOnInit(): void {
    this.Myform= this.createForm('');
  }

  public createForm(obj:any){
    return this.fb.group({
      nombre_sencillo:["" , [Validators.required]],
    })
  }

 public onSubmit() {  
  this.Myform.markAllAsTouched();
       if(!this.Myform.controls['nombre_sencillo'].value) return;
       this.prd.getObject(`${this.url}`).subscribe(resp =>{
        console.log(resp);
       })

  } 

  public get f() {
    return this.Myform.controls;
  }
}
