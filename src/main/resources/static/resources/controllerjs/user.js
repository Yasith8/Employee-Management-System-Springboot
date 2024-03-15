//define browser onload event
//way 1
/* window.addEventListener('load',()=>{

}) */
//way 2
window.onload = () => {

    //tooltip enable
    refreshUserTable();

}

//define table refresh function
const refreshUserTable = () => {

    //create data array
    /* users = [
        { id: 1, employee_id: { id: 4, fullName: "Haritha Pramodya" }, userName: 'Haritha92', status: true, email: "Haritha@gmail.com", role_id: { id: 3, name: "Cashier" } },
        { id: 2, employee_id: { id: 2, fullName: "Udara Avishka" }, userName: 'jola2001', status: false, email: "usar@gmail.com", role_id: { id: 3, name: "Cashier" } },
        { id: 3, employee_id: { id: 3, fullName: "Akila Perera" }, userName: 'akil34', status: true, email: "akila@gmail.com", role_id: { id: 3, name: "Cashier" } },
    ] */

    //get data from db
    //const users = new Object();
    users = [];

    $.ajax("/user/alldata", {
        contentType: 'json',
        type: "GET",
        async: false,
        success: function(data) {
            console.log("Success " + data);
            users = data;
        },

        error: function(resData) {
            console.log("Error" + resData);
            users = [];
        }
    });

    //create display column array
    //text--.number,string,data--->use Propery name
    //function-->object,array,boolean
    const displayColumnList = [
        { dataType: 'function', propertyName: getEmployeeName },
        { dataType: 'text', propertyName: 'username' },
        { dataType: 'text', propertyName: 'email' },
        { dataType: 'function', propertyName: getRoleName },
        { dataType: 'function', propertyName: getStatus },
    ]



    //data fill function
    fillDataIntoTable1(tableUser, users, displayColumnList, refillUserForm, deleteUser, printUser, true);

    //call jquery datatable function
    $('#tableUser').dataTable();

}

//define function to get employee name
const getEmployeeName = (ob) => {
        return ob.employee_id.fullname;
    }
    //define function to get roleName
const getRoleName = (ob) => {
        //return ob.role_id.name;
        return "Role";
    }
    //define function to get status
const getStatus = (ob) => {
    if (ob.status) {
        return `<p class='user-active'>Active</p>`
    } else {
        return `<p class='user-inactive'>InActive</p>`
    }

}

//define function for user form refill
const refillUserForm = (rowOb, rowIndex) => {

    }
    //define function for user delete
const deleteUser = (rowOb, rowIndex) => {

}

//define function for user print
const printUser = (rowOb, rowIndex) => {

}