(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{297:function(t,a,s){"use strict";s.r(a);var e=s(8),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dockerfile-详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-详解"}},[t._v("#")]),t._v(" Dockerfile 详解")]),t._v(" "),a("h2",{attrs:{id:"基本结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本结构"}},[t._v("#")]),t._v(" 基本结构")]),t._v(" "),a("p",[a("code",[t._v("Dockerfile")]),t._v(" 由一行行命令语句组成，并且支持以 "),a("code",[t._v("#")]),t._v(" 开头的注释行。一般而言，"),a("code",[t._v("Dockerfile")]),t._v(" 主体内容分为四部分：基础镜像信息、维护者信息、镜像操作指令和容器启动时执行指令。")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基础镜像信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ubuntu:18.04")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 维护者信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LABEL")]),t._v(" maintainer docker_user <username@example.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 镜像操作指令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" . /app")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" make /app")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 容器启动时执行指令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" python /app/app.py")]),t._v("\n")])])]),a("h2",{attrs:{id:"指令说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令说明"}},[t._v("#")]),t._v(" 指令说明")]),t._v(" "),a("h3",{attrs:{id:"_1-arg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-arg"}},[t._v("#")]),t._v(" 1. ARG")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" <name>[=<default value>]")]),t._v("\n")])])]),a("p",[t._v("定义创建镜像过程中使用的变量。")]),t._v(" "),a("h3",{attrs:{id:"_2-from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-from"}},[t._v("#")]),t._v(" 2. FROM")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" [--platform=<platform>] <image> [AS <name>]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" [--platform=<platform>] <image>[:<tag>] [AS <name>]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" [--platform=<platform>] <image>[@<digest>] [AS <name>]")]),t._v("\n")])])]),a("p",[t._v("指定所创建镜像的基础镜像。")]),t._v(" "),a("h3",{attrs:{id:"_3-label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-label"}},[t._v("#")]),t._v(" 3. LABEL")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LABEL")]),t._v(" <key>=<value> <key>=<value> <key>=<value> ...")]),t._v("\n")])])]),a("p",[a("code",[t._v("LABEL")]),t._v(" 指令可以为生成的镜像添加元数据标签信息。这些信息可以用来辅助过滤出特定镜像。")]),t._v(" "),a("h3",{attrs:{id:"_4-expose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-expose"}},[t._v("#")]),t._v(" 4. EXPOSE")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" <port> [<port>/<protocol>...]")]),t._v("\n")])])]),a("p",[t._v("声明镜像内服务监听的端口，但并不会自动完成端口映射。")]),t._v(" "),a("h3",{attrs:{id:"_5-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-env"}},[t._v("#")]),t._v(" 5. ENV")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" <key> <value>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" <key>=<value> ...")]),t._v("\n")])])]),a("p",[t._v("指定环境变量，在镜像生成过程中会被后续 "),a("code",[t._v("RUN")]),t._v(" 指令使用，在镜像启动的容器中也会存在。")]),t._v(" "),a("h3",{attrs:{id:"_6-entrypoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-entrypoint"}},[t._v("#")]),t._v(" 6. ENTRYPOINT")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENTRYPOINT")]),t._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executable"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param1"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param2"')]),t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENTRYPOINT")]),t._v(" command param1 param2")]),t._v("\n")])])]),a("p",[t._v("指定镜像的默认入口命令，该入口命令会在启动容器时作为根命令执行，所有传入值作为该命令的参数。")]),t._v(" "),a("h3",{attrs:{id:"_7-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-volume"}},[t._v("#")]),t._v(" 7. VOLUME")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VOLUME")]),t._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data"')]),t._v("]")]),t._v("\n")])])]),a("p",[t._v("创建一个数据卷挂载点。")]),t._v(" "),a("h3",{attrs:{id:"_8-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-user"}},[t._v("#")]),t._v(" 8. USER")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USER")]),t._v(" <user>[:<group>]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USER")]),t._v(" <UID>[:<GID>]")]),t._v("\n")])])]),a("p",[t._v("指定运行容器时的用户名或 "),a("code",[t._v("UID")]),t._v("，后续的 "),a("code",[t._v("RUN")]),t._v(" 等指令也会使用指定的用户身份。")]),t._v(" "),a("h3",{attrs:{id:"_9-workdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-workdir"}},[t._v("#")]),t._v(" 9. WORKDIR")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /path/to/workdir")]),t._v("\n")])])]),a("p",[t._v("为后续的 "),a("code",[t._v("RUN")]),t._v("、"),a("code",[t._v("CMD")]),t._v("、"),a("code",[t._v("ENTRYPOINT")]),t._v(" 指令配置工作目录。\n可以使用多个 "),a("code",[t._v("WORKDIR")]),t._v(" 指令，后续命令如果参数是相对路径，则会基于之前命令指定的路径。")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" b")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" c")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /a/b/c")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" pwd")]),t._v("\n")])])]),a("h3",{attrs:{id:"_10-onbuild"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-onbuild"}},[t._v("#")]),t._v(" 10. ONBUILD")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ONBUILD")]),t._v(" <INSTRUCTION>")]),t._v("\n")])])]),a("p",[t._v("指定当基于所生成镜像创建子镜像时，自动执行的操作指令。")]),t._v(" "),a("h3",{attrs:{id:"_11-stopsignal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-stopsignal"}},[t._v("#")]),t._v(" 11. STOPSIGNAL")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("STOPSIGNAL")]),t._v(" signal")]),t._v("\n")])])]),a("p",[t._v("指定所创建镜像启动的容器接收退出的信号值。")]),t._v(" "),a("h3",{attrs:{id:"_12-healthcheck"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-healthcheck"}},[t._v("#")]),t._v(" 12. HEALTHCHECK")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HEALTHCHECK")]),t._v(" [OPTIONS] CMD command")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HEALTHCHECK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NONE")])]),t._v("\n")])])]),a("p",[t._v("配置所启动容器如何进行健康检查。")]),t._v(" "),a("h3",{attrs:{id:"_13-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-shell"}},[t._v("#")]),t._v(" 13. SHELL")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHELL")]),t._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executable"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parameters"')]),t._v("]")]),t._v("\n")])])]),a("p",[t._v("指定其他命令使用 "),a("code",[t._v("shell")]),t._v(" 时的默认 "),a("code",[t._v("shell")]),t._v(" 类型。")]),t._v(" "),a("h3",{attrs:{id:"_14-run-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-run-操作"}},[t._v("#")]),t._v(" 14. RUN（操作）")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" <command>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executable"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param1"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param2"')]),t._v("]")]),t._v("\n")])])]),a("p",[t._v("运行指定命令。")]),t._v(" "),a("h3",{attrs:{id:"_15-cmd-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-cmd-操作"}},[t._v("#")]),t._v(" 15. CMD（操作）")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executable"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param1"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param2"')]),t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param1"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param2"')]),t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" command param1 param2")]),t._v("\n")])])]),a("p",[t._v("指定启动容器时默认执行的命令。")]),t._v(" "),a("h3",{attrs:{id:"_16-add-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-add-操作"}},[t._v("#")]),t._v(" 16. ADD（操作）")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" [--chown=<user>:<group>] <src>... <dest>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" [--chown=<user>:<group>] ["),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<src>"')]),t._v(",... "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<dest>"')]),t._v("]")]),t._v("\n")])])]),a("p",[t._v("添加内容到镜像。")]),t._v(" "),a("h3",{attrs:{id:"_17-copy-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-copy-操作"}},[t._v("#")]),t._v(" 17. COPY（操作）")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" [--chown=<user>:<group>] <src>... <dest>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" [--chown=<user>:<group>] ["),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<src>"')]),t._v(",... "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<dest>"')]),t._v("]")]),t._v("\n")])])]),a("p",[t._v("复制内容到镜像。\n"),a("code",[t._v("COPY")]),t._v(" 与 "),a("code",[t._v("ADD")]),t._v(" 指令功能类似，当使用本地目录为源目录时，推荐使用 "),a("code",[t._v("COPY")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[t._v("#")]),t._v(" 构建镜像")]),t._v(" "),a("p",[t._v("编写完 "),a("code",[t._v("Dockerfile")]),t._v(" 之后，可以通过 "),a("code",[t._v("docker build [OPTIONS] PATH | URL | -")]),t._v(" 来构建镜像。")]),t._v(" "),a("h3",{attrs:{id:"_1-资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-资源"}},[t._v("#")]),t._v(" 1. 资源")]),t._v(" "),a("p",[t._v("创建一个 "),a("code",[t._v("html")]),t._v(" 页面。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zh-cms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("renderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("webkit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("X-UA-Compatible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("IE=edge,chrome=1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width,initial-scale=1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("<%= BASE_URL %>favicon.ico"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Docker Test"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("noscript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("We're sorry but t-beam doesn't work properly without JavaScript enabled. Please enable it to continue."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("noscript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Hi, Docker Here!\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- built files will be auto injected --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-dockerfile"}},[t._v("#")]),t._v(" 2. Dockerfile")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" nginx")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" ./index.html /usr/share/nginx/html")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-build"}},[t._v("#")]),t._v(" 3. build")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" nginx-dockerfile-image "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-run"}},[t._v("#")]),t._v(" 4. run")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" nginx-dockerfile-c nginx-dockerfile-image\n")])])]),a("h3",{attrs:{id:"_5-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证"}},[t._v("#")]),t._v(" 5. 验证")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES\n225af017d59c        nginx-test          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/docker-entrypoint.…"')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" seconds ago       Up "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" seconds        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:32769-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp     nginx-dockerfile-c\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开对应的 IP 的端口 32769 进行验证")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);