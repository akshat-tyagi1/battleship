export default function renderShipSelection(ships, select) {
  for (let i = 0; i < ships.lenght; i++) {
    const option = document.createElement('option');
    option.value = ships[i].name;
    option.dataset.length = ships[i].length;
    option.textContent = ships[0][0].toUpperCase() + ships[0].slice(0);
    select.appendChild(option);
  }
}
