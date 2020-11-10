"use strict";
cc._RF.push(module, 'a6fd9i3LIJJKqejKqQIDyRV', 'follower');
// script/game/follower.js

"use strict";

var _game = require("./game.js");

var _map = require("./map.js");

var _interact = require("./interact.js");

var _music = require("../currency/music.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

cc.Class({
  "extends": cc.Component,
  properties: {
    tx: dragonBones.ArmatureDisplay,
    jia1: cc.Node
  },
  onLoad: function onLoad() {
    this.diffX = 0;
    this.diffY = 0;
    this.summonSpeed = 1;
    this.tx.node.scaleX = Math.random() - 0.5 > 0 ? 0.3 : -0.3;
    this.tx.armatureName = "npc00" + Math.ceil(Math.random() * 5);
  },
  init: function init(index, follnum, parent) {
    var _this = this;

    var indexX = 0;
    var indexY = 0;
    var layer = 1;
    var layerTheNumber = 8;
    var angle = 0;
    this.parent = parent;
    this.node.group = '跟随客人物';
    this.node.name = "\u8DDF-\u5BA2\u4EBA\u7269-" + this.node._id;

    if (parent.group == '摊位') {
      this.tx.playAnimation('待机');
      this.yidtw(index);
      return;
    }

    if (parent.name == '我') {
      if (wxcur.is_WECHAT_GAME()) {
        if (basis.openvibration) {
          wx.vibrateShort();
        }
      } //music._this.openMusic('', 'tunshikeren');

    }

    this.jia1.active = true;
    this.jia1.opacity = 255;
    this.jia1.runAction(cc.sequence(cc.spawn(cc.moveBy(0.5, cc.v2(0, 20)), cc.fadeOut(0.5)), cc.callFunc(function () {
      _this.jia1.active = false;
    })));
    var parentCom = parent.getComponent('renwu');
    this.theOwnerName = parent.name;

    if (!this.node.initChar) {
      _map.map._this.map[this.node.mapY][this.node.mapX] = 0;

      _map.map._this.boothArrList.push({
        x: this.node.mapX,
        y: this.node.mapY
      });

      _map.map._this.boothArr.split("," + this.node.mapX + "_" + this.node.mapY + "__lf,").join('');
    }

    this.tx.armatureName = parentCom.imgName;
    this.tx.playAnimation('行走');
    this.node.tagIndex = index;
    layerTheNumber = Math.floor(360 / Math.floor(180 / (Math.PI / Math.tan(150 / 2 / (80 * 1.5)))));
    index += 1;
    countLayer(layerTheNumber);

    function countLayer(n) {
      var nlayer = Math.floor(360 / Math.floor(180 / (Math.PI / Math.tan(150 / 2 / (80 * (layer + 0.5))))));
      layerTheNumber = nlayer;

      if (index > nlayer) {
        index -= nlayer;
        layer += 1;
        countLayer(n);
      }
    }

    this.angle = Math.floor(360 / layerTheNumber) * index + 20;
    this.layer = layer;
    parentCom.follLevel = layer;
    parentCom.updeSpeed();
    this.initcoordX = Math.sin(this.angle * 2 * Math.PI / 360) * ((layer + .5) * 80);
    this.initcoordY = Math.cos(this.angle * 2 * Math.PI / 360) * ((layer + .5) * 80);
    this.targetX = this.initcoordX;
    this.targetY = this.initcoordY;
  },
  devourFigure: function devourFigure(node) {
    var _this2 = this;

    console.log(123);
    var nodeCom = node.getComponent('renwu');
    if (nodeCom.death) return;
    nodeCom.death = true;
    node.runAction(cc.sequence(cc.spawn(cc.moveTo(0.5, cc.v2(this.parent.x, this.parent.y)), //cc.rotateBy(0.5, 1080),
    cc.scaleTo(0.5, 0)), cc.callFunc(function () {
      node.scale = 1;
      node.active = false;
      nodeCom.lossMonery = nodeCom.gold;

      _map.map._this.addMoney(node.x, node.y, Math.floor(nodeCom.gold * basis.beatEachDropRate));

      nodeCom.updeGold(nodeCom.gold - Math.floor(nodeCom.gold * basis.beatEachDropRate));

      _interact.interact._this.openJstishi(_this2.parent.gameName + "\u541E\u5E76\u4E86" + node.gameName);

      if (node.name == '我') {
        _interact.interact._this.popup('', 'pochanPopup');
      } else {
        nodeCom.resurrection();
        setTimeout(function () {
          delete nodeCom.aiPerList.zhurenwuList[node._id];
        }, 0);
      }
    })));
  },
  yidtw: function yidtw(index) {
    var parentCom = this.parent.getComponent('booth');
    var width = (this.parent.width / 80 + 1) / 2;
    var height = (this.parent.height / 80 + 1) / 2;

    switch (parentCom.level) {
      case 4:
        if (index == 11) {
          this.initcoordX = 0 - width * 80;
          this.initcoordY = 0 - height % Math.floor(height) * 80;
        }

        if (index == 12) {
          this.initcoordX = 0 + width % Math.floor(width) * 80;
          this.initcoordY = 0 + height * 80;
        }

        if (index == 13) {
          this.initcoordX = 0 + width * 80;
          this.initcoordY = 0 - height % Math.floor(height) * 80;
        }

        if (index == 14) {
          this.initcoordX = 0 + width % Math.floor(width) * 80;
          this.initcoordY = 0 - height * 80;
        }

        if (index == 15) {
          this.initcoordX = 0 - width * 80;
          this.initcoordY = 0 + (height - 1) % 2 * 80;
        }

        if (index == 16) {
          this.initcoordX = 0 + width * 80;
          this.initcoordY = 0 + (height - 1) % 2 * 80;
        }

      case 3:
        if (index == 7) {
          this.initcoordX = 0 - width * 80;
          this.initcoordY = 0 - (height - 1) % 2 * 80;
        }

        if (index == 8) {
          this.initcoordX = 0 - (width - 1) * 80;
          this.initcoordY = 0 + height * 80;
        }

        if (index == 9) {
          this.initcoordX = 0 + width * 80;
          this.initcoordY = 0 - (height - 1) % 2 * 80;
        }

        if (index == 10) {
          this.initcoordX = 0 - (width - 1) * 80;
          this.initcoordY = 0 - height * 80;
        }

      case 2:
        if (index == 5) {
          this.initcoordX = 0 + (width - 1) * 80;
          this.initcoordY = 0 + height * 80;
        }

        if (index == 6) {
          this.initcoordX = 0 + (width - 1) * 80;
          this.initcoordY = 0 - height * 80;
        }

      case 1:
        if (index == 1) {
          this.initcoordX = 0 - width * 80;
          this.initcoordY = 0 + height % Math.floor(height) * 80;
        }

        if (index == 2) {
          this.initcoordX = 0 - width % Math.floor(width) * 80;
          this.initcoordY = 0 + height * 80;
        }

        if (index == 3) {
          this.initcoordX = 0 + width * 80;
          this.initcoordY = 0 + height % Math.floor(height) * 80;
        }

        if (index == 4) {
          this.initcoordX = 0 - width % Math.floor(width) * 80;
          this.initcoordY = 0 - height * 80;
        }

        break;
    }

    this.targetX = this.initcoordX;
    this.targetY = this.initcoordY;
    this.angle = this.initAngle = -wxcur.getAngle(this.targetX, this.targetY, 0, 0);
  },
  yidong: function yidong(me, gq) {
    if (gq === void 0) {
      gq = false;
    }

    var xiebia = Math.pow(Math.pow(this.initcoordX, 2) + Math.pow(this.initcoordY, 2), 0.5);
    this.targetX = me.x + Math.sin(this.angle * 2 * Math.PI / 360) * xiebia;
    this.targetY = me.y + Math.cos(this.angle * 2 * Math.PI / 360) * xiebia;
    this.diffX = this.targetX - this.node.x;
    this.diffY = this.targetY - this.node.y;
  },
  update: function update(e) {
    if (!this.parent) return;

    if (this.parent.yidongfig) {
      this.yidong(this.parent);
    }

    _game.game._this.yingcang(this.node);

    if (this.diffX == 0 && this.diffY == 0) {
      this.summonSpeed = 1;
      return;
    }

    var _ = 0,
        x = _.x,
        y = _.y;
    this.targetAngle = wxcur.getAngle(this.node.x, this.node.y, this.targetX, this.targetY);

    if (this.parent.group == '主人物') {
      var parCom = this.parent.getComponent('renwu');
      this.tx.node.scaleX = parCom.tx.node.scaleX / Math.abs(parCom.tx.node.scaleX) * 0.3;
    } else if (this.parent.group == '摊位') {
      this.node.x > this.parent.x ? this.tx.node.scaleX = -0.3 : this.tx.node.scaleX = 0.3;
    }

    if (this.parent.group == '摊位') {
      y = Math.cos(this.targetAngle * 2 * Math.PI / 360) * basis.movespeed * 1.5 * this.summonSpeed;
      x = Math.sin(this.targetAngle * 2 * Math.PI / 360) * basis.movespeed * 1.5 * this.summonSpeed;
    } else {
      var parent = this.parent.getComponent('renwu'); //parent.baseMovingSpeed = 1

      y = Math.cos(this.targetAngle * 2 * Math.PI / 360) * basis.movespeed * 1.5 * this.summonSpeed * parent.baseMovingSpeed;
      x = Math.sin(this.targetAngle * 2 * Math.PI / 360) * basis.movespeed * 1.5 * this.summonSpeed * parent.baseMovingSpeed;
    }

    if (this.diffX >= 0 && this.diffX - x <= 0 || this.diffX <= 0 && this.diffX - x >= 0) {
      this.node.x += this.diffX;
      this.diffX = 0;
    } else {
      this.node.x += x;
      this.diffX -= x;
    }

    if (this.diffY >= 0 && this.diffY - y <= 0 || this.diffY <= 0 && this.diffY - y >= 0) {
      this.node.y += this.diffY;
      this.diffY = 0;
    } else {
      this.node.y += y;
      this.diffY -= y;
    }

    if (this.node.x + x > basis.mapWidth / 2 || this.node.x + x < -(basis.mapWidth / 2)) {
      this.node.x = x > 0 ? basis.mapWidth / 2 : -(basis.mapWidth / 2);
    }

    if (this.node.y + y > basis.mapHeight / 2 || this.node.y + y < -(basis.mapHeight / 2)) {
      this.node.y = y > 0 ? basis.mapHeight / 2 : -(basis.mapHeight / 2);
    }
  }
});

cc._RF.pop();