
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/index/shop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59fbaW22KBOdYOJBjiGokY5', 'shop');
// script/index/shop.js

"use strict";

var _index = require("./index.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

cc.Class({
  "extends": cc.Component,
  properties: {
    skin: cc.Prefab,
    myfigure: dragonBones.ArmatureDisplay,
    figureWords: cc.Label,
    freeUseBut: cc.Node,
    figureFun: cc.Label,
    shopList: cc.Node,
    funBut1: cc.Node,
    funBut2: cc.Node,
    funBut3: cc.Node
  },
  onLoad: function onLoad() {
    this.myfigureData = basis.myfigure;
    this.wearSkil = null;
    this.curSkin = null;
    this.setMyFigure();
    this.addShopFigure();
  },
  addShopFigure: function addShopFigure() {
    for (var i = 0; i < basis.figureList.length; i++) {
      var node = cc.instantiate(this.skin);
      node.getComponent('skin').init(basis.figureList[i], this);
      node.figureListIndex = i;
      node.parent = this.shopList;
    }
  },
  confirmSwitchSkin: function confirmSwitchSkin() {
    var wearSkilData = basis.figureList[this.wearSkil.node.figureListIndex];
    var curSkinData = basis.figureList[this.curSkin.node.figureListIndex];
    wearSkilData.use = false;
    curSkinData.use = true;
    this.wearSkil.init(wearSkilData, this);
    this.curSkin.init(curSkinData, this);
    basis.myfigure = this.curSkin.skinData;
    basis.myfigureIndex = this.curSkin.node.figureListIndex;

    _index.index._this.setrenwu();

    this.wearSkil = this.curSkin;
    this.curSkin = null;
    this.setMyFigure();
  },
  buySkin: function buySkin() {
    var data = basis.figureList[this.curSkin.node.figureListIndex];

    if (basis.gold < data.gold) {
      _index.index._this.popup('', 'goldNotEnoughPopup');

      return;
    }

    basis.gold -= data.gold;

    _index.index._this.setGold();

    data.hava = true;
    this.curSkin.init(data, this);
    this.setMyFigure();
  },
  trialSkin: function trialSkin() {
    basis.myfigure = this.curSkin.skinData;

    _index.index._this.gotoGame();
  },
  setMyFigure: function setMyFigure() {
    this.funBut1.active = false;
    this.funBut2.active = false;
    this.funBut3.active = false;
    this.myfigure.armatureName = this.myfigureData.imgName;
    this.myfigure.playAnimation('行走');
    this.myfigure.node.height = this.myfigureData.height;
    this.figureWords.string = this.myfigureData.figureWord;
    this.figureFun.string = "\u89D2\u8272\u79FB\u52A8\u901F\u5EA6+" + this.myfigureData.effect * 100 + "%";

    if (this.myfigureData.hava) {
      this.freeUseBut.active = false;

      if (!this.myfigureData.use) {
        this.funBut3.active = true;
      }
    } else {
      this.freeUseBut.active = true;

      if (this.myfigureData.type == 'gold') {
        this.funBut2.active = true;
      } else {
        this.funBut1.active = true;
      }
    }
  },
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvaW5kZXgvc2hvcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid3hjdXIiLCJiYXNpcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic2tpbiIsIlByZWZhYiIsIm15ZmlndXJlIiwiZHJhZ29uQm9uZXMiLCJBcm1hdHVyZURpc3BsYXkiLCJmaWd1cmVXb3JkcyIsIkxhYmVsIiwiZnJlZVVzZUJ1dCIsIk5vZGUiLCJmaWd1cmVGdW4iLCJzaG9wTGlzdCIsImZ1bkJ1dDEiLCJmdW5CdXQyIiwiZnVuQnV0MyIsIm9uTG9hZCIsIm15ZmlndXJlRGF0YSIsIndlYXJTa2lsIiwiY3VyU2tpbiIsInNldE15RmlndXJlIiwiYWRkU2hvcEZpZ3VyZSIsImkiLCJmaWd1cmVMaXN0IiwibGVuZ3RoIiwibm9kZSIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsImZpZ3VyZUxpc3RJbmRleCIsInBhcmVudCIsImNvbmZpcm1Td2l0Y2hTa2luIiwid2VhclNraWxEYXRhIiwiY3VyU2tpbkRhdGEiLCJ1c2UiLCJza2luRGF0YSIsIm15ZmlndXJlSW5kZXgiLCJpbmRleCIsIl90aGlzIiwic2V0cmVud3UiLCJidXlTa2luIiwiZGF0YSIsImdvbGQiLCJwb3B1cCIsInNldEdvbGQiLCJoYXZhIiwidHJpYWxTa2luIiwiZ290b0dhbWUiLCJhY3RpdmUiLCJhcm1hdHVyZU5hbWUiLCJpbWdOYW1lIiwicGxheUFuaW1hdGlvbiIsImhlaWdodCIsInN0cmluZyIsImZpZ3VyZVdvcmQiLCJlZmZlY3QiLCJ0eXBlIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O2VBSGtCQSxPQUFPLENBQUMsV0FBRDtJQUFqQkMsaUJBQUFBOztnQkFDVUQsT0FBTyxDQUFDLE9BQUQ7SUFBakJFLGtCQUFBQTs7QUFJUkMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENB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QUFoQixHQUF5QixLQUF6Qjs7QUFDQSxVQUFJLENBQUMsS0FBSy9CLFlBQUwsQ0FBa0JpQixHQUF2QixFQUE0QjtBQUN4QixhQUFLbkIsT0FBTCxDQUFhaUMsTUFBYixHQUFzQixJQUF0QjtBQUNIO0FBQ0osS0FMRCxNQUtPO0FBQ0gsV0FBS3ZDLFVBQUwsQ0FBZ0J1QyxNQUFoQixHQUF5QixJQUF6Qjs7QUFFQSxVQUFJLEtBQUsvQixZQUFMLENBQWtCdUMsSUFBbEIsSUFBMEIsTUFBOUIsRUFBc0M7QUFDbEMsYUFBSzFDLE9BQUwsQ0FBYWtDLE1BQWIsR0FBc0IsSUFBdEI7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLbkMsT0FBTCxDQUFhbUMsTUFBYixHQUFzQixJQUF0QjtBQUNIO0FBQ0o7QUFDSixHQWhHSTtBQWlHTFMsRUFBQUEsTUFqR0ssa0JBaUdFQyxFQWpHRixFQWlHTSxDQUFHO0FBakdULENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgd3hjdXIgfSA9IHJlcXVpcmUoJ3dlaXhpbl90eScpO1xuY29uc3QgeyBiYXNpcyB9ID0gcmVxdWlyZSgnYmFzaXMnKTtcblxuaW1wb3J0IHsgaW5kZXggfSBmcm9tICcuL2luZGV4LmpzJztcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgICBza2luOiBjYy5QcmVmYWIsXG4gICAgICAgIG15ZmlndXJlOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXksXG4gICAgICAgIGZpZ3VyZVdvcmRzOiBjYy5MYWJlbCxcbiAgICAgICAgZnJlZVVzZUJ1dDogY2MuTm9kZSxcbiAgICAgICAgZmlndXJlRnVuOiBjYy5MYWJlbCxcbiAgICAgICAgc2hvcExpc3Q6IGNjLk5vZGUsXG4gICAgICAgIGZ1bkJ1dDE6IGNjLk5vZGUsXG4gICAgICAgIGZ1bkJ1dDI6IGNjLk5vZGUsXG4gICAgICAgIGZ1bkJ1dDM6IGNjLk5vZGUsXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5teWZpZ3VyZURhdGEgPSBiYXNpcy5teWZpZ3VyZTtcbiAgICAgICAgdGhpcy53ZWFyU2tpbCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VyU2tpbiA9IG51bGw7XG4gICAgICAgIHRoaXMuc2V0TXlGaWd1cmUoKTtcbiAgICAgICAgdGhpcy5hZGRTaG9wRmlndXJlKCk7XG4gICAgfSxcbiAgICBhZGRTaG9wRmlndXJlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2lzLmZpZ3VyZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNraW4pO1xuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoJ3NraW4nKS5pbml0KGJhc2lzLmZpZ3VyZUxpc3RbaV0sIHRoaXMpO1xuICAgICAgICAgICAgbm9kZS5maWd1cmVMaXN0SW5kZXggPSBpO1xuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnNob3BMaXN0O1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb25maXJtU3dpdGNoU2tpbigpIHtcbiAgICAgICAgY29uc3Qgd2VhclNraWxEYXRhID0gYmFzaXMuZmlndXJlTGlzdFt0aGlzLndlYXJTa2lsLm5vZGUuZmlndXJlTGlzdEluZGV4XTtcbiAgICAgICAgY29uc3QgY3VyU2tpbkRhdGEgPSBiYXNpcy5maWd1cmVMaXN0W3RoaXMuY3VyU2tpbi5ub2RlLmZpZ3VyZUxpc3RJbmRleF07XG5cbiAgICAgICAgd2VhclNraWxEYXRhLnVzZSA9IGZhbHNlO1xuICAgICAgICBjdXJTa2luRGF0YS51c2UgPSB0cnVlO1xuICAgICAgICB0aGlzLndlYXJTa2lsLmluaXQod2VhclNraWxEYXRhLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jdXJTa2luLmluaXQoY3VyU2tpbkRhdGEsIHRoaXMpO1xuXG4gICAgICAgIGJhc2lzLm15ZmlndXJlID0gdGhpcy5jdXJTa2luLnNraW5EYXRhO1xuICAgICAgICBiYXNpcy5teWZpZ3VyZUluZGV4ID0gdGhpcy5jdXJTa2luLm5vZGUuZmlndXJlTGlzdEluZGV4O1xuXG4gICAgICAgIGluZGV4Ll90aGlzLnNldHJlbnd1KCk7XG5cbiAgICAgICAgdGhpcy53ZWFyU2tpbCA9IHRoaXMuY3VyU2tpbjtcbiAgICAgICAgdGhpcy5jdXJTa2luID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldE15RmlndXJlKClcbiAgICB9LFxuICAgIGJ1eVNraW4oKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBiYXNpcy5maWd1cmVMaXN0W3RoaXMuY3VyU2tpbi5ub2RlLmZpZ3VyZUxpc3RJbmRleF07XG5cbiAgICAgICAgaWYgKGJhc2lzLmdvbGQgPCBkYXRhLmdvbGQpIHtcbiAgICAgICAgICAgIGluZGV4Ll90aGlzLnBvcHVwKCcnLCAnZ29sZE5vdEVub3VnaFBvcHVwJyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGJhc2lzLmdvbGQgLT0gZGF0YS5nb2xkO1xuICAgICAgICBpbmRleC5fdGhpcy5zZXRHb2xkKCk7XG4gICAgICAgIGRhdGEuaGF2YSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VyU2tpbi5pbml0KGRhdGEsIHRoaXMpO1xuICAgICAgICB0aGlzLnNldE15RmlndXJlKClcbiAgICB9LFxuICAgIHRyaWFsU2tpbigpIHtcbiAgICAgICAgYmFzaXMubXlmaWd1cmUgPSB0aGlzLmN1clNraW4uc2tpbkRhdGE7XG4gICAgICAgIGluZGV4Ll90aGlzLmdvdG9HYW1lKCk7XG4gICAgfSxcbiAgICBzZXRNeUZpZ3VyZSgpIHtcbiAgICAgICAgdGhpcy5mdW5CdXQxLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZ1bkJ1dDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnVuQnV0My5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm15ZmlndXJlLmFybWF0dXJlTmFtZSA9IHRoaXMubXlmaWd1cmVEYXRhLmltZ05hbWU7XG4gICAgICAgIHRoaXMubXlmaWd1cmUucGxheUFuaW1hdGlvbign6KGM6LWwJyk7XG4gICAgICAgIHRoaXMubXlmaWd1cmUubm9kZS5oZWlnaHQgPSB0aGlzLm15ZmlndXJlRGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5maWd1cmVXb3Jkcy5zdHJpbmcgPSB0aGlzLm15ZmlndXJlRGF0YS5maWd1cmVXb3JkO1xuICAgICAgICB0aGlzLmZpZ3VyZUZ1bi5zdHJpbmcgPSBg6KeS6Imy56e75Yqo6YCf5bqmKyR7dGhpcy5teWZpZ3VyZURhdGEuZWZmZWN0ICogMTAwfSVgO1xuXG4gICAgICAgIGlmICh0aGlzLm15ZmlndXJlRGF0YS5oYXZhKSB7XG4gICAgICAgICAgICB0aGlzLmZyZWVVc2VCdXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIXRoaXMubXlmaWd1cmVEYXRhLnVzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZnVuQnV0My5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcmVlVXNlQnV0LmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm15ZmlndXJlRGF0YS50eXBlID09ICdnb2xkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZnVuQnV0Mi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bkJ1dDEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlKGR0KSB7IH0sXG59KTtcbiJdfQ==