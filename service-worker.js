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

var precacheConfig = [["D:/Myblog/Blog/Hexo/public/2019/07/25/00030/index.html","05e532d7a379200486e7587f2a777320"],["D:/Myblog/Blog/Hexo/public/2019/07/26/00032/index.html","c318a4b9d743564ed37657cf0c0fc261"],["D:/Myblog/Blog/Hexo/public/2019/08/02/00013/index.html","8b2e89c3b48c67033fb57d758920adf6"],["D:/Myblog/Blog/Hexo/public/2019/08/09/00008/index.html","ea332c2535841045e5f5fdc9ea185adf"],["D:/Myblog/Blog/Hexo/public/2019/08/10/00010/index.html","f00c36ee06d8589ce5835a872335df65"],["D:/Myblog/Blog/Hexo/public/2019/08/19/00009/index.html","b93eaeb8a35c49d89b68ce1d68a88f96"],["D:/Myblog/Blog/Hexo/public/2019/08/20/00031/index.html","e06c85f6377118d23814ba7717db3327"],["D:/Myblog/Blog/Hexo/public/2019/08/24/00026/index.html","1bc973082ab6b8a80044b9537caa3083"],["D:/Myblog/Blog/Hexo/public/2019/08/30/00028/index.html","f8c3770e4b20cf8abb6ed492939fc7b3"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00019/index.html","1e33ea730e3f4946c8fc4ade81ede04f"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00020/index.html","9072c3fc32b09269d9493c42178da5e9"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00002/index.html","d55d00bf423b9cfdcb948a851cae27bf"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00003/index.html","9442ede31beacddd505bb705d4033df1"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00004/index.html","608b3750f41caaac0e56599de61bffbe"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00005/index.html","3b92a02a7ead4a4e041c8208530af963"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00007/index.html","5fd0e6970e2971de89f902b654e5856a"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00012/index.html","06bb9005afa04e82d7b4e7a8205fb262"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00014/index.html","60e5ae3d6b7ab801bdc4c390da081550"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00015/index.html","5f03eb8b0c075bd34fd6c4eeec89b42a"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00016/index.html","2812252120f234364840b20e227dd0ec"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00017/index.html","6bb4f86105f4e3a902bf096bef92c19c"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00018/index.html","0a5024edb433b57b42b3f0a85cd79b74"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00021/index.html","0e6c095f1994f60e78d55ad2db394bc6"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00022/index.html","6d63605954abfc6570f401ba64dba651"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00023/index.html","929b2878db04b0600628b561a5305126"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00024/index.html","dad07fd705837af17917cd54dd006132"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00025/index.html","51d1b5b4b2d4ff38e6c59bfa9474cb2a"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00027/index.html","69cf6c685c66b7c74465ca30548acfc6"],["D:/Myblog/Blog/Hexo/public/2019/09/20/00011/index.html","48e194c95ebde560bb6067e2bcb0b9a3"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00001/index.html","e29c74509b643bf8368367e3ca4543bd"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00006/index.html","7904a7928e17480b6e5c5561842e5740"],["D:/Myblog/Blog/Hexo/public/2019/09/24/00029/index.html","6bd942f81d37ecc75514cb0dd4599503"],["D:/Myblog/Blog/Hexo/public/2019/09/25/00033/index.html","9f326a6912239692ec806f37caaa9062"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00034/index.html","11a1159048818602687100c8798f850b"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00035/index.html","b1be05819cec06dfd868cd3911f4d93b"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00036/index.html","cdeb00c5d2058bf7248ed6f9d1fec4a2"],["D:/Myblog/Blog/Hexo/public/2019/09/27/00037/index.html","064bbec8987e1da4672c4022e559a528"],["D:/Myblog/Blog/Hexo/public/2019/09/29/00038/index.html","3355ba127c05eef54166a37ff53456cf"],["D:/Myblog/Blog/Hexo/public/2019/09/29/00039/index.html","a30b3333502eb7c81140c79b2e56264a"],["D:/Myblog/Blog/Hexo/public/404.html","270120cffe457f7a46daca8332c6e5d5"],["D:/Myblog/Blog/Hexo/public/about/assets/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/Myblog/Blog/Hexo/public/about/assets/css/index.css","5fd1ff220d7990567e2302956fadd913"],["D:/Myblog/Blog/Hexo/public/about/assets/css/typo.css","0b5d6624fa8fefebea67a9f28920a210"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Myblog/Blog/Hexo/public/about/assets/images/avatar.jpg","9a3b013f512ea4dfdd9f35067a0bed4b"],["D:/Myblog/Blog/Hexo/public/about/assets/images/background.png","fac9d864f995beff8c55b403ba7c2bfb"],["D:/Myblog/Blog/Hexo/public/about/assets/images/ip.png","d5bfb3f23aedf8d7ea629806a7f3fa9e"],["D:/Myblog/Blog/Hexo/public/about/assets/images/pc.png","f249aa2b72abc9b3c25efdb4d812258f"],["D:/Myblog/Blog/Hexo/public/about/assets/js/CanvasNest.js","011972b152a314428c4ebf0110285f3a"],["D:/Myblog/Blog/Hexo/public/about/assets/js/index.js","14cc657b8cedad4d4d65d694f6737289"],["D:/Myblog/Blog/Hexo/public/about/index.html","bf9123b24f68c97e471a8f833078dc46"],["D:/Myblog/Blog/Hexo/public/archives/2019/07/index.html","77262ce88c823b09389b4994800270a0"],["D:/Myblog/Blog/Hexo/public/archives/2019/08/index.html","eb29126f8375453b1454d9177dc10c8b"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/index.html","408ea278b5c98b935fbbb70677c3031f"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/2/index.html","aac7acce7b598f67d9883d56d2197002"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/3/index.html","80ecd4777839d3e7236091eb245a25a6"],["D:/Myblog/Blog/Hexo/public/archives/2019/index.html","cca75d6a53ec9baed3922a6c30bdb0da"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/2/index.html","60f95882e0d9029a2fcd72606b50eff2"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/3/index.html","52d7822bc41c85b0cca68879067fc0c7"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/4/index.html","6e2af08ab55aa499306cfa8f77ac04a6"],["D:/Myblog/Blog/Hexo/public/archives/index.html","e15406ded7b7db3fc58e6b11ab9aac4f"],["D:/Myblog/Blog/Hexo/public/archives/page/2/index.html","f974a050886c33dc55349d8e1f14e509"],["D:/Myblog/Blog/Hexo/public/archives/page/3/index.html","f8b35f8bb2b54bc403d61135d369b19d"],["D:/Myblog/Blog/Hexo/public/archives/page/4/index.html","48c28a6c30703b1d576e0cf75f69c0d8"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.js","c5212e1f9ff5012aeb8377c347143213"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.min.js","3d0f4dccf8b2078c95f98a635fdbf26c"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.js","f4295eda45c30851626faa504c148548"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.min.js","7c9e4cf319574c60f839ae0c06dddc81"],["D:/Myblog/Blog/Hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Myblog/Blog/Hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/Myblog/Blog/Hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["D:/Myblog/Blog/Hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Myblog/Blog/Hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/Myblog/Blog/Hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Myblog/Blog/Hexo/public/books/index.html","81b6b53fa36b77931dec3a6f267374c8"],["D:/Myblog/Blog/Hexo/public/categories/CDN/index.html","48abfba6637011e7feefc1b84768ee91"],["D:/Myblog/Blog/Hexo/public/categories/Diary/index.html","0534bf05c9f59023a03586e13a354a78"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/index.html","dd8a08c4b915073fe7b9932a4feea118"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/page/2/index.html","82c92f394559782b1c6fb24b97854db4"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/index.html","0e58b7c03a51b4adf6ff3ef3f0492e12"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/page/2/index.html","3f2f6d78bb2abb5b8c260de3de553f3a"],["D:/Myblog/Blog/Hexo/public/categories/Hexo/index.html","4920fc0502474f11dabe9101c353adb2"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Nginx/index.html","1982c769bbeb4e9e5d8c2d00f9afbea2"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Zabbix/index.html","ea120c3c8e2529a3326534f41617ba80"],["D:/Myblog/Blog/Hexo/public/categories/Linux/index.html","6c118b2243684f2d7bd6ee7e6f71be4a"],["D:/Myblog/Blog/Hexo/public/categories/Network/index.html","a9f50847c0d8179033d4dcf222609d97"],["D:/Myblog/Blog/Hexo/public/categories/Nginx/index.html","6d59f65a1a34f04cfdcf66c0159f9a66"],["D:/Myblog/Blog/Hexo/public/categories/Problem/index.html","4b44a7ff405adec778e739bd4bce0f37"],["D:/Myblog/Blog/Hexo/public/categories/Summary/index.html","5c68beb4be52834c88ea444864d951bf"],["D:/Myblog/Blog/Hexo/public/categories/Window/index.html","1a846b39404617db4bd6f7fe10ee38da"],["D:/Myblog/Blog/Hexo/public/categories/WordPress/index.html","771b684e16c971bfefc48913cb82c899"],["D:/Myblog/Blog/Hexo/public/categories/index.html","bab72241e7c9ff5a0ca51cfadb2b8c88"],["D:/Myblog/Blog/Hexo/public/categories/服务器/index.html","c4684cb195b8b010e9bf50a7ebc723ec"],["D:/Myblog/Blog/Hexo/public/css/index.css","bc3b5ee5a336e5e7c384186d35ce6747"],["D:/Myblog/Blog/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Myblog/Blog/Hexo/public/gallery/index.html","912b8ede635041c3d4ea601a7a76f992"],["D:/Myblog/Blog/Hexo/public/games/index.html","ec9de7ec895bbd48dacd1ba8fc134489"],["D:/Myblog/Blog/Hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/Myblog/Blog/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Myblog/Blog/Hexo/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["D:/Myblog/Blog/Hexo/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/Myblog/Blog/Hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/Myblog/Blog/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Myblog/Blog/Hexo/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/Myblog/Blog/Hexo/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["D:/Myblog/Blog/Hexo/public/index.html","73c98730916cc7a7308ae9d14558d982"],["D:/Myblog/Blog/Hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/Myblog/Blog/Hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/Myblog/Blog/Hexo/public/js/click_show_text.js","a3947325db229187173efa20ff3c1ad2"],["D:/Myblog/Blog/Hexo/public/js/main.js","10f97e1001bd4f1f7d2360e8c29d6ab5"],["D:/Myblog/Blog/Hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/Myblog/Blog/Hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/Myblog/Blog/Hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/Myblog/Blog/Hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/Myblog/Blog/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/Myblog/Blog/Hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Myblog/Blog/Hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/Myblog/Blog/Hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/Myblog/Blog/Hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/Myblog/Blog/Hexo/public/link/index.html","bb7ef666c99ee393402e8870905ea8e5"],["D:/Myblog/Blog/Hexo/public/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Myblog/Blog/Hexo/public/love/css/default.css","2fd911f377ecffa78ef688264161a2d2"],["D:/Myblog/Blog/Hexo/public/love/css/default_dev.css","e87501971c944654ca53c4d7a0c41bd0"],["D:/Myblog/Blog/Hexo/public/love/digital-7_mono.ttf","8e22783d707ad140bffe18b2a3812529"],["D:/Myblog/Blog/Hexo/public/love/index.html","b56f0cc31035b349f23209d34013bb00"],["D:/Myblog/Blog/Hexo/public/love/js/functions.js","bf793d486fd4b68e6c74d2663c11cfab"],["D:/Myblog/Blog/Hexo/public/love/js/functions_dev.js","e54c4c3bf2cb0589247b029821f952b4"],["D:/Myblog/Blog/Hexo/public/love/js/garden.js","0bba994a307dd63a7103f2f5e442f2d1"],["D:/Myblog/Blog/Hexo/public/love/js/garden_dev.js","f450b5e2edbd84e8d8243bf39755fa39"],["D:/Myblog/Blog/Hexo/public/love/js/jquery.js","10092eee563dec2dca82b77d2cf5a1ae"],["D:/Myblog/Blog/Hexo/public/love2/index.html","f5d79ee2b00b9b86632b5ac943351911"],["D:/Myblog/Blog/Hexo/public/love2/renxi/default.css","77c6d481093206fa774436af522fd7d1"],["D:/Myblog/Blog/Hexo/public/love2/renxi/functions.js","398486028d4d8fd9d8e0910499a28d17"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-jit.js","35be392b9cd2ad66c63bac412554d874"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["D:/Myblog/Blog/Hexo/public/love2/renxi/love.js","d5f2a8c693744f387064e78275c910f3"],["D:/Myblog/Blog/Hexo/public/message/index.html","df80ddf4f013adc6531c3801f0d8c44a"],["D:/Myblog/Blog/Hexo/public/movies/index.html","d68a776b81a112033019286eff28fa1d"],["D:/Myblog/Blog/Hexo/public/music/index.html","2de20700ae3c5979a580ff506920a680"],["D:/Myblog/Blog/Hexo/public/page/2/index.html","4d23bab8b9cc0f355bca8874b946993d"],["D:/Myblog/Blog/Hexo/public/page/3/index.html","c1cfb5fbda94292443a7e4459bd20c80"],["D:/Myblog/Blog/Hexo/public/page/4/index.html","43ee27cf71d9b6726864ce424dd884c1"],["D:/Myblog/Blog/Hexo/public/school/index.html","c93cdbdc0498fa95cf677e6575bdee5b"],["D:/Myblog/Blog/Hexo/public/tags/API/index.html","ce2b96220ff1e73d2f0fcee301caf05e"],["D:/Myblog/Blog/Hexo/public/tags/blog/index.html","0c1896d5b873df81f074083f809e3e3d"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/2/index.html","b8dc8905e377970500dcffe6b781f732"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/3/index.html","c7531d30d61c6a4ed1b5dc22f1117ea8"],["D:/Myblog/Blog/Hexo/public/tags/centos/index.html","32f52f1e9cdf0d86011d18dc4f3e9527"],["D:/Myblog/Blog/Hexo/public/tags/coding/index.html","ca15530a151e3bacc55196ff600e6bb1"],["D:/Myblog/Blog/Hexo/public/tags/huawei/index.html","60b726b0aa4ef86865cd91b53f49c7c2"],["D:/Myblog/Blog/Hexo/public/tags/image/index.html","2c5b6b3f9ded4080d4487fe1a04b1ddd"],["D:/Myblog/Blog/Hexo/public/tags/index.html","aa91b1d6d46436e4222740080ea7eefa"],["D:/Myblog/Blog/Hexo/public/tags/jsDelivr/index.html","05d1c7fbaba7f7b4106a3ba26e7aba27"],["D:/Myblog/Blog/Hexo/public/tags/life/index.html","1177057c42a88c034e33da996cd5fe12"],["D:/Myblog/Blog/Hexo/public/tags/markdown/index.html","f75d60ae328766d282623e5187ed2e69"],["D:/Myblog/Blog/Hexo/public/tags/picgo/index.html","c77b88d3208f1205de57ea988029ec92"],["D:/Myblog/Blog/Hexo/public/tags/resource/index.html","a0e435093716eb86939ef1ad4ea533c8"],["D:/Myblog/Blog/Hexo/public/tags/revolvermaps/index.html","3189a5db793294cedbd03f5ec0f5f391"],["D:/Myblog/Blog/Hexo/public/tags/software/index.html","49ed02a3be3c0bb98541d112ae39b986"],["D:/Myblog/Blog/Hexo/public/tags/summary/index.html","a547e2b8b09f4875f98a7cad85626158"],["D:/Myblog/Blog/Hexo/public/tags/system/index.html","a00ae98f196438f86df0e959e955f78c"],["D:/Myblog/Blog/Hexo/public/tags/tcp/index.html","ce81809c9ca175388e6f136420446a0f"],["D:/Myblog/Blog/Hexo/public/tags/technology/index.html","8d6bb4117d87bcbc35b0dde97fa723c1"],["D:/Myblog/Blog/Hexo/public/tags/valine/index.html","e8d9601085835b89af8cb2ff9bf38c42"],["D:/Myblog/Blog/Hexo/public/tags/web/index.html","272b9179ea8f0bdfa155a05b4c14b1af"],["D:/Myblog/Blog/Hexo/public/tags/交换机/index.html","536e355ef04bf439b8183a7f05197e99"],["D:/Myblog/Blog/Hexo/public/tags/优化/index.html","6101c5756ae5de5847b69fdf066552a6"],["D:/Myblog/Blog/Hexo/public/tags/共享/index.html","9009a217d00fd3a33541bb4b61e8a984"],["D:/Myblog/Blog/Hexo/public/tags/又拍云/index.html","26e5efc8fbb8420989746a041f07434b"],["D:/Myblog/Blog/Hexo/public/tags/反向代理/index.html","dd2aeef992329aecefbb230809bda85b"],["D:/Myblog/Blog/Hexo/public/tags/域名/index.html","5feb6fdefd6815ee604defaa3e4782c2"],["D:/Myblog/Blog/Hexo/public/tags/端口/index.html","78b852ca72a766fffb77206ce6dfcc15"],["D:/Myblog/Blog/Hexo/public/tags/端口转发/index.html","24297f56cc2f0d6a4f1975753cc5df4e"],["D:/Myblog/Blog/Hexo/public/tags/豆瓣/index.html","b995399d28abfa002c9a78e2fee170b0"],["D:/Myblog/Blog/Hexo/public/tags/负载均衡/index.html","6a7e898aa56128f98c9b6d89a67cfecb"],["D:/Myblog/Blog/Hexo/public/tags/远程/index.html","c8686d5bc5ec82d738ada7d59b351e92"],["D:/Myblog/Blog/Hexo/public/tags/阿里云/index.html","52beae0ab23e3e8653207c3e9cb6690c"]];
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







