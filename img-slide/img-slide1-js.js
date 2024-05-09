let imgcount = 0;
let imgArray = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yucVGsMkdNetmY3wi2T_zTjoIeqHtLnG3fUZCtAL3aQ8Mcqr27WVL2vtzw&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-oYuyIO8AZ9_FuhefCSk2qTaesmq1FAJhmfBMqE7cerCzqeKqGBXK9rnuQ&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanKck5m-1tXe80L6dydRj7rzuDUZN3zsWrjf1qrQdTsBz7l_lSxtH9Kw6CA&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&usqp=CAU'];

        function imagesslide() {
            console.log(imgcount);
            document.getElementById('images').src = imgArray[imgcount];
            if (imgcount >= imgArray.length-1) {
           
                imgcount = 0;
            }else{
                imgcount++;
            }
            
          
            setTimeout(imagesslide, 3000);
        }
        imagesslide();