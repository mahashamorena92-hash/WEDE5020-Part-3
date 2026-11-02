document.getElementById('enquiryForm').addEventListener('submit', function(e){
  e.preventDefault();
  const form = e.target;
  if(!form.checkValidity()){
    document.getElementById('formResponse').innerHTML = "<p style='color:red'>Please fix the highlighted fields. Phone must be 10 digits.</p>";
    return;
  }
 
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if(response.ok){
      document.getElementById('formResponse').innerHTML = "<p style='color:green'>Thank you! Your enquiry about " + form.enquiryType.value + " has been received. Estimated cost/response within 24 hours. Availability: In stock.</p>";
      form.reset();
    } else {
      document.getElementById('formResponse').innerHTML = "<p style='color:red'>Error submitting. Try again.</p>";
    }
  });
});