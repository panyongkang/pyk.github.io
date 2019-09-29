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

var precacheConfig = [["D:/Myblog/Blog/Hexo/public/2019/07/25/00030/index.html","05e532d7a379200486e7587f2a777320"],["D:/Myblog/Blog/Hexo/public/2019/07/26/00032/index.html","c318a4b9d743564ed37657cf0c0fc261"],["D:/Myblog/Blog/Hexo/public/2019/08/02/00013/index.html","7c569c7fb8b301ab8c1a3c7d8469bdbb"],["D:/Myblog/Blog/Hexo/public/2019/08/09/00008/index.html","ea332c2535841045e5f5fdc9ea185adf"],["D:/Myblog/Blog/Hexo/public/2019/08/10/00010/index.html","f00c36ee06d8589ce5835a872335df65"],["D:/Myblog/Blog/Hexo/public/2019/08/19/00009/index.html","b93eaeb8a35c49d89b68ce1d68a88f96"],["D:/Myblog/Blog/Hexo/public/2019/08/20/00031/index.html","e06c85f6377118d23814ba7717db3327"],["D:/Myblog/Blog/Hexo/public/2019/08/24/00026/index.html","bc236f92bdba63c75e535a0f864e5250"],["D:/Myblog/Blog/Hexo/public/2019/08/30/00028/index.html","f8c3770e4b20cf8abb6ed492939fc7b3"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00019/index.html","1228e345fc72bb2adc50f6a8f669a492"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00020/index.html","9778b7bf40faba19d5111e5b6466aa46"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00002/index.html","b2653374fd91a8a345aea6df804f30b3"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00003/index.html","679dde9438e705a7e303c895c99a8b3b"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00004/index.html","e20cc798ed68f8bcf337f3465813e1d7"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00005/index.html","5ec0ffa5ee69a7fc184651539648b298"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00007/index.html","d0612e25bb211b371dd9598a834a45ff"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00012/index.html","862256421003f996261f3301b8cbfc2f"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00014/index.html","a8390c248cb4df95b6571b01e78ab48f"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00015/index.html","75ef9fe454f89d3798b3f0c115c5b195"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00016/index.html","cdf310c7aa825129188d46cf42dffa16"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00017/index.html","63522fd6019bf65851621a46fc47c781"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00018/index.html","aaf39ede1bfaf5e16b101d0fe3c3f81f"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00021/index.html","7aa91e822c3f641430140e4089e4b202"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00022/index.html","30131c61c3f193cd703d41349c6c9415"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00023/index.html","e77a871c5accbe9df2066f118bdf0c05"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00024/index.html","9a4d31c7798d4f15831ab10e2fe3e0f5"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00025/index.html","5ed793e735b23f2b8f962da7f636b2d8"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00027/index.html","6bbd50632f0609ad454b519af9434772"],["D:/Myblog/Blog/Hexo/public/2019/09/20/00011/index.html","284c46d0b2c8c7573704c69898a948ce"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00001/index.html","e29c74509b643bf8368367e3ca4543bd"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00006/index.html","f17cb175b9b29fef8aa1188d478557ee"],["D:/Myblog/Blog/Hexo/public/2019/09/24/00029/index.html","3e8d235741b19ebdfb222a33c635a147"],["D:/Myblog/Blog/Hexo/public/2019/09/25/00033/index.html","73ff2c06ba53d1b345abe78036c14c0b"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00034/index.html","1b9a3fcb1a0a8efac1786e8b57945eb8"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00035/index.html","7561a3797f4c45af1145e82e7b09ea8a"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00036/index.html","8e052e3091a41a1f10ddd15d2c4068f6"],["D:/Myblog/Blog/Hexo/public/2019/09/27/00037/index.html","4fb4836317cfb91a3b4310bea8bb515c"],["D:/Myblog/Blog/Hexo/public/2019/09/29/00038/index.html","00799c5f0220601f0b82d36838608dd2"],["D:/Myblog/Blog/Hexo/public/2019/09/29/00039/index.html","a30b3333502eb7c81140c79b2e56264a"],["D:/Myblog/Blog/Hexo/public/404.html","f70feb2350ef58d1c8d8a07c73e10b67"],["D:/Myblog/Blog/Hexo/public/about/assets/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/Myblog/Blog/Hexo/public/about/assets/css/index.css","5fd1ff220d7990567e2302956fadd913"],["D:/Myblog/Blog/Hexo/public/about/assets/css/typo.css","0b5d6624fa8fefebea67a9f28920a210"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Myblog/Blog/Hexo/public/about/assets/images/avatar.jpg","9a3b013f512ea4dfdd9f35067a0bed4b"],["D:/Myblog/Blog/Hexo/public/about/assets/images/background.png","fac9d864f995beff8c55b403ba7c2bfb"],["D:/Myblog/Blog/Hexo/public/about/assets/images/ip.png","d5bfb3f23aedf8d7ea629806a7f3fa9e"],["D:/Myblog/Blog/Hexo/public/about/assets/images/pc.png","f249aa2b72abc9b3c25efdb4d812258f"],["D:/Myblog/Blog/Hexo/public/about/assets/js/CanvasNest.js","011972b152a314428c4ebf0110285f3a"],["D:/Myblog/Blog/Hexo/public/about/assets/js/index.js","14cc657b8cedad4d4d65d694f6737289"],["D:/Myblog/Blog/Hexo/public/about/index.html","bf9123b24f68c97e471a8f833078dc46"],["D:/Myblog/Blog/Hexo/public/archives/2019/07/index.html","eece41dfd5c414bc79c309ff724dca63"],["D:/Myblog/Blog/Hexo/public/archives/2019/08/index.html","fe99f50cf3238b285152d99794bfe0f7"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/index.html","629e4450261a99aa1ac99cb49a3b7d80"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/2/index.html","118091e68b0fd35833886c190591a1fd"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/3/index.html","09c7f8fca59e3ee0e6bb9424ff6ebf41"],["D:/Myblog/Blog/Hexo/public/archives/2019/index.html","b85ba76d85252f8e2b8dfd5d7b810dcb"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/2/index.html","ce95c2a7ccb714930c8d6a56cad11876"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/3/index.html","3920ed59a93a48d3394ca1fe6487fb3b"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/4/index.html","202c88edf3bd74ea24c9cff2ccacdfcc"],["D:/Myblog/Blog/Hexo/public/archives/index.html","0b41d7f30496c1f475266d878fe38f1f"],["D:/Myblog/Blog/Hexo/public/archives/page/2/index.html","7ecda059d5270c843111d09758d163ed"],["D:/Myblog/Blog/Hexo/public/archives/page/3/index.html","a8d7180dbfc55c07f370a9a8b6f2b694"],["D:/Myblog/Blog/Hexo/public/archives/page/4/index.html","7b296abacefcced5d0f711fc82372650"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.js","c5212e1f9ff5012aeb8377c347143213"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.min.js","3d0f4dccf8b2078c95f98a635fdbf26c"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.js","f4295eda45c30851626faa504c148548"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.min.js","7c9e4cf319574c60f839ae0c06dddc81"],["D:/Myblog/Blog/Hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Myblog/Blog/Hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/Myblog/Blog/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Myblog/Blog/Hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Myblog/Blog/Hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/Myblog/Blog/Hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Myblog/Blog/Hexo/public/books/index.html","b0d6029d75f18c2ae6f98a10474c364b"],["D:/Myblog/Blog/Hexo/public/categories/CDN/index.html","19e73ec334246e5a47f5068b81e37e42"],["D:/Myblog/Blog/Hexo/public/categories/Diary/index.html","a47bb00ebfe5c94fc36d47afa9ce24fa"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/index.html","09bc64670a9b500d627b9ecf639c3f2a"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/page/2/index.html","b0e64af9b87b325374b4ef8c77d40810"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/index.html","0ec4ab34526531b7be277d7aa37e83c0"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/page/2/index.html","7a79d8e76f96e073814121cd4d870a88"],["D:/Myblog/Blog/Hexo/public/categories/Hexo/index.html","871b8db33d772a2225b1a5c762085a6e"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Nginx/index.html","e5cb00aad38d3406f57bc9484f14c47b"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Zabbix/index.html","1379d03424bd1302e61e19341779f55f"],["D:/Myblog/Blog/Hexo/public/categories/Linux/index.html","17f3f141fe8909fbcb1a793d28622c04"],["D:/Myblog/Blog/Hexo/public/categories/Network/index.html","1267ae40f5ed167cc641d602a3c7980c"],["D:/Myblog/Blog/Hexo/public/categories/Nginx/index.html","d6ebb7c9350fdbc02186595420d65eab"],["D:/Myblog/Blog/Hexo/public/categories/Problem/index.html","92d4b3d79e0c167664598634d318942b"],["D:/Myblog/Blog/Hexo/public/categories/Summary/index.html","cf418435c2f30df0a4842158a9ab1df3"],["D:/Myblog/Blog/Hexo/public/categories/Window/index.html","ea8b4aa58eb1ef93032fbe8eae37fb7d"],["D:/Myblog/Blog/Hexo/public/categories/WordPress/index.html","75ec62e91c2b7a1a7a48fb31cdeb8716"],["D:/Myblog/Blog/Hexo/public/categories/index.html","cfe45ffeec9c372dfee3d84872cd404f"],["D:/Myblog/Blog/Hexo/public/categories/服务器/index.html","4b90282ebab3b9a466cfab42881e5667"],["D:/Myblog/Blog/Hexo/public/css/index.css","bc3b5ee5a336e5e7c384186d35ce6747"],["D:/Myblog/Blog/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Myblog/Blog/Hexo/public/gallery/index.html","b5e36c3cc935819a29f3f29605df6ef7"],["D:/Myblog/Blog/Hexo/public/games/index.html","191363da5fe1418ea8a77112279f941a"],["D:/Myblog/Blog/Hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/Myblog/Blog/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Myblog/Blog/Hexo/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["D:/Myblog/Blog/Hexo/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/Myblog/Blog/Hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/Myblog/Blog/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Myblog/Blog/Hexo/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/Myblog/Blog/Hexo/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["D:/Myblog/Blog/Hexo/public/index.html","2d6f18a630970edb79f5a7bc7abac4c0"],["D:/Myblog/Blog/Hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/Myblog/Blog/Hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/Myblog/Blog/Hexo/public/js/click_show_text.js","a3947325db229187173efa20ff3c1ad2"],["D:/Myblog/Blog/Hexo/public/js/main.js","10f97e1001bd4f1f7d2360e8c29d6ab5"],["D:/Myblog/Blog/Hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/Myblog/Blog/Hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/Myblog/Blog/Hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/Myblog/Blog/Hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/Myblog/Blog/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/Myblog/Blog/Hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Myblog/Blog/Hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/Myblog/Blog/Hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/Myblog/Blog/Hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/Myblog/Blog/Hexo/public/link/index.html","f4d943476f422836af7f309da32239b2"],["D:/Myblog/Blog/Hexo/public/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Myblog/Blog/Hexo/public/love/css/default.css","2fd911f377ecffa78ef688264161a2d2"],["D:/Myblog/Blog/Hexo/public/love/css/default_dev.css","e87501971c944654ca53c4d7a0c41bd0"],["D:/Myblog/Blog/Hexo/public/love/digital-7_mono.ttf","8e22783d707ad140bffe18b2a3812529"],["D:/Myblog/Blog/Hexo/public/love/index.html","b56f0cc31035b349f23209d34013bb00"],["D:/Myblog/Blog/Hexo/public/love/js/functions.js","bf793d486fd4b68e6c74d2663c11cfab"],["D:/Myblog/Blog/Hexo/public/love/js/functions_dev.js","e54c4c3bf2cb0589247b029821f952b4"],["D:/Myblog/Blog/Hexo/public/love/js/garden.js","0bba994a307dd63a7103f2f5e442f2d1"],["D:/Myblog/Blog/Hexo/public/love/js/garden_dev.js","f450b5e2edbd84e8d8243bf39755fa39"],["D:/Myblog/Blog/Hexo/public/love/js/jquery.js","10092eee563dec2dca82b77d2cf5a1ae"],["D:/Myblog/Blog/Hexo/public/love2/index.html","f5d79ee2b00b9b86632b5ac943351911"],["D:/Myblog/Blog/Hexo/public/love2/renxi/default.css","77c6d481093206fa774436af522fd7d1"],["D:/Myblog/Blog/Hexo/public/love2/renxi/functions.js","398486028d4d8fd9d8e0910499a28d17"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-jit.js","35be392b9cd2ad66c63bac412554d874"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["D:/Myblog/Blog/Hexo/public/love2/renxi/love.js","d5f2a8c693744f387064e78275c910f3"],["D:/Myblog/Blog/Hexo/public/message/index.html","62e1d24b1094b72480fbac56aeecd304"],["D:/Myblog/Blog/Hexo/public/movies/index.html","e9dd394da88915005e39c966d492698c"],["D:/Myblog/Blog/Hexo/public/music/index.html","a6fb0c7235f798850662a16f86aee0e1"],["D:/Myblog/Blog/Hexo/public/page/2/index.html","91fd820d6e7752c0686a98a2ded11746"],["D:/Myblog/Blog/Hexo/public/page/3/index.html","2ca2fb3783a721835cac27e6d980ab1b"],["D:/Myblog/Blog/Hexo/public/page/4/index.html","029b3052dfc66d8cb580d26345638ae0"],["D:/Myblog/Blog/Hexo/public/school/index.html","c93cdbdc0498fa95cf677e6575bdee5b"],["D:/Myblog/Blog/Hexo/public/tags/API/index.html","f50faf7a92872a9a14b4bd8e43b869f3"],["D:/Myblog/Blog/Hexo/public/tags/blog/index.html","f3f9ddbfc7334f378c759483aca94835"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/2/index.html","53354e8e35164cdca23c3bcf6dba2bba"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/3/index.html","ff2d34bc824c7e5c4efd897b0fbd5a66"],["D:/Myblog/Blog/Hexo/public/tags/centos/index.html","dd41612800c36821b5b606252b7eaf89"],["D:/Myblog/Blog/Hexo/public/tags/coding/index.html","ebc9f965953b7d3a5c51eb2e3544b457"],["D:/Myblog/Blog/Hexo/public/tags/huawei/index.html","917ba099463573d83ddc22234c369d4d"],["D:/Myblog/Blog/Hexo/public/tags/image/index.html","ef7fa96253925156e1f99171b226a370"],["D:/Myblog/Blog/Hexo/public/tags/index.html","0d09e64fcc980de37516e8a9215859b5"],["D:/Myblog/Blog/Hexo/public/tags/jsDelivr/index.html","d66d6ead3bc0dbceee62bf3145e62021"],["D:/Myblog/Blog/Hexo/public/tags/life/index.html","cecae0a64bb1533dca0b0bb78d9c5c36"],["D:/Myblog/Blog/Hexo/public/tags/markdown/index.html","a07b713a82140764a632846c1e57969d"],["D:/Myblog/Blog/Hexo/public/tags/picgo/index.html","ae10d7b259ceaf69f96c713c06960ec3"],["D:/Myblog/Blog/Hexo/public/tags/resource/index.html","0488c6da9c8d378c5c7731f00d1b80ef"],["D:/Myblog/Blog/Hexo/public/tags/revolvermaps/index.html","f55678ef2b5d5e5d41337d1269551efd"],["D:/Myblog/Blog/Hexo/public/tags/software/index.html","8be9e572c85d8a1e749b19ff6e554e26"],["D:/Myblog/Blog/Hexo/public/tags/summary/index.html","045a3cf15cec5ea4c32046f99ce40dc1"],["D:/Myblog/Blog/Hexo/public/tags/system/index.html","20c4e40029e6a644d50a4d61b68f5706"],["D:/Myblog/Blog/Hexo/public/tags/tcp/index.html","e79fbc6bccf8bb021b73110537c54fde"],["D:/Myblog/Blog/Hexo/public/tags/technology/index.html","533f14bfe79f1c81ad3a13ea77a4f937"],["D:/Myblog/Blog/Hexo/public/tags/valine/index.html","cafd1cea845bbc9537a3f3435a28525f"],["D:/Myblog/Blog/Hexo/public/tags/web/index.html","e1c190cf011fac0e22bb654af436e387"],["D:/Myblog/Blog/Hexo/public/tags/交换机/index.html","8a13b4ab6202e1edf057b3c8a0b4eb37"],["D:/Myblog/Blog/Hexo/public/tags/优化/index.html","c80e3b6861e88729c502764f8bb4db0f"],["D:/Myblog/Blog/Hexo/public/tags/共享/index.html","4b4e577b4f621a87b35e394e76e0a794"],["D:/Myblog/Blog/Hexo/public/tags/又拍云/index.html","699d15dd909addccb2a8750a288752ee"],["D:/Myblog/Blog/Hexo/public/tags/反向代理/index.html","4a2107d4a28d5f434a033ace6387a0b0"],["D:/Myblog/Blog/Hexo/public/tags/域名/index.html","0af5357f920b5a8d0e45a8894ae7fd80"],["D:/Myblog/Blog/Hexo/public/tags/端口/index.html","9d87a1d35a7cae4d278ecc658792c3e8"],["D:/Myblog/Blog/Hexo/public/tags/端口转发/index.html","5d8cd87fa67b00fdb12474568716c319"],["D:/Myblog/Blog/Hexo/public/tags/豆瓣/index.html","ae21923ba5a5f9eb00fe97ab8968b5cb"],["D:/Myblog/Blog/Hexo/public/tags/负载均衡/index.html","9de86a7b3b7af1470a28892fbb2fb804"],["D:/Myblog/Blog/Hexo/public/tags/远程/index.html","2a2fba9a3b11f22a49cfa3de50370b53"],["D:/Myblog/Blog/Hexo/public/tags/阿里云/index.html","f6128ad9673752515c08c9993fb6845b"]];
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







