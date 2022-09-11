(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{299:function(a,s,t){"use strict";t.r(s);var e=t(8),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"了解-docker-镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#了解-docker-镜像"}},[a._v("#")]),a._v(" 了解 Docker 镜像")]),a._v(" "),s("h2",{attrs:{id:"获取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像"}},[a._v("#")]),a._v(" 获取镜像")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("格式")]),a._v(" "),s("p",[s("code",[a._v("docker pull [OPTIONS] NAME[:TAG|@DIGEST]")]),a._v("。")]),a._v(" "),s("p",[a._v("NAME 是镜像仓库名称（用来区分镜像），TAG 是镜像的标签（往往用来表示版本信息）。若不指定 TAG 则默认选择 "),s("code",[a._v("latest")]),a._v("，即最新版本。")])]),a._v(" "),s("p",[a._v("在获取镜像前可以查询是否存在对应的镜像。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker search [OPTIONS] TERM")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" search ubuntu\n")])])]),s("h2",{attrs:{id:"镜像信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像信息"}},[a._v("#")]),a._v(" 镜像信息")]),a._v(" "),s("h3",{attrs:{id:"_1-所有镜像概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-所有镜像概览"}},[a._v("#")]),a._v(" 1. 所有镜像概览")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images\n\nREPOSITORY            TAG                 IMAGE ID            CREATED             SIZE\nnginx                 v2                  c7e8f4f26fef        About an hour ago   132MB\nnginx                 latest              0901fa9da894        "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(" days ago          132MB\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# `REPOSITORY` 来自于哪个仓库，比如ubuntu表示ubuntu系列的基础镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# `TAG` 镜像的标签信息，比如18.04、latest表示不同的版本信息。标签只是标记，并不能标识镜像内容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# `IMAGE ID` 镜像的ID（唯一标识镜像），如果两个镜像的ID相同，说明它们实际上指向了同一个镜像，只是具有不同标签名称而已")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# `CREATED` 创建时间，说明镜像最后的更新时间")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# `SIZE` 镜像大小，优秀的镜像往往体积都较小")]),a._v("\n")])])]),s("h3",{attrs:{id:"_2-指定镜像详细"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-指定镜像详细"}},[a._v("#")]),a._v(" 2. 指定镜像详细")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker inspect [OPTIONS] NAME|ID [NAME|ID...]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" inspect ubuntu:latest\n")])])]),s("h3",{attrs:{id:"_3-镜像历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-镜像历史"}},[a._v("#")]),a._v(" 3. 镜像历史")]),a._v(" "),s("p",[a._v("镜像文件是由多个层组成，可查看每个层的创建信息。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker history [OPTIONS] IMAGE")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("history")]),a._v(" ubuntu:latest\n")])])]),s("h2",{attrs:{id:"创建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像"}},[a._v("#")]),a._v(" 创建镜像")]),a._v(" "),s("p",[a._v("创建镜像的方法主要有三种：基于已有镜像的内容创建（commit）、基于本地模板导入（import）、基于 Dockerfile 创建（build）。")]),a._v(" "),s("h3",{attrs:{id:"_1-已有容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-已有容器"}},[a._v("#")]),a._v(" 1. 已有容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 对一个镜像进行修改后")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"修改了默认首页"')]),a._v(" webserver nginx:new\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 验证")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images\n")])])]),s("h3",{attrs:{id:"_2-本地模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-本地模板"}},[a._v("#")]),a._v(" 2. 本地模板")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" http://example.com/exampleimage.tgz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" /path/to/exampleimage.tgz\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 还可以利用 `STDIN`")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" exampleimage.tgz "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" - exampleimagelocal:new\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 验证")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images\n")])])]),s("h3",{attrs:{id:"_3-dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-dockerfile"}},[a._v("#")]),a._v(" 3. Dockerfile")]),a._v(" "),s("p",[s("code",[a._v("Dockerfile")]),a._v(" 是一个文本文件，利用给定的指令描述基于某个父镜像创建新镜像的过程。")]),a._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" ubuntu:18.04")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COPY")]),a._v(" . /app")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" make /app")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CMD")]),a._v(" python /app/app.py")]),a._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker build [OPTIONS] PATH | URL | -")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build https://github.com/creack/docker-firefox\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" nginx:ttt\n")])])]),s("h2",{attrs:{id:"修改镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改镜像"}},[a._v("#")]),a._v(" 修改镜像")]),a._v(" "),s("h3",{attrs:{id:"_1-添加镜像标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加镜像标签"}},[a._v("#")]),a._v(" 1. 添加镜像标签")]),a._v(" "),s("p",[a._v("仅添加镜像标签，实际 "),s("code",[a._v("IMAGE ID")]),a._v(" 指向同一个。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" tag ubuntu:latest myubuntu:latest\n")])])]),s("h3",{attrs:{id:"_2-删除镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-删除镜像"}},[a._v("#")]),a._v(" 2. 删除镜像")]),a._v(" "),s("p",[a._v("需注意 "),s("code",[a._v("docker rmi")]),a._v(" 才是删除镜像，而 "),s("code",[a._v("docker rm")]),a._v(" 是删除容器。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker rmi [OPTIONS] IMAGE [IMAGE...]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi ubuntu:latest\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# Error response from daemon: conflict: unable to remove repository reference "ubuntu:latest" (must force) - container b0f36e5ede8d is using its referenced image adafef2e596e')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 正在使用中，需要先解除容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" b0f36e5ede8d\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 解除后再删除镜像，删除镜像还可以使用 `IMAGE ID`")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi adafef2e596e\n")])])]),s("p",[a._v("批量删除镜像：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 以删除 harbor 镜像示例")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'goharbor'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $3}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),s("h3",{attrs:{id:"_3-清理镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-清理镜像"}},[a._v("#")]),a._v(" 3. 清理镜像")]),a._v(" "),s("p",[a._v("系统中可能会遗留一些临时的镜像文件。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" image prune "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"分享镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分享镜像"}},[a._v("#")]),a._v(" 分享镜像")]),a._v(" "),s("h3",{attrs:{id:"_1-save"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-save"}},[a._v("#")]),a._v(" 1. save")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 列出镜像")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker save [OPTIONS] IMAGE [IMAGE...]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" ubuntu_18.04.tar ubuntu:18.04\n")])])]),s("h3",{attrs:{id:"_2-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-load"}},[a._v("#")]),a._v(" 2. load")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker load [OPTIONS]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" load "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" ubuntu_18.04.tar\n")])])]),s("h3",{attrs:{id:"_3-hub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-hub"}},[a._v("#")]),a._v(" 3. Hub")]),a._v(" "),s("p",[a._v("还可以直接分享到 Docker Hub 公共仓库，这需要在官网注册帐号。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 模拟 nginx 打个新 tag")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" tag nginx:latest username/nginx:latest\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# push")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" push username/nginx:latest\n")])])]),s("h2",{attrs:{id:"docker-slim-优化镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-slim-优化镜像"}},[a._v("#")]),a._v(" Docker slim 优化镜像")]),a._v(" "),s("p",[a._v("首先需要获取 "),s("a",{attrs:{href:"https://github.com/docker-slim/docker-slim/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker Slim"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" ds.tar.gz https://downloads.dockerslim.com/releases/1.37.0/dist_linux.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 解压")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" ds.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 移动到 bin")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" dist_linux/docker-slim /usr/local/bin/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" dist_linux/docker-slim-sensor /usr/local/bin/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 校验")]),a._v("\ndocker-slim "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker-slim version linux|Transformer|1.37.0|70cc8acfcb733161ce7e685b81ad6c172643c222|2021-09-23_09:23:43AM")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者直接使用脚本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sL")]),a._v(" https://raw.githubusercontent.com/docker-slim/docker-slim/master/scripts/install-dockerslim.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-E")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -\n")])])]),s("h3",{attrs:{id:"node-镜像优化大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-镜像优化大小"}},[a._v("#")]),a._v(" Node 镜像优化大小")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看原大小")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# node_app                     1.0.0               3fe14ce78d6d        1 months ago        593MB")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker slim")]),a._v("\ndocker-slim build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--target")]),a._v(" node_app:1.0.0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tag")]),a._v(" node_app:1.0.0-slim --http-probe"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 再次查看，发现显著缩小")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# node_app                     1.0.0-slim          061aa2d584d0        19 seconds ago      84.4MB")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# node_app                     1.0.0               3fe14ce78d6d        6 months ago        593MB")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);