var Allitems = [];

$(".Addition").click(function() {
    var name = $(".name").val();
    Allitems.push(name);
    $(".items").append("<p>" + name + "</p>");
    $(".totalitems").text("Items in Cart:" + Allitems.length);

});

var Allprices = [];

$(".Addition").click(function() {
    var price = $(".price").val();
    Allprices.push(price);
    $(".prices").append("<p>" + price + "</p>");
    var totalPrice = 0;

    Allprices.forEach(function(money) {
        var priceasnumber = parseInt(money);
        totalPrice = totalPrice + priceasnumber;
    });
    $(".totalprice").text("Total:" + totalPrice);
});

$(".Checkout").click(function() {
     var totalPrice = 0;

    Allprices.forEach(function(money) {
        var priceasnumber = parseInt(money);
        totalPrice = totalPrice + priceasnumber;
    });
    alert("Your total is " + "$" + totalPrice + "." + " Thank you for purchasing " + Allitems[0] + " and all other items!");
});