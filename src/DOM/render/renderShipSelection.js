export default function renderShipSelection(ships, select) {
  select.innerHTML = '';
  
  console.log(ships);
  for (let i = 0; i < ships.length; i++) {
    const option = document.createElement('option');

    option.value = ships[i].name;
    option.dataset.length = ships[i].length;
    option.textContent = ships[i].name
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');

    select.appendChild(option);
  }
}
