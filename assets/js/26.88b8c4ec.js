(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{307:function(t,s,a){"use strict";a.r(s);var e=a(8),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"stored-procedure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stored-procedure"}},[t._v("#")]),t._v(" Stored Procedure")]),t._v(" "),s("p",[t._v("存储过程三大作用：")]),t._v(" "),s("ul",[s("li",[t._v("存储和管理 SQL 代码")]),t._v(" "),s("li",[t._v("性能优化")]),t._v(" "),s("li",[t._v("数据安全")])]),t._v(" "),s("p",[t._v("糟糕的是我似乎很少见到它们的应用，到底要不要使用存储过程也有一些探讨：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.zhihu.com/question/54408187",target:"_blank",rel:"noopener noreferrer"}},[t._v("存储过程在实际项目中用的多吗？（知乎）"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/q/1010000007981279",target:"_blank",rel:"noopener noreferrer"}},[t._v("存储过程在实际项目中用的多吗？（SF）"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.zhihu.com/question/57545650/answer/325422160",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么阿里巴巴Java开发手册里要求禁止使用存储过程？"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("但基础的还是要了解的。")]),t._v(" "),s("h2",{attrs:{id:"创建存储过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建存储过程"}},[t._v("#")]),t._v(" 创建存储过程")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROCEDURE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" get_customer_by_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELIMITER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROCEDURE")]),t._v(" get_customer_by_id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("  customers c\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cust_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELIMITER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("再调用：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CALL")]),t._v(" get_customer_by_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10003")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);