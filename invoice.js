"use strict";

const calculateDiscount = (customer, subtotal) => {
    switch(customer) {
        case "reg":
            if (subtotal >= 100 && subtotal < 250) {
                return .1;
            } else if (subtotal >= 250 && subtotal < 500) {
                return  .25;
            } else if (subtotal >= 500) {
                return .3;
            } else {
                return 0;
            }
        case "loyal":
            return .3;
        case "dist":
            return (subtotal < 500) ? .4 : .5;
    }
};

$( document ).ready( () => {

    $("#calculate").click( () => {
        const customerType = $("#type").val();
        let subtotal = $("#subtotal").val() || 0;  // default value of zero
        subtotal = parseFloat(subtotal);

        let discountPercent = calculateDiscount(customerType, subtotal);
        let discountAmount = subtotal * discountPercent;
        let invoiceTotal = subtotal - discountAmount;

        $("#subtotal").val( subtotal.toFixed(2) );
        $("#percent").val( (discountPercent * 100).toFixed(2) );
        $("#discount").val( discountAmount.toFixed(2) );
        $("#total").val(  invoiceTotal.toFixed(2) );

        
        // subtotal =  subtotal.toFixed(2);
        // discountPercent = (discountPercent * 100).toFixed(2);
        // discountAmount = discountAmount.toFixed(2);
        // invoiceTotal = invoiceTotal.toFixed(2);

        // const usCurrency = new Intl.NumberFormat("en-us", {style:"currency", currency:"USD"});
        // $("#subtotal").val(usCurrency.format(subtotal))
        // $("#percent").val(discountPercent);
        // $("#discount").val(usCurrency.format(discountAmount));
        // $("#total").val(usCurrency.format(invoiceTotal));


        // set focus on type drop-down when done
        $("#type").focus();
    });

    // set focus on type drop-down on initial load
    $("#type").focus();
});

