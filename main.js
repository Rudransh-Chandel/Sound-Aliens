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
    }
}