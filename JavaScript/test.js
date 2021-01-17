/*Document ready event */
$(function () {
    /*Selects form element and induces .submit method as the action to be induced when a form is submitted.*/
    $("form").submit(function () {
        /*Calls validateForm function*/
        validateForm();
        /*if loop that executes submission confirmation if validateForm function returns to be true after being called*/
        if (validateForm() == true) {
            /*When submit event is fired induce a confirmation message to validate if you want to submit the form.*/
            var validate = confirm("Are you sure you want to submit?");
            /*If user selects okay to submit the form the if loop will return as true and convey an alert message that the form has been submitted.*/
            if (validate == true) {
                alert("Form Submitted");
            } else {
                /*If user selects cancel to submit the form the if loop will return as false and not submit the form.*/
                return false;
            }
        } else {
            /*Return false */
            return false;
        }
    });
    /*Input validation to check if any of the forms inputs are empty*/
    function validateForm() {
        /*Assigns the values of each input based on the name that links each individual set of inputs into variables*/
        var formValidation1 = document.forms["myForm"]["size"].value;
        var formValidation2 = document.forms["myForm"]["color"].value;
        var formValidation3 = document.forms["myForm"]["style"].value;
        var formValidation4 = document.forms["myForm"]["amount"].value;
        /*If loop checks to see if any of the inputs are empty when submit button is clicked*/
        if (formValidation1 == "" || formValidation2 == "" || formValidation3 == "" || formValidation4 == "") {
            /*Induce an alert message if one of the inputs are empty*/
            alert("All fields must be filled before submission");
            /*Return false*/
            return false;
        } else {
            /*Return true */
            return true;
        }
    }
});

/*Javascript code minified/compressed to optimize webpage speed via reducing file size*/
/*$(function(){$("form").submit(function(){validateForm();if(validateForm()==true){var validate=confirm("Are you sure you want to submit?");if(validate==true){alert("Form Submitted");}else{return false;}}else{return false;}});function validateForm(){var formValidation1=document.forms["myForm"]["size"].value;var formValidation2=document.forms["myForm"]["color"].value;var formValidation3=document.forms["myForm"]["style"].value;var formValidation4=document.forms["myForm"]["amount"].value;if(formValidation1==""||formValidation2==""||formValidation3==""||formValidation4==""){alert("All fields must be filled before submission");return false;}else{return true;}}});*/