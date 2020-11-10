"use strict";
cc._RF.push(module, '96d05jNc+FHgoqJ3y+7x92D', 'interact');
// script/game/interact.js

"use strict";

var _game = require("./game.js");

var _settlement = require("./settlement.js");

var _music = require("./../currency/music.js");

var _exsettlement = require("./exsettlement.js");

var _require = require('basis'),
    basis = _require.basis;

var _require2 = require('weixin_ty'),
    wxcur = _require2.wxcur;

var interact = cc.Class({
  "extends": cc.Component,
  properties: {
    yingy: cc.Node,
    dianchu: cc.Node,
    zhanyzs: cc.Node,
    zhaohzs: cc.Node,
    jiasuzs: cc.Node,
    lankezs: cc.Node,
    shouyizs: cc.Node,
    jssj: cc.Label,
    lksj: cc.Label,
    sysl: cc.Label,
    zhanyjdt: cc.Node,
    zhanywz: cc.Label,
    btbaiping: cc.Label,
    yonytanwei: cc.Label,
    wodejinbi: cc.Label,
    wodejinbi2: cc.Label,
    wodemingzi: cc.Label,
    youxiphmz: cc.Node,
    youxiphjinbi: cc.Node,
    youxishijian: cc.Label,
    wdxiaodituw: cc.Node,
    gaoguang: cc.Node,
    skill1: cc.Node,
    skill2: cc.Node,
    pochanPopup: cc.Node,
    jiesuanPopup: cc.Node,
    exjiesuanPopup: cc.Node,
    jieshuPopup: cc.Node,
    gameImgList: cc.SpriteAtlas,
    zhongctishi: cc.Label,
    jishatishi: cc.Label,
    jinggaotishi: cc.Node,
    jinggaozhmz: cc.Label,
    wddqdj: cc.Label,
    wdmbdj: cc.Label,
    wdmbjdt: cc.ProgressBar,
    wdmbms1: cc.Label,
    wdmbms2: cc.Label,
    wdmbms3: cc.Label
  },
  onLoad: function onLoad() {
    interact._this = this;
    _game.game._this.renwu.getComponent('renwu').xiaodituw = this.wdxiaodituw;
    this.yingy.height -= _game.game._this.height * 2;
    this.dianchu.height -= _game.game._this.height * 2;
    this.gameTime = basis.gameTime;
    this.e = 0;
    this.gold = 0;
    this.sygold = 0;
    this.mcjdgold = 0;
    this.goldRnak = [];
    this.zhongchang = false;
    this.jssj.string = "\u6301\u7EED" + basis.skils3Time + "\u79D2";
    this.lksj.string = "\u6301\u7EED" + basis.skils1Time + "\u79D2";
    this.sysl.string = "\u6301\u7EED" + basis.skils2Time + "\u79D2";
    this.wodemingzi.string = basis.gameNmae;
  },
  openWarning: function openWarning(name) {
    var _this = this;

    this.jinggaozhmz.string = name;
    this.jinggaotishi.stopAllActions();
    this.jinggaotishi.active = true;
    this.jinggaotishi.opacity = 0;
    this.jinggaotishi.runAction(cc.sequence(cc.fadeIn(0.2), cc.fadeIn(2), cc.fadeOut(0.2), cc.callFunc(function () {
      _this.jinggaotishi.active = false;
    })));
  },
  setGold: function setGold(gold) {
    if (gold - this.gold > 0) {
      _music.music._this.openMusic('', 'chaopaosztd');
    }

    this.sygold += gold - this.gold;
    this.mcjdgold += gold - this.gold;
  },
  popup: function popup(e, data) {
    wxcur.popup(this["" + data]);
  },
  popupNoBg: function popupNoBg(e, data) {
    wxcur.popup(this["" + data], false);
  },
  updaHaveBooth: function updaHaveBooth(num) {
    this.yonytanwei.string = "\u6211\u7684\u644A\u4F4D:" + num;
  },
  openExset: function openExset() {
    this.popup('', 'exjiesuanPopup');

    _exsettlement.exsettlement._this.init(basis.gameRankReward[_game.game._this.renwu.rnak], _game.game._this.renwu.rnak);
  },
  openJstishi: function openJstishi(txt) {
    this.jishatishi.string = txt;
    this.jishatishi.node.active = true;
    this.jishatishi.node.opacity = 0;
    this.jishatishi.node.stopAllActions();
    this.jishatishi.node.runAction(cc.sequence(cc.fadeIn(0.2), cc.fadeIn(1), cc.fadeOut(0.2)));
  },
  updeGameTime: function updeGameTime(dt) {
    if (this.gameTime <= 0 || !_game.game._this.gameStart) return;
    this.gameTime -= dt;
    this.gameTime <= 0 ? this.gameTime = 0 : ''; // this.youxishijian.string = `${Math.floor(this.gameTime / 60)}:${Math.ceil(this.gameTime % 60)}`;

    this.youxishijian.string = Math.ceil(this.gameTime) + 's';

    if (this.gameTime < basis.gameTime / 2 && !this.zhongchang) {
      this.zhongchang = true;
      this.zhongcdh();
    }

    if (this.gameTime <= 5) {
      this.zhongctishi.node.active = true;

      if (!this.zuihdjs) {
        console.log(123);
        this.zhongctishi.node.runAction(cc.repeatForever(cc.sequence(cc.fadeIn(0), cc.scaleTo(0, 1.5), cc.moveBy(0, cc.v2(0, 34)), cc.spawn(cc.scaleTo(0.3, 1), cc.moveBy(0, cc.v2(0, -34))), cc.fadeOut(0.3), cc.scaleTo(0.4, 1))));
        this.zuihdjs = true;
      }

      this.zhongctishi.string = "" + Math.ceil(this.gameTime);
      this.zhongctishi.fontSize = 100;

      if (this.gameTime <= 3) {
        this.zhongctishi.node.color = new cc.Color(118, 46, 44, 255);
      }
    }

    if (this.gameTime <= 0) {
      console.log('游戏结束');
      this.zhongctishi.node.active = false;
      this.popupGameOver();
    }
  },
  zhongcdh: function zhongcdh() {
    var _this2 = this;

    this.zhongctishi.node.active = true;
    this.zhongctishi.node.x = 750;
    this.zhongctishi.node.runAction(cc.moveTo(0.5, cc.v2(0, 300)));
    setTimeout(function () {
      _this2.zhongctishi.node.active = false;
    }, 2000);
  },
  popupGameOver: function popupGameOver() {
    var _this3 = this;

    if (this.pochanPopup.active) {
      this.popup('', 'pochanPopup');
    }

    _game.game._this.gameStart = false;
    this.popup('', 'jieshuPopup');
    setTimeout(function () {
      _this3.popup('', 'jieshuPopup');

      _this3.popup('', 'jiesuanPopup');

      _music.music._this.openMusic('', 'jiesuanjl');

      _settlement.settlement._this.init({
        money: _this3.gold,
        ranking: _this3.rnak
      });
    }, 1500);
  },
  gotoIndex: function gotoIndex() {
    _music.music._this.stopMusic(_game.game._this.bgm);

    cc.director.loadScene("index");
  },
  openTips: function openTips(type) {
    var node = null;

    if (type == '召唤') {
      node = this.zhaohzs;
    } else if (type == '加速') {
      node = this.jiasuzs;
    } else if (type == '揽客') {
      node = this.lankezs;
    } else if (type == '收益') {
      node = this.shouyizs;
    }

    node.stopAllActions();
    node.active = true;
    node.opacity = 0;
    node.runAction(cc.sequence(cc.fadeIn(0.3), cc.fadeIn(2), cc.fadeOut(0.3), cc.callFunc(function () {
      node.active = false;
    })));
  },
  update: function update(dt) {
    this.updeGameTime(dt);

    if (this.mcjdgold > 0) {
      var gold = Math.ceil(this.sygold * dt);
      gold > this.mcjdgold ? gold = this.mcjdgold : '';
      this.mcjdgold -= gold;
      interact._this.wodejinbi.string = Number(interact._this.wodejinbi.string) + gold;

      if (this.mcjdgold <= 0) {
        this.sygold = 0;
      }
    }
  }
});
exports.interact = interact;

cc._RF.pop();