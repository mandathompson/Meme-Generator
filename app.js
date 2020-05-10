let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx;

// Initialize variables
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    topTextSizeInput = document.getElementById('top-text-size-input');
    bottomTextSizeInput = document.getElementById('bottom-text-size-input');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');
    deleteMemeBtn = document.getElementById('deleteMemes');
    // Read image as DataURL using the FileReader API
    let reader = new FileReader();
    let memes = document.getElementById("canvas");  
   

    
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    generateBtn.addEventListener('click', function () {
        reader.readAsDataURL(imageInput.files[0]);
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value); 
        };
    });


    function generateMeme (img, topText, bottomText, topTextSize, bottomTextSize) {
        let fontSize;
    
    
        canvas.width = img.width;
        canvas.height = img.height;
    
  
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
    
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.textAlign = 'center';
    
        fontSize = canvas.width * topTextSize;
        ctx.font = fontSize + 'px Impact';
        ctx.lineWidth = fontSize / 20;
   
        ctx.textBaseline = 'top';
        topText.split('\n').forEach(function (t, i) {
            ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
            ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
        });
    
        fontSize = canvas.width * bottomTextSize;
        ctx.font = fontSize + 'px Impact';
        ctx.lineWidth = fontSize / 20;
    
        ctx.textBaseline = 'bottom';
        bottomText.split('\n').reverse().forEach(function (t, i) { // .reverse() because it's drawing the bottom text from the bottom up
            ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
            ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        });
    }


    deleteMemeBtn.addEventListener('click', function(){  
        memes.remove();   
    });       
