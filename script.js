

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      form.reset(); 
    } else {
      alert('Please fill in all fields before submitting.');
    }
  });
});
