/* eslint-disable no-use-before-define */
console.log('client loaded');

$(document).ready(onReady);

function onReady() {
  console.log('in onReady');
  $('.submitBtn').on('click', employeeInfo);
}

function employeeInfo(){
  console.log('in employeeInfo');
  let firstName = $('.firstNameIn').val();
  let lastName = $('.lastNameIn').val();
  let employeeId= Number($('.employeeIdIn').val());
  let jobTitle = $('.jobTitleIn').val();
  let annualSalary = Number($('.annualSalaryIn').val());
} // end employeeInfo function
