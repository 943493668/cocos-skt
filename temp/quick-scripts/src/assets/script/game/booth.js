"use strict";
cc._RF.push(module, '740f519nUxFFrGcW3fz5JLZ', 'booth');
// script/game/booth.js

"use strict";

var _map = require("./map.js");

var _interact = require("./interact.js");

var _game = require("./game.js");

var _music = require("../currency/music.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

cc.Class({
  "extends": cc.Component,
  properties: {
    showImg: cc.Sprite,
    jindu: cc.Label,
    baitandonghu: cc.Node,
    diban: cc.Node
  },
  onLoad: function onLoad() {
    this.zhanlingzhenode = '';
    this.boothFollower = []; //这个摊位上的客人

    this.node.yidongfig = true;
    this.zhanjindut = {};
    this.e = 0;
    this.zhengdFilg = false;
    this.zhanling = {};
  },
  start: function start() {
    this.minBooth = this.getMinBooth();
    this.baitandonghu.scale = this.node.width / 80 * 0.2;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group != '主人物') return;
    var node = other.node;
    var nodeCom = node.getComponent('renwu');

    if (this.zhanlingzhenode && this.zhanjindut[this.zhanlingzhenode._id]) {
      this.zhanlziszai = true;
      return;
    }

    this.zhanjindut[node._id] = 0; //if (node.yidongfig) return

    if (node.name == '我' && this.zhanlingzhenode.name != '我') {
      _interact.interact._this.zhanyzs.stopAllActions();

      this.diban.runAction(cc.repeatForever(cc.sequence(cc.spawn(cc.scaleBy(0.4, 1.1), cc.fadeTo(0.4, 125)), cc.spawn(cc.scaleBy(0.4, 0.9), cc.fadeTo(0.4, 255)))));
      this.diban.color = new cc.Color(255, 255, 0, 255);
    } else if (node.name != '我' && this.zhanlingzhenode.name != node.name) {
      if (this.zhanlingzhenode) {
        this.zhanlingzhenode.getComponent('renwu').beAttackBooth = this.node;

        if (this.zhanlingzhenode.name == '我') {
          _interact.interact._this.openWarning(nodeCom.gameName);

          this.diban.runAction(cc.repeatForever(cc.sequence(cc.spawn(cc.scaleBy(0.4, 1.1), cc.fadeTo(0.4, 125)), cc.spawn(cc.scaleBy(0.4, 0.9), cc.fadeTo(0.4, 255)))));
          this.diban.color = new cc.Color(255, 0, 0, 255);
        }
      }
    }
  },
  onCollisionStay: function onCollisionStay(other, self) {
    if (other.node.group != '主人物') return;
    var node = other.node;
    var nodeCom = node.getComponent('renwu');
    this.zlznodeCom = nodeCom;

    if (this.zhanlingzhenode._id == node._id) {
      this.zhanlziszai = true;
      this.zhanjindut = {};
      return;
    }

    if (node.name == '我' && basis.observerPattern) return;

    if (this.zhanjindut[node._id] == undefined) {
      if (this.zhanlziszai) {
        console.log(nodeCom.ainame.string, nodeCom.chupenquan.getComponent('aiperception').list.tanweiList, this.node._id);
        nodeCom.resfyd = true;
        delete nodeCom.chupenquan.getComponent('aiperception').list.tanweiList[this.node._id];
      }

      return;
    }

    ;

    if (node.name == '我' || nodeCom && nodeCom.mubiao == '摊位') {
      if (node.name == '我' && this.zhanlingzhenode.name != '我') {
        this.zhanling[node._id] = true; // this.zhengdFilg = true;

        _interact.interact._this.zhanyzs.active = true;

        if (this.zhanjindut[node._id] >= 100) {
          console.log('占领成功');

          if (this.zhanlingzhenode) {
            this.zhanlingzhenode.getComponent('renwu').occBooth["people" + this.level] -= this.boothFollower.length;
            this.zhanlingzhenode.getComponent('renwu').deleteMyBooth(this.node);
          }

          this.zhanjindut[node._id];
          this.zhanlingzhenode = node;
          _interact.interact._this.zhanywz.string = '占领成功';
          _interact.interact._this.zhanywz.node.color = new cc.Color(176, 134, 35, 255);
          _interact.interact._this.zhanywz.fontSize = 30;
          nodeCom.occBoothNum += 1;

          _interact.interact._this.updaHaveBooth(nodeCom.occBoothNum);

          _interact.interact._this.zhanyzs.runAction(cc.sequence(cc.fadeOut(0.5), cc.callFunc(function () {
            _interact.interact._this.zhanywz.node.color = new cc.Color(255, 255, 255, 255);
            _interact.interact._this.zhanywz.fontSize = 24;
            _interact.interact._this.zhanyzs.opacity = 255;
            _interact.interact._this.zhanyzs.active = false;
            _interact.interact._this.zhanywz.string = '占领摊位中';
          })));

          this.occuSuccess(node);
        } else {
          _interact.interact._this.zhanyjdt.width = this.zhanjindut[node._id] / 100 * _interact.interact._this.zhanyzs.width;
        }
      } else if (node.name != '我' && this.zhanlingzhenode.name != node.name) {
        //if (nodeCom.myfollowerList.length == 0) return;
        this.zhanling[node._id] = true;
        this.jindu.string = this.zhanjindut[node._id] + '%';
        nodeCom.resfyd = false;

        if (this.zhanlingzhenode.name == '我' && !this.wobz) {
          this.minBooth.color = new cc.Color(255, 0, 0);
          this.minBooth.children[0].active = true;
          this.wobz = true;

          _music.music._this.openMusic('', 'jinggaosheng');
        }

        if (this.zhanjindut[node._id] >= 100) {
          if (this.zhanlingzhenode) {
            this.zhanlingzhenode.getComponent('renwu').occBooth["people" + this.level] -= this.boothFollower.length;
            this.zhanlingzhenode.getComponent('renwu').deleteMyBooth(this.node);

            if (this.zhanlingzhenode.name == '我') {
              this.diban.stopAllActions();
              this.diban.runAction(cc.sequence(cc.scaleBy(0.4, 0.9), cc.fadeTo(0, 255)));
              this.diban.color = new cc.Color(0, 0, 0, 255);
            }
          }

          this.minBooth.children[0].active = false;
          this.wobz = false;
          this.zhanlingzhenode = node;
          this.occuSuccess(node);
        }
      }
    }
  },
  onCollisionExit: function onCollisionExit(other, self) {
    if (other.node.group != '主人物') return;
    var node = other.node;

    if (this.zhanlingzhenode._id == node._id) {
      this.zhanlziszai = false;
      return;
    }

    if (node.name == '我') {
      _interact.interact._this.zhanyzs.active = false;
      _interact.interact._this.zhanyjdt.width = 0;
      this.diban.stopAllActions();
      this.diban.runAction(cc.sequence(cc.scaleBy(0.4, 0.9), cc.fadeTo(0, 255)));

      if (this.zhanlingzhenode.name != '我') {
        this.diban.color = new cc.Color(0, 0, 0, 255);
      }
    } else {
      node.getComponent('renwu').resfyd = true;

      if (this.zhanlingzhenode) {
        if (this.zhanlingzhenode.name == '我') {
          this.minBooth.color = new cc.Color(88, 124, 69, 255);
          this.diban.stopAllActions();
          this.diban.runAction(cc.sequence(cc.scaleBy(0.4, 0.9), cc.fadeTo(0, 255)));

          if (this.zhanlingzhenode.name != '我') {
            this.diban.color = new cc.Color(0, 0, 0, 255);
          }
        } else {
          this.minBooth.color = this.zhanlingzhenode.minMapLocColor;
        }
      }

      this.minBooth.children[0].active = false;
    }

    this.zhengdFilg = false;
    this.zhanling[node._id] = false;
    this.e = 0;
    this.showImg.node.x = this.initX;
    this.showImg.node.y = this.initY;
    delete this.zhanjindut[node._id];
    this.wobz = false;
  },
  occuSuccess: function occuSuccess(node) {
    var _this = this;

    var renwu = node.getComponent('renwu');
    var followerList = renwu.myfollowerList;
    var length = followerList.length - 1;
    var i2 = 0;
    var demandNum = this.level == 1 ? 4 : this.level == 2 ? 6 : this.level == 3 ? 10 : 16;
    demandNum > followerList.length + this.boothFollower.length ? demandNum = followerList.length + this.boothFollower.length : '';
    renwu.occBooth["people" + this.level] += this.boothFollower.length;

    for (var i = 0; i < demandNum; i++) {
      if (i < this.boothFollower.length) {
        this.boothFollower[i].getComponent('follower').tx.armatureName = renwu.imgName;
        this.boothFollower[i].getComponent('follower').tx.playAnimation('行走');
        continue;
      }

      var s = length - i2;
      var follower = followerList[s].getComponent('follower');
      renwu.occBooth["people" + this.level] += 1;
      renwu.kerenwuList[followerList[s].tagIndex] = false;
      this.boothFollower.push(follower);
      follower.init(i + 1, 100, this.node);
      followerList.splice(s, 1);
      i2++;
    }

    if (node.name != '我') {
      renwu.resfyd = true;
      renwu.romTarget();
      this.baitandonghu.active = false;
    } else {
      if (wxcur.is_WECHAT_GAME()) {
        if (basis.openvibration) {
          wx.vibrateLong();
        }
      }

      this.node.runAction(cc.sequence(cc.scaleTo(0.15, 1.2), cc.scaleTo(0.3, 0.8), cc.scaleTo(0.15, 1), cc.callFunc(function () {
        if (_this.boothFollower.length != 0) {
          _this.baitandonghu.active = true;
        }
      }))); //music._this.openMusic('', 'qztwchengg');
    }

    this.addMinBooth(node);
    this.zhengdFilg = false;
    this.zhanling[node._id] = false;
    this.e = 0;
    this.showImg.node.x = this.initX;
    this.showImg.node.y = this.initY;
    renwu.getMyBooth(this.node);
    renwu.countLayer(followerList.length, 1);
    renwu.updeSpeed();
  },
  addMinBooth: function addMinBooth(node) {
    if (node.name == '我') {
      this.minBooth.color = new cc.Color(176, 134, 35, 255);
      this.showImg.spriteFrame = _interact.interact._this.gameImgList.getSpriteFrame("\u644A\u4F4D" + this.level + "_00" + this.boothLevel);
    } else {
      this.minBooth.color = node.minMapLocColor;
      this.showImg.spriteFrame = _interact.interact._this.gameImgList.getSpriteFrame("\u644A\u4F4D" + this.level + "_00" + this.boothLevel + "_02");
    }
  },
  deleteMinBooth: function deleteMinBooth() {
    this.minBooth.color = new cc.Color(139, 137, 127);
    this.showImg.spriteFrame = _interact.interact._this.gameImgList.getSpriteFrame("\u644A\u4F4D" + this.level + "_00" + this.boothLevel + "_02");
  },
  getMinBooth: function getMinBooth() {
    var _this2 = this;

    var minBooth = _map.map._this.minMap.children.find(function (res) {
      return res.mapY == _this2.mapY && res.mapX == _this2.mapX;
    });

    return minBooth;
  },
  init: function init(level, i, j) {
    var node = this.node;
    var collider = node.getComponent(cc.BoxCollider);

    if (level == 1) {
      this.boothLevel = Math.ceil(Math.random() * 3);
      this.diban.scale = 1;
    } else if (level == 2) {
      this.boothLevel = Math.ceil(Math.random() * 7);
      this.diban.scaleX = 2;
      this.diban.scaleY = 1;
    } else if (level == 3) {
      this.boothLevel = Math.ceil(Math.random() * 6);
      this.diban.scaleX = 3;
      this.diban.scaleY = 2;
    } else if (level == 4) {
      this.boothLevel = Math.ceil(Math.random() * 4);
      this.diban.scaleX = 4;
      this.diban.scaleY = 4;
    }

    this.showImg.spriteFrame = _interact.interact._this.gameImgList.getSpriteFrame("\u644A\u4F4D" + level + "_00" + this.boothLevel + "_02");
    this.level = level;
    this.mapX = i;
    this.mapY = j;

    switch (level) {
      case 1:
        node.x = 80 - 1160 + (i - 1) * 80;
        node.y = 80 + 1200 - (j - 1) * 80;
        break;

      case 2:
        node.x = 160 - 1200 + (i - 2) * 80;
        node.y = 80 + 1200 - (j - 1) * 80;
        node.width = 160;
        break;

      case 3:
        node.x = 240 - 1240 + (i - 3) * 80;
        node.y = 160 + 1080 - (j - 2) * 80;
        node.width = 240;
        node.height = 160;
        break;

      case 4:
        node.x = 320 - 1280 + (i - 4) * 80;
        node.y = 320 + 840 - (j - 4) * 80;
        node.width = 320;
        node.height = 320;
        break;
    }

    this.initX = this.showImg.node.x;
    this.initY = this.showImg.node.y;
    collider.size.width = node.width;
    collider.size.height = node.height;
  },
  getMoney: function getMoney(i) {
    var _this3 = this;

    if (this.node.opacity == 0) return;
    i -= 1;
    var node = wxcur.getNodeBool(_map.map._this.moneyPool, _map.map._this.money);
    node.x = this.node.x - _game.game._this.renwu.node.x;
    node.y = this.node.y - _game.game._this.renwu.node.y;
    node.scale = 1.2;
    node.parent = _interact.interact._this.yingy;
    node.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(node.x + (Math.random() * 2 - 1) * 50, node.y + (Math.random() - 0.5) * 50)), cc.moveTo(0.2, cc.v2(-295.082, 335.011)), cc.scaleTo(0.1, 1.6), cc.scaleTo(0.1, 1.2), cc.callFunc(function () {
      _map.map._this.moneyPool.put(node);
    })));

    if (i > 0) {
      setTimeout(function () {
        _this3.getMoney(i);
      }, 100);
    }
  },
  update: function update(dt) {
    _game.game._this.yingcang(this.node);

    if (this.zhengdFilg) {
      this.e += dt;

      if (this.showImg.node.x < this.initX) {
        this.showImg.node.x += Math.random() * 5;
      } else {
        this.showImg.node.x -= Math.random() * 5;
      }

      if (this.showImg.node.y < this.initY) {
        this.showImg.node.y += Math.random() * 5;
      } else {
        this.showImg.node.y -= Math.random() * 5;
      }
    }

    for (var key in this.zhanling) {
      if (this.zhanling[key]) {
        var num = basis["booth" + this.level + "OccupySpeed"][1] - basis["booth" + this.level + "GuestProvideSpeed"] * (this.zlznodeCom.myfollowerList.length - this.boothFollower.length);
        num < basis["booth" + this.level + "OccupySpeed"][0] ? num = basis["booth" + this.level + "OccupySpeed"][0] : '';

        if (this.zhanjindut[key] >= 0) {
          this.zhanjindut[key] += dt / num * 100;
        }
      }
    }
  }
});

cc._RF.pop();