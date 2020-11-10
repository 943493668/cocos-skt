
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/renwu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70fb0McYX5I/KPYK33KDaVT', 'renwu');
// script/game/renwu.js

"use strict";

var _followerlist = require("./followerlist");

var _interact = require("./interact.js");

var _map = require("./map.js");

var _game = require("./game.js");

var _music = require("../currency/music");

var _require = require('basis'),
    basis = _require.basis;

var _require2 = require('weixin_ty'),
    wxcur = _require2.wxcur;

cc.Class({
  "extends": cc.Component,
  properties: {
    tx: dragonBones.ArmatureDisplay,
    chupenquan: cc.Node,
    qipao: cc.Node,
    qipaowenan: cc.Label,
    tunshiquan: cc.Node,
    zskrs: cc.Label,
    zsquanquan: cc.Node,
    zsjiantou: cc.Node,
    lizi: cc.Node,
    ainame: cc.Label,
    xunzhang: cc.Sprite,
    gamelevel: cc.Label,
    gameLevelName: cc.Label,
    shengjitx: cc.Node
  },
  onLoad: function onLoad() {
    this.e = 0;
    this.e1 = 0; //揽客加强道具时间

    this.e2 = 0; //增收益增道具时间

    this.e3 = 0; //移速加强道具时间

    this.e4 = 0; //金币时间

    this.e5 = 0; //被吞噬时间

    this.figureLevel = 1; //人物等级

    this.myfollowerList = []; //带在身上的客人

    this.myfollowerList2 = []; //所有客人

    this.kerenwuList = []; //客人位置占领请客

    this.occBoothNodeList = []; //占领的摊位node

    this.mySkill = [false, false]; //我的技能列表

    this.baseMovingSpeed = 1; //基础移速

    this.goldRatio = 1; //金币倍率

    this.gold = 0;
    this.openSkills1Filg = false; //揽客加强启动

    this.openSkills2Filg = false; //增收益增启动

    this.openSkills3Filg = false; //移速加强启动

    this.beAttackBooth = null; //被攻击的摊位

    this.xiaodituw = null; //我的小地图

    this.death = false; //是否死亡
    // if(this.node.name =='我'){
    //     this.death = false;//是否死亡
    // }

    this.node.invincible = basis.gameStartInvTime; //无敌时间

    this.follLevel = 1; //拥有的客人等级

    this.devourFlag = false;
    this.occBooth = {
      people1: 0,
      people2: 0,
      people3: 0,
      people4: 0
    };
    this.occBoothNum = 0;
    this.lossMonery = 0;
    this.generateBubbleTime = Math.random() * basis.generateBubbleTime;
    this.updeDevourRadius();
    this.tunshiquan = this.tunshiquan.getComponent(cc.CircleCollider);
    this.aiPerList = null;
    this.resfyd = true;
    this.movespeed = basis.movespeed;
    this.romTarget();
    this.setFlashing();
    this.setTx();
  },
  updeDevourRadius: function updeDevourRadius() {
    var localGrowth = basis.localGrowth[this.figureLevel - 1];
    this.node.getComponent(cc.CircleCollider).radius = localGrowth.devourRadius;
    this.zsquanquan.width = localGrowth.devourRadius * 2;
    this.zsquanquan.height = localGrowth.devourRadius * 2;
    this.gamelevel.string = this.figureLevel;
  },
  upFollLevel: function upFollLevel() {
    var _this = this;

    if (this.figureLevel != 10 && basis.localGrowth[this.figureLevel].targetMoney <= this.gold) {
      this.figureLevel += 1;
      this.shengjitx.active = true;
      setTimeout(function () {
        _this.shengjitx.active = false;
      }, 2000);
      this.updeDevourRadius();
    }

    if (this.node.name == '我' && this.figureLevel != 10) {
      _interact.interact._this.wddqdj.string = this.figureLevel;
      _interact.interact._this.wdmbdj.string = this.figureLevel + 1;
      _interact.interact._this.wdmbjdt.progress = (this.gold - basis.localGrowth[this.figureLevel - 1].targetMoney) / (basis.localGrowth[this.figureLevel].targetMoney - basis.localGrowth[this.figureLevel - 1].targetMoney);
      _interact.interact._this.wdmbms2.string = "" + (this.figureLevel + 1);
      _interact.interact._this.wdmbms3.string = "\uFF0C\u63FD\u5BA2\u534A\u5F84+" + basis.localGrowth[this.figureLevel].showRadiusM + "\u7C73";
    } else if (this.node.name == '我' && this.figureLevel == 10) {
      _interact.interact._this.wddqdj.string = this.figureLevel;
      _interact.interact._this.wdmbdj.string = '∞';
      _interact.interact._this.wdmbjdt.progress = 1;
      _interact.interact._this.wdmbms1.string = "\u5DF2\u7ECF\u8FBE\u5230\u6700\u9AD8\u7B49\u7EA7";
      _interact.interact._this.wdmbms3.active = false;
      _interact.interact._this.wdmbms2.node.parent.active = false;
    }
  },
  start: function start() {
    _interact.interact._this.goldRnak.push({
      name: this.node.name,
      gold: 0,
      gameName: this.node.gameName
    });

    this.ainame.string = this.node.gameName;

    if (_interact.interact._this.goldRnak.length > 3) {
      _game.game._this.renwu.updeGold();
    }

    if (this.node.name == '我') {
      this.xunzhang.spriteFrame = _interact.interact._this.gameImgList.getSpriteFrame("\u52CB\u7AE0\u7B49\u7EA7" + basis.myLevel + "\u5C0F");
      this.gameLevelName.string = basis.levelName[basis.myLevel - 1];
    } else {
      var myLevel = basis.myLevel + Math.floor(Math.random() * 3 - 1);
      myLevel < 1 ? myLevel = 1 : myLevel > 10 ? myLevel = 10 : '';
      this.xunzhang.spriteFrame = _interact.interact._this.gameImgList.getSpriteFrame("\u52CB\u7AE0\u7B49\u7EA7" + myLevel + "\u5C0F");
      this.gameLevelName.string = basis.levelName[myLevel - 1];
    }

    this.upFollLevel();
  },
  setTx: function setTx() {
    if (this.node.name == '我') {
      this.imgName = basis.myfigure.imgName;
      this.tx.armatureName = basis.myfigure.imgName;
      this.tx.playAnimation('行走');
      this.node.gameName = basis.gameNmae;
    } else {
      this.imgName = _game.game._this.aiRomImg[0];

      _game.game._this.aiRomImg.splice(0, 1);

      this.tx.armatureName = this.imgName;
      this.tx.playAnimation('行走');
    }

    console.log(this.imgName);
  },
  updeSpeed: function updeSpeed() {
    this.movespeed = basis.movespeed - basis.moveSpeedLevelAttenu * (this.follLevel - 1);
    this.tunshiquan.radius = 150 + (this.follLevel - 1) * 80;
    this.tunshiquan.node.width = 300 + (this.follLevel - 1) * 160;
    this.tunshiquan.node.height = 300 + (this.follLevel - 1) * 160;
    this.zskrs.string = this.myfollowerList.length;
  },
  updeGold: function updeGold(gold) {
    var _this2 = this;

    this.gold = gold || (this.occBooth.people1 * basis.boothLevel1Glod + this.occBooth.people2 * basis.boothLevel2Glod + this.occBooth.people3 * basis.boothLevel3Glod + this.occBooth.people4 * basis.boothLevel4Glod) * this.goldRatio + this.gold;
    _interact.interact._this.goldRnak.find(function (res) {
      return res.name == _this2.node.name;
    }).gold = this.gold; // if (this.node.name == '我') {
    //     for (let i = 0; i < this.occBoothNodeList.length; i++) {
    //         const node = wxcur.getNodeBool(map._this.moneyPool, map._this.money);
    //         node.x = this.occBoothNodeList[i].x;
    //         node.y = this.occBoothNodeList[i].y;
    //         node.money = 0;
    //         node.parent = map._this.sceneMap;
    //         this.getMonery(node);
    //     }
    // };

    this.upFollLevel();
    this.updeInter();
  },
  updeInter: function updeInter() {
    var _this3 = this;

    if (this.node.name != '我') {
      return;
    }

    ;

    var rnak = _interact.interact._this.goldRnak.sort(function (a, b) {
      return b.gold - a.gold;
    }).findIndex(function (res) {
      return res.name == _this3.node.name;
    });

    this.rnak = rnak;
    _interact.interact._this.btbaiping.string = "" + (rnak + 1);
    _interact.interact._this.wodejinbi2.string = this.gold;

    if (_interact.interact._this.goldRnak[0]) {
      _interact.interact._this.youxiphmz.children[0].getComponent(cc.Label).string = _interact.interact._this.goldRnak[0].gameName;
      _interact.interact._this.youxiphjinbi.children[0].getComponent(cc.Label).string = Math.round(_interact.interact._this.goldRnak[0].gold);
    }

    if (_interact.interact._this.goldRnak[1]) {
      _interact.interact._this.youxiphmz.children[1].getComponent(cc.Label).string = _interact.interact._this.goldRnak[1].gameName;
      _interact.interact._this.youxiphjinbi.children[1].getComponent(cc.Label).string = Math.round(_interact.interact._this.goldRnak[1].gold);
    }

    if (_interact.interact._this.goldRnak[2]) {
      _interact.interact._this.youxiphmz.children[2].getComponent(cc.Label).string = _interact.interact._this.goldRnak[2].gameName;
      _interact.interact._this.youxiphjinbi.children[2].getComponent(cc.Label).string = Math.round(_interact.interact._this.goldRnak[2].gold);
    }

    _interact.interact._this.setGold(this.gold);

    _interact.interact._this.gold = this.gold;
    _interact.interact._this.rnak = this.rnak + 1;

    for (var i = 0; i < this.occBoothNodeList.length; i++) {
      var occBoothNode = this.occBoothNodeList[i].getComponent('booth');
      occBoothNode.getMoney(occBoothNode.level);
    }
  },
  aiMove: function aiMove() {
    if (!_game.game._this.gameStart || this.death) return;

    if (!this.aiPerList) {
      this.initAiPerList();
    }

    if (Math.abs(Math.floor(this.node.x)) >= Math.abs(Math.floor(this.aiTargetX)) && Math.abs(Math.floor(this.node.y)) >= Math.abs(Math.floor(this.aiTargetY))) {
      this.romTarget();
    } // if (Object.keys(this.aiPerList.zhurenwuList).length > 0) {
    //     //看到其他玩家
    //     //console.log(1, Object.keys(this.aiPerList.zhurenwuList).length)
    //     this.resfyd = true;
    //     this.beAttackBooth = null;
    //     this.combatJudge();
    // } else 


    if (this.beAttackBooth) {
      //摊位受到攻击
      //console.log(2)
      this.aiTargetX = this.beAttackBooth.x;
      this.aiTargetY = this.beAttackBooth.y;
      this.beAttackBooth = null;
    } // else if (Object.keys(this.aiPerList.moenyList).length > 0) {
    //     //看见钞票
    //     //console.log(3)
    //     this.aiTargetX = Object.values(this.aiPerList.moenyList)[0].x;
    //     this.aiTargetY = Object.values(this.aiPerList.moenyList)[0].y;
    // } 
    else if (Object.keys(this.aiPerList.jnengList).length > 0 && (!this.mySkill[0] || !this.mySkill[1])) {
        //看见道具
        //console.log(4)
        this.aiTargetX = Object.values(this.aiPerList.jnengList)[0].x;
        this.aiTargetY = Object.values(this.aiPerList.jnengList)[0].y;
      } else if (Object.keys(this.aiPerList.kerenwuList).length > 0) {
        //看见顾客
        //console.log(5, this.node.name,this.aiPerList.kerenwuList.length)
        this.aiTargetX = Object.values(this.aiPerList.kerenwuList)[0].x;
        this.aiTargetY = Object.values(this.aiPerList.kerenwuList)[0].y;
      } else if (Object.keys(this.aiPerList.tanweiList).length > 0 && this.myfollowerList.length >= 0) {
        //看见摊位
        var nodeCom = Object.values(this.aiPerList.tanweiList)[0].getComponent('booth');

        if (nodeCom.zhanlingzhenode.name != this.node.name) {
          //console.log(6,this.node.name,this.aiPerList.tanweiList.length)
          if (this.aiTargetCorrection) {
            if (Math.abs(this.node.x - this.aiTargetX) < 5 && Math.abs(this.node.y - this.aiTargetY) < 5) {
              console.log('达到矫正目标所在，重新定位摊位');
              this.aiTargetCorrection = false;
              this.aiTargetX = Object.values(this.aiPerList.tanweiList)[0].x;
              this.aiTargetY = Object.values(this.aiPerList.tanweiList)[0].y;
            }
          } else {
            this.aiTargetX = Object.values(this.aiPerList.tanweiList)[0].x;
            this.aiTargetY = Object.values(this.aiPerList.tanweiList)[0].y;

            if (Math.abs(this.node.x - this.aiTargetX) < 5 && Math.abs(this.node.y - this.aiTargetY) < 5) {
              console.log('距离过近，进行偏差处理');
              this.aiTargetCorrection = true;
              this.aiTargetX += (Math.random() - 0.5) * 5;
              this.aiTargetY += (Math.random() - 0.5) * 5;
            }

            this.mubiao = '摊位';
          }
        }
      } else {
        this.mubiao = null;
      }

    var targetX = this.aiTargetX;
    var targetY = this.aiTargetY;
    var angle = wxcur.getAngle(this.node.x, this.node.y, targetX, targetY); // if (this.node.x == targetX, this.node.y == targetY) {
    //     console.log(111)
    //     this.targetTp = null;
    // }

    if (!this.resfyd) return;
    this.yidong(angle);
  },
  combatJudge: function combatJudge() {
    var _this4 = this;

    var targetNode;

    for (var keys in this.aiPerList.zhurenwuList) {
      judge.call(this, this.aiPerList.zhurenwuList[keys]);

      if (targetNode) {
        if (this.aiPerList) {
          setTimeout(function () {
            delete _this4.aiPerList.zhurenwuList[keys];
          }, 0);
        }

        return;
      }

      ;
    }

    function judge(node) {
      var nodeCom = node.getComponent('renwu');

      if (!nodeCom) {
        console.log(node.name);
      }

      if (nodeCom.myfollowerList.length == this.myfollowerList.length || nodeCom.myfollowerList.length == 0) {
        if (nodeCom.aiPerList) {
          delete nodeCom.aiPerList.zhurenwuList[this.node._id];
        }

        delete this.aiPerList.zhurenwuList[node._id];
      } else if (nodeCom.myfollowerList.length - this.myfollowerList.length > 0 && this.targetTp != '跑') {
        targetNode = node;
        this.aiTargetX = -(node.x + 1000);
        this.aiTargetY = -(node.x + 1000);
        this.targetTp = '跑';

        if (this.aiTargetX > basis.mapWidth / 2 || this.aiTargetX < -(basis.mapWidth / 2)) {
          this.romTarget();
        }

        if (this.aiTargetY > basis.mapHeight / 2 || this.aiTargetY < -(basis.mapHeight / 2)) {
          this.romTarget();
        } //console.log('跑');


        if (this.mySkill[0] == '移动加强') {
          this.aiUseSkills(this.mySkill[0], 0);
        } else if (this.mySkill[1] == '移动加强') {
          this.aiUseSkills(this.mySkill[1], 1);
        }
      } //  else if (nodeCom.myfollowerList.length - this.myfollowerList.length < 0 && this.targetTp != '锁定') {
      //     this.aiTargetX = node.x + Math.random() * 100
      //     this.aiTargetY = node.y + Math.random() * 100
      //     if (this.mySkill[0] == '移动加强') {
      //         this.aiUseSkills(this.mySkill[0], 0)
      //     } else if (this.mySkill[1] == '移动加强') {
      //         this.aiUseSkills(this.mySkill[1], 1)
      //     }
      //     setTimeout(() => {
      //         this.targetTp = '';
      //     }, 200)
      //     this.targetTp = '锁定';
      // }

    }
  },
  resurrection: function resurrection() {
    var _this5 = this;

    setTimeout(function () {
      var x = (Math.random() * 1 - 0.5) * basis.mapWidth;
      var y = (Math.random() * 1 - 0.5) * basis.mapHeight;
      _this5.node.active = true;
      _this5.death = false;
      _this5.node.x = x;
      _this5.node.y = y;
      _this5.node.invincible = basis.invincibleTime;

      _this5.setFlashing();
    }, basis.aiResurrCooling * 10000);
  },
  romTarget: function romTarget() {
    var aiTargetX = (Math.random() - 0.5) * basis.mapWidth;
    var aiTargetY = (Math.random() - 0.5) * basis.mapHeight;

    if (Math.abs(aiTargetX - this.aiTargetX) < 50 && Math.abs(aiTargetY - this.aiTargetY)) {
      console.log('随机定位距离过近，重新定位');
      this.romTarget();
      return;
    }

    this.aiTargetX = (Math.random() - 0.5) * basis.mapWidth;
    this.aiTargetY = (Math.random() - 0.5) * basis.mapHeight;
  },
  onCollisionStay: function onCollisionStay(other, self) {
    var node = other.node;
    if (this.node.name == '我' && basis.observerPattern) return;
    if (node.invincible > 0) return;

    if (node.group == '客人物') {
      this.addMyfollow(node);
      this.myfollowerList2.push(node);
    }

    if (node.group == '技能') {
      this.addSkill(node);
    }

    if (node.group == '钱') {
      this.getMonery(node);
    }
  },
  beDevours: function beDevours(node) {
    if (this.devourFlag) return;
    this.devourFlag = true;
    this.kerenwuList[this.myfollowerList.length - 1] = false;
    var nodeCom = node.getComponent('renwu');
    var myFollNode = this.myfollowerList[this.myfollowerList.length - 1];
    nodeCom.addMyfollow(myFollNode);
    this.initAiPerList();
    this.myfollowerList.splice(this.myfollowerList.length - 1, 1);
    this.countLayer(this.myfollowerList.length, 1);
    this.updeSpeed();
  },
  countLayer: function countLayer(index, layer) {
    var nlayer = Math.floor(360 / Math.floor(180 / (Math.PI / Math.tan(150 / 2 / (80 * (layer + 0.5))))));

    if (index > nlayer) {
      index -= nlayer;
      layer += 1;
      this.countLayer(index, layer);
    } else {
      this.follLevel = layer;
    }
  },
  initAiPerList: function initAiPerList() {
    console.log(this.node.name);
    if (!this.chupenquan) return;
    this.aiPerList = this.chupenquan.getComponent('aiperception').initList();
  },
  getMonery: function getMonery(node) {
    var _this6 = this;

    // node.group = '固定';
    node.group = 'default';
    var act = null; // if (this.node.name == '我') {
    //     node.x = 0 - (this.node.x - node.x)
    //     node.y = 0 - (this.node.y - node.y)
    //     act = cc.spawn(
    //         cc.moveTo(0.3, cc.v2(-292, 381 - game._this.height)),
    //         cc.scaleTo(0.3, 1.3)
    //     )
    //     node.zIndex = 9;
    //     node.parent = interact._this.yingy;
    //     music._this.openMusic('', 'chaopaofeidong');
    // } else {

    act = cc.moveTo(0.2, cc.v2(this.node.x, this.node.y)); //}

    if (this.aiPerList) {
      setTimeout(function () {
        delete _this6.aiPerList.moenyList[node._id];
      }, 0);
    }

    node.runAction(cc.sequence(act, cc.callFunc(function () {
      node.scale = 1;
      node.zIndex = 1;
      _this6.gold += node.money;

      _this6.updeInter();

      _map.map._this.moneyPool.put(node);
    })));
  },
  addSkill: function addSkill(node) {
    var _this7 = this;

    if (this.mySkill[0] && this.mySkill[1]) return;
    var index = this.mySkill[0] ? 1 : 0;
    this.mySkill[index] = node.name.split('-')[1];

    if (this.node.name == '我') {
      _interact.interact._this["skill" + (index + 1)].getComponent(cc.Sprite).spriteFrame = _interact.interact._this.gameImgList.getSpriteFrame(this.mySkill[index]);
      _interact.interact._this["skill" + (index + 1)].name = this.mySkill[index];

      if (wxcur.is_WECHAT_GAME()) {
        if (basis.openvibration) {
          wx.vibrateShort();
        }
      }
    } else {
      //if (this.mySkill[index] != '移速加强') {
      this.aiUseSkills(this.mySkill[index], index);
      setTimeout(function () {
        delete _this7.aiPerList.jnengList[node._id];
      }, 0); //}
    }

    _map.map._this["skils" + node.skilsType + "Pool"].put(node);

    _map.map._this.map[node.mapY][node.mapX] = 0;

    _map.map._this.boothArrList.push({
      x: node.mapX,
      y: node.mapY
    });

    _map.map._this.boothArr.split("," + node.mapX + "_" + node.mapY + "__ls,").join('');
  },
  addMyfollow: function addMyfollow(node) {
    var _this8 = this;

    var s = this.kerenwuList.findIndex(function (res) {
      return res == false;
    });
    s < 0 ? s = this.kerenwuList.length : "";
    this.kerenwuList[s] = true;
    var nodeCom = node.getComponent('follower');
    nodeCom.init(s, 100, this.node);
    nodeCom.yidong(this.node);
    this.myfollowerList.splice(s, 0, node);

    if (this.node.name != '我') {
      setTimeout(function () {
        delete _this8.aiPerList.kerenwuList[node._id];
      }, 0);
    }

    this.zskrs.string = this.myfollowerList.length;
  },
  getMyBooth: function getMyBooth(node) {
    this.occBoothNodeList.push(node);
  },
  deleteMyBooth: function deleteMyBooth(node) {
    var index = this.occBoothNodeList.findIndex(function (res) {
      return res.name == node.name;
    });
    this.occBoothNodeList.splice(index, 1);
  },
  zhaohuan: function zhaohuan() {
    var zhaim = this.node.getChildByName('召唤');
    zhaim.active = true;
    zhaim.runAction(cc.sequence(cc.fadeOut(0.5), cc.callFunc(function () {
      zhaim.opacity = 255;
      zhaim.active = false;
    })));

    for (var i = this.occBoothNodeList.length - 1; i >= 0; i--) {
      var node = this.occBoothNodeList[i];
      var distance = this.getDistance(node.x, node.y, this.node.x, this.node.y);
      console.log(distance);
      if (distance > basis.summonDistance) continue;
      var booth = node.getComponent('booth');
      var boothFollower = booth.boothFollower;

      for (var j = 0; j < boothFollower.length; j++) {
        this.addMyfollow(boothFollower[j].node);
        this.occBooth["people" + node.level] -= 1;
        boothFollower[j].getComponent('follower').summonSpeed = basis.summonSpeed;
      } // booth.baitandonghu.active = false;
      // booth.zhanlingzhenode = '';
      // booth.boothFollower = [];
      // booth.deleteMinBooth();
      // this.occBoothNodeList.splice(i, 1);


      if (this.node.name == '我') {
        // this.occBoothNum -= 1;
        // interact._this.updaHaveBooth(this.occBoothNum);
        _interact.interact._this.openTips('召唤');
      }
    }
  },
  aiUseSkills: function aiUseSkills(name, index) {
    var _this9 = this;

    if (name == '移动加强') {
      if (Math.random() < basis.aiSkil3Porbability) {
        this.mySkill[index] = false;
        this.useSkills3();
      } else {
        setTimeout(function () {
          _this9.aiUseSkills(name, index);
        }, basis.aiSkilBuiltTime * 1000);
      }
    } else if (name == '揽客加强') {
      if (Math.random() < basis.aiSkil1Porbability) {
        this.mySkill[index] = false;
        this.useSkills1();
      } else {
        setTimeout(function () {
          _this9.aiUseSkills(name, index);
        }, basis.aiSkilBuiltTime * 1000);
      }
    } else if (name == '收益增强') {
      if (Math.random() < basis.aiSkil2Porbability) {
        this.mySkill[index] = false;
        this.useSkills2();
      } else {
        setTimeout(function () {
          _this9.aiUseSkills(name, index);
        }, basis.aiSkilBuiltTime * 1000);
      }
    }
  },
  useSkills: function useSkills(e) {
    var node = e.currentTarget;
    var nodeChildren = node.children[0];

    if (node.name == '技能槽1') {
      this.mySkill[0] = false;
    } else {
      this.mySkill[1] = false;
    }

    if (nodeChildren.name == '移动加强') {
      this.useSkills3(node);
    } else if (nodeChildren.name == '揽客加强') {
      this.useSkills1(node);
    } else if (nodeChildren.name == '收益增强') {
      this.useSkills2(node);
    }

    if (this.node.name == '我') {
      nodeChildren.getComponent(cc.Sprite).spriteFrame = '';
      nodeChildren.name = '';
    }
  },
  useSkills1: function useSkills1(node) {
    var _this10 = this;

    this.node.getComponent(cc.CircleCollider).radius = basis.devourRadius * basis.skils1Effect;
    this.openSkills1Filg = true;
    this.e1 = 0;
    this.zsquanquan.runAction(cc.sequence(cc.scaleTo(0.2, basis.skils1Effect), cc.callFunc(function () {
      _this10.node.getChildByName('吸附').active = true;
    })));

    if (this.node.name == '我') {
      _interact.interact._this.openTips('揽客');
    }
  },
  closeSkills1: function closeSkills1() {
    this.node.getComponent(cc.CircleCollider).radius = basis.devourRadius;
    this.zsquanquan.runAction(cc.scaleTo(0.2, 1));
    this.node.getChildByName('吸附').active = false;
    this.openSkills1Filg = false;
    this.e1 = 0;
  },
  useSkills2: function useSkills2(node) {
    this.goldRatio = basis.skils2Effect;
    this.openSkills2Filg = true;
    this.e2 = 0;
    this.node.getChildByName('收益增强').active = true;

    if (this.node.name == '我') {
      _interact.interact._this.openTips('收益');
    }
  },
  closeSkills2: function closeSkills2() {
    this.goldRatio = 1;
    this.openSkills2Filg = false;
    this.e2 = 0;
    this.node.getChildByName('收益增强').active = false;
  },
  useSkills3: function useSkills3(node) {
    this.baseMovingSpeed = basis.skils3Effect;
    this.openSkills3Filg = true;
    this.e3 = 0;
    this.node.getChildByName('拖尾').active = true;

    if (this.node.name == '我') {
      _interact.interact._this.openTips('加速');
    }
  },
  closeSkills3: function closeSkills3() {
    this.node.getChildByName('拖尾').active = false;
    this.baseMovingSpeed = 1;
    this.openSkills3Filg = false;
    this.e3 = 0;
  },
  getDistance: function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  },
  yidong: function yidong(angle) {
    if (this.death) return;
    var node = this.node;
    if (isNaN(angle)) return;
    var _ = 0,
        x = _.x,
        y = _.y;
    y = this.y = Math.cos(angle * 2 * Math.PI / 360) * this.movespeed * this.baseMovingSpeed;
    x = this.x = Math.sin(angle * 2 * Math.PI / 360) * this.movespeed * this.baseMovingSpeed;

    if (node.x + x > basis.mapWidth / 2 || node.x + x < -(basis.mapWidth / 2)) {
      node.x = x > 0 ? basis.mapWidth / 2 : -(basis.mapWidth / 2);
    } else {
      node.x += x;
    }

    if (node.y + y > basis.mapHeight / 2 || node.y + y < -(basis.mapHeight / 2)) {
      node.y = y > 0 ? basis.mapHeight / 2 : -(basis.mapHeight / 2);
    } else {
      node.y += y;
    }

    this.node.yidongfig = true;
    this.xiaodituw.x = node.x * (200 / basis.mapWidth);
    this.xiaodituw.y = node.y * (240 / basis.mapHeight);
    this.zsjiantou.angle = -angle; //this.lizi.angle = -angle;

    this.zsjiantou.x = Math.sin(angle * 2 * Math.PI / 360) * (this.zsquanquan.width / 2 - 17);
    this.zsjiantou.y = Math.cos(angle * 2 * Math.PI / 360) * (this.zsquanquan.width / 2 - 17);

    if (angle > 180) {
      if (this.node.name == '我') {
        this.tx.node.scaleX = -0.5;
      } else {
        this.tx.node.scaleX = -0.5;
      }
    } else {
      if (this.node.name == '我') {
        this.tx.node.scaleX = 0.5;
      } else {
        this.tx.node.scaleX = 0.5;
      }
    }
  },
  setFlashing: function setFlashing() {
    this.flashing = this.node.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(0.5), cc.fadeIn(0.5))));
  },
  closeFlashing: function closeFlashing() {
    this.node.stopAction(this.flashing);
    this.node.opacity = 255;
  },
  openBubble: function openBubble(txt) {
    var _this11 = this;

    this.qipaowenan.string = txt;
    this.qipao.active = true;
    this.qipao.runAction(cc.sequence(cc.fadeIn(0.2), cc.fadeIn(2), cc.fadeOut(0.2), cc.callFunc(function () {
      _this11.qipao.active = false;
    })));
  },
  update: function update(dt) {
    if (this.node.name != '我') {
      this.aiMove();

      _game.game._this.yingcang(this.node);
    }

    if (!_game.game._this.gameStart) return;

    if (this.node.invincible > 0) {
      if (this.node.name == '我' && basis.myGameStartInvin) {} else {
        this.node.invincible -= dt;

        if (this.node.invincible <= 0) {
          this.closeFlashing();
        }
      }

      ;
    }

    this.e4 += dt;

    if (this.e4 >= basis.boothGolidTimeIniter && _game.game._this.gameStart) {
      this.e4 = 0;
      this.updeGold();
    }

    if (this.openSkills1Filg) {
      this.e1 += dt;

      if (this.e1 >= basis.skils1Time) {
        this.openSkills1Filg = false;
        this.closeSkills1();
      }
    }

    if (this.openSkills2Filg) {
      this.e2 += dt;

      if (this.e2 >= basis.skils2Time) {
        this.openSkills2Filg = false;
        this.closeSkills2();
      }
    }

    if (this.openSkills3Filg) {
      this.e3 += dt;

      if (this.e3 >= basis.skils3Time) {
        console.log('结束');
        this.closeSkills3();
      }
    }

    if (this.devourFlag) {
      this.e5 += dt;

      if (this.e5 >= basis.devourSpeed) {
        this.e5 = 0;
        this.devourFlag = false;
      }
    }

    if (this.qipao.active) return;
    this.e += dt;

    if (this.e >= this.generateBubbleTime) {
      this.generateBubbleTime = Math.random() * basis.generateBubbleTime;
      this.e = 0;
      var txt = basis.basedBubble[Math.floor(Math.random() * basis.basedBubble.length)];
      this.openBubble(txt);
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9yZW53dS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiYmFzaXMiLCJ3eGN1ciIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidHgiLCJkcmFnb25Cb25lcyIsIkFybWF0dXJlRGlzcGxheSIsImNodXBlbnF1YW4iLCJOb2RlIiwicWlwYW8iLCJxaXBhb3dlbmFuIiwiTGFiZWwiLCJ0dW5zaGlxdWFuIiwienNrcnMiLCJ6c3F1YW5xdWFuIiwienNqaWFudG91IiwibGl6aSIsImFpbmFtZSIsInh1bnpoYW5nIiwiU3ByaXRlIiwiZ2FtZWxldmVsIiwiZ2FtZUxldmVsTmFtZSIsInNoZW5naml0eCIsIm9uTG9hZCIsImUiLCJlMSIsImUyIiwiZTMiLCJlNCIsImU1IiwiZmlndXJlTGV2ZWwiLCJteWZvbGxvd2VyTGlzdCIsIm15Zm9sbG93ZXJMaXN0MiIsImtlcmVud3VMaXN0Iiwib2NjQm9vdGhOb2RlTGlzdCIsIm15U2tpbGwiLCJiYXNlTW92aW5nU3BlZWQiLCJnb2xkUmF0aW8iLCJnb2xkIiwib3BlblNraWxsczFGaWxnIiwib3BlblNraWxsczJGaWxnIiwib3BlblNraWxsczNGaWxnIiwiYmVBdHRhY2tCb290aCIsInhpYW9kaXR1dyIsImRlYXRoIiwibm9kZSIsImludmluY2libGUiLCJnYW1lU3RhcnRJbnZUaW1lIiwiZm9sbExldmVsIiwiZGV2b3VyRmxhZyIsIm9jY0Jvb3RoIiwicGVvcGxlMSIsInBlb3BsZTIiLCJwZW9wbGUzIiwicGVvcGxlNCIsIm9jY0Jvb3RoTnVtIiwibG9zc01vbmVyeSIsImdlbmVyYXRlQnViYmxlVGltZSIsIk1hdGgiLCJyYW5kb20iLCJ1cGRlRGV2b3VyUmFkaXVzIiwiZ2V0Q29tcG9uZW50IiwiQ2lyY2xlQ29sbGlkZXIiLCJhaVBlckxpc3QiLCJyZXNmeWQiLCJtb3Zlc3BlZWQiLCJyb21UYXJnZXQiLCJzZXRGbGFzaGluZyIsInNldFR4IiwibG9jYWxHcm93dGgiLCJyYWRpdXMiLCJkZXZvdXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsInN0cmluZyIsInVwRm9sbExldmVsIiwidGFyZ2V0TW9uZXkiLCJhY3RpdmUiLCJzZXRUaW1lb3V0IiwibmFtZSIsImludGVyYWN0IiwiX3RoaXMiLCJ3ZGRxZGoiLCJ3ZG1iZGoiLCJ3ZG1iamR0IiwicHJvZ3Jlc3MiLCJ3ZG1ibXMyIiwid2RtYm1zMyIsInNob3dSYWRpdXNNIiwid2RtYm1zMSIsInBhcmVudCIsInN0YXJ0IiwiZ29sZFJuYWsiLCJwdXNoIiwiZ2FtZU5hbWUiLCJsZW5ndGgiLCJnYW1lIiwicmVud3UiLCJ1cGRlR29sZCIsInNwcml0ZUZyYW1lIiwiZ2FtZUltZ0xpc3QiLCJnZXRTcHJpdGVGcmFtZSIsIm15TGV2ZWwiLCJsZXZlbE5hbWUiLCJmbG9vciIsImltZ05hbWUiLCJteWZpZ3VyZSIsImFybWF0dXJlTmFtZSIsInBsYXlBbmltYXRpb24iLCJnYW1lTm1hZSIsImFpUm9tSW1nIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsInVwZGVTcGVlZCIsIm1vdmVTcGVlZExldmVsQXR0ZW51IiwiYm9vdGhMZXZlbDFHbG9kIiwiYm9vdGhMZXZlbDJHbG9kIiwiYm9vdGhMZXZlbDNHbG9kIiwiYm9vdGhMZXZlbDRHbG9kIiwiZmluZCIsInJlcyIsInVwZGVJbnRlciIsInJuYWsiLCJzb3J0IiwiYSIsImIiLCJmaW5kSW5kZXgiLCJidGJhaXBpbmciLCJ3b2RlamluYmkyIiwieW91eGlwaG16IiwiY2hpbGRyZW4iLCJ5b3V4aXBoamluYmkiLCJyb3VuZCIsInNldEdvbGQiLCJpIiwib2NjQm9vdGhOb2RlIiwiZ2V0TW9uZXkiLCJsZXZlbCIsImFpTW92ZSIsImdhbWVTdGFydCIsImluaXRBaVBlckxpc3QiLCJhYnMiLCJ4IiwiYWlUYXJnZXRYIiwieSIsImFpVGFyZ2V0WSIsIk9iamVjdCIsImtleXMiLCJqbmVuZ0xpc3QiLCJ2YWx1ZXMiLCJ0YW53ZWlMaXN0Iiwibm9kZUNvbSIsInpoYW5saW5nemhlbm9kZSIsImFpVGFyZ2V0Q29ycmVjdGlvbiIsIm11YmlhbyIsInRhcmdldFgiLCJ0YXJnZXRZIiwiYW5nbGUiLCJnZXRBbmdsZSIsInlpZG9uZyIsImNvbWJhdEp1ZGdlIiwidGFyZ2V0Tm9kZSIsInpodXJlbnd1TGlzdCIsImp1ZGdlIiwiY2FsbCIsIl9pZCIsInRhcmdldFRwIiwibWFwV2lkdGgiLCJtYXBIZWlnaHQiLCJhaVVzZVNraWxscyIsInJlc3VycmVjdGlvbiIsImludmluY2libGVUaW1lIiwiYWlSZXN1cnJDb29saW5nIiwib25Db2xsaXNpb25TdGF5Iiwib3RoZXIiLCJzZWxmIiwib2JzZXJ2ZXJQYXR0ZXJuIiwiZ3JvdXAiLCJhZGRNeWZvbGxvdyIsImFkZFNraWxsIiwiZ2V0TW9uZXJ5IiwiYmVEZXZvdXJzIiwibXlGb2xsTm9kZSIsImNvdW50TGF5ZXIiLCJpbmRleCIsImxheWVyIiwibmxheWVyIiwiUEkiLCJ0YW4iLCJpbml0TGlzdCIsImFjdCIsIm1vdmVUbyIsInYyIiwibW9lbnlMaXN0IiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJjYWxsRnVuYyIsInNjYWxlIiwiekluZGV4IiwibW9uZXkiLCJtYXAiLCJtb25leVBvb2wiLCJwdXQiLCJzcGxpdCIsImlzX1dFQ0hBVF9HQU1FIiwib3BlbnZpYnJhdGlvbiIsInd4IiwidmlicmF0ZVNob3J0Iiwic2tpbHNUeXBlIiwibWFwWSIsIm1hcFgiLCJib290aEFyckxpc3QiLCJib290aEFyciIsImpvaW4iLCJzIiwiaW5pdCIsImdldE15Qm9vdGgiLCJkZWxldGVNeUJvb3RoIiwiemhhb2h1YW4iLCJ6aGFpbSIsImdldENoaWxkQnlOYW1lIiwiZmFkZU91dCIsIm9wYWNpdHkiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwic3VtbW9uRGlzdGFuY2UiLCJib290aCIsImJvb3RoRm9sbG93ZXIiLCJqIiwic3VtbW9uU3BlZWQiLCJvcGVuVGlwcyIsImFpU2tpbDNQb3JiYWJpbGl0eSIsInVzZVNraWxsczMiLCJhaVNraWxCdWlsdFRpbWUiLCJhaVNraWwxUG9yYmFiaWxpdHkiLCJ1c2VTa2lsbHMxIiwiYWlTa2lsMlBvcmJhYmlsaXR5IiwidXNlU2tpbGxzMiIsInVzZVNraWxscyIsImN1cnJlbnRUYXJnZXQiLCJub2RlQ2hpbGRyZW4iLCJza2lsczFFZmZlY3QiLCJzY2FsZVRvIiwiY2xvc2VTa2lsbHMxIiwic2tpbHMyRWZmZWN0IiwiY2xvc2VTa2lsbHMyIiwic2tpbHMzRWZmZWN0IiwiY2xvc2VTa2lsbHMzIiwieDEiLCJ5MSIsIngyIiwieTIiLCJzcXJ0IiwicG93IiwiaXNOYU4iLCJjb3MiLCJzaW4iLCJ5aWRvbmdmaWciLCJzY2FsZVgiLCJmbGFzaGluZyIsInJlcGVhdEZvcmV2ZXIiLCJmYWRlSW4iLCJjbG9zZUZsYXNoaW5nIiwic3RvcEFjdGlvbiIsIm9wZW5CdWJibGUiLCJ0eHQiLCJ1cGRhdGUiLCJkdCIsInlpbmdjYW5nIiwibXlHYW1lU3RhcnRJbnZpbiIsImJvb3RoR29saWRUaW1lSW5pdGVyIiwic2tpbHMxVGltZSIsInNraWxzMlRpbWUiLCJza2lsczNUaW1lIiwiZGV2b3VyU3BlZWQiLCJiYXNlZEJ1YmJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7ZUFQa0JBLE9BQU8sQ0FBQyxPQUFEO0lBQWpCQyxpQkFBQUE7O2dCQUNVRCxPQUFPLENBQUMsV0FBRDtJQUFqQkUsa0JBQUFBOztBQVFSQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFQyxXQUFXLENBQUNDLGVBRFI7QUFFUkMsSUFBQUEsVUFBVSxFQUFFUCxFQUFFLENBQUNRLElBRlA7QUFHUkMsSUFBQUEsS0FBSyxFQUFFVCxFQUFFLENBQUNRLElBSEY7QUFJUkUsSUFBQUEsVUFBVSxFQUFFVixFQUFFLENBQUNXLEtBSlA7QUFLUkMsSUFBQUEsVUFBVSxFQUFFWixFQUFF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QUFaO0FBQ0EsYUFBS3VJLFlBQUw7QUFDSDtBQUNKOztBQUVELFFBQUksS0FBS3ZNLFVBQVQsRUFBcUI7QUFDakIsV0FBS3BCLEVBQUwsSUFBVytPLEVBQVg7O0FBQ0EsVUFBSSxLQUFLL08sRUFBTCxJQUFXL0IsS0FBSyxDQUFDcVIsV0FBckIsRUFBa0M7QUFDOUIsYUFBS3RQLEVBQUwsR0FBVSxDQUFWO0FBQ0EsYUFBS29CLFVBQUwsR0FBa0IsS0FBbEI7QUFDSDtBQUNKOztBQUVELFFBQUksS0FBS3hDLEtBQUwsQ0FBV29FLE1BQWYsRUFBdUI7QUFDdkIsU0FBS3JELENBQUwsSUFBVW9QLEVBQVY7O0FBQ0EsUUFBSSxLQUFLcFAsQ0FBTCxJQUFVLEtBQUtpQyxrQkFBbkIsRUFBdUM7QUFDbkMsV0FBS0Esa0JBQUwsR0FBMEJDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQjdELEtBQUssQ0FBQzJELGtCQUFoRDtBQUNBLFdBQUtqQyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFVBQU1rUCxHQUFHLEdBQUc1USxLQUFLLENBQUNzUixXQUFOLENBQWtCMU4sSUFBSSxDQUFDOEMsS0FBTCxDQUFXOUMsSUFBSSxDQUFDQyxNQUFMLEtBQWdCN0QsS0FBSyxDQUFDc1IsV0FBTixDQUFrQnJMLE1BQTdDLENBQWxCLENBQVo7QUFDQSxXQUFLMEssVUFBTCxDQUFnQkMsR0FBaEI7QUFDSDtBQUNKO0FBOTBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGJhc2lzIH0gPSByZXF1aXJlKCdiYXNpcycpO1xuY29uc3QgeyB3eGN1ciB9ID0gcmVxdWlyZSgnd2VpeGluX3R5Jyk7XG5cbmltcG9ydCB7IGZvbGxvd2VybGlzdCB9IGZyb20gJy4vZm9sbG93ZXJsaXN0JztcbmltcG9ydCB7IGludGVyYWN0IH0gZnJvbSAnLi9pbnRlcmFjdC5qcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL21hcC5qcyc7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9nYW1lLmpzJztcbmltcG9ydCB7IG11c2ljIH0gZnJvbSAnLi4vY3VycmVuY3kvbXVzaWMnO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0eDogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5LFxuICAgICAgICBjaHVwZW5xdWFuOiBjYy5Ob2RlLFxuICAgICAgICBxaXBhbzogY2MuTm9kZSxcbiAgICAgICAgcWlwYW93ZW5hbjogY2MuTGFiZWwsXG4gICAgICAgIHR1bnNoaXF1YW46IGNjLk5vZGUsXG5cbiAgICAgICAgenNrcnM6IGNjLkxhYmVsLFxuICAgICAgICB6c3F1YW5xdWFuOiBjYy5Ob2RlLFxuICAgICAgICB6c2ppYW50b3U6IGNjLk5vZGUsXG5cbiAgICAgICAgbGl6aTogY2MuTm9kZSxcblxuICAgICAgICBhaW5hbWU6IGNjLkxhYmVsLFxuICAgICAgICB4dW56aGFuZzogY2MuU3ByaXRlLFxuICAgICAgICBnYW1lbGV2ZWw6IGNjLkxhYmVsLFxuICAgICAgICBnYW1lTGV2ZWxOYW1lOiBjYy5MYWJlbCxcbiAgICAgICAgc2hlbmdqaXR4OiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5lID0gMDtcbiAgICAgICAgdGhpcy5lMSA9IDA7Ly/mj73lrqLliqDlvLrpgZPlhbfml7bpl7RcbiAgICAgICAgdGhpcy5lMiA9IDA7Ly/lop7mlLbnm4rlop7pgZPlhbfml7bpl7RcbiAgICAgICAgdGhpcy5lMyA9IDA7Ly/np7vpgJ/liqDlvLrpgZPlhbfml7bpl7RcbiAgICAgICAgdGhpcy5lNCA9IDA7Ly/ph5HluIHml7bpl7RcbiAgICAgICAgdGhpcy5lNSA9IDA7Ly/ooqvlkJ7lmazml7bpl7RcbiAgICAgICAgdGhpcy5maWd1cmVMZXZlbCA9IDE7Ly/kurrniannrYnnuqdcbiAgICAgICAgdGhpcy5teWZvbGxvd2VyTGlzdCA9IFtdOyAvL+W4puWcqOi6q+S4iueahOWuouS6ulxuICAgICAgICB0aGlzLm15Zm9sbG93ZXJMaXN0MiA9IFtdOy8v5omA5pyJ5a6i5Lq6XG4gICAgICAgIHRoaXMua2VyZW53dUxpc3QgPSBbXTsvL+WuouS6uuS9jee9ruWNoOmihuivt+WuolxuICAgICAgICB0aGlzLm9jY0Jvb3RoTm9kZUxpc3QgPSBbXTsvL+WNoOmihueahOaRiuS9jW5vZGVcbiAgICAgICAgdGhpcy5teVNraWxsID0gW2ZhbHNlLCBmYWxzZV07Ly/miJHnmoTmioDog73liJfooahcbiAgICAgICAgdGhpcy5iYXNlTW92aW5nU3BlZWQgPSAxOy8v5Z+656GA56e76YCfXG4gICAgICAgIHRoaXMuZ29sZFJhdGlvID0gMTsvL+mHkeW4geWAjeeOh1xuICAgICAgICB0aGlzLmdvbGQgPSAwO1xuICAgICAgICB0aGlzLm9wZW5Ta2lsbHMxRmlsZyA9IGZhbHNlOy8v5o+95a6i5Yqg5by65ZCv5YqoXG4gICAgICAgIHRoaXMub3BlblNraWxsczJGaWxnID0gZmFsc2U7Ly/lop7mlLbnm4rlop7lkK/liqhcbiAgICAgICAgdGhpcy5vcGVuU2tpbGxzM0ZpbGcgPSBmYWxzZTsvL+enu+mAn+WKoOW8uuWQr+WKqFxuICAgICAgICB0aGlzLmJlQXR0YWNrQm9vdGggPSBudWxsOy8v6KKr5pS75Ye755qE5pGK5L2NXG4gICAgICAgIHRoaXMueGlhb2RpdHV3ID0gbnVsbDsvL+aIkeeahOWwj+WcsOWbvlxuICAgICAgICB0aGlzLmRlYXRoID0gZmFsc2U7Ly/mmK/lkKbmrbvkuqFcbiAgICAgICAgLy8gaWYodGhpcy5ub2RlLm5hbWUgPT0n5oiRJyl7XG4gICAgICAgIC8vICAgICB0aGlzLmRlYXRoID0gZmFsc2U7Ly/mmK/lkKbmrbvkuqFcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLm5vZGUuaW52aW5jaWJsZSA9IGJhc2lzLmdhbWVTdGFydEludlRpbWU7Ly/ml6DmlYzml7bpl7RcbiAgICAgICAgdGhpcy5mb2xsTGV2ZWwgPSAxOy8v5oul5pyJ55qE5a6i5Lq6562J57qnXG4gICAgICAgIHRoaXMuZGV2b3VyRmxhZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9jY0Jvb3RoID0ge1xuICAgICAgICAgICAgcGVvcGxlMTogMCxcbiAgICAgICAgICAgIHBlb3BsZTI6IDAsXG4gICAgICAgICAgICBwZW9wbGUzOiAwLFxuICAgICAgICAgICAgcGVvcGxlNDogMCxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9jY0Jvb3RoTnVtID0gMDtcbiAgICAgICAgdGhpcy5sb3NzTW9uZXJ5ID0gMDtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJ1YmJsZVRpbWUgPSBNYXRoLnJhbmRvbSgpICogYmFzaXMuZ2VuZXJhdGVCdWJibGVUaW1lO1xuXG4gICAgICAgIHRoaXMudXBkZURldm91clJhZGl1cygpO1xuICAgICAgICB0aGlzLnR1bnNoaXF1YW4gPSB0aGlzLnR1bnNoaXF1YW4uZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKTtcblxuICAgICAgICB0aGlzLmFpUGVyTGlzdCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVzZnlkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm1vdmVzcGVlZCA9IGJhc2lzLm1vdmVzcGVlZDtcblxuICAgICAgICB0aGlzLnJvbVRhcmdldCgpO1xuICAgICAgICB0aGlzLnNldEZsYXNoaW5nKCk7XG4gICAgICAgIHRoaXMuc2V0VHgoKTtcblxuICAgIH0sXG4gICAgdXBkZURldm91clJhZGl1cygpIHtcbiAgICAgICAgY29uc3QgbG9jYWxHcm93dGggPSBiYXNpcy5sb2NhbEdyb3d0aFt0aGlzLmZpZ3VyZUxldmVsIC0gMV07XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLnJhZGl1cyA9IGxvY2FsR3Jvd3RoLmRldm91clJhZGl1cztcbiAgICAgICAgdGhpcy56c3F1YW5xdWFuLndpZHRoID0gbG9jYWxHcm93dGguZGV2b3VyUmFkaXVzICogMjtcbiAgICAgICAgdGhpcy56c3F1YW5xdWFuLmhlaWdodCA9IGxvY2FsR3Jvd3RoLmRldm91clJhZGl1cyAqIDI7XG4gICAgICAgIHRoaXMuZ2FtZWxldmVsLnN0cmluZyA9IHRoaXMuZmlndXJlTGV2ZWw7XG4gICAgfSxcbiAgICB1cEZvbGxMZXZlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlndXJlTGV2ZWwgIT0gMTAgJiYgYmFzaXMubG9jYWxHcm93dGhbdGhpcy5maWd1cmVMZXZlbF0udGFyZ2V0TW9uZXkgPD0gdGhpcy5nb2xkKSB7XG4gICAgICAgICAgICB0aGlzLmZpZ3VyZUxldmVsICs9IDE7XG4gICAgICAgICAgICB0aGlzLnNoZW5naml0eC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGVuZ2ppdHguYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICAgICAgdGhpcy51cGRlRGV2b3VyUmFkaXVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09ICfmiJEnICYmIHRoaXMuZmlndXJlTGV2ZWwgIT0gMTApIHtcbiAgICAgICAgICAgIGludGVyYWN0Ll90aGlzLndkZHFkai5zdHJpbmcgPSB0aGlzLmZpZ3VyZUxldmVsO1xuICAgICAgICAgICAgaW50ZXJhY3QuX3RoaXMud2RtYmRqLnN0cmluZyA9IHRoaXMuZmlndXJlTGV2ZWwgKyAxO1xuICAgICAgICAgICAgaW50ZXJhY3QuX3RoaXMud2RtYmpkdC5wcm9ncmVzcyA9XG4gICAgICAgICAgICAgICAgKHRoaXMuZ29sZCAtIGJhc2lzLmxvY2FsR3Jvd3RoW3RoaXMuZmlndXJlTGV2ZWwgLSAxXS50YXJnZXRNb25leSkgLyAoYmFzaXMubG9jYWxHcm93dGhbdGhpcy5maWd1cmVMZXZlbF0udGFyZ2V0TW9uZXkgLSBiYXNpcy5sb2NhbEdyb3d0aFt0aGlzLmZpZ3VyZUxldmVsIC0gMV0udGFyZ2V0TW9uZXkpO1xuXG4gICAgICAgICAgICBpbnRlcmFjdC5fdGhpcy53ZG1ibXMyLnN0cmluZyA9IGAke3RoaXMuZmlndXJlTGV2ZWwgKyAxfWA7XG4gICAgICAgICAgICBpbnRlcmFjdC5fdGhpcy53ZG1ibXMzLnN0cmluZyA9IGDvvIzmj73lrqLljYrlvoQrJHtiYXNpcy5sb2NhbEdyb3d0aFt0aGlzLmZpZ3VyZUxldmVsXS5zaG93UmFkaXVzTX3nsbNgO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm9kZS5uYW1lID09ICfmiJEnICYmIHRoaXMuZmlndXJlTGV2ZWwgPT0gMTApIHtcbiAgICAgICAgICAgIGludGVyYWN0Ll90aGlzLndkZHFkai5zdHJpbmcgPSB0aGlzLmZpZ3VyZUxldmVsO1xuICAgICAgICAgICAgaW50ZXJhY3QuX3RoaXMud2RtYmRqLnN0cmluZyA9ICfiiJ4nO1xuICAgICAgICAgICAgaW50ZXJhY3QuX3RoaXMud2RtYmpkdC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICBpbnRlcmFjdC5fdGhpcy53ZG1ibXMxLnN0cmluZyA9IGDlt7Lnu4/ovr7liLDmnIDpq5jnrYnnuqdgO1xuICAgICAgICAgICAgaW50ZXJhY3QuX3RoaXMud2RtYm1zMy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGludGVyYWN0Ll90aGlzLndkbWJtczIubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpbnRlcmFjdC5fdGhpcy5nb2xkUm5hay5wdXNoKHsgbmFtZTogdGhpcy5ub2RlLm5hbWUsIGdvbGQ6IDAsIGdhbWVOYW1lOiB0aGlzLm5vZGUuZ2FtZU5hbWUgfSk7XG5cbiAgICAgICAgdGhpcy5haW5hbWUuc3RyaW5nID0gdGhpcy5ub2RlLmdhbWVOYW1lO1xuXG4gICAgICAgIGlmIChpbnRlcmFjdC5fdGhpcy5nb2xkUm5hay5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBnYW1lLl90aGlzLnJlbnd1LnVwZGVHb2xkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gJ+aIkScpIHtcbiAgICAgICAgICAgIHRoaXMueHVuemhhbmcuc3ByaXRlRnJhbWUgPSBpbnRlcmFjdC5fdGhpcy5nYW1lSW1nTGlzdC5nZXRTcHJpdGVGcmFtZShg5YuL56ug562J57qnJHtiYXNpcy5teUxldmVsfeWwj2ApO1xuICAgICAgICAgICAgdGhpcy5nYW1lTGV2ZWxOYW1lLnN0cmluZyA9IGJhc2lzLmxldmVsTmFtZVtiYXNpcy5teUxldmVsIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbXlMZXZlbCA9IGJhc2lzLm15TGV2ZWwgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzIC0gMSk7XG4gICAgICAgICAgICBteUxldmVsIDwgMSA/IG15TGV2ZWwgPSAxIDogbXlMZXZlbCA+IDEwID8gbXlMZXZlbCA9IDEwIDogJyc7XG4gICAgICAgICAgICB0aGlzLnh1bnpoYW5nLnNwcml0ZUZyYW1lID0gaW50ZXJhY3QuX3RoaXMuZ2FtZUltZ0xpc3QuZ2V0U3ByaXRlRnJhbWUoYOWLi+eroOetiee6pyR7bXlMZXZlbH3lsI9gKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxldmVsTmFtZS5zdHJpbmcgPSBiYXNpcy5sZXZlbE5hbWVbbXlMZXZlbCAtIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cEZvbGxMZXZlbCgpXG4gICAgfSxcbiAgICBzZXRUeCgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09ICfmiJEnKSB7XG4gICAgICAgICAgICB0aGlzLmltZ05hbWUgPSBiYXNpcy5teWZpZ3VyZS5pbWdOYW1lO1xuICAgICAgICAgICAgdGhpcy50eC5hcm1hdHVyZU5hbWUgPSBiYXNpcy5teWZpZ3VyZS5pbWdOYW1lO1xuICAgICAgICAgICAgdGhpcy50eC5wbGF5QW5pbWF0aW9uKCfooYzotbAnKVxuICAgICAgICAgICAgdGhpcy5ub2RlLmdhbWVOYW1lID0gYmFzaXMuZ2FtZU5tYWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltZ05hbWUgPSBnYW1lLl90aGlzLmFpUm9tSW1nWzBdO1xuICAgICAgICAgICAgZ2FtZS5fdGhpcy5haVJvbUltZy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICB0aGlzLnR4LmFybWF0dXJlTmFtZSA9IHRoaXMuaW1nTmFtZTtcbiAgICAgICAgICAgIHRoaXMudHgucGxheUFuaW1hdGlvbign6KGM6LWwJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW1nTmFtZSlcbiAgICB9LFxuICAgIHVwZGVTcGVlZCgpIHtcbiAgICAgICAgdGhpcy5tb3Zlc3BlZWQgPSBiYXNpcy5tb3Zlc3BlZWQgLSBiYXNpcy5tb3ZlU3BlZWRMZXZlbEF0dGVudSAqICh0aGlzLmZvbGxMZXZlbCAtIDEpO1xuICAgICAgICB0aGlzLnR1bnNoaXF1YW4ucmFkaXVzID0gMTUwICsgKHRoaXMuZm9sbExldmVsIC0gMSkgKiA4MDtcbiAgICAgICAgdGhpcy50dW5zaGlxdWFuLm5vZGUud2lkdGggPSAzMDAgKyAodGhpcy5mb2xsTGV2ZWwgLSAxKSAqIDE2MDtcbiAgICAgICAgdGhpcy50dW5zaGlxdWFuLm5vZGUuaGVpZ2h0ID0gMzAwICsgKHRoaXMuZm9sbExldmVsIC0gMSkgKiAxNjA7XG5cbiAgICAgICAgdGhpcy56c2tycy5zdHJpbmcgPSB0aGlzLm15Zm9sbG93ZXJMaXN0Lmxlbmd0aDtcbiAgICB9LFxuICAgIHVwZGVHb2xkKGdvbGQpIHtcbiAgICAgICAgdGhpcy5nb2xkID0gZ29sZCB8fCAodGhpcy5vY2NCb290aC5wZW9wbGUxICogYmFzaXMuYm9vdGhMZXZlbDFHbG9kICsgdGhpcy5vY2NCb290aC5wZW9wbGUyICogYmFzaXMuYm9vdGhMZXZlbDJHbG9kICsgdGhpcy5vY2NCb290aC5wZW9wbGUzICogYmFzaXMuYm9vdGhMZXZlbDNHbG9kICsgdGhpcy5vY2NCb290aC5wZW9wbGU0ICogYmFzaXMuYm9vdGhMZXZlbDRHbG9kKSAqIHRoaXMuZ29sZFJhdGlvICsgdGhpcy5nb2xkO1xuXG4gICAgICAgIGludGVyYWN0Ll90aGlzLmdvbGRSbmFrLmZpbmQocmVzID0+IHJlcy5uYW1lID09IHRoaXMubm9kZS5uYW1lKS5nb2xkID0gdGhpcy5nb2xkO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLm5vZGUubmFtZSA9PSAn5oiRJykge1xuXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2NjQm9vdGhOb2RlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG5vZGUgPSB3eGN1ci5nZXROb2RlQm9vbChtYXAuX3RoaXMubW9uZXlQb29sLCBtYXAuX3RoaXMubW9uZXkpO1xuICAgICAgICAvLyAgICAgICAgIG5vZGUueCA9IHRoaXMub2NjQm9vdGhOb2RlTGlzdFtpXS54O1xuICAgICAgICAvLyAgICAgICAgIG5vZGUueSA9IHRoaXMub2NjQm9vdGhOb2RlTGlzdFtpXS55O1xuICAgICAgICAvLyAgICAgICAgIG5vZGUubW9uZXkgPSAwO1xuICAgICAgICAvLyAgICAgICAgIG5vZGUucGFyZW50ID0gbWFwLl90aGlzLnNjZW5lTWFwO1xuXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5nZXRNb25lcnkobm9kZSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgdGhpcy51cEZvbGxMZXZlbCgpO1xuXG4gICAgICAgIHRoaXMudXBkZUludGVyKCk7XG4gICAgfSxcbiAgICB1cGRlSW50ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSAhPSAn5oiRJykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgcm5hayA9IGludGVyYWN0Ll90aGlzLmdvbGRSbmFrLnNvcnQoKGEsIGIpID0+IGIuZ29sZCAtIGEuZ29sZCkuZmluZEluZGV4KHJlcyA9PiByZXMubmFtZSA9PSB0aGlzLm5vZGUubmFtZSk7XG5cbiAgICAgICAgdGhpcy5ybmFrID0gcm5haztcblxuICAgICAgICBpbnRlcmFjdC5fdGhpcy5idGJhaXBpbmcuc3RyaW5nID0gYCR7cm5hayArIDF9YDtcbiAgICAgICAgaW50ZXJhY3QuX3RoaXMud29kZWppbmJpMi5zdHJpbmcgPSB0aGlzLmdvbGQ7XG5cbiAgICAgICAgaWYgKGludGVyYWN0Ll90aGlzLmdvbGRSbmFrWzBdKSB7XG4gICAgICAgICAgICBpbnRlcmFjdC5fdGhpcy55b3V4aXBobXouY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpbnRlcmFjdC5fdGhpcy5nb2xkUm5ha1swXS5nYW1lTmFtZTtcbiAgICAgICAgICAgIGludGVyYWN0Ll90aGlzLnlvdXhpcGhqaW5iaS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IE1hdGgucm91bmQoaW50ZXJhY3QuX3RoaXMuZ29sZFJuYWtbMF0uZ29sZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludGVyYWN0Ll90aGlzLmdvbGRSbmFrWzFdKSB7XG4gICAgICAgICAgICBpbnRlcmFjdC5fdGhpcy55b3V4aXBobXouY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpbnRlcmFjdC5fdGhpcy5nb2xkUm5ha1sxXS5nYW1lTmFtZTtcbiAgICAgICAgICAgIGludGVyYWN0Ll90aGlzLnlvdXhpcGhqaW5iaS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IE1hdGgucm91bmQoaW50ZXJhY3QuX3RoaXMuZ29sZFJuYWtbMV0uZ29sZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludGVyYWN0Ll90aGlzLmdvbGRSbmFrWzJdKSB7XG4gICAgICAgICAgICBpbnRlcmFjdC5fdGhpcy55b3V4aXBobXouY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpbnRlcmFjdC5fdGhpcy5nb2xkUm5ha1syXS5nYW1lTmFtZTtcbiAgICAgICAgICAgIGludGVyYWN0Ll90aGlzLnlvdXhpcGhqaW5iaS5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IE1hdGgucm91bmQoaW50ZXJhY3QuX3RoaXMuZ29sZFJuYWtbMl0uZ29sZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnRlcmFjdC5fdGhpcy5zZXRHb2xkKHRoaXMuZ29sZCk7XG4gICAgICAgIGludGVyYWN0Ll90aGlzLmdvbGQgPSB0aGlzLmdvbGQ7XG4gICAgICAgIGludGVyYWN0Ll90aGlzLnJuYWsgPSB0aGlzLnJuYWsgKyAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vY2NCb290aE5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvY2NCb290aE5vZGUgPSB0aGlzLm9jY0Jvb3RoTm9kZUxpc3RbaV0uZ2V0Q29tcG9uZW50KCdib290aCcpXG4gICAgICAgICAgICBvY2NCb290aE5vZGUuZ2V0TW9uZXkob2NjQm9vdGhOb2RlLmxldmVsKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhaU1vdmUoKSB7XG4gICAgICAgIGlmICghZ2FtZS5fdGhpcy5nYW1lU3RhcnQgfHwgdGhpcy5kZWF0aCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuYWlQZXJMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBaVBlckxpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhNYXRoLmZsb29yKHRoaXMubm9kZS54KSkgPj0gTWF0aC5hYnMoTWF0aC5mbG9vcih0aGlzLmFpVGFyZ2V0WCkpICYmIE1hdGguYWJzKE1hdGguZmxvb3IodGhpcy5ub2RlLnkpKSA+PSBNYXRoLmFicyhNYXRoLmZsb29yKHRoaXMuYWlUYXJnZXRZKSkpIHtcbiAgICAgICAgICAgIHRoaXMucm9tVGFyZ2V0KCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIGlmIChPYmplY3Qua2V5cyh0aGlzLmFpUGVyTGlzdC56aHVyZW53dUxpc3QpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgIC8v55yL5Yiw5YW25LuW546p5a62XG4gICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKDEsIE9iamVjdC5rZXlzKHRoaXMuYWlQZXJMaXN0LnpodXJlbnd1TGlzdCkubGVuZ3RoKVxuICAgICAgICAvLyAgICAgdGhpcy5yZXNmeWQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgdGhpcy5iZUF0dGFja0Jvb3RoID0gbnVsbDtcbiAgICAgICAgLy8gICAgIHRoaXMuY29tYmF0SnVkZ2UoKTtcbiAgICAgICAgLy8gfSBlbHNlIFxuICAgICAgICBpZiAodGhpcy5iZUF0dGFja0Jvb3RoKSB7XG4gICAgICAgICAgICAvL+aRiuS9jeWPl+WIsOaUu+WHu1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygyKVxuICAgICAgICAgICAgdGhpcy5haVRhcmdldFggPSB0aGlzLmJlQXR0YWNrQm9vdGgueDtcbiAgICAgICAgICAgIHRoaXMuYWlUYXJnZXRZID0gdGhpcy5iZUF0dGFja0Jvb3RoLnk7XG4gICAgICAgICAgICB0aGlzLmJlQXR0YWNrQm9vdGggPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2UgaWYgKE9iamVjdC5rZXlzKHRoaXMuYWlQZXJMaXN0Lm1vZW55TGlzdCkubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyAgICAgLy/nnIvop4Hpkp7npahcbiAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2coMylcbiAgICAgICAgLy8gICAgIHRoaXMuYWlUYXJnZXRYID0gT2JqZWN0LnZhbHVlcyh0aGlzLmFpUGVyTGlzdC5tb2VueUxpc3QpWzBdLng7XG4gICAgICAgIC8vICAgICB0aGlzLmFpVGFyZ2V0WSA9IE9iamVjdC52YWx1ZXModGhpcy5haVBlckxpc3QubW9lbnlMaXN0KVswXS55O1xuXG4gICAgICAgIC8vIH0gXG4gICAgICAgIGVsc2UgaWYgKE9iamVjdC5rZXlzKHRoaXMuYWlQZXJMaXN0LmpuZW5nTGlzdCkubGVuZ3RoID4gMCAmJiAoIXRoaXMubXlTa2lsbFswXSB8fCAhdGhpcy5teVNraWxsWzFdKSkge1xuICAgICAgICAgICAgLy/nnIvop4HpgZPlhbdcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coNClcbiAgICAgICAgICAgIHRoaXMuYWlUYXJnZXRYID0gT2JqZWN0LnZhbHVlcyh0aGlzLmFpUGVyTGlzdC5qbmVuZ0xpc3QpWzBdLng7XG4gICAgICAgICAgICB0aGlzLmFpVGFyZ2V0WSA9IE9iamVjdC52YWx1ZXModGhpcy5haVBlckxpc3Quam5lbmdMaXN0KVswXS55O1xuICAgICAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKHRoaXMuYWlQZXJMaXN0LmtlcmVud3VMaXN0KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvL+eci+ingemhvuWuolxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyg1LCB0aGlzLm5vZGUubmFtZSx0aGlzLmFpUGVyTGlzdC5rZXJlbnd1TGlzdC5sZW5ndGgpXG4gICAgICAgICAgICB0aGlzLmFpVGFyZ2V0WCA9IE9iamVjdC52YWx1ZXModGhpcy5haVBlckxpc3Qua2VyZW53dUxpc3QpWzBdLng7XG4gICAgICAgICAgICB0aGlzLmFpVGFyZ2V0WSA9IE9iamVjdC52YWx1ZXModGhpcy5haVBlckxpc3Qua2VyZW53dUxpc3QpWzBdLnk7XG4gICAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModGhpcy5haVBlckxpc3QudGFud2VpTGlzdCkubGVuZ3RoID4gMCAmJiB0aGlzLm15Zm9sbG93ZXJMaXN0Lmxlbmd0aCA+PSAwKSB7XG4gICAgICAgICAgICAvL+eci+ingeaRiuS9jVxuICAgICAgICAgICAgY29uc3Qgbm9kZUNvbSA9IE9iamVjdC52YWx1ZXModGhpcy5haVBlckxpc3QudGFud2VpTGlzdClbMF0uZ2V0Q29tcG9uZW50KCdib290aCcpXG4gICAgICAgICAgICBpZiAobm9kZUNvbS56aGFubGluZ3poZW5vZGUubmFtZSAhPSB0aGlzLm5vZGUubmFtZSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coNix0aGlzLm5vZGUubmFtZSx0aGlzLmFpUGVyTGlzdC50YW53ZWlMaXN0Lmxlbmd0aClcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5haVRhcmdldENvcnJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubm9kZS54IC0gdGhpcy5haVRhcmdldFgpIDwgNSAmJiBNYXRoLmFicyh0aGlzLm5vZGUueSAtIHRoaXMuYWlUYXJnZXRZKSA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfovr7liLDnn6vmraPnm67moIfmiYDlnKjvvIzph43mlrDlrprkvY3mkYrkvY0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5haVRhcmdldENvcnJlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWlUYXJnZXRYID0gT2JqZWN0LnZhbHVlcyh0aGlzLmFpUGVyTGlzdC50YW53ZWlMaXN0KVswXS54O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5haVRhcmdldFkgPSBPYmplY3QudmFsdWVzKHRoaXMuYWlQZXJMaXN0LnRhbndlaUxpc3QpWzBdLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpVGFyZ2V0WCA9IE9iamVjdC52YWx1ZXModGhpcy5haVBlckxpc3QudGFud2VpTGlzdClbMF0ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5haVRhcmdldFkgPSBPYmplY3QudmFsdWVzKHRoaXMuYWlQZXJMaXN0LnRhbndlaUxpc3QpWzBdLnk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubm9kZS54IC0gdGhpcy5haVRhcmdldFgpIDwgNSAmJiBNYXRoLmFicyh0aGlzLm5vZGUueSAtIHRoaXMuYWlUYXJnZXRZKSA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfot53nprvov4fov5HvvIzov5vooYzlgY/lt67lpITnkIYnKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5haVRhcmdldENvcnJlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5haVRhcmdldFggKz0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWlUYXJnZXRZICs9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXViaWFvID0gJ+aRiuS9jSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tdWJpYW8gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhcmdldFggPSB0aGlzLmFpVGFyZ2V0WDtcbiAgICAgICAgbGV0IHRhcmdldFkgPSB0aGlzLmFpVGFyZ2V0WTtcbiAgICAgICAgbGV0IGFuZ2xlID0gd3hjdXIuZ2V0QW5nbGUodGhpcy5ub2RlLngsIHRoaXMubm9kZS55LCB0YXJnZXRYLCB0YXJnZXRZKTtcbiAgICAgICAgLy8gaWYgKHRoaXMubm9kZS54ID09IHRhcmdldFgsIHRoaXMubm9kZS55ID09IHRhcmdldFkpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKDExMSlcbiAgICAgICAgLy8gICAgIHRoaXMudGFyZ2V0VHAgPSBudWxsO1xuICAgICAgICAvLyB9XG5cblxuXG4gICAgICAgIGlmICghdGhpcy5yZXNmeWQpIHJldHVybjtcbiAgICAgICAgdGhpcy55aWRvbmcoYW5nbGUpO1xuICAgIH0sXG4gICAgY29tYmF0SnVkZ2UoKSB7XG4gICAgICAgIGxldCB0YXJnZXROb2RlO1xuICAgICAgICBmb3IgKHZhciBrZXlzIGluIHRoaXMuYWlQZXJMaXN0LnpodXJlbnd1TGlzdCkge1xuICAgICAgICAgICAganVkZ2UuY2FsbCh0aGlzLCB0aGlzLmFpUGVyTGlzdC56aHVyZW53dUxpc3Rba2V5c10pO1xuICAgICAgICAgICAgaWYgKHRhcmdldE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5haVBlckxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5haVBlckxpc3Quemh1cmVud3VMaXN0W2tleXNdO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGp1ZGdlKG5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVDb20gPSBub2RlLmdldENvbXBvbmVudCgncmVud3UnKTtcbiAgICAgICAgICAgIGlmICghbm9kZUNvbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUubmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlQ29tLm15Zm9sbG93ZXJMaXN0Lmxlbmd0aCA9PSB0aGlzLm15Zm9sbG93ZXJMaXN0Lmxlbmd0aCB8fCBub2RlQ29tLm15Zm9sbG93ZXJMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVDb20uYWlQZXJMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlQ29tLmFpUGVyTGlzdC56aHVyZW53dUxpc3RbdGhpcy5ub2RlLl9pZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFpUGVyTGlzdC56aHVyZW53dUxpc3Rbbm9kZS5faWRdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlQ29tLm15Zm9sbG93ZXJMaXN0Lmxlbmd0aCAtIHRoaXMubXlmb2xsb3dlckxpc3QubGVuZ3RoID4gMCAmJiB0aGlzLnRhcmdldFRwICE9ICfot5EnKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IG5vZGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFpVGFyZ2V0WCA9IC0obm9kZS54ICsgMTAwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5haVRhcmdldFkgPSAtKG5vZGUueCArIDEwMDApO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0VHAgPSAn6LeRJztcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFpVGFyZ2V0WCA+IChiYXNpcy5tYXBXaWR0aCAvIDIpIHx8IHRoaXMuYWlUYXJnZXRYIDwgLSAoYmFzaXMubWFwV2lkdGggLyAyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbVRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFpVGFyZ2V0WSA+IChiYXNpcy5tYXBIZWlnaHQgLyAyKSB8fCB0aGlzLmFpVGFyZ2V0WSA8IC0gKGJhc2lzLm1hcEhlaWdodCAvIDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9tVGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygn6LeRJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXlTa2lsbFswXSA9PSAn56e75Yqo5Yqg5by6Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpVXNlU2tpbGxzKHRoaXMubXlTa2lsbFswXSwgMClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubXlTa2lsbFsxXSA9PSAn56e75Yqo5Yqg5by6Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpVXNlU2tpbGxzKHRoaXMubXlTa2lsbFsxXSwgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgZWxzZSBpZiAobm9kZUNvbS5teWZvbGxvd2VyTGlzdC5sZW5ndGggLSB0aGlzLm15Zm9sbG93ZXJMaXN0Lmxlbmd0aCA8IDAgJiYgdGhpcy50YXJnZXRUcCAhPSAn6ZSB5a6aJykge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuYWlUYXJnZXRYID0gbm9kZS54ICsgTWF0aC5yYW5kb20oKSAqIDEwMFxuICAgICAgICAgICAgLy8gICAgIHRoaXMuYWlUYXJnZXRZID0gbm9kZS55ICsgTWF0aC5yYW5kb20oKSAqIDEwMFxuXG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMubXlTa2lsbFswXSA9PSAn56e75Yqo5Yqg5by6Jykge1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmFpVXNlU2tpbGxzKHRoaXMubXlTa2lsbFswXSwgMClcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYgKHRoaXMubXlTa2lsbFsxXSA9PSAn56e75Yqo5Yqg5by6Jykge1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmFpVXNlU2tpbGxzKHRoaXMubXlTa2lsbFsxXSwgMSlcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMudGFyZ2V0VHAgPSAnJztcbiAgICAgICAgICAgIC8vICAgICB9LCAyMDApXG4gICAgICAgICAgICAvLyAgICAgdGhpcy50YXJnZXRUcCA9ICfplIHlrponO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfSxcbiAgICByZXN1cnJlY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IChNYXRoLnJhbmRvbSgpICogMSAtIDAuNSkgKiBiYXNpcy5tYXBXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoTWF0aC5yYW5kb20oKSAqIDEgLSAwLjUpICogYmFzaXMubWFwSGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGVhdGggPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0geDtcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0geTtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLmludmluY2libGUgPSBiYXNpcy5pbnZpbmNpYmxlVGltZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRGbGFzaGluZygpO1xuXG4gICAgICAgIH0sIGJhc2lzLmFpUmVzdXJyQ29vbGluZyAqIDEwMDAwKVxuICAgIH0sXG4gICAgcm9tVGFyZ2V0KCkge1xuICAgICAgICBjb25zdCBhaVRhcmdldFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBiYXNpcy5tYXBXaWR0aDtcbiAgICAgICAgY29uc3QgYWlUYXJnZXRZID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogYmFzaXMubWFwSGVpZ2h0O1xuXG4gICAgICAgIGlmKE1hdGguYWJzKGFpVGFyZ2V0WCAtIHRoaXMuYWlUYXJnZXRYKSA8IDUwICYmIE1hdGguYWJzKGFpVGFyZ2V0WSAtIHRoaXMuYWlUYXJnZXRZKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn6ZqP5py65a6a5L2N6Led56a76L+H6L+R77yM6YeN5paw5a6a5L2NJyk7XG4gICAgICAgICAgICB0aGlzLnJvbVRhcmdldCgpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFpVGFyZ2V0WCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIGJhc2lzLm1hcFdpZHRoO1xuICAgICAgICB0aGlzLmFpVGFyZ2V0WSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIGJhc2lzLm1hcEhlaWdodDtcbiAgICB9LFxuICAgIG9uQ29sbGlzaW9uU3RheTogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBvdGhlci5ub2RlO1xuXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSAn5oiRJyAmJiBiYXNpcy5vYnNlcnZlclBhdHRlcm4pIHJldHVybjtcblxuICAgICAgICBpZiAobm9kZS5pbnZpbmNpYmxlID4gMCkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChub2RlLmdyb3VwID09ICflrqLkurrniaknKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE15Zm9sbG93KG5vZGUpO1xuICAgICAgICAgICAgdGhpcy5teWZvbGxvd2VyTGlzdDIucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5ncm91cCA9PSAn5oqA6IO9Jykge1xuICAgICAgICAgICAgdGhpcy5hZGRTa2lsbChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5ncm91cCA9PSAn6ZKxJykge1xuICAgICAgICAgICAgdGhpcy5nZXRNb25lcnkobm9kZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlRGV2b3Vycyhub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmRldm91ckZsYWcpIHJldHVybjtcbiAgICAgICAgdGhpcy5kZXZvdXJGbGFnID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmtlcmVud3VMaXN0W3RoaXMubXlmb2xsb3dlckxpc3QubGVuZ3RoIC0gMV0gPSBmYWxzZTtcbiAgICAgICAgY29uc3Qgbm9kZUNvbSA9IG5vZGUuZ2V0Q29tcG9uZW50KCdyZW53dScpO1xuICAgICAgICBjb25zdCBteUZvbGxOb2RlID0gdGhpcy5teWZvbGxvd2VyTGlzdFt0aGlzLm15Zm9sbG93ZXJMaXN0Lmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIG5vZGVDb20uYWRkTXlmb2xsb3cobXlGb2xsTm9kZSk7XG5cbiAgICAgICAgdGhpcy5pbml0QWlQZXJMaXN0KCk7XG5cbiAgICAgICAgdGhpcy5teWZvbGxvd2VyTGlzdC5zcGxpY2UodGhpcy5teWZvbGxvd2VyTGlzdC5sZW5ndGggLSAxLCAxKTtcblxuICAgICAgICB0aGlzLmNvdW50TGF5ZXIodGhpcy5teWZvbGxvd2VyTGlzdC5sZW5ndGgsIDEpO1xuICAgICAgICB0aGlzLnVwZGVTcGVlZCgpO1xuICAgIH0sXG4gICAgY291bnRMYXllcihpbmRleCwgbGF5ZXIpIHtcbiAgICAgICAgbGV0IG5sYXllciA9IE1hdGguZmxvb3IoMzYwIC8gTWF0aC5mbG9vcigxODAgLyAoTWF0aC5QSSAvIE1hdGgudGFuKCgxNTAgLyAyKSAvICg4MCAqIChsYXllciArIDAuNSkpKSkpKTtcblxuICAgICAgICBpZiAoaW5kZXggPiBubGF5ZXIpIHtcbiAgICAgICAgICAgIGluZGV4IC09IG5sYXllcjtcbiAgICAgICAgICAgIGxheWVyICs9IDE7XG4gICAgICAgICAgICB0aGlzLmNvdW50TGF5ZXIoaW5kZXgsIGxheWVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb2xsTGV2ZWwgPSBsYXllcjtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpbml0QWlQZXJMaXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUubmFtZSlcbiAgICAgICAgaWYgKCF0aGlzLmNodXBlbnF1YW4pIHJldHVybjtcblxuICAgICAgICB0aGlzLmFpUGVyTGlzdCA9IHRoaXMuY2h1cGVucXVhbi5nZXRDb21wb25lbnQoJ2FpcGVyY2VwdGlvbicpLmluaXRMaXN0KCk7XG4gICAgfSxcblxuICAgIGdldE1vbmVyeShub2RlKSB7XG4gICAgICAgIC8vIG5vZGUuZ3JvdXAgPSAn5Zu65a6aJztcbiAgICAgICAgbm9kZS5ncm91cCA9ICdkZWZhdWx0JztcblxuICAgICAgICBsZXQgYWN0ID0gbnVsbFxuXG4gICAgICAgIC8vIGlmICh0aGlzLm5vZGUubmFtZSA9PSAn5oiRJykge1xuICAgICAgICAvLyAgICAgbm9kZS54ID0gMCAtICh0aGlzLm5vZGUueCAtIG5vZGUueClcbiAgICAgICAgLy8gICAgIG5vZGUueSA9IDAgLSAodGhpcy5ub2RlLnkgLSBub2RlLnkpXG5cbiAgICAgICAgLy8gICAgIGFjdCA9IGNjLnNwYXduKFxuICAgICAgICAvLyAgICAgICAgIGNjLm1vdmVUbygwLjMsIGNjLnYyKC0yOTIsIDM4MSAtIGdhbWUuX3RoaXMuaGVpZ2h0KSksXG4gICAgICAgIC8vICAgICAgICAgY2Muc2NhbGVUbygwLjMsIDEuMylcbiAgICAgICAgLy8gICAgIClcbiAgICAgICAgLy8gICAgIG5vZGUuekluZGV4ID0gOTtcbiAgICAgICAgLy8gICAgIG5vZGUucGFyZW50ID0gaW50ZXJhY3QuX3RoaXMueWluZ3k7XG5cbiAgICAgICAgLy8gICAgIG11c2ljLl90aGlzLm9wZW5NdXNpYygnJywgJ2NoYW9wYW9mZWlkb25nJyk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIGFjdCA9IGNjLm1vdmVUbygwLjIsIGNjLnYyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSkpXG4gICAgICAgIC8vfVxuXG4gICAgICAgIGlmICh0aGlzLmFpUGVyTGlzdCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWlQZXJMaXN0Lm1vZW55TGlzdFtub2RlLl9pZF07XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBhY3QsXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgbm9kZS56SW5kZXggPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZ29sZCArPSBub2RlLm1vbmV5O1xuICAgICAgICAgICAgICAgIHRoaXMudXBkZUludGVyKCk7XG4gICAgICAgICAgICAgICAgbWFwLl90aGlzLm1vbmV5UG9vbC5wdXQobm9kZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKVxuXG5cbiAgICB9LFxuICAgIGFkZFNraWxsKG5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMubXlTa2lsbFswXSAmJiB0aGlzLm15U2tpbGxbMV0pIHJldHVybjtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm15U2tpbGxbMF0gPyAxIDogMDtcbiAgICAgICAgdGhpcy5teVNraWxsW2luZGV4XSA9IG5vZGUubmFtZS5zcGxpdCgnLScpWzFdO1xuXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSAn5oiRJykge1xuICAgICAgICAgICAgaW50ZXJhY3QuX3RoaXNbYHNraWxsJHtpbmRleCArIDF9YF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBpbnRlcmFjdC5fdGhpcy5nYW1lSW1nTGlzdC5nZXRTcHJpdGVGcmFtZSh0aGlzLm15U2tpbGxbaW5kZXhdKTtcbiAgICAgICAgICAgIGludGVyYWN0Ll90aGlzW2Bza2lsbCR7aW5kZXggKyAxfWBdLm5hbWUgPSB0aGlzLm15U2tpbGxbaW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAod3hjdXIuaXNfV0VDSEFUX0dBTUUoKSkge1xuICAgICAgICAgICAgICAgIGlmIChiYXNpcy5vcGVudmlicmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnZpYnJhdGVTaG9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9pZiAodGhpcy5teVNraWxsW2luZGV4XSAhPSAn56e76YCf5Yqg5by6Jykge1xuICAgICAgICAgICAgdGhpcy5haVVzZVNraWxscyh0aGlzLm15U2tpbGxbaW5kZXhdLCBpbmRleClcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWlQZXJMaXN0LmpuZW5nTGlzdFtub2RlLl9pZF07XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgLy99XG4gICAgICAgIH1cblxuICAgICAgICBtYXAuX3RoaXNbYHNraWxzJHtub2RlLnNraWxzVHlwZX1Qb29sYF0ucHV0KG5vZGUpO1xuXG4gICAgICAgIG1hcC5fdGhpcy5tYXBbbm9kZS5tYXBZXVtub2RlLm1hcFhdID0gMDtcbiAgICAgICAgbWFwLl90aGlzLmJvb3RoQXJyTGlzdC5wdXNoKHsgeDogbm9kZS5tYXBYLCB5OiBub2RlLm1hcFkgfSk7XG4gICAgICAgIG1hcC5fdGhpcy5ib290aEFyci5zcGxpdChgLCR7bm9kZS5tYXBYfV8ke25vZGUubWFwWX1fX2xzLGApLmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICBhZGRNeWZvbGxvdyhub2RlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcy5rZXJlbnd1TGlzdC5maW5kSW5kZXgocmVzID0+IHJlcyA9PSBmYWxzZSk7XG5cbiAgICAgICAgcyA8IDAgPyBzID0gdGhpcy5rZXJlbnd1TGlzdC5sZW5ndGggOiBcIlwiO1xuICAgICAgICB0aGlzLmtlcmVud3VMaXN0W3NdID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBub2RlQ29tID0gbm9kZS5nZXRDb21wb25lbnQoJ2ZvbGxvd2VyJyk7XG4gICAgICAgIG5vZGVDb20uaW5pdChzLCAxMDAsIHRoaXMubm9kZSk7XG4gICAgICAgIG5vZGVDb20ueWlkb25nKHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMubXlmb2xsb3dlckxpc3Quc3BsaWNlKHMsIDAsIG5vZGUpO1xuXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSAhPSAn5oiRJykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWlQZXJMaXN0LmtlcmVud3VMaXN0W25vZGUuX2lkXTtcbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnpza3JzLnN0cmluZyA9IHRoaXMubXlmb2xsb3dlckxpc3QubGVuZ3RoO1xuICAgIH0sXG4gICAgZ2V0TXlCb290aChub2RlKSB7XG4gICAgICAgIHRoaXMub2NjQm9vdGhOb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgIH0sXG4gICAgZGVsZXRlTXlCb290aChub2RlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vY2NCb290aE5vZGVMaXN0LmZpbmRJbmRleChyZXMgPT4gcmVzLm5hbWUgPT0gbm9kZS5uYW1lKTtcbiAgICAgICAgdGhpcy5vY2NCb290aE5vZGVMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfSxcbiAgICB6aGFvaHVhbigpIHtcbiAgICAgICAgY29uc3QgemhhaW0gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ+WPrOWUpCcpO1xuICAgICAgICB6aGFpbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB6aGFpbS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5mYWRlT3V0KDAuNSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgemhhaW0ub3BhY2l0eSA9IDI1NVxuICAgICAgICAgICAgICAgIHpoYWltLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICApKVxuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMub2NjQm9vdGhOb2RlTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMub2NjQm9vdGhOb2RlTGlzdFtpXVxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmdldERpc3RhbmNlKG5vZGUueCwgbm9kZS55LCB0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGlzdGFuY2UpXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiBiYXNpcy5zdW1tb25EaXN0YW5jZSkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBib290aCA9IG5vZGUuZ2V0Q29tcG9uZW50KCdib290aCcpO1xuICAgICAgICAgICAgY29uc3QgYm9vdGhGb2xsb3dlciA9IGJvb3RoLmJvb3RoRm9sbG93ZXI7XG5cblxuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvb3RoRm9sbG93ZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE15Zm9sbG93KGJvb3RoRm9sbG93ZXJbal0ubm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vY2NCb290aFtgcGVvcGxlJHtub2RlLmxldmVsfWBdIC09IDE7XG4gICAgICAgICAgICAgICAgYm9vdGhGb2xsb3dlcltqXS5nZXRDb21wb25lbnQoJ2ZvbGxvd2VyJykuc3VtbW9uU3BlZWQgPSBiYXNpcy5zdW1tb25TcGVlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYm9vdGguYmFpdGFuZG9uZ2h1LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gYm9vdGguemhhbmxpbmd6aGVub2RlID0gJyc7XG4gICAgICAgICAgICAvLyBib290aC5ib290aEZvbGxvd2VyID0gW107XG4gICAgICAgICAgICAvLyBib290aC5kZWxldGVNaW5Cb290aCgpO1xuXG4gICAgICAgICAgICAvLyB0aGlzLm9jY0Jvb3RoTm9kZUxpc3Quc3BsaWNlKGksIDEpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gJ+aIkScpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9jY0Jvb3RoTnVtIC09IDE7XG4gICAgICAgICAgICAgICAgLy8gaW50ZXJhY3QuX3RoaXMudXBkYUhhdmVCb290aCh0aGlzLm9jY0Jvb3RoTnVtKTtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdC5fdGhpcy5vcGVuVGlwcygn5Y+s5ZSkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWlVc2VTa2lsbHMobmFtZSwgaW5kZXgpIHtcblxuICAgICAgICBpZiAobmFtZSA9PSAn56e75Yqo5Yqg5by6Jykge1xuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCBiYXNpcy5haVNraWwzUG9yYmFiaWxpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15U2tpbGxbaW5kZXhdID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVzZVNraWxsczMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWlVc2VTa2lsbHMobmFtZSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0sIGJhc2lzLmFpU2tpbEJ1aWx0VGltZSAqIDEwMDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PSAn5o+95a6i5Yqg5by6Jykge1xuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCBiYXNpcy5haVNraWwxUG9yYmFiaWxpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm15U2tpbGxbaW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VTa2lsbHMxKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpVXNlU2tpbGxzKG5hbWUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9LCBiYXNpcy5haVNraWxCdWlsdFRpbWUgKiAxMDAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gJ+aUtuebiuWinuW8uicpIHtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgYmFzaXMuYWlTa2lsMlBvcmJhYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teVNraWxsW2luZGV4XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlU2tpbGxzMigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5haVVzZVNraWxscyhuYW1lLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSwgYmFzaXMuYWlTa2lsQnVpbHRUaW1lICogMTAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXNlU2tpbGxzKGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3Qgbm9kZUNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblswXTtcblxuICAgICAgICBpZiAobm9kZS5uYW1lID09ICfmioDog73mp70xJykge1xuICAgICAgICAgICAgdGhpcy5teVNraWxsWzBdID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm15U2tpbGxbMV0gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlQ2hpbGRyZW4ubmFtZSA9PSAn56e75Yqo5Yqg5by6Jykge1xuICAgICAgICAgICAgdGhpcy51c2VTa2lsbHMzKG5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGVDaGlsZHJlbi5uYW1lID09ICfmj73lrqLliqDlvLonKSB7XG4gICAgICAgICAgICB0aGlzLnVzZVNraWxsczEobm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZUNoaWxkcmVuLm5hbWUgPT0gJ+aUtuebiuWinuW8uicpIHtcbiAgICAgICAgICAgIHRoaXMudXNlU2tpbGxzMihub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSAn5oiRJykge1xuICAgICAgICAgICAgbm9kZUNoaWxkcmVuLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gJyc7XG4gICAgICAgICAgICBub2RlQ2hpbGRyZW4ubmFtZSA9ICcnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1c2VTa2lsbHMxKG5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikucmFkaXVzID0gYmFzaXMuZGV2b3VyUmFkaXVzICogYmFzaXMuc2tpbHMxRWZmZWN0O1xuXG4gICAgICAgIHRoaXMub3BlblNraWxsczFGaWxnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lMSA9IDA7XG5cbiAgICAgICAgdGhpcy56c3F1YW5xdWFuLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCBiYXNpcy5za2lsczFFZmZlY3QpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgn5ZC46ZmEJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkpXG5cbiAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09ICfmiJEnKSB7XG4gICAgICAgICAgICBpbnRlcmFjdC5fdGhpcy5vcGVuVGlwcygn5o+95a6iJylcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VTa2lsbHMxKCkge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSBiYXNpcy5kZXZvdXJSYWRpdXM7XG5cbiAgICAgICAgdGhpcy56c3F1YW5xdWFuLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAxKVxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCflkLjpmYQnKS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9wZW5Ta2lsbHMxRmlsZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmUxID0gMDtcbiAgICB9LFxuICAgIHVzZVNraWxsczIobm9kZSkge1xuICAgICAgICB0aGlzLmdvbGRSYXRpbyA9IGJhc2lzLnNraWxzMkVmZmVjdDtcbiAgICAgICAgdGhpcy5vcGVuU2tpbGxzMkZpbGcgPSB0cnVlO1xuICAgICAgICB0aGlzLmUyID0gMDtcblxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ+aUtuebiuWinuW8uicpLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09ICfmiJEnKSB7XG4gICAgICAgICAgICBpbnRlcmFjdC5fdGhpcy5vcGVuVGlwcygn5pS255uKJylcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VTa2lsbHMyKCkge1xuICAgICAgICB0aGlzLmdvbGRSYXRpbyA9IDE7XG4gICAgICAgIHRoaXMub3BlblNraWxsczJGaWxnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZTIgPSAwO1xuXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgn5pS255uK5aKe5by6JykuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICB1c2VTa2lsbHMzKG5vZGUpIHtcbiAgICAgICAgdGhpcy5iYXNlTW92aW5nU3BlZWQgPSBiYXNpcy5za2lsczNFZmZlY3Q7XG4gICAgICAgIHRoaXMub3BlblNraWxsczNGaWxnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lMyA9IDA7XG5cbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCfmi5blsL4nKS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSAn5oiRJykge1xuICAgICAgICAgICAgaW50ZXJhY3QuX3RoaXMub3BlblRpcHMoJ+WKoOmAnycpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NlU2tpbGxzMygpIHtcblxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ+aLluWwvicpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhc2VNb3ZpbmdTcGVlZCA9IDE7XG4gICAgICAgIHRoaXMub3BlblNraWxsczNGaWxnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZTMgPSAwO1xuICAgIH0sXG5cblxuICAgIGdldERpc3RhbmNlKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeDEgLSB4MiwgMikgKyBNYXRoLnBvdyh5MSAtIHkyLCAyKSk7XG4gICAgfSxcbiAgICB5aWRvbmcoYW5nbGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVhdGgpIHJldHVybjtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZTtcblxuICAgICAgICBpZiAoaXNOYU4oYW5nbGUpKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHsgeCwgeSB9ID0gMDtcblxuICAgICAgICB5ID0gdGhpcy55ID0gTWF0aC5jb3MoYW5nbGUgKiAyICogTWF0aC5QSSAvIDM2MCkgKiB0aGlzLm1vdmVzcGVlZCAqIHRoaXMuYmFzZU1vdmluZ1NwZWVkO1xuICAgICAgICB4ID0gdGhpcy54ID0gTWF0aC5zaW4oYW5nbGUgKiAyICogTWF0aC5QSSAvIDM2MCkgKiB0aGlzLm1vdmVzcGVlZCAqIHRoaXMuYmFzZU1vdmluZ1NwZWVkO1xuXG4gICAgICAgIGlmIChub2RlLnggKyB4ID4gKGJhc2lzLm1hcFdpZHRoIC8gMikgfHwgbm9kZS54ICsgeCA8IC0gKGJhc2lzLm1hcFdpZHRoIC8gMikpIHtcbiAgICAgICAgICAgIG5vZGUueCA9IHggPiAwID8gKGJhc2lzLm1hcFdpZHRoIC8gMikgOiAtIChiYXNpcy5tYXBXaWR0aCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS54ICs9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS55ICsgeSA+IChiYXNpcy5tYXBIZWlnaHQgLyAyKSB8fCBub2RlLnkgKyB5IDwgLSAoYmFzaXMubWFwSGVpZ2h0IC8gMikpIHtcbiAgICAgICAgICAgIG5vZGUueSA9IHkgPiAwID8gKGJhc2lzLm1hcEhlaWdodCAvIDIpIDogLSAoYmFzaXMubWFwSGVpZ2h0IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLnkgKz0geTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS55aWRvbmdmaWcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMueGlhb2RpdHV3LnggPSBub2RlLnggKiAoMjAwIC8gYmFzaXMubWFwV2lkdGgpO1xuICAgICAgICB0aGlzLnhpYW9kaXR1dy55ID0gbm9kZS55ICogKDI0MCAvIGJhc2lzLm1hcEhlaWdodCk7XG5cbiAgICAgICAgdGhpcy56c2ppYW50b3UuYW5nbGUgPSAtYW5nbGU7XG5cbiAgICAgICAgLy90aGlzLmxpemkuYW5nbGUgPSAtYW5nbGU7XG4gICAgICAgIHRoaXMuenNqaWFudG91LnggPSBNYXRoLnNpbihhbmdsZSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAqICh0aGlzLnpzcXVhbnF1YW4ud2lkdGggLyAyIC0gMTcpXG4gICAgICAgIHRoaXMuenNqaWFudG91LnkgPSBNYXRoLmNvcyhhbmdsZSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAqICh0aGlzLnpzcXVhbnF1YW4ud2lkdGggLyAyIC0gMTcpXG5cbiAgICAgICAgaWYgKGFuZ2xlID4gMTgwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gJ+aIkScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR4Lm5vZGUuc2NhbGVYID0gLTAuNVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR4Lm5vZGUuc2NhbGVYID0gLTAuNVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gJ+aIkScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR4Lm5vZGUuc2NhbGVYID0gMC41XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHgubm9kZS5zY2FsZVggPSAwLjVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0Rmxhc2hpbmcoKSB7XG4gICAgICAgIHRoaXMuZmxhc2hpbmcgPSB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5mYWRlT3V0KDAuNSksXG4gICAgICAgICAgICAgICAgY2MuZmFkZUluKDAuNSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKSk7XG4gICAgfSxcbiAgICBjbG9zZUZsYXNoaW5nKCkge1xuXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWN0aW9uKHRoaXMuZmxhc2hpbmcpO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICB9LFxuICAgIG9wZW5CdWJibGUodHh0KSB7XG4gICAgICAgIHRoaXMucWlwYW93ZW5hbi5zdHJpbmcgPSB0eHQ7XG5cbiAgICAgICAgdGhpcy5xaXBhby5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnFpcGFvLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLmZhZGVJbigwLjIpLFxuICAgICAgICAgICAgY2MuZmFkZUluKDIpLFxuICAgICAgICAgICAgY2MuZmFkZU91dCgwLjIpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucWlwYW8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKVxuICAgIH0sXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSAhPSAn5oiRJykge1xuICAgICAgICAgICAgdGhpcy5haU1vdmUoKTtcbiAgICAgICAgICAgIGdhbWUuX3RoaXMueWluZ2NhbmcodGhpcy5ub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZ2FtZS5fdGhpcy5nYW1lU3RhcnQpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5ub2RlLmludmluY2libGUgPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gJ+aIkScgJiYgYmFzaXMubXlHYW1lU3RhcnRJbnZpbikge1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5pbnZpbmNpYmxlIC09IGR0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuaW52aW5jaWJsZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VGbGFzaGluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmU0ICs9IGR0O1xuXG4gICAgICAgIGlmICh0aGlzLmU0ID49IGJhc2lzLmJvb3RoR29saWRUaW1lSW5pdGVyICYmIGdhbWUuX3RoaXMuZ2FtZVN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmU0ID0gMDtcbiAgICAgICAgICAgIHRoaXMudXBkZUdvbGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wZW5Ta2lsbHMxRmlsZykge1xuICAgICAgICAgICAgdGhpcy5lMSArPSBkdDtcbiAgICAgICAgICAgIGlmICh0aGlzLmUxID49IGJhc2lzLnNraWxzMVRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Ta2lsbHMxRmlsZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VTa2lsbHMxKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcGVuU2tpbGxzMkZpbGcpIHtcbiAgICAgICAgICAgIHRoaXMuZTIgKz0gZHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5lMiA+PSBiYXNpcy5za2lsczJUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuU2tpbGxzMkZpbGcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU2tpbGxzMigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3BlblNraWxsczNGaWxnKSB7XG4gICAgICAgICAgICB0aGlzLmUzICs9IGR0O1xuICAgICAgICAgICAgaWYgKHRoaXMuZTMgPj0gYmFzaXMuc2tpbHMzVGltZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnu5PmnZ8nKVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VTa2lsbHMzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZXZvdXJGbGFnKSB7XG4gICAgICAgICAgICB0aGlzLmU1ICs9IGR0O1xuICAgICAgICAgICAgaWYgKHRoaXMuZTUgPj0gYmFzaXMuZGV2b3VyU3BlZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmU1ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmRldm91ckZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnFpcGFvLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmUgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLmUgPj0gdGhpcy5nZW5lcmF0ZUJ1YmJsZVRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVCdWJibGVUaW1lID0gTWF0aC5yYW5kb20oKSAqIGJhc2lzLmdlbmVyYXRlQnViYmxlVGltZTtcbiAgICAgICAgICAgIHRoaXMuZSA9IDA7XG4gICAgICAgICAgICBjb25zdCB0eHQgPSBiYXNpcy5iYXNlZEJ1YmJsZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiYXNpcy5iYXNlZEJ1YmJsZS5sZW5ndGgpXTtcbiAgICAgICAgICAgIHRoaXMub3BlbkJ1YmJsZSh0eHQpXG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==