"use strict";
cc._RF.push(module, '58f85xqJVdE64m1uPUBvmE8', 'devourcircle');
// script/game/devourcircle.js

"use strict";

var _require = require('basis'),
    basis = _require.basis;

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {
    this.parent = this.node.parent;
    this.parentCom = this.parent.getComponent('renwu');
  },
  onCollisionStay: function onCollisionStay(other, self) {
    var node = other.node;
    var renwu = node.parent.getComponent('renwu');
    if (node.group == 'ai感知圈') return;
    if (this.parentCom.myfollowerList.length / renwu.myfollowerList.length - 1 <= basis.devourLimit) return;

    if (renwu.myfollowerList == 0) {
      if (renwu.aiPerList) {
        delete renwu.aiPerList.zhurenwuList[node.parent._id];
      }
    } else {
      renwu.beDevours(this.parent);
    }
  }
});

cc._RF.pop();