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

var precacheConfig = [["D:/Myblog/Blog/Hexo/public/2019/07/25/00030/index.html","c1bf8efefae49ca35995b943c837fb41"],["D:/Myblog/Blog/Hexo/public/2019/07/26/00032/index.html","8e74ac1576e0469dfb1453a5496bd631"],["D:/Myblog/Blog/Hexo/public/2019/08/02/00013/index.html","4d15f33cd461c0f4b976c4e7c3fd292e"],["D:/Myblog/Blog/Hexo/public/2019/08/09/00008/index.html","29cb4d4e4bec445bb4237da9767592a9"],["D:/Myblog/Blog/Hexo/public/2019/08/10/00010/index.html","d4ebdf8effd8aac160d1603d014340c2"],["D:/Myblog/Blog/Hexo/public/2019/08/19/00009/index.html","01fc126e06f08dbac9c46655da7a3dd6"],["D:/Myblog/Blog/Hexo/public/2019/08/20/00031/index.html","d32d658f213b1811b255f1220b2f8157"],["D:/Myblog/Blog/Hexo/public/2019/08/24/00026/index.html","1caa77f37f3a2ae2636220a07c93d368"],["D:/Myblog/Blog/Hexo/public/2019/08/30/00028/index.html","24ed32240ad64a797789cd1f5aabfb9c"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00019/index.html","7798068c7c48601bfc18ab31effc89d3"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00020/index.html","db61313c6a5929bce09af58dc94847d1"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00002/index.html","e90563dd7ac76479e8a138121981019a"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00003/index.html","b7f8f0aa4fb6b315c16a2158c78ab831"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00004/index.html","81fc29d07ec43bfb3bc761f5bccf95dd"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00005/index.html","d40fb8b5580426e4d06bfbbcad25a2ac"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00007/index.html","bfba6efb39eaf448ee2a23551236159c"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00012/index.html","f0bc7cf1e788ca9aa84d13fe4742b3f0"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00014/index.html","6f833b0c0663034aaaa9b0032b902125"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00015/index.html","294164c68beb6b0bc726ca6bd1d409c0"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00016/index.html","34ebf617d8bbd7bef947cb4bf887335c"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00017/index.html","992229eaf7e0c157147589ef4ce1d088"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00018/index.html","614390cf2b039118ddb0d7326609f932"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00021/index.html","981918fc262097fefeb1a993e2fbc059"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00022/index.html","648628271e180f32a5ff8acfdb0d1f53"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00023/index.html","16f48f98a9a6a97a2a8d4803517716c0"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00024/index.html","a79fe80b61ed0c682201691d2683dce7"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00025/index.html","58ecb9836c6c2463246537871ae7082d"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00027/index.html","4354ea6f1e13c0f430b6036d709529d0"],["D:/Myblog/Blog/Hexo/public/2019/09/20/00011/index.html","042bfa305e2886a80a8081f87b000218"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00001/index.html","9f96f862d8295873e1ef669135fb411f"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00006/index.html","2a9cfe7d09ed9ba80cc908fec398222c"],["D:/Myblog/Blog/Hexo/public/2019/09/24/00029/index.html","2069715eedb2c4d89505ae54f19942b5"],["D:/Myblog/Blog/Hexo/public/2019/09/25/00033/index.html","8da1b0921a143ded0e8775b064ee874d"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00034/index.html","2ec80dc87f7c6e356788856eb9057e73"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00035/index.html","472eed449aad696a6577a76d3417ddec"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00036/index.html","2fac11f37a631802e290c1f8845b6faf"],["D:/Myblog/Blog/Hexo/public/2019/09/27/00037/index.html","12ddef1e1d3d1e0f811d097329bdf52e"],["D:/Myblog/Blog/Hexo/public/404.html","f893cd36a60f725417a0bda6602c9e79"],["D:/Myblog/Blog/Hexo/public/about/assets/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/Myblog/Blog/Hexo/public/about/assets/css/index.css","5fd1ff220d7990567e2302956fadd913"],["D:/Myblog/Blog/Hexo/public/about/assets/css/typo.css","0b5d6624fa8fefebea67a9f28920a210"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Myblog/Blog/Hexo/public/about/assets/images/avatar.jpg","9a3b013f512ea4dfdd9f35067a0bed4b"],["D:/Myblog/Blog/Hexo/public/about/assets/images/background.png","fac9d864f995beff8c55b403ba7c2bfb"],["D:/Myblog/Blog/Hexo/public/about/assets/images/ip.png","d5bfb3f23aedf8d7ea629806a7f3fa9e"],["D:/Myblog/Blog/Hexo/public/about/assets/images/pc.png","f249aa2b72abc9b3c25efdb4d812258f"],["D:/Myblog/Blog/Hexo/public/about/assets/js/CanvasNest.js","011972b152a314428c4ebf0110285f3a"],["D:/Myblog/Blog/Hexo/public/about/assets/js/index.js","14cc657b8cedad4d4d65d694f6737289"],["D:/Myblog/Blog/Hexo/public/about/index.html","bf9123b24f68c97e471a8f833078dc46"],["D:/Myblog/Blog/Hexo/public/archives/2019/07/index.html","051f2da1f9cb8aa62548b38516a1b708"],["D:/Myblog/Blog/Hexo/public/archives/2019/08/index.html","beb1e4c732dbed031757008e24a164cc"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/index.html","d4cb62e59e8c6e9e1a478985e47f3dae"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/2/index.html","69703f6c9c29ca391a5779cd6a35d4d7"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/3/index.html","99b4f287df4f1fea5c4d62e73d0111e8"],["D:/Myblog/Blog/Hexo/public/archives/2019/index.html","36eb5c7a2b500686592cba220e22e3f2"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/2/index.html","d629e85ed047a3e0ba4752e3ae974a1c"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/3/index.html","8dbf6bfad6632cf53e73fc741638a3e3"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/4/index.html","4c9ae4670bb8fae25c98689f656f019d"],["D:/Myblog/Blog/Hexo/public/archives/index.html","1772543dfd7fd344c7eaec34dc4f24c6"],["D:/Myblog/Blog/Hexo/public/archives/page/2/index.html","cd536745c1d4d278fbbfbbb2d1212177"],["D:/Myblog/Blog/Hexo/public/archives/page/3/index.html","968b9a6600b6042b11d96715fae6714e"],["D:/Myblog/Blog/Hexo/public/archives/page/4/index.html","164755e501a58dca6acd0ac0c367a3a5"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.js","c5212e1f9ff5012aeb8377c347143213"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.min.js","3d0f4dccf8b2078c95f98a635fdbf26c"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.js","f4295eda45c30851626faa504c148548"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.min.js","7c9e4cf319574c60f839ae0c06dddc81"],["D:/Myblog/Blog/Hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Myblog/Blog/Hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/Myblog/Blog/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Myblog/Blog/Hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Myblog/Blog/Hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/Myblog/Blog/Hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Myblog/Blog/Hexo/public/books/index.html","a301cd450f0a3b219677c2bfb5fee37f"],["D:/Myblog/Blog/Hexo/public/categories/CDN/index.html","0aab4f702296e44aa6c50f584c3ba0c3"],["D:/Myblog/Blog/Hexo/public/categories/Diary/index.html","6f54563d6cd288a5535fe79c7cd9039e"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/index.html","3eff040d8ed343f63e911737edc30734"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/page/2/index.html","4d04c391648c38d5579d3cd8e315e07c"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/index.html","ba932921e04611f3b913055afee97e66"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/page/2/index.html","d30e5e1cdde01e7eab74c1de89c0c936"],["D:/Myblog/Blog/Hexo/public/categories/Hexo/index.html","527bba9967426e6e2926bf80c2b16bc8"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Nginx/index.html","616a3110b508721c1170f2d41054c2f9"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Zabbix/index.html","02159fb5fae873ef63278ba052fbcf1e"],["D:/Myblog/Blog/Hexo/public/categories/Linux/index.html","7aa902b8e411689136dc21298d12e58a"],["D:/Myblog/Blog/Hexo/public/categories/Network/index.html","4e30e963a135a88a93652db5a5371001"],["D:/Myblog/Blog/Hexo/public/categories/Nginx/index.html","7b6f292de607245f4d3691c1f69176c1"],["D:/Myblog/Blog/Hexo/public/categories/Problem/index.html","ccd8380eb66224be650e97a05fce36bc"],["D:/Myblog/Blog/Hexo/public/categories/Summary/index.html","892ca239b40797bf55ed1cd29eb9d8d0"],["D:/Myblog/Blog/Hexo/public/categories/Window/index.html","61c01cd7ca8bbc167b82179c80ba16b6"],["D:/Myblog/Blog/Hexo/public/categories/WordPress/index.html","871a639900bdbce580aaad2b5caed819"],["D:/Myblog/Blog/Hexo/public/categories/index.html","90552331e3db2fcc302e322ad9a3d0ba"],["D:/Myblog/Blog/Hexo/public/css/index.css","bc3b5ee5a336e5e7c384186d35ce6747"],["D:/Myblog/Blog/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Myblog/Blog/Hexo/public/gallery/index.html","588944f8aa623520a1be5bc920d54dc2"],["D:/Myblog/Blog/Hexo/public/games/index.html","12521dc6e1caac85c67146dbd79f2bc4"],["D:/Myblog/Blog/Hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/Myblog/Blog/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Myblog/Blog/Hexo/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["D:/Myblog/Blog/Hexo/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/Myblog/Blog/Hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/Myblog/Blog/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Myblog/Blog/Hexo/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/Myblog/Blog/Hexo/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["D:/Myblog/Blog/Hexo/public/index.html","a9e10d297c0dcb6558ed39e60dd526ef"],["D:/Myblog/Blog/Hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/Myblog/Blog/Hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/Myblog/Blog/Hexo/public/js/click_show_text.js","a3947325db229187173efa20ff3c1ad2"],["D:/Myblog/Blog/Hexo/public/js/main.js","10f97e1001bd4f1f7d2360e8c29d6ab5"],["D:/Myblog/Blog/Hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/Myblog/Blog/Hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/Myblog/Blog/Hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/Myblog/Blog/Hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/Myblog/Blog/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/Myblog/Blog/Hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Myblog/Blog/Hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/Myblog/Blog/Hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/Myblog/Blog/Hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/Myblog/Blog/Hexo/public/link/index.html","d89a7fa34c58684c884444c40b524199"],["D:/Myblog/Blog/Hexo/public/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Myblog/Blog/Hexo/public/message/index.html","2e7132f94d8c86c508a990eaf44d4dd0"],["D:/Myblog/Blog/Hexo/public/movies/index.html","7800dbaaa23afa88f348d02f354bc2b6"],["D:/Myblog/Blog/Hexo/public/music/index.html","c69f01f8cec8bcf697eb09cb83eee7ff"],["D:/Myblog/Blog/Hexo/public/page/2/index.html","7f66a7fdb9b5d530f8b788b15ea9746a"],["D:/Myblog/Blog/Hexo/public/page/3/index.html","5bef2f7b054adb491ba3dde86149e04a"],["D:/Myblog/Blog/Hexo/public/page/4/index.html","e1ebe4d0f5da191624aae0119006d3e8"],["D:/Myblog/Blog/Hexo/public/tags/API/index.html","b6599cbd029ca4b6596da1a2a6a7887b"],["D:/Myblog/Blog/Hexo/public/tags/blog/index.html","90dd22eb87ae5b74bae70d9fe0ad9e86"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/2/index.html","5c89f5c1eb0d3c0ac1eaea155ce9dcea"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/3/index.html","93ce58a28f964b7f8d0408fe60468696"],["D:/Myblog/Blog/Hexo/public/tags/centos/index.html","69980443702455fca6e8e7c8d392dbf0"],["D:/Myblog/Blog/Hexo/public/tags/coding/index.html","ab26ac24103968ac6639e934159c9fd4"],["D:/Myblog/Blog/Hexo/public/tags/huawei/index.html","b632affb88aef1898828964805240753"],["D:/Myblog/Blog/Hexo/public/tags/image/index.html","bda31893db1a7a5f5ed7b2a59a2727b9"],["D:/Myblog/Blog/Hexo/public/tags/index.html","2035af5aa73e95d806cfd910195dd6e2"],["D:/Myblog/Blog/Hexo/public/tags/jsDelivr/index.html","a805d51ed1a9c032b4a571d1501d07a1"],["D:/Myblog/Blog/Hexo/public/tags/life/index.html","54cadb0f79773a7e4a97708f194d5237"],["D:/Myblog/Blog/Hexo/public/tags/markdown/index.html","1bad7066640026c81af9c5060dea38b7"],["D:/Myblog/Blog/Hexo/public/tags/picgo/index.html","b10ba8a1cb7b06214a74a7d0950900f9"],["D:/Myblog/Blog/Hexo/public/tags/resource/index.html","7226388cb9f692641e37a6f3c8e09c82"],["D:/Myblog/Blog/Hexo/public/tags/revolvermaps/index.html","8949396e6b23a154766e2a8b2a003b64"],["D:/Myblog/Blog/Hexo/public/tags/software/index.html","5c12ad6c1eff2a6307438b1fe448c1b5"],["D:/Myblog/Blog/Hexo/public/tags/summary/index.html","6066f20be12c04e8f09bbb285982f486"],["D:/Myblog/Blog/Hexo/public/tags/system/index.html","73685193213a8e74421ebfae914f0b78"],["D:/Myblog/Blog/Hexo/public/tags/tcp/index.html","434e368404f71bfdc6bf101087f3437f"],["D:/Myblog/Blog/Hexo/public/tags/technology/index.html","83d998eea4e563455f7f2bf4c558da22"],["D:/Myblog/Blog/Hexo/public/tags/valine/index.html","206d2995752e2f3041b4ad67344af030"],["D:/Myblog/Blog/Hexo/public/tags/web/index.html","13ff905ff3a8075d727b6e0b1a3fe6b6"],["D:/Myblog/Blog/Hexo/public/tags/交换机/index.html","069a3cc7ebe70591d6a374094bedd413"],["D:/Myblog/Blog/Hexo/public/tags/优化/index.html","e86b89bad3a374a796e9e2654447a732"],["D:/Myblog/Blog/Hexo/public/tags/共享/index.html","f22f435b38f8814ae68550d0f08e7a17"],["D:/Myblog/Blog/Hexo/public/tags/又拍云/index.html","74f07f68320632037416dd5f2802fd0b"],["D:/Myblog/Blog/Hexo/public/tags/反向代理/index.html","b04985b8f65fc965f082d3eeb8f05b44"],["D:/Myblog/Blog/Hexo/public/tags/域名/index.html","763f23c17c4dbb1553ec645810fa1439"],["D:/Myblog/Blog/Hexo/public/tags/端口/index.html","793ea3ce04cfcaf4a7ac46053c2e9330"],["D:/Myblog/Blog/Hexo/public/tags/端口转发/index.html","64197a90355001f38e3d618ba3ab024b"],["D:/Myblog/Blog/Hexo/public/tags/负载均衡/index.html","26f34d182b39980ecc1c35a03e74344a"],["D:/Myblog/Blog/Hexo/public/tags/远程/index.html","7ad7b0132f30ce34d72ae61273a52141"]];
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







