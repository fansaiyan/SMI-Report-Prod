(self.webpackChunkmirage=self.webpackChunkmirage||[]).push([[623],{8623:(t,e,r)=>{"use strict";r.r(e),r.d(e,{LoginModule:()=>q});var i=r(4387),s=r(1462),o=r(7368),n=r(7511),a=r(8665);let l=(()=>{class t{constructor(t,e){this.ref=t,this.config=e,this.config.closable||(this.config.closable=!1)}ngOnInit(){this.data=this.config.data}ngOnDestroy(){this.ref.close(!0)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(n.E7),o.Y36(n.S))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-popup-loading"]],decls:6,vars:1,consts:[[1,"p-d-flex","p-flex-column"],[1,"p-mb-2","p-as-center"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o._UZ(2,"p-progressSpinner"),o.qZA(),o.TgZ(3,"div",1),o.TgZ(4,"h5"),o._uU(5),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(5),o.Oqu(e.data.message))},directives:[a.G],styles:[".loader[_ngcontent-%COMP%]{border-radius:50%;border:16px solid #f3f3f3;border-top-color:#3498db;width:120px;height:120px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),t})();var c=r(3796),u=r(9624),p=r(2290),g=r(1116),d=r(6726),m=r(9892),f=r(5407),h=r(1146);const Z=function(t,e){return{"layout-dark":t,"layout-light":e}},v=[{path:"",component:(()=>{class t{constructor(t,e,r,i,o,n,a){this.fb=t,this.service=e,this.router=r,this.route=i,this.titleTab=o,this.dialog=n,this.messageService=a,this.titleTab.setTitle("RMI Survey - Login"),this.forms=this.fb.group({login:["",s.kI.required],password:["",s.kI.required],db:"rmi-survey"}),this.initialForm=this.forms.value}ngOnInit(){localStorage.removeItem("roleid"),localStorage.removeItem("menulink"),this.service.logout(),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}onSubmit(){if(this.forms.valid){const t=this.dialog.open(l,{data:{message:"Authentication..."}});this.service.login({jsonrpc:"2.0",params:this.forms.value}).subscribe(e=>{t.close(!0),e.result&&(this.service.storeLocal(e.result),this.router.navigate([this.returnUrl]))},e=>{if(t.close(!0),Array.isArray(e.error.error))for(var r=0;r<e.error.error.length;r++)this.messageService.add({key:"toast-notif",severity:"error",summary:"Error",detail:e.error.error[r]});else this.messageService.add({key:"toast-notif",severity:"error",summary:"Error",detail:e.error})})}}ngOnDestroy(){this.forms.reset(this.initialForm)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(s.qu),o.Y36(c.$),o.Y36(i.F0),o.Y36(i.gz),o.Y36(u.Dx),o.Y36(n.xA),o.Y36(p.ez))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:32,vars:5,consts:[[1,"login-body",3,"ngClass"],[1,"login-content"],[1,"night-switch"],["styleClass","dark-switch","icon","pi pi-circle-on",3,"click"],["styleClass","light-switch","icon","pi pi-circle-off",3,"click"],[1,"login-panel"],[1,"login-panel-content"],[1,"logo"],[3,"formGroup","submit"],[1,"forms"],[1,"login-input-wrapper"],["for","username"],["id","username","pInputText","","placeholder","Type your username...","formControlName","login"],[1,"pi","pi-user"],["for","password"],["type","password","id","password","placeholder","Type your password","pPassword","","formControlName","password"],[1,"pi","pi-lock"],[1,"buttons"],["pButton","","type","submit","label","Login"],[2,"margin-top","50px"],[1,"desert"],["key","toast-notif"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"p-button",3),o.NdJ("click",function(){return e.dark=!0}),o.qZA(),o.TgZ(4,"p-button",4),o.NdJ("click",function(){return e.dark=!1}),o.qZA(),o.qZA(),o.TgZ(5,"div",5),o.TgZ(6,"div",6),o._UZ(7,"div",7),o.TgZ(8,"h1"),o._uU(9,"Sign in to Risk Maturity Institute"),o.qZA(),o.TgZ(10,"p"),o._uU(11,"Welcome, please use the form to sign-in Risk Maturity Institute"),o.qZA(),o.TgZ(12,"form",8),o.NdJ("submit",function(){return e.onSubmit()}),o.TgZ(13,"div",9),o.TgZ(14,"div",10),o.TgZ(15,"label",11),o._uU(16,"Username"),o.qZA(),o._UZ(17,"input",12),o._UZ(18,"i",13),o.qZA(),o.TgZ(19,"div",10),o.TgZ(20,"label",14),o._uU(21,"Password"),o.qZA(),o._UZ(22,"input",15),o._UZ(23,"i",16),o.qZA(),o.TgZ(24,"div",17),o._UZ(25,"button",18),o.qZA(),o.qZA(),o.qZA(),o.TgZ(26,"div",19),o.TgZ(27,"p"),o.TgZ(28,"marquee"),o._uU(29,"@Copyright 2024"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o._UZ(30,"div",20),o.qZA(),o.qZA(),o._UZ(31,"p-toast",21)),2&t&&(o.Q6J("ngClass",o.WLB(2,Z,e.dark,!e.dark)),o.xp6(12),o.Q6J("formGroup",e.forms))},directives:[g.mk,d.zx,s._Y,s.JL,s.sg,s.Fj,m.o,s.JJ,s.u,f.QK,d.Hq,h.FN],styles:[".waviy[_ngcontent-%COMP%], .waviy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative}.waviy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:14px;color:#1c9ce5;text-transform:uppercase;animation:flip 2s infinite;animation-delay:calc(.2s * var(--i))}@keyframes flip{0%,80%{transform:rotateY(1turn)}}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.Bz.forChild(v)],i.Bz]}),t})();var b=r(1264);let q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[p.ez],imports:[[b.I,y]]}),t})()}}]);