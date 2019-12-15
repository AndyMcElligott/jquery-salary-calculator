/* eslint-disable no-use-before-define */
console.log('client loaded');

$(document).ready(onReady);

const sumSalary = [];

function onReady() {
  console.log('in onReady');
  $('.submitBtn').on('click', employeeInfo);
  $('#employeeTable').on('click', '.deleteEmployeeBtn', fireEmployee);
}

function employeeInfo() {
  // gather inputs from user
  console.log('in employeeInfo');
  let newEmployee = {
    firstName: $('.firstNameIn').val(),
    lastName: $('.lastNameIn').val(),
    employeeId: Number($('.employeeIdIn').val()),
    jobTitle: $('.jobTitleIn').val(),
    annualSalary: Number($('.annualSalaryIn').val()),
  };
  console.log(newEmployee);
  // data validation to avoid empty or false sumbissions
  if (
    newEmployee.firstName === 0 ||
    newEmployee.lastName === 0 ||
    newEmployee.employeeId <= 3 ||
    newEmployee.jobTitle === 0 ||
    newEmployee.annualSalary < 25000
  ) {
    // eslint-disable-next-line no-sequences
    return false, alert('please enter valid employee info');
  }
  // append inputs to the DOM
  $('#employeeTable').append(
    `
      <tr>
        <td>${newEmployee.firstName}</td>
        <td>${newEmployee.lastName}</td>
        <td>${newEmployee.employeeId}</td>
        <td>${newEmployee.jobTitle}</td>
        <td>$${newEmployee.annualSalary}</td>
        <td><button class="deleteEmployeeBtn">Remove</button></td>
      </tr>
      `
  );
  let employeeMonthlySalary = sumSalary.push(newEmployee.annualSalary);
  $('.spotForTotal').append((employeeMonthlySalary) / 12);

  // empty input fields
  $('.firstNameIn').val('');
  $('.lastNameIn').val('');
  $('.employeeIdIn').val('');
  $('.jobTitleIn').val('');
  $('.annualSalaryIn').val('');
} // end employeeInfo function

// remove employee from DOM on remove button click
function fireEmployee() {
  console.log('in fireEmployee function');
  $(this)
    .closest(`tr`)
    .remove();
} // end fireEmployee
