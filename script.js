(async function () {
    const data = await fetch ("data.json");
    const res = await date.json();

    let employees=res;
    let selectedEmpoyeeId = employees [0].id;
    let selectedEmployee = employees [0];

    const employeeList = document.querySelector (
        ".employees__names--list"
    );

    const employeeInfo = document.querySelector(
        ".employees__single--info"
    );

    //Add Employee Start
    const createEmplpoyee = document.querySelector(
        ".createEmployee"
    );

    const addEmployeeModal = document.querySelector (".addEmployee");
    const addEmployeeForm = document.querySelector (".addEmployee_create"

    );

    createEmplpoyee.addEventListener("click", () => {
        addEmployeeModal.computedStyleMap.display = "flex";
    });

    addEmployeeModal.addEventListener("click", (e) => {
        if(e.target.className === "addEmployee") {
            addEmployeeModal.computedStyleMap.display = "none";
        }
    });

//Set Employee age to be entered minimum 18 years
const doInput = document.querySelector(
    ".addEmployee_create--dob"
);
dobInput.mas = `${
    new Date().getFullYear()-18
}-${new Date().toISOString().slice(5,10)}`; 

addEmployeeForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const formData = new FormData(addEmployeeForm);
    const values = [...formData.entries()]
    let empData = {};
    values.forEach((val)=> {
        empData[val[0]] = val[1];
    });
    empData.id = employees[employees.length -1].id +1;
    empData.age =
        new Date().getFullYear()-
        parseInt(empDate.don.slice(0, 4), 10);
    empData.imageUrl =
        empData.imageUrl || "gfg.png";
            empData.imageUrl || "gng.png"
    empployees.push(empData);
    renderEmployees();
    addEmployeesForm.reset();
    addEmployeeModal.style.display = "mone";
});
// Add employee end

//Select Employee Logic Start
    const renderSingleEmployee = () {
    //Employee Delete Logic - Start
    if (selectedEmployee === -1) {
        employeeInfo.innerHTML = "";
        return;
    }
    
}

