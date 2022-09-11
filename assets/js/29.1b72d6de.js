(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{310:function(s,t,a){"use strict";a.r(t);var r=a(8),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[s._v("#")]),s._v(" VIEWS")]),s._v(" "),t("p",[s._v("视图是虚拟的表。")]),s._v(" "),t("p",[s._v("优点：")]),s._v(" "),t("ul",[t("li",[s._v("重用 SQL 语句")]),s._v(" "),t("li",[s._v("简化复杂的 SQL 操作")]),s._v(" "),t("li",[s._v("使用表的组成部分而不是整个表")]),s._v(" "),t("li",[s._v("保护数据")]),s._v(" "),t("li",[s._v("更改数据格式和表示")])]),s._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("h3",{attrs:{id:"简单示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单示例"}},[s._v("#")]),s._v(" 简单示例")]),s._v(" "),t("p",[s._v("创建视图：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" product_customers "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n    cust_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    cust_contact"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    prod_id\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" customers c \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" orders o\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USING")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cust_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" orderitems oi\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USING")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("order_num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("使用视图：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n  cust_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  cust_contact\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" product_customers\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" prod_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TNT2'")]),s._v("\n")])])]),t("h2",{attrs:{id:"可更新视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可更新视图"}},[s._v("#")]),s._v(" 可更新视图")]),s._v(" "),t("p",[s._v("视图除了可以用在 SELECT 中，也可以用在增改删中，但具有限制条件：")]),s._v(" "),t("ul",[t("li",[s._v("分组（GROUP BY 和 HAVING）")]),s._v(" "),t("li",[s._v("联结")]),s._v(" "),t("li",[s._v("子查询")]),s._v(" "),t("li",[s._v("并")]),s._v(" "),t("li",[s._v("聚集函数")]),s._v(" "),t("li",[s._v("DISTINCT")]),s._v(" "),t("li",[s._v("导出计算列")])])])}),[],!1,null,null,null);t.default=e.exports}}]);