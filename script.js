document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const video = document.getElementById('webcam');
    const keys = document.querySelectorAll('.key');
    const textToType = ['i', 'T', "'", 's','　', 'M', 'e','!'];
    const imageContainer = document.querySelector('#image-container');
    let index = 0;

    
            // 텍스트 바 깜빡임
            keys.forEach(key => {
                key.addEventListener('click', () => {
                    if (index < textToType.length) {
                        display.innerText += textToType[index];
                        index++;
        
                        if (index === textToType.length) {
                            imageContainer.style.display = 'block';
                            let interval = setInterval(() => {
                                imageContainer.style.display = (imageContainer.style.display === 'none') ? 'block' : 'none';
                            }, 300);
                            imageContainer.addEventListener('click', () => {
                                clearInterval(interval); })
                              }
                        }
                    
                })
            });


        // 웹캠 켜기
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    video.srcObject = stream;
                })
                .catch((error) => {
                    console.error('Error accessing the webcam:', error);
                });
        } else {
            console.error('Webcam not supported in this browser');
        }
    });


    
      // 팝업창
      function next()  {
      alert('Knock Knock?'); 
      $("#webcam, #bye, #reset").removeClass("hidden");
      }
      
      
      // 사진 넘어가기
      document.getElementById('image-container').addEventListener('click', function() {
          var image2 = document.getElementById('image1');
          image2.classList.toggle('hidden');
        });

      document.getElementById('image1').addEventListener('click', function() {
          var image2 = document.getElementById('image2');
          image2.classList.toggle('hidden');
        });
      
        document.getElementById('image2').addEventListener('click', function() {
          var image2 = document.getElementById('image3');
          image2.classList.toggle('hidden');
        });
      
        document.getElementById('image3').addEventListener('click', function() {
          var image2 = document.getElementById('image4');
          image2.classList.toggle('hidden');
        });
      
        document.getElementById('image4').addEventListener('click', function() {
          var image2 = document.getElementById('image5');
          image2.classList.toggle('hidden');
        });
      
        document.getElementById('image5').addEventListener('click', function() {
          var image2 = document.getElementById('image6');
          image2.classList.toggle('hidden');
        });
      
        document.getElementById('image6').addEventListener('click', function() {
          var image2 = document.getElementById('image7');
          image2.classList.toggle('hidden');
        });
      
        document.getElementById('image7').addEventListener('click', function() {
          var image2 = document.getElementById('image8');
          image2.classList.toggle('hidden');
        });
      
