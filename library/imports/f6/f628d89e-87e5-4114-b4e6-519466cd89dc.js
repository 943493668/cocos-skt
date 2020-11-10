"use strict";
cc._RF.push(module, 'f628dieh+VBFLTmUZRmzYnc', 'skin');
// script/index/skin.js

"use strict";

var _music = require("./../currency/music.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

cc.Class({
  "extends": cc.Component,
  properties: {
    skin: dragonBones.ArmatureDisplay,
    typeBut1: cc.Node,
    typeBut2: cc.Node,
    typeBut3: cc.Node,
    typeBut4: cc.Node,
    gold: cc.Label,
    bg: cc.Node
  },
  init: function init(data, shop) {
    this.shop = shop;
    this.skinData = data;
    this.typeBut1.active = false;
    this.typeBut2.active = false;
    this.typeBut3.active = false;
    this.typeBut4.active = false;
    this.bg.color = new cc.Color(190, 190, 190, 255);
    this.skin.armatureName = data.imgName;

    if (data.hava) {
      if (data.use) {
        this.shop.wearSkil = this;
        this.typeBut2.active = true;
        this.bg.color = new cc.Color(255, 255, 255, 255);
      } else {
        this.typeBut1.active = true;
      }
    } else if (data.type == 'gold') {
      this.typeBut3.active = true;
      this.gold.string = data.gold;
    } else {
      this.typeBut4.active = true;
    }
  },
  switchSkin: function switchSkin() {
    _music.music._this.openMusic('', 'dianji');

    this.shop.myfigureData = this.skinData;
    this.shop.curSkin = this;
    this.shop.setMyFigure();
  }
});

cc._RF.pop();