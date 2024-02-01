({
  afterScriptLoad: function (component, event, helper) {
    component.set("v.countries", window.anthems.getCountries());
  },
  handleRandomCountryClick: function (component, event, helper) {
    component.set("v.randomCountry", window.anthems.getRandomCountry());
  },
  handleTitleClick: function (component, event, helper) {
    component.set("v.titles", window.anthems.getTitles());
  },
  handleAnthemClick: function (component, event, helper) {
    component.set("v.loading", true);
    let country = component.find("titlePicklist").get("v.value");
    
    window.anthems.getAnthem(country, function(returnValue) {
        component.set("v.anthem", returnValue.replace(/\r|\n/g,"<br />"));
        component.set("v.loading", false);
    })
  }
});
