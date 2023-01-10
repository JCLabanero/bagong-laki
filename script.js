function displayImage() {
    var image = document.getElementById("image-file").files[0];
    var validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (validImageTypes.indexOf(image.type) < 0) {
      alert('Invalid file type. Only jpeg and png images are supported.');
      return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      var img = document.getElementById("displayed-image");
      img.src = e.target.result;
      img.classList.add("selected");
      img.style.display = "block";
    }
    reader.readAsDataURL(image);
  }
//   document.getElementById('file-button').addEventListener('click', function(){
//      document.getElementById('image-file').click();
//      displayImage();
//     }); 
  