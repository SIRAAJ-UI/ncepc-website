$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    // $("form[name='registration']").validate({
    //   // Specify validation rules
    //   rules: {
    //     txtName: "required",
    //     rdgrbType: "required",
    //     ddDay:"required",
    //     ddMonth:"required",
    //     ddYear:"required",
    //     txtFatherName:"required",
    //     txtFatherOccupation:"required",
    //     txtContactMobile:"required",
    //     TxtAlternateMobile:"required",
    //     txtEmail:"required",
    //     txtCity:"required",
    //     courses:"required",
    //     txtClass:"required",
    //     txtSchool:"required",
    //     txtOpinion:"required",
    //   },
    //   // Specify validation error messages
    //   messages: {
    //     txtName: "Please enter your name",
    //     rdgrbType: "Please select gender",
    //     ddDay:"Please select gender",
    //     ddMonth:"Please select date of month",
    //     ddYear:"Please select date of year",
    //     txtFatherName:"Please enter father name",
    //     txtFatherOccupation:"Please enter father occupation",
    //     txtContactMobile:"Please enter contact number",
    //     TxtAlternateMobile:"Please enter alternative contact number",
    //     txtEmail:"Please enter email address",
    //     txtCity:"Please enter city",
    //     courses:"Please select course",
    //     txtClass:"Please enter the class",
    //     txtSchool:"Please enter the school",
    //     txtOpinion:"Please enter the option"
    //   },
    //   // Make sure the form is submitted to the destination defined
    //   // in the "action" attribute of the form when valid
    //   submitHandler: function(form) {
    //     form.submit();
    //   }
    // });
    console.log($("form[name='registration']"));
    $("form[name='registration']").validate({
        // Specify validation rules
        rules: {
          // The key name on the left side is the name attribute
          // of an input field. Validation rules are defined
          // on the right side
          txtName: "required",
          rdgrbType: "required",
          ddDay:"required",
          ddMonth:"required",
          ddYear:"required"
        },
        // Specify validation error messages
        messages: {
            txtName: "Please enter your name",
            rdgrbType: "Please enter your gender",
            ddDay:"Please select gender",
            ddMonth:"Please select date of month",
            ddYear:"Please select date of year",
            txtFatherName:"Please enter father name",
            txtFatherOccupation:"Please enter father occupation",
            txtContactMobile:"Please enter contact number",
            TxtAlternateMobile:"Please enter alternative contact number",
            txtEmail:"Please enter email address",
            txtCity:"Please enter city",
            courses:"Please select course",
            txtClass:"Please enter the class",
            txtSchool:"Please enter the school",
            txtOpinion:"Please enter the option",
        //   password: {
        //     required: "Please provide a password",
        //     minlength: "Your password must be at least 5 characters long"
        //   },
          email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          form.submit();
        }
      });
  });