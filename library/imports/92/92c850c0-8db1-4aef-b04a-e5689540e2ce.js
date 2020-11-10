"use strict";
cc._RF.push(module, '92c85DAjbFK77BK5WiVQOLO', 'minimaplocat');
// script/game/minimaplocat.js

"use strict";

var _interact = require("./interact.js");

cc.Class({
  "extends": cc.Component,
  properties: {
    bolan: cc.Node,
    dwtp: cc.Sprite
  },
  onLoad: function onLoad() {
    this.bolan.width = this.node.width;
    this.bolan.height = this.node.height;
    this.bolan.runAction(cc.repeatForever(cc.sequence(cc.spawn(cc.scaleTo(0.5, 2), cc.fadeOut(0.5)), cc.scaleTo(0, 1), cc.fadeIn(0))));
    this.bolan.active = false;

    if (this.node.typeNmae == 'booth') {
      this.dwtp.spriteFrame = _interact.interact._this.gameImgList.getSpriteFrame('白色背景');
    }
  }
});

cc._RF.pop();