"use strict";
cc._RF.push(module, '3c716btzcBBa70Q3ASDnAqd', 'map');
// script/game/map.js

"use strict";

var _followerlist = require("./followerlist.js");

var _game = require("./game.js");

var _interact = require("./interact.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

var map = cc.Class({
  "extends": cc.Component,
  properties: {
    boothLevel1: cc.Prefab,
    minMapLoc: cc.Prefab,
    skils1: cc.Prefab,
    skils2: cc.Prefab,
    skils3: cc.Prefab,
    renwu: cc.Prefab,
    money: cc.Prefab,
    minMap: cc.Node,
    sceneMap: cc.Node
  },
  onLoad: function onLoad() {
    map._this = this;
    this.boothArr = ',';
    this.boothArrList = [];
    this.e = 0;
    this.e2 = 0;
    this.e3 = 0;
    this.e4 = 0;
    this.maxMapX = basis.mapWidth / 80;
    this.maxMapY = basis.mapHeight / 80;
    this.skils1Pool = wxcur.setNodeBool(10, this.skils1);
    this.skils2Pool = wxcur.setNodeBool(10, this.skils2);
    this.skils3Pool = wxcur.setNodeBool(10, this.skils3);
    this.moneyPool = wxcur.setNodeBool(50, this.money);
    this.setMap();
  },
  rom: function rom(X, Y, width, height, level, type) {
    var that = this;
    var romNum = Math.floor(Math.random() * this.boothArrList.length);
    var rXY = this.boothArrList[romNum];

    if (rXY.x + width > X || rXY.y + height > Y) {
      this.rom(X, Y, width, height, level, type);
      return;
    }

    var romX = rXY.x;
    var romY = rXY.y;
    var arr = '';

    for (var i = 0; i < width; i++) {
      for (var j = 0; j < height; j++) {
        var romXY = "," + (romX + i) + "_" + (romY + j) + "_";

        if (this.boothArr.indexOf(romXY) >= 0) {
          this.rom(X, Y, width, height, level, type);
          return;
        }

        arr += romXY + "_l" + level + ",";

        if (i == width - 1 && j == height - 1) {
          this.boothArrList.splice(romNum, 1);
          this.boothArr += arr;

          if (type == 'followe') {
            that.addFollowe(romX + i, romY + j);

            if (this.map.length != 0) {
              this.map[romY + j][romX + i] = 'f';
            }
          } else if (type == 'skils1' || type == 'skils2' || type == 'skils3') {
            that.addSkils(romX + i, romY + j, type);

            if (this.map.length != 0) {
              this.map[romY + j][romX + i] = 's';
            }
          } else {
            that.addBooth(level, romX + i, romY + j);
            that.addMinMap(level, romX + i, romY + j);
          }
        }
      }
    }

    console.log(this.map, this.boothArrList);
  },
  setMap: function setMap() {
    var _this = this;

    this.map = [];
    var mapX = this.maxMapX;
    var mapY = this.maxMapY;

    for (var i = 0; i < mapY; i++) {
      for (var j = 0; j < mapX; j++) {
        this.boothArrList.push({
          x: j,
          y: i
        });
      }
    }

    var booth1 = basis.booth1;
    var booth2 = basis.booth2;
    var booth3 = basis.booth3;
    var booth4 = basis.booth4;

    for (var _i = 0; _i < basis.aiNum; _i++) {
      this.addRenwu(_i);
    }

    for (var _i2 = 0; _i2 < booth4; _i2++) {
      this.rom(mapX, mapY, 6, 6, 4);
    }

    for (var _i3 = 0; _i3 < booth3; _i3++) {
      this.rom(mapX, mapY, 5, 4, 3);
    }

    for (var _i4 = 0; _i4 < booth2; _i4++) {
      this.rom(mapX, mapY, 4, 3, 2);
    }

    for (var _i5 = 0; _i5 < booth1; _i5++) {
      this.rom(mapX, mapY, 3, 3, 1);
    }

    console.log('开启');

    var _loop = function _loop(_i6) {
      var _loop2 = function _loop2(_j) {
        if (_this.map[_i6] && _this.map[_i6][_j]) return "continue";
        !_this.map[_i6] ? _this.map[_i6] = [] : '';
        var romXY = "," + _j + "_" + _i6 + "_";

        var index = _this.boothArr.indexOf(romXY);

        var boothArr2 = _this.boothArr;

        if (index >= 0) {
          boothArr2 = boothArr2.split(romXY);

          var findx = _this.boothArrList.findIndex(function (res) {
            return res.x == _j && res.y == _i6;
          });

          if (findx >= 0) {
            _this.boothArrList.splice(findx, 1);
          }

          _this.map[_i6][_j] = boothArr2[1][2];
        } else {
          _this.map[_i6][_j] = 0;
        }
      };

      for (var _j = 0; _j < mapX; _j++) {
        var _ret = _loop2(_j);

        if (_ret === "continue") continue;
      }
    };

    for (var _i6 = 0; _i6 < mapY; _i6++) {
      _loop(_i6);
    }

    for (var _i7 = 0; _i7 < basis.initGuestNum; _i7++) {
      this.rom(mapX, mapY, 1, 1, 'f', 'followe');
    }

    for (var _i8 = 0; _i8 < basis.initSkils1Num; _i8++) {
      this.rom(mapX, mapY, 1, 1, 's', 'skils1');
    }

    for (var _i9 = 0; _i9 < basis.initSkils2Num; _i9++) {
      this.rom(mapX, mapY, 1, 1, 's', 'skils2');
    }

    for (var _i10 = 0; _i10 < basis.initSkils3Num; _i10++) {
      this.rom(mapX, mapY, 1, 1, 's', 'skils3');
    } //console.log(this.map, this.boothArrList)

  },
  addRenwu: function addRenwu(i) {
    var x = (Math.random() * 1 - 0.5) * basis.mapWidth;
    var y = (Math.random() * 1 - 0.5) * basis.mapHeight;
    var minMapLoc = cc.instantiate(this.minMapLoc);
    minMapLoc.x = x * (200 / basis.mapWidth);
    minMapLoc.y = y * (240 / basis.mapHeight);
    minMapLoc.width = 6;
    minMapLoc.height = 6;
    minMapLoc.parent = this.minMap; // if (i / 2 == 0) {
    //     minMapLoc.color = new cc.Color(0, 255, 0, 255)
    // } else {
    //     minMapLoc.color = new cc.Color(255, 0, 255, 255)
    // }

    minMapLoc.color = new cc.Color(139, 137, 127, 255); //minMapLoc.color = new cc.Color(176, 134, 35, 255)

    var renwu = cc.instantiate(this.renwu);
    var renwuCom = renwu.getComponent('renwu');
    renwu.x = x;
    renwu.y = y;
    renwu.name = "ai-" + i;
    renwu.parent = _followerlist.followerlist._this.followerlist;
    renwu.minMapLocColor = minMapLoc.color;
    renwuCom.xiaodituw = minMapLoc;
    renwu.gameName = basis.gameAllName[i];

    for (var _i11 = 0; _i11 < basis.aiInitFigure; _i11++) {
      var foll = this.addFollowe(x / 80, y / 80);
      foll.initChar = true;
      renwuCom.addMyfollow(foll);
    }
  },
  addSkils: function addSkils(i, j, type) {
    var node = null;

    if (type == 'skils1') {
      node = wxcur.getNodeBool(this.skils1Pool, this.skils1);
      node.name = "\u6280\u80FD-\u63FD\u5BA2\u52A0\u5F3A-" + node._id;
      node.skilsType = 1;
    } else if (type == 'skils2') {
      node = wxcur.getNodeBool(this.skils2Pool, this.skils2);
      node.name = "\u6280\u80FD-\u6536\u76CA\u589E\u5F3A-" + node._id;
      node.skilsType = 2;
    } else if (type == 'skils3') {
      node = wxcur.getNodeBool(this.skils3Pool, this.skils3);
      node.name = "\u6280\u80FD-\u79FB\u52A8\u52A0\u5F3A-" + node._id;
      node.skilsType = 3;
    } //node.children[0].getComponent(cc.Label).string = node.name


    node.mapX = i;
    node.mapY = j;
    node.x = 80 - 1160 + i * 80;
    node.y = 80 + 1200 - j * 80;
    node.parent = _followerlist.followerlist._this.followerlist;
  },
  addFollowe: function addFollowe(i, j) {
    var followerPool = _followerlist.followerlist._this.followerPool;
    var node = wxcur.getNodeBool(followerPool, _followerlist.followerlist._this.follower);
    node.mapX = i;
    node.mapY = j;
    node.x = 80 - 1160 + i * 80;
    node.y = 80 + 1200 - j * 80;
    node.name = "\u6563-\u5BA2\u4EBA\u7269-" + node._id;
    node.openName = basis.gameNameList[Math.floor(basis.gameNameList.length * Math.random())];
    node.parent = _followerlist.followerlist._this.followerlist;
    return node;
  },
  addMinMap: function addMinMap(level, i, j) {
    var node = cc.instantiate(this.minMapLoc);
    node.level = level;

    switch (level) {
      case 1:
        node.x = 80 - 1160 + (i - 1) * 80;
        node.y = 80 + 1200 - (j - 1) * 80;
        node.width = 10;
        node.height = 4;
        break;

      case 2:
        node.x = 160 - 1200 + (i - 2) * 80;
        node.y = 80 + 1200 - (j - 1) * 80;
        node.width = 14;
        node.height = 8;
        break;

      case 3:
        node.x = 240 - 1240 + (i - 3) * 80;
        node.y = 160 + 1080 - (j - 2) * 80;
        node.width = 20;
        node.height = 10;
        break;

      case 4:
        node.x = 320 - 1280 + (i - 4) * 80;
        node.y = 320 + 840 - (j - 4) * 80;
        node.width = 26;
        node.height = 16;
        break;
    }

    node.mapX = i;
    node.mapY = j;
    node.typeNmae = 'booth';
    node.x = node.x * (200 / basis.mapWidth);
    node.y = node.y * (240 / basis.mapHeight);
    node.children[0].width = node.width;
    node.children[0].height = node.height;
    node.parent = this.minMap;
  },
  addBooth: function addBooth(level, i, j) {
    var node = cc.instantiate(this.boothLevel1);
    node.level = level;
    node.getComponent('booth').init(level, i, j);
    node.name = "\u644A\u4F4D-" + i + "-" + j;
    node.parent = this.sceneMap;
  },
  addMoney: function addMoney(x, y, num) {
    var _this2 = this;

    var node = wxcur.getNodeBool(this.moneyPool, this.money);
    var v2 = cc.v2((Math.random() * 1 - 0.5) * 150, (Math.random() * 1 - 0.5) * 150);
    node.x = x;
    node.y = y;
    node.zIndex = 2;
    node.name = "\u949E\u7968-" + node._id;
    node.parent = this.sceneMap;
    node.runAction(cc.sequence(cc.moveBy(0.2, v2), cc.callFunc(function () {
      node.group = '钱';
    })));

    if (num <= basis.beatEachDropMoney) {
      node.money = num;
    } else {
      node.money = basis.beatEachDropMoney;
      num -= basis.beatEachDropMoney;
      setTimeout(function () {
        _this2.addMoney(x, y, num);
      }, 100);
    }
  },
  update: function update(dt) {
    this.e += dt;
    this.e2 += dt;
    this.e3 += dt;
    this.e4 += dt; // if (this.e >= basis.newGuestTime && game._this.gameStart) {
    //     this.e = 0;
    //     this.rom(this.maxMapX, this.maxMapY, 1, 1, 'f', 'followe');
    // }
    // if (this.e2 >= basis.newSkils1Time && game._this.gameStart) {
    //     this.e2 = 0;
    //     this.rom(this.maxMapX, this.maxMapY, 1, 1, 's', 'skils1');
    // }
    // if (this.e3 >= basis.newSkils2Time && game._this.gameStart) {
    //     this.e3 = 0;
    //     this.rom(this.maxMapX, this.maxMapY, 1, 1, 's', 'skils2');
    // }
    // if (this.e4 >= basis.newSkils3Time && game._this.gameStart) {
    //     this.e4 = 0;
    //     this.rom(this.maxMapX, this.maxMapY, 1, 1, 's', 'skils3');
    // }
  }
});
exports.map = map;

cc._RF.pop();