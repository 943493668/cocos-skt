
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/interact.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9pbnRlcmFjdC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiYmFzaXMiLCJ3eGN1ciIsImludGVyYWN0IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ5aW5neSIsIk5vZGUiLCJkaWFuY2h1Iiwiemhhbnl6cyIsInpoYW9oenMiLCJqaWFzdXpzIiwibGFua2V6cyIsInNob3V5aXpzIiwianNzaiIsIkxhYmVsIiwibGtzaiIsInN5c2wiLCJ6aGFueWpkdCIsInpoYW55d3oiLCJidGJhaXBpbmciLCJ5b255dGFud2VpIiwid29kZWppbmJpIiwid29kZWppbmJpMiIsIndvZGVtaW5nemkiLCJ5b3V4aXBobXoiLCJ5b3V4aXBoamluYmkiLCJ5b3V4aXNoaWppYW4iLCJ3ZHhpYW9kaXR1dyIsImdhb2d1YW5nIiwic2tpbGwxIiwic2tpbGwyIiwicG9jaGFuUG9wdXAiLCJqaWVzdWFuUG9wdXAiLCJleGppZXN1YW5Qb3B1cCIsImppZXNodVBvcHVwIiwiZ2FtZUltZ0xpc3QiLCJTcHJpdGVBdGxhcyIsInpob25nY3Rpc2hpIiwiamlzaGF0aXNoaSIsImppbmdnYW90aXNoaSIsImppbmdnYW96aG16Iiwid2RkcWRqIiwid2RtYmRqIiwid2RtYmpkdCIsIlByb2dyZXNzQmFyIiwid2RtYm1zMSIsIndkbWJtczIiLCJ3ZG1ibXMzIiwib25Mb2FkIiwiX3RoaXMiLCJnYW1lIiwicmVud3UiLCJnZXRDb21wb25lbnQiLCJ4aWFvZGl0dXciLCJoZWlnaHQiLCJnYW1lVGltZSIsImUiLCJnb2xkIiwic3lnb2xkIiwibWNqZGdvbGQiLCJnb2xkUm5hayIsInpob25nY2hhbmciLCJzdHJpbmciLCJza2lsczNUaW1lIiwic2tpbHMxVGltZSIsInNraWxzMlRpbWUiLCJnYW1lTm1hZSIsIm9wZW5XYXJuaW5nIiwibmFtZSIsInN0b3BBbGxBY3Rpb25zIiwiYWN0aXZlIiwib3BhY2l0eSIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZmFkZUluIiwiZmFkZU91dCIsImNhbGxGdW5jIiwic2V0R29sZCIsIm11c2ljIiwib3Blbk11c2ljIiwicG9wdXAiLCJkYXRhIiwicG9wdXBOb0JnIiwidXBkYUhhdmVCb290aCIsIm51bSIsIm9wZW5FeHNldCIsImV4c2V0dGxlbWVudCIsImluaXQiLCJnYW1lUmFua1Jld2FyZCIsInJuYWsiLCJvcGVuSnN0aXNoaSIsInR4dCIsIm5vZGUiLCJ1cGRlR2FtZVRpbWUiLCJkdCIsImdhbWVTdGFydCIsIk1hdGgiLCJjZWlsIiwiemhvbmdjZGgiLCJ6dWloZGpzIiwiY29uc29sZSIsImxvZyIsInJlcGVhdEZvcmV2ZXIiLCJzY2FsZVRvIiwibW92ZUJ5IiwidjIiLCJzcGF3biIsImZvbnRTaXplIiwiY29sb3IiLCJDb2xvciIsInBvcHVwR2FtZU92ZXIiLCJ4IiwibW92ZVRvIiwic2V0VGltZW91dCIsInNldHRsZW1lbnQiLCJtb25leSIsInJhbmtpbmciLCJnb3RvSW5kZXgiLCJzdG9wTXVzaWMiLCJiZ20iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9wZW5UaXBzIiwidHlwZSIsInVwZGF0ZSIsIk51bWJlciIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O2VBTmtCQSxPQUFPLENBQUMsT0FBRDtJQUFqQkMsaUJBQUFBOztnQkFDVUQsT0FBTyxDQUFDLFdBQUQ7SUFBakJFLGtCQUFBQTs7QUFRUixJQUFNQyxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3RCLGFBQVNELEVBQUUsQ0FBQ0UsU0FEVTtBQUd0QkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSyxJQURGO0FBRVJDLElBQUFBLE9BQU8sRUFBRU4sRUFBRSxDQUFDSyxJQUZKO0FBR1JFLElBQUFBLE9BQU8sRUFBRVAsRUFBRSxDQUFDSyxJQUhKO0FBSVJHLElBQUFBLE9BQU8sRUFBRVIsRUFBRSxDQUFD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b0UsT0FBTyxDQUFDOUgsUUFBUixHQUFtQkEsUUFBbkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYmFzaXMgfSA9IHJlcXVpcmUoJ2Jhc2lzJyk7XG5jb25zdCB7IHd4Y3VyIH0gPSByZXF1aXJlKCd3ZWl4aW5fdHknKTtcblxuaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4vZ2FtZS5qcyc7XG5pbXBvcnQgeyBzZXR0bGVtZW50IH0gZnJvbSAnLi9zZXR0bGVtZW50LmpzJ1xuaW1wb3J0IHsgbXVzaWMgfSBmcm9tICcuLy4uL2N1cnJlbmN5L211c2ljLmpzJztcbmltcG9ydCB7IGV4c2V0dGxlbWVudCB9IGZyb20gJy4vZXhzZXR0bGVtZW50LmpzJ1xuXG5cbmNvbnN0IGludGVyYWN0ID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgeWluZ3k6IGNjLk5vZGUsXG4gICAgICAgIGRpYW5jaHU6IGNjLk5vZGUsXG4gICAgICAgIHpoYW55enM6IGNjLk5vZGUsXG4gICAgICAgIHpoYW9oenM6IGNjLk5vZGUsXG4gICAgICAgIGppYXN1enM6IGNjLk5vZGUsXG4gICAgICAgIGxhbmtlenM6IGNjLk5vZGUsXG4gICAgICAgIHNob3V5aXpzOiBjYy5Ob2RlLFxuXG4gICAgICAgIGpzc2o6IGNjLkxhYmVsLFxuICAgICAgICBsa3NqOiBjYy5MYWJlbCxcbiAgICAgICAgc3lzbDogY2MuTGFiZWwsXG5cbiAgICAgICAgemhhbnlqZHQ6IGNjLk5vZGUsXG4gICAgICAgIHpoYW55d3o6IGNjLkxhYmVsLFxuXG4gICAgICAgIGJ0YmFpcGluZzogY2MuTGFiZWwsXG4gICAgICAgIHlvbnl0YW53ZWk6IGNjLkxhYmVsLFxuICAgICAgICB3b2RlamluYmk6IGNjLkxhYmVsLFxuICAgICAgICB3b2RlamluYmkyOiBjYy5MYWJlbCxcbiAgICAgICAgd29kZW1pbmd6aTogY2MuTGFiZWwsXG4gICAgICAgIHlvdXhpcGhtejogY2MuTm9kZSxcbiAgICAgICAgeW91eGlwaGppbmJpOiBjYy5Ob2RlLFxuXG4gICAgICAgIHlvdXhpc2hpamlhbjogY2MuTGFiZWwsXG4gICAgICAgIHdkeGlhb2RpdHV3OiBjYy5Ob2RlLFxuICAgICAgICBnYW9ndWFuZzogY2MuTm9kZSxcblxuICAgICAgICBza2lsbDE6IGNjLk5vZGUsXG4gICAgICAgIHNraWxsMjogY2MuTm9kZSxcblxuICAgICAgICBwb2NoYW5Qb3B1cDogY2MuTm9kZSxcbiAgICAgICAgamllc3VhblBvcHVwOiBjYy5Ob2RlLFxuICAgICAgICBleGppZXN1YW5Qb3B1cDogY2MuTm9kZSxcbiAgICAgICAgamllc2h1UG9wdXA6IGNjLk5vZGUsXG5cbiAgICAgICAgZ2FtZUltZ0xpc3Q6IGNjLlNwcml0ZUF0bGFzLFxuXG4gICAgICAgIHpob25nY3Rpc2hpOiBjYy5MYWJlbCxcbiAgICAgICAgamlzaGF0aXNoaTogY2MuTGFiZWwsXG4gICAgICAgIGppbmdnYW90aXNoaTogY2MuTm9kZSxcbiAgICAgICAgamluZ2dhb3pobXo6IGNjLkxhYmVsLFxuXG5cbiAgICAgICAgd2RkcWRqOiBjYy5MYWJlbCxcbiAgICAgICAgd2RtYmRqOiBjYy5MYWJlbCxcbiAgICAgICAgd2RtYmpkdDogY2MuUHJvZ3Jlc3NCYXIsXG4gICAgICAgIHdkbWJtczE6IGNjLkxhYmVsLFxuICAgICAgICB3ZG1ibXMyOiBjYy5MYWJlbCxcbiAgICAgICAgd2RtYm1zMzogY2MuTGFiZWwsXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaW50ZXJhY3QuX3RoaXMgPSB0aGlzO1xuICAgICAgICBnYW1lLl90aGlzLnJlbnd1LmdldENvbXBvbmVudCgncmVud3UnKS54aWFvZGl0dXcgPSB0aGlzLndkeGlhb2RpdHV3O1xuXG4gICAgICAgIHRoaXMueWluZ3kuaGVpZ2h0IC09IGdhbWUuX3RoaXMuaGVpZ2h0ICogMjtcbiAgICAgICAgdGhpcy5kaWFuY2h1LmhlaWdodCAtPSBnYW1lLl90aGlzLmhlaWdodCAqIDI7XG5cbiAgICAgICAgdGhpcy5nYW1lVGltZSA9IGJhc2lzLmdhbWVUaW1lO1xuICAgICAgICB0aGlzLmUgPSAwO1xuICAgICAgICB0aGlzLmdvbGQgPSAwO1xuICAgICAgICB0aGlzLnN5Z29sZCA9IDA7XG4gICAgICAgIHRoaXMubWNqZGdvbGQgPSAwO1xuICAgICAgICB0aGlzLmdvbGRSbmFrID0gW107XG4gICAgICAgIHRoaXMuemhvbmdjaGFuZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuanNzai5zdHJpbmcgPSBg5oyB57utJHtiYXNpcy5za2lsczNUaW1lfeenkmA7XG4gICAgICAgIHRoaXMubGtzai5zdHJpbmcgPSBg5oyB57utJHtiYXNpcy5za2lsczFUaW1lfeenkmA7XG4gICAgICAgIHRoaXMuc3lzbC5zdHJpbmcgPSBg5oyB57utJHtiYXNpcy5za2lsczJUaW1lfeenkmA7XG4gICAgICAgIHRoaXMud29kZW1pbmd6aS5zdHJpbmcgPSBiYXNpcy5nYW1lTm1hZTtcbiAgICB9LFxuICAgIG9wZW5XYXJuaW5nKG5hbWUpIHtcbiAgICAgICAgdGhpcy5qaW5nZ2Fvemhtei5zdHJpbmcgPSBuYW1lO1xuXG4gICAgICAgIHRoaXMuamluZ2dhb3Rpc2hpLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuamluZ2dhb3Rpc2hpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuamluZ2dhb3Rpc2hpLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmppbmdnYW90aXNoaS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5mYWRlSW4oMC4yKSxcbiAgICAgICAgICAgIGNjLmZhZGVJbigyKSxcbiAgICAgICAgICAgIGNjLmZhZGVPdXQoMC4yKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmppbmdnYW90aXNoaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkpXG4gICAgfSxcbiAgICBzZXRHb2xkKGdvbGQpIHtcbiAgICAgICAgaWYgKGdvbGQgLSB0aGlzLmdvbGQgPiAwKSB7XG4gICAgICAgICAgICBtdXNpYy5fdGhpcy5vcGVuTXVzaWMoJycsICdjaGFvcGFvc3p0ZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zeWdvbGQgKz0gZ29sZCAtIHRoaXMuZ29sZDtcbiAgICAgICAgdGhpcy5tY2pkZ29sZCArPSBnb2xkIC0gdGhpcy5nb2xkO1xuICAgIH0sXG4gICAgcG9wdXAoZSwgZGF0YSkge1xuICAgICAgICB3eGN1ci5wb3B1cCh0aGlzW2Ake2RhdGF9YF0pO1xuICAgIH0sXG4gICAgcG9wdXBOb0JnKGUsIGRhdGEpIHtcbiAgICAgICAgd3hjdXIucG9wdXAodGhpc1tgJHtkYXRhfWBdLCBmYWxzZSk7XG4gICAgfSxcbiAgICB1cGRhSGF2ZUJvb3RoKG51bSkge1xuICAgICAgICB0aGlzLnlvbnl0YW53ZWkuc3RyaW5nID0gYOaIkeeahOaRiuS9jToke251bX1gO1xuICAgIH0sXG4gICAgb3BlbkV4c2V0KCkge1xuICAgICAgICB0aGlzLnBvcHVwKCcnLCAnZXhqaWVzdWFuUG9wdXAnKTtcblxuICAgICAgICBleHNldHRsZW1lbnQuX3RoaXMuaW5pdChiYXNpcy5nYW1lUmFua1Jld2FyZFtnYW1lLl90aGlzLnJlbnd1LnJuYWtdLCBnYW1lLl90aGlzLnJlbnd1LnJuYWspO1xuICAgIH0sXG4gICAgb3BlbkpzdGlzaGkodHh0KSB7XG4gICAgICAgIHRoaXMuamlzaGF0aXNoaS5zdHJpbmcgPSB0eHQ7XG4gICAgICAgIHRoaXMuamlzaGF0aXNoaS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuamlzaGF0aXNoaS5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmppc2hhdGlzaGkubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmppc2hhdGlzaGkubm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5mYWRlSW4oMC4yKSxcbiAgICAgICAgICAgICAgICBjYy5mYWRlSW4oMSksXG4gICAgICAgICAgICAgICAgY2MuZmFkZU91dCgwLjIpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9LFxuXG5cblxuICAgIHVwZGVHYW1lVGltZShkdCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lVGltZSA8PSAwIHx8ICFnYW1lLl90aGlzLmdhbWVTdGFydCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmdhbWVUaW1lIC09IGR0O1xuICAgICAgICB0aGlzLmdhbWVUaW1lIDw9IDAgPyB0aGlzLmdhbWVUaW1lID0gMCA6ICcnO1xuICAgICAgICAvLyB0aGlzLnlvdXhpc2hpamlhbi5zdHJpbmcgPSBgJHtNYXRoLmZsb29yKHRoaXMuZ2FtZVRpbWUgLyA2MCl9OiR7TWF0aC5jZWlsKHRoaXMuZ2FtZVRpbWUgJSA2MCl9YDtcbiAgICAgICAgdGhpcy55b3V4aXNoaWppYW4uc3RyaW5nID0gTWF0aC5jZWlsKHRoaXMuZ2FtZVRpbWUpICsgJ3MnO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWVUaW1lIDwgKGJhc2lzLmdhbWVUaW1lIC8gMikgJiYgIXRoaXMuemhvbmdjaGFuZykge1xuICAgICAgICAgICAgdGhpcy56aG9uZ2NoYW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuemhvbmdjZGgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVUaW1lIDw9IDUpIHtcbiAgICAgICAgICAgIHRoaXMuemhvbmdjdGlzaGkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnp1aWhkanMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxMjMpXG4gICAgICAgICAgICAgICAgdGhpcy56aG9uZ2N0aXNoaS5ub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgY2MucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZhZGVJbigwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAsIDEuNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZUJ5KDAsIGNjLnYyKDAsIDM0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4zLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZUJ5KDAsIGNjLnYyKDAsIC0zNCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmFkZU91dCgwLjMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC40LCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHRoaXMuenVpaGRqcyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgdGhpcy56aG9uZ2N0aXNoaS5zdHJpbmcgPSBgJHtNYXRoLmNlaWwodGhpcy5nYW1lVGltZSl9YDtcbiAgICAgICAgICAgIHRoaXMuemhvbmdjdGlzaGkuZm9udFNpemUgPSAxMDA7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lVGltZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy56aG9uZ2N0aXNoaS5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDExOCwgNDYsIDQ0LCAyNTUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lVGltZSA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5ri45oiP57uT5p2fJylcbiAgICAgICAgICAgIHRoaXMuemhvbmdjdGlzaGkubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBHYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB6aG9uZ2NkaCgpIHtcbiAgICAgICAgdGhpcy56aG9uZ2N0aXNoaS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuemhvbmdjdGlzaGkubm9kZS54ID0gNzUwO1xuICAgICAgICB0aGlzLnpob25nY3Rpc2hpLm5vZGUucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsIGNjLnYyKDAsIDMwMCkpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpob25nY3Rpc2hpLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDIwMDApXG4gICAgfSxcbiAgICBwb3B1cEdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5wb2NoYW5Qb3B1cC5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXAoJycsICdwb2NoYW5Qb3B1cCcpO1xuICAgICAgICB9XG4gICAgICAgIGdhbWUuX3RoaXMuZ2FtZVN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9wdXAoJycsICdqaWVzaHVQb3B1cCcpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3B1cCgnJywgJ2ppZXNodVBvcHVwJyk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwKCcnLCAnamllc3VhblBvcHVwJyk7XG5cbiAgICAgICAgICAgIG11c2ljLl90aGlzLm9wZW5NdXNpYygnJywgJ2ppZXN1YW5qbCcpO1xuXG4gICAgICAgICAgICBzZXR0bGVtZW50Ll90aGlzLmluaXQoe1xuICAgICAgICAgICAgICAgIG1vbmV5OiB0aGlzLmdvbGQsXG4gICAgICAgICAgICAgICAgcmFua2luZzogdGhpcy5ybmFrXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAxNTAwKVxuICAgIH0sXG4gICAgZ290b0luZGV4KCkge1xuICAgICAgICBtdXNpYy5fdGhpcy5zdG9wTXVzaWMoZ2FtZS5fdGhpcy5iZ20pO1xuXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluZGV4XCIpO1xuICAgIH0sXG4gICAgb3BlblRpcHModHlwZSkge1xuICAgICAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlID09ICflj6zllKQnKSB7XG4gICAgICAgICAgICBub2RlID0gdGhpcy56aGFvaHpzO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ+WKoOmAnycpIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmppYXN1enM7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAn5o+95a6iJykge1xuICAgICAgICAgICAgbm9kZSA9IHRoaXMubGFua2V6cztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICfmlLbnm4onKSB7XG4gICAgICAgICAgICBub2RlID0gdGhpcy5zaG91eWl6cztcbiAgICAgICAgfVxuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5mYWRlSW4oMC4zKSxcbiAgICAgICAgICAgICAgICBjYy5mYWRlSW4oMiksXG4gICAgICAgICAgICAgICAgY2MuZmFkZU91dCgwLjMpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfSxcblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLnVwZGVHYW1lVGltZShkdCk7XG5cbiAgICAgICAgaWYgKHRoaXMubWNqZGdvbGQgPiAwKSB7XG4gICAgICAgICAgICBsZXQgZ29sZCA9IE1hdGguY2VpbCh0aGlzLnN5Z29sZCAqIGR0KTtcbiAgICAgICAgICAgIGdvbGQgPiB0aGlzLm1jamRnb2xkID8gZ29sZCA9IHRoaXMubWNqZGdvbGQgOiAnJztcbiAgICAgICAgICAgIHRoaXMubWNqZGdvbGQgLT0gZ29sZDtcblxuICAgICAgICAgICAgaW50ZXJhY3QuX3RoaXMud29kZWppbmJpLnN0cmluZyA9IE51bWJlcihpbnRlcmFjdC5fdGhpcy53b2RlamluYmkuc3RyaW5nKSArIGdvbGQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1jamRnb2xkIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN5Z29sZCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnRzLmludGVyYWN0ID0gaW50ZXJhY3Q7Il19