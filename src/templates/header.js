let header = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">CRM App</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" id="customer_list_link">Customer List</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#" id="add_new_customer_link">Add New Customer</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`

module.exports=header