// Handle Adoption Form submission
document.getElementById('adoptionForm').addEventListener('submit', function(e) {
  e.preventDefault(); // stop page reload

  const formData = {
    name: document.getElementById('full-name').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    puppy: document.getElementById('puppy-select').value,
    message: document.getElementById('message').value.trim()
  };

  if (!formData.name || !formData.email || !formData.phone) {
    alert('Please fill in all required fields.');
    return;
  }

  alert(
    `Thank you, ${formData.name}! Your enquiry for ${formData.puppy} has been received.\nWe'll contact you at ${formData.email} within 48 hours.`
  );

  e.target.reset();
});

