
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/currency/music.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95934TCQfxHWpaNXddEDsvB', 'music');
// script/currency/music.js

"use strict";

var _require = require('basis'),
    basis = _require.basis;

var music = cc.Class({
  "extends": cc.Component,
  properties: {
    tunshikeren: {
      "default": null,
      type: cc.AudioClip
    },
    baoxiangjl: {
      "default": null,
      type: cc.AudioClip
    },
    dajiaqiangren: {
      "default": null,
      type: cc.AudioClip
    },
    qztwchengg: {
      "default": null,
      type: cc.AudioClip
    },
    dianji: {
      "default": null,
      type: cc.AudioClip
    },
    pochan: {
      "default": null,
      type: cc.AudioClip
    },
    jiesuanjl: {
      "default": null,
      type: cc.AudioClip
    },
    bgm1: {
      "default": null,
      type: cc.AudioClip
    },
    bgm2: {
      "default": null,
      type: cc.AudioClip
    },
    shengli: {
      "default": null,
      type: cc.AudioClip
    },
    rongyaojiangbei: {
      "default": null,
      type: cc.AudioClip
    },
    jinggaosheng: {
      "default": null,
      type: cc.AudioClip
    },
    caifsj: {
      "default": null,
      type: cc.AudioClip
    },
    chaosss: {
      "default": null,
      type: cc.AudioClip
    },
    chaopaosztd: {
      "default": null,
      type: cc.AudioClip
    },
    chaopaofeidong: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    music._this = this;
  },
  Music: function Music(myMusic, bool) {
    if (bool === void 0) {
      bool = false;
    }

    return cc.audioEngine.playEffect(myMusic, bool);
  },
  stopMusic: function stopMusic(music) {
    cc.audioEngine.stopEffect(music);
  },
  openMusic: function openMusic(e, data, bool) {
    if (bool === void 0) {
      bool = false;
    }

    if (!basis.openMusic) return;
    return cc.audioEngine.playEffect(this[data], bool); //return this.Music(this[data], bool);
  }
});
exports.music = music;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY3VycmVuY3kvbXVzaWMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImJhc2lzIiwibXVzaWMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInR1bnNoaWtlcmVuIiwidHlwZSIsIkF1ZGlvQ2xpcCIsImJhb3hpYW5namwiLCJkYWppYXFpYW5ncmVuIiwicXp0d2NoZW5nZyIsImRpYW5qaSIsInBvY2hhbiIsImppZXN1YW5qbCIsImJnbTEiLCJiZ20yIiwic2hlbmdsaSIsInJvbmd5YW9qaWFuZ2JlaSIsImppbmdnYW9zaGVuZyIsImNhaWZzaiIsImNoYW9zc3MiLCJjaGFvcGFvc3p0ZCIsImNoYW9wYW9mZWlkb25nIiwib25Mb2FkIiwiX3RoaXMiLCJNdXNpYyIsIm15TXVzaWMiLCJib29sIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Iiwic3RvcE11c2ljIiwic3RvcEVmZmVjdCIsIm9wZW5NdXNpYyIsImUiLCJkYXRhIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBa0JBLE9BQU8sQ0FBQyxPQUFEO0lBQWpCQyxpQkFBQUE7O0FBRVIsSUFBTUMsS0FBSyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNuQixhQUFTRCxFQUFFLENBQUNFLFNBRE87QUFHbkJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZBLEtBREw7QUFLUkMsSUFBQUEsVUFBVSxFQUFDO0FBQ1AsaUJBQVMsSUFERjtBQUVQRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRixLQUxIO0FBU1JFLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFTLElBREU7QUFFWEgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkUsS0FUUDtBQWFSRyxJQUFBQSxVQUFVLEVBQUU7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bnN0IHsgYmFzaXMgfSA9IHJlcXVpcmUoJ2Jhc2lzJyk7XG5cbmNvbnN0IG11c2ljID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdHVuc2hpa2VyZW46IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgYmFveGlhbmdqbDp7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIGRhamlhcWlhbmdyZW46IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgcXp0d2NoZW5nZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9LFxuICAgICAgICBkaWFuamk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgcG9jaGFuOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIGppZXN1YW5qbDp7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIGJnbTE6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgYmdtMjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9LFxuICAgICAgICBzaGVuZ2xpOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIHJvbmd5YW9qaWFuZ2JlaToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9LFxuICAgICAgICBqaW5nZ2Fvc2hlbmc6e1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9LFxuICAgICAgICBjYWlmc2o6e1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9LFxuICAgICAgICBjaGFvc3NzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIGNoYW9wYW9zenRkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIGNoYW9wYW9mZWlkb25nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIG11c2ljLl90aGlzID0gdGhpcztcbiAgICB9LFxuICAgIE11c2ljKG15TXVzaWMsIGJvb2wgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChteU11c2ljLCBib29sKTtcbiAgICB9LFxuICAgIHN0b3BNdXNpYyhtdXNpYykge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KG11c2ljKTtcbiAgICB9LFxuICAgIG9wZW5NdXNpYyhlLCBkYXRhLCBib29sID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFiYXNpcy5vcGVuTXVzaWMpIHJldHVyblxuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzW2RhdGFdLCBib29sKTtcbiAgICAgICAgLy9yZXR1cm4gdGhpcy5NdXNpYyh0aGlzW2RhdGFdLCBib29sKTtcbiAgICB9XG59KTtcblxuZXhwb3J0cy5tdXNpYyA9IG11c2ljO1xuIl19