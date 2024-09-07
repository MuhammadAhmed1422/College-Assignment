
function showAlertMessage() {
  alert('Learn more about our compassionate home nursing services and how we can support your needs!');
}

document.querySelector('.learn-more').addEventListener('click', showAlertMessage);

Fancybox.bind("[data-fancybox]");

$('button').click(filterItems);

function filterItems() {
  let button = this;
  console.log('Button clicked:', button);
}

