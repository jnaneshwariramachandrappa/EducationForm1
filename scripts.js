$(document).ready(function () {
  $('#registrationForm').submit(function (event) {
      let isValid = true;

      // Validate all required fields
      $('#registrationForm input, #registrationForm select, #registrationForm textarea').each(function () {
          if ($(this).val() === '' && $(this).prop('required')) {
              $(this).css('border', '2px solid red');
              isValid = false;
          } else {
              $(this).css('border', '');
          }
      });

      // Validate phone number (only digits)
      let phone = $('#phone').val();
      if (phone && !/^\d+$/.test(phone)) {
          $('#phone').css('border', '2px solid red');
          alert('Phone number must only contain digits.');
          isValid = false;
      }

      if (!isValid) {
          event.preventDefault();
          alert('Please fill out all required fields correctly.');
      }
  });
});
