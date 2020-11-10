
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/longin/login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbG9uZ2luL2xvZ2luLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3eGN1ciIsImJhc2lzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqaW5kdXQiLCJOb2RlIiwiamluZHVzaHVsaWFuZyIsIkxhYmVsIiwibGFuZ2FuIiwib25Mb2FkIiwicnVuQWN0aW9uIiwibW92ZVRvIiwidjIiLCJsb2FkaW5nIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInN5c3RlbUluZm8iLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwiTGF1bmNoIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJ3ZWJzZXJ2ZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RvcmFnZVN5bmMiLCJvcGVudmlicmF0aW9uIiwib3Blbk11c2ljIiwiYWpheCIsInRoZW4iLCJyZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJib290aExldmVsMUdsb2QiLCJOdW1iZXIiLCJib290aExldmVsMkdsb2QiLCJib290aExldmVsM0dsb2QiLCJib290aExldmVsNEdsb2QiLCJiZWF0RWFjaERyb3BNb25leSIsInd4X2xvZ2luIiwiY29kZSIsImRhdGEiLCJBcHBQbGF0Zm9ybSIsImlzYmFuYmVuIiwib3BlbmlkIiwiamluZHViYWlmZW5iaSIsImVyciIsImV2ZW50IiwicmVzb3VyY2UiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsIl9wcm9ncmVzc0NhbGxiYWNrIiwiYmluZCIsIl9jb21wbGV0ZUNhbGxiYWNrIiwiY29tcGxldGVDb3VudCIsInRvdGFsQ291bnQiLCJwcm9ncmVzcyIsIngiLCJ3aWR0aCIsInN0cmluZyIsInRvRml4ZWQiLCJ0ZXh0dXJlIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztlQUNrQkEsT0FBTyxDQUFDLFdBQUQ7SUFBakJDLGlCQUFBQTs7Z0JBQ1VELE9BQU8sQ0FBQyxPQUFEO0lBQWpCRSxr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QUssQ0FBQzZDLE1BQWhCO0FBQXdCRyxRQUFBQSxLQUFLLEVBQUU7QUFBL0IsT0FBbkI7QUFDSDs7QUFFRCxRQUFJRCxHQUFKLEVBQVM7QUFDTHZCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZc0IsR0FBWixFQUFpQixPQUFqQjtBQUNIOztBQUNEOUMsSUFBQUEsRUFBRSxDQUFDaUQsUUFBSCxDQUFZYSxTQUFaLENBQXNCLE9BQXRCO0FBQ0g7QUEvR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IHd4Y3VyIH0gPSByZXF1aXJlKCd3ZWl4aW5fdHknKTtcbmNvbnN0IHsgYmFzaXMgfSA9IHJlcXVpcmUoJ2Jhc2lzJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGppbmR1dDogY2MuTm9kZSxcbiAgICAgICAgamluZHVzaHVsaWFuZzogY2MuTGFiZWwsXG4gICAgICAgIGxhbmdhbjogY2MuTm9kZVxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubGFuZ2FuLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLm1vdmVUbygxMCwgY2MudjIoLTgwMCwgLTI3MykpXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5sb2FkaW5nKCk7XG4gICAgfSxcbiAgICBsb2FkaW5nKCkge1xuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcbiAgICAgICAgICAgIHZhciBzeXN0ZW1JbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgICAgIGNvbnN0IExhdW5jaCA9IHd4LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XG5cbiAgICAgICAgICAgIC8vd3hjdXIud2Vic2VydmVyID0gJ2h0dHBzOi8vYXBwdGVzdC55aXNodXRlY2guY24vaG9tZS8nO1xuICAgICAgICAgICAgd3hjdXIud2Vic2VydmVyID0gJ2h0dHBzOi8vc2hvcnQueWlzaHV0ZWNoLmNuL3N0YWxsLyc7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKExhdW5jaCwgd3guZ2V0U3RvcmFnZVN5bmMoJ29wZW52aWJyYXRpb24nKSlcblxuICAgICAgICAgICAgYmFzaXMub3BlbnZpYnJhdGlvbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCdvcGVudmlicmF0aW9uJykgPT09ICcnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgYmFzaXMub3Blbk11c2ljID0gd3guZ2V0U3RvcmFnZVN5bmMoJ29wZW5NdXNpYycpID09PSAnJyA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHd4Y3VyLmFqYXgoJ2luZGV4JykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYmFzaXMsIHJlcylcblxuICAgICAgICAgICAgICAgIGJhc2lzLmJvb3RoTGV2ZWwxR2xvZCA9IE51bWJlcihyZXMuYm9vdGhMZXZlbDFHbG9kKTtcbiAgICAgICAgICAgICAgICBiYXNpcy5ib290aExldmVsMkdsb2QgPSBOdW1iZXIocmVzLmJvb3RoTGV2ZWwyR2xvZCk7XG4gICAgICAgICAgICAgICAgYmFzaXMuYm9vdGhMZXZlbDNHbG9kID0gTnVtYmVyKHJlcy5ib290aExldmVsM0dsb2QpO1xuICAgICAgICAgICAgICAgIGJhc2lzLmJvb3RoTGV2ZWw0R2xvZCA9IE51bWJlcihyZXMuYm9vdGhMZXZlbDRHbG9kKTtcbiAgICAgICAgICAgICAgICBiYXNpcy5iZWF0RWFjaERyb3BNb25leSA9IE51bWJlcihyZXMuYmVhdEVhY2hEcm9wTW9uZXkpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgd3hjdXIud3hfbG9naW4oKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLCBcImxvZ2luXCIpO1xuICAgICAgICAgICAgICAgIGJhc2lzLmNvZGUgPSByZXMuY29kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiByZXMuY29kZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzeXN0ZW1JbmZvLkFwcFBsYXRmb3JtID09IFwicXFcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInFxXCIpXG4gICAgICAgICAgICAgICAgICAgIGJhc2lzLmlzYmFuYmVuID0gXCJxcVwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3hjdXIuYWpheChcInFxbG9naW5cIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWl4aW5cIilcbiAgICAgICAgICAgICAgICAgICAgYmFzaXMuaXNiYW5iZW4gPSBcInd4XCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3eGN1ci5hamF4KFwibG9naW5cIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgXCJyZXNcIilcbiAgICAgICAgICAgICAgICBiYXNpcy5vcGVuaWQgPSByZXMub3BlbmlkO1xuICAgICAgICAgICAgICAgIC8vYmFzaXMub3BlbmlkID0gXCIzMTBDQjQwQjZGRkMzNDhGNjIyRDhDOUQwOUM5MkZGN1wiO1xuICAgICAgICAgICAgICAgIHJldHVybiB3eGN1ci5hamF4KFwiaW5mb1wiLCB7IG9wZW5pZDogYmFzaXMub3BlbmlkIH0pXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyB3eGN1ci5idXRzaGFyZSA9IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgYnV0c2hhcmV0eHQ6IGJhc2lzLnNoYXJldGl0bGUsXG4gICAgICAgICAgICAgICAgLy8gICAgIGJ1dHNoYXJlaW1hZ2VVcmw6IGAke2Jhc2lzLmdlbmRlciA9PSAxID8gYmFzaXMuc2hhcmVpbWcxIDogYmFzaXMuc2hhcmVpbWcyfWAsXG4gICAgICAgICAgICAgICAgLy8gICAgIGJ1dHNoYXJlcXVlcnk6ICdmaWQ9JyArIHJlcy5ob21laW5mby5pZFxuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuamluZHViYWlmZW5iaSgpO1xuXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJlcnJcIik7XG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRpbmcoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xuXG4gICAgICAgICAgICAvLyB9KVxuXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5qaW5kdWJhaWZlbmJpKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhiYXNpcylcbiAgICB9LFxuICAgIGppbmR1YmFpZmVuYmkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vliqDovb0nKVxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcbiAgICAgICAgICAgIHd4Y3VyLmFqYXgoJ3N0YXQnLCB7IG9wZW5pZDogYmFzaXMub3BlbmlkLCBldmVudDogXCJzdGFydFwiIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IG51bGw7XG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnaW5kZXgnLCB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrLmJpbmQodGhpcyksIHRoaXMuX2NvbXBsZXRlQ2FsbGJhY2suYmluZCh0aGlzKSlcbiAgICB9LFxuICAgIF9wcm9ncmVzc0NhbGxiYWNrKGNvbXBsZXRlQ291bnQsIHRvdGFsQ291bnQsIHJlcykge1xuICAgICAgICAvL+WKoOi9vei/m+W6puWbnuiwgyBcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IGNvbXBsZXRlQ291bnQgLyB0b3RhbENvdW50O1xuICAgICAgICB0aGlzLmppbmR1dC54ID0gLSh0aGlzLmppbmR1dC53aWR0aCAtICh0aGlzLmppbmR1dC53aWR0aCAqIHRoaXMucHJvZ3Jlc3MpKTtcbiAgICAgICAgdGhpcy5qaW5kdXNodWxpYW5nLnN0cmluZyA9IGAkeyh0aGlzLnByb2dyZXNzICogMTAwKS50b0ZpeGVkKDIpfSVgO1xuICAgIH0sXG5cbiAgICBfY29tcGxldGVDYWxsYmFjayhlcnIsIHRleHR1cmUpIHtcbiAgICAgICAgLy/liqDovb3lrozmiJDlm57osINcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XG4gICAgICAgICAgICB3eGN1ci5hamF4KCdzdGF0JywgeyBvcGVuaWQ6IGJhc2lzLm9wZW5pZCwgZXZlbnQ6IFwiaW5ob21lXCIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgJ+ivt+axgui2heaXtu+8gScpO1xuICAgICAgICB9XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluZGV4XCIpO1xuICAgIH0sXG59KTtcbiJdfQ==