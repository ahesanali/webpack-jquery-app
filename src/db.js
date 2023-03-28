const customer_data = [
    {
        "id":1,
        "first_name":"Johon",
        "last_name":"Otto",
        "city":"New Yourl",
        "gender":"Male",
        "is_premium":"Yes",
        "yearly_business":"$1000",
    },
    {
        "id":2,
        "first_name":"Mia",
        "last_name":"Xyz",
        "city":"Chicago",
        "gender":"Female",
        "is_premium":"No",
        "yearly_business":"$100",
    },
    {
        "id":3,
        "first_name":"Max",
        "last_name":"ABC",
        "city":"Washigton",
        "gender":"Male",
        "is_premium":"Yes",
        "yearly_business":"$5000",
    },
];

let db = {
    get_customer_list: function(){
        return customer_data;
    },
    add_customer: function(new_customer_object){
        customer_data.push(new_customer_object);
    }
};

module.exports=db;

