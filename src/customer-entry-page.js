const customer_entry_form = require('./templates/customer-entry-form');
const db = require('./db');

let customer_entry_page = {
    show_customer_entry_form: function(){
        $(".container").empty();
        $(".container").append(customer_entry_form);
        this.register_events();
    },
    register_events: function(){
        let that = this;
        $("#submit_button").on("click",function(){
            console.log("submit button hitted now place new entryin db using below  logic");
            //here some validation
            if(!that.validate_customer_form())  // if(!false)
                return;
            let new_customer={
                "id":Math.floor(Math.random() * 10),
                "first_name":$("#fname").val(),
                "last_name":$("#lname").val(),
               
                "city":$("#city").val(),
                "gender":$("#gender").val(),
                "mobile":$("#lname").val(),
                "dob":$("#dob").val(),
                "address":$("#address").val(),
                "email":$("#email").val(),
                "is_premium":$('input[name="is_premium"]:checked').val(),
                "yearly_business":$("#business").val(),
            };
            db.add_customer(new_customer);
            alert("New customer is created");
            //it will clear content from form
            $('#customer_form').trigger('reset');
        });
    },
    validate_customer_form: function(){
        console.log("validate customer form");
        if($("#fname").val().length <= 0){
            alert("Please entr the fist name");
            return false;
        }
        //more rule can be placed
        return true;    
    }
};

module.exports=customer_entry_page;