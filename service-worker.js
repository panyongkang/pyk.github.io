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

var precacheConfig = [["D:/Myblog/Blog/Hexo/public/2019/07/25/00030/index.html","05e532d7a379200486e7587f2a777320"],["D:/Myblog/Blog/Hexo/public/2019/07/26/00032/index.html","c318a4b9d743564ed37657cf0c0fc261"],["D:/Myblog/Blog/Hexo/public/2019/08/02/00013/index.html","c4522919027b7d369359eac8dc53399d"],["D:/Myblog/Blog/Hexo/public/2019/08/09/00008/index.html","ea332c2535841045e5f5fdc9ea185adf"],["D:/Myblog/Blog/Hexo/public/2019/08/10/00010/index.html","f00c36ee06d8589ce5835a872335df65"],["D:/Myblog/Blog/Hexo/public/2019/08/19/00009/index.html","b93eaeb8a35c49d89b68ce1d68a88f96"],["D:/Myblog/Blog/Hexo/public/2019/08/20/00031/index.html","e06c85f6377118d23814ba7717db3327"],["D:/Myblog/Blog/Hexo/public/2019/08/24/00026/index.html","238575c1998937fa8b1190a5c4aeb1ec"],["D:/Myblog/Blog/Hexo/public/2019/08/30/00028/index.html","1f8203dffcd01fc8ee89e028aa8d535a"],["D:/Myblog/Blog/Hexo/public/2019/09/01/00039/index.html","de4e6e375f5973c54e60283784875596"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00019/index.html","6270c35944a03db1be116fcb5b59c61a"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00020/index.html","d276e88fc76924a5b01a1c7d21727ff1"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00002/index.html","346942ac32d66fe4612845b834246ee4"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00003/index.html","5ed2600e1ef1aa63a12d5fed32fb67d6"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00004/index.html","bc37aaf2bf86518636b92f27c7512922"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00005/index.html","b554bcfce9431bd7e3b637904ba22efa"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00007/index.html","7f8144810b6073ba432e9687ac45a48f"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00012/index.html","3ad2d2b240a78499d234967a31c926cc"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00014/index.html","2869617f156eba698d47c84d0957bd70"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00015/index.html","36bd2a5c18a2512b11b36fbd06f9e975"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00016/index.html","5ad1e2e550b6f76e38637da2c871f4cf"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00017/index.html","0e5ba0867da350899af66081802433fd"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00018/index.html","840aac58e1b1e9652e08c2c50d67983e"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00021/index.html","d865bfe93459ec724d91f1aba8b78723"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00022/index.html","77fca3561fc086809927bde32b5a75b1"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00023/index.html","39d9750b47319f8c0ab19d58d6c1b1b0"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00024/index.html","afb77a88cf5c9445644c48929506b53f"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00025/index.html","06c2a31073e5972cb7c73831139ea989"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00027/index.html","6fff1de6ac195dd5ec7332ed21255a48"],["D:/Myblog/Blog/Hexo/public/2019/09/15/00038/index.html","0f1833f17b2e11e13b5097fd6e64f6ff"],["D:/Myblog/Blog/Hexo/public/2019/09/20/00011/index.html","48160e5ac63a2f20a879afdfd5fe4839"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00001/index.html","e29c74509b643bf8368367e3ca4543bd"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00006/index.html","abdd0d360ecef304971e19a6200e940f"],["D:/Myblog/Blog/Hexo/public/2019/09/24/00029/index.html","9bf94a40860d6712b9bf52970f97b163"],["D:/Myblog/Blog/Hexo/public/2019/09/25/00033/index.html","356d4df216d55fbad19862c6b748eac3"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00034/index.html","a8fa0afbdfcea30a0e32629e46280c23"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00035/index.html","7038f1fb6e51784f280a5a1319db28dd"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00036/index.html","628d35142a12ad3316700dc79ac0580c"],["D:/Myblog/Blog/Hexo/public/2019/09/27/00037/index.html","d92e9e6d672b5be28d7ff5f0f6e8838e"],["D:/Myblog/Blog/Hexo/public/2019/09/29/00038/index.html","74595d370fb64d7f6a68e40116e904f8"],["D:/Myblog/Blog/Hexo/public/2019/09/29/00039/index.html","a30b3333502eb7c81140c79b2e56264a"],["D:/Myblog/Blog/Hexo/public/404.html","d673724ee4dee12c6f3beae7f0e857c1"],["D:/Myblog/Blog/Hexo/public/about/assets/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/Myblog/Blog/Hexo/public/about/assets/css/index.css","5fd1ff220d7990567e2302956fadd913"],["D:/Myblog/Blog/Hexo/public/about/assets/css/typo.css","0b5d6624fa8fefebea67a9f28920a210"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Myblog/Blog/Hexo/public/about/assets/images/avatar.jpg","9a3b013f512ea4dfdd9f35067a0bed4b"],["D:/Myblog/Blog/Hexo/public/about/assets/images/background.png","fac9d864f995beff8c55b403ba7c2bfb"],["D:/Myblog/Blog/Hexo/public/about/assets/images/ip.png","d5bfb3f23aedf8d7ea629806a7f3fa9e"],["D:/Myblog/Blog/Hexo/public/about/assets/images/pc.png","f249aa2b72abc9b3c25efdb4d812258f"],["D:/Myblog/Blog/Hexo/public/about/assets/js/CanvasNest.js","011972b152a314428c4ebf0110285f3a"],["D:/Myblog/Blog/Hexo/public/about/assets/js/index.js","14cc657b8cedad4d4d65d694f6737289"],["D:/Myblog/Blog/Hexo/public/about/index.html","bf9123b24f68c97e471a8f833078dc46"],["D:/Myblog/Blog/Hexo/public/archives/2019/07/index.html","f6e246c30db3d98ed6e6a9369533c0e2"],["D:/Myblog/Blog/Hexo/public/archives/2019/08/index.html","420276e9cb057bb5525d432f5cf9b657"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/index.html","a1d6ba88707f500aace132703e7ff243"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/2/index.html","9b877e760fd092e8132dc075fb21e305"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/3/index.html","4928aa9955f4f69958be05abfbcd18d8"],["D:/Myblog/Blog/Hexo/public/archives/2019/index.html","597519724ac05f8f08bc9e64b6fc9ba4"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/2/index.html","4f38ffd6fa2c875e4fa946e2613e483d"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/3/index.html","86138e20ec8e43421735b85fae44dfe4"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/4/index.html","0477ad801fe088e75de1984427ad9533"],["D:/Myblog/Blog/Hexo/public/archives/index.html","d8502e6d042d85c056f118dbb140423f"],["D:/Myblog/Blog/Hexo/public/archives/page/2/index.html","7ec58ed50eade850d209a2c0bf9c8caf"],["D:/Myblog/Blog/Hexo/public/archives/page/3/index.html","a2c09cfeb5c69ce5982a75d7d970c0ec"],["D:/Myblog/Blog/Hexo/public/archives/page/4/index.html","ddaf3307a84f0733b11ef05e8656eec4"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.js","c5212e1f9ff5012aeb8377c347143213"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.min.js","3d0f4dccf8b2078c95f98a635fdbf26c"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.js","f4295eda45c30851626faa504c148548"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.min.js","7c9e4cf319574c60f839ae0c06dddc81"],["D:/Myblog/Blog/Hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Myblog/Blog/Hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/Myblog/Blog/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Myblog/Blog/Hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Myblog/Blog/Hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/Myblog/Blog/Hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Myblog/Blog/Hexo/public/books/index.html","d56d4f5d7f417e90e554001bbbc87cae"],["D:/Myblog/Blog/Hexo/public/categories/CDN/index.html","e816af95f57db850ea06349650b52e1f"],["D:/Myblog/Blog/Hexo/public/categories/Diary/index.html","e8729cda78dbabf3084da996d8274886"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/index.html","8da50a967dc02d03cdfb224191154f1b"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/page/2/index.html","a5bf195ffa59d2013b9ebc9131a8b86c"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/index.html","1f0a777cf28b855850324a5972b98ff7"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/page/2/index.html","5e9e7fe72618bd866c733189b231887a"],["D:/Myblog/Blog/Hexo/public/categories/Hexo/index.html","e0d3d583414259f68f44fd7eec89ceef"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Nginx/index.html","647303baf4fee48b0654e4bc7b9b1860"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Zabbix/index.html","032d2a9d1ccb1bf09c98f732d6c00129"],["D:/Myblog/Blog/Hexo/public/categories/Linux/index.html","04542909e54ac164aa58b827fdde3f10"],["D:/Myblog/Blog/Hexo/public/categories/Network/index.html","a68a7b982cb1fd36a3dd16de116316e7"],["D:/Myblog/Blog/Hexo/public/categories/Nginx/index.html","659207cccab7c820e9fe5be5fe2acdfc"],["D:/Myblog/Blog/Hexo/public/categories/Problem/index.html","ce56f12d7634e6515bd6d595c87608e8"],["D:/Myblog/Blog/Hexo/public/categories/Summary/index.html","9ca990bfc4f72a7943baca9a3d7de386"],["D:/Myblog/Blog/Hexo/public/categories/Window/index.html","581f0dcfcf1166ae03bd64b996386a5c"],["D:/Myblog/Blog/Hexo/public/categories/WordPress/index.html","3bd6dfb3e29f2235085521a436287537"],["D:/Myblog/Blog/Hexo/public/categories/index.html","afc46583905dd1a306bf240b4cd4e481"],["D:/Myblog/Blog/Hexo/public/categories/服务器/index.html","634d03ed8d006d55ae23d34d9a4b1b18"],["D:/Myblog/Blog/Hexo/public/css/index.css","ce4a81c0b147d049d5cc2e4ad283340f"],["D:/Myblog/Blog/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Myblog/Blog/Hexo/public/gallery/index.html","837ec7df7340ac83397604e954a671b8"],["D:/Myblog/Blog/Hexo/public/games/index.html","3c58c18172e0b0b9641c21477d2de111"],["D:/Myblog/Blog/Hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/Myblog/Blog/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Myblog/Blog/Hexo/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["D:/Myblog/Blog/Hexo/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/Myblog/Blog/Hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/Myblog/Blog/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Myblog/Blog/Hexo/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/Myblog/Blog/Hexo/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["D:/Myblog/Blog/Hexo/public/index.html","a11569c7979ab69c41784b9a64a61fc0"],["D:/Myblog/Blog/Hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/Myblog/Blog/Hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/Myblog/Blog/Hexo/public/js/click_show_text.js","a3947325db229187173efa20ff3c1ad2"],["D:/Myblog/Blog/Hexo/public/js/main.js","10f97e1001bd4f1f7d2360e8c29d6ab5"],["D:/Myblog/Blog/Hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/Myblog/Blog/Hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/Myblog/Blog/Hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/Myblog/Blog/Hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/Myblog/Blog/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/Myblog/Blog/Hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Myblog/Blog/Hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/Myblog/Blog/Hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/Myblog/Blog/Hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/Myblog/Blog/Hexo/public/link/index.html","7a614668809b5d716ca43dd301ffd0a1"],["D:/Myblog/Blog/Hexo/public/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Myblog/Blog/Hexo/public/love/css/default.css","2fd911f377ecffa78ef688264161a2d2"],["D:/Myblog/Blog/Hexo/public/love/css/default_dev.css","e87501971c944654ca53c4d7a0c41bd0"],["D:/Myblog/Blog/Hexo/public/love/digital-7_mono.ttf","8e22783d707ad140bffe18b2a3812529"],["D:/Myblog/Blog/Hexo/public/love/index.html","b56f0cc31035b349f23209d34013bb00"],["D:/Myblog/Blog/Hexo/public/love/js/functions.js","bf793d486fd4b68e6c74d2663c11cfab"],["D:/Myblog/Blog/Hexo/public/love/js/functions_dev.js","e54c4c3bf2cb0589247b029821f952b4"],["D:/Myblog/Blog/Hexo/public/love/js/garden.js","0bba994a307dd63a7103f2f5e442f2d1"],["D:/Myblog/Blog/Hexo/public/love/js/garden_dev.js","f450b5e2edbd84e8d8243bf39755fa39"],["D:/Myblog/Blog/Hexo/public/love/js/jquery.js","10092eee563dec2dca82b77d2cf5a1ae"],["D:/Myblog/Blog/Hexo/public/love2/index.html","f5d79ee2b00b9b86632b5ac943351911"],["D:/Myblog/Blog/Hexo/public/love2/renxi/default.css","77c6d481093206fa774436af522fd7d1"],["D:/Myblog/Blog/Hexo/public/love2/renxi/functions.js","398486028d4d8fd9d8e0910499a28d17"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-jit.js","35be392b9cd2ad66c63bac412554d874"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["D:/Myblog/Blog/Hexo/public/love2/renxi/love.js","d5f2a8c693744f387064e78275c910f3"],["D:/Myblog/Blog/Hexo/public/message/index.html","2bf7a54ed0a4b8c3e72ffe1a6cff65fd"],["D:/Myblog/Blog/Hexo/public/movies/index.html","58ec6bff87b4ef7d90d6e2d8e7ad26fd"],["D:/Myblog/Blog/Hexo/public/music/index.html","0b336c9215d1378eedeee7c5020b2c0d"],["D:/Myblog/Blog/Hexo/public/page/2/index.html","78f209e730c9fa7a905ea43e802919dc"],["D:/Myblog/Blog/Hexo/public/page/3/index.html","71ac6ba0f257d8d059bbbf55eedf6c7e"],["D:/Myblog/Blog/Hexo/public/page/4/index.html","5d7684ae824fd36e3870b794dc8a343b"],["D:/Myblog/Blog/Hexo/public/school/index.html","c93cdbdc0498fa95cf677e6575bdee5b"],["D:/Myblog/Blog/Hexo/public/tags/API/index.html","6f07a667f01a7c5eff08a1e93e259dcd"],["D:/Myblog/Blog/Hexo/public/tags/blog/index.html","ca828e2f65b229ef7ea3a6facfbaf6c8"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/2/index.html","2f2e31f1c990f912fe92b81e955e8fef"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/3/index.html","1f4ff69aaf1dc32c595e37d41f504e18"],["D:/Myblog/Blog/Hexo/public/tags/centos/index.html","9f50061bf5f36f0995acd50a7b234583"],["D:/Myblog/Blog/Hexo/public/tags/coding/index.html","78d99b4ed6f89c65648ffbfbbf2dae17"],["D:/Myblog/Blog/Hexo/public/tags/huawei/index.html","9e899292fedc55a6675c6bd9c02a72f8"],["D:/Myblog/Blog/Hexo/public/tags/image/index.html","09999c185e20c83a9cc3d4988dd50677"],["D:/Myblog/Blog/Hexo/public/tags/index.html","85e1b6525441aa79e9599836ed44b66d"],["D:/Myblog/Blog/Hexo/public/tags/jsDelivr/index.html","8447490bd09a5e125d79f6207fefda22"],["D:/Myblog/Blog/Hexo/public/tags/life/index.html","9faf75c0b810cd66e6f2b9ca2626073c"],["D:/Myblog/Blog/Hexo/public/tags/markdown/index.html","f76d4118f244482a8f8c53f6e921afd6"],["D:/Myblog/Blog/Hexo/public/tags/picgo/index.html","9952130a311b949186e514c4f83c038a"],["D:/Myblog/Blog/Hexo/public/tags/resource/index.html","b8ef035429c8ac7f07cbe0f54bb37de5"],["D:/Myblog/Blog/Hexo/public/tags/revolvermaps/index.html","4de6c261b2520e77db0c0cf574477867"],["D:/Myblog/Blog/Hexo/public/tags/software/index.html","dcb679f283ca08b21be2ff0d582c4c56"],["D:/Myblog/Blog/Hexo/public/tags/summary/index.html","cc7289370e9bf4bc11fe10d2a26107d2"],["D:/Myblog/Blog/Hexo/public/tags/system/index.html","5d77db2b8930321a0d60f8b59f45d612"],["D:/Myblog/Blog/Hexo/public/tags/tcp/index.html","df56a2b72a57811e85687a941b3e6398"],["D:/Myblog/Blog/Hexo/public/tags/technology/index.html","4450354c9e505d313ff59ce3d0b3820c"],["D:/Myblog/Blog/Hexo/public/tags/valine/index.html","6e2ae572c2b396aef3969dcc277c6a61"],["D:/Myblog/Blog/Hexo/public/tags/web/index.html","466f7a76b05e713519675f0f959ff188"],["D:/Myblog/Blog/Hexo/public/tags/交换机/index.html","392af30e0d24968a987cc2215c2d6008"],["D:/Myblog/Blog/Hexo/public/tags/优化/index.html","1bca2bfff0f1e63831c7fe714c72abee"],["D:/Myblog/Blog/Hexo/public/tags/共享/index.html","5490e6ca46030f7d5358b04c9c512866"],["D:/Myblog/Blog/Hexo/public/tags/又拍云/index.html","ac746a362a3bce14c7977d4b4162180e"],["D:/Myblog/Blog/Hexo/public/tags/反向代理/index.html","227f5c724bed317decfc3ee2ae1a867b"],["D:/Myblog/Blog/Hexo/public/tags/域名/index.html","a044ae3c40b728b9c0fb5cf92b7ab30c"],["D:/Myblog/Blog/Hexo/public/tags/端口/index.html","f85be3f736162f6d14a3aa7dd6510d86"],["D:/Myblog/Blog/Hexo/public/tags/端口转发/index.html","39ab27d4f2428b9cd727db590714a7a7"],["D:/Myblog/Blog/Hexo/public/tags/豆瓣/index.html","3fc3b2f80ef0b86fbbaed58b52d4f77a"],["D:/Myblog/Blog/Hexo/public/tags/负载均衡/index.html","a0448f62a062e8730de8b973a87ac1af"],["D:/Myblog/Blog/Hexo/public/tags/远程/index.html","ee4b733360073a45c6357dac4aa7efb3"],["D:/Myblog/Blog/Hexo/public/tags/阿里云/index.html","9df9558954ffc23fb790ab3937cafd4c"]];
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







