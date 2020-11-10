"use strict";
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