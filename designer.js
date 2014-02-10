(function(BarCode) {

    BarCode.setDescription('BarCode');
    BarCode.setWidth('200');
    BarCode.setHeight('50');  
    BarCode.addAttribute('data-format', {
            type: 'combobox',
            options: [
            	{key : 'EAN' , 			value:'EAN (13)'}, 
            	{key : 'CODE128', 		value:'CODE128 (B)'}, 
            	{key : 'UPC-A', 		value:'UPC-A'}, 
            	{key : 'CODE39', 		value:'CODE39'},   
            	{key : 'ITF14', 		value:'ITF14'}           	
            ],
            defaultValue: 'CODE128' 
    });
      
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html
