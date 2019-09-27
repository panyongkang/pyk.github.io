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

var precacheConfig = [["D:/Myblog/Blog/Hexo/public/2018/12/29/Centos7系统安装zabbix_agentd进行监控/index.html","e062492601d0109c74e0993cfcf568c5"],["D:/Myblog/Blog/Hexo/public/2019/01/02/Linux之常用系统防火墙相关命令总结/index.html","b3db51d432355be291cad8570f792ca7"],["D:/Myblog/Blog/Hexo/public/2019/06/27/Linux之SUSE系统SAP-HANA经常系统内存不足使得SAP应用不能使用解决方案/index.html","36a69941098dbf5c2e08a9740a90f3c4"],["D:/Myblog/Blog/Hexo/public/2019/07/25/00030/index.html","f0a770db092cbf0f9b809906e370c5aa"],["D:/Myblog/Blog/Hexo/public/2019/07/25/80端口和8080端口的区别以及详情/index.html","d0f5d114d23bd1c75371fe3dc44e1819"],["D:/Myblog/Blog/Hexo/public/2019/07/25/A记录和CNAME记录的区别及介绍/index.html","f7a4b731f435f900b9ffdf8e78e50ecc"],["D:/Myblog/Blog/Hexo/public/2019/07/25/Linux下Nginx和Tomcat常用命令总结/index.html","6c964eaef28a9e2075d22fb22250d4dd"],["D:/Myblog/Blog/Hexo/public/2019/07/26/00032/index.html","700aa4c6f79a2f38fc0c6d1cad0a8b0a"],["D:/Myblog/Blog/Hexo/public/2019/07/26/Centos7搭建企业级Zabbix监控(yum安装)/index.html","4f5c730b02442934749a374a89b74c36"],["D:/Myblog/Blog/Hexo/public/2019/07/26/Linux工作需求之Shell脚本定时清理服务器的Cache/index.html","e3d48e473d3ba76f88a49d5955551c48"],["D:/Myblog/Blog/Hexo/public/2019/08/02/00013/index.html","fd22d99befc2290119c8e8efec5a4521"],["D:/Myblog/Blog/Hexo/public/2019/08/02/WordPress非常实用的15个配置技巧/index.html","4ecf2d530ac2ff911511f2e561f7b20e"],["D:/Myblog/Blog/Hexo/public/2019/08/09/00008/index.html","f0e79a69378072049ae72aa899982a80"],["D:/Myblog/Blog/Hexo/public/2019/08/09/Linux之Centos安装Nginx做TCP代理(端口转发)/index.html","63185632bc40c7ca5a2f974a5983aaf3"],["D:/Myblog/Blog/Hexo/public/2019/08/10/00010/index.html","29fa862e9448328081d9d296a45e70ae"],["D:/Myblog/Blog/Hexo/public/2019/08/10/Nginx反向代理之了解Tomcat，Nginx，Apache的区别/index.html","14ea71090d11bca3f097f6c1fe5ce46d"],["D:/Myblog/Blog/Hexo/public/2019/08/11/Nginx的正向代理和反向代理形象理解/index.html","a6ddee9a9b5737548b7819a752b9a76e"],["D:/Myblog/Blog/Hexo/public/2019/08/15/Linux之Centos重置root密码/index.html","4a71d06fd477eafa84ae901c89d0877b"],["D:/Myblog/Blog/Hexo/public/2019/08/15/在Window服务器下建立定时任务执行bat脚本定时重启/index.html","1f137d80e80f3ff29127032afc19679d"],["D:/Myblog/Blog/Hexo/public/2019/08/17/Linux下部署tomcat发布Web项目/index.html","28c399381761fb4fdcab608acf31957a"],["D:/Myblog/Blog/Hexo/public/2019/08/19/00009/index.html","9615410434951e757480c90c89de62df"],["D:/Myblog/Blog/Hexo/public/2019/08/19/Linux之Centos下配置Nginx反向代理负载均衡集群/index.html","819e95fccd0fd7c263e4551f9f615d11"],["D:/Myblog/Blog/Hexo/public/2019/08/20/00031/index.html","ca161586de686bf16ea4b9298c982cb3"],["D:/Myblog/Blog/Hexo/public/2019/08/20/Linux之镜像下载/index.html","1bbbd7487f517ee8acc461b9672eb521"],["D:/Myblog/Blog/Hexo/public/2019/08/24/00026/index.html","be25ba4554a90974c644730e69e852af"],["D:/Myblog/Blog/Hexo/public/2019/08/24/下载纯净系统并且制作启动盘快速重装系统（家庭备用）/index.html","222bf49b5e7c7e9f017405018f1703ae"],["D:/Myblog/Blog/Hexo/public/2019/08/25/Nginx+Tomcat+Redis （负载均衡+session共享) 一步一步实践/index.html","8d4ed6479c2a019fb745ced80c550be1"],["D:/Myblog/Blog/Hexo/public/2019/08/30/00028/index.html","705c970e259ea28795a61e93ec8309fe"],["D:/Myblog/Blog/Hexo/public/2019/09/02/Linux之Vim编辑常用命令总结/index.html","38fa0f4f023621aadbb0dcc5e8af1ec6"],["D:/Myblog/Blog/Hexo/public/2019/09/02/Linux服务器工作常用命令总结/index.html","1b7f5a6b5866ba5d1294dda67c18bb2d"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00019/index.html","f88d278ddc50709fb2698eb9dc1a39aa"],["D:/Myblog/Blog/Hexo/public/2019/09/03/00020/index.html","9727d18d129c7bb784233dfb074e1265"],["D:/Myblog/Blog/Hexo/public/2019/09/03/个人建站工具Wordpress学习/index.html","2bb11efda854409404757ec028e927aa"],["D:/Myblog/Blog/Hexo/public/2019/09/03/个人快速搭建Wordpress建站教程(博客用途)/index.html","d8a05b046e0ac874b8b1c8bee0c3e8a2"],["D:/Myblog/Blog/Hexo/public/2019/09/06/hello-world/index.html","31b00533f88bba081834a6e6698f241c"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00002/index.html","1d685a847824ada55a54365ec79c5d4a"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00003/index.html","2e4ad2dcfd87e1f8a5de50068cfd7d40"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00004/index.html","4124ca7252a75e50fd62e66e0b124bd2"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00005/index.html","00fd28dbc70b138e9a360cf51a4a47be"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00007/index.html","eaa203ddb03e76b2c0075fec4c917e7c"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00012/index.html","084890306d9e90473c9cf90a1afd0007"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00014/index.html","3693fe54d6d7deec46e5d73ff76186eb"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00015/index.html","0706f857739cee13fce12bb2de952bec"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00016/index.html","581ec3021d3800df1668eb79fe448564"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00017/index.html","022e7e16c4a945c01436684b1ae92e1a"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00018/index.html","408f01abc3bf8378705a9a62774e9ef9"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00021/index.html","5f8a5d45e3dd21dacc92ebd28dc5bf8e"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00022/index.html","83e608d9816ec0e88318f149123ed7ea"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00023/index.html","b1b8663d118217053fefc0fafdb969ba"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00024/index.html","e7358cd4364b0b932f97dbf8bd685677"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00025/index.html","767e82c6a68a7bb47e5c7ffe67dee6a2"],["D:/Myblog/Blog/Hexo/public/2019/09/08/00027/index.html","1f1457f13f41b78e0b4f77fcdb115100"],["D:/Myblog/Blog/Hexo/public/2019/09/08/Github pagers搭建的博客使用自定义域名以及购买域名等设置/index.html","aa68d5d63fbb83355790967f10aed681"],["D:/Myblog/Blog/Hexo/public/2019/09/08/Hexo之如何添加自定义界面/index.html","e3626a7ae082a8a5db3ff716c8b74ab9"],["D:/Myblog/Blog/Hexo/public/2019/09/08/Hexo博客模板/index.html","69c0f414af85049b83f6c6bc1d2764d3"],["D:/Myblog/Blog/Hexo/public/2019/09/08/Hexo如何添加视频/index.html","12d2f8063ef4e7bc1ab49e7aee1254c0"],["D:/Myblog/Blog/Hexo/public/2019/09/08/Hexo添加优秀的评论系统Valine/index.html","c9b79a8ed0c29c6f5460b3de2fbb2022"],["D:/Myblog/Blog/Hexo/public/2019/09/08/Hexo添加歌单(音乐)页面/index.html","33ef9a08a965e3a46a5c828e3e800f6b"],["D:/Myblog/Blog/Hexo/public/2019/09/08/Hexo添加炫酷的地球模型/index.html","4081b9f962ecf887288067f9561090f7"],["D:/Myblog/Blog/Hexo/public/2019/09/08/Windows下使用Github Pages+Hexo搭建博客(详细快捷)/index.html","b85989829e72d180d9cb8f69b7142922"],["D:/Myblog/Blog/Hexo/public/2019/09/08/关于博客的那些事/index.html","c3e45e6f2da068b17ef7b3bc1e119901"],["D:/Myblog/Blog/Hexo/public/2019/09/08/华为交换机划分Vlan和添加Vlanif以及设置端口的方式/index.html","f594cf810672d83ef31b63a42fae73c4"],["D:/Myblog/Blog/Hexo/public/2019/09/08/博客随想/index.html","93507ebbafabb0796020b64b68cd2f0f"],["D:/Myblog/Blog/Hexo/public/2019/09/08/域名的小知识/index.html","c3bcd2254431c4641c12f6522bb16485"],["D:/Myblog/Blog/Hexo/public/2019/09/08/好用的图床工具推荐-PicGo+GitHub图床，让Markdown飞/index.html","4bf338aed246d697473fc650ddde8836"],["D:/Myblog/Blog/Hexo/public/2019/09/08/如何用手机控制电脑/index.html","9b343b08b49ed70965cdb59f974567af"],["D:/Myblog/Blog/Hexo/public/2019/09/08/电脑必装的三个良心软件/index.html","3c4aef8712e80f071131ad35b913d3bc"],["D:/Myblog/Blog/Hexo/public/2019/09/08/电脑越来越卡怎么办-实用的电脑优化方案/index.html","42647925c39c89d9eeb82473c20e90aa"],["D:/Myblog/Blog/Hexo/public/2019/09/08/超实用的19个电脑快捷键/index.html","af7f9c14753b3a9e5d14a68ff572e770"],["D:/Myblog/Blog/Hexo/public/2019/09/08/问题解决-Win10因为你组织的安全策略阻止未经身份验证的来宾访问/index.html","6f8ecc68e24fc7b899430ad89bbc148e"],["D:/Myblog/Blog/Hexo/public/2019/09/20/00011/index.html","3da223a0332aa2d271c915ef5a5bd90d"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00001/index.html","e8adf5819d76c36b632ebbc6a2f896a9"],["D:/Myblog/Blog/Hexo/public/2019/09/22/00006/index.html","f5ece093981073ab3cf1130bf5b8584d"],["D:/Myblog/Blog/Hexo/public/2019/09/24/00029/index.html","96f93ca01b6e95d08093de3f897d0bec"],["D:/Myblog/Blog/Hexo/public/2019/09/25/00033/index.html","7fe27c60fc8c61c86739942ea760f0fc"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00034/index.html","8fdd3f1afa7c7bc5a40c401ad7593c6b"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00035/index.html","acdaa164c8009a750c7e6220c428ef56"],["D:/Myblog/Blog/Hexo/public/2019/09/26/00036/index.html","579984d03e66a3404ed5992504d8f824"],["D:/Myblog/Blog/Hexo/public/404.html","f2a72bf8e10210402c1b209402c22226"],["D:/Myblog/Blog/Hexo/public/about/assets/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/Myblog/Blog/Hexo/public/about/assets/css/index.css","5fd1ff220d7990567e2302956fadd913"],["D:/Myblog/Blog/Hexo/public/about/assets/css/typo.css","0b5d6624fa8fefebea67a9f28920a210"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/Myblog/Blog/Hexo/public/about/assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Myblog/Blog/Hexo/public/about/assets/images/avatar.jpg","9a3b013f512ea4dfdd9f35067a0bed4b"],["D:/Myblog/Blog/Hexo/public/about/assets/images/background.png","fac9d864f995beff8c55b403ba7c2bfb"],["D:/Myblog/Blog/Hexo/public/about/assets/images/ip.png","d5bfb3f23aedf8d7ea629806a7f3fa9e"],["D:/Myblog/Blog/Hexo/public/about/assets/images/pc.png","f249aa2b72abc9b3c25efdb4d812258f"],["D:/Myblog/Blog/Hexo/public/about/assets/js/CanvasNest.js","011972b152a314428c4ebf0110285f3a"],["D:/Myblog/Blog/Hexo/public/about/assets/js/index.js","afdd8a6f3c37d596c568849350535500"],["D:/Myblog/Blog/Hexo/public/about/index.html","1a76047f4a92da4e9282b237344261a2"],["D:/Myblog/Blog/Hexo/public/archives/2018/12/index.html","3f7db0822409ff1a4c160db1f0d2bf92"],["D:/Myblog/Blog/Hexo/public/archives/2018/index.html","7ea149644cf6bef3a1e24031710aad29"],["D:/Myblog/Blog/Hexo/public/archives/2019/01/index.html","d90189d53256751c641285857495c151"],["D:/Myblog/Blog/Hexo/public/archives/2019/06/index.html","bd95b61312f54c2680085b3604a2e942"],["D:/Myblog/Blog/Hexo/public/archives/2019/07/index.html","689f610d5c7c558e44c40eb36bd41d91"],["D:/Myblog/Blog/Hexo/public/archives/2019/08/index.html","7a5a2aa7996ebd5c43af48e21549c572"],["D:/Myblog/Blog/Hexo/public/archives/2019/08/page/2/index.html","50f821297c0522f6a9d6e4f3461b6154"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/index.html","5bf074527989ebc2ba704913e5f97167"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/2/index.html","ba650d03eadaf18f62646294e33f150c"],["D:/Myblog/Blog/Hexo/public/archives/2019/09/page/3/index.html","32c2868ef4044561766751651f459eb6"],["D:/Myblog/Blog/Hexo/public/archives/2019/index.html","5bd7ffa16f90b08e2d1c065f164f2782"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/2/index.html","92d585050ba4125bbc569bbc2a598c18"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/3/index.html","303f66e6e06e67699ca8f5d61a804c85"],["D:/Myblog/Blog/Hexo/public/archives/2019/page/4/index.html","b98b6b871f2eb6c3011871524b1ee7b7"],["D:/Myblog/Blog/Hexo/public/archives/index.html","21a0170465b1983deb6b85a595f5a8c3"],["D:/Myblog/Blog/Hexo/public/archives/page/2/index.html","04f84489db99927629f437bf7100a2ce"],["D:/Myblog/Blog/Hexo/public/archives/page/3/index.html","5d294e4300086af7351106a8ac4aa094"],["D:/Myblog/Blog/Hexo/public/archives/page/4/index.html","8b27eca9de1b4bdc8357d9c95b2e6973"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.js","61caddb3e91165f4a39231b58959ea65"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearch.min.js","d9ef9ebf6b31419239cff8047b30e15e"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.js","0fea8fbf28c472c562fcaed32fbe94e7"],["D:/Myblog/Blog/Hexo/public/assets/algolia/algoliasearchLite.min.js","26355d018bb30d571119f4722036c0b6"],["D:/Myblog/Blog/Hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Myblog/Blog/Hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/Myblog/Blog/Hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Myblog/Blog/Hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/Myblog/Blog/Hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Myblog/Blog/Hexo/public/categories/CDN/index.html","6b39a82d3c41fb2eecbea0abf8f3a01d"],["D:/Myblog/Blog/Hexo/public/categories/Diary/index.html","3e0f6484f8968d72c59feae69fd4f92d"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/Hexo/index.html","c50b43791f2b488afc8eebcf23c6cea7"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/index.html","dad19fe578d5a1071f2632d24b33ed99"],["D:/Myblog/Blog/Hexo/public/categories/GitHub/page/2/index.html","7bd00c6d4f112ebab64696346bf3dc58"],["D:/Myblog/Blog/Hexo/public/categories/Hexo/index.html","e4b943ef4e3808be9bfe7992babe21b6"],["D:/Myblog/Blog/Hexo/public/categories/Knowledge/Network/index.html","179149a1df913ab32ec3edb19e81deb3"],["D:/Myblog/Blog/Hexo/public/categories/Knowledge/index.html","270b20961e4d0870dee61980e7f684f8"],["D:/Myblog/Blog/Hexo/public/categories/Knownledge/Network/index.html","4235ae58dd7aa85f95aebc224def8ab8"],["D:/Myblog/Blog/Hexo/public/categories/Knownledge/index.html","5d6ba1c8c6862951b29ac1c751fb3b8b"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Nginx/Tomcat/Redis/index.html","b3717d48dbf071f29e3b4ca694e94763"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Nginx/Tomcat/index.html","3e6b4edb0d56835f06389d76ac37972e"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Nginx/index.html","4d402e788b9390bfa0134c694a1a9111"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Shell/index.html","9632698ae4ff020f478049672c0e7a62"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Tomcat/Nginx/index.html","00d1cbffff631da8a20f79fc3abeee43"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Tomcat/index.html","c97a455c627c48c7daf48967edd07aba"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Work/index.html","59480723b80d9520207cd44eeebc0395"],["D:/Myblog/Blog/Hexo/public/categories/Linux/Zabbix/index.html","9ef8d36cd8c3966f857a5a3437137245"],["D:/Myblog/Blog/Hexo/public/categories/Linux/index.html","d260e438ed0e29836ecefdb0bf35872a"],["D:/Myblog/Blog/Hexo/public/categories/Linux/page/2/index.html","c0b1f3a62cdf988d1e07382432bea58a"],["D:/Myblog/Blog/Hexo/public/categories/Network/Knowledge/index.html","741ab4d0f4ba1e39be4c5d68683294da"],["D:/Myblog/Blog/Hexo/public/categories/Network/index.html","a5739971b901a3292230f6c1a843303e"],["D:/Myblog/Blog/Hexo/public/categories/Nginx/Linux/index.html","b38215dfe401e5c6a5cd117e401cdc06"],["D:/Myblog/Blog/Hexo/public/categories/Nginx/index.html","21b0262a0c0375dfc5bffdb5d4b1c72b"],["D:/Myblog/Blog/Hexo/public/categories/Problem/index.html","f2f4c3f20d84aee1b004a3d342471846"],["D:/Myblog/Blog/Hexo/public/categories/Summary/index.html","f749b2e36d77bb4ef2c7a49c05cbe007"],["D:/Myblog/Blog/Hexo/public/categories/Tomcat/Nginx/Linux/index.html","6e9b4a14f959956c87484a68339989b8"],["D:/Myblog/Blog/Hexo/public/categories/Tomcat/Nginx/index.html","10e652b85655bcf4b6abfb608123bb49"],["D:/Myblog/Blog/Hexo/public/categories/Tomcat/index.html","5dc04d3e89061e3de110aa1ffb991795"],["D:/Myblog/Blog/Hexo/public/categories/Window/Shell/index.html","da7aeefc3592b30c55f65d58178e2b3c"],["D:/Myblog/Blog/Hexo/public/categories/Window/index.html","131cdd86f246e023be08018c38bb2c80"],["D:/Myblog/Blog/Hexo/public/categories/WordPress/index.html","30b280ad9b277a0cbf98988045b80aa8"],["D:/Myblog/Blog/Hexo/public/categories/Work/Linux/SAP/index.html","8ee4841684628af282c83cdd3739d63b"],["D:/Myblog/Blog/Hexo/public/categories/Work/Linux/index.html","80234a6c546f86675cb7486710fb211a"],["D:/Myblog/Blog/Hexo/public/categories/Work/index.html","7a7c82339b8a1df4f3420e48b8d5bb99"],["D:/Myblog/Blog/Hexo/public/categories/Zabbix/Linux/index.html","b7644ea3bf09e89e5fc38116e7f23a73"],["D:/Myblog/Blog/Hexo/public/categories/Zabbix/index.html","deda0c69fb02c12ffe266a02011cf91e"],["D:/Myblog/Blog/Hexo/public/categories/index.html","44dfe74901b5b832493cd136a3ee3161"],["D:/Myblog/Blog/Hexo/public/categories/kownldge/index.html","b8449a6adc814a3848312604ae6741d8"],["D:/Myblog/Blog/Hexo/public/categories/kownledge/Tomcat/Nginx/Apache/index.html","4d4dd31afdd424e5e0b86e7ba8774150"],["D:/Myblog/Blog/Hexo/public/categories/kownledge/Tomcat/Nginx/index.html","75057a15c1f73764d841e87897c8f8cc"],["D:/Myblog/Blog/Hexo/public/categories/kownledge/Tomcat/index.html","8db3d45ab87b6fa96b1a1df316d29857"],["D:/Myblog/Blog/Hexo/public/categories/kownledge/Window/index.html","a4be485ba21e2624791ce7ad3b454df4"],["D:/Myblog/Blog/Hexo/public/categories/kownledge/index.html","e3a797db05ef486bc10b029c78b9f63b"],["D:/Myblog/Blog/Hexo/public/css/index.css","b8f11a74ff612ce6b3180c8b49bd29b5"],["D:/Myblog/Blog/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Myblog/Blog/Hexo/public/gallery/index.html","9b18cd346d289f5559ac216cd5030058"],["D:/Myblog/Blog/Hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["D:/Myblog/Blog/Hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/Myblog/Blog/Hexo/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["D:/Myblog/Blog/Hexo/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["D:/Myblog/Blog/Hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/Myblog/Blog/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Myblog/Blog/Hexo/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["D:/Myblog/Blog/Hexo/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["D:/Myblog/Blog/Hexo/public/index.html","820902d8e69a934a9e758a76d4bc9845"],["D:/Myblog/Blog/Hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["D:/Myblog/Blog/Hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["D:/Myblog/Blog/Hexo/public/js/click_show_text.js","a3947325db229187173efa20ff3c1ad2"],["D:/Myblog/Blog/Hexo/public/js/main.js","10f97e1001bd4f1f7d2360e8c29d6ab5"],["D:/Myblog/Blog/Hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["D:/Myblog/Blog/Hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["D:/Myblog/Blog/Hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["D:/Myblog/Blog/Hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["D:/Myblog/Blog/Hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["D:/Myblog/Blog/Hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["D:/Myblog/Blog/Hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Myblog/Blog/Hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Myblog/Blog/Hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["D:/Myblog/Blog/Hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["D:/Myblog/Blog/Hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["D:/Myblog/Blog/Hexo/public/link/index.html","87984f99dbcda51f8bb906c6ce29eb68"],["D:/Myblog/Blog/Hexo/public/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Myblog/Blog/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Myblog/Blog/Hexo/public/love/css/default.css","2fd911f377ecffa78ef688264161a2d2"],["D:/Myblog/Blog/Hexo/public/love/css/default_dev.css","e87501971c944654ca53c4d7a0c41bd0"],["D:/Myblog/Blog/Hexo/public/love/digital-7_mono.ttf","8e22783d707ad140bffe18b2a3812529"],["D:/Myblog/Blog/Hexo/public/love/index.html","f7abc51f59d8b9a652819f1367818763"],["D:/Myblog/Blog/Hexo/public/love/js/functions.js","bf793d486fd4b68e6c74d2663c11cfab"],["D:/Myblog/Blog/Hexo/public/love/js/functions_dev.js","e54c4c3bf2cb0589247b029821f952b4"],["D:/Myblog/Blog/Hexo/public/love/js/garden.js","0bba994a307dd63a7103f2f5e442f2d1"],["D:/Myblog/Blog/Hexo/public/love/js/garden_dev.js","ef1893ef1c66cb75368f848019056f81"],["D:/Myblog/Blog/Hexo/public/love/js/jquery.js","10092eee563dec2dca82b77d2cf5a1ae"],["D:/Myblog/Blog/Hexo/public/love2/index.html","9ac020214f6d96cfcaecf5bb5e924672"],["D:/Myblog/Blog/Hexo/public/love2/renxi/default.css","7fdf6cc1c5070f2b000ea8810dc08e13"],["D:/Myblog/Blog/Hexo/public/love2/renxi/functions.js","28b1a964e367c876acfb79c4f7dfd3fb"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jquery.min.js","db2cccefedcc741a45a582e91a5afe8d"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async-powerpack.min.js","fd45d8a1f07587f6c02374252ec473ff"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-async.min.js","aa6f97f754cafa543faaab169e3fd001"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-builderbase.min.js","9b8461afeb0b66c0d0ad1301b41c243c"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-jit.js","c8694188c517a0c89ceb784fbda10e49"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex-parser.js","a23cd8fa9a8937aed571c01ba52139a6"],["D:/Myblog/Blog/Hexo/public/love2/renxi/jscex.min.js","c36e85ee92e83d634d0245bc83889d87"],["D:/Myblog/Blog/Hexo/public/love2/renxi/love.js","998999f0cd04222ec1b9bac7ab0a09d8"],["D:/Myblog/Blog/Hexo/public/message/index.html","da3bfe21fac18d0f519ec37d1e1d7969"],["D:/Myblog/Blog/Hexo/public/movie/index.html","e94f62caa8fbc5f94b0b6ea7235f24d2"],["D:/Myblog/Blog/Hexo/public/music/index.html","858dccf92b6eb7a9725b7bd734ecdb4d"],["D:/Myblog/Blog/Hexo/public/page/2/index.html","00af4bce9ef1f585912f615259eeebcc"],["D:/Myblog/Blog/Hexo/public/page/3/index.html","0f2f6b9eba8b28135cc3429670143f89"],["D:/Myblog/Blog/Hexo/public/page/4/index.html","e08c0f1f2a22464d11fc36cdc92e0d55"],["D:/Myblog/Blog/Hexo/public/tags/API/index.html","b9ff031c06bfd7e9b7ffdca82cf28713"],["D:/Myblog/Blog/Hexo/public/tags/agent/index.html","19a2fc21820f4e272348a5e7f01f600f"],["D:/Myblog/Blog/Hexo/public/tags/blog/index.html","4d6e52dae3e54a48c0766515ea83fa5c"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/2/index.html","acdd1b8c028eefeb888faf4dff061787"],["D:/Myblog/Blog/Hexo/public/tags/blog/page/3/index.html","650585748ef2777cfc596847df685f67"],["D:/Myblog/Blog/Hexo/public/tags/cache/index.html","9e46d794c7ad212346009b6e75948beb"],["D:/Myblog/Blog/Hexo/public/tags/centos/index.html","17dc0445253a3339fc1b886dd8795768"],["D:/Myblog/Blog/Hexo/public/tags/centos7/index.html","e1d540dc70ebb51022ff227d2f884935"],["D:/Myblog/Blog/Hexo/public/tags/command/index.html","65cd2b03cf34aa8ed2ebb05cdee5fc78"],["D:/Myblog/Blog/Hexo/public/tags/firewall/index.html","a0ec95172cd6a7a65128460c6f3fbab4"],["D:/Myblog/Blog/Hexo/public/tags/huawei/index.html","d3130c67dcab63c985c0b665061e3765"],["D:/Myblog/Blog/Hexo/public/tags/image/index.html","3f1db78cc473756fb5e6e247c4ad871b"],["D:/Myblog/Blog/Hexo/public/tags/index.html","3e313a575dfea46c335317aeb9c51ccf"],["D:/Myblog/Blog/Hexo/public/tags/jsDelivr/index.html","a1c37486ac38da1f4c1936fe97731bdc"],["D:/Myblog/Blog/Hexo/public/tags/life/index.html","a4e0c9c9b111673749df366a6d5e5afb"],["D:/Myblog/Blog/Hexo/public/tags/markdown/index.html","5cee11e385284a781fe3a8067fbaa060"],["D:/Myblog/Blog/Hexo/public/tags/optimization/index.html","ddf15ae7dc3690793d213c8bf0f68c13"],["D:/Myblog/Blog/Hexo/public/tags/picGo/index.html","667d9c5c5fe74bfc7956e3c4505a320d"],["D:/Myblog/Blog/Hexo/public/tags/problem/index.html","a9265fd50c600527d37542e03c5443a8"],["D:/Myblog/Blog/Hexo/public/tags/resource/index.html","6e0c843899bb93b35c23d32a894c12cb"],["D:/Myblog/Blog/Hexo/public/tags/revolvermaps/index.html","c5171fa28f7567be883c429ac028d0f4"],["D:/Myblog/Blog/Hexo/public/tags/root/index.html","d2f6700b6298701ca71754fcea80d406"],["D:/Myblog/Blog/Hexo/public/tags/session/index.html","df75b5c0a5199d79808e61b54c015584"],["D:/Myblog/Blog/Hexo/public/tags/shell/index.html","7aec620d81bb7887d3f639973d96c348"],["D:/Myblog/Blog/Hexo/public/tags/software/index.html","97d5fd1f330ab884b8347da418102969"],["D:/Myblog/Blog/Hexo/public/tags/summary/index.html","a9a5d406508d12208629519147e21efd"],["D:/Myblog/Blog/Hexo/public/tags/system/index.html","f1d7a3f9bcaf6e07c14a89fb391f446a"],["D:/Myblog/Blog/Hexo/public/tags/tcp/index.html","466a608a3c351719577edf986e82ac11"],["D:/Myblog/Blog/Hexo/public/tags/technology/index.html","f30db3d23cb786b051c81f27825f80f1"],["D:/Myblog/Blog/Hexo/public/tags/valine/index.html","900d8dcb4b07d2fb1a8cc74ff4c30341"],["D:/Myblog/Blog/Hexo/public/tags/vim/index.html","627f81be46f952427747990aefaf4a7f"],["D:/Myblog/Blog/Hexo/public/tags/web/index.html","044e74691d8664421164b78f14387bda"],["D:/Myblog/Blog/Hexo/public/tags/交换机/index.html","8d83120648881840612816c93281082f"],["D:/Myblog/Blog/Hexo/public/tags/优化/index.html","592ee3b995e587a2ae7a17f97b18b19f"],["D:/Myblog/Blog/Hexo/public/tags/共享/index.html","2159c8f1b85ec3be8c6d5801d8ab68fd"],["D:/Myblog/Blog/Hexo/public/tags/又拍云/index.html","012fb6aad5e9e3875cb35514f6be888f"],["D:/Myblog/Blog/Hexo/public/tags/反向代理/index.html","bccf74fee9ce23ba50836ea3dce529b6"],["D:/Myblog/Blog/Hexo/public/tags/域名/index.html","c5cfc35dbcb035f30f734786c562daa7"],["D:/Myblog/Blog/Hexo/public/tags/端口/index.html","5606e8a5e0e05ad79fc113dfaaf08bea"],["D:/Myblog/Blog/Hexo/public/tags/端口转发/index.html","decbe98e3b35c6f2e48a73d648b3672e"],["D:/Myblog/Blog/Hexo/public/tags/负载均衡/index.html","34ed27b5567aeb6628d2db1a78e3799a"],["D:/Myblog/Blog/Hexo/public/tags/远程/index.html","2ad870019e4f67ce74285c98f3572189"]];
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







