import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../service/discount.service';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-discount-add',
  templateUrl: './discount-add.component.html',
  styleUrls: ['./discount-add.component.scss']
})
export class DiscountAddComponent implements OnInit {

  type_discount:number = 1;
  type_segment:number = 1;
  type_campaign:number = 1;
  start_date:any = null;
  end_date:any = null;
  discount:number = 0;
  COURSES:any = [];
  COURSES_SELECTED:any = [];
  CATEGORIES:any = [];
  CATEGORIES_SELECTED:any = [];

  course_id:any = null;
  categorie_id:any = null;

  isLoading$:any;
  constructor(
    public discountService: DiscountService,
    public toaster: Toaster,
  ) { }

  ngOnInit(): void {
    this.isLoading$  = this.discountService.isLoading$;
    this.discountService.ConfigAll().subscribe((resp:any) => {
      console.log(resp);
      this.COURSES = resp.courses;
      this.CATEGORIES = resp.categories;
    })
  }

  save(){

    if(!this.discount || !this.start_date || !this.end_date){
      this.toaster.open({text: 'NECESITAS LLENAR TODOS LOS CAMPOS NECESARIOS',caption: 'VALIDACIÓN',type: 'warning'});
      return;
    }

    if(this.type_segment == 1 &&  this.COURSES_SELECTED.length == 0){
      this.toaster.open({text: 'NECESITAS SELECCIONAR CURSOS',caption: 'VALIDACIÓN',type: 'warning'});
      return;
    }
    if(this.type_segment == 2 &&  this.CATEGORIES_SELECTED.length == 0){
      this.toaster.open({text: 'NECESITAS SELECCIONAR CATEGORIAS',caption: 'VALIDACIÓN',type: 'warning'});
      return;
    }

    let courses_selected_r:any = [];
    let categories_selected_r:any = [];

    let courses_s:any = [];//[""]
    let categories_s:any = [];

    this.COURSES_SELECTED.forEach((element:any) => {
      courses_selected_r.push({
        _id: element._id,
      })
      courses_s.push(element._id);
    });

    this.CATEGORIES_SELECTED.forEach((element:any) => {
      categories_selected_r.push({
        _id: element._id,
      })
      categories_s.push(element._id);
    });
    let data = {
      type_discount: this.type_discount,
      discount: this.discount,
      type_segment: this.type_segment,
      type_campaign: this.type_campaign,
      courses: courses_selected_r,
      categories: categories_selected_r,
      courses_s: courses_s,
      categories_s: categories_s,
      start_date: this.start_date,
      end_date: this.end_date,
      start_date_num: new Date(this.start_date).getTime(),
      end_date_num: new Date(this.end_date).getTime(),
    }

    this.discountService.registerDiscount(data).subscribe((resp:any) => {
      console.log(resp);
      if(resp.message == 403){
        this.toaster.open({text: resp.message_text,caption: 'VALIDACIÓN',type: 'warning'});
      }else{
        this.toaster.open({text: resp.message_text,caption: 'VALIDACIÓN',type: 'primary'});
        this.type_discount = 1;
        this.discount = 0;
        this.type_segment = 1;
        this.type_campaign = 1;
        this.start_date = null;
        this.end_date = null;
        this.COURSES_SELECTED = [];
        this.CATEGORIES_SELECTED = [];
      }
    })

  }

  selectedTypeDiscount(val:number){
    this.type_discount  = val;
  }
  selectedTypeCampaign(val:number){
    this.type_campaign  = val;
  }
  selectedTypeCupon(val:number){
    this.type_segment  = val;
    this.COURSES_SELECTED = [];
    this.CATEGORIES_SELECTED = [];
    this.course_id = '';
    this.categorie_id = '';
  }

  addCourse(){
    if(this.course_id){

      let COURSE_INDEX = this.COURSES.findIndex((item:any) => item._id == this.course_id);

      if(COURSE_INDEX != -1){
        let VALID_EXIT_COURSE = this.COURSES_SELECTED.find((item:any) => item._id == this.course_id);
        if(VALID_EXIT_COURSE){
          this.toaster.open({text: 'NECESITAS SELECCIONAR OTRO CURSO PORQUE YA ESTA EN LA LISTA',caption: 'VALIDACIÓN',type: 'warning'});
          return;
        }else{
          this.COURSES_SELECTED.push(this.COURSES[COURSE_INDEX]);
          this.course_id = '';
        }
      }

    }else{
      this.toaster.open({text: 'NECESITAS SELECCIONAR UN CURSO PARA PODER AGREGARLO',caption: 'VALIDACIÓN',type: 'warning'});
    }
  }
  addCategorie(){

    if(this.categorie_id){

      let CATEGORIE_INDEX = this.CATEGORIES.findIndex((item:any) => item._id == this.categorie_id);

      if(CATEGORIE_INDEX != -1){
        let VALID_EXIT_CATEGORIE = this.CATEGORIES_SELECTED.find((item:any) => item._id == this.categorie_id);
        if(VALID_EXIT_CATEGORIE){
          this.toaster.open({text: 'NECESITAS SELECCIONAR OTRA CATEGORIA PORQUE YA ESTA EN LA LISTA',caption: 'VALIDACIÓN',type: 'warning'});
          return;
        }else{
          this.CATEGORIES_SELECTED.push(this.CATEGORIES[CATEGORIE_INDEX]);
          this.categorie_id = '';
        }
      }

    }else{
      this.toaster.open({text: 'NECESITAS SELECCIONAR UNA CATEGORIA PARA PODER AGREGARLO',caption: 'VALIDACIÓN',type: 'warning'});
    }

  }

  deleteCourse(COURSES_SELEC:any){
    let COURSE_INDEX = this.COURSES_SELECTED.findIndex((item:any) => item._id == COURSES_SELEC._id);
    if(COURSE_INDEX != -1){
      this.COURSES_SELECTED.splice(COURSE_INDEX,1);
    }
  }
  deleteCategorie(CATEGORIES_SELEC:any){
    let COURSE_INDEX = this.CATEGORIES_SELECTED.findIndex((item:any) => item._id == CATEGORIES_SELEC._id);
    if(COURSE_INDEX != -1){
      this.CATEGORIES_SELECTED.splice(COURSE_INDEX,1);
    }
  }

}
