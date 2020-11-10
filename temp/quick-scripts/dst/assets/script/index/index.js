
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/index/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5f1d9xXEhDDKi/WhpVRe1i', 'index');
// script/index/index.js

"use strict";

var _music = require("./../currency/music.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

var index = cc.Class({
  "extends": cc.Component,
  properties: {
    glod: cc.Label,
    glod2: cc.Label,
    gameName: cc.Label,
    getGoldPopup: cc.Node,
    changeSkinPopup: cc.Node,
    goldNotEnoughPopup: cc.Node,
    setUpPopup: cc.Node,
    preparePopup: cc.Node,
    wudi: cc.Label,
    touming: cc.Label,
    setUpMusic: cc.Node,
    setUpVibration: cc.Node,
    myLevel: cc.Label,
    experience: cc.Label,
    zbjd: cc.Label,
    zbrenwu: cc.Node,
    zbtips: cc.Label,
    qiandh: cc.Node,
    baitanbut: cc.Node,
    leveljinud: cc.Node,
    indexImg: cc.SpriteAtlas,
    xuanzhongjues: dragonBones.ArmatureDisplay
  },
  onLoad: function onLoad() {
    index._this = this;
    basis.myfigure = basis.figureList[basis.myfigureIndex];
    this.setGold();
    this.bgm = null;
    this.initLevel();

    if (basis.gameNmae == '') {
      this.romGameName();
    }

    this.wudi.string = basis.myGameStartInvin ? '关闭无敌' : '开启无敌';
    this.touming.string = basis.observerPattern ? '关闭透明' : '开启透明';
    this.zbtips.string = basis.prepareTips[Math.floor(Math.random() * basis.prepareTips.length)];
    this.setrenwu();
  },
  start: function start() {
    this.baitanbut.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.5, 1), cc.scaleTo(0.5, 0.9))));
    this.setUpImg();

    if (basis.settGold > 0) {
      this.qiandhfun();
    }

    if (basis.openMusic) {
      this.bgm = _music.music._this.openMusic('', 'bgm1', true);
    }
  },
  setrenwu: function setrenwu() {
    this.xuanzhongjues.armatureName = basis.myfigure.imgName;
    this.xuanzhongjues.playAnimation('首页');
  },
  qiandhfun: function qiandhfun() {
    var _this = this;

    this.qiandh.active = true;
    var gold = basis.settGold;
    this.glod.string = basis.gold - gold;

    var _loop = function _loop(i) {
      _this.qiandh.children[i].runAction(cc.sequence(cc.moveTo(0.5, cc.v2((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100)), cc.callFunc(function () {
        if (_this.sss) return;
        _this.sss = _music.music._this.openMusic('', 'chaosss');
      }), cc.moveBy(i * 0.1, cc.v2(0, 0)), cc.moveTo(0.3, cc.v2(-320.822998, 617.6790161)), cc.callFunc(function () {
        _this.glod.string = basis.gold - Math.floor(gold / _this.qiandh.children.length * (_this.qiandh.children.length - 1 - i));
      }), cc.spawn(cc.scaleTo(0.2, 2), cc.fadeOut(0.5))));
    };

    for (var i = 0; i < this.qiandh.children.length; i++) {
      _loop(i);
    }
  },
  startGame: function startGame(e, i) {
    var _this2 = this;

    if (i === void 0) {
      i = 0;
    }

    var data = {
      tx: '',
      name: ''
    };

    if (i == 0) {
      data.name = basis.gameNmae;
    } else {
      data.name = basis.gameNameList[Math.floor(Math.random() * basis.gameNameList.length)];
    }

    basis.gameAllName.push(data.name);
    this.zbjd.string = i + 1 + "/" + (Number(basis.aiNum) + 1);
    this.zbrenwu.children[i].children[1].active = true;
    this.zbrenwu.children[i].children[1].getComponent(cc.Label).string = data.name;

    if (i == basis.aiNum) {
      _music.music._this.stopMusic(this.bgm);

      this.gotoGame();
      return;
    } else {
      setTimeout(function () {
        _this2.startGame('', i + 1);
      }, basis.prepareTime * (Math.random() * 2000) / 10);
    }
  },
  initLevel: function initLevel() {
    var Trophy = (basis.myExper - basis.upLevelEx[basis.myLevel - 2] ? basis.upLevelEx[basis.myLevel - 2] : 0) % 4;
    console.log(basis.levelName, basis.myLevel);
    this.myLevel.string = basis.levelName[basis.myLevel - 1];
    this.experience.string = "(" + basis.myExper + "/" + basis.upLevelEx[basis.myLevel - 1] + ")";
    this.leveljinud.width = basis.myExper / basis.upLevelEx[basis.myLevel - 1] * 220;
  },
  qiehuanwudi: function qiehuanwudi() {
    basis.myGameStartInvin = !basis.myGameStartInvin;

    if (basis.myGameStartInvin) {
      this.wudi.string = '关闭无敌';
    } else {
      this.wudi.string = '开启无敌';
    }
  },
  qiehuantoum: function qiehuantoum() {
    basis.observerPattern = !basis.observerPattern;

    if (basis.observerPattern) {
      this.touming.string = '关闭透明';

      if (!basis.myGameStartInvin) {
        this.qiehuanwudi();
      }
    } else {
      this.touming.string = '开启透明';
    }
  },
  qiehuanMusic: function qiehuanMusic() {
    basis.openMusic = !basis.openMusic;
    this.setUpImg();

    if (basis.openMusic) {
      this.bgm = _music.music._this.openMusic('', 'bgm1', true);
    } else {
      _music.music._this.stopMusic(this.bgm);
    }

    if (wxcur.is_WECHAT_GAME()) {
      wx.setStorageSync('openMusic', basis.openMusic);
    }
  },
  setUpImg: function setUpImg() {
    if (basis.openMusic) {
      this.setUpMusic.getComponent(cc.Sprite).spriteFrame = this.indexImg.getSpriteFrame('设置关闭');
    } else {
      this.setUpMusic.getComponent(cc.Sprite).spriteFrame = this.indexImg.getSpriteFrame('开启');
    }

    if (basis.openvibration) {
      this.setUpVibration.getComponent(cc.Sprite).spriteFrame = this.indexImg.getSpriteFrame('设置关闭');
    } else {
      this.setUpVibration.getComponent(cc.Sprite).spriteFrame = this.indexImg.getSpriteFrame('开启');
    }
  },
  qiehuanVibration: function qiehuanVibration() {
    basis.openvibration = !basis.openvibration;
    this.setUpImg();

    if (wxcur.is_WECHAT_GAME()) {
      wx.setStorageSync('openvibration', basis.openvibration);
    }
  },
  setGold: function setGold() {
    this.glod.string = basis.gold;
    this.glod2.string = basis.gold;
  },
  romGameName: function romGameName() {
    this.gameName.string = basis.gameNameList[Math.floor(basis.gameNameList.length * Math.random())];
    basis.gameNmae = this.gameName.string;
  },
  gotoGame: function gotoGame() {
    cc.director.loadScene("game");
  },
  shar: function shar() {
    console.log();
    wxcur.share();
  },
  popup: function popup(e, data) {
    wxcur.popup(this["" + data]);
  },
  popupNoBg: function popupNoBg(e, data) {
    wxcur.popup(this["" + data], false);
  }
});
exports.index = index;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsicmVxdWlyZSIsInd4Y3VyIiwiYmFzaXMiLCJpbmRleCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2xvZCIsIkxhYmVsIiwiZ2xvZDIiLCJnYW1lTmFtZSIsImdldEdvbGRQb3B1cCIsIk5vZGUiLCJjaGFuZ2VTa2luUG9wdXAiLCJnb2xkTm90RW5vdWdoUG9wdXAiLCJzZXRVcFBvcHVwIiwicHJlcGFyZVBvcHVwIiwid3VkaSIsInRvdW1pbmciLCJzZXRVcE11c2ljIiwic2V0VXBWaWJyYXRpb24iLCJteUxldmVsIiwiZXhwZXJpZW5jZSIsInpiamQiLCJ6YnJlbnd1IiwiemJ0aXBzIiwicWlhbmRoIiwiYmFpdGFuYnV0IiwibGV2ZWxqaW51ZCIsImluZGV4SW1nIiwiU3ByaXRlQXRsYXMiLCJ4dWFuemhvbmdqdWVzIiwiZHJhZ29uQm9uZXMiLCJBcm1hdHVyZURpc3BsYXkiLCJvbkxvYWQiLCJfdGhpcyIsIm15ZmlndXJlIiwiZmlndXJlTGlzdCIsIm15ZmlndXJlSW5kZXgiLCJzZXRHb2xkIiwiYmdtIiwiaW5pdExldmVsIiwiZ2FtZU5tYWUiLCJyb21HYW1lTmFtZSIsInN0cmluZyIsIm15R2FtZVN0YXJ0SW52aW4iLCJvYnNlcnZlclBhdHRlcm4iLCJwcmVwYXJlVGlwcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInNldHJlbnd1Iiwic3RhcnQiLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJzY2FsZVRvIiwic2V0VXBJbWciLCJzZXR0R29sZCIsInFpYW5kaGZ1biIsIm9wZW5NdXNpYyIsIm11c2ljIiwiYXJtYXR1cmVOYW1lIiwiaW1nTmFtZSIsInBsYXlBbmltYXRpb24iLCJhY3RpdmUiLCJnb2xkIiwiaSIsImNoaWxkcmVuIiwibW92ZVRvIiwidjIiLCJjYWxsRnVuYyIsInNzcyIsIm1vdmVCeSIsInNwYXduIiwiZmFkZU91dCIsInN0YXJ0R2FtZSIsImUiLCJkYXRhIiwidHgiLCJuYW1lIiwiZ2FtZU5hbWVMaXN0IiwiZ2FtZUFsbE5hbWUiLCJwdXNoIiwiTnVtYmVyIiwiYWlOdW0iLCJnZXRDb21wb25lbnQiLCJzdG9wTXVzaWMiLCJnb3RvR2FtZSIsInNldFRpbWVvdXQiLCJwcmVwYXJlVGltZSIsIlRyb3BoeSIsIm15RXhwZXIiLCJ1cExldmVsRXgiLCJjb25zb2xlIiwibG9nIiwibGV2ZWxOYW1lIiwid2lkdGgiLCJxaWVodWFud3VkaSIsInFpZWh1YW50b3VtIiwicWllaHVhbk11c2ljIiwiaXNfV0VDSEFUX0dBTUUiLCJ3eCIsInNldFN0b3JhZ2VTeW5jIiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJnZXRTcHJpdGVGcmFtZSIsIm9wZW52aWJyYXRpb24iLCJxaWVodWFuVmlicmF0aW9uIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzaGFyIiwic2hhcmUiLCJwb3B1cCIsInBvcHVwTm9CZyIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O2VBSGtCQSxPQUFPLENBQUMsV0FBRDtJQUFqQkMsaUJBQUFBOztnQkFDVUQsT0FBTyxDQUFDLE9BQUQ7SUFBakJFLGtCQUFBQTs7QUFJUixJQUFNQyxLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ25CLGFBQVNELEVBQUUsQ0FBQ0UsU0FETztBQUduQkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLElBQUksRUFBRUosRUFBRSxDQUFDSyxLQUREO0FBRVJDLElBQUFBLEtBQUssRUFBRU4sRUFBRSxDQUFDSyxLQUZGO0FBR1JFLElBQUFBLFFBQVEsRUFBRVAsRUFBRSxDQUFDSyxLQUhMO0FBSVJHLElBQUFBLFlBQVksRUFBRVIsRUFBRSxDQUFDUyxJQUpUO0FBS1JDLElBQUFBLGVBQWUsRUFBRVYsRUFBRSxDQUFDUyxJQUxaO0FBTVJFLElBQUFBLGtCQUFrQixFQUFFWCxFQUFFLENBQUNTLElB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S0FBSyxDQUFDaUYsWUFBTixDQUFtQmxDLElBQUksQ0FBQ0MsS0FBTCxDQUFXaEQsS0FBSyxDQUFDaUYsWUFBTixDQUFtQi9CLE1BQW5CLEdBQTRCSCxJQUFJLENBQUNFLE1BQUwsRUFBdkMsQ0FBbkIsQ0FBdkI7QUFDQWpELElBQUFBLEtBQUssQ0FBQ3lDLFFBQU4sR0FBaUIsS0FBS2hDLFFBQUwsQ0FBY2tDLE1BQS9CO0FBQ0gsR0F6TWtCO0FBME1uQjZDLEVBQUFBLFFBMU1tQixzQkEwTVI7QUFDUHRGLElBQUFBLEVBQUUsQ0FBQzJHLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNILEdBNU1rQjtBQTZNbkJDLEVBQUFBLElBN01tQixrQkE2TVo7QUFDSGpCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBaEcsSUFBQUEsS0FBSyxDQUFDaUgsS0FBTjtBQUNILEdBaE5rQjtBQWlObkJDLEVBQUFBLEtBak5tQixpQkFpTmJwQyxDQWpOYSxFQWlOVkMsSUFqTlUsRUFpTko7QUFDWC9FLElBQUFBLEtBQUssQ0FBQ2tILEtBQU4sQ0FBWSxVQUFRbkMsSUFBUixDQUFaO0FBQ0gsR0FuTmtCO0FBb05uQm9DLEVBQUFBLFNBcE5tQixxQkFvTlRyQyxDQXBOUyxFQW9OTkMsSUFwTk0sRUFvTkE7QUFDZi9FLElBQUFBLEtBQUssQ0FBQ2tILEtBQU4sQ0FBWSxVQUFRbkMsSUFBUixDQUFaLEVBQTZCLEtBQTdCO0FBQ0g7QUF0TmtCLENBQVQsQ0FBZDtBQXlOQXFDLE9BQU8sQ0FBQ2xILEtBQVIsR0FBZ0JBLEtBQWhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHd4Y3VyIH0gPSByZXF1aXJlKCd3ZWl4aW5fdHknKTtcbmNvbnN0IHsgYmFzaXMgfSA9IHJlcXVpcmUoJ2Jhc2lzJyk7XG5cbmltcG9ydCB7IG11c2ljIH0gZnJvbSAnLi8uLi9jdXJyZW5jeS9tdXNpYy5qcyc7XG5cbmNvbnN0IGluZGV4ID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZ2xvZDogY2MuTGFiZWwsXG4gICAgICAgIGdsb2QyOiBjYy5MYWJlbCxcbiAgICAgICAgZ2FtZU5hbWU6IGNjLkxhYmVsLFxuICAgICAgICBnZXRHb2xkUG9wdXA6IGNjLk5vZGUsXG4gICAgICAgIGNoYW5nZVNraW5Qb3B1cDogY2MuTm9kZSxcbiAgICAgICAgZ29sZE5vdEVub3VnaFBvcHVwOiBjYy5Ob2RlLFxuICAgICAgICBzZXRVcFBvcHVwOiBjYy5Ob2RlLFxuICAgICAgICBwcmVwYXJlUG9wdXA6IGNjLk5vZGUsXG5cbiAgICAgICAgd3VkaTogY2MuTGFiZWwsXG4gICAgICAgIHRvdW1pbmc6IGNjLkxhYmVsLFxuXG4gICAgICAgIHNldFVwTXVzaWM6IGNjLk5vZGUsXG4gICAgICAgIHNldFVwVmlicmF0aW9uOiBjYy5Ob2RlLFxuXG4gICAgICAgIG15TGV2ZWw6IGNjLkxhYmVsLFxuICAgICAgICBleHBlcmllbmNlOiBjYy5MYWJlbCxcblxuICAgICAgICB6YmpkOiBjYy5MYWJlbCxcbiAgICAgICAgemJyZW53dTogY2MuTm9kZSxcbiAgICAgICAgemJ0aXBzOiBjYy5MYWJlbCxcblxuICAgICAgICBxaWFuZGg6IGNjLk5vZGUsXG4gICAgICAgIGJhaXRhbmJ1dDogY2MuTm9kZSxcblxuICAgICAgICBsZXZlbGppbnVkOiBjYy5Ob2RlLFxuXG4gICAgICAgIGluZGV4SW1nOiBjYy5TcHJpdGVBdGxhcyxcblxuICAgICAgICB4dWFuemhvbmdqdWVzOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXlcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpbmRleC5fdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgYmFzaXMubXlmaWd1cmUgPSBiYXNpcy5maWd1cmVMaXN0W2Jhc2lzLm15ZmlndXJlSW5kZXhdO1xuXG4gICAgICAgIHRoaXMuc2V0R29sZCgpO1xuXG4gICAgICAgIHRoaXMuYmdtID0gbnVsbDtcblxuICAgICAgICB0aGlzLmluaXRMZXZlbCgpO1xuXG4gICAgICAgIGlmIChiYXNpcy5nYW1lTm1hZSA9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5yb21HYW1lTmFtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy53dWRpLnN0cmluZyA9IGJhc2lzLm15R2FtZVN0YXJ0SW52aW4gPyAn5YWz6Zet5peg5pWMJyA6ICflvIDlkK/ml6DmlYwnO1xuICAgICAgICB0aGlzLnRvdW1pbmcuc3RyaW5nID0gYmFzaXMub2JzZXJ2ZXJQYXR0ZXJuID8gJ+WFs+mXremAj+aYjicgOiAn5byA5ZCv6YCP5piOJztcblxuICAgICAgICB0aGlzLnpidGlwcy5zdHJpbmcgPSBiYXNpcy5wcmVwYXJlVGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiYXNpcy5wcmVwYXJlVGlwcy5sZW5ndGgpXTtcblxuICAgICAgICB0aGlzLnNldHJlbnd1KCk7XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmJhaXRhbmJ1dC5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC41LCAxKSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuNSwgMC45KVxuICAgICAgICAgICAgKVxuICAgICAgICApKVxuICAgICAgICB0aGlzLnNldFVwSW1nKCk7XG4gICAgICAgIGlmIChiYXNpcy5zZXR0R29sZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucWlhbmRoZnVuKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYXNpcy5vcGVuTXVzaWMpIHtcbiAgICAgICAgICAgIHRoaXMuYmdtID0gbXVzaWMuX3RoaXMub3Blbk11c2ljKCcnLCAnYmdtMScsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRyZW53dSgpIHtcbiAgICAgICAgdGhpcy54dWFuemhvbmdqdWVzLmFybWF0dXJlTmFtZSA9IGJhc2lzLm15ZmlndXJlLmltZ05hbWU7XG4gICAgICAgIHRoaXMueHVhbnpob25nanVlcy5wbGF5QW5pbWF0aW9uKCfpppbpobUnKTtcbiAgICB9LFxuICAgIHFpYW5kaGZ1bigpIHtcbiAgICAgICAgdGhpcy5xaWFuZGguYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZ29sZCA9IGJhc2lzLnNldHRHb2xkXG4gICAgICAgIHRoaXMuZ2xvZC5zdHJpbmcgPSBiYXNpcy5nb2xkIC0gZ29sZDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucWlhbmRoLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnFpYW5kaC5jaGlsZHJlbltpXS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuNSwgY2MudjIoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTAwLCAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAxMDApKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNzcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNzcyA9IG11c2ljLl90aGlzLm9wZW5NdXNpYygnJywgJ2NoYW9zc3MnKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoaSAqIDAuMSwgY2MudjIoMCwgMCkpLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjMsIGNjLnYyKC0zMjAuODIyOTk4LCA2MTcuNjc5MDE2MSkpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbG9kLnN0cmluZyA9IGJhc2lzLmdvbGQgLSBNYXRoLmZsb29yKGdvbGQgLyB0aGlzLnFpYW5kaC5jaGlsZHJlbi5sZW5ndGggKiAodGhpcy5xaWFuZGguY2hpbGRyZW4ubGVuZ3RoIC0gMSAtIGkpKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjIsIDIpLFxuICAgICAgICAgICAgICAgICAgICBjYy5mYWRlT3V0KDAuNSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGFydEdhbWUoZSwgaSA9IDApIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB0eDogJycsXG4gICAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgIGRhdGEubmFtZSA9IGJhc2lzLmdhbWVObWFlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhLm5hbWUgPSBiYXNpcy5nYW1lTmFtZUxpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmFzaXMuZ2FtZU5hbWVMaXN0Lmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgICAgIGJhc2lzLmdhbWVBbGxOYW1lLnB1c2goZGF0YS5uYW1lKTtcblxuICAgICAgICB0aGlzLnpiamQuc3RyaW5nID0gYCR7aSArIDF9LyR7TnVtYmVyKGJhc2lzLmFpTnVtKSArIDF9YFxuICAgICAgICB0aGlzLnpicmVud3UuY2hpbGRyZW5baV0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy56YnJlbnd1LmNoaWxkcmVuW2ldLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YS5uYW1lO1xuICAgICAgICBpZiAoaSA9PSBiYXNpcy5haU51bSkge1xuICAgICAgICAgICAgbXVzaWMuX3RoaXMuc3RvcE11c2ljKHRoaXMuYmdtKTtcbiAgICAgICAgICAgIHRoaXMuZ290b0dhbWUoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgnJywgaSArIDEpO1xuICAgICAgICAgICAgfSwgYmFzaXMucHJlcGFyZVRpbWUgKiAoTWF0aC5yYW5kb20oKSAqIDIwMDApIC8gMTApXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXRMZXZlbCgpIHtcbiAgICAgICAgY29uc3QgVHJvcGh5ID0gKGJhc2lzLm15RXhwZXIgLSBiYXNpcy51cExldmVsRXhbYmFzaXMubXlMZXZlbCAtIDJdID8gYmFzaXMudXBMZXZlbEV4W2Jhc2lzLm15TGV2ZWwgLSAyXSA6IDApICUgNDtcbiAgICAgICAgY29uc29sZS5sb2coYmFzaXMubGV2ZWxOYW1lLCBiYXNpcy5teUxldmVsKVxuICAgICAgICB0aGlzLm15TGV2ZWwuc3RyaW5nID0gYmFzaXMubGV2ZWxOYW1lW2Jhc2lzLm15TGV2ZWwgLSAxXTtcbiAgICAgICAgdGhpcy5leHBlcmllbmNlLnN0cmluZyA9IGAoJHtiYXNpcy5teUV4cGVyfS8ke2Jhc2lzLnVwTGV2ZWxFeFtiYXNpcy5teUxldmVsIC0gMV19KWA7XG5cbiAgICAgICAgdGhpcy5sZXZlbGppbnVkLndpZHRoID0gYmFzaXMubXlFeHBlciAvIChiYXNpcy51cExldmVsRXhbYmFzaXMubXlMZXZlbCAtIDFdKSAqIDIyMFxuICAgIH0sXG4gICAgcWllaHVhbnd1ZGkoKSB7XG4gICAgICAgIGJhc2lzLm15R2FtZVN0YXJ0SW52aW4gPSAhYmFzaXMubXlHYW1lU3RhcnRJbnZpbjtcbiAgICAgICAgaWYgKGJhc2lzLm15R2FtZVN0YXJ0SW52aW4pIHtcbiAgICAgICAgICAgIHRoaXMud3VkaS5zdHJpbmcgPSAn5YWz6Zet5peg5pWMJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53dWRpLnN0cmluZyA9ICflvIDlkK/ml6DmlYwnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHFpZWh1YW50b3VtKCkge1xuICAgICAgICBiYXNpcy5vYnNlcnZlclBhdHRlcm4gPSAhYmFzaXMub2JzZXJ2ZXJQYXR0ZXJuO1xuICAgICAgICBpZiAoYmFzaXMub2JzZXJ2ZXJQYXR0ZXJuKSB7XG4gICAgICAgICAgICB0aGlzLnRvdW1pbmcuc3RyaW5nID0gJ+WFs+mXremAj+aYjidcbiAgICAgICAgICAgIGlmICghYmFzaXMubXlHYW1lU3RhcnRJbnZpbikge1xuICAgICAgICAgICAgICAgIHRoaXMucWllaHVhbnd1ZGkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b3VtaW5nLnN0cmluZyA9ICflvIDlkK/pgI/mmI4nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHFpZWh1YW5NdXNpYygpIHtcbiAgICAgICAgYmFzaXMub3Blbk11c2ljID0gIWJhc2lzLm9wZW5NdXNpYztcblxuICAgICAgICB0aGlzLnNldFVwSW1nKCk7XG5cbiAgICAgICAgaWYgKGJhc2lzLm9wZW5NdXNpYykge1xuICAgICAgICAgICAgdGhpcy5iZ20gPSBtdXNpYy5fdGhpcy5vcGVuTXVzaWMoJycsICdiZ20xJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtdXNpYy5fdGhpcy5zdG9wTXVzaWModGhpcy5iZ20pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHd4Y3VyLmlzX1dFQ0hBVF9HQU1FKCkpIHtcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdvcGVuTXVzaWMnLCBiYXNpcy5vcGVuTXVzaWMpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldFVwSW1nKCkge1xuICAgICAgICBpZiAoYmFzaXMub3Blbk11c2ljKSB7XG4gICAgICAgICAgICB0aGlzLnNldFVwTXVzaWMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmluZGV4SW1nLmdldFNwcml0ZUZyYW1lKCforr7nva7lhbPpl60nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRVcE11c2ljLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pbmRleEltZy5nZXRTcHJpdGVGcmFtZSgn5byA5ZCvJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYXNpcy5vcGVudmlicmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFVwVmlicmF0aW9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pbmRleEltZy5nZXRTcHJpdGVGcmFtZSgn6K6+572u5YWz6ZetJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VXBWaWJyYXRpb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmluZGV4SW1nLmdldFNwcml0ZUZyYW1lKCflvIDlkK8nKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBxaWVodWFuVmlicmF0aW9uKCkge1xuICAgICAgICBiYXNpcy5vcGVudmlicmF0aW9uID0gIWJhc2lzLm9wZW52aWJyYXRpb247XG5cbiAgICAgICAgdGhpcy5zZXRVcEltZygpO1xuXG4gICAgICAgIGlmICh3eGN1ci5pc19XRUNIQVRfR0FNRSgpKSB7XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnb3BlbnZpYnJhdGlvbicsIGJhc2lzLm9wZW52aWJyYXRpb24pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldEdvbGQoKSB7XG4gICAgICAgIHRoaXMuZ2xvZC5zdHJpbmcgPSBiYXNpcy5nb2xkO1xuICAgICAgICB0aGlzLmdsb2QyLnN0cmluZyA9IGJhc2lzLmdvbGQ7XG4gICAgfSxcbiAgICByb21HYW1lTmFtZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lTmFtZS5zdHJpbmcgPSBiYXNpcy5nYW1lTmFtZUxpc3RbTWF0aC5mbG9vcihiYXNpcy5nYW1lTmFtZUxpc3QubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xuICAgICAgICBiYXNpcy5nYW1lTm1hZSA9IHRoaXMuZ2FtZU5hbWUuc3RyaW5nO1xuICAgIH0sXG4gICAgZ290b0dhbWUoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XG4gICAgfSxcbiAgICBzaGFyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygpXG4gICAgICAgIHd4Y3VyLnNoYXJlKCk7XG4gICAgfSxcbiAgICBwb3B1cChlLCBkYXRhKSB7XG4gICAgICAgIHd4Y3VyLnBvcHVwKHRoaXNbYCR7ZGF0YX1gXSk7XG4gICAgfSxcbiAgICBwb3B1cE5vQmcoZSwgZGF0YSkge1xuICAgICAgICB3eGN1ci5wb3B1cCh0aGlzW2Ake2RhdGF9YF0sIGZhbHNlKTtcbiAgICB9LFxufSk7XG5cbmV4cG9ydHMuaW5kZXggPSBpbmRleDsiXX0=