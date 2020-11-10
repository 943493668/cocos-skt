
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/skills.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea76ffMWoNAFLUcKOzQ48pk', 'skills');
// script/game/skills.js

"use strict";

var _game = require("./game.js");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {
    _game.game._this.yingcang(this.node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9za2lsbHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiZ2FtZSIsIl90aGlzIiwieWluZ2NhbmciLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxNQVBLLG9CQU9JLENBQUcsQ0FQUDtBQVNMQyxFQUFBQSxLQVRLLG1CQVNHLENBRVAsQ0FYSTtBQWFMQyxFQUFBQSxNQWJLLGtCQWFFQyxFQWJGLEVBYU07QUFDUEMsZUFBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CLEtBQUtDLElBQXpCO0FBQ0g7QUFmSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9nYW1lLmpzJ1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHsgfSxcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBnYW1lLl90aGlzLnlpbmdjYW5nKHRoaXMubm9kZSk7XG4gICAgfSxcbn0pO1xuIl19