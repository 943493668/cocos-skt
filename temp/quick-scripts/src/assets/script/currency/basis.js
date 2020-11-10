"use strict";
cc._RF.push(module, 'c5f82VKiNhFjIqhJM5GTkAp', 'basis');
// script/currency/basis.js

"use strict";

var basis = {
  version: "1.0.0",
  openId: "\u6D4B\u8BD5\u73A9\u5BB6" + Math.random() * 100,
  gold: 9999,
  //钱
  gameNmae: '大张三',
  //游戏名字
  gameNameList: ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号'],
  //游戏名字列表
  settGold: 0,
  //结算金币
  myLevel: 10,
  //我的等级
  myExper: 20,
  //我的经验值
  myHeadPortrait: '',
  //我的头像
  levelName: ['等级1', '等级2', '等级3', '等级4', '等级5', '等级6', '等级7', '等级8', '等级9', '等级10'],
  //等级名称
  upLevelEx: [10, 50, 100, 500, 1000, 1500],
  //升级需要的经验值
  prepareTips: ['拖住移动发起进攻', '抢占空摊位比较快', '主动进攻抢占摊位，人和票子都是你的', '遭遇攻击不要怕，集结客人一起对抗', '升级荣耀勋章，更多神秘宝箱等你来拿'],
  //准备阶段提示
  gameAllName: ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号'],
  //所有游戏人物昵称
  gameRankReward: [20, 10, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //游戏排名奖励的奖杯数
  boothUnlockLevel: [1, 2, 3, 4],
  //摊位解锁等级(最后一位为无法达到之值)
  prepareTime: 3,
  //准备时间
  figureList: [{
    id: 1,
    imgName: '001',
    //图片名称
    effect: 0,
    //加速效果
    figureWord: '新产品，刚刚到，全国各地都知道1',
    //人物描述
    type: 'gold',
    //类型
    gold: 1000,
    //购买金币
    hava: true,
    //是否拥有
    use: true,
    //是否穿戴
    height: 250 //人物高度

  }, {
    id: 2,
    imgName: '002',
    effect: 0.01,
    figureWord: '新产品，刚刚到，全国各地都知道2',
    type: 'gold',
    gold: 1000,
    hava: true,
    use: false,
    height: 250 //人物高度

  }, {
    id: 3,
    imgName: '003',
    effect: 0.02,
    figureWord: '新产品，刚刚到，全国各地都知道3',
    type: 'gold',
    gold: 1000,
    hava: false,
    use: false,
    height: 250 //人物高度

  }, {
    id: 4,
    imgName: '004',
    effect: 0.03,
    figureWord: '新产品，刚刚到，全国各地都知道4',
    type: 'shar',
    target: 2,
    //分享目标数
    complete: 1,
    //完成数
    gold: 1000,
    hava: false,
    use: false,
    height: 250 //人物高度

  }, {
    id: 5,
    imgName: '005',
    effect: 0.04,
    figureWord: '新产品，刚刚到，全国各地都知道5',
    type: 'gold',
    gold: 1000,
    hava: false,
    use: false,
    height: 250 //人物高度

  }],
  //商店人物
  myfigureIndex: 0,
  //我的人物在商店的位置
  myfigure: {
    id: 1,
    imgName: '009',
    effect: 0.02,
    figureWord: '新产品，刚刚到，全国各地都知道123',
    type: 'gold',
    gold: 1000,
    hava: true,
    //是否拥有
    use: true,
    //是否穿戴
    height: 200 //人物高度

  },
  //我的人物
  movespeed: 5,
  //移动速度
  moveSpeedLevelAttenu: 0,
  //等级移动衰减值
  devourRadius: 110,
  //人物碰撞半径（在这个范围内得到客人道具等）
  booth1: 24,
  //1级摊位数量
  booth2: 6,
  //2级摊位数量
  booth3: 3,
  //3级摊位数量
  booth4: 1,
  //4级摊位数量
  booth1OccupySpeed: [1, 2],
  //1级摊位占据速度区间
  booth2OccupySpeed: [1, 2],
  //2级摊位占据速度区间
  booth3OccupySpeed: [1, 2],
  //3级摊位占据速度区间
  booth4OccupySpeed: [1, 2],
  //4级摊位占据速度区间
  booth1GuestProvideSpeed: 1,
  //1级摊位每个客人提供的占据速度
  booth2GuestProvideSpeed: 1,
  //2级摊位每个客人提供的占据速度
  booth3GuestProvideSpeed: 1,
  //3级摊位每个客人提供的占据速度
  booth4GuestProvideSpeed: 1,
  //4级摊位每个客人提供的占据速度
  boothLevel1Glod: 1,
  //摊位等级1每人产出金币
  boothLevel2Glod: 2,
  //摊位等级2每人产出金币
  boothLevel3Glod: 3,
  //摊位等级3每人产出金币
  boothLevel4Glod: 4,
  //摊位等级4每人产出金币
  boothGolidTimeIniter: 3,
  //摊位金币刷新间隔
  mapWidth: 2240,
  //地图宽度
  mapHeight: 2600,
  //地图高度
  initGuestNum: 30,
  //初始客人
  newGuestTime: 1,
  //多少秒新增客人
  initSkils1Num: 3,
  //初始揽客加强道具
  newSkils1Time: 1,
  //多少秒新增揽客加强道具
  initSkils2Num: 3,
  //初始收益增强道具
  newSkils2Time: 1,
  //多少秒新增收益增强道具
  initSkils3Num: 3,
  //初始移速加强道具
  newSkils3Time: 1,
  //多少秒新增移速加强道具
  skils1Effect: 2,
  //揽客加强道具效果倍数
  skils2Effect: 2,
  //增收益增道具效果倍数
  skils3Effect: 2,
  //移速加强道具效果倍数
  skils1Time: 10,
  //揽客加强道具效果时间
  skils2Time: 10,
  //增收益增道具效果时间
  skils3Time: 10,
  //移速加强道具效果时间
  basedBubble: ['11111111111', '22222222222', '3333333333'],
  //基础气泡
  combatBubble: ['44444444444', '55555555555', '6666666666'],
  //战斗气泡
  generateBubbleTime: 10,
  //气泡产生间隔
  gameTime: 1000,
  //游戏时间
  summonDistance: 1000,
  //召唤技能距离
  summonSpeed: 2,
  //召集速度倍速
  aiNum: 1,
  //ai人数
  aiPerception: 220,
  //ai感知范围半径
  aiLevelIncreaseScope: 20,
  //ai每级增加的范围半径
  aiResurgencePor: 1,
  //ai复活概率
  aiInitFigure: 0,
  //ai初始人物
  aiResurrCooling: 2,
  //ai复活冷却时间
  aiSkil1Porbability: 0.8,
  //ai释放揽客加强道具的概率
  aiSkil2Porbability: 0.8,
  //ai释放增收益增道具的概率
  aiSkil3Porbability: 1,
  //ai释放移速加强道具的概率
  aiSkilBuiltTime: 1,
  //ai释放技能的内置cd
  devourLimit: 0,
  //吞噬界限值%
  devourSpeed: 1,
  //吞噬速度(1/x)
  invincibleTime: 5,
  //无敌时间
  championAward: 5000,
  //冠军奖励
  beatEachDropMoney: 100,
  //被击败后每多少金额掉落一份钱节点
  beatEachDropRate: 0.5,
  //被击败金币丢失率
  gameStartInvTime: 3,
  //开局无敌时间
  myGameStartInvin: true,
  //作弊：是否开启无敌
  observerPattern: true,
  //作弊：观察者模式（需开启无敌）
  openMusic: true,
  //开启音乐
  openvibration: true,
  //开启震动
  localGrowth: [{
    targetMoney: 0,
    //目标钱
    devourRadius: 110,
    //揽客半径
    showRadiusM: 0 //揽客半径增益（米）

  }, {
    targetMoney: 50,
    //目标钱
    devourRadius: 130,
    //揽客半径
    showRadiusM: 3 //揽客半径增益（米）

  }, {
    targetMoney: 100,
    //目标钱
    devourRadius: 160,
    //揽客半径
    showRadiusM: 5 //揽客半径增益（米）

  }, {
    targetMoney: 200,
    //目标钱
    devourRadius: 200,
    //揽客半径
    showRadiusM: 9 //揽客半径增益（米）

  }, {
    targetMoney: 400,
    //目标钱
    devourRadius: 250,
    //揽客半径
    showRadiusM: 14 //揽客半径增益（米）

  }, {
    targetMoney: 600,
    //目标钱
    devourRadius: 300,
    //揽客半径
    showRadiusM: 19 //揽客半径增益（米）

  }, {
    targetMoney: 900,
    //目标钱
    devourRadius: 350,
    //揽客半径
    showRadiusM: 24 //揽客半径增益（米）

  }, {
    targetMoney: 1200,
    //目标钱
    devourRadius: 400,
    //揽客半径
    showRadiusM: 29 //揽客半径增益（米）

  }, {
    targetMoney: 1500,
    //目标钱
    devourRadius: 450,
    //揽客半径
    showRadiusM: 34 //揽客半径增益（米）

  }, {
    targetMoney: 2000,
    //目标钱
    devourRadius: 500,
    //揽客半径
    showRadiusM: 39 //揽客半径增益（米）

  }] //局内成长

};
module.exports = {
  basis: basis
};

cc._RF.pop();