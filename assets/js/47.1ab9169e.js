(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{573:function(e,v,t){"use strict";t.r(v);var a=t(2),l=Object(a.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[e._v("Vue")]),t("p",[e._v("Vue子组件调用父组件的方法"),t("br"),e._v("\n子组件调用父组件方法"),t("br"),e._v("\n路由传参"),t("br"),e._v("\n什么是mvvm?"),t("br"),e._v("\nmvvm和mvc区别"),t("br"),e._v("\nvue的优点是什么?\n......")])]),e._v(" "),t("h2",{attrs:{id:"vue子组件调用父组件的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue子组件调用父组件的方法"}},[e._v("#")]),e._v(" Vue子组件调用父组件的方法")]),e._v(" "),t("ul",[t("li",[e._v("第一种方法是直接在子组件中通过this.$parent.event来调用父组件的方法")]),e._v(" "),t("li",[e._v("第二种方法是在子组件里用$emit向父组件触发一个事件，父组件监听这个事件就行了")]),e._v(" "),t("li",[e._v("第三种是父组件把方法传入子组件中，在子组件里直接调用这个方法")])]),e._v(" "),t("h3",{attrs:{id:"子组件调用父组件方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子组件调用父组件方法"}},[e._v("#")]),e._v(" 子组件调用父组件方法")]),e._v(" "),t("p",[e._v('用ref标识子组件,this.$refs.mychild.parentHandleclick("嘿嘿嘿")；')]),e._v(" "),t("h2",{attrs:{id:"路由传参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由传参"}},[e._v("#")]),e._v(" 路由传参")]),e._v(" "),t("ul",[t("li",[e._v("query要用path来引入，params要用name来引入，接收参数都是类似的，分别是this.$route.- - query.name和this.$route.params.name")])]),e._v(" "),t("h2",{attrs:{id:"什么是mvvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是mvvm"}},[e._v("#")]),e._v(" 什么是mvvm")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("MVVM是Model-View-ViewModel的缩写。mvvm是一种设计思想。Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和 Model的对象。")])]),e._v(" "),t("li",[t("p",[e._v("在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。")])]),e._v(" "),t("li",[t("p",[e._v("ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。")])])]),e._v(" "),t("h2",{attrs:{id:"mvvm和mvc区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mvvm和mvc区别"}},[e._v("#")]),e._v(" mvvm和mvc区别")]),e._v(" "),t("ul",[t("li",[e._v("mvc和mvvm其实区别并不大。都是一种设计思想。主要就是mvc中Controller演变成mvvm中的viewModel。mvvm主要解决了mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。和当 Model 频繁发生变化，开发者需要主动更新到View 。")])]),e._v(" "),t("h2",{attrs:{id:"vue的优点是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue的优点是什么"}},[e._v("#")]),e._v(" vue的优点是什么")]),e._v(" "),t("ul",[t("li",[e._v('低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。\n可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。\n独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xml代码。\n可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。')])]),e._v(" "),t("h2",{attrs:{id:"你对vue生命周期的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你对vue生命周期的理解"}},[e._v("#")]),e._v(" 你对vue生命周期的理解")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。")])]),e._v(" "),t("li",[t("p",[e._v("创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，el还没有。")])]),e._v(" "),t("li",[t("p",[e._v("载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。")])]),e._v(" "),t("li",[t("p",[e._v("更新前/后：当data变化时，会触发beforeUpdate和updated方法。")])]),e._v(" "),t("li",[t("p",[e._v("销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在")])])])])}),[],!1,null,null,null);v.default=l.exports}}]);