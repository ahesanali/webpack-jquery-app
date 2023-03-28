const customer_list = require('./templates/customer-list');
const db = require('./db');



let customer_list_page = {
    prepare_customer_list: function(){
        $(".container").empty();
        $(".container").append(customer_list);
        let customer_data = db.get_customer_list();
        customer_data.forEach(function(customer_entry){
            let customer_entry_html = "<tr>"+
            "<td scope='row'>"+customer_entry.id+"</th>"+
            "<td>"+customer_entry.first_name+"</td>"+
            "<td>"+customer_entry.last_name+"</td>"+
            "<td>"+customer_entry.gender+"</td>"+
            "<td>"+customer_entry.city+"</td>"+
            "<td>"+customer_entry.is_premium+"</td>"+
            "<td>"+customer_entry.yearly_business+"</td>"+
          "</tr>";
          $("tbody").append(customer_entry_html);
        });
        
    }
};

module.exports=customer_list_page;
