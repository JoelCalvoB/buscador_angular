import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GenericService } from 'src/app/shared/genericHttp/generic.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-busquedaexpediente',
  templateUrl: './busquedaexpediente.component.html',
  styleUrls: ['./busquedaexpediente.component.scss']
})
export class BusquedaexpedienteComponent implements OnInit {

  public Myform!:FormGroup;
  public url:string = environment.url
  public vermas:boolean = false;
  public arrayJsonBusqueda:any = [];
  public arrayGlobal:any;
  public noseencontraron:boolean = false;
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
    this.arrayJsonBusqueda = []
    console.log(this.Myform.valid);
    this.Myform.markAllAsTouched();
    let id_nhc = this.Myform.value.nhc;
    if(!id_nhc) return;
  this.buildShowjson(id_nhc);
    } 


    public buildShowjson(param:any){  
          let urlGetFoilio=`${this.url}/PATIENT/${param}/REGISTRY?format=json&token=it4s`;
          this.prd.getObject(urlGetFoilio).subscribe((resp2:any)=>{
            debugger;
            if(resp2.status==200){
              let obj =  {
                "Nombre": resp2.first_name,
                "Primer_apellido": resp2.middle_name,
                "Segundo_apellido": '',
                "Sexo":'',
                "Fecha_nacimiento": resp2.birth_date
             }
                this.arrayJsonBusqueda.push(resp2.body);
                console.log("BUSQUEDA",this.arrayJsonBusqueda);
                this.noseencontraron=false;
            }
         
          }, error =>{
            this.noseencontraron=true;
          });
        }
  
   

  public get f() {
    return this.Myform.controls;
  }
}