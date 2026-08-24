export default function showPlacementError(errorMessage, container) {
  if (errorMessage === null) {
    container.textContent = '';
  } else {
    container.textContent = errorMessage;
  }
}
