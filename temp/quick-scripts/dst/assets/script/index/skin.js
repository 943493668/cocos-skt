
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/index/skin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f628dieh+VBFLTmUZRmzYnc', 'skin');
// script/index/skin.js

"use strict";

var _music = require("./../currency/music.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

cc.Class({
  "extends": cc.Component,
  properties: {
    skin: dragonBones.ArmatureDisplay,
    typeBut1: cc.Node,
    typeBut2: cc.Node,
    typeBut3: cc.Node,
    typeBut4: cc.Node,
    gold: cc.Label,
    bg: cc.Node
  },
  init: function init(data, shop) {
    this.shop = shop;
    this.skinData = data;
    this.typeBut1.active = false;
    this.typeBut2.active = false;
    this.typeBut3.active = false;
    this.typeBut4.active = false;
    this.bg.color = new cc.Color(190, 190, 190, 255);
    this.skin.armatureName = data.imgName;

    if (data.hava) {
      if (data.use) {
        this.shop.wearSkil = this;
        this.typeBut2.active = true;
        this.bg.color = new cc.Color(255, 255, 255, 255);
      } else {
        this.typeBut1.active = true;
      }
    } else if (data.type == 'gold') {
      this.typeBut3.active = true;
      this.gold.string = data.gold;
    } else {
      this.typeBut4.active = true;
    }
  },
  switchSkin: function switchSkin() {
    _music.music._this.openMusic('', 'dianji');

    this.shop.myfigureData = this.skinData;
    this.shop.curSkin = this;
    this.shop.setMyFigure();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvaW5kZXgvc2tpbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid3hjdXIiLCJiYXNpcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic2tpbiIsImRyYWdvbkJvbmVzIiwiQXJtYXR1cmVEaXNwbGF5IiwidHlwZUJ1dDEiLCJOb2RlIiwidHlwZUJ1dDIiLCJ0eXBlQnV0MyIsInR5cGVCdXQ0IiwiZ29sZCIsIkxhYmVsIiwiYmciLCJpbml0IiwiZGF0YSIsInNob3AiLCJza2luRGF0YSIsImFjdGl2ZSIsImNvbG9yIiwiQ29sb3IiLCJhcm1hdHVyZU5hbWUiLCJpbWdOYW1lIiwiaGF2YSIsInVzZSIsIndlYXJTa2lsIiwidHlwZSIsInN0cmluZyIsInN3aXRjaFNraW4iLCJtdXNpYyIsIl90aGlzIiwib3Blbk11c2ljIiwibXlmaWd1cmVEYXRhIiwiY3VyU2tpbiIsInNldE15RmlndXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztlQUhrQkEsT0FBTyxDQUFDLFdBQUQ7SUFBakJDLGlCQUFBQTs7Z0JBQ1VELE9BQU8sQ0FBQyxPQUFEO0lBQWpCRSxrQkFBQUE7O0FBSVJDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVDLFdBQVcsQ0FBQ0MsZUFEVjtBQUVSQyxJQUFBQSxRQUFRLEVBQUVQLEVBQUUsQ0FBQ1EsSUFGTDtBQUdSQyxJQUFBQSxRQUFRLEVBQUVULEVBQUUsQ0FBQ1EsSUFITDtBQUlSRSxJQUFBQSxRQUFRLEVBQUVWLEVBQUUsQ0FBQ1EsSUFKTDtBQUtSRyxJQUFBQSxRQUFRLEVBQUVYLEVBQUUsQ0FBQ1EsSUFMTDtBQU1SSSxJQUFBQSxJQUFJLEVBQUVaLEVBQUUsQ0FBQ2EsS0FORDtBQU9SQyxJQUFBQSxFQUFFLEVBQUVkLEVBQUUsQ0FBQ1E7QUFQQyxHQUhQO0FBYUxPLEVBQUFBLElBYkssZ0JBYUFDLElBYkEsRUFhTUMsSUFiTixFQWFZO0FBQ2IsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkYsSUFBaEI7QUFDQSxTQUFLVCxRQUFMLENBQWNZLE1BQWQsR0FBdUIsS0FBdkI7QUFDQSxTQUFLVixRQUFMLENBQWNVLE1BQWQsR0FBdUIsS0FBdkI7QUFDQSxTQUFLVCxRQUFMLENBQWNTLE1BQWQsR0FBdUIsS0FBdkI7QUFDQSxTQUFLUixRQUFMLENBQWNRLE1BQWQsR0FBdUIsS0FBdkI7QUFDQSxTQUFLTCxFQUFMLENBQVFNLEtBQVIsR0FBZ0IsSUFBSXBCLEVBQUUsQ0FBQ3FCLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLEVBQTRCLEdBQTVCLENBQWhCO0FBRUEsU0FBS2pCLElBQUwsQ0FBVWtCLFlBQVYsR0FBeUJOLElBQUksQ0FBQ08sT0FBOUI7O0FBR0EsUUFBSVAsSUFBSSxDQUFDUSxJQUFULEVBQWU7QUFDWCxVQUFJUixJQUFJLENBQUNTLEdBQVQsRUFBYztBQUNWLGFBQUtSLElBQUwsQ0FBVVMsUUFBVixHQUFxQixJQUFyQjtBQUNBLGFBQUtqQixRQUFMLENBQWNVLE1BQWQsR0FBdUIsSUFBdkI7QUFDQSxhQUFLTCxFQUFMLENBQVFNLEtBQVIsR0FBZ0IsSUFBSXBCLEVBQUUsQ0FBQ3FCLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLEVBQTRCLEdBQTVCLENBQWhCO0FBQ0gsT0FKRCxNQUlPO0FBQ0gsYUFBS2QsUUFBTCxDQUFjWSxNQUFkLEdBQXVCLElBQXZCO0FBQ0g7QUFDSixLQVJELE1BUU8sSUFBSUgsSUFBSSxDQUFDVyxJQUFMLElBQWEsTUFBakIsRUFBeUI7QUFDNUIsV0FBS2pCLFFBQUwsQ0FBY1MsTUFBZCxHQUF1QixJQUF2QjtBQUNBLFdBQUtQLElBQUwsQ0FBVWdCLE1BQVYsR0FBbUJaLElBQUksQ0FBQ0osSUFBeEI7QUFDSCxLQUhNLE1BR0E7QUFDSCxXQUFLRCxRQUFMLENBQWNRLE1BQWQsR0FBdUIsSUFBdkI7QUFDSDtBQUNKLEdBdkNJO0FBd0NMVSxFQUFBQSxVQXhDSyx3QkF3Q1E7QUFDVEMsaUJBQU1DLEtBQU4sQ0FBWUMsU0FBWixDQUFzQixFQUF0QixFQUEwQixRQUExQjs7QUFFQSxTQUFLZixJQUFMLENBQVVnQixZQUFWLEdBQXlCLEtBQUtmLFFBQTlCO0FBQ0EsU0FBS0QsSUFBTCxDQUFVaUIsT0FBVixHQUFvQixJQUFwQjtBQUNBLFNBQUtqQixJQUFMLENBQVVrQixXQUFWO0FBQ0g7QUE5Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyB3eGN1ciB9ID0gcmVxdWlyZSgnd2VpeGluX3R5Jyk7XG5jb25zdCB7IGJhc2lzIH0gPSByZXF1aXJlKCdiYXNpcycpO1xuXG5pbXBvcnQgeyBtdXNpYyB9IGZyb20gJy4vLi4vY3VycmVuY3kvbXVzaWMuanMnO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBza2luOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXksXG4gICAgICAgIHR5cGVCdXQxOiBjYy5Ob2RlLFxuICAgICAgICB0eXBlQnV0MjogY2MuTm9kZSxcbiAgICAgICAgdHlwZUJ1dDM6IGNjLk5vZGUsXG4gICAgICAgIHR5cGVCdXQ0OiBjYy5Ob2RlLFxuICAgICAgICBnb2xkOiBjYy5MYWJlbCxcbiAgICAgICAgYmc6IGNjLk5vZGVcbiAgICB9LFxuXG4gICAgaW5pdChkYXRhLCBzaG9wKSB7XG4gICAgICAgIHRoaXMuc2hvcCA9IHNob3A7XG4gICAgICAgIHRoaXMuc2tpbkRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnR5cGVCdXQxLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR5cGVCdXQyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR5cGVCdXQzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR5cGVCdXQ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJnLmNvbG9yID0gbmV3IGNjLkNvbG9yKDE5MCwgMTkwLCAxOTAsIDI1NSlcblxuICAgICAgICB0aGlzLnNraW4uYXJtYXR1cmVOYW1lID0gZGF0YS5pbWdOYW1lO1xuXG5cbiAgICAgICAgaWYgKGRhdGEuaGF2YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEudXNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG9wLndlYXJTa2lsID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVCdXQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5iZy5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZUJ1dDEuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSAnZ29sZCcpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZUJ1dDMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZ29sZC5zdHJpbmcgPSBkYXRhLmdvbGRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHlwZUJ1dDQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc3dpdGNoU2tpbigpIHtcbiAgICAgICAgbXVzaWMuX3RoaXMub3Blbk11c2ljKCcnLCAnZGlhbmppJyk7XG5cbiAgICAgICAgdGhpcy5zaG9wLm15ZmlndXJlRGF0YSA9IHRoaXMuc2tpbkRhdGE7XG4gICAgICAgIHRoaXMuc2hvcC5jdXJTa2luID0gdGhpcztcbiAgICAgICAgdGhpcy5zaG9wLnNldE15RmlndXJlKCk7XG4gICAgfVxufSk7XG4iXX0=