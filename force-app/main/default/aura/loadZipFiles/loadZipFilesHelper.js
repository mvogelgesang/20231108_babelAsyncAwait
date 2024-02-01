({
	validateFiles : function(component, helper, convertedFiles) {
        var chosenFiles = component.find("files").getElement().files;
        var chosenFilesLength = chosenFiles.length;
        var zipRegExp = new RegExp('.zip$', 'i');
        let firstFileName = chosenFiles[0].name.replace(/.+[\\\/]/, "");
        var promises = [];
        var fileComponentsDescriptions = [];
        for (let i = 0; i < chosenFilesLength; ++i){
            var fileName = chosenFiles[i].name.replace(/.+[\\\/]/, "");
            if(zipRegExp.test(fileName)){
                promises.push(this.extractAttachments(convertedFiles[i].file, fileName, this, component));
            }
        }
        console.log('Before Promise All in Helper 123');
        console.log('promises:', promises);
        Promise.all(promises).then(
            function(extractedZipInfos){
                var errorZipNames = [];
                console.log('In then of Promise All in Helper 123');
            }
        );
    },
    
     extractAttachments : function(file, fileName, helper, component) {
        console.log('Before JSZip');
        return JSZip.loadAsync(file).then($A.getCallback(function(zip) {
            console.log('inside JSZip:', zip);      
        }), $A.getCallback(function (e) {
            console.log('error');
        }));
    },
})