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
  public arrayJsonBusqueda:any;
  public arrayGlobal:any;

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
    console.log(this.Myform.valid);
    this.Myform.markAllAsTouched();
    let nombre = this.Myform.value.nhc;
  let Suburl = `${this.url}/PATIENT/SEARCH?format=json&token=it4s&firstName=${nombre.trim()}&middleName=&lastName=&gender&brithDate&nationalI`;
         this.prd.getObject(`${Suburl}`).subscribe((resp:any) =>{
            this.buildShowjson(resp);
         })
  
    } 
  
  
  
    public buildShowjson(resp:any){
      if(resp.status==200){
        let patient = [];
        patient= resp.body.patients
        if(!patient)
       


        
        this.arrayJsonBusqueda = [];
        patient.forEach((e:any) => {
          let urlGetFoilio=`${this.url}/PATIENT/${e.patient_id}/REGISTRY?format=json&token=it4s`
         this.prd.getObject(urlGetFoilio).subscribe((resp2:any)=>{
         let obj =  {
            "Nombre": resp2.first_name,
            "Primer_apellido": resp2.middle_name,
            "Segundo_apellido": '',
            "Sexo":'',
            "Fecha_nacimiento": resp2.birth_date
         }
            this.arrayJsonBusqueda.push(resp2.body);
            console.log("BUSQUEDA",this.arrayJsonBusqueda);
         })
        });
  
      }
    }

  public get f() {
    return this.Myform.controls;
  }
}
