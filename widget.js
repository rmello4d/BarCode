WAF.define('BarCode', function() {
    var widget = WAF.require('waf-core/widget');
    var BarCode = widget.create('BarCode');
 	
   BarCode.prototype.init = function () {
    	 			
		this.config = {
			format: this.format()
		}
		
		//rendering the widget
		this.render();
		
		//Defining the onChange method for the relevant attributes
		this.value.onChange( function(value) { 
    		this.render(); 
    	});	
    	this.format.onChange( function(value) {
    		this.config.format = value; 
    		this.render(); 
    	});	

    };  
       
    BarCode.prototype.render = function () {
   		//emptying the node
    	this.node.innerHTML = '<img></img>';
		//creating the gauge attribute
		try {
			$('img', this.node).JsBarcode(String(this.value()), this.config);
		}catch(error) {
			console.error(error);
		}
		
    };

    //Adding a bindable property
   	BarCode.addProperty('value');
   	
 	//Possible types EAN UPCA ITF14 CODE128 CODE39
    BarCode.addProperty('format', { 
    	'defaultValue' : 'CODE128', 
    	'bindable' : false
    });
    
    return BarCode;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
