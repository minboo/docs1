(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{344:function(a,s,t){"use strict";t.r(s);var e=t(8),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"花里胡哨且实用的命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#花里胡哨且实用的命令"}},[a._v("#")]),a._v(" 花里胡哨且实用的命令")]),a._v(" "),s("h2",{attrs:{id:"快速备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速备份"}},[a._v("#")]),a._v(" 快速备份")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" test.txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(",.bak"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-al")]),a._v(" test.txt* "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 验证")]),a._v("\n")])])]),s("p",[a._v("很多时候更希望以时间作为区分进行备份：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(",_"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%y%m%d_%H%M"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("这样有些麻烦，可将其制作为一个脚本，可通过类似 "),s("code",[a._v("bash cpfile.sh test")]),a._v(" 调用：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1_")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%y%m%d_%H%M"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n")])])]),s("h2",{attrs:{id:"清空文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清空文件"}},[a._v("#")]),a._v(" 清空文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" access.log\n")])])]),s("h2",{attrs:{id:"创建文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建文件夹"}},[a._v("#")]),a._v(" 创建文件夹")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /app/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("template,logs,package/src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v("\n")])])]),s("h2",{attrs:{id:"生成序列文件内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成序列文件内容"}},[a._v("#")]),a._v(" 生成序列文件内容")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[a._v("i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);