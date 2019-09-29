/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Myblog/Blog/Hexo/public/2019/07/25/00030/index.html","c1bf8efefae49ca35995b943c837fb41"],["D:/Myblog/Blog/Hexo/public/2019/07/26/00032/index.html","8e74ac1576e0469dfb1453a5496bd631"],["D:/Myblog/Blog/Hexo/public/2019/08/02/00013/index.html","86173b749d7c4e751fc5f860becb395b"],["D:/Myblog/Blog/Hexo/public/2019/08/09/00008/index.html","29cb4d4e4bec445bb4237da9767592a9"],["D:/Myblog/Blog/Hexo/public/2019/08/10/00010/index.html","d4ebdf8effd8aac160d1603d014340c2"],["D:/Myblog/Blog/Hexo/public/2019/08/19/00009/index.html","01fc126e06f08dbac9c46655da7a3dd6"],["D:/Myblog/Blog/Hexo/public/2019/08/20/00031/index.html","d32d658f213b1811b255f1220b2f8157"],["D:/Myblog/Blog/Hexo/public/2019/08/24/00026/index.html","0ac85a859fe34ccb57ce144dfce5f63e"],["D:/Myblog/Blog/Hexo/public/2019/08/30/00028/index.html","24ed32240ad64a797789cd1f5aabfb9c"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00019/index.html","0d15640bf576e6d8eb26c0a45aff416a"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00020/index.html","fd6bc4ffd6ca032aae0eedbcebb261d5"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00002/index.html","8ca428b0da694a4fa51358a47ad934dd"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00003/index.html","44f1d3e863bfb0177ab271f0f630b578"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00004/index.html","e63e3c7fdf4e877af65af33bc2c99d33"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00005/index.html","aaa3068a5c6c6068ee3bb823d23b0e11"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00007/index.html","0645dfc52737b3d0c7dae4f924957262"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00012/index.html","75e806cc8aaa13077618fad616e6a094"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00014/index.html","5e624b0929b3cfd5614c841dff975996"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00015/index.html","1cb22990e77ccb0618b327902aac79dc"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00016/index.html","367f89740a8f19bc0f1a94aeda0c8fd1"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00017/index.html","d44711432227d86e047538981d847893"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00018/index.html","c83640f54125dd96900c8d9e42a4dab6"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00021/index.html","791ac5a0f5637e5709ddb5f012d66e18"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00022/index.html","d0da14880091b5fd17154b552ce45159"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00023/index.html","d60de1fae4124cbe5beb23b614f8fe17"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00024/index.html","7e7301100cbbd584628b04702d7d46bc"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00025/index.html","cfc71774a090461658c17bbf1ee9553a"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00027/index.html","bdc29525ebf04b528912f63dc4dca46e"],["D:/Myblog/Blog/Hexo/public/2019/09/20/00011/index.html","e8251188caeb9f04df0a7d113725927d"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00001/index.html","9f96f862d8295873e1ef669135fb411f"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00006/index.html","eb1cd4c60bc434b3f91746696ad2ccd7"],["D:/Myblog/Blog/Hexo/public/2019/09/24/00029/index.html","5b1da143aa51450b21c16a4da9443fb7"],["D:/Myblog/Blog/Hexo/public/2019/09/25/00033/index.html","ddf29e35f28f06ce8bd4524d0063221e"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00034/index.html","e29700b82c85fcc5fdeb29c38d76739f"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00035/index.html","7bfdbd341653e67016a39ae4166207c1"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00036/index.html","7429ecbbfe61f3661e45819144af3164"],["D:/Myblog/Blog/Hexo/public/2019/09/27/00037/index.html","2c5b1acbf33a32bb3e6fc1acd2628054"],["D:/Myblog/Blog/Hexo/public/404.html","23027b232724fe32c43b517c890d87ee"],["D:/Myblog/Blog/Hexo/public/about/assets/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/Myblog/Blog/Hexo/public/about/assets/css/index.css","5fd1ff220d7990567e2302956fadd913"],["D:/Myblog/Blog/Hexo/public/about/assets/css/typo.css","0b5d6624fa8fefebea67a9f28920a210"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Myblog/Blog/Hexo/public/about/assets/images/avatar.jpg","9a3b013f512ea4dfdd9f35067a0bed4b"],["D:/Myblog/Blog/Hexo/public/about/assets/images/background.png","fac9d864f995beff8c55b403ba7c2bfb"],["D:/Myblog/Blog/Hexo/public/about/assets/images/ip.png","d5bfb3f23aedf8d7ea629806a7f3fa9e"],["D:/Myblog/Blog/Hexo/public/about/assets/images/pc.png","f249aa2b72abc9b3c25efdb4d812258f"],["D:/Myblog/Blog/Hexo/public/about/assets/js/CanvasNest.js","011972b152a314428c4ebf0110285f3a"],["D:/Myblog/Blog/Hexo/public/about/assets/js/index.js","14cc657b8cedad4d4d65d694f6737289"],["D:/Myblog/Blog/Hexo/public/about/index.html","bf9123b24f68c97e471a8f833078dc46"],["D:/Myblog/Blog/Hexo/public/archives/2019/07/index.html","77e9e9b453e289278fe77a642730fba0"],["D:/Myblog/Blog/Hexo/public/archives/2019/08/index.html","efbfc9a879e98f27363779799eaddb54"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/index.html","1f953f6607f905f2ae888d2901b32d0a"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/2/index.html","26b0b71d8c9c2ee2858c4b973243fdcb"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/3/index.html","791fea5abede5670f88c4aa8957fc9fd"],["D:/Myblog/Blog/Hexo/public/archives/2019/index.html","1adc47380d35f915863d5c8829c3744b"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/2/index.html","e0eed4517f349cfc688ac48d9120c168"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/3/index.html","6dc7269b1dd88a59e5d7aed1cf4e2aa6"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/4/index.html","847753264285d44e0f783f3b06ca3528"],["D:/Myblog/Blog/Hexo/public/archives/index.html","6230b5d77a36d3cf604d7b1d0b63faee"],["D:/Myblog/Blog/Hexo/public/archives/page/2/index.html","c69d8a3012d61b49f823d59ff6f1d52f"],["D:/Myblog/Blog/Hexo/public/archives/page/3/index.html","5c35fe2cf95b0e93bb328af22ebf0240"],["D:/Myblog/Blog/Hexo/public/archives/page/4/index.html","f9fe0530765178417a0d9db904f29632"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.js","c5212e1f9ff5012aeb8377c347143213"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.min.js","3d0f4dccf8b2078c95f98a635fdbf26c"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.js","f4295eda45c30851626faa504c148548"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.min.js","7c9e4cf319574c60f839ae0c06dddc81"],["D:/Myblog/Blog/Hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Myblog/Blog/Hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/Myblog/Blog/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Myblog/Blog/Hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Myblog/Blog/Hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/Myblog/Blog/Hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Myblog/Blog/Hexo/public/books/index.html","cbf252500c80f0c8fc75e3aa03b05510"],["D:/Myblog/Blog/Hexo/public/categories/CDN/index.html","0c4527e9d3ef0b3e7f8a6b4214f5992e"],["D:/Myblog/Blog/Hexo/public/categories/Diary/index.html","20032984c09adb82e1d5ebf5d5badc30"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/index.html","0f66ffe4ae456267e878f2e479db6320"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/page/2/index.html","d4328dd2a6ae21c48887fc26bb00a32f"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/index.html","dd33a31cfcb2a430d87059552024f91a"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/page/2/index.html","eeb45a281f60f649ff616ad3d0d08f19"],["D:/Myblog/Blog/Hexo/public/categories/Hexo/index.html","a8139305936e8c80a81b07a0561136b3"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Nginx/index.html","18f8129fc76a38b0443bf024f1fcf303"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Zabbix/index.html","e6b90a3af3440eab689b6dd9d5440e7c"],["D:/Myblog/Blog/Hexo/public/categories/Linux/index.html","a75473d42cc92e2cb4e5bfab0c7116fd"],["D:/Myblog/Blog/Hexo/public/categories/Network/index.html","3c3142a264b902fd72b79df978e959cc"],["D:/Myblog/Blog/Hexo/public/categories/Nginx/index.html","09f0f6f36ce7fa08df1dfcfdc54e9a2d"],["D:/Myblog/Blog/Hexo/public/categories/Problem/index.html","b8d18ca218724f0cd2d79a3c72ebb203"],["D:/Myblog/Blog/Hexo/public/categories/Summary/index.html","419d29a3aeef0bcfe1d2f2c25d0b2c00"],["D:/Myblog/Blog/Hexo/public/categories/Window/index.html","23f714c190bfacd34b2693284e2f2e3c"],["D:/Myblog/Blog/Hexo/public/categories/WordPress/index.html","f90d5adebf7fdd4212f19d56d412d40b"],["D:/Myblog/Blog/Hexo/public/categories/index.html","c08ae8e983f331635aadc686339bd043"],["D:/Myblog/Blog/Hexo/public/css/index.css","bc3b5ee5a336e5e7c384186d35ce6747"],["D:/Myblog/Blog/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Myblog/Blog/Hexo/public/gallery/index.html","6a9faf4aac079fe10ec8f418ab43b7d6"],["D:/Myblog/Blog/Hexo/public/games/index.html","70a634e69615e2cea9459c96e7d9108c"],["D:/Myblog/Blog/Hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/Myblog/Blog/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Myblog/Blog/Hexo/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["D:/Myblog/Blog/Hexo/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/Myblog/Blog/Hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/Myblog/Blog/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Myblog/Blog/Hexo/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/Myblog/Blog/Hexo/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["D:/Myblog/Blog/Hexo/public/index.html","93c4b211a76e420401c21d9b7607d9b6"],["D:/Myblog/Blog/Hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/Myblog/Blog/Hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/Myblog/Blog/Hexo/public/js/click_show_text.js","a3947325db229187173efa20ff3c1ad2"],["D:/Myblog/Blog/Hexo/public/js/main.js","10f97e1001bd4f1f7d2360e8c29d6ab5"],["D:/Myblog/Blog/Hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/Myblog/Blog/Hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/Myblog/Blog/Hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/Myblog/Blog/Hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/Myblog/Blog/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/Myblog/Blog/Hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Myblog/Blog/Hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/Myblog/Blog/Hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/Myblog/Blog/Hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/Myblog/Blog/Hexo/public/link/index.html","73479f982398434f364534223cff2c89"],["D:/Myblog/Blog/Hexo/public/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Myblog/Blog/Hexo/public/love/css/default.css","2fd911f377ecffa78ef688264161a2d2"],["D:/Myblog/Blog/Hexo/public/love/css/default_dev.css","e87501971c944654ca53c4d7a0c41bd0"],["D:/Myblog/Blog/Hexo/public/love/digital-7_mono.ttf","8e22783d707ad140bffe18b2a3812529"],["D:/Myblog/Blog/Hexo/public/love/index.html","b56f0cc31035b349f23209d34013bb00"],["D:/Myblog/Blog/Hexo/public/love/js/functions.js","bf793d486fd4b68e6c74d2663c11cfab"],["D:/Myblog/Blog/Hexo/public/love/js/functions_dev.js","e54c4c3bf2cb0589247b029821f952b4"],["D:/Myblog/Blog/Hexo/public/love/js/garden.js","0bba994a307dd63a7103f2f5e442f2d1"],["D:/Myblog/Blog/Hexo/public/love/js/garden_dev.js","f450b5e2edbd84e8d8243bf39755fa39"],["D:/Myblog/Blog/Hexo/public/love/js/jquery.js","10092eee563dec2dca82b77d2cf5a1ae"],["D:/Myblog/Blog/Hexo/public/love2/index.html","f5d79ee2b00b9b86632b5ac943351911"],["D:/Myblog/Blog/Hexo/public/love2/renxi/default.css","77c6d481093206fa774436af522fd7d1"],["D:/Myblog/Blog/Hexo/public/love2/renxi/functions.js","398486028d4d8fd9d8e0910499a28d17"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-jit.js","35be392b9cd2ad66c63bac412554d874"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["D:/Myblog/Blog/Hexo/public/love2/renxi/love.js","d5f2a8c693744f387064e78275c910f3"],["D:/Myblog/Blog/Hexo/public/message/index.html","a981158a02a3e2e258ff52d44a45d658"],["D:/Myblog/Blog/Hexo/public/movies/index.html","7f1673d882ba99fdf3a2cb6c6e2bbdf9"],["D:/Myblog/Blog/Hexo/public/music/index.html","a11a233765f0afb92f660d2761da9f9b"],["D:/Myblog/Blog/Hexo/public/page/2/index.html","886e781deba639fcc6206c4daa62e4b3"],["D:/Myblog/Blog/Hexo/public/page/3/index.html","1a708f4431dd096853c750a93bfa6bd8"],["D:/Myblog/Blog/Hexo/public/page/4/index.html","7ad6798eaef23e7c39d8800a6c15d2f7"],["D:/Myblog/Blog/Hexo/public/tags/API/index.html","bd119c46cb0743cfcd4c571ce6613453"],["D:/Myblog/Blog/Hexo/public/tags/blog/index.html","9f1502930d0d9358d597e020c28b4ab1"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/2/index.html","60caeb13007a5ac5daca002c965d732e"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/3/index.html","e23ec6df67da126c4bf4bfd54b4bec89"],["D:/Myblog/Blog/Hexo/public/tags/centos/index.html","df77514436866bd401bbed07def0f021"],["D:/Myblog/Blog/Hexo/public/tags/coding/index.html","fc410ce5d8978f6d2428aa3c091b8f24"],["D:/Myblog/Blog/Hexo/public/tags/huawei/index.html","eacf5c128bee8ed2ec678d163552fdf6"],["D:/Myblog/Blog/Hexo/public/tags/image/index.html","44bc3e27eb6e2e090b455388a7e211fd"],["D:/Myblog/Blog/Hexo/public/tags/index.html","f296e46564449216ecb94b3a4702e6ff"],["D:/Myblog/Blog/Hexo/public/tags/jsDelivr/index.html","fc0ccb1a33b8e65a392fc007134944fc"],["D:/Myblog/Blog/Hexo/public/tags/life/index.html","0fcc206871afdb00d12e19feafd37d7f"],["D:/Myblog/Blog/Hexo/public/tags/markdown/index.html","688826960b454a85e4f81fc9ccf93666"],["D:/Myblog/Blog/Hexo/public/tags/picgo/index.html","21d38224a141e4c722de7dd4015239fe"],["D:/Myblog/Blog/Hexo/public/tags/resource/index.html","1f626f51534f663c3dd1f065a7e6f37a"],["D:/Myblog/Blog/Hexo/public/tags/revolvermaps/index.html","d9cd29ad31bf3c6f1d51729ba91785b7"],["D:/Myblog/Blog/Hexo/public/tags/software/index.html","fe334aec74eb8012eb6b5dd28ef222a9"],["D:/Myblog/Blog/Hexo/public/tags/summary/index.html","74ce79891b2e80e5199073295eae67c8"],["D:/Myblog/Blog/Hexo/public/tags/system/index.html","dff1558497a27bc9c26c617a413f493f"],["D:/Myblog/Blog/Hexo/public/tags/tcp/index.html","4f68748c903ce475ed901777639f02ae"],["D:/Myblog/Blog/Hexo/public/tags/technology/index.html","5cc1650b4cd5097ae7187bb7fb221455"],["D:/Myblog/Blog/Hexo/public/tags/valine/index.html","1c21cc660d1275af339c2a1b93d1711e"],["D:/Myblog/Blog/Hexo/public/tags/web/index.html","a42180e0b0026feddf3cf35b65501ac7"],["D:/Myblog/Blog/Hexo/public/tags/交换机/index.html","4079e6798fc9a8473c2641d7f454e7cd"],["D:/Myblog/Blog/Hexo/public/tags/优化/index.html","a56c7ba7ca4148693851b5dcd4c4d41d"],["D:/Myblog/Blog/Hexo/public/tags/共享/index.html","a809d8b24059e09ee2e61a4ab8d8cf2b"],["D:/Myblog/Blog/Hexo/public/tags/又拍云/index.html","c4319d066b84ea765b085d36aa97dd07"],["D:/Myblog/Blog/Hexo/public/tags/反向代理/index.html","9c0be345fecf146438260b74aecb8797"],["D:/Myblog/Blog/Hexo/public/tags/域名/index.html","980595e2a3ac9925787fcc1a33c62378"],["D:/Myblog/Blog/Hexo/public/tags/端口/index.html","12546ecdc227f7d5dc8de597f646a7ea"],["D:/Myblog/Blog/Hexo/public/tags/端口转发/index.html","33c40c2195886b681914907e541e4de4"],["D:/Myblog/Blog/Hexo/public/tags/负载均衡/index.html","e202c788e87251d37e35d92e1102dbda"],["D:/Myblog/Blog/Hexo/public/tags/远程/index.html","416ce058fb473cf0dd0e1e9dca436b43"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







