(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{602:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"},[s._v("Xshell通过密钥登录服务器")]),e("p",[s._v("ssh命令"),e("br"),s._v("\nssh 重启"),e("br"),s._v("\n查看ssh版本"),e("br"),s._v("\nLinux免密码登录设置(方法二)\n......")])]),s._v(" "),e("h2",{attrs:{id:"xshell通过密钥登录服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xshell通过密钥登录服务器"}},[s._v("#")]),s._v(" Xshell通过密钥登录服务器")]),s._v(" "),e("ul",[e("li",[s._v("1.通过ssh-keygen命令生成本机公匙")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("ssh-keygen\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("2.查看云服务器登录方式状态")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux-node ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grep '^[A,P]' /etc/ssh/sshd_config")]),s._v("\nPubkeyAuthentication  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用PublicKey认证")]),s._v("\nAuthorizedKeysFile    .ssh/authorized_keys   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PublicKey文件路径")]),s._v("\nPasswordAuthentication  no                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不适用密码认证登录")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("3.进入云服务器的.ssh目录下，将生成的公钥拷贝到authorized_keys文件中，并赋予700权限")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/authorized_keys\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" /etc/ssh/authorized_keys\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("4.修改云服务器登录方式")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\nPubkeyAuthentication  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用PublicKey认证")]),s._v("\nAuthorizedKeysFile    .ssh/authorized_keys   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PublicKey文件路径")]),s._v("\nPasswordAuthentication  no                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不适用密码认证登录")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("5.重启服务")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("systemctl restart sshd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("6.免密登录")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@118.118.118.118\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"ssh命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh命令"}},[s._v("#")]),s._v(" ssh命令")]),s._v(" "),e("ul",[e("li",[s._v("秘钥生成")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("ssh-keygen\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("ssh 重启")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("查看ssh版本")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -V\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"linux免密码登录设置-方法二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux免密码登录设置-方法二"}},[s._v("#")]),s._v(" Linux免密码登录设置(方法二)")]),s._v(" "),e("ul",[e("li",[s._v("第一步：ssh-keygen -t rsa（已存在，这步可省略）")]),s._v(" "),e("li",[s._v("第二步：ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.1.100")]),s._v(" "),e("li",[s._v("第三步：ssh root@118.118.118.118")]),s._v(" "),e("li",[s._v("无法连接的话，删除known_hosts中的主机信息")])])])}),[],!1,null,null,null);a.default=n.exports}}]);