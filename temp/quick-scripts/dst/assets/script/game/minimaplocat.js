
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/minimaplocat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92c85DAjbFK77BK5WiVQOLO', 'minimaplocat');
// script/game/minimaplocat.js

"use strict";

var _interact = require("./interact.js");

cc.Class({
  "extends": cc.Component,
  properties: {
    bolan: cc.Node,
    dwtp: cc.Sprite
  },
  onLoad: function onLoad() {
    this.bolan.width = this.node.width;
    this.bolan.height = this.node.height;
    this.bolan.runAction(cc.repeatForever(cc.sequence(cc.spawn(cc.scaleTo(0.5, 2), cc.fadeOut(0.5)), cc.scaleTo(0, 1), cc.fadeIn(0))));
    this.bolan.active = false;

    if (this.node.typeNmae == 'booth') {
      this.dwtp.spriteFrame = _interact.interact._this.gameImgList.getSpriteFrame('白色背景');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9taW5pbWFwbG9jYXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJib2xhbiIsIk5vZGUiLCJkd3RwIiwiU3ByaXRlIiwib25Mb2FkIiwid2lkdGgiLCJub2RlIiwiaGVpZ2h0IiwicnVuQWN0aW9uIiwicmVwZWF0Rm9yZXZlciIsInNlcXVlbmNlIiwic3Bhd24iLCJzY2FsZVRvIiwiZmFkZU91dCIsImZhZGVJbiIsImFjdGl2ZSIsInR5cGVObWFlIiwic3ByaXRlRnJhbWUiLCJpbnRlcmFjdCIsIl90aGlzIiwiZ2FtZUltZ0xpc3QiLCJnZXRTcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSyxJQURGO0FBRVJDLElBQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDTztBQUZELEdBSFA7QUFRTEMsRUFBQUEsTUFSSyxvQkFRSTtBQUNMLFNBQUtKLEtBQUwsQ0FBV0ssS0FBWCxHQUFtQixLQUFLQyxJQUFMLENBQVVELEtBQTdCO0FBQ0EsU0FBS0wsS0FBTCxDQUFXTyxNQUFYLEdBQW9CLEtBQUtELElBQUwsQ0FBVUMsTUFBOUI7QUFDQSxTQUFLUCxLQUFMLENBQVdRLFNBQVgsQ0FBcUJaLEVBQUUsQ0FBQ2EsYUFBSCxDQUFpQmIsRUFBRSxDQUFDYyxRQUFILENBQ2xDZCxFQUFFLENBQUNlLEtBQUgsQ0FDSWYsRUFBRSxDQUFDZ0IsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FESixFQUVJaEIsRUFBRSxDQUFDaUIsT0FBSCxDQUFXLEdBQVgsQ0FGSixDQURrQyxFQUtsQ2pCLEVBQUUsQ0FBQ2dCLE9BQUgsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUxrQyxFQU1sQ2hCLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVSxDQUFWLENBTmtDLENBQWpCLENBQXJCO0FBU0EsU0FBS2QsS0FBTCxDQUFXZSxNQUFYLEdBQW9CLEtBQXBCOztBQUVBLFFBQUcsS0FBS1QsSUFBTCxDQUFVVSxRQUFWLElBQXNCLE9BQXpCLEVBQWlDO0FBQzdCLFdBQUtkLElBQUwsQ0FBVWUsV0FBVixHQUF3QkMsbUJBQVNDLEtBQVQsQ0FBZUMsV0FBZixDQUEyQkMsY0FBM0IsQ0FBMEMsTUFBMUMsQ0FBeEI7QUFDSDtBQUNKO0FBekJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGludGVyYWN0IH0gZnJvbSAnLi9pbnRlcmFjdC5qcydcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYm9sYW46IGNjLk5vZGUsXG4gICAgICAgIGR3dHA6IGNjLlNwcml0ZVxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYm9sYW4ud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIHRoaXMuYm9sYW4uaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib2xhbi5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLnNwYXduKFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC41LCAyKSxcbiAgICAgICAgICAgICAgICBjYy5mYWRlT3V0KDAuNSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYy5zY2FsZVRvKDAsIDEpLFxuICAgICAgICAgICAgY2MuZmFkZUluKDApXG4gICAgICAgICkpKVxuXG4gICAgICAgIHRoaXMuYm9sYW4uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYodGhpcy5ub2RlLnR5cGVObWFlID09ICdib290aCcpe1xuICAgICAgICAgICAgdGhpcy5kd3RwLnNwcml0ZUZyYW1lID0gaW50ZXJhY3QuX3RoaXMuZ2FtZUltZ0xpc3QuZ2V0U3ByaXRlRnJhbWUoJ+eZveiJsuiDjOaZrycpXG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=