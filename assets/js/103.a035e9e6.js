(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{630:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("mongo操作")]),t("p",[s._v("mongo创建超级管理员"),t("br"),s._v("\nmongo用户操作"),t("br"),s._v("\n登录数据库"),t("br"),s._v("\n查询数据库"),t("br"),s._v("\n创建数据库"),t("br"),s._v("\n查看表"),t("br"),s._v("\n查询"),t("br"),s._v("\n修改"),t("br"),s._v("\n删除表中的数据"),t("br"),s._v("\n删除表"),t("br"),s._v("\n删除数据库\n......")])]),s._v(" "),t("h2",{attrs:{id:"mongo创建超级管理员"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongo创建超级管理员"}},[s._v("#")]),s._v(" mongo创建超级管理员")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#管理整个mongo数据库。")]),s._v("\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" user: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(",pwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pwd"')]),s._v(",roles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" role: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(", db: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"具体角色解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体角色解释"}},[s._v("#")]),s._v(" 具体角色解释：")]),s._v(" "),t("ul",[t("li",[s._v("Read：允许用户读取指定数据库")]),s._v(" "),t("li",[s._v("readWrite：允许用户读写指定数据库")]),s._v(" "),t("li",[s._v("dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile")]),s._v(" "),t("li",[s._v("userAdmin：允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户")]),s._v(" "),t("li",[s._v("clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。")]),s._v(" "),t("li",[s._v("readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限")]),s._v(" "),t("li",[s._v("readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限")]),s._v(" "),t("li",[s._v("userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限")]),s._v(" "),t("li",[s._v("dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。")]),s._v(" "),t("li",[s._v("root：只在admin数据库中可用。超级账号，超级权限")])]),s._v(" "),t("h2",{attrs:{id:"mongo用户操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongo用户操作"}},[s._v("#")]),s._v(" mongo用户操作")]),s._v(" "),t("ul",[t("li",[s._v("查看已存在的用户")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.system.users.find"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("删除用户")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.system.users.remove"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"haha"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"登录数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录数据库"}},[s._v("#")]),s._v(" 登录数据库")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("// 方式一\nmongo\nuse admin\ndb.auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n// 修改用户密码\ndb.changeUserPassword"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n// 方式二\nmongo -u admin -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"查询数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询数据库"}},[s._v("#")]),s._v(" 查询数据库")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("show dbs\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或")]),s._v("\nshow databases\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"创建数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[s._v("#")]),s._v(" 创建数据库")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("use dbName\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"查看表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看表"}},[s._v("#")]),s._v(" 查看表")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("show tables"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或")]),s._v("\nshow collections"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"插入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入数据"}},[s._v("#")]),s._v(" 插入数据")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tableName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".insert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#如：db.members.insert({name:"Michael",age:18})')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[s._v("#")]),s._v(" 查询")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tableName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".find"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[s._v("#")]),s._v(" 修改")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.members.update"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Michael"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$set")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("age:20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"删除表中的数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除表中的数据"}},[s._v("#")]),s._v(" 删除表中的数据")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如：")]),s._v("\ndb.members.remove"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Michael"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除全部：")]),s._v("\ndb.members.remove"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"删除表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除表"}},[s._v("#")]),s._v(" 删除表")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.members.drop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"删除数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除数据库"}},[s._v("#")]),s._v(" 删除数据库")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.dropDatabase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);