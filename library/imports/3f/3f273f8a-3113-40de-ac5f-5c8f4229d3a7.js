"use strict";
cc._RF.push(module, '3f273+KMRNA3qxfXI9CKdOn', 'followerlist');
// script/game/followerlist.js

"use strict";

var _game = require("./game.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

var followerlist = cc.Class({
  "extends": cc.Component,
  properties: {
    followerlist: cc.Node,
    follower: cc.Prefab
  },
  onLoad: function onLoad() {
    followerlist._this = this;
    this.followerPool = wxcur.setNodeBool(50, this.follower);
  },
  update: function update(e) {}
});
exports.followerlist = followerlist;

cc._RF.pop();