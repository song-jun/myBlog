(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{610:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[a._v("liunx命令")]),t("p",[a._v("查看服务"),t("br"),a._v("\n查看端口占用"),t("br"),a._v("\n杀死进程"),t("br"),a._v("\nnginx 查看文件"),t("br"),a._v("\nlocate简介\n......")])]),a._v(" "),t("h2",{attrs:{id:"查看服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看服务"}},[a._v("#")]),a._v(" 查看服务")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" -ltunp\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"查看端口占用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看端口占用"}},[a._v("#")]),a._v(" 查看端口占用")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("ss -lntpd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" :22\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"杀死进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#杀死进程"}},[a._v("#")]),a._v(" 杀死进程")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" -9 端口号\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"nginx-查看文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-查看文件"}},[a._v("#")]),a._v(" nginx 查看文件")]),a._v(" "),t("ul",[t("li",[a._v("使用locate my.cnf命令可以列出所有的my.cnf文件")]),a._v(" "),t("li",[a._v("查找 find / -name 后面加文件名或者文件夹名")])]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" / -name qq.png\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"locate简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#locate简介"}},[a._v("#")]),a._v(" locate简介")]),a._v(" "),t("ul",[t("li",[a._v("locate(locate) 命令用来查找文件或目录。 locate命令要比find -name快得多，原因在于它不搜索具体目录，而是搜索一个数据库/var/lib/mlocate/mlocate.db 。\n这个数据库中含有本地所有文件信息。Linux系统自动创建这个数据库，并且每天自动更新一次，因此，我们在用whereis和locate 查找文件时，有时会找到已经被删除\n的数据，或者刚刚建立文件，却无法查找到，原因就是因为数据库文件没有被更新。\n为了避免这种情况，可以在使用locate之前，先使用updatedb命令，手动更新数据库。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);