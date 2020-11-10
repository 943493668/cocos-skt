
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/exsettlement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f6c3rCcfFPkLm3+UkbkYss', 'exsettlement');
// script/game/exsettlement.js

"use strict";

var _game = require("./game.js");

var _interact = require("./interact.js");

var _music = require("./../currency/music.js");

var _require = require('basis'),
    basis = _require.basis;

var _require2 = require('weixin_ty'),
    wxcur = _require2.wxcur;

var exsettlement = cc.Class({
  "extends": cc.Component,
  properties: {
    duanweimz: cc.Sprite,
    jdt: cc.ProgressBar,
    jangbs: cc.Label,
    guangquan: cc.Node,
    xunzhangAli: cc.SpriteAtlas,
    huodexxs: cc.Label,
    dijiming: cc.Label
  },
  onLoad: function onLoad() {
    exsettlement._this = this;
    this.guangquan.runAction(cc.repeatForever(cc.rotateBy(5, 360)));
    this.updateInt();
  },
  updateInt: function updateInt() {
    this.duanweimz.spriteFrame = this.xunzhangAli.getSpriteFrame("\u52CB\u7AE0\u7B49\u7EA7" + basis.myLevel);
    this.jdt.progress = basis.myExper / basis.upLevelEx[basis.myLevel - 1];
    this.jangbs.string = basis.myExper + "/" + basis.upLevelEx[basis.myLevel - 1];
  },
  init: function init(num, rank) {
    var _this = this;

    setTimeout(function () {
      _this.gdjbs = num;
      _this.gdjbs2 = num;
    }, 1000);
    this.huodexxs.string = "x" + num;
    this.dijiming.string = "\u7B2C" + (rank + 1) + "\u540D\u5956\u52B1";
  },
  update: function update(dt) {
    if (this.gdjbs > 0) {
      var num = Math.ceil(dt * this.gdjbs2);
      num > this.gdjbs ? num = this.gdjbs : '';
      this.gdjbs -= num;
      basis.myExper += num;

      if (basis.myExper >= basis.upLevelEx[basis.myLevel - 1]) {
        basis.myLevel += 1;
      }

      if (this.gdjbs == 0) {
        setTimeout(function () {
          _interact.interact._this.gotoIndex();
        }, 1000);
      }

      this.updateInt();
    }
  }
});
exports.exsettlement = exsettlement;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9leHNldHRsZW1lbnQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImJhc2lzIiwid3hjdXIiLCJleHNldHRsZW1lbnQiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImR1YW53ZWlteiIsIlNwcml0ZSIsImpkdCIsIlByb2dyZXNzQmFyIiwiamFuZ2JzIiwiTGFiZWwiLCJndWFuZ3F1YW4iLCJOb2RlIiwieHVuemhhbmdBbGkiLCJTcHJpdGVBdGxhcyIsImh1b2RleHhzIiwiZGlqaW1pbmciLCJvbkxvYWQiLCJfdGhpcyIsInJ1bkFjdGlvbiIsInJlcGVhdEZvcmV2ZXIiLCJyb3RhdGVCeSIsInVwZGF0ZUludCIsInNwcml0ZUZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJteUxldmVsIiwicHJvZ3Jlc3MiLCJteUV4cGVyIiwidXBMZXZlbEV4Iiwic3RyaW5nIiwiaW5pdCIsIm51bSIsInJhbmsiLCJzZXRUaW1lb3V0IiwiZ2RqYnMiLCJnZGpiczIiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJjZWlsIiwiaW50ZXJhY3QiLCJnb3RvSW5kZXgiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztlQUxrQkEsT0FBTyxDQUFDLE9BQUQ7SUFBakJDLGlCQUFBQTs7Z0JBQ1VELE9BQU8sQ0FBQyxXQUFEO0lBQWpCRSxrQkFBQUE7O0FBTVIsSUFBTUMsWUFBWSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUMxQixhQUFTRCxFQUFFLENBQUNFLFNBRGM7QUFHMUJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssTUFETjtBQUVSQyxJQUFBQSxHQUFHLEVBQUVOLEVBQUUsQ0FBQ08sV0FGQTtBQUdSQyxJQUFBQSxNQUFNLEVBQUVSLEVBQUUsQ0FBQ1MsS0FISDtBQUlSQyxJQUFBQSxTQUFTLEVBQUVWLEVBQUUsQ0FBQ1csSUFKTjtBQUtSQyxJQUFBQSxXQUFXLEVBQUVaLEVBQUUsQ0FBQ2EsV0FMUjtBQU1SQyxJQUFBQSxRQUFRLEVBQUVkLEVBQUUsQ0FBQ1MsS0FOTDtBQU9STSxJQUFBQSxRQUFRLEVBQUVmLEVBQUUsQ0FBQ1M7QUFQTCxHQUhjO0FBWTFCTyxFQUFBQSxNQVowQixvQkFZakI7QUFDTGpCLElBQUFBLFlBQVksQ0FBQ2tCLEtBQWIsR0FBcUIsSUFBckI7QUFFQSxTQUFLUCxTQUFMLENBQWVRLFNBQWYsQ0FBeUJsQixFQUFFLENBQUNtQixhQUFILENBQWlCbkIsRUFBRSxDQUFDb0IsUUFBSCxDQUFZLENBQVosRUFBZSxHQUFmLENBQWpCLENBQXpCO0FBRUEsU0FBS0MsU0FBTDtBQUNILEdBbEJ5QjtBQW1CMUJBLEVBQUFBLFNBbkIwQix1QkFtQmQ7QUFDUixTQUFLakIsU0FBTCxDQUFla0IsV0FBZixHQUE2QixLQUFLVixXQUFMLENBQWlCVyxjQUFqQiw4QkFBdUMxQixLQUFLLENBQUMyQixPQUE3QyxDQUE3QjtBQUNBLFNBQUtsQixHQUFMLENBQVNtQixRQUFULEdBQW9CNUIsS0FBSyxDQUFDNkIsT0FBTixHQUFpQjdCLEtBQUssQ0FBQzhCLFNBQU4sQ0FBZ0I5QixLQUFLLENBQUMyQixPQUFOLEdBQWdCLENBQWhDLENBQXJDO0FBQ0EsU0FBS2hCLE1BQUwsQ0FBWW9CLE1BQVosR0FBd0IvQixLQUFLLENBQUM2QixPQUE5QixTQUF5QzdCLEtBQUssQ0FBQzhCLFNBQU4sQ0FBZ0I5QixLQUFLLENBQUMyQixPQUFOLEdBQWdCLENBQWhDLENBQXpDO0FBRUgsR0F4QnlCO0FBeUIxQkssRUFBQUEsSUF6QjBCLGdCQXlCckJDLEdBekJxQixFQXlCaEJDLElBekJnQixFQXlCVjtBQUFBOztBQUNaQyxJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiLE1BQUEsS0FBSSxDQUFDQyxLQUFMLEdBQWFILEdBQWI7QUFDQSxNQUFBLEtBQUksQ0FBQ0ksTUFBTCxHQUFjSixHQUFkO0FBQ0gsS0FIUyxFQUdQLElBSE8sQ0FBVjtBQUtBLFNBQUtoQixRQUFMLENBQWNjLE1BQWQsU0FBMkJFLEdBQTNCO0FBQ0EsU0FBS2YsUUFBTCxDQUFjYSxNQUFkLGVBQTJCRyxJQUFJLEdBQUcsQ0FBbEM7QUFDSCxHQWpDeUI7QUFrQzFCSSxFQUFBQSxNQWxDMEIsa0JBa0NuQkMsRUFsQ21CLEVBa0NmO0FBQ1AsUUFBSSxLQUFLSCxLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEIsVUFBSUgsR0FBRyxHQUFHTyxJQUFJLENBQUNDLElBQUwsQ0FBVUYsRUFBRSxHQUFHLEtBQUtGLE1BQXBCLENBQVY7QUFDQUosTUFBQUEsR0FBRyxHQUFHLEtBQUtHLEtBQVgsR0FBbUJILEdBQUcsR0FBRyxLQUFLRyxLQUE5QixHQUFzQyxFQUF0QztBQUNBLFdBQUtBLEtBQUwsSUFBY0gsR0FBZDtBQUNBakMsTUFBQUEsS0FBSyxDQUFDNkIsT0FBTixJQUFpQkksR0FBakI7O0FBQ0EsVUFBSWpDLEtBQUssQ0FBQzZCLE9BQU4sSUFBaUI3QixLQUFLLENBQUM4QixTQUFOLENBQWdCOUIsS0FBSyxDQUFDMkIsT0FBTixHQUFnQixDQUFoQyxDQUFyQixFQUF5RDtBQUNyRDNCLFFBQUFBLEtBQUssQ0FBQzJCLE9BQU4sSUFBaUIsQ0FBakI7QUFDSDs7QUFFRCxVQUFJLEtBQUtTLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUNqQkQsUUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDYk8sNkJBQVN0QixLQUFULENBQWV1QixTQUFmO0FBQ0gsU0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIOztBQUVELFdBQUtuQixTQUFMO0FBQ0g7QUFDSjtBQXBEeUIsQ0FBVCxDQUFyQjtBQXVEQW9CLE9BQU8sQ0FBQzFDLFlBQVIsR0FBdUJBLFlBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGJhc2lzIH0gPSByZXF1aXJlKCdiYXNpcycpO1xuY29uc3QgeyB3eGN1ciB9ID0gcmVxdWlyZSgnd2VpeGluX3R5Jyk7XG5cbmltcG9ydCB7IGdhbWUgfSBmcm9tICcuL2dhbWUuanMnO1xuaW1wb3J0IHsgaW50ZXJhY3QgfSBmcm9tICcuL2ludGVyYWN0LmpzJ1xuaW1wb3J0IHsgbXVzaWMgfSBmcm9tICcuLy4uL2N1cnJlbmN5L211c2ljLmpzJztcblxuY29uc3QgZXhzZXR0bGVtZW50ID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZHVhbndlaW16OiBjYy5TcHJpdGUsXG4gICAgICAgIGpkdDogY2MuUHJvZ3Jlc3NCYXIsXG4gICAgICAgIGphbmdiczogY2MuTGFiZWwsXG4gICAgICAgIGd1YW5ncXVhbjogY2MuTm9kZSxcbiAgICAgICAgeHVuemhhbmdBbGk6IGNjLlNwcml0ZUF0bGFzLFxuICAgICAgICBodW9kZXh4czogY2MuTGFiZWwsXG4gICAgICAgIGRpamltaW5nOiBjYy5MYWJlbFxuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBleHNldHRsZW1lbnQuX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuZ3VhbmdxdWFuLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnJvdGF0ZUJ5KDUsIDM2MCkpKVxuXG4gICAgICAgIHRoaXMudXBkYXRlSW50KCk7XG4gICAgfSxcbiAgICB1cGRhdGVJbnQoKSB7XG4gICAgICAgIHRoaXMuZHVhbndlaW16LnNwcml0ZUZyYW1lID0gdGhpcy54dW56aGFuZ0FsaS5nZXRTcHJpdGVGcmFtZShg5YuL56ug562J57qnJHtiYXNpcy5teUxldmVsfWApO1xuICAgICAgICB0aGlzLmpkdC5wcm9ncmVzcyA9IGJhc2lzLm15RXhwZXIgLyAoYmFzaXMudXBMZXZlbEV4W2Jhc2lzLm15TGV2ZWwgLSAxXSk7XG4gICAgICAgIHRoaXMuamFuZ2JzLnN0cmluZyA9IGAke2Jhc2lzLm15RXhwZXJ9LyR7YmFzaXMudXBMZXZlbEV4W2Jhc2lzLm15TGV2ZWwgLSAxXX1gO1xuXG4gICAgfSxcbiAgICBpbml0KG51bSwgcmFuaykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2RqYnMgPSBudW07XG4gICAgICAgICAgICB0aGlzLmdkamJzMiA9IG51bTtcbiAgICAgICAgfSwgMTAwMClcblxuICAgICAgICB0aGlzLmh1b2RleHhzLnN0cmluZyA9IGB4JHtudW19YDtcbiAgICAgICAgdGhpcy5kaWppbWluZy5zdHJpbmcgPSBg56ysJHtyYW5rICsgMX3lkI3lpZblirFgO1xuICAgIH0sXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmdkamJzID4gMCkge1xuICAgICAgICAgICAgbGV0IG51bSA9IE1hdGguY2VpbChkdCAqIHRoaXMuZ2RqYnMyKTtcbiAgICAgICAgICAgIG51bSA+IHRoaXMuZ2RqYnMgPyBudW0gPSB0aGlzLmdkamJzIDogJyc7XG4gICAgICAgICAgICB0aGlzLmdkamJzIC09IG51bTtcbiAgICAgICAgICAgIGJhc2lzLm15RXhwZXIgKz0gbnVtO1xuICAgICAgICAgICAgaWYgKGJhc2lzLm15RXhwZXIgPj0gYmFzaXMudXBMZXZlbEV4W2Jhc2lzLm15TGV2ZWwgLSAxXSkge1xuICAgICAgICAgICAgICAgIGJhc2lzLm15TGV2ZWwgKz0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2RqYnMgPT0gMCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdC5fdGhpcy5nb3RvSW5kZXgoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUludCgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydHMuZXhzZXR0bGVtZW50ID0gZXhzZXR0bGVtZW50OyJdfQ==