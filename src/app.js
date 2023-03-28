const header_template = require('./templates/header');
const container = require('./templates/container');
const customerEntryPage = require('./customer-entry-page');
const customerListPage = require('./customer-list-page');

let app = {
    prepare_layout: function() {
        $('body').append(header_template);
        $('body').append(container);
        this.register_events();
        //default page
        customerListPage.prepare_customer_list();
    },
    register_events: function(){
        $("#customer_list_link").on("click",function(){
            customerListPage.prepare_customer_list();
        });
        //new form
        $("#add_new_customer_link").on("click",function(){
            customerEntryPage.show_customer_entry_form();
        });
    }
};




module.exports=app;