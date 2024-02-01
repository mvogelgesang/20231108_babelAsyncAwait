({
	afterScriptsLoaded : function(component, event, helper) {
		console.log('ScriptLoaded');
	},
    
    validateFiles : function(component, event, helper) {
        var chosenFiles = component.find("files").getElement().files;
        
        console.log('Before promise all in validateFiles');
        
        Promise.all([].map.call(chosenFiles, function (file) {
             return new Promise(function (resolve, reject) {  
                var reader = new FileReader();         
                 reader.onload = function () {
                    resolve({file: new Uint8Array(reader.result)});
                };
                reader.readAsArrayBuffer(file);
             });
        })).then(function (convertedFiles) {
            console.log('Before calling helper.validateFiles');
            helper.validateFiles(component, helper, convertedFiles);
        })
    },
})