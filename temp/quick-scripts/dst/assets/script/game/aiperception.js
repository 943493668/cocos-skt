
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/aiperception.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f00b6szxHVNDoGS+2v0JYGj', 'aiperception');
// script/game/aiperception.js

"use strict";

var _require = require('basis'),
    basis = _require.basis;

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.parent = this.node.parent;
    this.node.getComponent(cc.CircleCollider).radius = basis.aiPerception;
    this.initList();
  },
  initList: function initList() {
    this.list = {
      zhurenwuList: {},
      //主人物
      kerenwuList: {},
      //客人物
      tanweiList: {},
      //摊位
      jnengList: {},
      //技能
      moenyList: {} //钱

    };
    return this.list;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    var node = other.node;
    if (node.name == this.parent.name) return;
    if (node.invincible > 0) return;
    var nameSplit = node.name.split('-');

    if (nameSplit[0] == '散') {
      this.list.kerenwuList[node._id] = node;
    } else if (nameSplit[0] == '摊位') {
      var nodeCom = node.getComponent('booth');
      if (this.list.zhurenwuList[nodeCom.zhanlingzhenode._id]) return;

      if (nodeCom.zhanlziszai) {
        delete this.list.tanweiList[node._id];
        return;
      }

      this.list.tanweiList[node._id] = node;
    } else if (nameSplit[0] == '吞噬圈') {
      if (node.parent.name == this.parent.name) return;

      var _nodeCom = node.parent.getComponent('renwu');

      if (_nodeCom.myfollowerList.length == 0) {
        delete this.list.zhurenwuList[node._id];
        return;
      }

      ;
      this.list.zhurenwuList[node._id] = node.parent;
    } else if (nameSplit[0] == '技能') {
      this.list.jnengList[node._id] = node;
    } else if (nameSplit[0] == '钞票') {
      this.list.moenyList[node._id] = node;
    }
  },
  onCollisionExit: function onCollisionExit(other, self) {
    var node = other.node;
    if (node.name == this.parent.name) return;
    if (node.invincible > 0 || this.parent.invincible > 0) return;
    var nameSplit = node.name.split('-');

    if (nameSplit[0] == '散') {
      delete this.list.kerenwuList[node._id];
    } else if (nameSplit[0] == '摊位') {
      delete this.list.tanweiList[node._id];
    } else if (nameSplit[0] == '吞噬圈') {
      delete this.list.zhurenwuList[node._id];
    } else if (nameSplit[0] == '技能') {
      delete this.list.jnengList[node._id];
    } else if (nameSplit[0] == '钞票') {
      delete this.list.moenyList[node._id];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9haXBlcmNlcHRpb24uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImJhc2lzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJwYXJlbnQiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiQ2lyY2xlQ29sbGlkZXIiLCJyYWRpdXMiLCJhaVBlcmNlcHRpb24iLCJpbml0TGlzdCIsImxpc3QiLCJ6aHVyZW53dUxpc3QiLCJrZXJlbnd1TGlzdCIsInRhbndlaUxpc3QiLCJqbmVuZ0xpc3QiLCJtb2VueUxpc3QiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwibmFtZSIsImludmluY2libGUiLCJuYW1lU3BsaXQiLCJzcGxpdCIsIl9pZCIsIm5vZGVDb20iLCJ6aGFubGluZ3poZW5vZGUiLCJ6aGFubHppc3phaSIsIm15Zm9sbG93ZXJMaXN0IiwibGVuZ3RoIiwib25Db2xsaXNpb25FeGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztlQUFrQkEsT0FBTyxDQUFDLE9BQUQ7SUFBakJDLGlCQUFBQTs7QUFFUkMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSTtBQUNMLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxJQUFMLENBQVVELE1BQXhCO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCUCxFQUFFLENBQUNRLGNBQTFCLEVBQTBDQyxNQUExQyxHQUFtRFYsS0FBSyxDQUFDVyxZQUF6RDtBQUVBLFNBQUtDLFFBQUw7QUFDSCxHQVpJO0FBYUxBLEVBQUFBLFFBYkssc0JBYU07QUFDUCxTQUFLQyxJQUFMLEdBQVk7QUFDUkMsTUFBQUEsWUFBWSxFQUFFLEVBRE47QUFDUztBQUNqQkMsTUFBQUEsV0FBVyxFQUFFLEVBRkw7QUFFUTtBQUNo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LEtBQUtqQixNQUFMLENBQVlpQixVQUFaLEdBQXlCLENBQXBELEVBQXVEO0FBRXZELFFBQU1DLFNBQVMsR0FBR2pCLElBQUksQ0FBQ2UsSUFBTCxDQUFVRyxLQUFWLENBQWdCLEdBQWhCLENBQWxCOztBQUNBLFFBQUlELFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBZ0IsR0FBcEIsRUFBeUI7QUFFckIsYUFBTyxLQUFLWCxJQUFMLENBQVVFLFdBQVYsQ0FBc0JSLElBQUksQ0FBQ21CLEdBQTNCLENBQVA7QUFFSCxLQUpELE1BSU8sSUFBSUYsU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUFnQixJQUFwQixFQUEwQjtBQUM3QixhQUFPLEtBQUtYLElBQUwsQ0FBVUcsVUFBVixDQUFxQlQsSUFBSSxDQUFDbUIsR0FBMUIsQ0FBUDtBQUVILEtBSE0sTUFHQSxJQUFJRixTQUFTLENBQUMsQ0FBRCxDQUFULElBQWdCLEtBQXBCLEVBQTJCO0FBQzlCLGFBQU8sS0FBS1gsSUFBTCxDQUFVQyxZQUFWLENBQXVCUCxJQUFJLENBQUNtQixHQUE1QixDQUFQO0FBQ0gsS0FGTSxNQUVBLElBQUlGLFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBZ0IsSUFBcEIsRUFBMEI7QUFDN0IsYUFBTyxLQUFLWCxJQUFMLENBQVVJLFNBQVYsQ0FBb0JWLElBQUksQ0FBQ21CLEdBQXpCLENBQVA7QUFFSCxLQUhNLE1BR0EsSUFBSUYsU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUFnQixJQUFwQixFQUEwQjtBQUM3QixhQUFPLEtBQUtYLElBQUwsQ0FBVUssU0FBVixDQUFvQlgsSUFBSSxDQUFDbUIsR0FBekIsQ0FBUDtBQUNIO0FBQ0o7QUFoRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBiYXNpcyB9ID0gcmVxdWlyZSgnYmFzaXMnKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikucmFkaXVzID0gYmFzaXMuYWlQZXJjZXB0aW9uO1xuXG4gICAgICAgIHRoaXMuaW5pdExpc3QoKTtcbiAgICB9LFxuICAgIGluaXRMaXN0KCkge1xuICAgICAgICB0aGlzLmxpc3QgPSB7XG4gICAgICAgICAgICB6aHVyZW53dUxpc3Q6IHt9LC8v5Li75Lq654mpXG4gICAgICAgICAgICBrZXJlbnd1TGlzdDoge30sLy/lrqLkurrnialcbiAgICAgICAgICAgIHRhbndlaUxpc3Q6IHt9LC8v5pGK5L2NXG4gICAgICAgICAgICBqbmVuZ0xpc3Q6IHt9LC8v5oqA6IO9XG4gICAgICAgICAgICBtb2VueUxpc3Q6IHt9LC8v6ZKxXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdFxuICAgIH0sXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBvdGhlci5ub2RlO1xuXG5cbiAgICAgICAgaWYgKG5vZGUubmFtZSA9PSB0aGlzLnBhcmVudC5uYW1lKSByZXR1cm47XG5cbiAgICAgICAgaWYgKG5vZGUuaW52aW5jaWJsZSA+IDApIHJldHVybjtcblxuICAgICAgICBjb25zdCBuYW1lU3BsaXQgPSBub2RlLm5hbWUuc3BsaXQoJy0nKTtcblxuICAgICAgICBpZiAobmFtZVNwbGl0WzBdID09ICfmlaMnKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3Qua2VyZW53dUxpc3Rbbm9kZS5faWRdID0gbm9kZTtcblxuICAgICAgICB9IGVsc2UgaWYgKG5hbWVTcGxpdFswXSA9PSAn5pGK5L2NJykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZUNvbSA9IG5vZGUuZ2V0Q29tcG9uZW50KCdib290aCcpO1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdC56aHVyZW53dUxpc3Rbbm9kZUNvbS56aGFubGluZ3poZW5vZGUuX2lkXSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKG5vZGVDb20uemhhbmx6aXN6YWkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5saXN0LnRhbndlaUxpc3Rbbm9kZS5faWRdO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5saXN0LnRhbndlaUxpc3Rbbm9kZS5faWRdID0gbm9kZTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lU3BsaXRbMF0gPT0gJ+WQnuWZrOWciCcpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnBhcmVudC5uYW1lID09IHRoaXMucGFyZW50Lm5hbWUpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVDb20gPSBub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ3Jlbnd1Jyk7XG4gICAgICAgICAgICBpZiAobm9kZUNvbS5teWZvbGxvd2VyTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxpc3Quemh1cmVud3VMaXN0W25vZGUuX2lkXTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmxpc3Quemh1cmVud3VMaXN0W25vZGUuX2lkXSA9IG5vZGUucGFyZW50O1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWVTcGxpdFswXSA9PSAn5oqA6IO9Jykge1xuICAgICAgICAgICAgdGhpcy5saXN0LmpuZW5nTGlzdFtub2RlLl9pZF0gPSBub2RlO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWVTcGxpdFswXSA9PSAn6ZKe56WoJykge1xuICAgICAgICAgICAgdGhpcy5saXN0Lm1vZW55TGlzdFtub2RlLl9pZF0gPSBub2RlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkNvbGxpc2lvbkV4aXQ6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xuICAgICAgICBjb25zdCBub2RlID0gb3RoZXIubm9kZTtcbiAgICAgICAgaWYgKG5vZGUubmFtZSA9PSB0aGlzLnBhcmVudC5uYW1lKSByZXR1cm47XG5cbiAgICAgICAgaWYgKG5vZGUuaW52aW5jaWJsZSA+IDAgfHwgdGhpcy5wYXJlbnQuaW52aW5jaWJsZSA+IDApIHJldHVybjtcblxuICAgICAgICBjb25zdCBuYW1lU3BsaXQgPSBub2RlLm5hbWUuc3BsaXQoJy0nKTtcbiAgICAgICAgaWYgKG5hbWVTcGxpdFswXSA9PSAn5pWjJykge1xuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5saXN0LmtlcmVud3VMaXN0W25vZGUuX2lkXTtcblxuICAgICAgICB9IGVsc2UgaWYgKG5hbWVTcGxpdFswXSA9PSAn5pGK5L2NJykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGlzdC50YW53ZWlMaXN0W25vZGUuX2lkXTtcblxuICAgICAgICB9IGVsc2UgaWYgKG5hbWVTcGxpdFswXSA9PSAn5ZCe5Zms5ZyIJykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGlzdC56aHVyZW53dUxpc3Rbbm9kZS5faWRdO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWVTcGxpdFswXSA9PSAn5oqA6IO9Jykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGlzdC5qbmVuZ0xpc3Rbbm9kZS5faWRdO1xuXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZVNwbGl0WzBdID09ICfpkp7npagnKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5saXN0Lm1vZW55TGlzdFtub2RlLl9pZF07XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==