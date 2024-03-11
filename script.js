const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('preview-container');
let selectedImages = []; // Array to store selected images

fileInput.addEventListener('change', function(e) {
  const files = e.target.files;
  previewContainer.innerHTML = ""; // Clear previous previews

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imagePreview = document.createElement('div');
        imagePreview.classList.add('image-preview');
        imagePreview.innerHTML = `
          <img src="${e.target.result}" alt="Image Preview">
          <button class="delete-button">Delete</button>
        `;
        previewContainer.appendChild(imagePreview);

        const deleteButton = imagePreview.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
          previewContainer.removeChild(imagePreview);
          selectedImages.splice(selectedImages.indexOf(file), 1); // Remove from store
        });

        selectedImages.push(file); // Store selected image
      };
      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Please select images only.');
    }
  }
});

// **Note:** This script doesn't handle uploading the images to a server. 

// You can add functionality to submit a form or use an API to upload the images
// based on your specific needs and server-side implementation.

