/* eslint-disable no-use-before-define */
// const sumTotalMonthly = Number[];

console.log('client loaded');

$(document).ready(onReady);

function onReady() {
  console.log('in onReady');
  $('.submitBtn').on('click', employeeInfo);
  $('#employeeTable').on('click', '.deleteEmployeeBtn', fireEmployee);
}

function employeeInfo() {
  // gather inputs from user
  console.log('in employeeInfo');
  const firstName = $('.firstNameIn').val();
  const lastName = $('.lastNameIn').val();
  const employeeId = Number($('.employeeIdIn').val());
  const jobTitle = $('.jobTitleIn').val();
  const annualSalary = Number($('.annualSalaryIn').val());
  console.log(firstName, lastName, employeeId, jobTitle, annualSalary);
  // data validation to avoid empty or false sumbissions
  if (
    firstName === 0 ||
    lastName === 0 ||
    employeeId <= 3 ||
    jobTitle === 0 ||
    annualSalary < 25000
  ) {
    // eslint-disable-next-line no-sequences
    return false, alert('please enter valid employee info');
  }
  // append inputs to the DOM
  $('#employeeTable').append(
    `
      <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeId}</td>
        <td>${jobTitle}</td>
        <td>$${annualSalary}</td>
        <td><button class="deleteEmployeeBtn">Remove</button></td>
      </tr>
      `
  );
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

