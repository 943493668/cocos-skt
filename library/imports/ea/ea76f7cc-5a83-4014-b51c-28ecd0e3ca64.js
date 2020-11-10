"use strict";
cc._RF.push(module, 'ea76ffMWoNAFLUcKOzQ48pk', 'skills');
// script/game/skills.js

"use strict";

var _game = require("./game.js");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {
    _game.game._this.yingcang(this.node);
  }
});

cc._RF.pop();