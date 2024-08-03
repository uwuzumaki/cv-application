/* eslint-disable react/prop-types */
function deleteCard(e) {
  console.log(e.target.parentNode.dataset.key);
}

export { deleteCard };
