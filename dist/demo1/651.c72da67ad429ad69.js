"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[651],{2651:(O,b,l)=>{l.r(b),l.d(b,{UsersModule:()=>F});var d=l(9808),h=l(4521),e=l(5e3);let Z=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-users"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"router-outlet")},directives:[h.lC],styles:[""]}),n})();var p=l(520),v=l(1135),u=l(8746),g=l(1548),U=l(89);let _=(()=>{class n{constructor(t,o){this.http=t,this.authservice=o,this.isLoadingSubject=new v.X(!1),this.isLoading$=this.isLoadingSubject.asObservable()}listUsers(t=null,o=null){this.isLoadingSubject.next(!0);let r=new p.WM({token:this.authservice.token}),i="?T=";return t&&(i+="&search="+t),o&&(i+="&rol="+o),this.http.get(g.$g+"/users/list"+i,{headers:r}).pipe((0,u.x)(()=>this.isLoadingSubject.next(!1)))}register(t){this.isLoadingSubject.next(!0);let o=new p.WM({token:this.authservice.token});return this.http.post(g.$g+"/users/register_admin",t,{headers:o}).pipe((0,u.x)(()=>this.isLoadingSubject.next(!1)))}update(t){this.isLoadingSubject.next(!0);let o=new p.WM({token:this.authservice.token});return this.http.post(g.$g+"/users/update",t,{headers:o}).pipe((0,u.x)(()=>this.isLoadingSubject.next(!1)))}remove(t){this.isLoadingSubject.next(!0);let o=new p.WM({token:this.authservice.token});return this.http.delete(g.$g+"/users/delete/"+t,{headers:o}).pipe((0,u.x)(()=>this.isLoadingSubject.next(!1)))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(p.eN),e.LFG(U.e8))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var f=l(3639),m=l(3811),s=l(3075);function A(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",11)(1,"label",23),e._uU(2,"Profesion"),e.qZA(),e.TgZ(3,"input",44),e.NdJ("ngModelChange",function(r){return e.CHM(t),e.oxw().profession=r}),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.profession)}}function T(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",11)(1,"label",23),e._uU(2,"Descripci\xf3n"),e.qZA(),e.TgZ(3,"textarea",45),e.NdJ("ngModelChange",function(r){return e.CHM(t),e.oxw().description=r}),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.description)}}const k=function(n){return{"background-image":n}};let C=(()=>{class n{constructor(t,o,r){this.userService=t,this.toaster=o,this.modal=r,this.UserC=new e.vpe,this.rol="admin",this.name="",this.surname="",this.email="",this.password="",this.profession="",this.description="",this.IMAGEN_PREVIZUALIZAR="assets/media/avatars/300-6.jpg"}ngOnInit(){}processAvatar(t){if(t.target.files[0].type.indexOf("image")<0)return void this.toaster.open({text:"SOLAMENTE SE ACEPTAN IMAGENES",caption:"VALIDACIONES",type:"danger"});this.FILE_AVATAR=t.target.files[0];let o=new FileReader;o.readAsDataURL(this.FILE_AVATAR),o.onloadend=()=>this.IMAGEN_PREVIZUALIZAR=o.result}save(){if(!(this.name&&this.surname&&this.FILE_AVATAR&&this.email&&this.password))return void this.toaster.open({text:"NECESITAS INGRESAR TODOS LOS CAMPOS",caption:"VALIDACI\xd3N",type:"danger"});let t=new FormData;t.append("avatar",this.FILE_AVATAR),t.append("name",this.name),t.append("surname",this.surname),t.append("email",this.email),t.append("password",this.password),t.append("rol",this.rol),t.append("profession",this.profession),t.append("description",this.description),this.userService.register(t).subscribe(o=>{console.log(o),this.UserC.emit(o.user),this.modal.close(),this.toaster.open({text:"SE REGISTRO UN NUEVO USUARIO",caption:"VALIDACI\xd3N",type:"primary"})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_),e.Y36(f.x7),e.Y36(m.Kz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-users-add"]],outputs:{UserC:"UserC"},decls:71,vars:11,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],[1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","mx-xl-15","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],["id","kt_modal_add_user_scroll","data-kt-scroll","true","data-kt-scroll-activate","{default: false, lg: true}","data-kt-scroll-max-height","auto","data-kt-scroll-dependencies","#kt_modal_add_user_header","data-kt-scroll-wrappers","#kt_modal_add_user_scroll","data-kt-scroll-offset","300px",1,"d-flex","flex-column","scroll-y","me-n7","pe-7"],[1,"fv-row","mb-7"],[1,"d-block","fw-bold","fs-6","mb-5"],["data-kt-image-input","true",1,"image-input","image-input-outline",2,"background-image","url('assets/media/svg/avatars/blank.svg')"],[1,"image-input-wrapper","w-125px","h-125px",3,"ngStyle"],["data-kt-image-input-action","change","data-bs-toggle","tooltip","title","Change avatar",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"bi","bi-pencil-fill","fs-7"],["type","file","name","avatar","accept",".png, .jpg, .jpeg",3,"change"],["type","hidden","name","avatar_remove"],["data-kt-image-input-action","cancel","data-bs-toggle","tooltip","title","Cancel avatar",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"bi","bi-x","fs-2"],["data-kt-image-input-action","remove","data-bs-toggle","tooltip","title","Remove avatar",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"form-text"],[1,"required","fw-bold","fs-6","mb-2"],["type","text","name","name","placeholder","Full name",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["type","text","name","surname","placeholder","Full surname",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["type","email","name","email","placeholder","example@domain.com",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["class","fv-row mb-7",4,"ngIf"],["type","password","name","password","placeholder","*******",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],[1,"mb-7"],[1,"required","fw-bold","fs-6","mb-5"],[1,"d-flex","fv-row"],[1,"form-check","form-check-custom","form-check-solid"],["name","user_role","type","radio","value","0","id","kt_modal_update_role_option_0",1,"form-check-input","me-3",3,"checked","click"],["for","kt_modal_update_role_option_0",1,"form-check-label"],[1,"fw-bolder","text-gray-800"],[1,"text-gray-600"],[1,"separator","separator-dashed","my-5"],["name","user_role","type","radio","value","1","id","kt_modal_update_role_option_1",1,"form-check-input","me-3",3,"checked","click"],["for","kt_modal_update_role_option_1",1,"form-check-label"],[1,"text-center","pt-15"],["type","reset","data-kt-users-modal-action","cancel",1,"btn","btn-light","me-3"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-primary",3,"click"],[1,"indicator-label"],["type","text","name","profession","placeholder","Desarrollador web",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["name","description","id","","cols","30","rows","4",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3,"Add User"),e.qZA(),e.TgZ(4,"div",3),e.NdJ("click",function(){return o.modal.close()}),e.TgZ(5,"span",4),e.O4$(),e.TgZ(6,"svg",5),e._UZ(7,"rect",6)(8,"rect",7),e.qZA()()()(),e.kcU(),e.TgZ(9,"div",8)(10,"form",9)(11,"div",10)(12,"div",11)(13,"label",12),e._uU(14,"Avatar"),e.qZA(),e.TgZ(15,"div",13),e._UZ(16,"div",14),e.TgZ(17,"label",15),e._UZ(18,"i",16),e.TgZ(19,"input",17),e.NdJ("change",function(i){return o.processAvatar(i)}),e.qZA(),e._UZ(20,"input",18),e.qZA(),e.TgZ(21,"span",19),e._UZ(22,"i",20),e.qZA(),e.TgZ(23,"span",21),e._UZ(24,"i",20),e.qZA()(),e.TgZ(25,"div",22),e._uU(26,"Allowed file types: png, jpg, jpeg."),e.qZA()(),e.TgZ(27,"div",11)(28,"label",23),e._uU(29,"Full Name"),e.qZA(),e.TgZ(30,"input",24),e.NdJ("ngModelChange",function(i){return o.name=i}),e.qZA()(),e.TgZ(31,"div",11)(32,"label",23),e._uU(33,"Full Surname"),e.qZA(),e.TgZ(34,"input",25),e.NdJ("ngModelChange",function(i){return o.surname=i}),e.qZA()(),e.TgZ(35,"div",11)(36,"label",23),e._uU(37,"Email"),e.qZA(),e.TgZ(38,"input",26),e.NdJ("ngModelChange",function(i){return o.email=i}),e.qZA()(),e.YNc(39,A,4,1,"div",27),e.YNc(40,T,4,1,"div",27),e.TgZ(41,"div",11)(42,"label",23),e._uU(43,"Password"),e.qZA(),e.TgZ(44,"input",28),e.NdJ("ngModelChange",function(i){return o.password=i}),e.qZA()(),e.TgZ(45,"div",29)(46,"label",30),e._uU(47,"Role"),e.qZA(),e.TgZ(48,"div",31)(49,"div",32)(50,"input",33),e.NdJ("click",function(){return o.rol="admin"}),e.qZA(),e.TgZ(51,"label",34)(52,"div",35),e._uU(53," Administrador"),e.qZA(),e.TgZ(54,"div",36),e._uU(55,"Best for business owners and company administrators"),e.qZA()()()(),e._UZ(56,"div",37),e.TgZ(57,"div",31)(58,"div",32)(59,"input",38),e.NdJ("click",function(){return o.rol="instructor"}),e.qZA(),e.TgZ(60,"label",39)(61,"div",35),e._uU(62," Instructor"),e.qZA(),e.TgZ(63,"div",36),e._uU(64,"Best for developers or people primarily using the API"),e.qZA()()()()()(),e.TgZ(65,"div",40)(66,"button",41),e._uU(67,"Discard"),e.qZA(),e.TgZ(68,"button",42),e.NdJ("click",function(){return o.save()}),e.TgZ(69,"span",43),e._uU(70,"Submit"),e.qZA()()()()()()),2&t&&(e.xp6(16),e.Q6J("ngStyle",e.VKq(9,k,"url("+o.IMAGEN_PREVIZUALIZAR+")")),e.xp6(14),e.Q6J("ngModel",o.name),e.xp6(4),e.Q6J("ngModel",o.surname),e.xp6(4),e.Q6J("ngModel",o.email),e.xp6(1),e.Q6J("ngIf","admin"!=o.rol),e.xp6(1),e.Q6J("ngIf","admin"!=o.rol),e.xp6(4),e.Q6J("ngModel",o.password),e.xp6(6),e.Q6J("checked","admin"==o.rol),e.xp6(9),e.Q6J("checked","instructor"==o.rol))},directives:[s._Y,s.JL,s.F,d.PC,s.Fj,s.JJ,s.On,d.O5],styles:[""]}),n})();function y(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",11)(1,"label",23),e._uU(2,"Profesion"),e.qZA(),e.TgZ(3,"input",44),e.NdJ("ngModelChange",function(r){return e.CHM(t),e.oxw().profession=r}),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.profession)}}function x(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",11)(1,"label",23),e._uU(2,"Descripci\xf3n"),e.qZA(),e.TgZ(3,"textarea",45),e.NdJ("ngModelChange",function(r){return e.CHM(t),e.oxw().description=r}),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.description)}}const w=function(n){return{"background-image":n}};let E=(()=>{class n{constructor(t,o,r){this.userService=t,this.toaster=o,this.modal=r,this.UserE=new e.vpe,this.rol="admin",this.name="",this.surname="",this.email="",this.password="",this.profession="",this.description="",this.IMAGEN_PREVIZUALIZAR="assets/media/avatars/300-6.jpg"}ngOnInit(){this.rol=this.USER.rol,this.name=this.USER.name,this.surname=this.USER.surname,this.email=this.USER.email,this.profession=this.USER.profession,this.description=this.USER.description,this.IMAGEN_PREVIZUALIZAR=this.USER.avatar}processAvatar(t){if(t.target.files[0].type.indexOf("image")<0)return void this.toaster.open({text:"SOLAMENTE SE ACEPTAN IMAGENES",caption:"VALIDACIONES",type:"danger"});this.FILE_AVATAR=t.target.files[0];let o=new FileReader;o.readAsDataURL(this.FILE_AVATAR),o.onloadend=()=>this.IMAGEN_PREVIZUALIZAR=o.result}save(){if(!this.name||!this.surname||!this.email)return void this.toaster.open({text:"NECESITAS INGRESAR TODOS LOS CAMPOS",caption:"VALIDACI\xd3N",type:"danger"});let t=new FormData;t.append("_id",this.USER._id),this.FILE_AVATAR&&t.append("avatar",this.FILE_AVATAR),t.append("name",this.name),t.append("surname",this.surname),t.append("email",this.email),this.password&&t.append("password",this.password),t.append("rol",this.rol),this.profession&&t.append("profession",this.profession),this.description&&t.append("description",this.description),this.userService.update(t).subscribe(o=>{console.log(o),this.UserE.emit(o.user),this.modal.close(),this.toaster.open({text:"SE EDITO EL USUARIO SELECCIONADO",caption:"VALIDACI\xd3N",type:"primary"})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_),e.Y36(f.x7),e.Y36(m.Kz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-users-edit"]],inputs:{USER:"USER"},outputs:{UserE:"UserE"},decls:71,vars:12,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],[1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","mx-xl-15","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],["id","kt_modal_add_user_scroll","data-kt-scroll","true","data-kt-scroll-activate","{default: false, lg: true}","data-kt-scroll-max-height","auto","data-kt-scroll-dependencies","#kt_modal_add_user_header","data-kt-scroll-wrappers","#kt_modal_add_user_scroll","data-kt-scroll-offset","300px",1,"d-flex","flex-column","scroll-y","me-n7","pe-7"],[1,"fv-row","mb-7"],[1,"d-block","fw-bold","fs-6","mb-5"],["data-kt-image-input","true",1,"image-input","image-input-outline",2,"background-image","url('assets/media/svg/avatars/blank.svg')"],[1,"image-input-wrapper","w-125px","h-125px",3,"ngStyle"],["data-kt-image-input-action","change","data-bs-toggle","tooltip","title","Change avatar",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"bi","bi-pencil-fill","fs-7"],["type","file","name","avatar","accept",".png, .jpg, .jpeg",3,"change"],["type","hidden","name","avatar_remove"],["data-kt-image-input-action","cancel","data-bs-toggle","tooltip","title","Cancel avatar",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"bi","bi-x","fs-2"],["data-kt-image-input-action","remove","data-bs-toggle","tooltip","title","Remove avatar",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"form-text"],[1,"required","fw-bold","fs-6","mb-2"],["type","text","name","name","placeholder","Full name",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["type","text","name","surname","placeholder","Full surname",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["type","email","name","email","placeholder","example@domain.com",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["class","fv-row mb-7",4,"ngIf"],["type","password","name","password","placeholder","*******",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],[1,"mb-7"],[1,"required","fw-bold","fs-6","mb-5"],[1,"d-flex","fv-row"],[1,"form-check","form-check-custom","form-check-solid"],["name","user_role","type","radio","value","0","id","kt_modal_update_role_option_0",1,"form-check-input","me-3",3,"checked","click"],["for","kt_modal_update_role_option_0",1,"form-check-label"],[1,"fw-bolder","text-gray-800"],[1,"text-gray-600"],[1,"separator","separator-dashed","my-5"],["name","user_role","type","radio","value","1","id","kt_modal_update_role_option_1",1,"form-check-input","me-3",3,"checked","click"],["for","kt_modal_update_role_option_1",1,"form-check-label"],[1,"text-center","pt-15"],["type","reset","data-kt-users-modal-action","cancel",1,"btn","btn-light","me-3"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-primary",3,"click"],[1,"indicator-label"],["type","text","name","profession","placeholder","Desarrollador web",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["name","description","id","","cols","30","rows","4",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e.NdJ("click",function(){return o.modal.close()}),e.TgZ(5,"span",4),e.O4$(),e.TgZ(6,"svg",5),e._UZ(7,"rect",6)(8,"rect",7),e.qZA()()()(),e.kcU(),e.TgZ(9,"div",8)(10,"form",9)(11,"div",10)(12,"div",11)(13,"label",12),e._uU(14,"Avatar"),e.qZA(),e.TgZ(15,"div",13),e._UZ(16,"div",14),e.TgZ(17,"label",15),e._UZ(18,"i",16),e.TgZ(19,"input",17),e.NdJ("change",function(i){return o.processAvatar(i)}),e.qZA(),e._UZ(20,"input",18),e.qZA(),e.TgZ(21,"span",19),e._UZ(22,"i",20),e.qZA(),e.TgZ(23,"span",21),e._UZ(24,"i",20),e.qZA()(),e.TgZ(25,"div",22),e._uU(26,"Allowed file types: png, jpg, jpeg."),e.qZA()(),e.TgZ(27,"div",11)(28,"label",23),e._uU(29,"Full Name"),e.qZA(),e.TgZ(30,"input",24),e.NdJ("ngModelChange",function(i){return o.name=i}),e.qZA()(),e.TgZ(31,"div",11)(32,"label",23),e._uU(33,"Full Surname"),e.qZA(),e.TgZ(34,"input",25),e.NdJ("ngModelChange",function(i){return o.surname=i}),e.qZA()(),e.TgZ(35,"div",11)(36,"label",23),e._uU(37,"Email"),e.qZA(),e.TgZ(38,"input",26),e.NdJ("ngModelChange",function(i){return o.email=i}),e.qZA()(),e.YNc(39,y,4,1,"div",27),e.YNc(40,x,4,1,"div",27),e.TgZ(41,"div",11)(42,"label",23),e._uU(43,"Password"),e.qZA(),e.TgZ(44,"input",28),e.NdJ("ngModelChange",function(i){return o.password=i}),e.qZA()(),e.TgZ(45,"div",29)(46,"label",30),e._uU(47,"Role"),e.qZA(),e.TgZ(48,"div",31)(49,"div",32)(50,"input",33),e.NdJ("click",function(){return o.rol="admin"}),e.qZA(),e.TgZ(51,"label",34)(52,"div",35),e._uU(53," Administrador"),e.qZA(),e.TgZ(54,"div",36),e._uU(55,"Best for business owners and company administrators"),e.qZA()()()(),e._UZ(56,"div",37),e.TgZ(57,"div",31)(58,"div",32)(59,"input",38),e.NdJ("click",function(){return o.rol="instructor"}),e.qZA(),e.TgZ(60,"label",39)(61,"div",35),e._uU(62," Instructor"),e.qZA(),e.TgZ(63,"div",36),e._uU(64,"Best for developers or people primarily using the API"),e.qZA()()()()()(),e.TgZ(65,"div",40)(66,"button",41),e._uU(67,"Discard"),e.qZA(),e.TgZ(68,"button",42),e.NdJ("click",function(){return o.save()}),e.TgZ(69,"span",43),e._uU(70,"Submit"),e.qZA()()()()()()),2&t&&(e.xp6(3),e.hij("Edit User : ",o.USER.name+" "+(o.USER.surname?o.USER.surname:""),""),e.xp6(13),e.Q6J("ngStyle",e.VKq(10,w,"url("+o.IMAGEN_PREVIZUALIZAR+")")),e.xp6(14),e.Q6J("ngModel",o.name),e.xp6(4),e.Q6J("ngModel",o.surname),e.xp6(4),e.Q6J("ngModel",o.email),e.xp6(1),e.Q6J("ngIf","admin"!=o.rol),e.xp6(1),e.Q6J("ngIf","admin"!=o.rol),e.xp6(4),e.Q6J("ngModel",o.password),e.xp6(6),e.Q6J("checked","admin"==o.rol),e.xp6(9),e.Q6J("checked","instructor"==o.rol))},directives:[s._Y,s.JL,s.F,d.PC,s.Fj,s.JJ,s.On,d.O5],styles:[""]}),n})(),q=(()=>{class n{constructor(t,o,r){this.userService=t,this.toaster=o,this.modal=r,this.UserD=new e.vpe}ngOnInit(){}delete(){this.userService.remove(this.USER._id).subscribe(t=>{console.log(t),this.UserD.emit(""),this.modal.close(),this.toaster.open({text:"SE ELIMINO EL USUARIO",caption:"VALIDACI\xd3N",type:"primary"})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_),e.Y36(f.x7),e.Y36(m.Kz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-users-delete"]],inputs:{USER:"USER"},outputs:{UserD:"UserD"},decls:21,vars:2,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],[1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","mx-xl-15","my-7"],[1,"row"],[1,"col-12"],[1,"text-danger"],[1,"text-center","pt-15"],["type","reset","data-kt-users-modal-action","cancel",1,"btn","btn-light","me-3"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-danger",3,"click"],[1,"indicator-label"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e.NdJ("click",function(){return o.modal.close()}),e.TgZ(5,"span",4),e.O4$(),e.TgZ(6,"svg",5),e._UZ(7,"rect",6)(8,"rect",7),e.qZA()()()(),e.kcU(),e.TgZ(9,"div",8)(10,"div",9)(11,"div",10)(12,"h5",11),e._uU(13),e.qZA()(),e.TgZ(14,"div",10)(15,"div",12)(16,"button",13),e._uU(17,"Cerrar"),e.qZA(),e.TgZ(18,"button",14),e.NdJ("click",function(){return o.delete()}),e.TgZ(19,"span",15),e._uU(20,"Eliminaci\xf3n"),e.qZA()()()()()()()),2&t&&(e.xp6(3),e.hij("Delete User : ",o.USER.name+" "+(o.USER.surname?o.USER.surname:""),""),e.xp6(10),e.hij("\xbfEstas seguro de eliminar este usuario: ",o.USER.email,"?"))},styles:[""]}),n})();function S(n,a){1&n&&e._UZ(0,"span",86)}function M(n,a){1&n&&(e.TgZ(0,"div",109),e._UZ(1,"img",110),e.qZA())}function I(n,a){if(1&n&&(e.TgZ(0,"div",109),e._UZ(1,"img",111),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",t.avatar,e.LSH)}}function L(n,a){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"tr")(2,"td",93)(3,"div",94)(4,"a",95),e.YNc(5,M,2,0,"div",96),e.YNc(6,I,2,1,"div",96),e.qZA()(),e.TgZ(7,"div",97)(8,"a",98),e._uU(9),e.qZA()()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td",99)(17,"div",100)(18,"a",101),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw().editUser(i)}),e.TgZ(19,"span",102),e.O4$(),e.TgZ(20,"svg",7),e._UZ(21,"path",103)(22,"path",104),e.qZA()()(),e.kcU(),e.TgZ(23,"a",105),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw().deleteUser(i)}),e.TgZ(24,"span",102),e.O4$(),e.TgZ(25,"svg",7),e._UZ(26,"path",106)(27,"path",107)(28,"path",108),e.qZA()()()()()(),e.BQk()}if(2&n){const t=a.$implicit;e.xp6(5),e.Q6J("ngIf",!t.avatar),e.xp6(1),e.Q6J("ngIf",t.avatar),e.xp6(3),e.Oqu(t.name+" "+t.surname),e.xp6(2),e.Oqu(t.rol),e.xp6(2),e.hij(" ",t.profession," "),e.xp6(2),e.Oqu(t.email)}}const R=[{path:"",component:Z,children:[{path:"lista",component:(()=>{class n{constructor(t,o){this.modalService=t,this.userService=o,this.USERS=[],this.search="",this.rol=""}ngOnInit(){this.isLoading=this.userService.isLoading$,this.listUser()}listUser(){this.userService.listUsers(this.search,this.rol).subscribe(t=>{console.log(t),this.USERS=t.users})}registerUser(){this.modalService.open(C,{centered:!0,size:"md"}).componentInstance.UserC.subscribe(o=>{console.log(o),this.USERS.unshift(o)})}editUser(t){const o=this.modalService.open(E,{centered:!0,size:"md"});o.componentInstance.USER=t,o.componentInstance.UserE.subscribe(r=>{console.log(r);let i=this.USERS.findIndex(c=>c._id==t._id);-1!=i&&(this.USERS[i]=r)})}deleteUser(t){const o=this.modalService.open(q,{centered:!0,size:"md"});o.componentInstance.USER=t,o.componentInstance.UserD.subscribe(r=>{let i=this.USERS.findIndex(c=>c._id==t._id);-1!=i&&this.USERS.splice(i,1)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.FF),e.Y36(_))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-users-list"]],decls:161,vars:6,consts:[["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],["id","kt_content_container",1,"container-xxl"],[1,"card"],[1,"card-header","border-0","pt-6"],[1,"card-title"],[1,"d-flex","align-items-center","position-relative","my-1"],[1,"svg-icon","svg-icon-1","position-absolute","ms-6"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","17.0365","y","15.1223","width","8.15546","height","2","rx","1","transform","rotate(45 17.0365 15.1223)","fill","currentColor"],["d","M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z","fill","currentColor"],["type","text","data-kt-user-table-filter","search","placeholder","Search user",1,"form-control","form-control-solid","w-250px","ps-14",3,"ngModel","keyup.enter","ngModelChange"],[1,"card-toolbar"],["data-kt-user-table-toolbar","base",1,"d-flex","justify-content-end"],["type","button","data-kt-menu-trigger","click","data-kt-menu-placement","bottom-end",1,"btn","btn-light-primary","me-3"],[1,"svg-icon","svg-icon-2"],["d","M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z","fill","currentColor"],["data-kt-menu","true",1,"menu","menu-sub","menu-sub-dropdown","w-300px","w-md-325px"],[1,"px-7","py-5"],[1,"fs-5","text-dark","fw-bolder"],[1,"separator","border-gray-200"],["data-kt-user-table-filter","form",1,"px-7","py-5"],[1,"mb-10"],[1,"form-label","fs-6","fw-bold"],["data-kt-select2","true","data-placeholder","Select option","data-allow-clear","true","data-kt-user-table-filter","role","data-hide-search","true",1,"form-select","form-select-solid","fw-bolder",3,"ngModel","ngModelChange","change"],["value",""],["value","admin"],["value","instructor"],[1,"d-flex","justify-content-end"],["type","reset","data-kt-menu-dismiss","true","data-kt-user-table-filter","reset",1,"btn","btn-light","btn-active-light-primary","fw-bold","me-2","px-6"],["type","submit","data-kt-menu-dismiss","true","data-kt-user-table-filter","filter",1,"btn","btn-primary","fw-bold","px-6"],["type","button",1,"btn","btn-primary",3,"click"],["opacity","0.5","x","11.364","y","20.364","width","16","height","2","rx","1","transform","rotate(-90 11.364 20.364)","fill","currentColor"],["x","4.36396","y","11.364","width","16","height","2","rx","1","fill","currentColor"],["data-kt-user-table-toolbar","selected",1,"d-flex","justify-content-end","align-items-center","d-none"],[1,"fw-bolder","me-5"],["data-kt-user-table-select","selected_count",1,"me-2"],["type","button","data-kt-user-table-select","delete_selected",1,"btn","btn-danger"],["id","kt_modal_add_user","tabindex","-1","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","mw-650px"],[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],["data-kt-users-modal-action","close",1,"btn","btn-icon","btn-sm","btn-active-icon-primary"],[1,"svg-icon","svg-icon-1"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","mx-xl-15","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],["id","kt_modal_add_user_scroll","data-kt-scroll","true","data-kt-scroll-activate","{default: false, lg: true}","data-kt-scroll-max-height","auto","data-kt-scroll-dependencies","#kt_modal_add_user_header","data-kt-scroll-wrappers","#kt_modal_add_user_scroll","data-kt-scroll-offset","300px",1,"d-flex","flex-column","scroll-y","me-n7","pe-7"],[1,"fv-row","mb-7"],[1,"d-block","fw-bold","fs-6","mb-5"],["data-kt-image-input","true",1,"image-input","image-input-outline",2,"background-image","url('assets/media/svg/avatars/blank.svg')"],[1,"image-input-wrapper","w-125px","h-125px",2,"background-image","url(assets/media/avatars/300-6.jpg)"],["data-kt-image-input-action","change","data-bs-toggle","tooltip","title","Change avatar",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"bi","bi-pencil-fill","fs-7"],["type","file","name","avatar","accept",".png, .jpg, .jpeg"],["type","hidden","name","avatar_remove"],["data-kt-image-input-action","cancel","data-bs-toggle","tooltip","title","Cancel avatar",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"bi","bi-x","fs-2"],["data-kt-image-input-action","remove","data-bs-toggle","tooltip","title","Remove avatar",1,"btn","btn-icon","btn-circle","btn-active-color-primary","w-25px","h-25px","bg-body","shadow"],[1,"form-text"],[1,"required","fw-bold","fs-6","mb-2"],["type","text","name","user_name","placeholder","Full name","value","Emma Smith",1,"form-control","form-control-solid","mb-3","mb-lg-0"],["type","email","name","user_email","placeholder","example@domain.com","value","smith@kpmg.com",1,"form-control","form-control-solid","mb-3","mb-lg-0"],[1,"mb-7"],[1,"required","fw-bold","fs-6","mb-5"],[1,"d-flex","fv-row"],[1,"form-check","form-check-custom","form-check-solid"],["name","user_role","type","radio","value","0","id","kt_modal_update_role_option_0","checked","checked",1,"form-check-input","me-3"],["for","kt_modal_update_role_option_0",1,"form-check-label"],[1,"fw-bolder","text-gray-800"],[1,"text-gray-600"],[1,"separator","separator-dashed","my-5"],["name","user_role","type","radio","value","1","id","kt_modal_update_role_option_1",1,"form-check-input","me-3"],["for","kt_modal_update_role_option_1",1,"form-check-label"],["name","user_role","type","radio","value","2","id","kt_modal_update_role_option_2",1,"form-check-input","me-3"],["for","kt_modal_update_role_option_2",1,"form-check-label"],["name","user_role","type","radio","value","3","id","kt_modal_update_role_option_3",1,"form-check-input","me-3"],["for","kt_modal_update_role_option_3",1,"form-check-label"],["name","user_role","type","radio","value","4","id","kt_modal_update_role_option_4",1,"form-check-input","me-3"],["for","kt_modal_update_role_option_4",1,"form-check-label"],[1,"text-center","pt-15"],["type","reset","data-kt-users-modal-action","cancel",1,"btn","btn-light","me-3"],["type","submit","data-kt-users-modal-action","submit",1,"btn","btn-primary"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"card-body","py-4"],["id","kt_table_users",1,"table","align-middle","table-row-dashed","fs-6","gy-5"],[1,"text-start","text-muted","fw-bolder","fs-7","text-uppercase","gs-0"],[1,""],[1,"text-gray-600","fw-bold"],[4,"ngFor","ngForOf"],[1,"d-flex","align-items-center"],[1,"symbol","symbol-circle","symbol-50px","overflow-hidden","me-3"],["href","#","onclick","return false;"],["class","symbol-label",4,"ngIf"],[1,"d-flex","flex-column"],["href","#","onclick","return false;",1,"text-gray-800","text-hover-primary","mb-1"],[1,"text-end"],[1,"d-flex","justify-content-end","flex-shrink-0"],["href","#","onclick","return false;",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","me-1",3,"click"],[1,"svg-icon","svg-icon-3"],["opacity","0.3","d","M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z","fill","currentColor"],["d","M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z","fill","currentColor"],["href","#","onclick","return false;",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm",3,"click"],["d","M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z","fill","currentColor"],["opacity","0.5","d","M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z","fill","currentColor"],["opacity","0.5","d","M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z","fill","currentColor"],[1,"symbol-label"],["src","assets/media/avatars/300-6.jpg","alt","Emma Smith",1,"w-100"],["alt","Emma Smith",1,"w-100",3,"src"]],template:function(t,o){1&t&&(e.YNc(0,S,1,0,"span",0),e.ALo(1,"async"),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"span",6),e.O4$(),e.TgZ(8,"svg",7),e._UZ(9,"rect",8)(10,"path",9),e.qZA()(),e.kcU(),e.TgZ(11,"input",10),e.NdJ("keyup.enter",function(){return o.listUser()})("ngModelChange",function(i){return o.search=i}),e.qZA()()(),e.TgZ(12,"div",11)(13,"div",12)(14,"button",13)(15,"span",14),e.O4$(),e.TgZ(16,"svg",7),e._UZ(17,"path",15),e.qZA()(),e._uU(18,"Filter"),e.qZA(),e.kcU(),e.TgZ(19,"div",16)(20,"div",17)(21,"div",18),e._uU(22,"Filter Options"),e.qZA()(),e._UZ(23,"div",19),e.TgZ(24,"div",20)(25,"div",21)(26,"label",22),e._uU(27,"Role:"),e.qZA(),e.TgZ(28,"select",23),e.NdJ("ngModelChange",function(i){return o.rol=i})("change",function(){return o.listUser()}),e.TgZ(29,"option",24),e._uU(30,"Todos"),e.qZA(),e.TgZ(31,"option",25),e._uU(32,"Administrador"),e.qZA(),e.TgZ(33,"option",26),e._uU(34,"Instructor"),e.qZA()()(),e.TgZ(35,"div",27)(36,"button",28),e._uU(37,"Reset"),e.qZA(),e.TgZ(38,"button",29),e._uU(39,"Apply"),e.qZA()()()(),e.TgZ(40,"button",30),e.NdJ("click",function(){return o.registerUser()}),e.TgZ(41,"span",14),e.O4$(),e.TgZ(42,"svg",7),e._UZ(43,"rect",31)(44,"rect",32),e.qZA()(),e._uU(45,"Add User"),e.qZA()(),e.kcU(),e.TgZ(46,"div",33)(47,"div",34),e._UZ(48,"span",35),e._uU(49,"Selected "),e.qZA(),e.TgZ(50,"button",36),e._uU(51,"Delete Selected"),e.qZA()(),e.TgZ(52,"div",37)(53,"div",38)(54,"div",39)(55,"div",40)(56,"h2",41),e._uU(57,"Add User"),e.qZA(),e.TgZ(58,"div",42)(59,"span",43),e.O4$(),e.TgZ(60,"svg",7),e._UZ(61,"rect",44)(62,"rect",45),e.qZA()()()(),e.kcU(),e.TgZ(63,"div",46)(64,"form",47)(65,"div",48)(66,"div",49)(67,"label",50),e._uU(68,"Avatar"),e.qZA(),e.TgZ(69,"div",51),e._UZ(70,"div",52),e.TgZ(71,"label",53),e._UZ(72,"i",54)(73,"input",55)(74,"input",56),e.qZA(),e.TgZ(75,"span",57),e._UZ(76,"i",58),e.qZA(),e.TgZ(77,"span",59),e._UZ(78,"i",58),e.qZA()(),e.TgZ(79,"div",60),e._uU(80,"Allowed file types: png, jpg, jpeg."),e.qZA()(),e.TgZ(81,"div",49)(82,"label",61),e._uU(83,"Full Name"),e.qZA(),e._UZ(84,"input",62),e.qZA(),e.TgZ(85,"div",49)(86,"label",61),e._uU(87,"Email"),e.qZA(),e._UZ(88,"input",63),e.qZA(),e.TgZ(89,"div",64)(90,"label",65),e._uU(91,"Role"),e.qZA(),e.TgZ(92,"div",66)(93,"div",67),e._UZ(94,"input",68),e.TgZ(95,"label",69)(96,"div",70),e._uU(97," Administrator"),e.qZA(),e.TgZ(98,"div",71),e._uU(99,"Best for business owners and company administrators"),e.qZA()()()(),e._UZ(100,"div",72),e.TgZ(101,"div",66)(102,"div",67),e._UZ(103,"input",73),e.TgZ(104,"label",74)(105,"div",70),e._uU(106," Developer"),e.qZA(),e.TgZ(107,"div",71),e._uU(108,"Best for developers or people primarily using the API"),e.qZA()()()(),e._UZ(109,"div",72),e.TgZ(110,"div",66)(111,"div",67),e._UZ(112,"input",75),e.TgZ(113,"label",76)(114,"div",70),e._uU(115," Analyst"),e.qZA(),e.TgZ(116,"div",71),e._uU(117,"Best for people who need full access to analytics data, but don't need to update business settings"),e.qZA()()()(),e._UZ(118,"div",72),e.TgZ(119,"div",66)(120,"div",67),e._UZ(121,"input",77),e.TgZ(122,"label",78)(123,"div",70),e._uU(124," Support"),e.qZA(),e.TgZ(125,"div",71),e._uU(126,"Best for employees who regularly refund payments and respond to disputes "),e.qZA()()()(),e._UZ(127,"div",72),e.TgZ(128,"div",66)(129,"div",67),e._UZ(130,"input",79),e.TgZ(131,"label",80)(132,"div",70),e._uU(133," Trial"),e.qZA(),e.TgZ(134,"div",71),e._uU(135,"Best for people who need to preview content data, but don't need to make any updates"),e.qZA()()()()()(),e.TgZ(136,"div",81)(137,"button",82),e._uU(138,"Discard"),e.qZA(),e.TgZ(139,"button",83)(140,"span",84),e._uU(141,"Submit"),e.qZA(),e.TgZ(142,"span",85),e._uU(143,"Please wait... "),e._UZ(144,"span",86),e.qZA()()()()()()()()()(),e.TgZ(145,"div",87)(146,"table",88)(147,"thead")(148,"tr",89)(149,"th",90),e._uU(150,"User"),e.qZA(),e.TgZ(151,"th",90),e._uU(152,"Role"),e.qZA(),e.TgZ(153,"th",90),e._uU(154,"Profesion"),e.qZA(),e.TgZ(155,"th",90),e._uU(156,"Email"),e.qZA(),e.TgZ(157,"th",90),e._uU(158,"Actions"),e.qZA()()(),e.TgZ(159,"tbody",91),e.YNc(160,L,29,6,"ng-container",92),e.qZA()()()()()),2&t&&(e.Q6J("ngIf",e.lcZ(1,4,o.isLoading)),e.xp6(11),e.Q6J("ngModel",o.search),e.xp6(17),e.Q6J("ngModel",o.rol),e.xp6(132),e.Q6J("ngForOf",o.USERS))},directives:[d.O5,s.Fj,s.JJ,s.On,s.EJ,s.YN,s.Kr,s._Y,s.JL,s.F,d.sg],pipes:[d.Ov],styles:[""]}),n})()}]}];let N=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.Bz.forChild(R)],h.Bz]}),n})();var J=l(4619);let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,N,p.JF,s.u5,m.IJ,s.UX,J.vi,m.bz]]}),n})()}}]);