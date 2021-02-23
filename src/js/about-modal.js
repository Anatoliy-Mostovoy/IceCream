(() => {
  const refs = {
    threeopenModalBtn: document.querySelector('[data-about-open]'),
    threecloseModalBtn: document.querySelector('[data-about-close]'),
    threemodal: document.querySelector('[data-about]'),
  };

  refs.threeopenModalBtn.addEventListener('click', toggleModal);
  refs.threecloseModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.threemodal.classList.toggle('is-hidden');
  };
})();