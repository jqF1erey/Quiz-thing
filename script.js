
$(".result").click(function(){
    var age= parseInt($(".age").val());
    var q1= $(".q1").val();
    if(age < 17 && q1 === "short-range"){
        $("p").text("You are Spongebob");
        $("img").hide();
        $(".sponge").show();
    }else if(age >= 17 && q1 === "short-range"){
        $("p").text("You are Mr.Krabs");
        $("img").hide();
        $(".krab").show();
    }else if(age < 17 && q1 === "long-range" && age < 17){
        $("p").text("You are patrick");
        $("img").hide();
        $(".star").show();
    }else if(age >= 17 && q1 === "long-range"){
        $("p").text("You are squidward");
        $("img").hide();
        $(".squid").show();
    }else{
        $("p").text("something went wrong...");
        $("img").hide();
    }
});