"use strict";
cc._RF.push(module, '6684fPnjAdE14SEnHnw42zn', 'weixin_ty');
// script/currency/weixin_ty.js

"use strict";

var wxcur = {
  webserver: '',
  POPUPFLAG: true,
  butshare: {
    butsharetxt: '',
    butshareimageUrl: '',
    butsharequery: '',
    shareAppType: ''
  },
  init: function init(data) {
    wx.showShareMenu({
      withShareTicket: true
    });
  },
  popup: function popup(node, popupBg) {
    var _this = this;

    if (popupBg === void 0) {
      popupBg = true;
    }

    console.log(this.POPUPFLAG);
    if (!this.POPUPFLAG) return;
    this.POPUPFLAG = false;
    node.active = !node.active;

    if (popupBg) {
      var bg = node.parent.getChildByName('bg');
      bg.active = !bg.active;
    }

    if (!node.active) {
      this.POPUPFLAG = true;
    }

    var scale = node.scale;

    if (node.active) {
      node.scale = 0;
      node.runAction(cc.sequence(cc.scaleTo(0.2, scale), cc.callFunc(function () {
        _this.POPUPFLAG = true;
      })));
    }
  },
  deepCopy: function deepCopy(data) {
    var type = Object.prototype.toString.call(data);

    if (type == "[object Array]") {
      var obj = [];

      for (var i = 0; i < data.length; i++) {
        obj.push(this.deepCopy(data[i]));
      }

      return obj;
    } else if (type == "[object Object]") {
      var _obj = {};

      for (var _i in data) {
        _obj[_i] = this.deepCopy(data[_i]);
      }

      return _obj;
    } else {
      return data;
    }
  },
  ajax: function ajax(url, data, method, header) {
    if (data === void 0) {
      data = {};
    }

    if (method === void 0) {
      method = 'GET';
    }

    if (header === void 0) {
      header = {
        'content-type': 'application/json'
      };
    }

    var that = this;
    return new Promise(function (resolve, reject) {
      wx.request({
        url: that.webserver + url,
        data: data,
        method: method,
        header: header,
        success: function success(res) {
          resolve(res.data);
        },
        fail: function fail(err) {
          reject(err);
        }
      });
    });
  },
  author: function author(zuobiao) {
    if (zuobiao === void 0) {
      zuobiao = {
        left: 0,
        top: 0,
        width: wx.getSystemInfoSync().windowWidth,
        height: wx.getSystemInfoSync().windowHeight
      };
    }

    var that = this;
    return new Promise(function (resolve, reject) {
      wx.getSetting({
        success: function success(res) {
          console.log(res);

          if (res.authSetting["scope.userInfo"]) {
            resolve(res);
            return;
          } // 授权BUTTON


          if (that.button) {
            that.button.hide();
          }

          var button = that.button = wx.createUserInfoButton({
            type: 'text',
            text: '',
            style: {
              left: zuobiao.left,
              top: zuobiao.top,
              width: zuobiao.width,
              height: zuobiao.height
            }
          });
          button.onTap(function (res) {
            console.log(res);

            if (res.errMsg == 'getUserInfo:ok') {
              resolve(res);
            } else {
              reject(res);
            }

            button.hide();
          });
        }
      });
    });
  },
  wx_login: function wx_login() {
    return new Promise(function (resolve, reject) {
      wx.login({
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(err) {
          reject(err);
        }
      });
    });
  },
  share: function share(data) {
    if (data === void 0) {
      data = this.butshare;
    }

    wx.shareAppMessage({
      title: data.butsharetxt,
      imageUrl: data.butshareimageUrl,
      query: data.butsharequery,
      shareAppType: data.shareAppType,
      success: data.success ? data.success : function () {},
      fail: data.fail ? data.fail : function () {}
    });
  },
  shareQQZone: function shareQQZone(data) {
    if (data === void 0) {
      data = this.butshare;
    }

    wx.shareAppMessage({
      title: data.butsharetxt,
      imageUrl: data.butshareimageUrl,
      query: data.butsharequery,
      shareAppType: 'qzone',
      success: data.success ? data.success : function () {},
      fail: data.fail ? data.fail : function () {}
    });
  },
  righttopshare: function righttopshare(data) {
    if (data === void 0) {
      data = this.butshare;
    }

    return {
      title: data.butsharetxt,
      imageUrl: data.butshareimageUrl,
      query: data.butsharequery
    };
  },
  getwxurl: function getwxurl(url) {
    return new Promise(function (resolve, reject) {
      cc.loader.load(url + '?aaa=aa.jpg', function (err, texture) {
        if (err) {
          console.log(err, "err");
          reject(err);
          return;
        }

        resolve(texture);
      });
    });
  },
  getByteLen: function getByteLen(val, num) {
    if (num === void 0) {
      num = 10;
    }

    //获取字节长度
    var len = 0;
    var cl = '';

    for (var i = 0; i < val.length; i++) {
      if (len >= num) {
        return cl + '...';
      }

      var a = val.charAt(i);

      if (a.match(/[^\x00-\xff]/ig) != null) {
        len += 2;
      } else {
        len += 1;
      }

      cl += a;
    }

    return cl;
  },
  getByteLength: function getByteLength(val) {
    var len = 0;

    for (var i = 0; i < val.length; i++) {
      var a = val.charAt(i);

      if (a.match(/[^\x00-\xff]/ig) != null) {
        len += 2;
      } else {
        len += 1;
      }
    }

    return len;
  },
  getAngle: function getAngle(px, py, mx, my) {
    //获得人物中心和鼠标坐标连线，与y轴正半轴之间的夹角
    var x = Math.abs(px - mx);
    var y = Math.abs(py - my);
    var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    var cos = y / z;
    var radina = Math.acos(cos); //用反三角函数求弧度

    var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度

    if (mx > px && my < py) {
      //鼠标在第四象限
      angle = 180 - angle;
    }

    if (mx == px && my < py) {
      //鼠标在y轴正方向上
      angle = 180;
    }

    if (mx == px && my > py) {
      //鼠标在y轴负方向上
      angle = 360;
    }

    if (mx > px && my == py) {
      //鼠标在x轴正方向上
      angle = 90;
    }

    if (mx < px && my < py) {
      //鼠标在第三象限
      angle = 180 + angle;
    }

    if (mx < px && my == py) {
      //鼠标在x轴负方向
      angle = 270;
    }

    if (mx < px && my > py) {
      //鼠标在第二象限
      angle = 360 - angle;
    }

    return angle;
  },
  // 金币正转换
  digitalConversion: function digitalConversion(num, xsd) {
    if (xsd === void 0) {
      xsd = 2;
    }

    num = Number(num);

    if (num < 1e+3) {
      num = num.toFixed(0);
    } else if (num < 1e+6) {
      num = (num / 1e+3).toFixed(xsd) + 'K';
    } else if (num < 1e+9) {
      num = (num / 1e+6).toFixed(xsd) + 'M';
    } else if (num < 1e+12) {
      num = (num / 1e+9).toFixed(xsd) + 'B';
    } else if (num < 1e+15) {
      num = (num / 1e+12).toFixed(xsd) + 'T';
    } else if (num < 1e+18) {
      num = (num / 1e+15).toFixed(xsd) + 'P';
    } else if (num < 1e+21) {
      num = (num / 1e+18).toFixed(xsd) + 'E';
    } else if (num < 1e+24) {
      num = (num / 1e+21).toFixed(xsd) + 'Z';
    } else if (num < 1e+27) {
      num = (num / 1e+24).toFixed(xsd) + 'Y';
    } else {
      num = (num / 1e+27).toFixed(xsd) + 'S';
    }

    return num;
  },
  setNodeBool: function setNodeBool(num, prefab) {
    var enemyPool = new cc.NodePool();

    for (var i = 0; i < num; ++i) {
      enemyPool.put(cc.instantiate(prefab));
    }

    return enemyPool;
  },
  getNodeBool: function getNodeBool(NodePool, Prefab) {
    var enemy = null;

    if (NodePool.size() > 0) {
      enemy = NodePool.get();
    } else {
      enemy = cc.instantiate(Prefab);
    }

    return enemy;
  },
  is_WECHAT_GAME: function is_WECHAT_GAME() {
    return cc.sys.platform === cc.sys.WECHAT_GAME;
  }
};
module.exports = {
  wxcur: wxcur
};

cc._RF.pop();