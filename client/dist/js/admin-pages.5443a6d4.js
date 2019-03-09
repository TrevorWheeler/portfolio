(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin-pages"],{1071:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit--page"},[a("div",{staticClass:"edit--page--container"},[a("div",{staticClass:"project-category-container"},[a("h3",[e._v("Edit "+e._s(e.project.name))])]),a("form",{on:{submit:function(t){t.preventDefault(),e.onSave()}}},[a("fieldset",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.project.name,expression:"project.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:e.project.name},on:{input:function(t){t.target.composing||e.$set(e.project,"name",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.project.description,expression:"project.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:e.project.description},on:{input:function(t){t.target.composing||e.$set(e.project,"description",t.target.value)}}}),a("div",{staticClass:"container"},[a("vue-base64-file-upload",{staticClass:"v1",attrs:{accept:"image/png,image/jpeg","image-class":"v1-image","input-class":"v1-image",placeholder:e.project.image,"max-size":e.customImageMaxSize},on:{"size-exceeded":e.onSizeExceeded,load:e.onLoad}})],1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.project.link,expression:"project.link"}],attrs:{type:"text",placeholder:"link"},domProps:{value:e.project.link},on:{input:function(t){t.target.composing||e.$set(e.project,"link",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.project.repo,expression:"project.repo"}],attrs:{type:"text",placeholder:"repo"},domProps:{value:e.project.repo},on:{input:function(t){t.target.composing||e.$set(e.project,"repo",t.target.value)}}}),a("div",{staticClass:"form--checkbox--container"},[a("label",[e._v("Commercial")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.project.commercial,expression:"project.commercial"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.project.commercial)?e._i(e.project.commercial,null)>-1:e.project.commercial},on:{change:function(t){var a=e.project.commercial,o=t.target,r=!!o.checked;if(Array.isArray(a)){var i=null,c=e._i(a,i);o.checked?c<0&&e.$set(e.project,"commercial",a.concat([i])):c>-1&&e.$set(e.project,"commercial",a.slice(0,c).concat(a.slice(c+1)))}else e.$set(e.project,"commercial",r)}}})]),a("div",{staticClass:"form--checkbox--container"},[a("label",[e._v("Full Stack")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.project.fullStack,expression:"project.fullStack"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.project.fullStack)?e._i(e.project.fullStack,null)>-1:e.project.fullStack},on:{change:function(t){var a=e.project.fullStack,o=t.target,r=!!o.checked;if(Array.isArray(a)){var i=null,c=e._i(a,i);o.checked?c<0&&e.$set(e.project,"fullStack",a.concat([i])):c>-1&&e.$set(e.project,"fullStack",a.slice(0,c).concat(a.slice(c+1)))}else e.$set(e.project,"fullStack",r)}}})]),a("div",{staticClass:"form--checkbox--container"},[a("label",[e._v("Front-End ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.project.frontEnd,expression:"project.frontEnd"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.project.frontEnd)?e._i(e.project.frontEnd,null)>-1:e.project.frontEnd},on:{change:function(t){var a=e.project.frontEnd,o=t.target,r=!!o.checked;if(Array.isArray(a)){var i=null,c=e._i(a,i);o.checked?c<0&&e.$set(e.project,"frontEnd",a.concat([i])):c>-1&&e.$set(e.project,"frontEnd",a.slice(0,c).concat(a.slice(c+1)))}else e.$set(e.project,"frontEnd",r)}}})]),a("div",{staticClass:"form--checkbox--container"},[a("label",[e._v("Back-End ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.project.backEnd,expression:"project.backEnd"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.project.backEnd)?e._i(e.project.backEnd,null)>-1:e.project.backEnd},on:{change:function(t){var a=e.project.backEnd,o=t.target,r=!!o.checked;if(Array.isArray(a)){var i=null,c=e._i(a,i);o.checked?c<0&&e.$set(e.project,"backEnd",a.concat([i])):c>-1&&e.$set(e.project,"backEnd",a.slice(0,c).concat(a.slice(c+1)))}else e.$set(e.project,"backEnd",r)}}})]),a("div",{staticClass:"form--tag--container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.holder,expression:"holder"}],staticClass:"form--tag--input",attrs:{placeholder:"add tag",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'tag'"},domProps:{value:e.holder},on:{input:function(t){t.target.composing||(e.holder=t.target.value)}}}),a("a",{staticClass:"add--tag--btn",on:{click:e.addTag}},[a("svg",{attrs:{viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M42.151 71.25H29.098C27.296 71.25 25.835 69.789 25.835 67.986V3.263C25.835 1.461 27.296 0 29.098 0H42.151C43.954 0 45.415 1.461 45.415 3.263V67.986C45.415 69.789 43.954 71.25 42.151 71.25Z",fill:"black"}}),a("path",{attrs:{d:"M0 42.151V29.098C0 27.296 1.46 25.835 3.263 25.835H67.986C69.788 25.835 71.25 27.296 71.25 29.098V42.151C71.25 43.954 69.788 45.415 67.986 45.415H3.263C1.46 45.415 0 43.954 0 42.151Z",fill:"black"}})])])]),e._l(e.project.tags,function(t,o){return a("div",{key:o,staticClass:"tag",on:{click:function(t){e.removeTag(o)}}},[a("span",[e._v(e._s(t))])])}),a("br"),a("br"),a("br"),a("br"),a("button",{staticClass:"form--submit--button",attrs:{type:"submit"},on:{click:function(t){e.event=!0}}},[e._v(" Submit ")])],2)])])])},r=[],i=(a("b54a"),a("7f7f"),a("ade4")),c=a.n(i),n={props:["id"],components:{VueBase64FileUpload:c.a},data:function(){return{tags:[],holder:"",image:"",base64:"",customImageMaxSize:3}},computed:{project:function(){return this.$store.getters.loadProject(this.id)}},methods:{onSave:function(){this.$store.dispatch("editProject",{id:this.project.id,name:this.project.name,description:this.project.description,tags:this.project.tags,image:this.base64||this.project.image,link:this.project.link,repo:this.project.repo,commercial:this.project.commercial,fullStack:this.project.fullStack,frontEnd:this.project.frontEnd,backEnd:this.project.backEnd}),this.$router.go(-1)},addTag:function(){this.project.tags.push(this.holder),this.holder=[]},removeTag:function(e){this.project.tags.splice(e)},onLoad:function(e){this.base64=e},onSizeExceeded:function(e){alert("Image ".concat(e,"Mb size exceeds limits of ").concat(this.customImageMaxSize,"Mb!"))}}},s=n,l=(a("1b9b"),a("2877")),d=Object(l["a"])(s,o,r,!1,null,null,null);d.options.__file="Edit.vue";t["default"]=d.exports},"1b9b":function(e,t,a){"use strict";var o=a("57ad"),r=a.n(o);r.a},"206d":function(e,t,a){"use strict";var o=a("9cbb"),r=a.n(o);r.a},3169:function(e,t,a){},"57ad":function(e,t,a){},7277:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-project-page"},[a("section",{staticClass:"form--container"},[e._m(0),a("form",{on:{submit:function(t){t.preventDefault(),e.create()}}},[a("fieldset",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"name",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'name'"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{type:"text",placeholder:"description",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'description'"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),a("div",{staticClass:"container"},[a("vue-base64-file-upload",{staticClass:"v1",attrs:{accept:"image/png,image/jpeg","image-class":"v1-image","input-class":"v1-image",placeholder:"image","max-size":e.customImageMaxSize},on:{"size-exceeded":e.onSizeExceeded,load:e.onLoad}})],1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"link"}],attrs:{type:"text",placeholder:"link",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'link'"},domProps:{value:e.link},on:{input:function(t){t.target.composing||(e.link=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.repo,expression:"repo"}],attrs:{type:"text",placeholder:"repo",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'repo'"},domProps:{value:e.repo},on:{input:function(t){t.target.composing||(e.repo=t.target.value)}}}),a("div",{staticClass:"form--checkbox--container"},[a("label",[e._v("Commercial")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.commercial,expression:"commercial"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.commercial)?e._i(e.commercial,null)>-1:e.commercial},on:{change:function(t){var a=e.commercial,o=t.target,r=!!o.checked;if(Array.isArray(a)){var i=null,c=e._i(a,i);o.checked?c<0&&(e.commercial=a.concat([i])):c>-1&&(e.commercial=a.slice(0,c).concat(a.slice(c+1)))}else e.commercial=r}}})]),a("div",{staticClass:"form--checkbox--container"},[a("label",[e._v("Full Stack")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fullStack,expression:"fullStack"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.fullStack)?e._i(e.fullStack,null)>-1:e.fullStack},on:{change:function(t){var a=e.fullStack,o=t.target,r=!!o.checked;if(Array.isArray(a)){var i=null,c=e._i(a,i);o.checked?c<0&&(e.fullStack=a.concat([i])):c>-1&&(e.fullStack=a.slice(0,c).concat(a.slice(c+1)))}else e.fullStack=r}}})]),a("div",{staticClass:"form--checkbox--container"},[a("label",[e._v("Front-End ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.frontEnd,expression:"frontEnd"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.frontEnd)?e._i(e.frontEnd,null)>-1:e.frontEnd},on:{change:function(t){var a=e.frontEnd,o=t.target,r=!!o.checked;if(Array.isArray(a)){var i=null,c=e._i(a,i);o.checked?c<0&&(e.frontEnd=a.concat([i])):c>-1&&(e.frontEnd=a.slice(0,c).concat(a.slice(c+1)))}else e.frontEnd=r}}})]),a("div",{staticClass:"form--checkbox--container"},[a("label",[e._v("Back-End ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.backEnd,expression:"backEnd"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.backEnd)?e._i(e.backEnd,null)>-1:e.backEnd},on:{change:function(t){var a=e.backEnd,o=t.target,r=!!o.checked;if(Array.isArray(a)){var i=null,c=e._i(a,i);o.checked?c<0&&(e.backEnd=a.concat([i])):c>-1&&(e.backEnd=a.slice(0,c).concat(a.slice(c+1)))}else e.backEnd=r}}})]),a("div",{staticClass:"form--tag--container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.holder,expression:"holder"}],staticClass:"form--tag--input",attrs:{placeholder:"tag",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'tag'"},domProps:{value:e.holder},on:{input:function(t){t.target.composing||(e.holder=t.target.value)}}}),a("a",{staticClass:"add--tag--btn",on:{click:e.addTag}},[a("svg",{attrs:{viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M42.151 71.25H29.098C27.296 71.25 25.835 69.789 25.835 67.986V3.263C25.835 1.461 27.296 0 29.098 0H42.151C43.954 0 45.415 1.461 45.415 3.263V67.986C45.415 69.789 43.954 71.25 42.151 71.25Z",fill:"black"}}),a("path",{attrs:{d:"M0 42.151V29.098C0 27.296 1.46 25.835 3.263 25.835H67.986C69.788 25.835 71.25 27.296 71.25 29.098V42.151C71.25 43.954 69.788 45.415 67.986 45.415H3.263C1.46 45.415 0 43.954 0 42.151Z",fill:"black"}})])])]),e._l(e.tags,function(t,o){return a("div",{key:o,staticClass:"tag"},[a("span",[e._v(e._s(t))])])}),a("br"),a("br"),a("br"),a("button",{staticClass:"form--submit--button",attrs:{type:"submit"},on:{click:function(t){e.event=!0}}},[e._v(" Submit ")])],2)])]),a("section",{staticClass:"dashboard--projects"},[e._m(1),e._l(e.projects,function(t,o){return a("div",{key:o,staticClass:"dashboard--projects--item"},[a("p",[e._v(" "+e._s(t.name))]),a("div",{staticClass:"dashboard--projects--edit--delete--container"},[a("router-link",{staticClass:"add--tag--btn",attrs:{to:{name:"edit",params:{id:t.id}}}},[a("svg",{attrs:{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0 14.2525V18.0025H3.75L14.81 6.9425L11.06 3.1925L0 14.2525ZM17.71 4.0425C18.1 3.6525 18.1 3.0225 17.71 2.6325L15.37 0.2925C14.98 -0.0975 14.35 -0.0975 13.96 0.2925L12.13 2.1225L15.88 5.8725L17.71 4.0425V4.0425Z"}})])]),a("a",{staticClass:"add--tag--btn",on:{click:function(a){e.deleteProject(t.id)}}},[a("svg",{attrs:{width:"14",height:"18",viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"}})])])],1)])})],2)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project-category-container"},[a("h3",[e._v("Add New Project")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project-category-container"},[a("h3",[e._v("Current Projects")])])}],i=(a("b54a"),a("7f7f"),a("cadf"),a("551c"),a("097d"),a("ade4")),c=a.n(i),n={name:"dashboard",components:{VueBase64FileUpload:c.a},data:function(){return{name:"",description:"",image:"",link:"",repo:"",commercial:!1,fullStack:!1,frontEnd:!1,backEnd:!1,tags:[],holder:"",customImageMaxSize:3}},computed:{projects:function(){return this.$store.state.projects}},methods:{addTag:function(){this.tags.push(this.holder),this.holder=[]},create:function(){var e={name:this.name,description:this.description,image:this.image,tags:this.tags,link:this.link,repo:this.repo,fullStack:this.fullStack,frontEnd:this.frontEnd,commercial:this.commercial,backEnd:this.backEnd};this.$store.dispatch("createProject",e)},deleteProject:function(e){this.$store.dispatch("deleteProject",e)},onLoad:function(e){this.image=e},onSizeExceeded:function(e){alert("Image ".concat(e,"Mb size exceeds limits of ").concat(this.customImageMaxSize,"Mb!"))}},mounted:function(){this.$store.dispatch("loadProjects")}},s=n,l=(a("b985"),a("2877")),d=Object(l["a"])(s,o,r,!1,null,null,null);d.options.__file="Dashboard.vue";t["default"]=d.exports},"9cbb":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-page"},[a("form",{on:{submit:function(t){t.preventDefault(),e.login()}}},[a("fieldset",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"username",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'username'"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'password'"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("button",{staticClass:"form--submit--button",attrs:{type:"submit"},on:{click:function(t){e.event=!0}}},[e._v("GO")])])])])},r=[],i=(a("cadf"),a("551c"),a("097d"),a("bc3a")),c=a.n(i),n="https://trevorwheeler.dev/api",s={name:"login",data:function(){return{username:"",password:"",error:!1}},computed:{items:function(){return this.$store.getters.loadedProjects}},methods:{func:function(){this.$store.commit("loadProjects")},login:function(){var e=this;c.a.post(n+"/auth/signin",{username:this.username,password:this.password}).then(function(t){return e.loginSuccessful(t)}).catch(function(){return e.loginFailed()})},loginSuccessful:function(e){e.data.token?(console.log(e.data),this.$store.commit("setUser",e.data.username),this.$store.commit("setToken",e.data.token),this.$store.commit("setUserId",e.data.id),console.log(e.data),this.error=!1,this.$router.push("/dashboard")):this.loginFailed()},loginFailed:function(){this.error="Login failed!",delete localStorage.token}}},l=s,d=(a("206d"),a("2877")),p=Object(d["a"])(l,o,r,!1,null,null,null);p.options.__file="Login.vue";t["default"]=p.exports},ade4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),window.FileReader||console.error("Your browser does not support FileReader API!"),t.default={name:"vue-base64-file-upload",props:{imageClass:{type:String,default:""},inputClass:{type:String,default:""},accept:{type:String,default:"image/png,image/gif,image/jpeg"},maxSize:{type:Number,default:10},disablePreview:{type:Boolean,default:!1},fileName:{type:String,default:""},placeholder:{type:String,default:"Click here to upload image"},defaultPreview:{type:String,default:""}},data:function(){return{file:null,preview:null,visiblePreview:!1}},computed:{wrapperStyles:function(){return{position:"relative",width:"100%"}},fileInputStyles:function(){return{width:"100%",position:"absolute",top:0,left:0,right:0,bottom:0,opacity:0,overflow:"hidden",outline:"none",cursor:"pointer"}},textInputStyles:function(){return{width:"100%",cursor:"pointer"}},previewImage:function(){return this.preview||this.defaultPreview}},methods:{onChange:function(e){var t=this,a=e.target.files||e.dataTransfer.files;if(a.length){var o=a[0],r=o.size&&o.size/Math.pow(1e3,2);if(r>this.maxSize)this.$emit("size-exceeded",r);else{this.file=o,this.$emit("file",o);var i=new FileReader;i.onload=function(e){var a=e.target.result;a&&(t.$emit("load",a),t.preview=a)},i.readAsDataURL(o)}}}},template:'\n    <div class="vue-base64-file-upload">\n      <img\n        v-show="previewImage && !disablePreview"\n        :src="previewImage"\n        :class="imageClass" />\n      <div class="vue-base64-file-upload-wrapper" :style="wrapperStyles">\n        <input\n          type="file"\n          @change="onChange"\n          :style="fileInputStyles"\n          :accept=accept />\n        <input\n          type="text"\n          :class="inputClass"\n          :style="textInputStyles"\n          :value="fileName || file && file.name"\n          :placeholder="placeholder"\n          disabled />\n      </div>\n    </div>\n  '}},b985:function(e,t,a){"use strict";var o=a("3169"),r=a.n(o);r.a}}]);
//# sourceMappingURL=admin-pages.5443a6d4.js.map