/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "80752e25de4f04fc473de692badedf8d"
  },
  {
    "url": "about/index.html",
    "revision": "bc3d0683c0647bcc368bfd21e9ccdd2b"
  },
  {
    "url": "assets/css/0.styles.5bae31cc.css",
    "revision": "3d4818c617edac3c2c54fa0add9350a5"
  },
  {
    "url": "assets/img/bookmark-scripts.b2a54dfa.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "assets/img/git-lifecycle.b65dc1f4.png",
    "revision": "b65dc1f4245a9a1230e78bac21f5ee6f"
  },
  {
    "url": "assets/img/git-state-model.c7f681dc.png",
    "revision": "c7f681dcc3b9ea88afafb87f2ff85370"
  },
  {
    "url": "assets/img/github-add-ssh-key.9f897b5e.png",
    "revision": "9f897b5e1f906c6f540d90791c0492ac"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/website-routes-test.b8cf8adf.png",
    "revision": "b8cf8adfa2ee92d9c1d10b2c6a3659c4"
  },
  {
    "url": "assets/js/10.14b22f93.js",
    "revision": "113da99ba12dd023fbc02ca9ca672751"
  },
  {
    "url": "assets/js/100.3e73319c.js",
    "revision": "480e08be8bbda4811dbcec5659cad8f3"
  },
  {
    "url": "assets/js/101.1685da8c.js",
    "revision": "9a8c23434adb2227874799c33728d288"
  },
  {
    "url": "assets/js/102.be61dc9c.js",
    "revision": "55f9b91a73d69257d1f6b44b1223afdc"
  },
  {
    "url": "assets/js/103.b0ed0e73.js",
    "revision": "34ab2b56556fa4fe4f474a93baefc30d"
  },
  {
    "url": "assets/js/104.1788d6c5.js",
    "revision": "26872d2c7ea41d7820f67844de82724e"
  },
  {
    "url": "assets/js/11.97d54b7d.js",
    "revision": "a9ed8dd67b1b91232fa531f4606d1c46"
  },
  {
    "url": "assets/js/12.d1459a98.js",
    "revision": "f485ceaa716d8cf336544642d7465d3b"
  },
  {
    "url": "assets/js/13.dfdc98f8.js",
    "revision": "31898daa011d1a0f8467571c337b0906"
  },
  {
    "url": "assets/js/14.c83614c0.js",
    "revision": "6782a9ecbf2b07a852de604580f48948"
  },
  {
    "url": "assets/js/15.2abdd438.js",
    "revision": "16698806a2d545f2514e573a5dc9cc85"
  },
  {
    "url": "assets/js/16.f22695ab.js",
    "revision": "9a4cc87b264db3d160fc546e23d41b0b"
  },
  {
    "url": "assets/js/17.38072a2b.js",
    "revision": "52358d8e0f9eadc391b28c54ceafabeb"
  },
  {
    "url": "assets/js/18.b4b40293.js",
    "revision": "d2a67be9d34e1580921bb5e1a5cf7f6f"
  },
  {
    "url": "assets/js/19.4a1f7148.js",
    "revision": "721d176dd1cda4ffa211256926e12f48"
  },
  {
    "url": "assets/js/2.8154945c.js",
    "revision": "a62af50b3c4085759653732bed76a605"
  },
  {
    "url": "assets/js/20.bd835252.js",
    "revision": "c7259ab27742dee0fd5293ca820fc1cd"
  },
  {
    "url": "assets/js/21.fbfa6242.js",
    "revision": "2cde00a9956efda842f61df96965fb69"
  },
  {
    "url": "assets/js/22.a894fc70.js",
    "revision": "f25c1ba1e66ce145267781d9ae2ebd14"
  },
  {
    "url": "assets/js/23.85cbb46b.js",
    "revision": "eecbde1005ed8c0c1f0cc0790d118b7f"
  },
  {
    "url": "assets/js/24.09883a99.js",
    "revision": "17c7197c7e3809d6df079b79528cfb64"
  },
  {
    "url": "assets/js/25.21248724.js",
    "revision": "61fc9c5ada60ccfcb2b51adcec43939f"
  },
  {
    "url": "assets/js/26.88b8c4ec.js",
    "revision": "5b5c48d9f95cf922ae0ba465cdeedcb3"
  },
  {
    "url": "assets/js/27.f5eda7d1.js",
    "revision": "092de73a0dfd7215e470fc7da14333f4"
  },
  {
    "url": "assets/js/28.83dc6bf8.js",
    "revision": "df88a197e5351f83702511861a0d8f52"
  },
  {
    "url": "assets/js/29.1b72d6de.js",
    "revision": "9e1992bd3b56a2b9e9cd4da0bede66f6"
  },
  {
    "url": "assets/js/3.4234061e.js",
    "revision": "3da64a050fb82eca50044a7583654b2f"
  },
  {
    "url": "assets/js/30.683f47fb.js",
    "revision": "2866d18328ae45acd52efb89b0ae705b"
  },
  {
    "url": "assets/js/31.0a3d143d.js",
    "revision": "51f81893d6c30e8706b0893f92376fcc"
  },
  {
    "url": "assets/js/32.9964a42e.js",
    "revision": "c03d036e204be19efe141de456278f5b"
  },
  {
    "url": "assets/js/33.5922177d.js",
    "revision": "89d465ca8c2ceef41dfe3cd25b407674"
  },
  {
    "url": "assets/js/34.884c77f8.js",
    "revision": "b32af29889ffa0ba582a1155d0b8c93c"
  },
  {
    "url": "assets/js/35.70c37a36.js",
    "revision": "9741049849c4ae0cb755d803ff80085a"
  },
  {
    "url": "assets/js/36.30f006ab.js",
    "revision": "2f16a3f6a3113bcc43d69a65f1ecad67"
  },
  {
    "url": "assets/js/37.52d9592e.js",
    "revision": "2f6021611a14d1343a088012b6615545"
  },
  {
    "url": "assets/js/38.236f6f1d.js",
    "revision": "27b9d2ea0f201aa409003df36e6bd531"
  },
  {
    "url": "assets/js/39.df53a660.js",
    "revision": "f4ff58dfc5beba59c6ca94f11979d10b"
  },
  {
    "url": "assets/js/4.364dea52.js",
    "revision": "dd331f1ac1952370629d82e0744e790b"
  },
  {
    "url": "assets/js/40.2983f094.js",
    "revision": "f1a093fa48584893e93c20caff0cdab4"
  },
  {
    "url": "assets/js/41.332aa290.js",
    "revision": "6b3b47de67ef9745dc1b625474b93044"
  },
  {
    "url": "assets/js/42.8e4f216f.js",
    "revision": "27a0a3aa7be26d4294f6fe43bc1f2830"
  },
  {
    "url": "assets/js/43.db4b18da.js",
    "revision": "bf40d3931c0f5ec153f2add9c39c36df"
  },
  {
    "url": "assets/js/44.2ec763e5.js",
    "revision": "4f51a2564add2fed41227c1d4e7f6248"
  },
  {
    "url": "assets/js/45.6469b764.js",
    "revision": "333328537373a5e0147137dd3d55d027"
  },
  {
    "url": "assets/js/46.660a0f01.js",
    "revision": "e458af869a2390e6a2d4b41dc4f68d81"
  },
  {
    "url": "assets/js/47.338a5418.js",
    "revision": "2fedeb7547f3c8b085785dfb29398e0a"
  },
  {
    "url": "assets/js/48.fa9157e3.js",
    "revision": "9bd0f7f1a2b92ca14674370f6c5807b7"
  },
  {
    "url": "assets/js/49.997112f7.js",
    "revision": "759ab67f97ec6eb59dcfe5eb47387c5e"
  },
  {
    "url": "assets/js/5.0e72a8e9.js",
    "revision": "777e910fb13bc1cfd24801b4dbedfb54"
  },
  {
    "url": "assets/js/50.05f1be4b.js",
    "revision": "ede32e51580e5ecda1ee23a96e08ded8"
  },
  {
    "url": "assets/js/51.9c28cdfa.js",
    "revision": "bd6a4b0a8a964072c83e1abe46b11fb5"
  },
  {
    "url": "assets/js/52.0be03ca9.js",
    "revision": "b4f33a136931cffaa13a772682c2b8e3"
  },
  {
    "url": "assets/js/53.62734f7b.js",
    "revision": "824eb81dcd4f88ab1f3d0cdb52a54068"
  },
  {
    "url": "assets/js/54.d88fb9ae.js",
    "revision": "68a2a15282ae65ab85bb3f94ff332295"
  },
  {
    "url": "assets/js/55.09186428.js",
    "revision": "41d93fc834b2d2033e22478624e03aac"
  },
  {
    "url": "assets/js/56.73464fbf.js",
    "revision": "49d017440fafa75f401333e29c5f4de9"
  },
  {
    "url": "assets/js/57.ff912441.js",
    "revision": "533c148ca434b21082fc297c8d185ab7"
  },
  {
    "url": "assets/js/58.b98735ba.js",
    "revision": "f54e95b7f50b7a9a777dec19e54c7264"
  },
  {
    "url": "assets/js/59.6926ed2d.js",
    "revision": "1673d4484732f47c8646943656ae8665"
  },
  {
    "url": "assets/js/6.d3ecc9b3.js",
    "revision": "9cb9b86f79cb9013735f09c9eca8050d"
  },
  {
    "url": "assets/js/60.96110eaf.js",
    "revision": "55720fa4dc9c13a3419cab1922e77e54"
  },
  {
    "url": "assets/js/61.394f97da.js",
    "revision": "8fff65ec4196ec3bbf40964418a607a6"
  },
  {
    "url": "assets/js/62.c97fd3ef.js",
    "revision": "5fa6804fc17be315546f19e2ab8d2289"
  },
  {
    "url": "assets/js/63.88ebd405.js",
    "revision": "972b94de3c5722e53fbc07a1078edb04"
  },
  {
    "url": "assets/js/64.24b24675.js",
    "revision": "2b999f2242282cd1384d014f42d39796"
  },
  {
    "url": "assets/js/65.28f87ae1.js",
    "revision": "13583821650b4b14008c34074338cb68"
  },
  {
    "url": "assets/js/66.54dc0506.js",
    "revision": "6613b826057eda0cea1fb5018e8c2851"
  },
  {
    "url": "assets/js/67.1d5d22f7.js",
    "revision": "1ee90e2148050a4d6f25cf0e1ee34f00"
  },
  {
    "url": "assets/js/68.7124f767.js",
    "revision": "413475af0a04af047456d0edf9c8f4e0"
  },
  {
    "url": "assets/js/69.47fc9fcc.js",
    "revision": "9df516c89422c28b7cdbdfbb6b22f1fb"
  },
  {
    "url": "assets/js/7.fa4ab570.js",
    "revision": "6738cca4b40a9267f5e0b42612911689"
  },
  {
    "url": "assets/js/70.6d4bcfd6.js",
    "revision": "11ca5661ac19364d065b2d98f760b06e"
  },
  {
    "url": "assets/js/71.1062fc38.js",
    "revision": "ede6a07842325ccf0b10ac1f044d66f2"
  },
  {
    "url": "assets/js/72.736a5d68.js",
    "revision": "18ffb2030f31b377c1f94891c58cf412"
  },
  {
    "url": "assets/js/73.e7c27749.js",
    "revision": "8a611dd4e7f17471d4bacd35d8c5c84b"
  },
  {
    "url": "assets/js/74.d437f9c8.js",
    "revision": "126be84da9a325b8e16f7a4848cae62a"
  },
  {
    "url": "assets/js/75.fbac1063.js",
    "revision": "57a67444d61eab99754bb9f1005faa45"
  },
  {
    "url": "assets/js/76.e73e63ca.js",
    "revision": "4a85925286fa5d5b7654c4e9060a054e"
  },
  {
    "url": "assets/js/77.c303b03b.js",
    "revision": "7d4b86c2fa381d83c1fcd619a80f278d"
  },
  {
    "url": "assets/js/78.6a82fa23.js",
    "revision": "58efd74ecefa8527dc918de51dbe5ad8"
  },
  {
    "url": "assets/js/79.8d787e88.js",
    "revision": "c6dd52c9b4d63b9ba1ed314a36ae11d8"
  },
  {
    "url": "assets/js/8.76666434.js",
    "revision": "175c931cd86709d044963ab071d3f674"
  },
  {
    "url": "assets/js/80.822f4cf2.js",
    "revision": "75486789b9c41e4001ab699c458873cf"
  },
  {
    "url": "assets/js/81.03025255.js",
    "revision": "90d3de684798337067d60940e8a9e2af"
  },
  {
    "url": "assets/js/82.51f9320c.js",
    "revision": "1fac08b457059d406b2b24e57d206eb8"
  },
  {
    "url": "assets/js/83.e2682388.js",
    "revision": "430fc90ec10a6c4d15a193de3699ae76"
  },
  {
    "url": "assets/js/84.b9746516.js",
    "revision": "571268512dbe06c0fffb8d8e1fc9e994"
  },
  {
    "url": "assets/js/85.a1060367.js",
    "revision": "80f3164b0ce9faa01fa89412119f494b"
  },
  {
    "url": "assets/js/86.9b39ee2d.js",
    "revision": "9972aab95a1fb6950a921339a4c3f3c6"
  },
  {
    "url": "assets/js/87.79f51dc9.js",
    "revision": "4054e64c9e20be36b35beaa7b66e6a82"
  },
  {
    "url": "assets/js/88.8dab25cb.js",
    "revision": "ca701f0196881c601bb138b9ecc4a688"
  },
  {
    "url": "assets/js/89.b8d28b75.js",
    "revision": "707aaaeedaa6afd8f02ac582aef4a28c"
  },
  {
    "url": "assets/js/9.5900836f.js",
    "revision": "ef5c2b21f5a291bf56b751a582ef97e6"
  },
  {
    "url": "assets/js/90.9efb05a6.js",
    "revision": "a3d5bee70710791309c89d46be8e514d"
  },
  {
    "url": "assets/js/91.c2d4b726.js",
    "revision": "27fb5cdeafca2de8faaed60b2dce00cc"
  },
  {
    "url": "assets/js/92.485dd07f.js",
    "revision": "4a8248864ec70895c9e0454aed77908a"
  },
  {
    "url": "assets/js/93.6c6489e0.js",
    "revision": "2142a9158da081544752b27a7e44853e"
  },
  {
    "url": "assets/js/94.f39d3f5b.js",
    "revision": "2a7a7a886093ed4c94c018f9e6748df7"
  },
  {
    "url": "assets/js/95.6d784451.js",
    "revision": "4fcb50b5acaa2ddcb89471171936c6af"
  },
  {
    "url": "assets/js/96.59a932d4.js",
    "revision": "dd5125c45ba529cfa77823e266304817"
  },
  {
    "url": "assets/js/97.a8b278b7.js",
    "revision": "98b8c4ae9b5811bc9dfd8663596632b0"
  },
  {
    "url": "assets/js/98.c10d1295.js",
    "revision": "71d2a53525970529792b9b3192731545"
  },
  {
    "url": "assets/js/99.95358c3f.js",
    "revision": "ea458747a69dd77031c663af7bd0ba9c"
  },
  {
    "url": "assets/js/app.05d870f8.js",
    "revision": "ebfe4ae61a87fd688d28d480189f6759"
  },
  {
    "url": "backend/docker/container.html",
    "revision": "df763b66ce3790fe4acd8527f80fae17"
  },
  {
    "url": "backend/docker/docker-compose.html",
    "revision": "517ed8f50d2000c17c859dc118959ce1"
  },
  {
    "url": "backend/docker/dockerfile.html",
    "revision": "4f2dae4d32491353f3ec7636c1515677"
  },
  {
    "url": "backend/docker/etcd.html",
    "revision": "0f61c7bb90b7df7735ae9e2fd2863b73"
  },
  {
    "url": "backend/docker/image.html",
    "revision": "1296eebe5b56da6d50ed5f5b48a0d122"
  },
  {
    "url": "backend/docker/index.html",
    "revision": "f5e77e4cfc6b9c756c4e7e5268e5a522"
  },
  {
    "url": "backend/docker/private-registry.html",
    "revision": "8021dce63e2edbf4c9a14947dc0f25d1"
  },
  {
    "url": "backend/docker/volumes.html",
    "revision": "a7fd9b2092232e6d73af28f3c26b9a34"
  },
  {
    "url": "backend/mysql/index.html",
    "revision": "32464620d165c3f1c607f1eb2664618c"
  },
  {
    "url": "backend/mysql/insert-update-and-delete.html",
    "revision": "b1bce6e6fb907a340c35002155d4eb41"
  },
  {
    "url": "backend/mysql/join-and-union.html",
    "revision": "965334291596878c6b745b59ab01dbac"
  },
  {
    "url": "backend/mysql/select.html",
    "revision": "60dff680c0aa265726f58e10ebe98d4d"
  },
  {
    "url": "backend/mysql/stored-procedure.html",
    "revision": "86e01c78923994d02d176c57ae1da5fe"
  },
  {
    "url": "backend/mysql/transactions.html",
    "revision": "8a5e1ef89937e92353765edab93bf6f3"
  },
  {
    "url": "backend/mysql/trigger.html",
    "revision": "e751c3b948ffc9a2a39163219ccc728f"
  },
  {
    "url": "backend/mysql/views.html",
    "revision": "0919331d3f5fa8a99a42a88566fa202c"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "a78254c67a05d961b3dd06816227a8fd"
  },
  {
    "url": "backend/nginx/handle-error.html",
    "revision": "90e80c04541aca7a0656c9fab2873729"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "528f4afcffd23a4b41eb979e6e236caa"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "3c2c73ed50877acec387d0d0a2012ab0"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "f78f6c54f13c62d53cac63763c8bc5ac"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "0f1d9fa6fbd872611d300eb4201f53c1"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "b4b39bfa09e383051aa52174c84915f1"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "bffbca01d84db5080db8e9653fea2ef5"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "db71d874b51ab881482a7ed06838c988"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "e4cb85ea71441c20bf036db2a0767eda"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "ac57861179e9c76dd00e707a9c99ccc1"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "b1c1f60c312e658b6a884ea6d73387ba"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "c6c0dacd715fc3edeb4abfddc1239f17"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "6a81a3e609b2b0f68d4a773074c8b589"
  },
  {
    "url": "backend/redis/index.html",
    "revision": "7dde76877700321cd5f0adf394c06c6b"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "135c2aba490db14f8200cd772995f35d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a4271dfcd229369a16522b36b4241afa"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "dc7ac2de31649de6f88df341b87d744f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6171be93b691ce4f9546def624bcadc3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "f5ff44fc10f11d717056f8108e7f4a9d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "cee47d4601b5a5c4dada3693ffd3ef94"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "61eb9ebb22b0c68b6e236b859094a865"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c430ea29655773327896f7d65fe94c46"
  },
  {
    "url": "index.html",
    "revision": "1eecc9a094ea20d9c34494c0707ac66b"
  },
  {
    "url": "logo.png",
    "revision": "bca9e7fc4565a61a3a0c8b73f68b8858"
  },
  {
    "url": "more/navigation.html",
    "revision": "ee35d6aa77b7f3f2864ad8146dfac0af"
  },
  {
    "url": "os/centos/index.html",
    "revision": "4e428c8a01457b0fae7d4987b8c25761"
  },
  {
    "url": "os/centos/install-the-latest-version-of-nginx.html",
    "revision": "15066e73a00eb8be70104598416c9ead"
  },
  {
    "url": "os/centos/modify-the-network-named-eth.html",
    "revision": "ea8fcbd2ac7f45e8e0b9f930fa18d2a3"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "c4c9cfa6f9d9d4ab9b9d52674ac14a55"
  },
  {
    "url": "os/linux/alias.html",
    "revision": "da1b20f9938531ec64f92149b29756ec"
  },
  {
    "url": "os/linux/ansible.html",
    "revision": "e6a6d67faf58a6126a43ea5c307740e7"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "b18dca5610e142aba08fbeb19c2248d9"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "78667ee0245fda0b891f3a6649770b8f"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "a1a048358e1d3417ca5f65be6531745d"
  },
  {
    "url": "os/linux/common-commands.html",
    "revision": "1b5b18eaf3d325750a6f5dc9910b9a2c"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "4130a84c7e0894ce7c4cf092c4e723c2"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "635ffe26123f27451e4bbc88c91cc7bc"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "34aec8b4879474b75b50714b3d862c1a"
  },
  {
    "url": "os/linux/dnsmasq.html",
    "revision": "3852e8fead476d996f1ec227e88e31e2"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "55d23a1c3ae09d5b8f4a0398f7db3c3d"
  },
  {
    "url": "os/linux/fail2ban.html",
    "revision": "725b2006f0a22ebc40c482e7c438fef2"
  },
  {
    "url": "os/linux/firewalld.html",
    "revision": "b44e1444ecd12db8a3e9c741774cd1ad"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "3994c94ef90b2aa0c29a5b7746b99d9b"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "353d62464e285dece25e5bd98622465c"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "5a1f93a8de92bba4552ab76fba30c2af"
  },
  {
    "url": "os/linux/index.html",
    "revision": "2d7f0eb9907f3316e1d94e387eff473b"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "7b00520f47a16b1568dbfe463bb118c1"
  },
  {
    "url": "os/linux/job-control.html",
    "revision": "b3b6beb3079df8745dbfa204b42f04cd"
  },
  {
    "url": "os/linux/prometheus.html",
    "revision": "6b779d47893230a4afeb0edc66de4ad6"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "26f9c76d4baca7d5314becaa7c8133dd"
  },
  {
    "url": "os/linux/rsync-and-scp.html",
    "revision": "933f0942f6c3dffc9535c1c37266082c"
  },
  {
    "url": "os/linux/shell.html",
    "revision": "bea9cd4b3136521d74c9d87dd8a9c8de"
  },
  {
    "url": "os/linux/ssh-makes-your-server-more-secure.html",
    "revision": "ed782348f1d1ed39659ee54aed751cd5"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "0c9d2cac2a26f67681f3fa64a2733e5e"
  },
  {
    "url": "os/linux/user.html",
    "revision": "52f19c8a8dfe55feb3bd0a8e3e565aeb"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "d9b79443e092f5dbe4928d8e3dd04277"
  },
  {
    "url": "os/linux/xargs.html",
    "revision": "966f9a8a03805ec946a17e98617dbc69"
  },
  {
    "url": "os/ubuntu/change-swap-size.html",
    "revision": "3adebfcd601f285c780389bc7c40a8c4"
  },
  {
    "url": "os/ubuntu/config-netplan.html",
    "revision": "8017f2858c9bab13b7ee77c09cac1fa1"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "e7a4985d2470d021a22dfe7d40123c1e"
  },
  {
    "url": "os/ubuntu/frp-and-nginx-share-80-port.html",
    "revision": "36068a75570516f81472046845481400"
  },
  {
    "url": "os/ubuntu/frp.html",
    "revision": "13e21fbd398f1482668c2e3d28b171b5"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "4ef078b160ea37953dbd2a86a37f6c4c"
  },
  {
    "url": "os/ubuntu/install-the-latest-version-of-nginx.html",
    "revision": "5b4c8d537cde7e23f2c4fd4d3c3f2ebb"
  },
  {
    "url": "os/ubuntu/ubuntu-computer-config.html",
    "revision": "bacb14ccef7e74725518a9872a718e83"
  },
  {
    "url": "tools/bookmark-scripts/index.html",
    "revision": "66449d45bad6757753e8553b8d08fe62"
  },
  {
    "url": "tools/git/commit-message.html",
    "revision": "fab1ff09569a242531e567072b8772df"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "ca167cb4ad8bc4628e7803009e744c28"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b6489304ac1b41c89a77f292d5d24cf6"
  },
  {
    "url": "tools/git/repo-tool.html",
    "revision": "17b252cc8ab6223162d7f43be36ad79f"
  },
  {
    "url": "tools/git/submodule.html",
    "revision": "9265d784bfe009315cea1a11668234a7"
  },
  {
    "url": "tools/github/dns-resolve-github-pages.html",
    "revision": "b5a4abc37d120641ba85c7ea9eb92ad8"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "244d136ac2e230894872d15821739a5d"
  },
  {
    "url": "tools/github/how-to-deploy-private-gitlab.html",
    "revision": "7cf646c811c51dae04a40709267fc171"
  },
  {
    "url": "tools/github/index.html",
    "revision": "4fa56add3589b12fb1374e3884dae672"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "4641a1330a3379563fa8af8fa64b1631"
  },
  {
    "url": "tools/github/sync-a-fork.html",
    "revision": "e5d49e503a668b1b21a1db569b499126"
  },
  {
    "url": "tools/vscode/errors.html",
    "revision": "1ae701f633702d11463fa683cb05dd01"
  },
  {
    "url": "tools/vscode/fix-todo-highlight-links.html",
    "revision": "a081ddb0589c910d7139bc2dbd65abc2"
  },
  {
    "url": "tools/vscode/format-with-eslint.html",
    "revision": "4aec473eebbd202767be5f24a7c3568b"
  },
  {
    "url": "tools/vscode/identify-alias.html",
    "revision": "b7d997ff85f191e04458051151d83ce3"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "7c7879f3a34987c505c093c21f52f8cb"
  },
  {
    "url": "tools/vscode/set-the-font.html",
    "revision": "e3999af97281b6a2c296dc581d53e5a7"
  },
  {
    "url": "tools/vscode/settings-sync.html",
    "revision": "aad4be70da1a2b28db4c259d1667f5e5"
  },
  {
    "url": "tools/vscode/share-code-snippet.html",
    "revision": "7c419de58d43c0357e94bbfe153fadd9"
  },
  {
    "url": "tools/vscode/vetur.html",
    "revision": "a03cc831f0c7e5f9a84e1e24d1fd688b"
  },
  {
    "url": "tools/vscode/vscode-markdown-copilot-tab-do-not-work.html",
    "revision": "8b1cb6c2e4113a4c8e4dc094c1acca1d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
