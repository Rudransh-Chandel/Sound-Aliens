https://teachablemachine.withgoogle.com/models/NkAnAalZt/

function start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/NkAnAalZt/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(result);
}

function result(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
      console.log(results);
      rednumber = Math.floor(Math.random()*255) + 1;
      greennumber = Math.floor(Math.random()*255) + 1;
      bluenumber = Math.floor(Math.random()*255) + 1;

      document.getElementById("sound").innerHTML = "I Hear - "+ results[0].label;
      document.getElementById("accu").innerHTML = "Accuracy is"+ (results[0].confidence*100).toFixed(2)+"%";
      document.getElementById("sound").style.color = "rgb("+rednumber+","+greennumber+","+bluenumber+")";
      document.getElementById("accu").style.color = "rgb("+rednumber+","+greennumber+","+bluenumber+")";

      img11 = document.getElementById("img1");
      img22 = document.getElementById("img2");
      img33 = document.getElementById("img3");
      img44 = document.getElementById("img4");

      if (results[0].label == "Clap")
      {
        img11.src = "aliens-01.gif";
        img22.src = "aliens-02.png";
        img33.src = "aliens-03.png";
        img44.src = "aliens-04.png";
      }
      else if (results[0].label == "Hitting Table")
      {
        img22.src = "aliens-02.gif";
        img11.src = "aliens-01.png";
        img33.src = "aliens-03.png";
        img44.src = "aliens-04.png";
      }
      else if (results[0].label == "Music")
      {
        img33.src = "aliens-03.gif";
        img11.src = "aliens-01.png";
        img22.src = "aliens-02.png";
        img44.src = "aliens-04.png";
      }
      else
      {
        img44.src = "aliens-04.gif";
        img11.src = "aliens-01.png";
        img33.src = "aliens-03.png";
        img22.src = "aliens-02.png";
      }
    }
}