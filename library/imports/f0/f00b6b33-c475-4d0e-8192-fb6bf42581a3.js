"use strict";
cc._RF.push(module, 'f00b6szxHVNDoGS+2v0JYGj', 'aiperception');
// script/game/aiperception.js

"use strict";

var _require = require('basis'),
    basis = _require.basis;

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.parent = this.node.parent;
    this.node.getComponent(cc.CircleCollider).radius = basis.aiPerception;
    this.initList();
  },
  initList: function initList() {
    this.list = {
      zhurenwuList: {},
      //主人物
      kerenwuList: {},
      //客人物
      tanweiList: {},
      //摊位
      jnengList: {},
      //技能
      moenyList: {} //钱

    };
    return this.list;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    var node = other.node;
    if (node.name == this.parent.name) return;
    if (node.invincible > 0) return;
    var nameSplit = node.name.split('-');

    if (nameSplit[0] == '散') {
      this.list.kerenwuList[node._id] = node;
    } else if (nameSplit[0] == '摊位') {
      var nodeCom = node.getComponent('booth');
      if (this.list.zhurenwuList[nodeCom.zhanlingzhenode._id]) return;

      if (nodeCom.zhanlziszai) {
        delete this.list.tanweiList[node._id];
        return;
      }

      this.list.tanweiList[node._id] = node;
    } else if (nameSplit[0] == '吞噬圈') {
      if (node.parent.name == this.parent.name) return;

      var _nodeCom = node.parent.getComponent('renwu');

      if (_nodeCom.myfollowerList.length == 0) {
        delete this.list.zhurenwuList[node._id];
        return;
      }

      ;
      this.list.zhurenwuList[node._id] = node.parent;
    } else if (nameSplit[0] == '技能') {
      this.list.jnengList[node._id] = node;
    } else if (nameSplit[0] == '钞票') {
      this.list.moenyList[node._id] = node;
    }
  },
  onCollisionExit: function onCollisionExit(other, self) {
    var node = other.node;
    if (node.name == this.parent.name) return;
    if (node.invincible > 0 || this.parent.invincible > 0) return;
    var nameSplit = node.name.split('-');

    if (nameSplit[0] == '散') {
      delete this.list.kerenwuList[node._id];
    } else if (nameSplit[0] == '摊位') {
      delete this.list.tanweiList[node._id];
    } else if (nameSplit[0] == '吞噬圈') {
      delete this.list.zhurenwuList[node._id];
    } else if (nameSplit[0] == '技能') {
      delete this.list.jnengList[node._id];
    } else if (nameSplit[0] == '钞票') {
      delete this.list.moenyList[node._id];
    }
  }
});

cc._RF.pop();