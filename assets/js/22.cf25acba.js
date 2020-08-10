(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{405:function(t,s,n){"use strict";function a(t,s,n,a,e,r,o,i){var l,v="function"==typeof t?t.options:t;if(s&&(v.render=s,v.staticRenderFns=n,v._compiled=!0),a&&(v.functional=!0),r&&(v._scopeId="data-v-"+r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},v._ssrRegister=l):e&&(l=i?function(){e.call(this,(v.functional?this.parent:this).$root.$options.shadowRoot)}:e),l)if(v.functional){v._injectStyles=l;var _=v.render;v.render=function(t,s){return l.call(s),_(t,s)}}else{var c=v.beforeCreate;v.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:v}}n.d(s,"a",(function(){return a}))},536:function(t,s,n){"use strict";n.r(s);var a=n(405),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"获取页面元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取页面元素"}},[t._v("#")]),t._v(" 获取页面元素")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v('document.querySelector("选择器");')])]),t._v(" "),n("ul",[n("li",[t._v("选择器可以是css中的任意一种选择器")]),t._v(" "),n("li",[t._v("通过该选择器只能选中第一个元素")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v('document.querySelectorAll("选择器");')])]),t._v(" "),n("ul",[n("li",[t._v("querySelectorAll会返回所有符合选择器规则的元素列表")]),t._v(" "),n("li",[t._v("querySelector返回的只是单独的一个元素")])])])]),t._v(" "),n("h2",{attrs:{id:"类名操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类名操作"}},[t._v("#")]),t._v(" 类名操作")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("🎈 Dom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"类名"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 给当前dom元素添加类样式\n\n🎈 Dom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"类名"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 给当前dom元素移除类样式\n\n🎈 classList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"类名"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 检测是否包含类样式\n\n🎈 classList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toggle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"active"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  切换类样式（有就删除，没有就添加）\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("h2",{attrs:{id:"自定义属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义属性"}},[t._v("#")]),t._v(" 自定义属性")]),t._v(" "),n("p",[t._v("在标签中可以通过 "),n("code",[t._v("data-自定义属性名")]),t._v(" 来自定义属性")]),t._v(" "),n("ul",[n("li",[t._v("获取自定义属性"),n("br"),t._v("\nDom.dataset.属性名或者Dom.dataset[属性名]"),n("br"),t._v("\nDom.dataset返回的是一个对象")]),t._v(" "),n("li",[t._v("设置自定义属性"),n("br"),t._v("\nDom.dataset.自定义属性名=值  或者  Dom.dataset[自定义属性名]=值")]),t._v(" "),n("li",[t._v('标签中为data-test-name="123"时，获取时要用Dom.dataset.testName')])]),t._v(" "),n("h2",{attrs:{id:"文件读取"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件读取"}},[t._v("#")]),t._v(" 文件读取")]),t._v(" "),n("br"),t._v("\n上传头像(请上传png jpg gif ico格式的文件)\n"),n("br"),n("br"),t._v(" "),n("input",{attrs:{type:"file",id:"upLoadImg"}}),t._v(" "),n("br"),n("br"),t._v(" "),n("img",{staticStyle:{width:"150px",height:"150px"},attrs:{id:"showLogo",src:t.$site.base+"basic.png"}}),t._v(" "),n("script",[t._v('\n  var file_btn = document.querySelector("#upLoadImg");\n  var logo_wrap = document.querySelector("#showLogo");\n  file_btn.onchange=function() {\n \t\tvar file = this.files[0];\n \t\t//判断后缀名是否合法\n \t\tvar filename = file.name.substring(file.name.lastIndexOf("."));\n \t\tvar imgs = [".png",".jpg","gif",".ico"];\n \t\tvar flag = false;\n \t\tfor(var i=0; i<imgs.length; i++) {\n \t\t\tif(imgs[i]==filename) {\n \t\t\t \tflag=true;\n \t\t\t \tbreak;\n \t\t\t}\n \t\t}\n \t\tif(flag) {\n \t\t\tvar reader=new FileReader();\n \t\t\treader.readAsDataURL(file);\n \t\t\treader.onload=function() {\n \t\t\t \tlogo_wrap.src = reader.result;\n \t\t\t}\n \t\t}else {\n \t\t\talert("文件类型不正确，请重新选择");\n \t\t}\n  }\n')]),t._v(" "),n("ul",[n("li",[n("code",[t._v("FileReader")]),t._v("\n有三个方法用来读取文件方法，返回结果在result中\n"),n("ul",[n("li",[t._v("readAsBinaryString  --- 将文件读取为二进制编码")]),t._v(" "),n("li",[t._v("readAsText --- 将文件读取为文本")]),t._v(" "),n("li",[t._v("readAsDataURL --- 将文件读取为DataURL")])])]),t._v(" "),n("li",[n("code",[t._v("FileReader")]),t._v("提供的事件模型\n"),n("ul",[n("li",[t._v("onabort 中断时触发")]),t._v(" "),n("li",[t._v("onerror 出错时触发")]),t._v(" "),n("li",[t._v("onload 文件读取成功完成时触发")]),t._v(" "),n("li",[t._v("onloadend 读取完成触发，无论成功或失败")]),t._v(" "),n("li",[t._v("onloadstart 读取开始时触发")]),t._v(" "),n("li",[t._v("onprogress 读取中")])])])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取到文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" file "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建读取器")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reader "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始读取")]),t._v("\nreader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("readAsText")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取读取的结果")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当文件读取完成后，才可以获取文件信息内容")]),t._v("\nreader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("h2",{attrs:{id:"获取网络状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取网络状态"}},[t._v("#")]),t._v(" 获取网络状态")]),t._v(" "),n("br"),t._v("\n当前网络状态 : "),n("span",{staticStyle:{color:"#f3f"},attrs:{id:"onlineStatus"}},[t._v("--")]),t._v(" "),n("script",[t._v("\n  var state = window.navigator.onLine;\n  if(state) {\n    document.querySelector(\"#onlineStatus\").innerText = '在线呢！';\n  }else {\n    document.querySelector(\"#onlineStatus\").innerText = '掉线啦！';\n  }\n")]),t._v(" "),n("ul",[n("li",[t._v("获取网络状态\n"),n("code",[t._v("window.navigator.onLine")]),t._v(" 返回一个布尔值")]),t._v(" "),n("li",[t._v("网络状态事件\n"),n("ul",[n("li",[t._v("window.ononline")]),t._v(" "),n("li",[t._v("window.onoffline")])])])]),t._v(" "),n("h2",{attrs:{id:"获取地理位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取地理位置"}},[t._v("#")]),t._v(" 获取地理位置")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("获取当前地理位置"),n("br"),t._v(" "),n("code",[t._v("window.navigator.geolocation.getCurrentPosition(success,error);")])]),t._v(" "),n("ul",[n("li",[t._v("coords.latitude   维度")]),t._v(" "),n("li",[t._v("coords.longitude   经度")])])]),t._v(" "),n("li",[n("p",[t._v("获取一次当前位置"),n("br"),t._v(" "),n("code",[t._v("window.navigator.geolocation.watchPosition(success,error);")])])])]),t._v(" "),n("h2",{attrs:{id:"本地存储"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地存储"}},[t._v("#")]),t._v(" 本地存储")]),t._v(" "),n("ul",[n("li",[t._v("localStorage：\n"),n("ul",[n("li",[t._v("永久生效")]),t._v(" "),n("li",[t._v("多窗口共享")]),t._v(" "),n("li",[t._v("容量大约为20M")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("🎈window.localStorage.setItem(key,value)  设置存储内容\n\n🎈window.localStorage.getItem(key)  \t\t获取内容\n\n🎈window.localStorage.removeItem(key)\t    删除内容\n\n🎈window.localStorage.clear()\t\t\t    清空内容\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])]),t._v(" "),n("li",[t._v("sessionStorage：\n"),n("ul",[n("li",[t._v("生命周期为关闭当前浏览器窗口")]),t._v(" "),n("li",[t._v("可以在同一个窗口下访问")]),t._v(" "),n("li",[t._v("数据大小为5M左右")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("🎈window.sessionStorage.setItem(key,value)\n\n🎈window.sessionStorage.getItem(key)\n\n🎈window.sessionStorage.removeItem(key)\n\n🎈window.sessionStorage.clear()\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);