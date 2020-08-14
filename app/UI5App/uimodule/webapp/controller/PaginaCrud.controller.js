sap.ui.define(
  [
    "com/myorg/myUI5App/controller/BaseController",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, JSONModel) {
    "use strict";

    var oView;

    return Controller.extend("com.myorg.myUI5App.controller.PaginaCrud", {
      onInit: function () {
        oView = this.getView();
      },
    });
  }
);
