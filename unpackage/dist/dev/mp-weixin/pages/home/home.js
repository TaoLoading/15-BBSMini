"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const count = common_vendor.ref(0);
    const increment = () => {
      count.value++;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(count.value),
        b: common_vendor.o(increment)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/MyProject/015-BBSMiniProgram/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
