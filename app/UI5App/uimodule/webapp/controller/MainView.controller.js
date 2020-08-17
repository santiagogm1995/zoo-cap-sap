sap.ui.define(
  [
    "com/myorg/myUI5App/controller/BaseController",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, JSONModel) {
    "use strict";

    var oView;

    return Controller.extend("com.myorg.myUI5App.controller.MainView", {
      onInit: function () {
      },

      goToPadCRUD: function () {
        this.navTo("PaginaCrud", {}, true);
      },
    });
  }
);
