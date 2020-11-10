
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/gameRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cf31vXuDtNwJV5cYwAH+gO', 'gameRank');
// script/game/gameRank.js

"use strict";

var _game = require("./game.js");

var _interact = require("./interact.js");

var _require = require('basis'),
    basis = _require.basis;

cc.Class({
  "extends": cc.Component,
  properties: {
    tx: cc.Sprite,
    mingzi: cc.Label,
    jinbi: cc.Label,
    mingci: cc.Label,
    jiangbei: cc.Label,
    mingci1: cc.Node,
    mingci2: cc.Node,
    mingci3: cc.Node
  },
  init: function init(index) {
    this.mingci.string = index + 1;

    if (index == 0) {
      this.mingci1.active = true;
    } else if (index == 1) {
      this.mingci2.active = true;
    } else if (index == 2) {
      this.mingci3.active = true;
    } else {
      this.mingci.node.active = true;
    }

    this.jiangbei.string = basis.gameRankReward[index];
    this.mingzi.string = _interact.interact._this.goldRnak[index].gameName;
    this.jinbi.string = Math.round(_interact.interact._this.goldRnak[index].gold);

    if (_interact.interact._this.goldRnak[index].gameName == basis.gameNmae) {
      this.node.getComponent(cc.Sprite).spriteFrame = _interact.interact._this.gameImgList.getSpriteFrame('自己di');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9nYW1lUmFuay5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiYmFzaXMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInR4IiwiU3ByaXRlIiwibWluZ3ppIiwiTGFiZWwiLCJqaW5iaSIsIm1pbmdjaSIsImppYW5nYmVpIiwibWluZ2NpMSIsIk5vZGUiLCJtaW5nY2kyIiwibWluZ2NpMyIsImluaXQiLCJpbmRleCIsInN0cmluZyIsImFjdGl2ZSIsIm5vZGUiLCJnYW1lUmFua1Jld2FyZCIsImludGVyYWN0IiwiX3RoaXMiLCJnb2xkUm5hayIsImdhbWVOYW1lIiwiTWF0aCIsInJvdW5kIiwiZ29sZCIsImdhbWVObWFlIiwiZ2V0Q29tcG9uZW50Iiwic3ByaXRlRnJhbWUiLCJnYW1lSW1nTGlzdCIsImdldFNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztlQUhrQkEsT0FBTyxDQUFDLE9BQUQ7SUFBakJDLGlCQUFBQTs7QUFLUkMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEVBQUUsRUFBRUosRUFBRSxDQUFDSyxNQURDO0FBRVJDLElBQUFBLE1BQU0sRUFBRU4sRUFBRSxDQUFDTyxLQUZIO0FBR1JDLElBQUFBLEtBQUssRUFBRVIsRUFBRSxDQUFDTyxLQUhGO0FBSVJFLElBQUFBLE1BQU0sRUFBRVQsRUFBRSxDQUFDTyxLQUpIO0FBS1JHLElBQUFBLFFBQVEsRUFBRVYsRUFBRSxDQUFDTyxLQUxMO0FBTVJJLElBQUFBLE9BQU8sRUFBQ1gsRUFBRSxDQUFDWSxJQU5IO0FBT1JDLElBQUFBLE9BQU8sRUFBQ2IsRUFBRSxDQUFDWSxJQVBIO0FBUVJFLElBQUFBLE9BQU8sRUFBQ2QsRUFBRSxDQUFDWTtBQVJILEdBSFA7QUFhTEcsRUFBQUEsSUFiSyxnQkFhQUMsS0FiQSxFQWFPO0FBQ1IsU0FBS1AsTUFBTCxDQUFZUSxNQUFaLEdBQXFCRCxLQUFLLEdBQUcsQ0FBN0I7O0FBQ0EsUUFBR0EsS0FBSyxJQUFJLENBQVosRUFBYztBQUNWLFdBQUtMLE9BQUwsQ0FBYU8sTUFBYixHQUFzQixJQUF0QjtBQUNILEtBRkQsTUFFTSxJQUFHRixLQUFLLElBQUksQ0FBWixFQUFjO0FBQ2hCLFdBQUtILE9BQUwsQ0FBYUssTUFBYixHQUFzQixJQUF0QjtBQUNILEtBRkssTUFFQSxJQUFHRixLQUFLLElBQUksQ0FBWixFQUFjO0FBQ2hCLFdBQUtGLE9BQUwsQ0FBYUksTUFBYixHQUFzQixJQUF0QjtBQUNILEtBRkssTUFFRDtBQUNELFdBQUtULE1BQUwsQ0FBWVUsSUFBWixDQUFpQkQsTUFBakIsR0FBMEIsSUFBMUI7QUFDSDs7QUFDRCxTQUFLUixRQUFMLENBQWNPLE1BQWQsR0FBdUJsQixLQUFLLENBQUNxQixjQUFOLENBQXFCSixLQUFyQixDQUF2QjtBQUNBLFNBQUtWLE1BQUwsQ0FBWVcsTUFBWixHQUFxQkksbUJBQVNDLEtBQVQsQ0FBZUMsUUFBZixDQUF3QlAsS0FBeEIsRUFBK0JRLFFBQXBEO0FBQ0EsU0FBS2hCLEtBQUwsQ0FBV1MsTUFBWCxHQUFvQlEsSUFBSSxDQUFDQyxLQUFMLENBQVdMLG1CQUFTQyxLQUFULENBQWVDLFFBQWYsQ0FBd0JQLEtBQXhCLEVBQStCVyxJQUExQyxDQUFwQjs7QUFFQSxRQUFJTixtQkFBU0MsS0FBVCxDQUFlQyxRQUFmLENBQXdCUCxLQUF4QixFQUErQlEsUUFBL0IsSUFBMkN6QixLQUFLLENBQUM2QixRQUFyRCxFQUErRDtBQUMzRCxXQUFLVCxJQUFMLENBQVVVLFlBQVYsQ0FBdUI3QixFQUFFLENBQUNLLE1BQTFCLEVBQWtDeUIsV0FBbEMsR0FBZ0RULG1CQUFTQyxLQUFULENBQWVTLFdBQWYsQ0FBMkJDLGNBQTNCLENBQTBDLE1BQTFDLENBQWhEO0FBQ0g7QUFDSjtBQS9CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGJhc2lzIH0gPSByZXF1aXJlKCdiYXNpcycpO1xuXG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9nYW1lLmpzJ1xuaW1wb3J0IHsgaW50ZXJhY3QgfSBmcm9tICcuL2ludGVyYWN0LmpzJ1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0eDogY2MuU3ByaXRlLFxuICAgICAgICBtaW5nemk6IGNjLkxhYmVsLFxuICAgICAgICBqaW5iaTogY2MuTGFiZWwsXG4gICAgICAgIG1pbmdjaTogY2MuTGFiZWwsXG4gICAgICAgIGppYW5nYmVpOiBjYy5MYWJlbCxcbiAgICAgICAgbWluZ2NpMTpjYy5Ob2RlLFxuICAgICAgICBtaW5nY2kyOmNjLk5vZGUsXG4gICAgICAgIG1pbmdjaTM6Y2MuTm9kZSxcbiAgICB9LFxuICAgIGluaXQoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5taW5nY2kuc3RyaW5nID0gaW5kZXggKyAxO1xuICAgICAgICBpZihpbmRleCA9PSAwKXtcbiAgICAgICAgICAgIHRoaXMubWluZ2NpMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZihpbmRleCA9PSAxKXtcbiAgICAgICAgICAgIHRoaXMubWluZ2NpMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZihpbmRleCA9PSAyKXtcbiAgICAgICAgICAgIHRoaXMubWluZ2NpMy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubWluZ2NpLm5vZGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuamlhbmdiZWkuc3RyaW5nID0gYmFzaXMuZ2FtZVJhbmtSZXdhcmRbaW5kZXhdO1xuICAgICAgICB0aGlzLm1pbmd6aS5zdHJpbmcgPSBpbnRlcmFjdC5fdGhpcy5nb2xkUm5ha1tpbmRleF0uZ2FtZU5hbWU7XG4gICAgICAgIHRoaXMuamluYmkuc3RyaW5nID0gTWF0aC5yb3VuZChpbnRlcmFjdC5fdGhpcy5nb2xkUm5ha1tpbmRleF0uZ29sZCk7XG5cbiAgICAgICAgaWYgKGludGVyYWN0Ll90aGlzLmdvbGRSbmFrW2luZGV4XS5nYW1lTmFtZSA9PSBiYXNpcy5nYW1lTm1hZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gaW50ZXJhY3QuX3RoaXMuZ2FtZUltZ0xpc3QuZ2V0U3ByaXRlRnJhbWUoJ+iHquW3sWRpJylcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19