"use strict";
cc._RF.push(module, '9cf31vXuDtNwJV5cYwAH+gO', 'gameRank');
// script/game/gameRank.js

"use strict";

var _game = require("./game.js");

var _interact = require("./interact.js");

var _require = require('basis'),
    basis = _require.basis;

cc.Class({
  "extends": cc.Component,
  properties: {
    tx: cc.Sprite,
    mingzi: cc.Label,
    jinbi: cc.Label,
    mingci: cc.Label,
    jiangbei: cc.Label,
    mingci1: cc.Node,
    mingci2: cc.Node,
    mingci3: cc.Node
  },
  init: function init(index) {
    this.mingci.string = index + 1;

    if (index == 0) {
      this.mingci1.active = true;
    } else if (index == 1) {
      this.mingci2.active = true;
    } else if (index == 2) {
      this.mingci3.active = true;
    } else {
      this.mingci.node.active = true;
    }

    this.jiangbei.string = basis.gameRankReward[index];
    this.mingzi.string = _interact.interact._this.goldRnak[index].gameName;
    this.jinbi.string = Math.round(_interact.interact._this.goldRnak[index].gold);

    if (_interact.interact._this.goldRnak[index].gameName == basis.gameNmae) {
      this.node.getComponent(cc.Sprite).spriteFrame = _interact.interact._this.gameImgList.getSpriteFrame('自己di');
    }
  }
});

cc._RF.pop();