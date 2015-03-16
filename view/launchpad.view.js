sap.ui.jsview("view.launchpad", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf view.launchpad
	 */
	getControllerName : function() {
		return "view.launchpad";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf view.launchpad
	 */
	createContent : function(oController) {

		var page =  new sap.m.Page({
			title : "DUX Health Dashboard",
			showNavButton: true,
			backgroundDesign: sap.m.PageBackgroundDesign.Standard, 			

			content : [

				new sap.m.TileContainer("tile_container", {
				height: "100%",
				width: "100%",
				allowAdd: true,
				tiles : [

					new sap.m.StandardTile("tile_prescription", {
						title : "{i18n>Tile_Title_Prescription}",
						//info : "{i18n>Tile_Info_Prescription}",
						//numberUnit: "{i18n>Tile_NumberUnit_App1}",
						//number: "{/App1/hits}",
						icon: "sap-icon://activity-individual",
						iconDensityAware: false,
						removable: false,
						press: function(){
							window.location.assign("../DuxHealthPrescriptionApp");
						}
					}),

					new sap.m.StandardTile("tile_examination", {
						title : "{i18n>Tile_Title_Examination}",
						//info : "{i18n>Tile_Info_Examination}",
						//numberUnit : "{i18n>Tile_NumberUnit_App2}",
						//number: "{/App2/hits}",
						icon: "sap-icon://stethoscope",
						removable : false,
						press: function(){
							window.location.assign("../DuxHealthExaminationApp");
						}
					}),

					new sap.m.StandardTile("tile_pep", {
						title : "{i18n>Tile_Title_Pep}",
						//info : "{i18n>Tile_Info_Pep}",
						//numberUnit : "{i18n>Tile_NumberUnit_Pep}",
						//number: "{/App3/hits}",
						icon: "sap-icon://electronic-medical-record"
					}),

					new sap.m.StandardTile("tile_registration_pacient", {
						title : "{i18n>Tile_Title_Registration_Pacient}",
						//info : "{i18n>Tile_Info_Registration_Pacient}",
						//numberUnit : "{i18n>Tile_NumberUnit_App4}",
						//number: "{/App4/hits}",
						icon: "sap-icon://person-placeholder",
						press: function(){
							window.location.assign("../DuxHealthPatientRegistrationApp");
						}
					}),

					new sap.m.StandardTile("tile_registration_doctor", {
						title : "{i18n>Tile_Title_Registration_Doctor}",
						//info : "{i18n>Tile_Info_Registration_Doctor}",
						//numberUnit : "{i18n>Tile_Registration_Doctor}",
						//number: "{/App5/hits}",
						icon: "sap-icon://doctor"
					}),

					new sap.m.StandardTile("tile_registration_diagnostic", {
						title : "{i18n>Tile_Title_Registration_Diagnostic}",
						//info : "{i18n>Tile_Info_Registration_Doctor}",
						//numberUnit : "{i18n>Tile_Registration_Doctor}",
						//number: "{/App5/hits}",
						icon: "sap-icon://clinical-order"
					}),

					new sap.m.StandardTile("tile_registration_attendance", {
						title : "{i18n>Tile_Title_Registration_Attendance}",
						//info : "{i18n>Tile_Info_Registration_Doctor}",
						//numberUnit : "{i18n>Tile_Registration_Doctor}",
						//number: "{/App5/hits}",
						icon: "sap-icon://wounds-doc"
					}),



				]

			})
	
			]
		});
		
		page.setEnableScrolling(false); // give a fixed height, so the TileContainer can use 100% height

		return page;
	}

});
