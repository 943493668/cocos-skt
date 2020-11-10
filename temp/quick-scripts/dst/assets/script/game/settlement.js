
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/settlement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70b3cVVkNhCZZcGYEBQtGd4', 'settlement');
// script/game/settlement.js

"use strict";

var _interact = require("./interact.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

var settlement = cc.Class({
  "extends": cc.Component,
  properties: {
    bcsr: cc.Label,
    rank: cc.Node,
    rankItem: cc.Prefab
  },
  init: function init(data) {
    this.gold = Number(data.money);
    this.bcsr.string = data.money;
    basis.gold += this.gold;
    basis.settGold += this.gold;
    this.setRank();
  },
  setRank: function setRank() {
    for (var i = 0; i < _interact.interact._this.goldRnak.length; i++) {
      var node = cc.instantiate(this.rankItem);
      var nodeCom = node.getComponent('gameRank');
      node.x = 750;
      node.runAction(cc.sequence(cc.moveBy(0.2 * (i + 1), cc.v2(0, 0)), cc.moveBy(0.5, cc.v2(-750, 0))));
      nodeCom.init(i);
      node.parent = this.rank;
    }
  },
  doubleGold: function doubleGold() {
    basis.gold += this.gold;
    basis.settGold += this.gold;

    _interact.interact._this.openExset();
  },
  onLoad: function onLoad() {
    settlement._this = this;
  }
});
exports.settlement = settlement;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9zZXR0bGVtZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3eGN1ciIsImJhc2lzIiwic2V0dGxlbWVudCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmNzciIsIkxhYmVsIiwicmFuayIsIk5vZGUiLCJyYW5rSXRlbSIsIlByZWZhYiIsImluaXQiLCJkYXRhIiwiZ29sZCIsIk51bWJlciIsIm1vbmV5Iiwic3RyaW5nIiwic2V0dEdvbGQiLCJzZXRSYW5rIiwiaSIsImludGVyYWN0IiwiX3RoaXMiLCJnb2xkUm5hayIsImxlbmd0aCIsIm5vZGUiLCJpbnN0YW50aWF0ZSIsIm5vZGVDb20iLCJnZXRDb21wb25lbnQiLCJ4IiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJtb3ZlQnkiLCJ2MiIsInBhcmVudCIsImRvdWJsZUdvbGQiLCJvcGVuRXhzZXQiLCJvbkxvYWQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztlQUhrQkEsT0FBTyxDQUFDLFdBQUQ7SUFBakJDLGlCQUFBQTs7Z0JBQ1VELE9BQU8sQ0FBQyxPQUFEO0lBQWpCRSxrQkFBQUE7O0FBSVIsSUFBTUMsVUFBVSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUN4QixhQUFTRCxFQUFFLENBQUNFLFNBRFk7QUFHeEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVKLEVBQUUsQ0FBQ0ssS0FERDtBQUVSQyxJQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ08sSUFGRDtBQUdSQyxJQUFBQSxRQUFRLEVBQUVSLEVBQUUsQ0FBQ1M7QUFITCxHQUhZO0FBUXhCQyxFQUFBQSxJQVJ3QixnQkFRbkJDLElBUm1CLEVBUWI7QUFDUCxTQUFLQyxJQUFMLEdBQVlDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDRyxLQUFOLENBQWxCO0FBRUEsU0FBS1YsSUFBTCxDQUFVVyxNQUFWLEdBQW1CSixJQUFJLENBQUNHLEtBQXhCO0FBRUFoQixJQUFBQSxLQUFLLENBQUNjLElBQU4sSUFBYyxLQUFLQSxJQUFuQjtBQUVBZCxJQUFBQSxLQUFLLENBQUNrQixRQUFOLElBQWtCLEtBQUtKLElBQXZCO0FBRUEsU0FBS0ssT0FBTDtBQUNILEdBbEJ1QjtBQW1CeEJBLEVBQUFBLE9BbkJ3QixxQkFtQmQ7QUFDTixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLG1CQUFTQyxLQUFULENBQWVDLFFBQWYsQ0FBd0JDLE1BQTVDLEVBQW9ESixDQUFDLEVBQXJELEVBQXlEO0FBQ3JELFVBQU1LLElBQUksR0FBR3ZCLEVBQUUsQ0FBQ3dCLFdBQUgsQ0FBZSxLQUFLaEIsUUFBcEIsQ0FBYjtBQUNBLFVBQU1pQixPQUFPLEdBQUdGLElBQUksQ0FBQ0csWUFBTCxDQUFrQixVQUFsQixDQUFoQjtBQUNBSCxNQUFBQSxJQUFJLENBQUNJLENBQUwsR0FBUyxHQUFUO0FBQ0FKLE1BQUFBLElBQUksQ0FBQ0ssU0FBTCxDQUNJNUIsRUFBRSxDQUFDNkIsUUFBSCxDQUNJN0IsRUFBRSxDQUFDOEIsTUFBSCxDQUFVLE9BQU9aLENBQUMsR0FBRyxDQUFYLENBQVYsRUFBeUJsQixFQUFFLENBQUMrQixFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsQ0FBekIsQ0FESixFQUVJL0IsRUFBRSxDQUFDOEIsTUFBSCxDQUFVLEdBQVYsRUFBZTlCLEVBQUUsQ0FBQytCLEVBQUgsQ0FBTSxDQUFDLEdBQVAsRUFBWSxDQUFaLENBQWYsQ0FGSixDQURKO0FBTUFOLE1BQUFBLE9BQU8sQ0FBQ2YsSUFBUixDQUFhUSxDQUFiO0FBQ0FLLE1BQUFBLElBQUksQ0FBQ1MsTUFBTCxHQUFjLEtBQUsxQixJQUFuQjtBQUNIO0FBQ0osR0FqQ3VCO0FBa0N4QjJCLEVBQUFBLFVBbEN3Qix3QkFrQ1g7QUFDVG5DLElBQUFBLEtBQUssQ0FBQ2MsSUFBTixJQUFjLEtBQUtBLElBQW5CO0FBRUFkLElBQUFBLEtBQUssQ0FBQ2tCLFFBQU4sSUFBa0IsS0FBS0osSUFBdkI7O0FBRUFPLHVCQUFTQyxLQUFULENBQWVjLFNBQWY7QUFDSCxHQXhDdUI7QUF5Q3hCQyxFQUFBQSxNQXpDd0Isb0JBeUNmO0FBQ0xwQyxJQUFBQSxVQUFVLENBQUNxQixLQUFYLEdBQW1CLElBQW5CO0FBQ0g7QUEzQ3VCLENBQVQsQ0FBbkI7QUErQ0FnQixPQUFPLENBQUNyQyxVQUFSLEdBQXFCQSxVQUFyQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IHd4Y3VyIH0gPSByZXF1aXJlKCd3ZWl4aW5fdHknKTtcbmNvbnN0IHsgYmFzaXMgfSA9IHJlcXVpcmUoJ2Jhc2lzJyk7XG5cbmltcG9ydCB7IGludGVyYWN0IH0gZnJvbSAnLi9pbnRlcmFjdC5qcydcblxuY29uc3Qgc2V0dGxlbWVudCA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJjc3I6IGNjLkxhYmVsLFxuICAgICAgICByYW5rOiBjYy5Ob2RlLFxuICAgICAgICByYW5rSXRlbTogY2MuUHJlZmFiXG4gICAgfSxcbiAgICBpbml0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5nb2xkID0gTnVtYmVyKGRhdGEubW9uZXkpO1xuXG4gICAgICAgIHRoaXMuYmNzci5zdHJpbmcgPSBkYXRhLm1vbmV5O1xuXG4gICAgICAgIGJhc2lzLmdvbGQgKz0gdGhpcy5nb2xkO1xuXG4gICAgICAgIGJhc2lzLnNldHRHb2xkICs9IHRoaXMuZ29sZDtcblxuICAgICAgICB0aGlzLnNldFJhbmsoKVxuICAgIH0sXG4gICAgc2V0UmFuaygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcmFjdC5fdGhpcy5nb2xkUm5hay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmFua0l0ZW0pO1xuICAgICAgICAgICAgY29uc3Qgbm9kZUNvbSA9IG5vZGUuZ2V0Q29tcG9uZW50KCdnYW1lUmFuaycpO1xuICAgICAgICAgICAgbm9kZS54ID0gNzUwO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSgwLjIgKiAoaSArIDEpLCBjYy52MigwLCAwKSksXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSgwLjUsIGNjLnYyKC03NTAsIDApKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIG5vZGVDb20uaW5pdChpKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5yYW5rO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkb3VibGVHb2xkKCkge1xuICAgICAgICBiYXNpcy5nb2xkICs9IHRoaXMuZ29sZDtcblxuICAgICAgICBiYXNpcy5zZXR0R29sZCArPSB0aGlzLmdvbGQ7XG5cbiAgICAgICAgaW50ZXJhY3QuX3RoaXMub3BlbkV4c2V0KCk7XG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHNldHRsZW1lbnQuX3RoaXMgPSB0aGlzO1xuICAgIH1cbn0pO1xuXG5cbmV4cG9ydHMuc2V0dGxlbWVudCA9IHNldHRsZW1lbnQ7XG4iXX0=