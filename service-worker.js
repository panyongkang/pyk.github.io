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

var precacheConfig = [["D:/Myblog/Blog/Hexo/public/2019/07/25/00030/index.html","05e532d7a379200486e7587f2a777320"],["D:/Myblog/Blog/Hexo/public/2019/07/26/00032/index.html","c318a4b9d743564ed37657cf0c0fc261"],["D:/Myblog/Blog/Hexo/public/2019/08/02/00013/index.html","23423a7d1ae5e8d577e7463b0b92c479"],["D:/Myblog/Blog/Hexo/public/2019/08/09/00008/index.html","ea332c2535841045e5f5fdc9ea185adf"],["D:/Myblog/Blog/Hexo/public/2019/08/10/00010/index.html","f00c36ee06d8589ce5835a872335df65"],["D:/Myblog/Blog/Hexo/public/2019/08/19/00009/index.html","b93eaeb8a35c49d89b68ce1d68a88f96"],["D:/Myblog/Blog/Hexo/public/2019/08/20/00031/index.html","e06c85f6377118d23814ba7717db3327"],["D:/Myblog/Blog/Hexo/public/2019/08/24/00026/index.html","238575c1998937fa8b1190a5c4aeb1ec"],["D:/Myblog/Blog/Hexo/public/2019/08/30/00028/index.html","1f8203dffcd01fc8ee89e028aa8d535a"],["D:/Myblog/Blog/Hexo/public/2019/09/01/00039/index.html","de4e6e375f5973c54e60283784875596"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00019/index.html","8ad616ea6f6aa34836d3adeabef8b75e"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00020/index.html","a4b4304ad0fb12ac1b500c1c2d840efc"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00002/index.html","8ee5c5a1d1949e0fee20db1afc876788"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00003/index.html","520966e5874d6274395cf9898d8ece61"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00004/index.html","61073378f748067f7568fd9308d58604"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00005/index.html","843dee3bbceb2b937fc3d8139b6c99d3"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00007/index.html","76a4c1fdf32010b777d26820531d4d7a"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00012/index.html","68c26c16447117a4a347ae323be316a5"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00014/index.html","cb267b4b5173f0a874f6d837458cfe50"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00015/index.html","8e1daa312c0ab6f7a18ff010485d6843"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00016/index.html","ec14f788725d26db8244e8ce8096c55e"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00017/index.html","0a5fe1f0b6cbf2337ba8c92993ec0346"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00018/index.html","a5bd90df57f01bf09826df4752e6b48a"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00021/index.html","83b5238ecc45e920b6c95cae2f320d9c"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00022/index.html","b944af027b85d79ea318326dfdec3cf5"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00023/index.html","99c66ecca6404200fade4856ed7ee16b"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00024/index.html","a5063508ae7b61ca1e604049f942e59a"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00025/index.html","dd0bd8193a029c11689c17600fa7e72d"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00027/index.html","01e4c6ab5c73db4a5e19896aa39f859c"],["D:/Myblog/Blog/Hexo/public/2019/09/15/00038/index.html","2e99e36094f5720373e62dcc3968a251"],["D:/Myblog/Blog/Hexo/public/2019/09/20/00011/index.html","6e2e820016ac22b7666cc0e44ea4e3fd"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00001/index.html","e29c74509b643bf8368367e3ca4543bd"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00006/index.html","173efbefc9940d4f68129013e8e69e2a"],["D:/Myblog/Blog/Hexo/public/2019/09/24/00029/index.html","7db5580004db78923d735ed2d782392c"],["D:/Myblog/Blog/Hexo/public/2019/09/25/00033/index.html","c777069eca823ecd17c83c7b6dbeeeda"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00034/index.html","8f5918842da53df7bfab73b4717e9a46"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00035/index.html","74361b58358566e0ff6586c25364bc9d"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00036/index.html","626c54e7030007421beb43a8817c82be"],["D:/Myblog/Blog/Hexo/public/2019/09/27/00037/index.html","d97fa095d1cb17d2be41365740ba3edd"],["D:/Myblog/Blog/Hexo/public/2019/09/29/00038/index.html","74595d370fb64d7f6a68e40116e904f8"],["D:/Myblog/Blog/Hexo/public/2019/09/29/00039/index.html","a30b3333502eb7c81140c79b2e56264a"],["D:/Myblog/Blog/Hexo/public/404.html","c44e7a880d65a20b2a24f989195209db"],["D:/Myblog/Blog/Hexo/public/about/assets/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/Myblog/Blog/Hexo/public/about/assets/css/index.css","5fd1ff220d7990567e2302956fadd913"],["D:/Myblog/Blog/Hexo/public/about/assets/css/typo.css","0b5d6624fa8fefebea67a9f28920a210"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Myblog/Blog/Hexo/public/about/assets/images/avatar.jpg","9a3b013f512ea4dfdd9f35067a0bed4b"],["D:/Myblog/Blog/Hexo/public/about/assets/images/background.png","fac9d864f995beff8c55b403ba7c2bfb"],["D:/Myblog/Blog/Hexo/public/about/assets/images/ip.png","d5bfb3f23aedf8d7ea629806a7f3fa9e"],["D:/Myblog/Blog/Hexo/public/about/assets/images/pc.png","f249aa2b72abc9b3c25efdb4d812258f"],["D:/Myblog/Blog/Hexo/public/about/assets/js/CanvasNest.js","011972b152a314428c4ebf0110285f3a"],["D:/Myblog/Blog/Hexo/public/about/assets/js/index.js","14cc657b8cedad4d4d65d694f6737289"],["D:/Myblog/Blog/Hexo/public/about/index.html","bf9123b24f68c97e471a8f833078dc46"],["D:/Myblog/Blog/Hexo/public/archives/2019/07/index.html","2f0d54de38c3886bddeb33b19858817a"],["D:/Myblog/Blog/Hexo/public/archives/2019/08/index.html","c6484ae2ed1b763a07aec5f70d470987"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/index.html","978513f23f64f4d8759e7fd09964fbe1"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/2/index.html","8c955f9c99fae9925d0eba2a7ad9ddf7"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/3/index.html","60ff1c487d22bad30b45fdff01810573"],["D:/Myblog/Blog/Hexo/public/archives/2019/index.html","ebc875da516dddfc00717e10b14f4662"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/2/index.html","a95d4989c83aba1762030e00ab214d42"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/3/index.html","279fb462fa584a2e091a7a895ec361cc"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/4/index.html","e56a3985789672a83b21a89976d0243c"],["D:/Myblog/Blog/Hexo/public/archives/index.html","98423b43372ae07241519e10c8fa48c4"],["D:/Myblog/Blog/Hexo/public/archives/page/2/index.html","2d970327afd75485625fa946a75a996c"],["D:/Myblog/Blog/Hexo/public/archives/page/3/index.html","3a7e359f640d1e4ce79f4e9c8b8b5488"],["D:/Myblog/Blog/Hexo/public/archives/page/4/index.html","d7fb30b51619ddc249e7808b5aa043bc"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.js","c5212e1f9ff5012aeb8377c347143213"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.min.js","3d0f4dccf8b2078c95f98a635fdbf26c"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.js","f4295eda45c30851626faa504c148548"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.min.js","7c9e4cf319574c60f839ae0c06dddc81"],["D:/Myblog/Blog/Hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Myblog/Blog/Hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/Myblog/Blog/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Myblog/Blog/Hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Myblog/Blog/Hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/Myblog/Blog/Hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Myblog/Blog/Hexo/public/books/index.html","9f10060d16a11a0d192f971abd8e3efc"],["D:/Myblog/Blog/Hexo/public/categories/CDN/index.html","25c45c87ebdfa0252b712317621d37b0"],["D:/Myblog/Blog/Hexo/public/categories/Diary/index.html","49909ca65f09ebbff61b9d6eecfd17a2"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/index.html","c3cb7d0f18dd7652c32cdf169c3311ca"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/page/2/index.html","ea9bc83fbe418384b003335daf6e6f2d"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/index.html","a32a2f4d90765db18fb5b6790a0fca00"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/page/2/index.html","2fc37683ccc8435a40ab5cd5588547a7"],["D:/Myblog/Blog/Hexo/public/categories/Hexo/index.html","5a3bfb723bbfb26de091a8c5da1ad7f3"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Nginx/index.html","10fea3d56eaba8f05f63dcf578c534c9"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Zabbix/index.html","e802f58630623426a14818399e847515"],["D:/Myblog/Blog/Hexo/public/categories/Linux/index.html","c4fa154ed042a4483130e9db3a2be74f"],["D:/Myblog/Blog/Hexo/public/categories/Network/index.html","6996c6b55f11c2058f1dec01f05a9f8f"],["D:/Myblog/Blog/Hexo/public/categories/Nginx/index.html","97977f5d4d53e3982bcebbeb03417fa1"],["D:/Myblog/Blog/Hexo/public/categories/Problem/index.html","5d8e361d801a65ac76ae0098140c29bd"],["D:/Myblog/Blog/Hexo/public/categories/Summary/index.html","d4dd486628ac3fc0125e032d2921287f"],["D:/Myblog/Blog/Hexo/public/categories/Window/index.html","dc9124d903d41d48b5b14476101caa27"],["D:/Myblog/Blog/Hexo/public/categories/WordPress/index.html","f02370f9a82e4ccfa128eb6824de0152"],["D:/Myblog/Blog/Hexo/public/categories/index.html","6569f68ef10d89a1c4b24da983e75ee7"],["D:/Myblog/Blog/Hexo/public/categories/服务器/index.html","ce35861c8d3e233d88dfadb832710900"],["D:/Myblog/Blog/Hexo/public/css/index.css","ce4a81c0b147d049d5cc2e4ad283340f"],["D:/Myblog/Blog/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Myblog/Blog/Hexo/public/gallery/index.html","6e71d0540dcc1cc7e4efb81266538481"],["D:/Myblog/Blog/Hexo/public/games/index.html","2b6d91ecbc137474278dede370ee3d1c"],["D:/Myblog/Blog/Hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/Myblog/Blog/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Myblog/Blog/Hexo/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["D:/Myblog/Blog/Hexo/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/Myblog/Blog/Hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/Myblog/Blog/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Myblog/Blog/Hexo/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/Myblog/Blog/Hexo/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["D:/Myblog/Blog/Hexo/public/index.html","34b482319b9ba400c27049300855623d"],["D:/Myblog/Blog/Hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/Myblog/Blog/Hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/Myblog/Blog/Hexo/public/js/click_show_text.js","a3947325db229187173efa20ff3c1ad2"],["D:/Myblog/Blog/Hexo/public/js/main.js","10f97e1001bd4f1f7d2360e8c29d6ab5"],["D:/Myblog/Blog/Hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/Myblog/Blog/Hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/Myblog/Blog/Hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/Myblog/Blog/Hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/Myblog/Blog/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/Myblog/Blog/Hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Myblog/Blog/Hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/Myblog/Blog/Hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/Myblog/Blog/Hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/Myblog/Blog/Hexo/public/link/index.html","8ee849ab941cfc4ec0787ed1798f8c65"],["D:/Myblog/Blog/Hexo/public/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Myblog/Blog/Hexo/public/love/css/default.css","2fd911f377ecffa78ef688264161a2d2"],["D:/Myblog/Blog/Hexo/public/love/css/default_dev.css","e87501971c944654ca53c4d7a0c41bd0"],["D:/Myblog/Blog/Hexo/public/love/digital-7_mono.ttf","8e22783d707ad140bffe18b2a3812529"],["D:/Myblog/Blog/Hexo/public/love/index.html","b56f0cc31035b349f23209d34013bb00"],["D:/Myblog/Blog/Hexo/public/love/js/functions.js","bf793d486fd4b68e6c74d2663c11cfab"],["D:/Myblog/Blog/Hexo/public/love/js/functions_dev.js","e54c4c3bf2cb0589247b029821f952b4"],["D:/Myblog/Blog/Hexo/public/love/js/garden.js","0bba994a307dd63a7103f2f5e442f2d1"],["D:/Myblog/Blog/Hexo/public/love/js/garden_dev.js","f450b5e2edbd84e8d8243bf39755fa39"],["D:/Myblog/Blog/Hexo/public/love/js/jquery.js","10092eee563dec2dca82b77d2cf5a1ae"],["D:/Myblog/Blog/Hexo/public/love2/index.html","f5d79ee2b00b9b86632b5ac943351911"],["D:/Myblog/Blog/Hexo/public/love2/renxi/default.css","77c6d481093206fa774436af522fd7d1"],["D:/Myblog/Blog/Hexo/public/love2/renxi/functions.js","398486028d4d8fd9d8e0910499a28d17"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-jit.js","35be392b9cd2ad66c63bac412554d874"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["D:/Myblog/Blog/Hexo/public/love2/renxi/love.js","d5f2a8c693744f387064e78275c910f3"],["D:/Myblog/Blog/Hexo/public/message/index.html","faf01afda78f7d277120c459616301e6"],["D:/Myblog/Blog/Hexo/public/movies/index.html","7fe3c4f77f5ada7bc9e31ca085fbf10b"],["D:/Myblog/Blog/Hexo/public/music/index.html","2bfe346c7d98664c7461bd964d15f807"],["D:/Myblog/Blog/Hexo/public/page/2/index.html","35300994e5ca772c1ca3214db3d717ec"],["D:/Myblog/Blog/Hexo/public/page/3/index.html","f5b245c62acae80f0d7d912765f4e2ca"],["D:/Myblog/Blog/Hexo/public/page/4/index.html","ecbb4debeac41dc0a2bccbb081148af0"],["D:/Myblog/Blog/Hexo/public/school/index.html","c93cdbdc0498fa95cf677e6575bdee5b"],["D:/Myblog/Blog/Hexo/public/tags/API/index.html","58a65c8d71e467e24f85377f7ebdf313"],["D:/Myblog/Blog/Hexo/public/tags/blog/index.html","4b373c165f6efad8db84e5bd20064571"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/2/index.html","cb0ad5eb1f9e04f845f38fd54f8813ff"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/3/index.html","2bfe6fec8af2cfc45c3152a68529d132"],["D:/Myblog/Blog/Hexo/public/tags/centos/index.html","c53a0e07500cecbc23e91b38e50f7551"],["D:/Myblog/Blog/Hexo/public/tags/coding/index.html","85c79882c4ea26177b80b055446c29cf"],["D:/Myblog/Blog/Hexo/public/tags/huawei/index.html","779c535f90a69455544e88e19e0524c4"],["D:/Myblog/Blog/Hexo/public/tags/image/index.html","7b5c9c8de5e3db3aa40475ad4cddf680"],["D:/Myblog/Blog/Hexo/public/tags/index.html","7703f60c38cc5a0c9d06e7b1ab1bf973"],["D:/Myblog/Blog/Hexo/public/tags/jsDelivr/index.html","9ff6163f0899ea5c975f22c5b16c7c64"],["D:/Myblog/Blog/Hexo/public/tags/life/index.html","35e78493be57857c517f91655ce6578a"],["D:/Myblog/Blog/Hexo/public/tags/markdown/index.html","5f4c5c7aa596326eebe329dccb57fa0e"],["D:/Myblog/Blog/Hexo/public/tags/picgo/index.html","8152151496ea3a0ccbe270207bbd905e"],["D:/Myblog/Blog/Hexo/public/tags/resource/index.html","ea5bde032277132b5bda8b516bf833b8"],["D:/Myblog/Blog/Hexo/public/tags/revolvermaps/index.html","89390537b5e9b0ce91b551c151a1e66a"],["D:/Myblog/Blog/Hexo/public/tags/software/index.html","c2c87e451b95019f737a09d3c504e082"],["D:/Myblog/Blog/Hexo/public/tags/summary/index.html","b0f9a99718cc5156c03cfaed987b8c07"],["D:/Myblog/Blog/Hexo/public/tags/system/index.html","a263afebde870afb8544b1f714047e00"],["D:/Myblog/Blog/Hexo/public/tags/tcp/index.html","068b13b75a7debfe06afd61119d2282a"],["D:/Myblog/Blog/Hexo/public/tags/technology/index.html","be0241f4ada8ecb453fc8d156faf5159"],["D:/Myblog/Blog/Hexo/public/tags/valine/index.html","477a54973e97cf38544c92511c4c8484"],["D:/Myblog/Blog/Hexo/public/tags/web/index.html","168234ed481cd4c7362f956eaa5fb084"],["D:/Myblog/Blog/Hexo/public/tags/交换机/index.html","5d1ff6d9db3c76c26fec0f1c407923da"],["D:/Myblog/Blog/Hexo/public/tags/优化/index.html","8cf530b055d6ddf0f37f51b7f34083e6"],["D:/Myblog/Blog/Hexo/public/tags/共享/index.html","e56da29db11532fd8f0771ac1f3c5100"],["D:/Myblog/Blog/Hexo/public/tags/又拍云/index.html","2969bcd563713634c877126fde0954dd"],["D:/Myblog/Blog/Hexo/public/tags/反向代理/index.html","e8d55d8125d0a006a924c6dbd6b63a77"],["D:/Myblog/Blog/Hexo/public/tags/域名/index.html","a52d88cfebde0dd62fe0dadee1aa847a"],["D:/Myblog/Blog/Hexo/public/tags/端口/index.html","3ffe24e2394b78206458d7b94e429591"],["D:/Myblog/Blog/Hexo/public/tags/端口转发/index.html","5d8a38619c90d11fd9c73c0cfd88c983"],["D:/Myblog/Blog/Hexo/public/tags/豆瓣/index.html","87ef040336b4be257514ee8624121fce"],["D:/Myblog/Blog/Hexo/public/tags/负载均衡/index.html","caceeae0ac6b39f718a80c5c0492e401"],["D:/Myblog/Blog/Hexo/public/tags/远程/index.html","a33e5ede6b9a5b32199bd4610c077ea8"],["D:/Myblog/Blog/Hexo/public/tags/阿里云/index.html","a25a8411d8b7fca12917e4c5ba1f90dd"]];
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







