(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{607:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("远程数据库连接")]),n("p",[s._v("远程数据库连接首先关闭防火墙"),n("br"),s._v("\nmonogo开启远程访问"),n("br"),s._v("\nmongo关闭服务"),n("br"),s._v("\nmysql开启远程连接\n......")])]),s._v(" "),n("h2",{attrs:{id:"远程数据库连接首先关闭防火墙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#远程数据库连接首先关闭防火墙"}},[s._v("#")]),s._v(" 远程数据库连接首先关闭防火墙")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一、下面是red hat/CentOs7关闭防火墙的命令!")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看防火状态")]),s._v("\n\nsystemctl status firewalld\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("  iptables status\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#暂时关闭防火墙")]),s._v("\n\nsystemctl stop firewalld\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("  iptables stop\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久关闭防火墙")]),s._v("\n\nsystemctl disable firewalld\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" iptables off\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启防火墙")]),s._v("\n\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" firewalld\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables restart  \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久关闭后重启")]),s._v("\n\n//暂时还没有试过\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" iptables on\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#二、firewalld")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Centos7默认安装了firewalld，如果没有安装的话，可以使用 yum install firewalld firewalld-config进行安装。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动防火墙")]),s._v("\n\nsystemctl start firewalld\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁用防火墙")]),s._v("\n\nsystemctl stop firewalld\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置开机启动")]),s._v("\n\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" firewalld\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止并禁用开机启动")]),s._v("\n\nsytemctl disable firewalld\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启防火墙")]),s._v("\n\nfirewall-cmd --reload\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看状态")]),s._v("\n\nsystemctl status firewalld或者 firewall-cmd --state\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看版本")]),s._v("\n\nfirewall-cmd --version\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br")])]),n("h2",{attrs:{id:"monogo开启远程访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#monogo开启远程访问"}},[s._v("#")]),s._v(" monogo开启远程访问")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dbpath")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mongodb/mongodb-3.6.5/data/db     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据文件存放目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("logpath")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mongodb/mongodb-3.6.5/data/log/mongodb.log   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日志文件存放目录   ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#端口号")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fork")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以守护程序的方式启用,即在后台运行")]),s._v("\nlogappend "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日志以追加的形式添加")]),s._v("\nbind_ip "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以访问的地址. 127.0.0.1表示自己访问,  0.0.0.0 表示所有人都能访问")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"mongo关闭服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongo关闭服务"}},[s._v("#")]),s._v(" mongo关闭服务")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭服务 /data/db 代表数据库文件位置")]),s._v("\nmongod  --shutdown  --dbpath /data/db\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"mysql开启远程连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql开启远程连接"}},[s._v("#")]),s._v(" mysql开启远程连接")]),s._v(" "),n("ul",[n("li",[s._v("mysql操作")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("mysql -u root -p\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改mysql密码")]),s._v("\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" update user "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" password "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Password"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" where User "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("设置远程连接")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第一步登录mysql")]),s._v("\nmysql -u root -p\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第二步切换数据库")]),s._v("\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用 mysql 命令为 root 用户授权 mysql 远程连接服务")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第三步:")]),s._v("\ngrant all privileges on *.* to "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(" with grant option"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#说明：此命令是为密码为 root 、IP（%）任意的 root 用户授权。（%：模糊查询，所有 IP 都可以,，可指定其他主机 IP；BY 后的 'root' 为密码）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第四步:")]),s._v("\nflush privileges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将配置写入 mysql 授权表中")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);