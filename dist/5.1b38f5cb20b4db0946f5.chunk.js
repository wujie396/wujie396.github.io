webpackJsonp([5],{219:function(t,e,a){a(724);var s=a(10)(a(700),a(754),null,null);s.options.__file="D:\\github\\talkingdata\\src\\views\\page\\page.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] page.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},390:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(64),o=s(i),n=a(37),r=s(n),c=a(5),l=(s(c),a(63)),u=s(l);e.default={directives:{clickoutside:u.default},props:{allData:{type:Array,required:!0},associativeArr:{type:Array,required:!0}},watch:{allData:function(){this.getAllListData()}},data:function(){return{AllListData:[],showListData:[],value:"",isShow:!0}},created:function(){this.getAllListData()},mounted:function(){},beforeDestroy:function(){},methods:{hideList:function(){this.isShow=!1,this.showListData.splice(2,0)},getAllListData:function(){var t=this,e=[];this.associativeArr.forEach(function(a){t.allData.forEach(function(t){e.push(t[a])})}),this.AllListData=[].concat((0,r.default)(new o.default(e)))},getShowListData:function(){var t=this;if(!this.value)return void(this.showListData=[]);this.showListData=this.AllListData.filter(function(e){return e=(e+"").toLowerCase(),e.indexOf((t.value+"").toLowerCase())>-1})},valueSerach:function(){this.searchData(this.value)},liSearch:function(t){this.isShow=!1,this.value=t,this.searchData(t),this.showListData.splice(2,0)},showOplist:function(){this.isShow=!0,this.showListData.splice(2,0)},searchData:function(t){this.$emit("searchData",t)},converStr:function(t){return isNaN(t)?t.toLowerCase():Number(t)}}}},645:function(t,e){},646:function(t,e,a){a(645);var s=a(10)(a(390),a(647),null,null);s.options.__file="D:\\github\\talkingdata\\src\\views\\components\\associative-search.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] associative-search.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},647:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.hideList,expression:"hideList"}],staticClass:"associative-search"},[a("Input",{staticStyle:{width:"160px"},attrs:{placeholder:"搜索",shape:"circle",icon:"ios-search-strong"},on:{"on-change":t.getShowListData,"on-click":t.valueSerach,"on-enter":t.valueSerach,"on-focus":t.showOplist},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showListData.length&&t.isShow,expression:"showListData.length&&isShow"}],staticClass:"oplist-box"},[a("ul",{staticClass:"oplist"},t._l(t.showListData,function(e){return a("li",{key:e,attrs:{title:e},on:{click:function(a){t.liSearch(e)}}},[t._v(t._s(e))])}))])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},700:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(5),o=s(i),n=a(646),r=s(n);e.default={components:{associativeSearch:r.default},data:function(){var t=this;return{dataCount:6,currentPage:1,modal1:!1,pageTitle:"",loading:!0,columns5:[{title:"页面显示名",key:"pageTitle",sortable:!0},{title:"页面受访人数",key:"visitDeviceCount",sortable:!0},{title:"页面受访次数",key:"pageVisitedCount",sortable:!0},{title:"页面受访比率",key:"visitedRate",sortable:"custom"},{title:"受访总时长占比",key:"timeRate",sortable:"custom"},{title:"平均停留时长",key:"avgTime",sortable:!0},{title:"离开应用",key:"quitAppRate",sortable:"custom"},{title:"走向",key:"run",render:function(e,a){return e("div",{props:{type:"text",size:"small",color:"#3399ff"},style:{marginRight:"5px",color:"#3399ff",cursor:"pointer"},on:{click:function(){t.show(a)}}},"查看")}}],jumpInput:"",pageViewsdata:[],copyData:[],showData:[],pageSize:10,precent1:7.2,associativeArr:["pageTitle"],jumpAssociativeArr:["jumpTo"],jumpToAllData:[],jumpToShowData:[]}},computed:{checkedData:function(){return this.$store.state.app.checkedPlatform},isFiltersHandle:function(){return this.$store.state.app.isFiltersHandle},startDate:function(){return this.$store.state.app.startDate},endDate:function(){return this.$store.state.app.endDate},checkedVersion:function(){return this.$store.state.app.checkedVersion},isChangeDate:function(){return this.$store.state.app.isChangeDate},checkedAccesskey:function(){return this.$store.state.app.checkedAccesskey}},watch:{isChangeDate:function(){this.pageVisit()},isFiltersHandle:function(){this.pageVisit()}},created:function(){this.$store.commit("showRightFilter",{isShow:!0}),this.$store.commit("channelShow",{isShow:!0}),this.pageVisit()},methods:{changepage:function(t){var e=t||1;this.dataCount=this.copyData.length,this.showData=this.copyData.slice((e-1)*this.pageSize,e*this.pageSize)},changeSort:function(t){"normal"!=t.order?this.copyData.sort(o.default.compare(t.key,t.order)):this.copyData=o.default.deepClone(this.pageViewsdata),this.changepage(1),this.currentPage=1},exportData:function(){var t=this.startDate+"_"+this.endDate+"_"+this.checkedData;this.$refs.channelTable.exportCsv({filename:"页面访问-"+t})},show:function(t){this.modal1=!0;var e=t.row.quitAppRate,a=e.replace(/%/,"");this.pageJumpTo(parseFloat(a),t.row.pageTitle)},pageJumpTo:function(t,e){var a=this,s={accessKey:this.$store.state.app.checkedAccesskey,appVersion:this.$store.state.app.checkedVersion,beginDate:this.$store.state.app.startDate,endDate:this.$store.state.app.endDate,platform:this.$store.state.app.checkedPlatform,pageTitle:e};this.$axios.post("https://easy-mock.com/mock/5a9a40acfdc65f3e22abbdee/tk/pageVisit/pageJumpTo",s).then(function(e){0==e.data.code&&(a.jumpToAllData=e.data.data?e.data.data:[{jumpTo:"离开应用",times:t}],a.jumpToShowData=o.default.deepClone(a.jumpToAllData))},function(t){console.log(t+"........")})},changeJumpShowData:function(){var t=this,e=this.jumpInput;if(e){this.jumpToShowData=this.jumpToAllData.filter(function(a){return t.ifIndexof(a,e,t.jumpAssociativeArr)})}else this.jumpToShowData=o.default.deepClone(this.jumpToAllData)},del:function(){this.modal1=!1},pageVisit:function(){var t=this,e={accessKey:this.$store.state.app.checkedAccesskey,appVersion:this.$store.state.app.checkedVersion,beginDate:this.$store.state.app.startDate,endDate:this.$store.state.app.endDate,platform:this.$store.state.app.checkedPlatform};this.loading=!0,this.$axios.post("https://easy-mock.com/mock/5a9a40acfdc65f3e22abbdee/tk/pageVisit",e).then(function(e){0==e.data.code&&(t.pageViewsdata=e.data.data,t.dataCount=e.data.data.length,t.copyData=o.default.deepClone(t.pageViewsdata),t.changepage(1),t.loading=!1)},function(t){console.log(t+".......")})},ifIndexof:function(t,e,a){e=(e+"").toLowerCase();var s=0;return a.forEach(function(a){(t[a]+"").toLowerCase().indexOf(e)>-1&&s++}),!!s},searchData:function(t){var e=this;if(t){this.copyData=this.pageViewsdata.filter(function(a){return e.ifIndexof(a,t,e.associativeArr)})}else this.copyData=o.default.deepClone(this.pageViewsdata);this.changepage(1),this.currentPage=1}}}},724:function(t,e){},754:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"analytics-wrap"},[t._m(0),t._v(" "),a("div",{staticClass:"analytics-view"},[a("Row",{staticClass:"analytics-view-title",staticStyle:{"margin-bottom":"10px","border-bottom":"none"}},[a("Col",{staticStyle:{"text-align":"right","line-height":"16px",float:"right"},attrs:{span:"12"}},[a("div",{staticClass:"account-content-operate-search"},[t.pageViewsdata.length?a("associativeSearch",{attrs:{allData:t.pageViewsdata,associativeArr:t.associativeArr},on:{searchData:t.searchData}}):t._e(),t._v(" "),a("Icon",{staticClass:"fontS18",staticStyle:{cursor:"pointer","margin-left":"10px","font-size":"18px"},attrs:{type:"ios-download-outline"},nativeOn:{click:function(e){t.exportData(e)}}}),t._v(" "),a("Poptip",{attrs:{trigger:"hover",placement:"bottom-end"}},[a("Icon",{staticClass:"fontS18",staticStyle:{cursor:"pointer","margin-left":"10px","font-size":"18px"},attrs:{type:"ios-help-outline"}}),t._v(" "),a("div",{attrs:{slot:"title"},slot:"title"},[t._v("数据指标说明")]),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[a("span",[t._v("页面受访人数")]),t._v("：所选日期内，访问该页面的设备数。")]),t._v(" "),a("p",{staticClass:"bg"},[a("span",[t._v("页面受访次数")]),t._v("：所选日期内，访问该页面的次数。")]),t._v(" "),a("p",[a("span",[t._v("页面受访比率")]),t._v("：所选日期内，访问此页面的访问次数占所有页面总访问次数的比例。")]),t._v(" "),a("p",{staticClass:"bg"},[a("span",[t._v("受访总时长占")]),t._v("： 所选日期内，对某页面的总浏览时长占全部页面浏览时长的比例。")]),t._v(" "),a("p",[a("span",[t._v("平均停留时长")]),t._v("：所选日期内，每次浏览此页面的平均时长。")]),t._v(" "),a("p",{staticClass:"bg"},[a("span",[t._v("离开率")]),t._v("：所选日期内，在此页面中，选择离开应用占此页面浏览次数的比例。")]),t._v(" "),a("p",[a("span",[t._v("注")]),t._v("：为了保证运算速度，我们只提供最近一年的页面访问相关数据。如需更多，请联系我们。")])])],1)],1)])],1),t._v(" "),a("Table",{attrs:{columns:t.columns5,loading:this.loading,data:t.showData},on:{"on-sort-change":t.changeSort},nativeOn:{click:function(t){t.stopPropagation()}}}),t._v(" "),a("Table",{ref:"channelTable",staticStyle:{display:"none"},attrs:{columns:t.columns5,data:t.pageViewsdata}}),t._v(" "),a("Modal",{attrs:{title:"页面转向",scrollable:!0},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[a("div",{staticClass:"account-content-operate"},[a("Input",{staticClass:"account-search",staticStyle:{width:"160px"},attrs:{placeholder:"搜索",shape:"circle",icon:"ios-search-strong"},on:{"on-change":t.changeJumpShowData},model:{value:t.jumpInput,callback:function(e){t.jumpInput=e},expression:"jumpInput"}})],1),t._v(" "),a("div",{},[a("ul",{staticClass:"page-access-link"},[t.jumpToShowData.length?t._e():a("li",[a("p",{staticClass:"no-data"},[t._v("没有数据")])]),t._v(" "),t._l(t.jumpToShowData,function(e,s){return a("li",{key:s},[a("span",{staticClass:"leave"},[t._v(t._s(e.jumpTo))]),t._v(" "),a("span",{staticClass:"progress"},[a("Progress",{attrs:{percent:Number(e.times),"stroke-width":5}})],1)])})],2)]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("i-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"error",size:"large"},on:{click:t.del}},[t._v("Delete")])],1)]),t._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:t.dataCount,current:t.currentPage,"page-size":t.pageSize},on:{"update:current":function(e){t.currentPage=e},"on-change":t.changepage}})],1)])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overview"},[a("h1",{staticClass:"visit"},[t._v("页面访问")])])}]},t.exports.render._withStripped=!0}});