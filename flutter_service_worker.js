'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fb7bd445b5b944a73c0bdd4d163da71a",
"splash/img/light-2x.png": "3d291d437af1afe12e32bdc19194e71e",
"splash/img/dark-4x.png": "806a939b9b255183da7e8f31064aafec",
"splash/img/light-3x.png": "c2b237b39d311be8031bd9363134168e",
"splash/img/dark-3x.png": "c2b237b39d311be8031bd9363134168e",
"splash/img/light-4x.png": "806a939b9b255183da7e8f31064aafec",
"splash/img/dark-2x.png": "3d291d437af1afe12e32bdc19194e71e",
"splash/img/dark-1x.png": "7e42eb5301e1eaa2950ba25fd5dedea8",
"splash/img/light-1x.png": "7e42eb5301e1eaa2950ba25fd5dedea8",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"favicon.ico": "0d4569bfa0f8db51c1498823c9554cfd",
"index.html": "6eff5a9a0b32c84b987c422f47f3db26",
"/": "6eff5a9a0b32c84b987c422f47f3db26",
"firebase-messaging-sw.js": "05992670c481531d6da815b22d652c8f",
"main.dart.js": "094c4fbffc193e5b9d20100d71fb92af",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "444ab12fb92e62ed5da47cd5bbc2e2a6",
"icons/Icon-maskable-192.png": "444ab12fb92e62ed5da47cd5bbc2e2a6",
"icons/Icon-maskable-512.png": "34e7ec55bc1d6a27c608c922bbf23ad8",
"icons/Icon-512.png": "34e7ec55bc1d6a27c608c922bbf23ad8",
"manifest.json": "4a7a8fb63d759c6645337ce11a9ea18d",
"assets/AssetManifest.json": "b952c04bef995719a90b7b896c8b41c0",
"assets/NOTICES": "e59225dceab2f3cf4bfdad5bf8dbcf14",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_google_places_hoc081098/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_hoc081098/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/research_package/assets/lang/en.json": "1d7025059e3ff6592542d53208eb8164",
"assets/packages/research_package/assets/lang/da.json": "8226322230709bbdbedaf2c7b31e907b",
"assets/packages/research_package/assets/audio/RPTimerStepSound.mp3": "39618f277b71da45418111ba420d985f",
"assets/packages/research_package/assets/icons/document.png": "baf5f7e19f4a40f0efbcb28e68816eb0",
"assets/packages/research_package/assets/icons/archive.png": "774dd5a71e4d911fe550cf55515632f6",
"assets/packages/research_package/assets/icons/settings.png": "4e19b796edaaec7be67204987b9b6ac2",
"assets/packages/research_package/assets/icons/health.png": "be3ed6fb9fe7460b7e1fc9223c5f053a",
"assets/packages/research_package/assets/icons/networking.png": "5c32a1b960963f41dd7e93a370e5b06f",
"assets/packages/research_package/assets/icons/deadline.png": "b84f6551cefb9a1fc843bc38b3c377c1",
"assets/packages/research_package/assets/icons/target.png": "20cd5efaaab93aca9b9b59a1cb0e5f67",
"assets/packages/research_package/assets/icons/checkmark.png": "78a18f2a7a1581c6dfb9407f3ba23cdd",
"assets/packages/research_package/assets/icons/management.png": "ca332c308380f95bae725ea460002f0d",
"assets/packages/research_package/assets/icons/task.png": "ff2254a13f8390240811dd0f48f3b7c8",
"assets/packages/research_package/assets/icons/id.png": "e82237beb95dd46c69d645c1f404f09e",
"assets/packages/research_package/assets/icons/handshake.png": "42d786337771ddc6ad8847c26af3ac41",
"assets/packages/research_package/assets/icons/location.png": "ae8041eb0eb7ef658ae90fd234e26f1d",
"assets/packages/research_package/assets/icons/analysis.png": "ff31bab59d70bd99192f05381e81b2c4",
"assets/packages/survey_kit/assets/fancy_checkmark.json": "ba198bdf17f5a9a97e89d74c61921edb",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/background/background_6.jpg": "7a6016de88c06444983b435b4b377765",
"assets/assets/background/background_7.jpg": "14a76951c4ecc68c66339fc09dd46c54",
"assets/assets/background/background_5.jpg": "4d6d14c3940585eec68d4ed56caac622",
"assets/assets/background/background_4.jpg": "f292bd9f0ca93fd62960e4c788eb568f",
"assets/assets/background/background_1.jpg": "5030497714b9cb1c3b5c63f480374edf",
"assets/assets/background/background_3.jpg": "adb172880aed5b92be9099b6a28b8a0a",
"assets/assets/background/background_2.jpg": "843d84eac1c4c82db4fb4485c8bee0c5",
"assets/assets/background/background_3_blurred.jpg": "f5506c5563ffe047cf7884df62b32f34",
"assets/assets/fi-rr-cross.svg": "87735c5de36aa3cacd3c76e0515e1e9a",
"assets/assets/fi-rr-cross-small.svg": "ba00f6a37207f398d7b7de720536beed",
"assets/assets/fi-rr-list.svg": "ef87c78ffbce34e6bae99e735681d41f",
"assets/assets/fi-rr-heart.svg": "c0b7e59708b7786914bf37cc83322dda",
"assets/assets/fi-rr-settings-sliders.svg": "8cd1b9bbdad3f54a648058d1281ec795",
"assets/assets/fi-rr-notebook.svg": "971c108a9043e95c26048893a25ad866",
"assets/assets/paula_gifs/paula1.gif": "45e09c07adde9968f8d9853a00761224",
"assets/assets/paula_gifs/paula3.gif": "04cc561e744121b793e1d29adf6eb1b6",
"assets/assets/paula_gifs/paula2.gif": "a7f6483a7584d1daab37e2617e43eed0",
"assets/assets/paula_gifs/paula4.gif": "4afaa797e86ae04c1e6aae11adeecbdd",
"assets/assets/fi-rr-home.svg": "02199e2d0b39ca09765f35c925de839e",
"assets/assets/fi-rr-user.svg": "e7fe985d6eb47a0f65c40964ddea1f80",
"assets/assets/fi-rr-refresh.svg": "6e34a5f4e1319d851c6451d9ee2336c1",
"assets/assets/ecovia_images/ecovia_app_icon_transparent.png": "3f4fdb3c6c3f331b4e3006305e01feea",
"assets/assets/ecovia_images/ecovia_app_icon.png": "bd2c5d93f0542ef2505668c962e4e172",
"assets/assets/ecovia_images/ecovia_logo.png": "6c1cf2893243d0ea91e04d247f950c0a",
"assets/assets/ecovia_images/ecovia_logo_rounded_corners2.png": "857668fd9a6e0c0bd336c7f883a9df07",
"assets/assets/ecovia_images/ecovia_logo_with_text.png": "60ca237126cf83a5d7d81d126b66caf2",
"assets/assets/ecovia_images/ecovia_logo_rounded_corners.png": "bc994d19952ad2d910aed1dbd0b651cc",
"assets/assets/ecovia_images/ecovia_logo.jpeg": "6c1cf2893243d0ea91e04d247f950c0a",
"assets/assets/ecovia_images/ecovia_logo_squared.png": "857668fd9a6e0c0bd336c7f883a9df07",
"assets/assets/fi-rr-time-forward.svg": "db8aeb74c94c3b90c4a6ddf576364e17",
"assets/assets/GoogleService-Info.plist": "671d03b675213894f8e9112c1711e9f2",
"assets/assets/fi-rr-feather.svg": "aa46e381ca591ab44dbbeb31647bd4f5",
"assets/assets/clover-icon.svg": "8e8bfb152662f62f6ef13c633d4334c5",
"assets/assets/fi-rr-box.svg": "9758ca4391d2dc0be1d4e5497cabe998",
"assets/assets/fi-rr-apps.svg": "3c7473b41f48f3d3c8b112045343737f",
"assets/assets/high_res_appgraphs/app_graph14.png": "26a03a4ba3999a6435d4960d16130409",
"assets/assets/high_res_appgraphs/app_graph28.png": "87c0c5463b30902ed52114e6fce8398d",
"assets/assets/high_res_appgraphs/app_graph9.png": "531a70f841af7ac9dbfe268911cf9285",
"assets/assets/high_res_appgraphs/app_graph8.png": "cd600dcaedde5c851140cbff94f69d18",
"assets/assets/high_res_appgraphs/app_graph29.png": "631a5e2ebbe20fac624655f81ddb30ce",
"assets/assets/high_res_appgraphs/app_graph15.png": "2f23f252b8e42aa0875cc41c87c1a318",
"assets/assets/high_res_appgraphs/app_graph17.png": "9c284bb99224ed5ae954572bd109be47",
"assets/assets/high_res_appgraphs/app_graph16.png": "7327c9a18bfe2d8ea8438c072cc90b03",
"assets/assets/high_res_appgraphs/app_graph12.png": "f09824679e867d37d9d03029473a984d",
"assets/assets/high_res_appgraphs/app_graph13.png": "27396b9a1fc564dd81dc343c09aebe4a",
"assets/assets/high_res_appgraphs/app_graph39.png": "4a2826d7363e5a9a3d829eed6f80d89a",
"assets/assets/high_res_appgraphs/app_graph11.png": "44596fbfc62097250601bbf14a3f803e",
"assets/assets/high_res_appgraphs/app_graph10.png": "80f9c157383923699aa45c02734c87aa",
"assets/assets/high_res_appgraphs/app_graph38.png": "02f52a769eaf32597ab4b5c4744425e3",
"assets/assets/high_res_appgraphs/app_graph48.png": "a8c5a4b9b5fcd5cac1e9a1550f7ccc49",
"assets/assets/high_res_appgraphs/app_graph49.png": "88f66eb5401a7fdb153626e7914c20af",
"assets/assets/high_res_appgraphs/app_graph42.png": "d7d28cf284e51393d47e8e6a3a1a6e1c",
"assets/assets/high_res_appgraphs/app_graph43.png": "1b315041c2b4b8ac01a0ad0a9d0c4e4c",
"assets/assets/high_res_appgraphs/app_graph41.png": "014f27d12fad74e124eaa52c6457d1bd",
"assets/assets/high_res_appgraphs/app_graph40.png": "f93784940103f2a70292513954745c76",
"assets/assets/high_res_appgraphs/app_graph44.png": "9eeedec6e4c53f362e2aba60084605c3",
"assets/assets/high_res_appgraphs/app_graph50.png": "2cf558cde3566fb39eb475a5c586f73b",
"assets/assets/high_res_appgraphs/app_graph45.png": "f29af4cb668c542c671ed2d846b477bb",
"assets/assets/high_res_appgraphs/app_graph47.png": "a88ee7573b42528dddb8376b788c62ce",
"assets/assets/high_res_appgraphs/app_graph46.png": "6ba3aba7804d43e939494600acfc6a7a",
"assets/assets/high_res_appgraphs/app_graph35.png": "e17e1c3c3de9398c6d7840003924d594",
"assets/assets/high_res_appgraphs/app_graph21.png": "691910818ccf4181c787c77e17737af6",
"assets/assets/high_res_appgraphs/app_graph1.png": "66d98e1d80919b5b8137c8a923508305",
"assets/assets/high_res_appgraphs/app_graph20.png": "15b39a26cb4b56b807c90f9abdfa6954",
"assets/assets/high_res_appgraphs/app_graph34.png": "e1700c08734c5a73a928a18eccbd8597",
"assets/assets/high_res_appgraphs/app_graph22.png": "9eb5e731331dbea475ebe25ac3159ec9",
"assets/assets/high_res_appgraphs/app_graph36.png": "60b4205aab32ed3f70b455505937675d",
"assets/assets/high_res_appgraphs/app_graph3.png": "61bc5a8e54e701159c1e8f49ebcc8871",
"assets/assets/high_res_appgraphs/app_graph2.png": "d026e8935212dfa9d76feaf9ed56d342",
"assets/assets/high_res_appgraphs/app_graph37.png": "d75174c54cdb53402008360234e54f4b",
"assets/assets/high_res_appgraphs/app_graph23.png": "0ec821f84b4f940027f5d3e2afd6acab",
"assets/assets/high_res_appgraphs/app_graph27.png": "4680cef2c1eb93e3145f13dfc9e2565a",
"assets/assets/high_res_appgraphs/app_graph33.png": "995fbbc75861bf7cc06e0854f33aa1e2",
"assets/assets/high_res_appgraphs/app_graph6.png": "8dcc7f937e459d16c68942a8717bde12",
"assets/assets/high_res_appgraphs/app_graph7.png": "6f123a23f5bb7be36776f495564de630",
"assets/assets/high_res_appgraphs/app_graph32.png": "4e82ddd883831370e047fd38ba5c29e5",
"assets/assets/high_res_appgraphs/app_graph26.png": "af881dbfa53b824b9d5425a0b8a55d4f",
"assets/assets/high_res_appgraphs/app_graph18.png": "6ec1a1d43fe6a07609132ed08e5f82ce",
"assets/assets/high_res_appgraphs/app_graph30.png": "1bfa567c17e22a089d8b7b76e883ecd5",
"assets/assets/high_res_appgraphs/app_graph24.png": "a13215d6e5ba8e6c4d58478172852542",
"assets/assets/high_res_appgraphs/app_graph5.png": "e54e07de160c4bc92804ccaad2409c41",
"assets/assets/high_res_appgraphs/app_graph4.png": "ee43dc0ec3c5bbbe5ce0ef32d4fa1aeb",
"assets/assets/high_res_appgraphs/app_graph25.png": "fb5aaa7c9c448609cca44e826016227b",
"assets/assets/high_res_appgraphs/app_graph31.png": "c7e262f1f826f19915b3700e814b0996",
"assets/assets/high_res_appgraphs/app_graph19.png": "31804acca0bc1da2a6ef7e03d6d6e887",
"assets/assets/fi-rr-settings.svg": "eafb7bcefea3896f7dd95243288e77e5",
"assets/assets/fi-rr-star.svg": "af21dca64a44efe5774d1fdb493fe325",
"assets/assets/fi-rr-portrait.svg": "bbbc3eeb42d6fab8b6bd0c1b1aaa7090",
"assets/assets/fi-rr-world.svg": "06c0c9d8f6a9a6cf232c775a3ad0a42f",
"assets/assets/fi-rr-align-left.svg": "c1e4a92eca09e4302d1deb60ef85a0d5",
"assets/assets/fi-rr-thumbs-up.svg": "a5b60b9856a830ccfc361fc50c87a329",
"assets/assets/fi-rr-menu-burger.svg": "25c919923bed23e3eb12c51590a51b38",
"assets/assets/high_res_recipe_images/zitronige_wirsingsuppe.jpeg": "5531aa4cb57798f6e7d05c6a4553bfdf",
"assets/assets/high_res_recipe_images/risotto_mit_pfifferlingen.jpeg": "964edafbb371fdf134eea0a577410928",
"assets/assets/high_res_recipe_images/veganes_naan_brot.jpeg": "7fef11f6e6b93648e654d68e333d1531",
"assets/assets/high_res_recipe_images/tagliatelle_mit_wirsing.jpeg": "a8573f319e41174a040c174e8c453ce3",
"assets/assets/high_res_recipe_images/pasta_e_fagioli.jpeg": "8946bbc18d5c2e40be7202f8f95618ff",
"assets/assets/high_res_recipe_images/spaghetti_mit_veganen_meatballs.jpeg": "d598ff8ae25c0f994d25d75062f7f817",
"assets/assets/high_res_recipe_images/grilled_veggie_sub.jpeg": "118c89a3121d8572b92a93357219c4a0",
"assets/assets/high_res_recipe_images/vietnamesischer_tomaten_tofu.jpeg": "f5506db3e9fc5f29965bc120aa761640",
"assets/assets/high_res_recipe_images/franzoesische_zwiebelsuppe.jpeg": "dde8fe96c0cadb2a0aa335cab9ca1339",
"assets/assets/high_res_recipe_images/baked_feta_pasta.jpeg": "6c13cdff1d96fb2bbea946822ae36ba5",
"assets/assets/high_res_recipe_images/fettuccine2.jpeg": "d3200961c2fcc5403e206fd4c65fde20",
"assets/assets/high_res_recipe_images/milchreis_mit_orangensauce.jpeg": "fb3694e9dbc8d3b0eaf07a2076166a0d",
"assets/assets/high_res_recipe_images/quarterpounder.jpeg": "05a4e857ecdd26137c94711b93dd8c93",
"assets/assets/high_res_recipe_images/palak_tofu_paneer.jpeg": "5a220d685219f0b0ac48afe952b1b070",
"assets/assets/high_res_recipe_images/sauerkraut_pancakes_pilze.jpeg": "3f311240a63a66bdee552bf580a56919",
"assets/assets/high_res_recipe_images/curry_blaetterteigschnecken.jpeg": "2d3ae7746d2beb2d5fda6857c735d7f1",
"assets/assets/high_res_recipe_images/frischkaese_stock_image.jpeg": "d52fc99e61d49119d099cfcb78a52aa9",
"assets/assets/high_res_recipe_images/luv_stock_image.jpeg": "be51fc41cdfd2b7836ecad8482c0a3e6",
"assets/assets/high_res_recipe_images/patatas_braves.jpeg": "cf9d5d1b0a51c0fa0385580eebd20ddc",
"assets/assets/high_res_recipe_images/veganes_omelette.jpeg": "e809bd85cb631b0350c345602dc01b8f",
"assets/assets/high_res_recipe_images/bedda_stock_image.jpeg": "98b98008df1e961ad264e3e422b6349f",
"assets/assets/high_res_recipe_images/muehlen_hack_stock_image.jpeg": "2bc9a68b70f8e35e8039b3f7dd7161aa",
"assets/assets/high_res_recipe_images/perfekte_vegane_pizza.jpeg": "6bccc09f888e9a9a14c72a6f068deb99",
"assets/assets/high_res_recipe_images/one_pot_spaghetti_puttanesca.jpeg": "58ad8ce4037448f0f185b0b1a7671f06",
"assets/assets/high_res_recipe_images/gnocchi_mit_scharfer_tomaten_cranberry_sauce.jpeg": "ff0907098a21050f0773913d3913def5",
"assets/assets/high_res_recipe_images/herbstsalat_walnuss.jpeg": "a2e9ac0ba201e0b3b64027c7d6861ef1",
"assets/assets/high_res_recipe_images/pfirsich_tarte.jpeg": "a3f890bc3fec1c571d064cfe70a96806",
"assets/assets/high_res_recipe_images/schwaebische_vegane_maultaschen.jpeg": "b67e02f88c6d588a0561d8add3f43e19",
"assets/assets/high_res_recipe_images/fenchelsalat_linsen.jpeg": "71bc1719dddc41ef32348d5ef8fb4da2",
"assets/assets/high_res_recipe_images/rhabarber_kaesekuchen.jpeg": "4798cb5c4ee9bdbf3cf0b99ffbe7abc2",
"assets/assets/high_res_recipe_images/rote_bete_curry.jpeg": "f80e7d2d8388c3ee442196df75fb4bee",
"assets/assets/high_res_recipe_images/bombay_potatoes.jpeg": "668e2a205708126e94a4752673fcdb46",
"assets/assets/high_res_recipe_images/pak_choi_austernpilze.jpeg": "00279fe825583b34b18fbde0e0125ebc",
"assets/assets/high_res_recipe_images/veganes_kimchi.jpeg": "fa99822d4ffd8076b4a09cd993858789",
"assets/assets/high_res_recipe_images/seitanburger_fries.jpeg": "11cf9630b40b1207536f55e2e2254ab5",
"assets/assets/high_res_recipe_images/schinken_stock_image.jpeg": "7e08f724dc6a3df22769dee8ad2ae082",
"assets/assets/high_res_recipe_images/breakfast_sandwich.jpeg": "dbbf344975f69afa49af0ed7285b782b",
"assets/assets/high_res_recipe_images/geroesteter_curry_blumenkohl.jpeg": "59b1259ed17620f0f1c9c0b1045230e2",
"assets/assets/high_res_recipe_images/instant_ramen.jpeg": "4b2ba2c5f60e31bcbcb0ec9fd3cc21b2",
"assets/assets/high_res_recipe_images/vegane_pho.jpeg": "228f9e304178db3ebe3a96cc06ca9cda",
"assets/assets/high_res_recipe_images/veganer_ricotta.jpeg": "aafdb99c00e65a6270cce79e4445b647",
"assets/assets/high_res_recipe_images/chili_con_tofu.jpeg": "ba312b3ac325370548a479c9ef9cde8c",
"assets/assets/high_res_recipe_images/kitchari.jpeg": "704b2a73850eb147279496a36a130715",
"assets/assets/high_res_recipe_images/frische_genuss_stock_image.jpeg": "8a572e64c3d6f1b7ef1ad84e228ad754",
"assets/assets/high_res_recipe_images/gochujang_rosenkohl.jpeg": "02ea23b43ab7bb34dbb8591885dd85db",
"assets/assets/high_res_recipe_images/soja_drink_stock_image.jpeg": "8d83bb62b423db9d0051ec2bc53b27ec",
"assets/assets/high_res_recipe_images/vegane_kartoffelpuffer.jpeg": "0d809f5ee2ebc5de89785e01ae54865b",
"assets/assets/high_res_recipe_images/bowl_mit_pinkem_quinoa.jpeg": "8da18f246af8b4fa29aa953b32f9e8c0",
"assets/assets/high_res_recipe_images/karamellisierter_lauch_mit_hirse.jpeg": "098a19ba515126bc1896b75ea74a9f8d",
"assets/assets/high_res_recipe_images/banh_xeo.jpeg": "90e422e90f674a07a259df9d3d1bd346",
"assets/assets/high_res_recipe_images/spaghetti_alfredo_mit_cremiger_blumenkohl_sauce.jpeg": "88217b84f668e186990fdbccef4c79de",
"assets/assets/high_res_recipe_images/schlag_creme_stock_image.jpeg": "54272c232bbb29a13d676e559902a1e1",
"assets/assets/high_res_recipe_images/violife_stock_image.jpeg": "14f05df638fb8c74fc99e0071b80fd0f",
"assets/assets/high_res_recipe_images/zucchini_schokokuchen.jpeg": "76cf2fb0ea5acd3d0176597611f3c079",
"assets/assets/high_res_recipe_images/zucchinispaghetti.jpeg": "29aa5116a8101926dbae6a7658c255ea",
"assets/assets/high_res_recipe_images/brotauflauf_mit_brokkoli.jpeg": "555612ddefb279944966f10339b1f9cd",
"assets/assets/high_res_recipe_images/gruene_spargeltacos.jpeg": "944ba59f0f11c59ff8c69b6adc057d9c",
"assets/assets/high_res_recipe_images/one_pot_reispfanne.jpeg": "cfee84405ac64972a7887b21061c95fd",
"assets/assets/high_res_recipe_images/tomatenbrot.jpeg": "5c45ee3a36c69e6fd147211b17df3288",
"assets/assets/high_res_recipe_images/schnitzel_stock_image.jpeg": "efc90207ada74ddaac8440ae08eb1b93",
"assets/assets/high_res_recipe_images/vegane_piroggen.jpeg": "e0a90be0429dad263ed631b05604c1f3",
"assets/assets/high_res_recipe_images/meat_replacement.jpeg": "5e1a90bf698ccc1227f2d9b82945ff03",
"assets/assets/high_res_recipe_images/recipe_bundle_background1.jpeg": "c31f4fd93875e929549eb566244481ad",
"assets/assets/high_res_recipe_images/veganes_risotto_mit_spargel.jpeg": "5fe99340998140b688b30b92b540236f",
"assets/assets/high_res_recipe_images/nordische_erbsensuppe.jpeg": "70fc2ad18d943d3fbe48fa2237d5b4ce",
"assets/assets/high_res_recipe_images/die_beste_vegane_bratensauce.jpeg": "dd8f65c768327dbbcd6febe908499a17",
"assets/assets/high_res_recipe_images/tuerkische_linsensuppe.jpeg": "89e4d77419f732db6e970cc000d2781b",
"assets/assets/high_res_recipe_images/baba_ganoush.jpeg": "0be6c0f478d4cb9bdcf6a55de294e20c",
"assets/assets/high_res_recipe_images/blumenkohl_nudelauflauf.jpeg": "0fa9bfae4877baa28c6c3f08c487da06",
"assets/assets/high_res_recipe_images/seitanbraten.jpeg": "9d89ecacd853b8b121b4cefc13ff0174",
"assets/assets/high_res_recipe_images/haselnusskuchen.jpeg": "086ee6a12d1013fdbf752f64a15e3419",
"assets/assets/high_res_recipe_images/hummus_basic.jpeg": "7dfe2964c72a2cdc6901335185f44d0b",
"assets/assets/high_res_recipe_images/spaghetti_mit_karottenpesto.jpeg": "cf1eb5ac5a2ba67a86e359a7d0040526",
"assets/assets/high_res_recipe_images/rhabarber_crumble.jpeg": "fd426998f012fbb2fb128cbe0f95f4cf",
"assets/assets/high_res_recipe_images/focaccia_mit_kirschtomaten.jpeg": "1add60f5f3268a3c5079a719ca1262a8",
"assets/assets/high_res_recipe_images/spargelpasta_mit_raeuchertofu.jpeg": "0ec08b8c0de561c57ef2726e36defc06",
"assets/assets/high_res_recipe_images/vegane_quesadillas.jpeg": "797a8dd38b19c196311b999a0663f30d",
"assets/assets/high_res_recipe_images/wantan_suppe.jpeg": "df14837dbe0e29f2f999d0ada0315710",
"assets/assets/high_res_recipe_images/wassermelonen_gazpacho.jpeg": "ffd72c6c50730fb21b775370717c365e",
"assets/assets/high_res_recipe_images/selbst_gemachter_veganer_nudelteig.jpeg": "22a89377c3ca2e715ce524413e146ddf",
"assets/assets/high_res_recipe_images/vegane_crepes.jpeg": "10354103a29d080485ceeeb46d134e22",
"assets/assets/high_res_recipe_images/baozi.jpeg": "0991edfee1cfa35eee1a63b07a065af3",
"assets/assets/high_res_recipe_images/egg_replacement.jpeg": "d5bbc4a46834161fbff6c23d93c7308c",
"assets/assets/high_res_recipe_images/erdnuss_kokos_suppe.jpeg": "380750b51708c3ad0ec3f0a920c155b8",
"assets/assets/high_res_recipe_images/japanisches_curry.jpeg": "aa4593f265b302487438ff9892736688",
"assets/assets/high_res_recipe_images/girl.png": "b164956c2b057c6d056bb7e0e9c28314",
"assets/assets/high_res_recipe_images/linsen_dal_grundrezept.jpeg": "4d538ba80b2769c5c2e05102b9b8d89d",
"assets/assets/high_res_recipe_images/veganes_kaesefondue.jpeg": "cc5d9c8cce418ed0a5af3e35205e7ed3",
"assets/assets/high_res_recipe_images/sushi.jpeg": "691afeda312002751faedff5c22584ba",
"assets/assets/high_res_recipe_images/selleriepfanne.jpeg": "5f987e34fec98d9454340131e4b3e99b",
"assets/assets/high_res_recipe_images/chiapudding.jpeg": "943d2baa6611d7ca22e8fbabe70ad2ee",
"assets/assets/high_res_recipe_images/rote_bete_pasta_from_hell.jpeg": "b7bc22fa3dae39e62d6ccd370fded7fe",
"assets/assets/high_res_recipe_images/buchweizensalat_spargel.jpeg": "8bb238181519c1f9beffc218ed06f498",
"assets/assets/high_res_recipe_images/vollkornsandwich_curry.jpeg": "bba94b6b0d509470b07e85d3143b1e74",
"assets/assets/high_res_recipe_images/mung_dal.jpeg": "5316c07b95bdf2a0260085c09fd11ac3",
"assets/assets/high_res_recipe_images/cuisine_stock_image.jpeg": "9ec4bdae5e766e5fbd98fd798ef2d7c6",
"assets/assets/high_res_recipe_images/aloo_gobi_blumenkohl_curry.jpeg": "d2a7280d669215c5f53fd3405cfbeb01",
"assets/assets/high_res_recipe_images/ecovia_logo_with_text.png": "557a6d00555a595593ee5aeb71a45ec1",
"assets/assets/high_res_recipe_images/vegane_lasagnesuppe.jpeg": "1eca69dedde83ffb3305cc82ae3f1eff",
"assets/assets/high_res_recipe_images/cremige_tofu_nudeln.jpeg": "6d43cd4124a35151e89c435021789bda",
"assets/assets/high_res_recipe_images/mousse_au_chocolat.jpeg": "7e31355305a0056bbbbd9a2e057d4da2",
"assets/assets/high_res_recipe_images/zucchinipuffer_mit_kraeuterquark.jpeg": "0f848db374aadd9c05a523fd272704a2",
"assets/assets/high_res_recipe_images/blaetterteig_tomaten_galette.jpeg": "678696f4f42dbc5baf6b013d21af1afc",
"assets/assets/high_res_recipe_images/suesskartoffel_fries.jpeg": "601ca9cf33913a9e65603b6a2f833628",
"assets/assets/high_res_recipe_images/one_pot_quinoa_chili.jpeg": "1f08fef430c0fac0db654ac78b9acfa8",
"assets/assets/high_res_recipe_images/curry_kokos_linsensuppe.jpeg": "f8238e962568ea44257c883881d7558d",
"assets/assets/high_res_recipe_images/carbonara_mit_kuerbis.jpeg": "7006c91aafad3a94615661e77a390bba",
"assets/assets/high_res_recipe_images/pipe_rigate_mit_kichererbsen.jpeg": "e69eb12c8d6f21dc030666dc3ae04018",
"assets/assets/high_res_recipe_images/kuerbis_nudelauflauf.jpeg": "463c2ecacaa4eb037b18dc4d9ae27462",
"assets/assets/high_res_recipe_images/milk_replacement.jpeg": "78970485a0e492ce7973ac16a8973e34",
"assets/assets/high_res_recipe_images/champignoncremesuppe.jpeg": "606afc0c7e6314f2095d030247933a0b",
"assets/assets/high_res_recipe_images/barbecue_sandwich.jpeg": "4127aecdafe26576e7f5e1efcdd5cc0c",
"assets/assets/high_res_recipe_images/spread_replacement.jpeg": "2d9a5236c81682ce2fac4c2d542aecee",
"assets/assets/high_res_recipe_images/like_meat_stock_image.jpeg": "f1efa33c7fe5886dc569b8ed90069f24",
"assets/assets/high_res_recipe_images/sommerrollen.jpeg": "a222080d90e3da3064bffc569aa1dccc",
"assets/assets/high_res_recipe_images/karotten_spaghetti.jpeg": "b727f3b537bb50a44c3d6ff94de823a0",
"assets/assets/high_res_recipe_images/honey_replacement.jpeg": "b4f23e7e1c32886f863e7237f1941fca",
"assets/assets/high_res_recipe_images/creme_vega_stock_image.jpeg": "9abe193009120b6e1611c255a5cd53ff",
"assets/assets/high_res_recipe_images/kaesekuchen_ohne_boden.jpeg": "b84a0c0243bd242a92fc8149fb5cd9fd",
"assets/assets/high_res_recipe_images/fruehstuecks_pancakes.jpeg": "539dd6bacd6db601f6657dcef33392db",
"assets/assets/high_res_recipe_images/fischstaebchen_stock_image.jpeg": "e681bf6a43b470b8ecafdc31d268f085",
"assets/assets/high_res_recipe_images/veganes_mett.jpeg": "ecb5e49edb070c328b5c5c78667fc708",
"assets/assets/high_res_recipe_images/vegan_muffins.jpeg": "416a172d6a38d3b9174c9cec15bfe1df",
"assets/assets/high_res_recipe_images/blaetterteig_spargelstangen.jpeg": "af6ced9e769e80843dcbb2db96f3f189",
"assets/assets/high_res_recipe_images/grilled_cheese_two.jpeg": "c11dea7d629c9ceffb4b3a98bc8a391f",
"assets/assets/high_res_recipe_images/fruehlingsbowl_good.jpeg": "34fce09acd1bc52f62c78b3db0e0518e",
"assets/assets/high_res_recipe_images/vegane_lasagne_bolognese.jpeg": "72224c66aa315d9bcf1878f87787b658",
"assets/assets/high_res_recipe_images/funfetti_donuts.jpeg": "56d06d8be9ec18041d156bd320ee6d48",
"assets/assets/high_res_recipe_images/cig_koefte.jpeg": "d3bc98d36378b91badb7f27a681bcb22",
"assets/assets/high_res_recipe_images/vegan_french_toast.jpeg": "d8212737077b2313efd169ef3ccd6970",
"assets/assets/high_res_recipe_images/vegane_pfannkuchen.jpeg": "6764778777985098f11ee728922f97ea",
"assets/assets/high_res_recipe_images/spinat_kichererbsen_curry.jpeg": "90de9acfcad1151ac4fd490f6500de8f",
"assets/assets/high_res_recipe_images/overnight_oats.jpeg": "179591568bba55cb416f648c6f674c6e",
"assets/assets/high_res_recipe_images/reisnudelsalat.jpeg": "3b62ad21292eac04de4bfc1538f0ee93",
"assets/assets/high_res_recipe_images/bami_goreng_brokkoli.jpeg": "b88d65ee741032e25167ced65fd9872e",
"assets/assets/high_res_recipe_images/grilled_cheese.jpeg": "85843319f0305a38914fe093fba6dc73",
"assets/assets/high_res_recipe_images/pastasalat_mozzarella.jpeg": "0557570084718454557007c5eb35b313",
"assets/assets/high_res_recipe_images/gefuellte_avocado.jpeg": "d0d016b8d4a564ada666426bcbaeaaff",
"assets/assets/high_res_recipe_images/chili_gazpacho.jpeg": "9062f0949e3896ee76014dfadc16edf6",
"assets/assets/high_res_recipe_images/warmer_buchweizensalat.jpeg": "8bb238181519c1f9beffc218ed06f498",
"assets/assets/high_res_recipe_images/bunte_kartoffeln.jpeg": "817baacc0f757c3c953565e398cc7072",
"assets/assets/high_res_recipe_images/margherita_glutenfrei.jpeg": "09d9ebc39a480cdaadce352e176172ac",
"assets/assets/high_res_recipe_images/portobello_panini.jpeg": "212c173c7c53dd1cfe3243115537f2da",
"assets/assets/high_res_recipe_images/blumenkohl_bolognese.jpeg": "a4b0ff33926bd895a2cb19c6186ec6af",
"assets/assets/high_res_recipe_images/beyond_meat_stock_image.jpeg": "04b7aa576c11f0f4f6f04a7d9f92f6a8",
"assets/assets/high_res_recipe_images/veganes_bayrisch_kraut.jpeg": "3e408de7d2d13446280f5411d2b90e33",
"assets/assets/high_res_recipe_images/veganer_mettigel.jpeg": "e78acc96c8f6124349ecc767a2227052",
"assets/assets/high_res_recipe_images/banh_mi.jpeg": "5350e84f43105b2854b29bf4d46120e6",
"assets/assets/high_res_recipe_images/mapo_tofu.jpeg": "f77c3957593c3d2fce4800f3544293ed",
"assets/assets/high_res_recipe_images/pasta_alla_norma.jpeg": "3c2bb347cb20f0484c9ccdd9594267d8",
"assets/assets/high_res_recipe_images/erdnusscurry_mit_auberginen.jpeg": "b5c30f9e1b51fa3a4953b765076982cf",
"assets/assets/high_res_recipe_images/instant_couscous.jpeg": "d1b06afe25a05e6ff3fa72812a2136de",
"assets/assets/high_res_recipe_images/barista_stock_image.jpeg": "cd70a54d731987a0894d774feff3c31d",
"assets/assets/high_res_recipe_images/knusprige_potato_cakes.jpeg": "96325bd1abcf268f190ce97a3a3da205",
"assets/assets/high_res_recipe_images/gemuesedoener.jpeg": "261613c8de461f2841ac5f1b8d48b4a2",
"assets/assets/high_res_recipe_images/crostini_mit_caponata.jpeg": "ac5e2be5e343744ac763aaeb7c25db8a",
"assets/assets/high_res_recipe_images/vegane_koettbullar.jpeg": "0e9aff39ecd657697042dae32cbcf4fa",
"assets/assets/high_res_recipe_images/kimchi_spaetzle.jpeg": "d9dd095185ca6f8607a1ce3b00a21bbc",
"assets/assets/high_res_recipe_images/kidneybohnen_erdnuss_eintopf.jpeg": "aab49cf6e8577d89a6b27568f8e788e8",
"assets/assets/high_res_recipe_images/kuerbis_donuts.jpeg": "5f43d46f208274d3d04ebeadd243b49f",
"assets/assets/high_res_recipe_images/kuerbis_roesti.jpeg": "2789de0cce56e5c0561174bdfc2f6e98",
"assets/assets/high_res_recipe_images/thunvisch_stock_image.jpeg": "67c7d97b420fb843e85c0629277fee04",
"assets/assets/high_res_recipe_images/hummus_wrap.jpeg": "e2affe3d9f387326d10152d8cfeb5170",
"assets/assets/high_res_recipe_images/sofish_stock_image.jpeg": "f8db1df61b6a30c9c2a387ea7aee0548",
"assets/assets/high_res_recipe_images/gebratener_reis.jpeg": "9e0e49aba1f6534ed76b30f0f37cfa05",
"assets/assets/high_res_recipe_images/bestes_veganes_mac_und_cheese.jpeg": "db288964d1d780fb31994668fb737ff8",
"assets/assets/high_res_recipe_images/veganer_banoffee_pie.jpeg": "393bf24065ad23027619b963e3479bc8",
"assets/assets/high_res_recipe_images/apfelkuchen_mit_streuseln.jpeg": "7418e1ae8292c202e8c1adbcf8ce6505",
"assets/assets/high_res_recipe_images/beef_seitan.jpeg": "3b4d6ff704450a976758deb8298a3ac6",
"assets/assets/high_res_recipe_images/chicken_style_sandwich.jpeg": "abd5fddb4b9cf98ee43628674e356244",
"assets/assets/high_res_recipe_images/spaghetti_napoli.jpeg": "5f0b93384cc6eef94f6ea90b96167aa1",
"assets/assets/high_res_recipe_images/salami_stock_image.jpeg": "8a01c8271e140ca4bf47c5f5975385ea",
"assets/assets/high_res_recipe_images/roesti.jpeg": "73ff16129c50955a2476bfc6d648ebf5",
"assets/assets/high_res_recipe_images/joghurt_stock_image.jpeg": "fc8ee87a6787f905b0f01d96cea1ea0d",
"assets/assets/high_res_recipe_images/gruenes_thai_curry.jpeg": "fae81a05c986633a3d544e000a101c01",
"assets/assets/high_res_recipe_images/login_illustration1.jpg": "7acb12a1280f8cb7713f90162716f0f6",
"assets/assets/high_res_recipe_images/vegan_porridge.jpeg": "769b61ba4bf219a0f7c5085641d297c6",
"assets/assets/high_res_recipe_images/vegane_brioche_burger_buns.jpeg": "cab75312cd3136a199ef768f53456267",
"assets/assets/high_res_recipe_images/recipe_bundle_background1.png": "144dfdbab9a90360eb09a29f89ce61c3",
"assets/assets/high_res_recipe_images/vegane_pekingsuppe.jpeg": "7756227de56561da4db47b3b2f671598",
"assets/assets/high_res_recipe_images/bun_chay.jpeg": "c21c101407f6cd8a368d812013ecbed1",
"assets/assets/high_res_recipe_images/spargel_baerlauch_suppe.jpeg": "dd97c5866e6df419cf6e6fe22d27df9c",
"assets/assets/high_res_recipe_images/brokkoli_auflauf.jpeg": "c8e26d500a0834c3cd18c4a50050239f",
"assets/assets/high_res_recipe_images/falafelbowl_good.jpeg": "0c640328600eb9ef0391ddd0e8ea71c7",
"assets/assets/high_res_recipe_images/kichererbsen_sandwich.jpeg": "3c2ad3eab879f7cdc24ccf906c49dfb2",
"assets/assets/high_res_recipe_images/veganes_sushi.jpeg": "076215f0cdb044b52db788eb1393a45e",
"assets/assets/high_res_recipe_images/pad_thai_mit_gruenem_spargel.jpeg": "775640a8082e2e845ca1d6d38b50b940",
"assets/assets/high_res_recipe_images/gebackener_barbecue_blumenkohl.jpeg": "b1fdd8f8a3017455d7296326ca4bd139",
"assets/assets/high_res_recipe_images/tiramisu.jpeg": "94944b730c514a2b73a88392387f2f22",
"assets/assets/high_res_recipe_images/kuerbis_linsen_salat.jpeg": "81ae6cf27409a59489fe4be1993d4c48",
"assets/assets/high_res_recipe_images/cashew_kaese_dip.jpeg": "8437eb5477c4899a7cfba13b96fc1494",
"assets/assets/high_res_recipe_images/tofu_kung_pao.jpeg": "b2d1dcec97f103472d69b3d1b66c0753",
"assets/assets/high_res_recipe_images/bowl_tempeh_erdnussdressing.jpeg": "ed68a8261580c8aed896e546438451fa",
"assets/assets/high_res_recipe_images/hotpot_japanisch.jpeg": "8377e7cc423bd82485c0601f8c16c856",
"assets/assets/high_res_recipe_images/vegane_vanilleso%25C3%259Fe.jpeg": "9ae6ff8858c43a524116674ff0576b70",
"assets/assets/high_res_recipe_images/veganes_rucola_baerlauch_pesto.jpeg": "371597a2aa59ba17e6dedc303932e1f2",
"assets/assets/high_res_recipe_images/pizza_bianca.jpeg": "48d7d336618256e172c1c9295e30219c",
"assets/assets/high_res_recipe_images/vegane_kohlrouladen.jpeg": "0edd36071fe52615092a257266b28b57",
"assets/assets/high_res_recipe_images/veganer_bacon.jpeg": "4185a502d738600d60225c02705c814a",
"assets/assets/high_res_recipe_images/bibimbap_bowl.jpeg": "397bc73a4560d7a9e64388f143b3cac4",
"assets/assets/high_res_recipe_images/fruehstuecks_smoothie.jpeg": "7e16aa4908046a18e5e579019b64d296",
"assets/assets/high_res_recipe_images/veganer_kartoffelgratin.jpeg": "ed4449c89d9c57a1304c43b025c53978",
"assets/assets/high_res_recipe_images/vegane_nuss_brownies.jpeg": "58388c53a64253f7cb3eb507e61c5712",
"assets/assets/high_res_recipe_images/roasted_chickpeas.jpeg": "09b310d5544bab7a0f26f3adeb8a4adf",
"assets/assets/high_res_recipe_images/rauchiger_seitanaufschnitt.jpeg": "bcbdb9576fa15bf6f3c5f8622a7b5e3a",
"assets/assets/high_res_recipe_images/pizza_kraeuterseitlingen.jpeg": "1c8e6ab190c688fc9acf1bc1e52038b7",
"assets/assets/high_res_recipe_images/leberwurst_stock_image.jpeg": "f09c91776b66a599637d255a05b5f79f",
"assets/assets/high_res_recipe_images/sommerlicher_buchweizensalat.jpeg": "cddbbd928e3fa325e0e35b9cbbad52a2",
"assets/assets/high_res_recipe_images/pulled_jackfruit_sandwich.jpeg": "64dc30a9fc0e7503f07c5f78f362d866",
"assets/assets/high_res_recipe_images/szechuan_pilz_scallops.jpeg": "3861c7b6ab9c69083865528c447329d1",
"assets/assets/high_res_recipe_images/penne_alla_vodka.jpeg": "98c4ce76287292b45615c7a935205e78",
"assets/assets/high_res_recipe_images/mujadarra.jpeg": "beda87e4900320db26cedea05ba68490",
"assets/assets/high_res_recipe_images/bananenbrot.jpeg": "053e0a1253583c40e36a1d2eebdcbe39",
"assets/assets/high_res_recipe_images/tofu_stock_image.jpeg": "f2a9ef16925614cf43dffa7afd3ab2e6",
"assets/assets/high_res_recipe_images/cremige_rahmchampignons.jpeg": "f2188d6cebe66fbca1a8978496795b42",
"assets/assets/high_res_recipe_images/soja_schnetzel_stock_image.jpeg": "ad0d16537c6b2ea56645fd0fb3eadd37",
"assets/assets/high_res_recipe_images/instant_curry_suppe.jpeg": "dbb9859b10d6e67f9d0e2db1609e5f59",
"assets/assets/high_res_recipe_images/zucchinipaeckchen.jpeg": "ea2f609af6ff36fd1aca7576b0a94370",
"assets/assets/high_res_recipe_images/gyros_mit_seitan.jpeg": "8eeda69f24118a60a8457b7902085881",
"assets/assets/high_res_recipe_images/vegane_bratwuerste.jpeg": "56e472aa8ed450ca57052499ab764d5a",
"assets/assets/high_res_recipe_images/ratatouille_pies.jpeg": "d3992c5d4d69aa0b767520ef739e461b",
"assets/assets/high_res_recipe_images/rigatoni_mit_geschmorter_zucchini.jpeg": "e8084cd13d7268d87d9e0c85148e8d89",
"assets/assets/high_res_recipe_images/polenta_mit_austernpilzen.jpeg": "48291cc3193782e7a50de3612ba4916e",
"assets/assets/high_res_recipe_images/kraeuterpolenta.jpeg": "0b8014fe76620b5caee02cab632d8768",
"assets/assets/high_res_recipe_images/guacamole.jpeg": "f8dd6a2f4dff5a122fd33479b3d69ee4",
"assets/assets/high_res_recipe_images/canapes.jpeg": "07b1b7b7fea6ec580e31b679c5815f6f",
"assets/assets/high_res_recipe_images/recipe_bundles_background.png": "9e65c7c53eed1e860294b7f6eaa54b32",
"assets/assets/high_res_recipe_images/cannelloni_mit_artischocken.jpeg": "3bcb114eddadd3660dc6bf932ae61d13",
"assets/assets/high_res_recipe_images/thai_reisnudeln.jpeg": "a14c0f85543ea122e18a5580b6b376a0",
"assets/assets/high_res_recipe_images/radieschensalat.jpeg": "2edc1d43b83ae7dcc070e9a5f64493db",
"assets/assets/high_res_recipe_images/seitan_frikassee.jpeg": "3c660e67f17a40ed330222001b340bf1",
"assets/assets/high_res_recipe_images/veganer_caprese.jpeg": "ddc33e33f5eda0e179f351d77958a019",
"assets/assets/high_res_recipe_images/shakshuka.jpeg": "79525afab5e7f8be7065444fbc6c032c",
"assets/assets/high_res_recipe_images/veganer_linseneintopf.jpeg": "71673272c28a0c4b3858c2b0b2822f17",
"assets/assets/high_res_recipe_images/vegan_beef_und_broccoli.jpeg": "7f3e0e7161af7715033cadb422ef734e",
"assets/assets/high_res_recipe_images/suesskartoffel_strudel.jpeg": "615bb6bd294a8513759de3e601f1ed4a",
"assets/assets/high_res_recipe_images/gruene_fruehlingsminestrone.jpeg": "322994abe1418cfdfebb78b340c79af1",
"assets/assets/high_res_recipe_images/pasta_mit_avocado_gruenkohl_pesto.jpeg": "f0d7f1f96d586486459a9feab2e88349",
"assets/assets/high_res_recipe_images/loaded_hummus.jpeg": "d56d92714ef5caec69e70d71d0b38244",
"assets/assets/high_res_recipe_images/japchae.jpeg": "fb583e7b06ef885f6b9f2365eda8ffd0",
"assets/assets/high_res_recipe_images/veganes_seitan_schnitzel.jpeg": "74d741c451e522973ecaa14ef1a7e59f",
"assets/assets/high_res_recipe_images/donburi.jpeg": "12d6324a8b3f433c8f359b730fd9bc6a",
"assets/assets/high_res_recipe_images/mandel_drink_stock_image.jpeg": "90760d1a66a9ece48395ffa9eded306d",
"assets/assets/high_res_recipe_images/vegane_pide_mit_spinat.jpeg": "22181393e3d0bc29983860cb7befc2d2",
"assets/assets/portion_images/milk_portion.png": "35e1d5c08bcabc8a5c78029e03bb328d",
"assets/assets/portion_images/saltysnacks_portion.png": "128f505514e8adda5e6b026b5ae4242d",
"assets/assets/portion_images/cheese_portion.png": "11c528567dc3bde1f4862823e2652601",
"assets/assets/portion_images/pasta_portion.png": "34dd18cee387c96a9e58b4ff928ac309",
"assets/assets/portion_images/softdrink_portion.png": "45190a87dea98108e423187603f5afa6",
"assets/assets/portion_images/deli_portion.png": "80d3624074c116c04d90738382f57cfc",
"assets/assets/portion_images/bread_portion.png": "11522c16d348ed02f5d3198ce090f570",
"assets/assets/portion_images/frenchfries_portion.png": "1f2e5b64bf015bf00ae0ae27a9e1f32b",
"assets/assets/portion_images/coffee_portion.png": "54417b7599869b0acbd8b78f1bfb3077",
"assets/assets/portion_images/rice_portion.png": "aa98378a4415c35e761902bd7f1b1e3d",
"assets/assets/portion_images/eggs_portion.png": "050250605cc440d3f014cd44676f1ea7",
"assets/assets/portion_images/meat_portion.png": "11f46e277f1d6b51369e88b300ccf92a",
"assets/assets/portion_images/poultry_portion.png": "0f5a4682ba36099f4281fb11b658c614",
"assets/assets/portion_images/veggie_portion.png": "a6a76720f9b5caac1c96900e479fd67d",
"assets/assets/fi-rr-thumbs-down.svg": "fa4e262fb947a758e5647e831cc3abe1",
"assets/assets/replacement_foods/fish.jpeg": "fb70eea9abf4dfb9211f7d476ce5a0e2",
"assets/assets/replacement_foods/yogurt.jpeg": "6b5a8d1baba4947298788acfc7814337",
"assets/assets/replacement_foods/egg.jpeg": "c2e2e97ec73066e888849b16ec13807e",
"assets/assets/replacement_foods/pizza.jpeg": "f8725e74d9e2ebc03c9be69810dbc5aa",
"assets/assets/replacement_foods/cheese.jpeg": "9aff7a32cea83119c203c799a3d3e21f",
"assets/assets/replacement_foods/cream.jpeg": "8d13aace2854fa426ccb6b2008e707a4",
"assets/assets/replacement_foods/meat.jpeg": "42d3ccdc0c797e4c7b1664c1365b4ca6",
"assets/assets/replacement_foods/sweets.jpeg": "9e04eeb7876ef2c1ad36e79f00dfc5a3",
"assets/assets/replacement_foods/milk.jpeg": "564ecaabbc005dd0d6a28596e39a02ab",
"assets/assets/replacement_foods/butter.jpeg": "54a3029499a2db3453b3b2214801f125",
"assets/assets/replacement_foods/honey.jpeg": "d0bf8f259c799cfbea9fcfabe34267b8",
"assets/assets/back.png": "3535e4c46ab9870786d68b2d377a3389",
"assets/assets/fi-rr-search.svg": "fc732f902c005b51cc6ed27ba09c6abd",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
