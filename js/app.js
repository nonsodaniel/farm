$(document).ready(function(){

var farm = function(){
	console.log('....call farm');
	var summaryDiv = $().find("#summaryDiv"), detailDiv = $("#detailDiv");
	var receiptDiv = $(".historyPerPeriod")

	return {
		actions: function($el, action_type){
			var method_ = {
				loadHistory: function(){
					
				},
				loadLogins : function(){
					

				},
				loadProductStockIn : function(){
				
				}, 
				expandDiv : function(){
				
				},
				loadLogin : function(){

				}

			}//method_ ends

			return method_[action_type]();
	    },	// actions ends

		loadView: function(container,template){

		},
		expand: function(size1,size2){
		
		},
		collapse: function(size1,size2){
						
		},
		listView: function(size1, size2){

		},
		boxView: function(size1, size2){
			
		},
		left__color: function(color1,color2){
				
		},


		event: function(){

				$('body').on("click",".loadHistory", function(){
					

				})


				$('body').on("click",".loadLogins", function(){
				

				})

				$('body').on("click",".loadProductStockIn", function(){
					

				})







				$('body #farm_cont').on("click","[data-action]", function(){
				
				})

				$(".middleCollection").on("click", function(){
					
				})

				$(".historyPerPeriod").on("click", function(){
				

				
				})

				// $(".")
		},
		init: function(){
				farm().event();
		}
	}
}

farm().init();


})
