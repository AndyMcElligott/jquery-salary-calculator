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
  const newEmployee = {
    firstName: $('.firstNameIn').val(),
    lastName: $('.lastNameIn').val(),
    employeeId: Number($('.employeeIdIn').val()),
    jobTitle: $('.jobTitleIn').val(),
    annualSalary: $('.annualSalaryIn').val(),
  };
  console.log(newEmployee);
  sumSalary.push(newEmployee.annualSalary);
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
        <td><button class="deleteEmployeeBtn btn btn-danger">Remove</button></td>
      </tr>
      `
  );
  // const employeeMonthlySalary = sumSalary.push(newEmployee.annualSalary);
  // $('.spotForTotal').append(employeeMonthlySalary);
  // totalMonthSalary();

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

// function totalMonthSalary() {
  // console.log('in totalMonthSalary')
//   let total = 0;
//   for (let i = 0; i < sumSalary.length; i++) {
//     total += sumSalary[i].annualSalary;
//   }
//   const thing = $('#spotForTotal');
//   thing.empty();
//   const finalTotal = Math.round(total / 12);
//   if (finalTotal <= 20000) {
//     $('#spotForTotal').append(
//       `
//       <h3> Monthly Total: $${total} </h3>
//       `
//     );
//     // total.append(<div class = finallyTotalDiv);
//   }
//   // if (finalTotal >= 2000) {
//   //   total.append(<div class = finallyTotalDiv);
//   //   return false, alert('You are over budget!');
//   // }
// }
