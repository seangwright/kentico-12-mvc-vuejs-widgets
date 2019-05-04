/*! Built with http://stenciljs.com */
components.loadBundle("kentico-dialog-header",["exports"],function(e){var t=window.components.h,o=function(){function e(){var e=this;this.onClose=function(t){t.stopPropagation(),e.close.emit()},this.onBackButtonClick=function(t){t.stopPropagation(),e.back.emit()}}return e.prototype.render=function(){return t("div",{class:{"ktc-dialog-header-wrapper":!0,"ktc-primary":this.primary}},t("div",{class:"ktc-dialog-header"},t("div",{class:"ktc-dialog-header-controls"},t("a",{onClick:this.onClose},t("i",{"aria-hidden":"true",title:this.closeTooltip,class:"icon-modal-close"}))),this.showBackButton&&t("div",{class:"ktc-dialog-header-back"},t("a",{onClick:this.onBackButtonClick},t("i",{"aria-hidden":"true",title:this.backTooltip,class:"icon-chevron-left"}))),t("div",{class:{"ktc-dialog-header-title":!0,"ktc-dialog-header-title--displaced":this.showBackButton}},this.headerTitle)))},Object.defineProperty(e,"is",{get:function(){return"kentico-dialog-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{backTooltip:{type:String,attr:"back-tooltip"},closeTooltip:{type:String,attr:"close-tooltip"},headerTitle:{type:String,attr:"header-title"},primary:{type:Boolean,attr:"primary"},showBackButton:{type:Boolean,attr:"show-back-button"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"close",method:"close",bubbles:!0,cancelable:!0,composed:!0},{name:"back",method:"back",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[class*=\" icon-\"][data-kentico-dialog-header], [class^=icon-][data-kentico-dialog-header]{font-family:Core-icons;display:inline-block;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-image:none}[class^=icon-][data-kentico-dialog-header]:before{content:\"\\e619\"}.ktc-icon-only[data-kentico-dialog-header]:before{content:none}[data-kentico-dialog-header-host]{display:block}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]{background-color:#262524;border-bottom:1px solid #d6d9d6;height:36px}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]{width:100%}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-back[data-kentico-dialog-header]{float:left}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-back[data-kentico-dialog-header]   a[data-kentico-dialog-header]{display:table-cell}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-back[data-kentico-dialog-header]   a[data-kentico-dialog-header]   .icon-chevron-left[data-kentico-dialog-header]{cursor:pointer;color:#fff;padding:10px 8px 8px;font-size:18px}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-back[data-kentico-dialog-header]   a[data-kentico-dialog-header]   .icon-chevron-left[data-kentico-dialog-header]:before{content:\"\\e66c\"}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-title[data-kentico-dialog-header]{color:#fff;font-size:16px;line-height:36px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-left:10px}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-title.ktc-dialog-header-title--displaced[data-kentico-dialog-header]{padding-left:0}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-controls[data-kentico-dialog-header]{float:right}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-controls[data-kentico-dialog-header]   a[data-kentico-dialog-header]{display:table-cell;background:#403e3d}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-controls[data-kentico-dialog-header]   a[data-kentico-dialog-header]:hover{background:#504e4c}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-controls[data-kentico-dialog-header]   a[data-kentico-dialog-header]   i[data-kentico-dialog-header]{cursor:pointer;color:#a3a2a2;font-size:24px;padding:6px;-webkit-box-sizing:content-box;box-sizing:content-box}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-controls[data-kentico-dialog-header]   a[data-kentico-dialog-header]   i.icon-modal-close[data-kentico-dialog-header]{font-weight:700}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-controls[data-kentico-dialog-header]   a[data-kentico-dialog-header]   i.icon-modal-close[data-kentico-dialog-header]:before{content:\"\\e64a\"}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper.ktc-primary[data-kentico-dialog-header]{background-color:#0f6194}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper.ktc-primary[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-controls[data-kentico-dialog-header]   a[data-kentico-dialog-header]{background:#1175ae}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper.ktc-primary[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-controls[data-kentico-dialog-header]   a[data-kentico-dialog-header]   i[data-kentico-dialog-header]{color:#fff}[data-kentico-dialog-header-host]   .ktc-dialog-header-wrapper.ktc-primary[data-kentico-dialog-header]   .ktc-dialog-header[data-kentico-dialog-header]   .ktc-dialog-header-controls[data-kentico-dialog-header]   a[data-kentico-dialog-header]:hover{background:rgba(255,255,255,.2)}"},enumerable:!0,configurable:!0}),e}();e.KenticoDialogHeader=o,Object.defineProperty(e,"__esModule",{value:!0})});