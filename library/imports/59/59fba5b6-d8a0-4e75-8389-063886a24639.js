"use strict";
cc._RF.push(module, '59fbaW22KBOdYOJBjiGokY5', 'shop');
// script/index/shop.js

"use strict";

var _index = require("./index.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

cc.Class({
  "extends": cc.Component,
  properties: {
    skin: cc.Prefab,
    myfigure: dragonBones.ArmatureDisplay,
    figureWords: cc.Label,
    freeUseBut: cc.Node,
    figureFun: cc.Label,
    shopList: cc.Node,
    funBut1: cc.Node,
    funBut2: cc.Node,
    funBut3: cc.Node
  },
  onLoad: function onLoad() {
    this.myfigureData = basis.myfigure;
    this.wearSkil = null;
    this.curSkin = null;
    this.setMyFigure();
    this.addShopFigure();
  },
  addShopFigure: function addShopFigure() {
    for (var i = 0; i < basis.figureList.length; i++) {
      var node = cc.instantiate(this.skin);
      node.getComponent('skin').init(basis.figureList[i], this);
      node.figureListIndex = i;
      node.parent = this.shopList;
    }
  },
  confirmSwitchSkin: function confirmSwitchSkin() {
    var wearSkilData = basis.figureList[this.wearSkil.node.figureListIndex];
    var curSkinData = basis.figureList[this.curSkin.node.figureListIndex];
    wearSkilData.use = false;
    curSkinData.use = true;
    this.wearSkil.init(wearSkilData, this);
    this.curSkin.init(curSkinData, this);
    basis.myfigure = this.curSkin.skinData;
    basis.myfigureIndex = this.curSkin.node.figureListIndex;

    _index.index._this.setrenwu();

    this.wearSkil = this.curSkin;
    this.curSkin = null;
    this.setMyFigure();
  },
  buySkin: function buySkin() {
    var data = basis.figureList[this.curSkin.node.figureListIndex];

    if (basis.gold < data.gold) {
      _index.index._this.popup('', 'goldNotEnoughPopup');

      return;
    }

    basis.gold -= data.gold;

    _index.index._this.setGold();

    data.hava = true;
    this.curSkin.init(data, this);
    this.setMyFigure();
  },
  trialSkin: function trialSkin() {
    basis.myfigure = this.curSkin.skinData;

    _index.index._this.gotoGame();
  },
  setMyFigure: function setMyFigure() {
    this.funBut1.active = false;
    this.funBut2.active = false;
    this.funBut3.active = false;
    this.myfigure.armatureName = this.myfigureData.imgName;
    this.myfigure.playAnimation('行走');
    this.myfigure.node.height = this.myfigureData.height;
    this.figureWords.string = this.myfigureData.figureWord;
    this.figureFun.string = "\u89D2\u8272\u79FB\u52A8\u901F\u5EA6+" + this.myfigureData.effect * 100 + "%";

    if (this.myfigureData.hava) {
      this.freeUseBut.active = false;

      if (!this.myfigureData.use) {
        this.funBut3.active = true;
      }
    } else {
      this.freeUseBut.active = true;

      if (this.myfigureData.type == 'gold') {
        this.funBut2.active = true;
      } else {
        this.funBut1.active = true;
      }
    }
  },
  update: function update(dt) {}
});

cc._RF.pop();