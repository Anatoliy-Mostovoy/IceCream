(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-form]'),
    closeModalBtn: document.querySelector('[data-modal-close-form]'),
    modal: document.querySelector('[data-modal-form]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();