(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{343:function(t,a,s){"use strict";s.r(a);var e=s(8),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"防火墙-firewalld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙-firewalld"}},[t._v("#")]),t._v(" 防火墙 firewalld")]),t._v(" "),a("p",[t._v('firewalld 是 CentOS 7 新增的特性，其支持动态更新，且添加了防火墙 "zones" 的概念。')]),t._v(" "),a("p",[t._v("firewalld 与 iptables 自身并不具备防火墙的功能，都需要通过内核的 netfilter 来实现，它们的作用都是维护过滤的规则。")]),t._v(" "),a("p",[t._v("firewalld 的配置文件存放在 "),a("code",[t._v("/usr/lib/firewalld/")]),t._v(" 和 "),a("code",[t._v("/etc/firewalld/")]),t._v(" 里的 XML 文件中。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" firewalld firewall-config\n")])])]),a("h2",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),a("blockquote",[a("p",[t._v("可能需要先使用 systemctl 套件启用服务。")]),t._v(" "),a("p",[t._v("除了使用命令格式外，还可以使用 GUI，不过需要注意的是在登录时需要 "),a("code",[t._v("ssh -Y user@ip")]),t._v(" 。")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),a("p",[t._v("firewall-cmd [Options ... ]")])]),t._v(" "),a("h3",{attrs:{id:"_1-状态选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-状态选项"}},[t._v("#")]),t._v(" 1. 状态选项")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("option")]),t._v(" "),a("th",[t._v("effect")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("--state")]),t._v(" "),a("td",[t._v("firewalld 的状态。")])]),t._v(" "),a("tr",[a("td",[t._v("--reload")]),t._v(" "),a("td",[t._v("不中断服务的重新加载。")])]),t._v(" "),a("tr",[a("td",[t._v("--complete-reload")]),t._v(" "),a("td",[t._v("中断所有连接的重新加载。")])]),t._v(" "),a("tr",[a("td",[t._v("--runtime-to-permanent")]),t._v(" "),a("td",[t._v("将当前防火墙的规则永久保存。")])]),t._v(" "),a("tr",[a("td",[t._v("--check-config")]),t._v(" "),a("td",[t._v("检查配置正确性。")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-日志选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-日志选项"}},[t._v("#")]),t._v(" 2. 日志选项")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("option")]),t._v(" "),a("th",[t._v("effect")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("--get-log-denied")]),t._v(" "),a("td",[t._v("获取记录被拒绝的日志。")])]),t._v(" "),a("tr",[a("td",[t._v("--set-log-denied=value")]),t._v(" "),a("td",[t._v("设置记录被拒绝的日志，只能为 'all','unicast','broadcast','multicast','off' 其中的一个。")])])])]),t._v(" "),a("h2",{attrs:{id:"操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),a("p",[t._v("在开始操作前需要对 zone 有一定的了解。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("zone")]),t._v(" "),a("th",[t._v("zh")]),t._v(" "),a("th",[t._v("effect")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("drop")]),t._v(" "),a("td",[t._v("丢弃")]),t._v(" "),a("td",[t._v("任何接收的网络数据包都被丢弃，没有任何回复。仅能有发送出去的网络连接。")])]),t._v(" "),a("tr",[a("td",[t._v("block")]),t._v(" "),a("td",[t._v("限制")]),t._v(" "),a("td",[t._v("任何接收的网络连接都被 "),a("code",[t._v("IPv4")]),t._v(" 的 icmp-host-prohibited 信息和 "),a("code",[t._v("IPv6")]),t._v(" 的 icmp6-adm-prohibited 信息所拒绝。")])]),t._v(" "),a("tr",[a("td",[t._v("public")]),t._v(" "),a("td",[t._v("公共")]),t._v(" "),a("td",[t._v("在公共区域内使用，不能相信网络内的其他计算机不会对您的计算机造成危害，只能接收经过选取的连接。")])]),t._v(" "),a("tr",[a("td",[t._v("external")]),t._v(" "),a("td",[t._v("外部")]),t._v(" "),a("td",[t._v("特别是为路由器启用了伪装功能的外部网。您不能信任来自网络的其他计算，不能相信它们不会对您的计算机造成危害，只能接收经过选择的连接。")])]),t._v(" "),a("tr",[a("td",[t._v("dmz")]),t._v(" "),a("td",[t._v("非军事区")]),t._v(" "),a("td",[t._v("用于您的非军事区内的电脑，此区域内可公开访问，可以有限地进入您的内部网络，仅仅接收经过选择的连接。")])]),t._v(" "),a("tr",[a("td",[t._v("work")]),t._v(" "),a("td",[t._v("工作")]),t._v(" "),a("td",[t._v("用于工作区。您可以基本相信网络内的其他电脑不会危害您的电脑。仅仅接收经过选择的连接。")])]),t._v(" "),a("tr",[a("td",[t._v("home")]),t._v(" "),a("td",[t._v("家庭")]),t._v(" "),a("td",[t._v("用于家庭网络。您可以基本信任网络内的其他计算机不会危害您的计算机。仅仅接收经过选择的连接。")])]),t._v(" "),a("tr",[a("td",[t._v("internal")]),t._v(" "),a("td",[t._v("内部")]),t._v(" "),a("td",[t._v("用于内部网络。您可以基本上信任网络内的其他计算机不会威胁您的计算机。仅仅接受经过选择的连接。")])]),t._v(" "),a("tr",[a("td",[t._v("trusted")]),t._v(" "),a("td",[t._v("信任")]),t._v(" "),a("td",[t._v("可接受所有的网络连接。")])])])]),t._v(" "),a("p",[a("code",[t._v("firewalld")]),t._v(" 里的默认区域被设定为公共区域。")]),t._v(" "),a("h3",{attrs:{id:"_1-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-service"}},[t._v("#")]),t._v(" 1. service")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示支持的 zone 列表：")]),t._v("\nfirewall-cmd --get-zones\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有 zone 详情：")]),t._v("\nfirewall-cmd --list-all-zones\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某一 zone 详情：")]),t._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --list-all\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看默认 zone：")]),t._v("\nfirewall-cmd --get-default-zone\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有 services：")]),t._v("\nfirewall-cmd --get-services\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某一服务（返回 yes/no）：")]),t._v("\nfirewall-cmd --query-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nfirewall-cmd --query-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# no / 80")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前 service：")]),t._v("\nfirewall-cmd --list-services\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加服务：")]),t._v("\nfirewall-cmd --add-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除服务：")]),t._v("\nfirewall-cmd --remove-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许SSH服务通过：")]),t._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--enable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("service")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ssh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁止SSH服务通过：")]),t._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--disable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("service")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ssh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加服务至 zone：")]),t._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-port"}},[t._v("#")]),t._v(" 2. port")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有端口：")]),t._v("\nfirewall-cmd --list-port\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某个端口：")]),t._v("\nfirewall-cmd --query-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("/tcp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加某个端口：")]),t._v("\nfirewall-cmd --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("/tcp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除某个端口：")]),t._v("\nfirewall-cmd --remove-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("/tcp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 80 端口的流量转发至 8080：")]),t._v("\nfirewall-cmd --add-forward-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":proto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tcp:toport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("   \n")])])]),a("h3",{attrs:{id:"_3-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ip"}},[t._v("#")]),t._v(" 3. IP")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查是否允许伪装 IP：")]),t._v("\nfirewall-cmd --query-masquerade\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许防火墙伪装 IP：")]),t._v("\nfirewall-cmd --add-masquerade\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁止防火墙伪装 IP：")]),t._v("\nfirewall-cmd --remove-masquerade\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 封禁某个 IP：")]),t._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" --add-rich-rule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rule family=ipv4 source address=\"ip\" drop'")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-rich-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-rich-rule"}},[t._v("#")]),t._v(" 4. rich-rule")]),t._v(" "),a("p",[t._v("多规则命令的格式或结构如下（及"),a("a",{attrs:{href:"https://access.redhat.com/documentation/zh_cn/red_hat_enterprise_linux/7/html/security_guide/sec-using_firewalls#Configuring_Complex_Firewall_Rules_with_the_Rich-Language_Syntax",target:"_blank",rel:"noopener noreferrer"}},[t._v("解释"),a("OutboundLink")],1),t._v("）：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("rule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("family"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<rule family>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<address>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invert"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"True"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" destination "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<address>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invert"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"True"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<prefix text>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("level"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<log level>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("limit "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rate/duration"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" audit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" accept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("reject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("drop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);