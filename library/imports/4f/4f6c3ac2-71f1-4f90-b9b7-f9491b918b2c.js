"use strict";
cc._RF.push(module, '4f6c3rCcfFPkLm3+UkbkYss', 'exsettlement');
// script/game/exsettlement.js

"use strict";

var _game = require("./game.js");

var _interact = require("./interact.js");

var _music = require("./../currency/music.js");

var _require = require('basis'),
    basis = _require.basis;

var _require2 = require('weixin_ty'),
    wxcur = _require2.wxcur;

var exsettlement = cc.Class({
  "extends": cc.Component,
  properties: {
    duanweimz: cc.Sprite,
    jdt: cc.ProgressBar,
    jangbs: cc.Label,
    guangquan: cc.Node,
    xunzhangAli: cc.SpriteAtlas,
    huodexxs: cc.Label,
    dijiming: cc.Label
  },
  onLoad: function onLoad() {
    exsettlement._this = this;
    this.guangquan.runAction(cc.repeatForever(cc.rotateBy(5, 360)));
    this.updateInt();
  },
  updateInt: function updateInt() {
    this.duanweimz.spriteFrame = this.xunzhangAli.getSpriteFrame("\u52CB\u7AE0\u7B49\u7EA7" + basis.myLevel);
    this.jdt.progress = basis.myExper / basis.upLevelEx[basis.myLevel - 1];
    this.jangbs.string = basis.myExper + "/" + basis.upLevelEx[basis.myLevel - 1];
  },
  init: function init(num, rank) {
    var _this = this;

    setTimeout(function () {
      _this.gdjbs = num;
      _this.gdjbs2 = num;
    }, 1000);
    this.huodexxs.string = "x" + num;
    this.dijiming.string = "\u7B2C" + (rank + 1) + "\u540D\u5956\u52B1";
  },
  update: function update(dt) {
    if (this.gdjbs > 0) {
      var num = Math.ceil(dt * this.gdjbs2);
      num > this.gdjbs ? num = this.gdjbs : '';
      this.gdjbs -= num;
      basis.myExper += num;

      if (basis.myExper >= basis.upLevelEx[basis.myLevel - 1]) {
        basis.myLevel += 1;
      }

      if (this.gdjbs == 0) {
        setTimeout(function () {
          _interact.interact._this.gotoIndex();
        }, 1000);
      }

      this.updateInt();
    }
  }
});
exports.exsettlement = exsettlement;

cc._RF.pop();