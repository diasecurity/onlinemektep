(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f67ecc2"],{"0120":function(t,i,s){t.exports=s.p+"spa/img/bilimland_logo.25065fae.svg"},"0235":function(t,i,s){"use strict";s("463d")},"25c2":function(t,i,s){t.exports=s.p+"spa/img/admin_block.cf948d38.png"},2798:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"ol-news-card",on:{click:t.openArticle}},[s("div",{staticClass:"ol-news-card__preview"},[s("img",{attrs:{loading:"lazy",src:t.imgUrl,alt:t.title}})]),s("div",{staticClass:"ol-news-card__description"},[t._v(t._s(t.title))]),s("div",{staticClass:"ol-news-card__footer"},[t.origin.label?s("div",{staticClass:"ol-news-card__monrk mr-auto"},[t._v(" "+t._s(t.trans("spa.label.from_origin_short"))+": "+t._s(t.origin.label)+" ")]):t._e(),s("div",{staticClass:"ol-news-card__date ml-auto"},[s("span",{staticClass:"ol-ico ol-ico--fa ol-ico--thm-calendar-alt"}),s("span",{staticStyle:{"margin-left":".5rem"}},[t._v(t._s(t.getPublishDate))])])])])},a=[],n=s("5530"),l=(s("a9e3"),s("c1df")),o=s.n(l),r=s("2f62"),c={name:"VNewsCard",props:{articleId:Number,title:String,imgUrl:String,publishedAt:String,origin:Object,slug:String},computed:Object(n["a"])(Object(n["a"])({},Object(r["c"])(["isLoggedIn"])),{},{getPublishDate:function(){return o()(this.publishedAt,"YYYY-MM-DD").format("DD.MM.YYYY")}}),methods:{openArticle:function(){this.$router.push({name:"VNewsPage",params:{articleId:this.slug}})}}},d=c,m=s("2877"),u=Object(m["a"])(d,e,a,!1,null,null,null);i["a"]=u.exports},2834:function(t,i,s){t.exports=s.p+"spa/img/student_block.9291e4c8.png"},"2d10":function(t,i,s){"use strict";s("99af"),s("d3b7");var e=s("5c9f");i["a"]={data:function(){return{authWindow:null,kundelikAuthType:null,kundelikAuthCode:null,isRunCombiningAccounts:!1,isCheckingAuthCombiningAccounts:!1,isRedirect:!1}},mounted:function(){window.addEventListener("message",this.handleEventWindowMessage)},beforeDestroy:function(){window.removeEventListener("message",this.handleEventWindowMessage)},methods:{loginWithKundelik:function(t){function i(t,i,s,e){var a=window.screen.width/2-s/2,n=window.screen.height/2-e/2;return window.open(t,i,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=".concat(s,", height=").concat(e,", top=").concat(n,", left=").concat(a))}var s=this.$store.state.common.domainOptions[t];s&&(this.authWindow=i(s,"Auth",400,600))},handleEventWindowMessage:function(t){var i,s,a,n,l=this;if(null!==(i=t.data)&&void 0!==i&&i.typeBehalfAuth&&(this.kundelikAuthType=null===(s=t.data)||void 0===s?void 0:s.typeBehalfAuth,this.kundelikAuthCode=null===(a=t.data)||void 0===a?void 0:a.code,this.kundelikAuthError=null===(n=t.data)||void 0===n?void 0:n.error,this.authWindow)){switch(this.kundelikAuthType){case"auth":this.isRunCombiningAccounts=!0;break;case"register":this.$glModalWindow.show({modalName:"combining-accounts",modalTitle:this.trans("spa.profile.linking_in_accounts"),modalWidth:500,component:"v-combining-accounts-modal-window",componentProps:{type:this.kundelikAuthType,code:this.kundelikAuthCode,handleReject:function(){return l.$glModalWindow.hide("combining-accounts")},handleSuccess:function(){return l.$glModalWindow.hide("combining-accounts")},refreshData:function(){return new Promise((function(t,i){if(l.reqData)return Promise.resolve(l.reqData()).then(function(t){try{return s.call(this)}catch(e){return i(e)}}.bind(this),i);function s(){return t()}return s.call(this)}))}}});break;case"error":this.$notify({type:"error",title:this.trans(e["a"].error.title),text:this.kundelikAuthError});break;default:break}this.authWindow.close(),this.authWindow=null}}}}},"463d":function(t,i,s){},"53ec":function(t,i,s){},7869:function(t,i,s){t.exports=s.p+"spa/img/nis_logo_landing.60dbad7e.svg"},"7ca4":function(t,i,s){"use strict";s("53ec")},"9b25":function(t,i,s){t.exports=s.p+"spa/img/landin_login.bdc3c2f1.png"},bb12:function(t,i,s){t.exports=s.p+"spa/img/teacher_block.c39270c8.png"},def6:function(t,i,s){t.exports=s.p+"spa/img/program_block.2fc8b70e.png"},e98b:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"v-landing-page"},[e("section",{staticClass:"v-landing-page__login"},[e("div",{staticClass:"v-landing-page__login_content v-landing-page__section"},[t.isRunCombiningAccounts?[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isCheckingAuthCombiningAccounts&&!t.isRedirect,expression:"!isCheckingAuthCombiningAccounts && !isRedirect"}],staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12 col-sm-8 col-lg-6 d-lgm-flex mt-20"},[e("div",{staticClass:"ol-view__form-login ol-b-white",staticStyle:{margin:"0",padding:"0rem"}},[e("v-combining-accounts",{attrs:{type:t.kundelikAuthType,code:t.kundelikAuthCode,"handle-reject":function(){return t.isRunCombiningAccounts=!1}},on:{"set-checking-auth":function(i){return t.isCheckingAuthCombiningAccounts=i},"set-redirect":function(i){return t.isRedirect=i}}})],1)])]),t.isCheckingAuthCombiningAccounts?e("v-spa-loader-squares",{staticClass:"py-50"}):t._e()]:t._e(),t.isRunCombiningAccounts?t._e():e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-12 col-lg-7 d-lgm-flex mt-20 order-1 order-lg-0 mobile-border"},[e("div",{staticClass:"mobile-title ol-w-100\n              d-flex flex-column align-items-center justify-content-center"},[e("div",{staticClass:"ol-title ol-title--double-line mb-20 d-block d-md-none"},[e("span",[t._v(t._s(t.trans("spa.login.what_is_onlinemektep")))])]),e("div",{staticClass:"ol-view__iframe-video"},[t.trans("spa.video_link.what_is_onlinemektep").includes("embed")?e("iframe",{attrs:{src:t.trans("spa.video_link.what_is_onlinemektep"),frameborder:"0",allowfullscreen:""}}):t._e()])])]),e("div",{staticClass:"col-12 col-md-12 col-lg-5 d-lgm-flex mt-20 order-0 order-lg-1"},[e("v-area",{staticClass:"ol-view__form-login",attrs:{"without-head":""},scopedSlots:t._u([{key:"body",fn:function(){return[e("form",{on:{submit:t.sendRequest}},[e("div",{staticClass:"ol-view__form-login-title mb-20"},[t._v(" "+t._s(t.trans("spa.title.enter"))+" ")]),e("v-form-field",{staticClass:"mb-25",attrs:{label:t.infoByLoginType.label,error:t.hasValidationFail("login"),"error-message":t.getValidationMessage("login")}},[e("div",{staticClass:"ol-form-field__switch-login",on:{click:t.toggleLoginType}},[t._v(" "+t._s(t.infoByLoginType.toggleLabel)+" ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldLogin,expression:"fieldLogin"},{name:"mask",rawName:"v-mask",value:t.infoByLoginType.mask,expression:"infoByLoginType.mask"}],staticClass:"ol-form__input ol-w-100",attrs:{type:"text",placeholder:t.infoByLoginType.placeholder},domProps:{value:t.fieldLogin},on:{input:[function(i){i.target.composing||(t.fieldLogin=i.target.value)},function(i){return t.flashValidationFail("login")}]}})]),e("v-form-field",{staticClass:"mb-25",attrs:{label:t.trans("spa.label.enter_your_password"),error:t.hasValidationFail("password"),"error-message":t.getValidationMessage("password")}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldPassword,expression:"fieldPassword"}],staticClass:"ol-form__input ol-w-100",attrs:{type:"password",placeholder:t.trans("spa.label.enter_password")},domProps:{value:t.fieldPassword},on:{input:[function(i){i.target.composing||(t.fieldPassword=i.target.value)},function(i){return t.flashValidationFail("password")}]}})]),e("v-btn",{staticClass:"ol-w-100 ol-bold mt-10",attrs:{label:t.trans("spa.action.enter"),type:"submit",color:"green",size:"b",loading:t.loading}}),e("div",{staticClass:"ol-to-center mt-10"},[t._v(" "+t._s(t.trans("spa.label.or"))+" ")]),e("div",{staticStyle:{margin:"1rem auto 0 auto",cursor:"pointer",border:".2rem solid #56ab68","border-radius":"0.5rem"},attrs:{loading:t.loading,title:t.trans("spa.action.enter_with_kundelik")},on:{click:function(i){return t.loginWithKundelik("ssoKundelikAuth")}}},[e("img",{staticClass:"px-30 py-5",attrs:{src:s("3f88"),alt:t.trans("spa.action.enter_with_kundelik"),height:"45"}})])],1)]},proxy:!0}],null,!1,2033839794)})],1)])],2),t._m(0)]),e("section",{staticClass:"v-landing-page__school-block v-landing-page__section mobile-border"},[e("div",{staticClass:"ol-title ol-title--double-line mobile-title mt-30 mb-30"},[e("span",{domProps:{innerHTML:t._s(t.trans("spa.title.landing_school_block"))}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 d-md-flex d-none"},[e("img",{staticClass:"ml-auto",staticStyle:{"margin-right":"4rem"},attrs:{src:s("fd2f"),alt:t.trans("spa.tooltip.landing_school_block_alt")}})]),e("div",{staticClass:"col-12 col-md-6"},[e("div",{staticClass:"ml-sub-4",domProps:{innerHTML:t._s(t.trans("spa.label.landing_school_block_desk"))}})])])]),t.articles.length?e("section",{staticClass:"v-landing-page__news-block v-landing-page__section mobile-border"},[e("div",{staticClass:"ol-title ol-title--double-line mobile-title title-additional mt-30 mb-30"},[e("span",{domProps:{innerHTML:t._s(t.trans("spa.title.landing_news_block"))}}),e("div",{staticClass:"v-landing-page__title-additional d-md-block d-none",domProps:{innerHTML:t._s(t.trans("spa.action.landing_show_more_news"))},on:{click:t.showMore}})]),e("div",{ref:"news",staticClass:"ol-news"},t._l(t.articles,(function(t,i){return e("v-news-card",{key:i,attrs:{"article-id":t.article_id,"img-url":t.preview,title:t.title,"published-at":t.published_at,origin:t.origin||{},slug:t.slug||""}})})),1),e("div",{staticClass:"v-landing-page__title-additional ol-to-center mt-20 d-md-none d-block",domProps:{innerHTML:t._s(t.trans("spa.action.landing_show_more_news"))},on:{click:t.showMore}})]):t._e(),e("section",{staticClass:"v-landing-page__program-block v-landing-page__section mobile-border"},[e("div",{staticClass:"ol-title ol-title--double-line mobile-title mt-30 mb-30"},[e("span",{domProps:{innerHTML:t._s(t.trans("spa.title.landing_program_block"))}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6"},[e("div",{staticClass:"d-flex flex-column align-items-stretch v-landing-page__program-desk-margin"},[e("div",{staticClass:"mt-10 px-10 mb-10",domProps:{innerHTML:t._s(t.trans("spa.title.landing_program_desk"))}}),e("div",{staticClass:"v-landing-page__list mb-auto mt-auto px-10",domProps:{innerHTML:t._s(t.trans("spa.label.landing_program_list"))}}),e("img",{staticClass:"mb-30 v-landing-page__nis-logo",attrs:{src:s("7869")}})])]),t._m(1)])]),e("section",{staticClass:"v-landing-page__school-admin-block v-landing-page__section mobile-border"},[e("div",{staticClass:"ol-title ol-title--double-line mobile-title mt-30 mb-30"},[e("span",{domProps:{innerHTML:t._s(t.trans("spa.title.landing_school_admin_block"))}})]),e("div",{staticClass:"row"},[t._m(2),e("div",{staticClass:"col-12 col-md-5 order-1 order-md-2"},[e("div",{staticClass:"v-landing-page__list mt-15",domProps:{innerHTML:t._s(t.trans("spa.label.landing_admin_list"))}})])])]),e("section",{staticClass:"v-landing-page__teacher-block v-landing-page__section mobile-border"},[e("div",{staticClass:"ol-title ol-title--double-line mobile-title mt-30 mb-30"},[e("span",{domProps:{innerHTML:t._s(t.trans("spa.title.landing_teacher_block"))}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6"},[e("div",{staticClass:"v-landing-page__list mt-15",domProps:{innerHTML:t._s(t.trans("spa.label.landing_teacher_list"))}})]),t._m(3)])]),e("section",{staticClass:"v-landing-page__student-block v-landing-page__section mobile-border"},[e("div",{staticClass:"ol-title ol-title--double-line mobile-title mt-30 mb-30"},[e("span",{domProps:{innerHTML:t._s(t.trans("spa.title.landing_student_block"))}})]),e("div",{staticClass:"row"},[t._m(4),e("div",{staticClass:"col-12 col-md-5 order-1 order-md-2"},[e("div",{staticClass:"v-landing-page__list mt-15",domProps:{innerHTML:t._s(t.trans("spa.label.landing_student_list"))}})])])]),e("footer",{staticClass:"v-landing-page__footer mt-30"},[e("div",{staticClass:"v-landing-page__section"},[e("div",{staticClass:"row align-items-center justify-content-between"},[e("div",{staticClass:"col-12 col-md-auto mb-20"},[e("div",{staticClass:"d-flex flex-column align-items-md-start align-items-center"},[e("img",{attrs:{src:s("0120"),alt:t.trans("spa.tooltip.landing_bilimland_alt")}}),e("span",{staticClass:"ol-c-white ol-f-9 mt-5",domProps:{innerHTML:t._s(t.trans("spa.tooltip.landing_copyright"))}})])]),e("div",{staticClass:"col-12 col-md-2 ml-auto\n          d-flex align-items-center justify-content-center mb-20"},[(!t.isMobileApp||t.isMobileApp&&t.mobileAppZeroEnable)&&t.isProduction?e("v-zero-count"):t._e()],1),e("div",{staticClass:"col-12 col-md-auto ml-auto mb-20"},[e("ul",{staticClass:"spa-app__social sa-social__wrapper v-landing-page__social"},[e("li",{staticClass:"sa-social__item"},[e("a",{staticClass:"sa-social__link ol-ico ol-ico--fa ol-ico--thm-facebook-landing",attrs:{href:t.trans("spa.title.facebook_href"),target:"_blank"}})]),e("li",{staticClass:"sa-social__item"},[e("a",{staticClass:"sa-social__link ol-ico ol-ico--fa ol-ico--thm-youtube",attrs:{href:t.trans("spa.title.youtube_href"),target:"_blank"}})]),e("li",{staticClass:"sa-social__item"},[e("a",{staticClass:"sa-social__link ol-ico ol-ico--fa ol-ico--thm-vkontakte",attrs:{href:t.trans("spa.title.vkontakte_href"),target:"_blank"}})]),e("li",{staticClass:"sa-social__item"},[e("a",{staticClass:"sa-social__link ol-ico ol-ico--fa ol-ico--thm-instagram",attrs:{href:t.trans("spa.title.instagram_href"),target:"_blank"}})]),e("li",{staticClass:"sa-social__item"},[e("a",{staticClass:"sa-social__link ol-ico ol-ico--fa ol-ico--thm-telegram",attrs:{href:t.trans("spa.title.telegram_href"),target:"_blank"}})])])])])])])])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"v-landing-page__login_bg"},[e("img",{attrs:{src:s("9b25")}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col-12 col-md-6 d-flex justify-content-center"},[e("img",{staticClass:"image-mobile-shift ml-sub-4",attrs:{src:s("def6")}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col-12 col-md-7 order-2 order-md-1"},[e("img",{staticClass:"image image-mobile-shift",attrs:{src:s("25c2")}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col-12 col-md-6"},[e("img",{staticClass:"image-mobile-shift",attrs:{src:s("bb12")}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col-12 col-md-7 order-2 order-md-1"},[e("img",{staticClass:"image image-mobile-shift",attrs:{src:s("2834")}})])}],n=s("5530"),l=(s("d3b7"),s("fb6a"),s("498a"),s("2f62")),o=s("fa29"),r=s("79ef"),c=s("1443"),d=s("3691"),m=s("fa27"),u=s("a5d2"),g=s("6997"),p=s("2d10"),_=s("e061"),h=s("2df0"),b=s("0722"),f=s("c149"),v=s("2798"),C={name:"VLandingPage",mixins:[u["a"],g["a"],p["a"]],components:{VArea:o["a"],VBtn:r["a"],VFormField:c["a"],VCombiningAccounts:d["a"],VSpaLoaderSquares:m["a"],VZeroCount:f["a"],VNewsCard:v["a"]},data:function(){return{loading:!1,loginType:"login",fieldLogin:"",fieldPassword:"",mobileAppZeroEnable:!1,articles:[]}},mounted:function(){return new Promise(function(t,i){return window.launchZero=function(){this.mobileAppZeroEnable=!0},window.launchZero=window.launchZero.bind(this),Promise.resolve(this.reqData()).then(function(s){try{return this.$screen.lt.md&&this.setScrollXInMobile(),t()}catch(e){return i(e)}}.bind(this),i)}.bind(this))},computed:Object(n["a"])(Object(n["a"])({},Object(l["c"])(["isMobileApp","isProduction","loadingProgress"])),{},{infoByLoginType:function(){return"login"===this.loginType?{label:this.trans("spa.label.login"),toggleLabel:this.trans("spa.label.enter_by_phone"),placeholder:this.trans("spa.label.enter_login"),mask:""}:{label:this.trans("spa.label.phone"),toggleLabel:this.trans("spa.label.enter_by_login"),placeholder:"+7 (7__) ___-__-__",mask:"+7 (7##) ###-##-##"}}}),watch:{"$screen.lt.md":function(t){t&&this.setScrollXInMobile()}},methods:{reqData:function(){return new Promise(function(t,i){var s;return this.$store.commit("setLoadingProgress",!0),Promise.resolve(this.$http({method:"get",url:this.$getUri("news.getArticleGuestList"),params:{page:this.activePage}})).then(function(e){try{return s=e,s.error||(this.articles=s.data.data.slice(0,3)),this.$store.commit("setLoadingProgress",!1),t()}catch(a){return i(a)}}.bind(this),i)}.bind(this))},setScrollXInMobile:function(){var t;if(null!==(t=this.$refs)&&void 0!==t&&t.news){var i=435-this.$refs.news.clientWidth/2;this.$refs.news.scrollLeft+=i-15}},toggleLoginType:function(){this.fieldLogin="","login"===this.loginType?this.loginType="phone":this.loginType="login"},sendRequest:function(t){return new Promise(function(i,s){var e,a;return t.preventDefault(),Object(h["a"])(),e={},Object(_["c"])("gmtx")&&(e["X-Mathrix"]=Object(_["c"])("gmtx")),Object(b["a"])(this.$store),this.loading=!0,Promise.resolve(this.$http({url:this.$getUri("auth.login"),method:"post",headers:e,data:{login:this.fieldLogin.trim(),password:this.fieldPassword}})).then(function(t){try{return a=t,a&&a.access_token&&a.user_info&&a.refresh_token?this.redirectUser(a):this.loading=!1,i()}catch(e){return s(e)}}.bind(this),s)}.bind(this))},showMore:function(){this.$router.push({name:"VNewsListPage"})}}},w=C,k=(s("7ca4"),s("2877")),y=Object(k["a"])(w,e,a,!1,null,"15809776",null);i["default"]=y.exports},fa27:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"loader-squares-wrapper",class:{"loader-squares-wrapper--full":t.fullScreen}},[t._m(0)])},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"loader-squares-items"},[s("div",{staticClass:"📦"}),s("div",{staticClass:"📦"}),s("div",{staticClass:"📦"}),s("div",{staticClass:"📦"}),s("div",{staticClass:"📦"})])}],n={name:"VSpaLoaderSquares",props:{fullScreen:Boolean}},l=n,o=(s("0235"),s("2877")),r=Object(o["a"])(l,e,a,!1,null,"2d8e4a9d",null);i["a"]=r.exports},fd2f:function(t,i,s){t.exports=s.p+"spa/img/school_block.0ee2c89c.svg"}}]);