(self.webpackChunkmirage=self.webpackChunkmirage||[]).push([[126],{4126:(t,e,i)=>{"use strict";i.r(e),i.d(e,{SurveyPreviewModule:()=>U});var n=i(2744),o=i(4387),a=i(7927),s=i(4213),r=i.n(s),p=i(4974),g=i(7368),d=i(3604),l=i(2290),u=i(4745),c=i(7762),Z=i(909),h=i(6726),_=i(6239),m=i(1116);function q(t,e){1&t&&(g.TgZ(0,"tr"),g.TgZ(1,"th",26),g._uU(2,"Company"),g.qZA(),g.TgZ(3,"th",27),g._uU(4,"Index SMI"),g.qZA(),g.qZA())}function A(t,e){if(1&t&&(g.TgZ(0,"tr"),g.TgZ(1,"td",28),g._uU(2),g.qZA(),g.TgZ(3,"td",29),g._uU(4),g.qZA(),g.qZA()),2&t){const t=e.$implicit;g.xp6(2),g.Oqu(t.name),g.xp6(2),g.Oqu(t.index_smi_total)}}function T(t,e){1&t&&(g.TgZ(0,"tr"),g.TgZ(1,"td",30),g._uU(2," Data tidak Tersedia "),g.qZA(),g.qZA()),2&t&&(g.xp6(1),g.uIk("colspan",2))}function f(t,e){1&t&&(g.TgZ(0,"tr"),g.TgZ(1,"th",26),g._uU(2,"Company"),g.qZA(),g.TgZ(3,"th",27),g._uU(4,"Strategy"),g.qZA(),g.TgZ(5,"th",27),g._uU(6,"Partnership"),g.qZA(),g.TgZ(7,"th",27),g._uU(8,"Motivation"),g.qZA(),g.TgZ(9,"th",27),g._uU(10,"Competencies"),g.qZA(),g.TgZ(11,"th",27),g._uU(12,"Communication"),g.qZA(),g.TgZ(13,"th",27),g._uU(14,"Technology"),g.qZA(),g.TgZ(15,"th",27),g._uU(16,"Operation"),g.qZA(),g.qZA())}function v(t,e){if(1&t&&(g.TgZ(0,"tr"),g.TgZ(1,"td",28),g._uU(2),g.qZA(),g.TgZ(3,"td",29),g._uU(4),g.qZA(),g.TgZ(5,"td",29),g._uU(6),g.qZA(),g.TgZ(7,"td",29),g._uU(8),g.qZA(),g.TgZ(9,"td",29),g._uU(10),g.qZA(),g.TgZ(11,"td",29),g._uU(12),g.qZA(),g.TgZ(13,"td",29),g._uU(14),g.qZA(),g.TgZ(15,"td",29),g._uU(16),g.qZA(),g.qZA()),2&t){const t=e.$implicit;g.xp6(2),g.Oqu(t.company),g.xp6(2),g.Oqu(t.dimensi_1),g.xp6(2),g.Oqu(t.dimensi_2),g.xp6(2),g.Oqu(t.dimensi_3),g.xp6(2),g.Oqu(t.dimensi_4),g.xp6(2),g.Oqu(t.dimensi_5),g.xp6(2),g.Oqu(t.dimensi_6),g.xp6(2),g.Oqu(t.dimensi_7)}}function k(t,e){1&t&&(g.TgZ(0,"tr"),g.TgZ(1,"td",30),g._uU(2," Data tidak Tersedia "),g.qZA(),g.qZA()),2&t&&(g.xp6(1),g.uIk("colspan",8))}const y=function(){return{width:"100%"}},x=[{path:"",component:(()=>{class t{constructor(t,e,i,n,o){this.activeRoute=t,this.service=e,this.messageService=i,this.route=n,this.helper=o,this.survey_token="8b1c0885-7e54-4cba-ac56-bf0cd111c830",this.answer_token="9f94ff44-aecf-4ffe-b1c9-3dc2b9171d2d",this.infoKop=[],this.list1=[],this.list2=[],this.list3=[],this.data1={labels:[],datasets:[]},this.horizontalOptions={indexAxis:"y",plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}},this.survey_token=this.activeRoute.snapshot.queryParamMap.get("survey_token"),this.answer_token=this.activeRoute.snapshot.queryParamMap.get("answer_token"),this.survey_token&&this.survey_token?(this.getInfoKop(),this.getPositioning(),this.getDimensiPositioning(),this.getOfiUser()):this.route.navigate(["/login"])}ngOnInit(){}getInfoKop(){this.survey_token&&this.answer_token&&this.service.info_kop({survey_token:this.survey_token,answer_token:this.answer_token}).subscribe(t=>{t.data.length>0&&(this.infoKop=t.data,this.infoKop[4].value=new Date(this.infoKop[4].value.replace(" ","T")))},t=>{this.messageService.add({key:"toast-notif",severity:"error",summary:"Error",detail:t.error})})}getPositioning(){this.survey_token&&this.answer_token&&this.service.smi_positioning({survey_token:this.survey_token,answer_token:this.answer_token}).subscribe(t=>{if(t.data.length>0){this.list1=t.data,this.data1={labels:[],datasets:[]};let e=JSON.parse(JSON.stringify(this.list1));e.sort((t,e)=>e.index_smi_total-t.index_smi_total),this.data1.labels=e.map(t=>t.name),this.data1.datasets.push({label:"SMI POSITIONING",backgroundColor:"#42A5F5",data:e.map(t=>t.index_smi_total)})}},t=>{this.messageService.add({key:"toast-notif",severity:"error",summary:"Error",detail:t.error})})}getDimensiPositioning(){this.survey_token&&this.answer_token&&this.service.dimensi_smi_positioning({survey_token:this.survey_token,answer_token:this.answer_token}).subscribe(t=>{t.data.length>0&&(this.list2=t.data,this.radarData={labels:["Strategy","Partnership","Motivation","Competencies","Communication","Technology","Operation"],datasets:[]},this.list2.forEach(t=>{this.radarData.datasets.push({label:t.company.toUpperCase(),backgroundColor:`rgba(${(0,a.GS)()},0.2)`,borderColor:`rgba(${(0,a.GS)()},1)`,data:[t.dimensi_1,t.dimensi_2,t.dimensi_3,t.dimensi_4,t.dimensi_5,t.dimensi_6,t.dimensi_7]})}))},t=>{this.messageService.add({key:"toast-notif",severity:"error",summary:"Error",detail:t.error})})}getOfiUser(){this.survey_token&&this.answer_token&&this.service.ofi_user({survey_token:this.survey_token,answer_token:this.answer_token}).subscribe(t=>{t.data.length>0&&(this.list3=t.data)},t=>{this.messageService.add({key:"toast-notif",severity:"error",summary:"Error",detail:t.error})})}print(){const t=document.getElementById("printArea");r()(t).then(t=>{const e=208*t.height/t.width,i=t.toDataURL("image/png"),n=new p.default("p","mm","a4");n.addImage(i,"PNG",0,0,208,e),n.save("hasil-penilaian-SMI.pdf")})}}return t.\u0275fac=function(e){return new(e||t)(g.Y36(o.gz),g.Y36(d.r),g.Y36(l.ez),g.Y36(o.F0),g.Y36(u.$))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-survey-preview"]],decls:65,vars:26,consts:[["id","printArea",1,"layout-wrapper"],[1,"container-result"],[1,"content"],[1,"kop"],[1,"title-kop"],[2,"font-weight","bold"],[1,"content-kop"],[1,"main-content"],[1,"section_1"],[1,"p-grid","p-fluid"],[1,"p-col-4"],["styleClass","p-datatable-gridlines",3,"value","paginator","rowHover","rows","showCurrentPageReport"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"p-col-8","area-bar"],["type","bar",3,"data","options","height"],[1,"section_2"],[1,"p-col-12"],[2,"display","flex","flex-direction","column","align-items","center"],[1,"p-d-flex","p-justify-center",2,"width","50%"],["type","radar",3,"data","options"],[1,"section_3"],[1,"floating-print"],["pButton","","pRipple","","type","button","icon","pi pi-print","iconPos","left","label","Print",1,"p-button-outlined","p-mr-2","p-mb-2","p-button-custom",3,"click"],[2,"width","60%","text-align","center"],[2,"width","40%","text-align","center"],[2,"text-align","left"],[2,"text-align","right"],[2,"text-align","center"]],template:function(t,e){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"div",2),g.TgZ(3,"div",3),g.TgZ(4,"div",4),g.TgZ(5,"h2"),g._uU(6,"SELF ASESMENT SUISTAINABILITY MATURITY INDEX"),g.qZA(),g.TgZ(7,"p",5),g._uU(8),g.qZA(),g.TgZ(9,"p"),g._uU(10),g.qZA(),g.qZA(),g.TgZ(11,"div",6),g.TgZ(12,"table"),g.TgZ(13,"tr"),g.TgZ(14,"td"),g._uU(15,"Tanggal Asesmen"),g.qZA(),g.TgZ(16,"td"),g._uU(17,":"),g.qZA(),g.TgZ(18,"td"),g._uU(19),g.ALo(20,"date"),g.qZA(),g.qZA(),g.TgZ(21,"tr"),g.TgZ(22,"td"),g._uU(23,"User Asesmen"),g.qZA(),g.TgZ(24,"td"),g._uU(25,":"),g.qZA(),g.TgZ(26,"td"),g._uU(27),g.qZA(),g.qZA(),g.TgZ(28,"tr"),g.TgZ(29,"td"),g._uU(30,"Email"),g.qZA(),g.TgZ(31,"td"),g._uU(32,":"),g.qZA(),g.TgZ(33,"td"),g._uU(34),g.qZA(),g.qZA(),g.qZA(),g._UZ(35,"hr"),g.qZA(),g.qZA(),g.TgZ(36,"div",7),g.TgZ(37,"div",8),g.TgZ(38,"div",9),g.TgZ(39,"div",10),g.TgZ(40,"p-table",11,12),g.YNc(42,q,5,0,"ng-template",13),g.YNc(43,A,5,2,"ng-template",14),g.YNc(44,T,3,1,"ng-template",15),g.qZA(),g.qZA(),g.TgZ(45,"div",16),g._UZ(46,"p-chart",17),g.qZA(),g.qZA(),g.qZA(),g.TgZ(47,"div",18),g.TgZ(48,"div",9),g.TgZ(49,"div",19),g.TgZ(50,"p-table",11),g.YNc(51,f,17,0,"ng-template",13),g.YNc(52,v,17,8,"ng-template",14),g.YNc(53,k,3,1,"ng-template",15),g.qZA(),g.qZA(),g.TgZ(54,"div",19),g.TgZ(55,"div",20),g.TgZ(56,"div",21),g._UZ(57,"p-chart",22),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(58,"div",23),g.TgZ(59,"div",9),g.TgZ(60,"div",19),g.TgZ(61,"label",5),g._uU(62,"Opportunity For Improvement "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(63,"div",24),g.TgZ(64,"button",25),g.NdJ("click",function(){return e.print()}),g.qZA(),g.qZA()),2&t&&(g.xp6(8),g.Oqu(e.infoKop.length>0?e.infoKop[0].value:""),g.xp6(2),g.hij("Sektor ",e.infoKop.length>0?e.infoKop[1].value:"",""),g.xp6(9),g.Oqu(e.infoKop.length>0?g.xi3(20,22,e.infoKop[4].value,"medium"):null),g.xp6(8),g.Oqu(e.infoKop.length>0?e.infoKop[2].value:""),g.xp6(7),g.Oqu(e.infoKop.length>0?e.infoKop[3].value:""),g.xp6(6),g.Q6J("value",e.list1)("paginator",!1)("rowHover",!0)("rows",10)("showCurrentPageReport",!0),g.xp6(6),g.Q6J("data",e.data1)("options",e.horizontalOptions)("height","250"),g.xp6(4),g.Q6J("value",e.list2)("paginator",!1)("rowHover",!0)("rows",10)("showCurrentPageReport",!0),g.xp6(7),g.Akn(g.DdM(25,y)),g.Q6J("data",e.radarData)("options",e.radarOptions))},directives:[c.iA,l.jx,Z.C,h.Hq,_.H],pipes:[m.uU],styles:[".p-datatable-table .p-datatable-thead tr th{color:#fff;background:#099!important}.kop[_ngcontent-%COMP%]{grid-gap:20px;gap:20px}.kop[_ngcontent-%COMP%], .kop[_ngcontent-%COMP%]   .title-kop[_ngcontent-%COMP%]{display:flex;flex-direction:column}.kop[_ngcontent-%COMP%]   .title-kop[_ngcontent-%COMP%]{grid-gap:0;gap:0;align-items:flex-start}.kop[_ngcontent-%COMP%]   .title-kop[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .kop[_ngcontent-%COMP%]   .title-kop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0!important}.kop[_ngcontent-%COMP%]   .content-kop[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:2px solid}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-gap:20px;gap:20px}.area-bar[_ngcontent-%COMP%]{max-height:500px;background:#fff}.floating-print[_ngcontent-%COMP%]{position:fixed;top:0;right:0;background-color:#f1f1f1;padding:10px;box-shadow:0 2px 5px #0003;z-index:99999999}"]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[o.Bz.forChild(x)],o.Bz]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({providers:[l.ez],imports:[[n.I,b]]}),t})()}}]);