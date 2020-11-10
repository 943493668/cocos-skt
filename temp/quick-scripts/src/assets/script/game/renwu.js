"use strict";
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