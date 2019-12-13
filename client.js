/* eslint-disable no-use-before-define */
console.log('client loaded');

$(document).ready(onReady);

function onReady() {
  console.log('in onReady');
  $('.submitBtn').on('click', employeeInfo);
}

function employeeInfo() {
  console.log('in employeeInfo');
  const firstName = $('.firstNameIn').val();
  const lastName = $('.lastNameIn').val();
  const employeeId = Number($('.employeeIdIn').val());
  const jobTitle = $('.jobTitleIn').val();
  const annualSalary = Number($('.annualSalaryIn').val());
  console.log(firstName, lastName, employeeId, jobTitle, annualSalary);
  $('#employeeTable').append(
    `
      <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeId}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
      </tr>
      `
  );
  // some more things go above this
  // empty input fields
  $('.firstNameIn').val('');
  $('.lastNameIn').val('');
  $('.employeeIdIn').val('');
  $('.jobTitleIn').val('');
  $('.annualSalaryIn').val('');
} // end employeeInfo function

function dataValidation(){
    employeeInfo();
    if()
}