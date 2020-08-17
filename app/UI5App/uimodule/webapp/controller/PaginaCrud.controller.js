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

        var url = "/anon/getAnimals";
        jQuery.ajax({
          url: url,
          type: "GET",
          dataType: "json",
          success: function (result) {
            console.log("*****************Inside success " + result);
            var oModel = new JSONModel({ AnimalsCollection: result.value });
            oView.setModel(oModel);
          },
          error: function (e) {
            // log error in browser
            console.log(e.message);
          },
        });
      },
    });
  }
);
