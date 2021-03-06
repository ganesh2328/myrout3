import React from "react";




function Users() {
 
  return (
    <>
   
      <h1 class="h3 mb-2 text-gray-800">Users</h1>
      <p class="mb-4">
        DataTables is a third party plugin that is used to generate the demo official DataTables documentation.
      
      </p>
      

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                  <td>1</td>
                  <td>abcdefg</td>
                  <td>cto</td>
                  <td>wxyz</td>
                  <td>30</td>
                  <td>dd-mm-yyyy</td>
                  <td>123456</td>
                  <td>
                      <button  className="btn btn-sm btn-primary">Edit</button>
                      <button  className="btn btn-sm btn-danger">Delete</button>
                  </td>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
