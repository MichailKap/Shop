(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-468a9e08"],{"364e":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),e("div",{staticClass:"container"},[e("div",{staticClass:"promotions"},[e("h2",{staticClass:"promotions__title title"},[t._v("Акции")]),e("div",{staticClass:"promotions__items"},t._l(t.promotions,(function(s){return e("div",{key:s.id,staticClass:"promotions__item item"},[e("img",{staticClass:"item__image",attrs:{src:i("ac4a")("./"+s.image),alt:"Картинка акции"}}),e("div",{staticClass:"item__content"},[e("p",{staticClass:"item__title"},[t._v(t._s(s.title))]),e("p",{staticClass:"item__text"},[t._v(t._s(s.text))]),e("div",{staticClass:"item__end-time end-time"},[e("p",{staticClass:"end-time__text"},[t._v(t._s(s.endTimeText))]),e("p",{staticClass:"end-time__number"},[t._v(t._s(t.days))]),e("span",[t._v(":")]),e("p",{staticClass:"end-time__number"},[t._v(t._s(t.hours))]),e("span",[t._v(":")]),e("p",{staticClass:"end-time__number"},[t._v(t._s(t.minutes))]),e("span",[t._v(":")]),e("p",{staticClass:"end-time__number"},[t._v(t._s(t.seconds))])])])])})),0)])]),e("Footer")],1)},n=[],a=i("0418"),o=i("fd2d"),r={components:{Header:a["a"],Footer:o["a"]},data:function(){return{seconds:10,minutes:1,hours:1,days:1,promotions:[{id:1,image:"citrus.jpg",title:"Скидки на цитрусовые",text:"Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста.",endTimeText:"До конца акции:"}]}},mounted:function(){this.startTimer()},methods:{startTimer:function(){var t=this;setInterval((function(){t.seconds--}),1e3)}},watch:{seconds:function(){this.seconds<0&&(this.seconds+=60,0==this.days&&0==this.hours&&0==this.minutes&&(this.seconds=0)),59==this.seconds&&this.minutes--},minutes:function(){this.minutes<0&&(this.minutes+=60,0==this.days&&0==this.hours&&(this.minutes=0)),59==this.minutes&&this.hours--},hours:function(){this.hours<0&&(this.hours+=24,0==this.days&&(this.hours=0)),23==this.hours&&this.days--},days:function(){this.days<0&&(this.days=0)}}},c=r,u=(i("9122"),i("2877")),d=Object(u["a"])(c,e,n,!1,null,"f0bd5212",null);s["default"]=d.exports},5320:function(t,s,i){},9122:function(t,s,i){"use strict";var e=i("5320"),n=i.n(e);n.a},ac4a:function(t,s,i){var e={"./citrus.jpg":"dd97"};function n(t){var s=a(t);return i(s)}function a(t){if(!i.o(e,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e[t]}n.keys=function(){return Object.keys(e)},n.resolve=a,t.exports=n,n.id="ac4a"},dd97:function(t,s,i){t.exports=i.p+"img/citrus.d8bcdb08.jpg"}}]);
//# sourceMappingURL=chunk-468a9e08.e305950d.js.map