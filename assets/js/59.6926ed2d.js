(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{339:function(t,e,v){"use strict";v.r(e);var a=v(8),l=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux-系统目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-系统目录结构"}},[t._v("#")]),t._v(" Linux 系统目录结构")]),t._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("如果想要了解 Linux，那么你首先需要知道大部分的目录是做什么的，具有什么含义。")]),t._v(" "),e("p",[t._v("为了方便管理和维护，Linux 采用了 "),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84%E6%A0%87%E5%87%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("FHS（Filesystem Hierarchy Standard） 标准"),e("OutboundLink")],1),t._v("（文件系统层次结构标准），它规定了根目录下各个目录应该存在哪些类型的文件（目录也是文件）。")]),t._v(" "),e("p",[t._v("FHS 认为，Linux 系统的根目录（/）最为重要，没有之一，原因：")]),t._v(" "),e("ol",[e("li",[t._v("所有目录都是由根目录衍生出来的;")]),t._v(" "),e("li",[t._v("根目录与系统的开机、修复和还原密切相关。")])]),t._v(" "),e("blockquote",[e("p",[t._v("如果仅仅靠联想，其实还是难以理解其中含义，如果见过真正的"),e("a",{attrs:{href:"https://www.zhihu.com/question/49073893/answer/114986798",target:"_blank",rel:"noopener noreferrer"}},[t._v("小型机"),e("OutboundLink")],1),t._v("，很多概念就变得容易理解了。")])]),t._v(" "),e("h2",{attrs:{id:"fhs-规范目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fhs-规范目录"}},[t._v("#")]),t._v(" FHS 规范目录")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("缩写")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("全称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/bin/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("binary")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("存放系统命令，普通用户和 root 都可以执行。目前 "),e("code",[t._v("/bin/")]),t._v(" 实际上是 "),e("code",[t._v("/usr/bin/")]),t._v(" 的软连接。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/boot/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boot")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("系统启动目录，保存与系统启动相关的文件，如内核文件和启动引导程序（grub）文件等。该目录挂载在 "),e("code",[t._v("/dev/")]),t._v(" 对应的第一块硬盘下，硬盘名根据"),e("RouterLink",{attrs:{to:"/os/linux/directory-structure.html#硬件设备"}},[t._v("硬盘类型")]),t._v("来生成。安装系统时，需要为其单独分一个 boot 分区，大小可为 256~1024MB。")],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("device")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设备文件保存位置。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/etc/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("etceteras（附加）")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("二进制软件包（yum、rpm）等的配置文件路径，例如："),e("code",[t._v("/etc/exports")]),t._v("、"),e("code",[t._v("/etc/fstab")]),t._v("、"),e("code",[t._v("/etc/resove.conf")]),t._v(" 等。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/etc/opt/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("/opt/")]),t._v(" 的配置文件。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/etc/X11/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("X窗口系统（版本11）的配置文件。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/etc/sgml/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SGML 的配置文件。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/etc/xml/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("XML 的配置文件。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/home/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("home")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("普通用户的主目录（也称为家目录），用于用户的默认登录和保存数据。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/lib/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("library")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("启动系统和运行命令所需的共享文件和内核模块存放目录。分为 "),e("code",[t._v("/lib/")]),t._v(" 和 "),e("code",[t._v("/lib64/（64位程序）")]),t._v(" 。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/media/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("media")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("挂载目录。系统建议用来挂载媒体设备，如软盘和光盘。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/mnt/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("mount")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("挂载目录。早期 Linux 中只有这一个挂载目录，并没有细分。系统建议这个目录用来挂载额外的设备，如 U 盘、移动硬盘和其他操作系统的分区。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/opt/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("optional application software package")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("第三方安装的软件保存位置。如果是作为一个真正的运维，那么该目录基本上废弃了，推荐安装到 "),e("code",[t._v("/usr/local/")]),t._v(" 下。在桌面端的 Linux 下还有一些应用会使用该目录。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/proc/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("processes")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("虚拟文件系统。该目录中的数据并不保存在硬盘上，而是保存到内存中。主要保存系统的内核、进程、外部设备状态和网络状态等。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/root/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("root 用户的主目录。例如普通用户 shanyuhai 主目录为 "),e("code",[t._v("/home/shanyuhai")]),t._v(" 下。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/sbin/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("system binary")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("/sbin/")]),t._v(" 的遭遇相对 "),e("code",[t._v("/bin/")]),t._v(" 好一些，一些系统先关的指令只有在 "),e("code",[t._v("root")]),t._v(" 用户下可以访问。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/srv/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("service")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("为系统提供服务数据目录。一些系统服务启动之后，可以在这个目录中保存所需要的数据。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/tmp/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("temp")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("临时目录。所有用户都可以访问和写入。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/usr/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://www.zhihu.com/question/49073893/answer/616735594",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unix Software Resource"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("用于存储系统软件资源。FHS 建议所有开发者，应把软件产品的数据合理的放置在 "),e("code",[t._v("/usr")]),t._v(" 目录下的各子目录中，而不是为他们的产品创建单独的目录。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/usr/bin/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("存放系统命令，普通用户和超级用户都可以执行。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/usr/lib/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("应用程序调用的函数库保存位置。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/usr/sbin/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("存放根文件系统不必要的系统管理命令，如多数服务程序，只有 root 可以使用。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/usr/include/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("C/C++")]),t._v(" 等编程语言头文件的放置目录。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/usr/share/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("应用程序的资源文件保存位置，如帮助文档、说明文档和字体目录。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/usr/src/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("源码包保存位置。下载的源码包和内核源码包都可以保存到这里。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/usr/X11R6/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("图形界面系统保存位置。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/usr/local/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("手工安装的软件保存位置。一般建议源码包软件安装在这个位置。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/var/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("variable data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("用于存储动态数据，例如缓存、日志文件、软件运行过程中产生的文件等。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/var/cache/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("应用程序缓存数据。这些数据是在本地生成的一个耗时的 I/O 或计算结果。应用程序必须能够再生或恢复数据。缓存的文件可以被删除而不导致数据丢失。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/var/lib/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("状态信息。程序运行中需要调用或改变的数据保存位置。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/var/lock/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("锁文件，一类跟踪当前使用中资源的文件。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/var/log/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("登陆文件放置的目录，其中所包含比较重要的文件如 "),e("code",[t._v("/var/log/messages")]),t._v("，"),e("code",[t._v("/var/log/wtmp")]),t._v(" 等。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/var/mail/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("用户的电子邮箱。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/var/run/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("自最后一次启动以来运行中的系统的信息，例如：当前登录的用户和运行中的守护进程。现已经被 "),e("code",[t._v("/run")]),t._v(" 代替。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/var/spool/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("等待处理的任务的脱机文件，例如：打印队列和未读的邮件。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/var/spool/mail/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("用户的邮箱（不推荐的存储位置）。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/var/tmp/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在系统重启过程中可以保留的临时文件。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/run/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("run")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("代替 "),e("code",[t._v("/var/run")]),t._v(" 目录。")])])])]),t._v(" "),e("h2",{attrs:{id:"非-fhs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非-fhs"}},[t._v("#")]),t._v(" 非 FHS")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("缩写")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("全称")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/lost+found/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("lost + found")]),t._v(" "),e("td",[t._v("当系统意外崩溃或意外关机时，产生的一些文件碎片会存放在这里。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/sys/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("system")]),t._v(" "),e("td",[t._v("虚拟文件系统。与 "),e("code",[t._v("/proc/")]),t._v(" 目录类似（数据在内存中），主要用于保存与内核相关的信息，提供了比 "),e("code",[t._v("/proc/")]),t._v(" 更为理想的访问内核数据的途径。")])])])]),t._v(" "),e("h2",{attrs:{id:"硬件设备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#硬件设备"}},[t._v("#")]),t._v(" 硬件设备")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/os/linux/everything-is-a-file.html"}},[t._v("Linux 中一切皆文件")]),t._v("。硬件设备自然也是文件，有各自的文件名称。Linux 系统内核中的 udev 设备管理器会自动对硬件设备的名称进行规范，目的是让用户通过设备文件的名称，就可以猜测设备的属性及相关信息。udev 设备管理器会一直以进程的形式运行，并侦听系统内核发出的信号来管理位于 "),e("code",[t._v("/dev")]),t._v(" 目录下的设备文件。")],1),t._v(" "),e("p",[t._v("常见硬件设备文件名：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("硬件设备")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("文件名称")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("IDE设备")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev/hd[a-d]，现在的 IDE设备已经很少见了，因此一般的硬盘设备会以 /dev/sd 开头。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("SCSI/SATA/U盘")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev/sd[a-p]，一台主机可以有多块硬盘，因此系统采用 a~p 代表 16 块不同的硬盘。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("m.2 硬盘")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev/nvme1n1p[1-9]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("软驱")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev/fd[0-1]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("打印机")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev/lp[0-15]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("光驱")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev/cdrom")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("鼠标")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev/mouse")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("磁带机")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev/st0 或 /dev/ht0")])])])]),t._v(" "),e("p",[t._v("特殊设备文件：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("文件名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("/dev/null")])]),t._v(" "),e("td",[t._v("它丢弃一切写入其中的数据（但报告写入操作成功），读取它则会立即得到一个 EOF。")]),t._v(" "),e("td",[t._v("通常被用于丢弃不需要的输出流，或作为输入流的空文件。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("/dev/zero")])]),t._v(" "),e("td",[t._v("当你读它的时候，他会提供无限的空字符串（NULL，0x00）。")]),t._v(" "),e("td",[t._v("通常被用于提供字符流来覆盖信息，或利用它生成一个特定大小的空白文件。")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);