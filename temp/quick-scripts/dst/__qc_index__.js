
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');
require('./assets/script/currency/basis');
require('./assets/script/currency/music');
require('./assets/script/currency/weixin_ty');
require('./assets/script/game/aiperception');
require('./assets/script/game/booth');
require('./assets/script/game/devourcircle');
require('./assets/script/game/exsettlement');
require('./assets/script/game/follower');
require('./assets/script/game/followerlist');
require('./assets/script/game/game');
require('./assets/script/game/gameRank');
require('./assets/script/game/interact');
require('./assets/script/game/map');
require('./assets/script/game/minimaplocat');
require('./assets/script/game/renwu');
require('./assets/script/game/settlement');
require('./assets/script/game/skills');
require('./assets/script/index/index');
require('./assets/script/index/shop');
require('./assets/script/index/skin');
require('./assets/script/longin/login');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();