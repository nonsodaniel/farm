$(document).ready(function(){

var farm = function(){
	console.log('....call farm');
	var summaryDiv = $().find("#summaryDiv"), detailDiv = $("#detailDiv");
	var receiptDiv = $(".historyPerPeriod")

	return {
		actions: function($el, action_type){
			var method_ = {
				loadHistory: function(){
					alert("Hello you")
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

			
				$('body #farm_cont').on("click","[data-action]", function(){
				
				})

				$(".sign_up").on("click", function(){
					farm().loadHistory()
					var name = $(".name").val();
					var email = $(".email").val();
					var phone = $(".phone").val();
					var state = $(".state").val();
					var lga = $(".lga").val();
					var password1 = $(".password1").val();
					var password2 = $(".password2").val();

					if(password1 != password2){
						alert("passwords do not match")
					}
					console.log(name, email, phone, state, lga);
					var arr = [], obj = {};
					arr.push(name, email, phone, state, lga)
					obj.myname = name;
					obj.my_email = email;
					obj.my_phone = phone;
					obj.my_state = state;
					obj.my_lga = lga;
					console.log(arr, obj);




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
