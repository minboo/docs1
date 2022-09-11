(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{316:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-的-location-规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的-location-规则"}},[t._v("#")]),t._v(" Nginx 的 location 规则")]),t._v(" "),a("h2",{attrs:{id:"规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[t._v("#")]),t._v(" 规则")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Syntax:")]),t._v(" location [ = | ~ | ~* | ^~ ] uri")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" @name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nDefault: —\nContext: server, location\n")])])]),a("p",[t._v("可以看到 "),a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#location",target:"_blank",rel:"noopener noreferrer"}},[t._v("location"),a("OutboundLink")],1),t._v(" 具备两种规则，其中 "),a("code",[t._v("@")]),t._v(" 表示内部服务跳转，用于处理异常请求。")]),t._v(" "),a("p",[t._v("另外的是修饰符：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("prefix")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("priority")]),t._v(" "),a("th",[t._v("desc")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("=")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",[t._v("路径完全匹配")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("~")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",[t._v("区分大小写的正则匹配")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("~*")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",[t._v("不区分大小写的正则匹配")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("^~")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",[t._v("前缀匹配")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",[t._v("不带任何修饰的前缀匹配，便于区分后续用 "),a("code",[t._v("none")]),t._v(" 替代，Nginx 并无该说法")])])])]),t._v(" "),a("h3",{attrs:{id:"_1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1"}},[t._v("#")]),t._v(" 1. "),a("code",[t._v("=")])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" = /abc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abc # 匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/ABC # 据说 windows 大小写不敏感会匹配，但未测试")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abc/ # 不匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abcd # 不匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abc?a=1 # 匹配")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" = /abc/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abc/ # 匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abc # 不匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abc/a # 不匹配")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-、"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-、"}},[t._v("#")]),t._v(" 2. "),a("code",[t._v("~")]),t._v("、"),a("code",[t._v("~*")])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此处未对结尾做限制，`~*` 一致")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" ~ ^/abc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abc # 匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abcd # 匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abc/a # 匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abc/a/b # 匹配")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-、none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-、none"}},[t._v("#")]),t._v(" 3. "),a("code",[t._v("^~")]),t._v("、"),a("code",[t._v("none")])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ^~ 一致，只是优先度更高")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /abc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abc # 匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abcd # 匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abcd/a # 匹配")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost/abc/a/b # 匹配")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顺序"}},[t._v("#")]),t._v(" 顺序")]),t._v(" "),a("p",[t._v("伪代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" temp\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("精准匹配 "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" 精准匹配的结果\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("前缀匹配"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前缀匹配包括 `^~` 和 啥都没有")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("前缀匹配 "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("^~")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" 前缀匹配结果\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("前缀匹配 "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("none")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 前缀匹配结果\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("正则匹配"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" 正则匹配结果\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" temp\n")])])]),a("p",[t._v("需要注意的是前缀匹配模式下与 "),a("code",[t._v("location")]),t._v(" 在文件中的顺序无关，比的是谁的 "),a("code",[t._v("location")]),t._v(" 更长；而正则匹配则跟顺序有关。")])])}),[],!1,null,null,null);a.default=e.exports}}]);