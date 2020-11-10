"use strict";
cc._RF.push(module, '70b3cVVkNhCZZcGYEBQtGd4', 'settlement');
// script/game/settlement.js

"use strict";

var _interact = require("./interact.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

var settlement = cc.Class({
  "extends": cc.Component,
  properties: {
    bcsr: cc.Label,
    rank: cc.Node,
    rankItem: cc.Prefab
  },
  init: function init(data) {
    this.gold = Number(data.money);
    this.bcsr.string = data.money;
    basis.gold += this.gold;
    basis.settGold += this.gold;
    this.setRank();
  },
  setRank: function setRank() {
    for (var i = 0; i < _interact.interact._this.goldRnak.length; i++) {
      var node = cc.instantiate(this.rankItem);
      var nodeCom = node.getComponent('gameRank');
      node.x = 750;
      node.runAction(cc.sequence(cc.moveBy(0.2 * (i + 1), cc.v2(0, 0)), cc.moveBy(0.5, cc.v2(-750, 0))));
      nodeCom.init(i);
      node.parent = this.rank;
    }
  },
  doubleGold: function doubleGold() {
    basis.gold += this.gold;
    basis.settGold += this.gold;

    _interact.interact._this.openExset();
  },
  onLoad: function onLoad() {
    settlement._this = this;
  }
});
exports.settlement = settlement;

cc._RF.pop();