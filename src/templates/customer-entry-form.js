let customer_entry_form = `
<div class="row">
                <div class="col-6">
                    <h1>Customer form</h1>
                    <form id="customer_form">
                        <div class="row mb-3">
                            <label class="form-label col-sm-4">First Name</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control " placeholder="Enter your full name" id="fname"/>
                            </div>
                        </div>
    
                        <div class="row mb-3 ">
                            <label class="form-label col-sm-4">Last Name</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="lname"/>
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label class="form-label col-sm-4">Gender</label>
                            <div class="col-sm-8">
                                <select class="form-select" id="gender">
                                    <option>Female</option>
                                    <option>Male</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label class="form-label col-sm-4">Mobile</label>
                            <div class="col-sm-8">
                                <input type="number" class="form-control" id="mobile"/>
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label class="form-label col-sm-4">Date Of Birth</label>
                            <div class="col-sm-8">
                                <input type="date" class="form-control" id="dob"/>
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label class="form-label col-sm-4">Email</label>
                            <div class="col-sm-8">
                                <input type="email" class="form-control" id="email"/>
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label class="form-label col-sm-4">City</label>
                            <div class="col-sm-8">
                                <select class="form-select" id="city">
                                    <option value="">Select City</option>
                                    <option value="NY">New Yourk</option>
                                    <option value="CH">Chicago</option>
                                    <option value="WS">Washington</option>
                                    <option value="LA">Los Angeles</option>
                                    <option value="SD">San Diego</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label class="form-label col-sm-4">Address</label>
                            <div class="col-sm-8">
                                <textarea  class="form-control" id="address"></textarea>
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label class="form-label col-sm-4">Premium Customer</label>
                            <div class="col-sm-8">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="is_premium"
                                        value="Yes">
                                    <label class="form-check-label">Yes</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="is_premium"
                                        value="No">
                                    <label class="form-check-label">No</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label class="form-label col-sm-4">Yearly Business(in $)</label>
                            <div class="col-sm-8">
                                <input type="number" class="form-control" id="business"/>
                            </div>
                        </div>
                        <div class="row mb-3 ">
                            <label class="form-label col-sm-4"></label>
                            <div class="col-sm-8">
                                <button type="button" class="btn btn-primary " id="submit_button">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
               
            </div>
`

module.exports=customer_entry_form;