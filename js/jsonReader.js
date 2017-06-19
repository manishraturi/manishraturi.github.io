// JavaScript Document
$(document).ready(function () {
	 var jsonURL = "category.json";
	 $.getJSON(jsonURL, function (json){
		 var i =1;
		$.each(json.Drama, function (index, value) {
			$('#Drama'+i).find('img').attr('src', this.src);
			$('#Drama'+i).find('strong').text(this.BookName);
			$('#Drama'+i).find('i').text(this.Author );
			$('#Drama'+i).find('h4').text(this.price);
			$('#DramaData'+i).find('input[name="item_name"]').val(this.BookName);
			$('#DramaData'+i).find('input[name="amount"]').val(this.price);
			
			$('#DB'+i).find('img').attr('src', this.src);
			$('#DB'+i).find('strong').text(this.BookName);
			$('#DB'+i).find('i').text(this.Author );
			$('#DB'+i).find('h4').text(this.price);
			$('#DB'+i).find('b').text(this.description);
			$('#DB'+i).find('input[name="item_name"]').val(this.BookName);
			$('#DB'+i).find('input[name="amount"]').val(this.price);
			
			i++;
		});
		
		//Humor 
		
		var A =1;
		$.each(json.Humor, function (index, value) {
			$('#Humor'+A).find('img').attr('src', this.src);
			$('#Humor'+A).find('strong').text(this.BookName);
			$('#Humor'+A).find('i').text(this.Author );
			$('#Humor'+A).find('h4').text(this.price);
			$('#HumorData'+A).find('input[name="item_name"]').val(this.BookName);
			$('#HumorData'+A).find('input[name="amount"]').val(this.price);
			
			$('#HB'+A).find('img').attr('src', this.src);
			$('#HB'+A).find('strong').text(this.BookName);
			$('#HB'+A).find('i').text(this.Author );
			$('#HB'+A).find('h4').text(this.price);
			$('#HB'+A).find('b').text(this.description);
			$('#HB'+A).find('input[name="item_name"]').val(this.BookName);
			$('#HB'+A).find('input[name="amount"]').val(this.price);
			
			A++;
		});
		
		//Music
		var B =1;
		$.each(json.Music, function (index, value) {
			$('#Music'+B).find('img').attr('src', this.src);
			$('#Music'+B).find('strong').text(this.BookName);
			$('#Music'+B).find('i').text(this.Author );
			$('#Music'+B).find('h4').text(this.price);
			$('#MusicData'+B).find('input[name="item_name"]').val(this.BookName);
			$('#MusicData'+B).find('input[name="amount"]').val(this.price);
			
			$('#MB'+B).find('img').attr('src', this.src);
			$('#MB'+B).find('strong').text(this.BookName);
			$('#MB'+B).find('i').text(this.Author );
			$('#MB'+B).find('h4').text(this.price);
			$('#MB'+B).find('b').text(this.description);
			$('#MB'+B).find('input[name="item_name"]').val(this.BookName);
			$('#MB'+B).find('input[name="amount"]').val(this.price);
			
			B++;
		});
		
		//Photography
		var c =1;
		$.each(json.Photography, function (index, value) {
			$('#Photography'+c).find('img').attr('src', this.src);
			$('#Photography'+c).find('strong').text(this.BookName);
			$('#Photography'+c).find('i').text(this.Author );
			$('#Photography'+c).find('h4').text(this.price);
			$('#PhotographyData'+c).find('input[name="item_name"]').val(this.BookName);
			$('#PhotographyData'+c).find('input[name="amount"]').val(this.price);
			
			$('#PB'+c).find('img').attr('src', this.src);
			$('#PB'+c).find('strong').text(this.BookName);
			$('#PB'+c).find('i').text(this.Author );
			$('#PB'+c).find('h4').text(this.price);
			$('#PB'+c).find('b').text(this.description);
			$('#PB'+c).find('input[name="item_name"]').val(this.BookName);
			$('#PB'+c).find('input[name="amount"]').val(this.price);
			
			c++;
		});
		
		//Biography
		
		var d =1;
		$.each(json.Biography, function (index, value) {
			$('#Biography'+d).find('img').attr('src', this.src);
			$('#Biography'+d).find('strong').text(this.BookName);
			$('#Biography'+d).find('i').text(this.Author );
			$('#Biography'+d).find('h4').text(this.price);
			$('#BiographyData'+d).find('input[name="item_name"]').val(this.BookName);
			$('#BiographyData'+d).find('input[name="amount"]').val(this.price);
			
			$('#BB'+d).find('img').attr('src', this.src);
			$('#BB'+d).find('strong').text(this.BookName);
			$('#BB'+d).find('i').text(this.Author );
			$('#BB'+d).find('h4').text(this.price);
			$('#BB'+d).find('b').text(this.description);
			$('#BB'+d).find('input[name="item_name"]').val(this.BookName);
			$('#BB'+d).find('input[name="amount"]').val(this.price);
			
			d++;
		});
		
		//Sports
		var e =1;
		$.each(json.Sports, function (index, value) {
			$('#Sports'+e).find('img').attr('src', this.src);
			$('#Sports'+e).find('strong').text(this.BookName);
			$('#Sports'+e).find('i').text(this.Author );
			$('#Sports'+e).find('h4').text(this.price);
			$('#SportsData'+e).find('input[name="item_name"]').val(this.BookName);
			$('#SportsData'+e).find('input[name="amount"]').val(this.price);
			
			$('#SB'+e).find('img').attr('src', this.src);
			$('#SB'+e).find('strong').text(this.BookName);
			$('#SB'+e).find('i').text(this.Author );
			$('#SB'+e).find('h4').text(this.price);
			$('#SB'+e).find('b').text(this.description);
			$('#SB'+e).find('input[name="item_name"]').val(this.BookName);
			$('#SB'+e).find('input[name="amount"]').val(this.price);
			
			e++;
		});
		
		//Business
		var f =1;
		$.each(json.Business, function (index, value) {
			$('#Business'+f).find('img').attr('src', this.src);
			$('#Business'+f).find('strong').text(this.BookName);
			$('#Business'+f).find('i').text(this.Author );
			$('#Business'+f).find('h4').text(this.price);
			$('#BusinessData'+f).find('input[name="item_name"]').val(this.BookName);
			$('#BusinessData'+f).find('input[name="amount"]').val(this.price);
			
			$('#BBB'+f).find('img').attr('src', this.src);
			$('#BBB'+f).find('strong').text(this.BookName);
			$('#BBB'+f).find('i').text(this.Author );
			$('#BBB'+f).find('h4').text(this.price);
			$('#BBB'+f).find('b').text(this.description);
			$('#BBB'+f).find('input[name="item_name"]').val(this.BookName);
			$('#BBB'+f).find('input[name="amount"]').val(this.price);
			
			f++;
		});
		
		//Careers
		
		var g =1;
		$.each(json.Careers, function (index, value) {
			$('#Careers'+g).find('img').attr('src', this.src);
			$('#Careers'+g).find('strong').text(this.BookName);
			$('#Careers'+g).find('i').text(this.Author );
			$('#Careers'+g).find('h4').text(this.price);
			$('#CareersData'+g).find('input[name="item_name"]').val(this.BookName);
			$('#CareersData'+g).find('input[name="amount"]').val(this.price);
			
			$('#CB'+g).find('img').attr('src', this.src);
			$('#CB'+g).find('strong').text(this.BookName);
			$('#CB'+g).find('i').text(this.Author );
			$('#CB'+g).find('h4').text(this.price);
			$('#CB'+g).find('b').text(this.description);
			$('#CB'+g).find('input[name="item_name"]').val(this.BookName);
			$('#CB'+g).find('input[name="amount"]').val(this.price);
			
			g++;
		});
		
		//Investment
		var h =1;
		$.each(json.Investment, function (index, value) {
			$('#Investment'+h).find('img').attr('src', this.src);
			$('#Investment'+h).find('strong').text(this.BookName);
			$('#Investment'+h).find('i').text(this.Author );
			$('#Investment'+h).find('h4').text(this.price);
			$('#InvestmentData'+h).find('input[name="item_name"]').val(this.BookName);
			$('#InvestmentData'+h).find('input[name="amount"]').val(this.price);
			
			$('#IB'+h).find('img').attr('src', this.src);
			$('#IB'+h).find('strong').text(this.BookName);
			$('#IB'+h).find('i').text(this.Author );
			$('#IB'+h).find('h4').text(this.price);
			$('#IB'+h).find('b').text(this.description);
			$('#IB'+h).find('input[name="item_name"]').val(this.BookName);
			$('#IB'+h).find('input[name="amount"]').val(this.price);
			
			h++;
		});
		
		//Cocking_Food
		var j =1;
		$.each(json.Cocking_Food, function (index, value) {
			$('#Cocking_Food'+j).find('img').attr('src', this.src);
			$('#Cocking_Food'+j).find('strong').text(this.BookName);
			$('#Cocking_Food'+j).find('i').text(this.Author );
			$('#Cocking_Food'+j).find('h4').text(this.price);
			$('#Cocking_FoodData'+j).find('input[name="item_name"]').val(this.BookName);
			$('#Cocking_FoodData'+j).find('input[name="amount"]').val(this.price);
			
			$('#CFB'+j).find('img').attr('src', this.src);
			$('#CFB'+j).find('strong').text(this.BookName);
			$('#CFB'+j).find('i').text(this.Author );
			$('#CFB'+j).find('h4').text(this.price);
			$('#CFB'+j).find('b').text(this.description);
			$('#CFB'+j).find('input[name="item_name"]').val(this.BookName);
			$('#CFB'+j).find('input[name="amount"]').val(this.price);
			
			j++;
		});
		
		//Education
		var k =1;
		$.each(json.Education, function (index, value) {
			$('#Education'+k).find('img').attr('src', this.src);
			$('#Education'+k).find('strong').text(this.BookName);
			$('#Education'+k).find('i').text(this.Author );
			$('#Education'+k).find('h4').text(this.price);
			$('#EducationData'+k).find('input[name="item_name"]').val(this.BookName);
			$('#EducationData'+k).find('input[name="amount"]').val(this.price);
			
			$('#EB'+k).find('img').attr('src', this.src);
			$('#EB'+k).find('strong').text(this.BookName);
			$('#EB'+k).find('i').text(this.Author );
			$('#EB'+k).find('h4').text(this.price);
			$('#EB'+k).find('b').text(this.description);
			$('#EB'+k).find('input[name="item_name"]').val(this.BookName);
			$('#EB'+k).find('input[name="amount"]').val(this.price);
			
			k++;
		});
		
		//Fiction_poetry
		var l =1;
		$.each(json.Fiction_Poetry, function (index, value) {
			$('#Fiction_Poetry'+l).find('img').attr('src', this.src);
			$('#Fiction_Poetry'+l).find('strong').text(this.BookName);
			$('#Fiction_Poetry'+l).find('i').text(this.Author );
			$('#Fiction_Poetry'+l).find('h4').text(this.price);
			$('#Fiction_PoetryData'+l).find('input[name="item_name"]').val(this.BookName);
			$('#Fiction_PoetryData'+l).find('input[name="amount"]').val(this.price);
			
			$('#FPB'+l).find('img').attr('src', this.src);
			$('#FPB'+l).find('strong').text(this.BookName);
			$('#FPB'+l).find('i').text(this.Author );
			$('#FPB'+l).find('h4').text(this.price);
			$('#FPB'+l).find('b').text(this.description);
			$('#FPB'+l).find('input[name="item_name"]').val(this.BookName);
			$('#FPB'+l).find('input[name="amount"]').val(this.price);
			
			l++;
		});
		
		//Travel
		
		var m =1;
		$.each(json.Travel, function (index, value) {
			$('#Travel'+m).find('img').attr('src', this.src);
			$('#Travel'+m).find('strong').text(this.BookName);
			$('#Travel'+m).find('i').text(this.Author );
			$('#Travel'+m).find('h4').text(this.price);
			$('#TravelData'+m).find('input[name="item_name"]').val(this.BookName);
			$('#TravelData'+m).find('input[name="amount"]').val(this.price);
			
			$('#TB'+m).find('img').attr('src', this.src);
			$('#TB'+m).find('strong').text(this.BookName);
			$('#TB'+m).find('i').text(this.Author );
			$('#TB'+m).find('h4').text(this.price);
			$('#TB'+m).find('b').text(this.description);
			$('#TB'+m).find('input[name="item_name"]').val(this.BookName);
			$('#TB'+m).find('input[name="amount"]').val(this.price);
			
			m++;
		});
		
		//Health and SelfHelp
		var n =1;
		$.each(json.Health_self_help, function (index, value) {
			$('#Health'+n).find('img').attr('src', this.src);
			$('#Health'+n).find('strong').text(this.BookName);
			$('#Health'+n).find('i').text(this.Author );
			$('#Health'+n).find('h4').text(this.price);
			$('#HealthData'+n).find('input[name="item_name"]').val(this.BookName);
			$('#HealthData'+n).find('input[name="amount"]').val(this.price);
			
			$('#HB'+n).find('img').attr('src', this.src);
			$('#HB'+n).find('strong').text(this.BookName);
			$('#HB'+n).find('i').text(this.Author );
			$('#HB'+n).find('h4').text(this.price);
			$('#HB'+n).find('b').text(this.description);
			$('#HB'+n).find('input[name="item_name"]').val(this.BookName);
			$('#HB'+n).find('input[name="amount"]').val(this.price);
			
			n++;
		});
		
		//Medicine
		var o =1;
		$.each(json.Medicine, function (index, value) {
			$('#Medicine'+o).find('img').attr('src', this.src);
			$('#Medicine'+o).find('strong').text(this.BookName);
			$('#Medicine'+o).find('i').text(this.Author );
			$('#Medicine'+o).find('h4').text(this.price);
			$('#MedicineData'+o).find('input[name="item_name"]').val(this.BookName);
			$('#MedicineData'+o).find('input[name="amount"]').val(this.price);
			
			$('#MB'+o).find('img').attr('src', this.src);
			$('#MB'+o).find('strong').text(this.BookName);
			$('#MB'+o).find('i').text(this.Author );
			$('#MB'+o).find('h4').text(this.price);
			$('#MB'+o).find('b').text(this.description);
			$('#MB'+o).find('input[name="item_name"]').val(this.BookName);
			$('#MB'+o).find('input[name="amount"]').val(this.price);
			
			o++;
		});
		
		//Philosophy
		var p =1;
		$.each(json.Philosophy, function (index, value) {
			$('#Philosophy'+p).find('img').attr('src', this.src);
			$('#Philosophy'+p).find('strong').text(this.BookName);
			$('#Philosophy'+p).find('i').text(this.Author );
			$('#Philosophy'+p).find('h4').text(this.price);
			$('#PhilosophyData'+p).find('input[name="item_name"]').val(this.BookName);
			$('#PhilosophyData'+p).find('input[name="amount"]').val(this.price);
			
			$('#PHB'+p).find('img').attr('src', this.src);
			$('#PHB'+p).find('strong').text(this.BookName);
			$('#PHB'+p).find('i').text(this.Author );
			$('#PHB'+p).find('h4').text(this.price);
			$('#PHB'+p).find('b').text(this.description);
			$('#PHB'+p).find('input[name="item_name"]').val(this.BookName);
			$('#PHB'+p).find('input[name="amount"]').val(this.price);
			
			
			p++;
		});
		
		//Gardening
		var q =1;
		$.each(json.Gardening, function (index, value) {
			$('#Gardening'+q).find('img').attr('src', this.src);
			$('#Gardening'+q).find('strong').text(this.BookName);
			$('#Gardening'+q).find('i').text(this.Author );
			$('#Gardening'+q).find('h4').text(this.price);
			$('#GardeningData'+q).find('input[name="item_name"]').val(this.BookName);
			$('#GardeningData'+q).find('input[name="amount"]').val(this.price);
			
			$('#GB'+q).find('img').attr('src', this.src);
			$('#GB'+q).find('strong').text(this.BookName);
			$('#GB'+q).find('i').text(this.Author );
			$('#GB'+q).find('h4').text(this.price);
			$('#GB'+q).find('b').text(this.description);
			$('#GB'+q).find('input[name="item_name"]').val(this.BookName);
			$('#GB'+q).find('input[name="amount"]').val(this.price);
			
			q++;
		});
		
		//Interior Design
		var r =1;
		$.each(json.Interior_Design, function (index, value) {
			$('#Design'+r).find('img').attr('src', this.src);
			$('#Design'+r).find('strong').text(this.BookName);
			$('#Design'+r).find('i').text(this.Author );
			$('#Design'+r).find('h4').text(this.price);
			$('#DesignData'+r).find('input[name="item_name"]').val(this.BookName);
			$('#DesignData'+r).find('input[name="amount"]').val(this.price);
			
			$('#INB'+r).find('img').attr('src', this.src);
			$('#INB'+r).find('strong').text(this.BookName);
			$('#INB'+r).find('i').text(this.Author );
			$('#INB'+r).find('h4').text(this.price);
			$('#INB'+r).find('b').text(this.description);
			$('#INB'+r).find('input[name="item_name"]').val(this.BookName);
			$('#INB'+r).find('input[name="amount"]').val(this.price);
			
			r++;
		});
		//Relationship
		var s =1;
		$.each(json.Relationships, function (index, value) {
			$('#Relation'+s).find('img').attr('src', this.src);
			$('#Relation'+s).find('strong').text(this.BookName);
			$('#Relation'+s).find('i').text(this.Author );
			$('#Relation'+s).find('h4').text(this.price);
			$('#RelationData'+s).find('input[name="item_name"]').val(this.BookName);
			$('#RelationData'+s).find('input[name="amount"]').val(this.price);
			
			$('#RB'+s).find('img').attr('src', this.src);
			$('#RB'+s).find('strong').text(this.BookName);
			$('#RB'+s).find('i').text(this.Author );
			$('#RB'+s).find('h4').text(this.price);
			$('#RB'+s).find('b').text(this.description);
			$('#RB'+s).find('input[name="item_name"]').val(this.BookName);
			$('#RB'+s).find('input[name="amount"]').val(this.price);
			
			s++;
		});
		var t =1;
		$.each(json.art, function (index, value) {
			$('#art'+t).find('img').attr('src', this.src);
			$('#art'+t).find('strong').text(this.BookName);
			$('#art'+t).find('i').text(this.Author );
			$('#art'+t).find('h4').text(this.price);
			$('#artData'+t).find('input[name="item_name"]').val(this.BookName);
			$('#artData'+t).find('input[name="amount"]').val(this.price);
			
			$('#AB'+t).find('img').attr('src', this.src);
			$('#AB'+t).find('strong').text(this.BookName);
			$('#AB'+t).find('i').text(this.Author );
			$('#AB'+t).find('h4').text(this.price);
			$('#AB'+t).find('b').text(this.description);
			$('#AB'+t).find('input[name="item_name"]').val(this.BookName);
			$('#AB'+t).find('input[name="amount"]').val(this.price);
			
			t++;
		});
		var u =1;
		$.each(json.Featured, function (index, value) {
			$('#Featured'+u).find('img').attr('src', this.src);
			$('#Featured'+u).find('strong').text(this.BookName);
			$('#Featured'+u).find('i').text(this.Author );
			$('#Featured'+u).find('h4').text(this.price);
			$('#FeaturedData'+u).find('input[name="item_name"]').val(this.BookName);
			$('#FeaturedData'+u).find('input[name="amount"]').val(this.price);
			
			$('#Featured_box'+u).find('img').attr('src', this.src);
			$('#Featured_box'+u).find('strong').text(this.BookName);
			$('#Featured_box'+u).find('i').text(this.Author );
			$('#Featured_box'+u).find('h4').text(this.price);
			$('#Featured_box'+u).find('b').text(this.description);
			$('#Featured_box'+u).find('input[name="item_name"]').val(this.BookName);
			$('#Featured_box'+u).find('input[name="amount"]').val(this.price);
			
			u++;
		});
		var v =1;
		$.each(json.Deals, function (index, value) {
			$('#D'+v).find('img').attr('src', this.src);
			$('#D'+v).find('strong').text(this.BookName);
			$('#D'+v).find('i').text(this.Author );
			$('#D'+v).find('h4').text(this.price);
			$('#DD'+v).find('input[name="item_name"]').val(this.BookName);
			$('#DD'+v).find('input[name="amount"]').val(this.price);
			
			$('#Deal_Box'+v).find('img').attr('src', this.src);
			$('#Deal_Box'+v).find('strong').text(this.BookName);
			$('#Deal_Box'+v).find('i').text(this.Author );
			$('#Deal_Box'+v).find('h4').text(this.price);
			$('#Deal_Box'+v).find('b').text(this.description);
			$('#Deal_Box'+v).find('input[name="item_name"]').val(this.BookName);
			$('#Deal_Box'+v).find('input[name="amount"]').val(this.price);
			
			v++;
		});
		
		
	 });
 
	 
 });