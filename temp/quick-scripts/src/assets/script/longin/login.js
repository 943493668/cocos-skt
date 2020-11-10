"use strict";
cc._RF.push(module, '6544aMlZuRMG7on8pDFhIkm', 'login');
// script/longin/login.js

"use strict";

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

cc.Class({
  "extends": cc.Component,
  properties: {
    jindut: cc.Node,
    jindushuliang: cc.Label,
    langan: cc.Node
  },
  onLoad: function onLoad() {
    this.langan.runAction(cc.moveTo(10, cc.v2(-800, -273)));
    this.loading();
  },
  loading: function loading() {
    var _this = this;

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      var systemInfo = wx.getSystemInfoSync();
      var Launch = wx.getLaunchOptionsSync(); //wxcur.webserver = 'https://apptest.yishutech.cn/home/';

      wxcur.webserver = 'https://short.yishutech.cn/stall/';
      console.log(Launch, wx.getStorageSync('openvibration'));
      basis.openvibration = wx.getStorageSync('openvibration') === '' ? true : false;
      basis.openMusic = wx.getStorageSync('openMusic') === '' ? true : false; //

      wxcur.ajax('index').then(function (res) {
        Object.assign(basis, res);
        basis.boothLevel1Glod = Number(res.boothLevel1Glod);
        basis.boothLevel2Glod = Number(res.boothLevel2Glod);
        basis.boothLevel3Glod = Number(res.boothLevel3Glod);
        basis.boothLevel4Glod = Number(res.boothLevel4Glod);
        basis.beatEachDropMoney = Number(res.beatEachDropMoney);
      });
      wxcur.wx_login().then(function (res) {
        console.log(res, "login");
        basis.code = res.code;
        var data = {
          code: res.code
        };

        if (systemInfo.AppPlatform == "qq") {
          console.log("qq");
          basis.isbanben = "qq";
          return wxcur.ajax("qqlogin", data);
        } else {
          console.log("weixin");
          basis.isbanben = "wx";
          return wxcur.ajax("login", data);
        }
      }).then(function (res) {
        console.log(res, "res");
        basis.openid = res.openid; //basis.openid = "310CB40B6FFC348F622D8C9D09C92FF7";

        return wxcur.ajax("info", {
          openid: basis.openid
        });
      }).then(function (res) {
        // wxcur.butshare = {
        //     butsharetxt: basis.sharetitle,
        //     butshareimageUrl: `${basis.gender == 1 ? basis.shareimg1 : basis.shareimg2}`,
        //     butsharequery: 'fid=' + res.homeinfo.id
        // }
        _this.jindubaifenbi();
      })["catch"](function (err) {
        console.log(err, "err"); //this.loading();
      }); // }).catch(err => {
      // })
    } else {
      this.jindubaifenbi();
    }

    console.log(basis);
  },
  jindubaifenbi: function jindubaifenbi() {
    console.log('开始加载');

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wxcur.ajax('stat', {
        openid: basis.openid,
        event: "start"
      });
    }

    this.resource = null;
    cc.director.preloadScene('index', this._progressCallback.bind(this), this._completeCallback.bind(this));
  },
  _progressCallback: function _progressCallback(completeCount, totalCount, res) {
    //加载进度回调 
    this.progress = completeCount / totalCount;
    this.jindut.x = -(this.jindut.width - this.jindut.width * this.progress);
    this.jindushuliang.string = (this.progress * 100).toFixed(2) + "%";
  },
  _completeCallback: function _completeCallback(err, texture) {
    //加载完成回调
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wxcur.ajax('stat', {
        openid: basis.openid,
        event: "inhome"
      });
    }

    if (err) {
      console.log(err, '请求超时！');
    }

    cc.director.loadScene("index");
  }
});

cc._RF.pop();