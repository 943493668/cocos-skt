
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/devourcircle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58f85xqJVdE64m1uPUBvmE8', 'devourcircle');
// script/game/devourcircle.js

"use strict";

var _require = require('basis'),
    basis = _require.basis;

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {
    this.parent = this.node.parent;
    this.parentCom = this.parent.getComponent('renwu');
  },
  onCollisionStay: function onCollisionStay(other, self) {
    var node = other.node;
    var renwu = node.parent.getComponent('renwu');
    if (node.group == 'ai感知圈') return;
    if (this.parentCom.myfollowerList.length / renwu.myfollowerList.length - 1 <= basis.devourLimit) return;

    if (renwu.myfollowerList == 0) {
      if (renwu.aiPerList) {
        delete renwu.aiPerList.zhurenwuList[node.parent._id];
      }
    } else {
      renwu.beDevours(this.parent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9kZXZvdXJjaXJjbGUuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImJhc2lzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJzdGFydCIsInBhcmVudCIsIm5vZGUiLCJwYXJlbnRDb20iLCJnZXRDb21wb25lbnQiLCJvbkNvbGxpc2lvblN0YXkiLCJvdGhlciIsInNlbGYiLCJyZW53dSIsImdyb3VwIiwibXlmb2xsb3dlckxpc3QiLCJsZW5ndGgiLCJkZXZvdXJMaW1pdCIsImFpUGVyTGlzdCIsInpodXJlbnd1TGlzdCIsIl9pZCIsImJlRGV2b3VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBa0JBLE9BQU8sQ0FBQyxPQUFEO0lBQWpCQyxpQkFBQUE7O0FBRVJDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUksQ0FFUixDQVJJO0FBU0xDLEVBQUFBLEtBVEssbUJBU0c7QUFDSixTQUFLQyxNQUFMLEdBQWMsS0FBS0MsSUFBTCxDQUFVRCxNQUF4QjtBQUNBLFNBQUtFLFNBQUwsR0FBaUIsS0FBS0YsTUFBTCxDQUFZRyxZQUFaLENBQXlCLE9BQXpCLENBQWpCO0FBQ0gsR0FaSTtBQWFMQyxFQUFBQSxlQUFlLEVBQUUseUJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3BDLFFBQU1MLElBQUksR0FBR0ksS0FBSyxDQUFDSixJQUFuQjtBQUNBLFFBQU1NLEtBQUssR0FBR04sSUFBSSxDQUFDRCxNQUFMLENBQVlHLFlBQVosQ0FBeUIsT0FBekIsQ0FBZDtBQUVBLFFBQUlGLElBQUksQ0FBQ08sS0FBTCxJQUFjLE9BQWxCLEVBQTJCO0FBQzNCLFFBQUksS0FBS04sU0FBTCxDQUFlTyxjQUFmLENBQThCQyxNQUE5QixHQUF1Q0gsS0FBSyxDQUFDRSxjQUFOLENBQXFCQyxNQUE1RCxHQUFxRSxDQUFyRSxJQUEwRWpCLEtBQUssQ0FBQ2tCLFdBQXBGLEVBQWlHOztBQUVqRyxRQUFJSixLQUFLLENBQUNFLGNBQU4sSUFBd0IsQ0FBNUIsRUFBK0I7QUFDM0IsVUFBSUYsS0FBSyxDQUFDSyxTQUFWLEVBQXFCO0FBQ2pCLGVBQU9MLEtBQUssQ0FBQ0ssU0FBTixDQUFnQkMsWUFBaEIsQ0FBNkJaLElBQUksQ0FBQ0QsTUFBTCxDQUFZYyxHQUF6QyxDQUFQO0FBQ0g7QUFDSixLQUpELE1BSU87QUFDSFAsTUFBQUEsS0FBSyxDQUFDUSxTQUFOLENBQWdCLEtBQUtmLE1BQXJCO0FBQ0g7QUFDSjtBQTNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGJhc2lzIH0gPSByZXF1aXJlKCdiYXNpcycpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgIHRoaXMucGFyZW50Q29tID0gdGhpcy5wYXJlbnQuZ2V0Q29tcG9uZW50KCdyZW53dScpO1xuICAgIH0sXG4gICAgb25Db2xsaXNpb25TdGF5OiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG90aGVyLm5vZGU7XG4gICAgICAgIGNvbnN0IHJlbnd1ID0gbm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdyZW53dScpO1xuXG4gICAgICAgIGlmIChub2RlLmdyb3VwID09ICdhaeaEn+efpeWciCcpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q29tLm15Zm9sbG93ZXJMaXN0Lmxlbmd0aCAvIHJlbnd1Lm15Zm9sbG93ZXJMaXN0Lmxlbmd0aCAtIDEgPD0gYmFzaXMuZGV2b3VyTGltaXQpIHJldHVybjtcblxuICAgICAgICBpZiAocmVud3UubXlmb2xsb3dlckxpc3QgPT0gMCkge1xuICAgICAgICAgICAgaWYgKHJlbnd1LmFpUGVyTGlzdCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZW53dS5haVBlckxpc3Quemh1cmVud3VMaXN0W25vZGUucGFyZW50Ll9pZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW53dS5iZURldm91cnModGhpcy5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19