document.addEventListener('DOMContentLoaded', () => {
  const inputImage = document.getElementById('input-image');
  const inputImagePreview = document.getElementById('input-image-preview');
  const inputImagePlaceholder = document.getElementById('input-image-placeholder');

  inputImage.addEventListener('change', (event) => {
    console.log('OnChange');
    console.log(event);
    const fr = new FileReader();
    fr.addEventListener('load', (e) => {
      inputImagePreview.src = e.target.result;
      inputImagePreview.classList.remove('hidden');
      inputImagePlaceholder.classList.add('hidden');
    });

    fr.readAsDataURL(event.target.files[0]);
  });
});
