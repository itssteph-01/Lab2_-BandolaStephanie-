document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  
  fetch("https://formspree.io/f/mojkqjed", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("formMessage").style.display = "block";
      document.getElementById("registerForm").reset();
      alert("Thank you! Your registration has been received. Check your email.");
    } else {
      alert("Error submitting form. Please try again.");
    }
  })
  .catch(error => {
    alert("Error: " + error);
  });
});