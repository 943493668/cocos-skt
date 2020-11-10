"use strict";
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