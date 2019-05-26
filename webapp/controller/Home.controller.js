sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {

		},

		onPress: function (oEvent) {
			sap.ui.require(["sap/m/MessageToast"], function (oMessage) {
				oMessage.show("Searching...");
			});
		}

	});
});