(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{439:function(t,n,a){"use strict";n.a=[{name:"博客管理系统",desc:"博客在线管理，统计，留言管理，线上打包项目，在线聊天，在线编辑器",link:"https://admin.songjun520.cn",thumbnail:"../admin_1.png"},{name:"君陌离的博客",desc:"利用vuepress框架搭建的个人博客",link:"https://songjun520.cn",git:"https://github.com/song-jun",thumbnail:"../blog.png"},{name:"云校管理系统",desc:"精灵云校 – 好用的教培机构管理系统",link:"https://saas.jinglingyun.cn/login",thumbnail:"../admin.png"},{name:"险保保推广",desc:"为保险行业提供的营销工具",link:"https://saas.jinglingyun.cn/login",thumbnail:"../xb1.jpg",type:1,code:"../bao.jpg"},{name:"险保保推广",desc:"为保险行业提供的营销工具",link:"https://saas.jinglingyun.cn/login",thumbnail:"../xb2.jpg",type:1,code:"../bao.jpg"},{name:"险保保推广",desc:"为保险行业提供的营销工具",link:"https://saas.jinglingyun.cn/login",thumbnail:"../xb3.jpg",type:1,code:"../bao.jpg"},{name:"大明白的店",desc:"乐活生活零售电商平台",link:"https://saas.jinglingyun.cn/login",thumbnail:"../dm1.jpg",type:1,code:"../adb.jpg"},{name:"大明白的店",desc:"乐活生活零售电商平台",link:"https://saas.jinglingyun.cn/login",thumbnail:"../dm2.jpg",type:1,code:"../adb.jpg"},{name:"大明白的店",desc:"乐活生活零售电商平台",link:"https://saas.jinglingyun.cn/login",thumbnail:"../dm3.jpg",type:1,code:"../adb.jpg"},{name:"博客模板",desc:"多款blog模板，在线预览",link:"https://muban.songjun520.cn",thumbnail:"../muban_1.png"},{name:"博客模板",desc:"多款blog模板，在线预览",link:"https://muban.songjun520.cn",thumbnail:"../muban_2.png"},{name:"博客管理系统",desc:"博客在线管理，统计，留言管理，线上打包项目，在线聊天，在线编辑器",link:"https://admin.songjun520.cn",thumbnail:"../admin_2.png"},{name:"博客管理系统",desc:"博客在线管理，统计，留言管理，线上打包项目，在线聊天，在线编辑器",link:"https://admin.songjun520.cn",thumbnail:"../admin_3.png"},{name:"博客管理系统",desc:"博客在线管理，统计，留言管理，线上打包项目，在线聊天，在线编辑器",link:"https://admin.songjun520.cn",thumbnail:"../admin_4.png"},{name:"精灵云校",desc:"精灵云校–好用的教培机构管理系统 招生营销教务教学管理软件",link:"https://www.jinglingyun.cn/",thumbnail:"../yun.png"}]},472:function(t,n,a){},519:function(t,n,a){"use strict";a(472)},539:function(t,n,a){"use strict";a.r(n);a(38),a(19);var s=a(439),e={data:function(){return{examplesData:s.a,currentPage:1}},computed:{currentPageData:function(){var t=9*(this.currentPage-1),n=9*this.currentPage;return this.examplesData.slice(t,n)}},methods:{getCurrentPage:function(t){this.currentPage=t,setTimeout((function(){window.scrollTo(0,0)}),100)}}},i=(a(519),a(2)),l=Object(i.a)(e,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"theme-example"},[a("div",{staticClass:"blog-list-wrapper"},t._l(t.currentPageData,(function(n,s){return a("Card",{key:s,staticClass:"blog-item",class:{blogHeight:n.type}},[a("template",{slot:"front"},[a("img",{staticClass:"thumbnail",attrs:{src:n.thumbnail,alt:"缩略图"}})]),t._v(" "),a("template",{slot:"back"},[n.type?t._e():a("div",{staticClass:"info"},[a("h4",{staticClass:"title"},[t._v(t._s(n.name))]),t._v(" "),a("p",{staticClass:"desc"},[t._v(t._s(n.desc))]),t._v(" "),n.link?t._e():a("a",{staticClass:"btn inner",attrs:{href:"javascript:;"}},[t._v("内部上线 / 涉及法律 / 不可查看")]),t._v(" "),n.link?a("a",{staticClass:"btn",attrs:{target:"blank",href:n.link}},[t._v("网站直达")]):t._e(),t._v(" "),n.git?a("a",{staticClass:"btn",attrs:{target:"blank",href:n.git}},[t._v("Git地址")]):t._e(),t._v(" "),n.docs?a("a",{staticClass:"btn",attrs:{target:"blank",href:n.docs}},[t._v("开发文档")]):t._e()]),t._v(" "),a("div",{staticClass:"info",attrs:{else:""}},[a("h4",{staticClass:"title"},[t._v(t._s(n.name))]),t._v(" "),a("p",{staticClass:"desc"},[t._v(t._s(n.desc))]),t._v(" "),a("a",{staticClass:"btn",attrs:{href:"javascript:;"}},[t._v("微信搜索小程序："+t._s(n.name))]),a("br"),a("br"),t._v(" "),a("a",{staticClass:"btn",attrs:{href:"javascript:;"}},[t._v("微信扫码")]),a("br"),a("br"),t._v(" "),a("img",{attrs:{src:n.code,alt:""}})])])],2)})),1),t._v(" "),a("pagation",{staticClass:"pagation",attrs:{total:t.examplesData.length,currentPage:t.currentPage,perPage:9},on:{getCurrentPage:t.getCurrentPage}})],1)}),[],!1,null,"54780652",null);n.default=l.exports}}]);