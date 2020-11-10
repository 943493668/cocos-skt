"use strict";
cc._RF.push(module, '71594oT51RBKbgnhq570hLb', 'game');
// script/game/game.js

"use strict";

var _followerlist = require("./followerlist.js");

var _interact = require("./interact.js");

var _music = require("./../currency/music.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

var game = cc.Class({
  "extends": cc.Component,
  properties: {
    dianchumb: cc.Node,
    caozuodi: cc.Node,
    caozuoopan: cc.Node,
    renwu: cc.Node,
    camera: cc.Node
  },
  onLoad: function onLoad() {
    game._this = this;
    this.gameStart = true;
    this.renwu.zIndex = 999999;
    this.renwu = this.renwu.getComponent('renwu');
    var manager = cc.director.getCollisionManager();
    manager.enabled = true; //manager.enabledDebugDraw = true;
    //manager.enabledDrawBoundingBox = true;

    this.dianchumb.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.dianchumb.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.dianchumb.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.renwu.zIndex = 2;
    var imgarr = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012'];
    imgarr.splice(imgarr.findIndex(function (res) {
      return res == basis.myfigure.imgName;
    }), 1);
    this.aiRomImg = this.randomArr(imgarr, basis.aiNum);
    console.log(this.aiRomImg);
    this.getCanvMoreHeight();
  },
  randomArr: function randomArr(arr, num) {
    var newArr = []; //创建一个新数组

    for (var i = 0; i < num; i++) {
      var temp = Math.floor(Math.random() * arr.length); //取随机下标

      newArr.push(arr[temp]); //添加到新数组

      arr.splice(temp, 1); //删除当前的数组元素,避免重复
    }

    return newArr;
  },
  start: function start() {
    this.bgm = _music.music._this.openMusic('', 'bgm2', true);
  },
  getCanvMoreHeight: function getCanvMoreHeight() {
    var size = cc.view.getFrameSize();
    this.height = 667 * size.width / 375 - size.height > 0 ? 0 : 667 * size.width / 375 - size.height;
    this.width = size.width;
  },
  touchStart: function touchStart(e) {
    if (this.renwu.death) return;
    this.yidongfig = true;
    this.touchStart = e.getLocation();
    this.caozuodi.stopAllActions();
    this.caozuodi.opacity = 255;
    this.caozuodi.y = this.touchStart.y - 667 + this.height;
    this.caozuodi.x = this.touchStart.x - 375;
  },
  touchMove: function touchMove(e) {
    if (this.renwu.death || !this.gameStart) {
      this.yidongfig = false;
      return;
    }

    ;
    var delta = e.getDelta();
    var angle = this.angle = wxcur.getAngle(0, 0, this.caozuoopan.x + delta.x, this.caozuoopan.y + delta.y);
    var hudu = angle * Math.PI / 180;
    var xiebian = Math.pow(Math.pow(this.caozuoopan.x + delta.x, 2) + Math.pow(this.caozuoopan.y + delta.y, 2), 0.5);
    var maxxiebian = Math.pow(Math.pow(191 / 2 * Math.sin(hudu), 2) + Math.pow(186 / 2 * Math.cos(hudu), 2), 0.5);

    if (xiebian >= maxxiebian) {
      this.caozuoopan.x = 191 / 2 * Math.sin(hudu);
      this.caozuoopan.y = 186 / 2 * Math.cos(hudu);
    } else {
      this.caozuoopan.x += delta.x;
      this.caozuoopan.y += delta.y;
    }
  },
  touchEnd: function touchEnd(e) {
    this.yidongfig = false;
    this.caozuoopan.y = 0;
    this.caozuoopan.x = 0;
    this.caozuodi.runAction(cc.fadeOut(0.5));
  },
  ydshijiao: function ydshijiao() {
    this.camera.x = this.renwu.node.x;
    this.camera.y = this.renwu.node.y;

    if (this.yidongfig) {
      _interact.interact._this.gaoguang.x = this.renwu.node.x;
      _interact.interact._this.gaoguang.y = this.renwu.node.y;
      this.renwu.yidong(this.angle);
    } else {
      this.renwu.node.yidongfig = false;
    }
  },
  yingcang: function yingcang(node) {
    var size = cc.view.getFrameSize();

    var v2 = game._this.camera.convertToNodeSpaceAR(cc.v2(node.x, node.y));

    v2.x += size.width;
    v2.y += size.height;

    if (v2.x > size.width + node.width / 2 || v2.x < -size.width - node.width / 2 || v2.y < -size.height - node.height / 2 || v2.y > size.height + node.height / 2) {
      node.opacity = 0;
    } else {
      node.opacity = 255;
    }
  },
  update: function update() {
    this.ydshijiao();
  }
});
exports.game = game;

cc._RF.pop();