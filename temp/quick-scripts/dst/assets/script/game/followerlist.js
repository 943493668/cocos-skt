
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/followerlist.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f273+KMRNA3qxfXI9CKdOn', 'followerlist');
// script/game/followerlist.js

"use strict";

var _game = require("./game.js");

var _require = require('weixin_ty'),
    wxcur = _require.wxcur;

var _require2 = require('basis'),
    basis = _require2.basis;

var followerlist = cc.Class({
  "extends": cc.Component,
  properties: {
    followerlist: cc.Node,
    follower: cc.Prefab
  },
  onLoad: function onLoad() {
    followerlist._this = this;
    this.followerPool = wxcur.setNodeBool(50, this.follower);
  },
  update: function update(e) {}
});
exports.followerlist = followerlist;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZS9mb2xsb3dlcmxpc3QuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsInd4Y3VyIiwiYmFzaXMiLCJmb2xsb3dlcmxpc3QiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIk5vZGUiLCJmb2xsb3dlciIsIlByZWZhYiIsIm9uTG9hZCIsIl90aGlzIiwiZm9sbG93ZXJQb29sIiwic2V0Tm9kZUJvb2wiLCJ1cGRhdGUiLCJlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7ZUFIa0JBLE9BQU8sQ0FBQyxXQUFEO0lBQWpCQyxpQkFBQUE7O2dCQUNVRCxPQUFPLENBQUMsT0FBRDtJQUFqQkUsa0JBQUFBOztBQUlSLElBQU1DLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDMUIsYUFBU0QsRUFBRSxDQUFDRSxTQURjO0FBRzFCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkosSUFBQUEsWUFBWSxFQUFFQyxFQUFFLENBQUNJLElBRFQ7QUFFUkMsSUFBQUEsUUFBUSxFQUFFTCxFQUFFLENBQUNNO0FBRkwsR0FIYztBQVExQkMsRUFBQUEsTUFSMEIsb0JBUWpCO0FBQ0xSLElBQUFBLFlBQVksQ0FBQ1MsS0FBYixHQUFxQixJQUFyQjtBQUVBLFNBQUtDLFlBQUwsR0FBb0JaLEtBQUssQ0FBQ2EsV0FBTixDQUFrQixFQUFsQixFQUFzQixLQUFLTCxRQUEzQixDQUFwQjtBQUVILEdBYnlCO0FBYzFCTSxFQUFBQSxNQWQwQixrQkFjbkJDLENBZG1CLEVBY2hCLENBRVQ7QUFoQnlCLENBQVQsQ0FBckI7QUFvQkFDLE9BQU8sQ0FBQ2QsWUFBUixHQUF1QkEsWUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyB3eGN1ciB9ID0gcmVxdWlyZSgnd2VpeGluX3R5Jyk7XG5jb25zdCB7IGJhc2lzIH0gPSByZXF1aXJlKCdiYXNpcycpO1xuXG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9nYW1lLmpzJ1xuXG5jb25zdCBmb2xsb3dlcmxpc3QgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBmb2xsb3dlcmxpc3Q6IGNjLk5vZGUsXG4gICAgICAgIGZvbGxvd2VyOiBjYy5QcmVmYWJcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBmb2xsb3dlcmxpc3QuX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuZm9sbG93ZXJQb29sID0gd3hjdXIuc2V0Tm9kZUJvb2woNTAsIHRoaXMuZm9sbG93ZXIpO1xuICAgICAgICBcbiAgICB9LFxuICAgIHVwZGF0ZShlKSB7XG5cbiAgICB9XG59KTtcblxuXG5leHBvcnRzLmZvbGxvd2VybGlzdCA9IGZvbGxvd2VybGlzdCJdfQ==