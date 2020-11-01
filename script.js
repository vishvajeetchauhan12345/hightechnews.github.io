var SlideIndex=0;
ShowSlides();
function ShowSlides()
  {
    var i;
   var  Slides=document.getElementsByClassName("mySlides");
    for(i=0;i<Slides.length;i++)
    {
    Slides[i].style.display="none";  
    }
    SlideIndex++;
    if(SlideIndex > Slides.length)
    {
      SlideIndex=1;
    }
    Slides[SlideIndex-1].style.display="block";
    Slides[SlideIndex-1].style.transition="all 1.5s linear";
    setTimeout(ShowSlides,2000);
  }

//news FASHION slider
var FashionSliderIndex=0;
ShowNewsFashion();
function ShowNewsFashion(){
  var i;
  var NewsSlides1=document.getElementsByClassName("myNews1");
  for(i=0;i<NewsSlides1.length;i++)
  {
    NewsSlides1[i].style.display="none";
  }
 FashionSliderIndex++;
  if(FashionSliderIndex > NewsSlides1.length)
  {
    FashionSliderIndex=1;
  }
  NewsSlides1[FashionSliderIndex-1].style.display="block";
  setTimeout(ShowNewsFashion,2000);
}//END FASHION slider

//news LIFESTYLE slider
var LifestyleSliderIndex=0;
ShowNewsLifestyle();
function ShowNewsLifestyle(){
  var i;
  var NewsSlides2=document.getElementsByClassName("myNews2");
  for(i=0;i<NewsSlides2.length;i++)
  {
    NewsSlides2[i].style.display="none";
  }
LifestyleSliderIndex++;
  if(LifestyleSliderIndex > NewsSlides2.length)
  {
    LifestyleSliderIndex=1;
  }
  NewsSlides2[LifestyleSliderIndex-1].style.display="block";
  setTimeout(ShowNewsLifestyle,2000);
}//END LIFESTYLE slider

//news TECHNOLOGY slider
var TechSliderIndex=0;
ShowNewstechnology();
function ShowNewstechnology(){
  var i;
  var NewsSlides3=document.getElementsByClassName("myNews3");
  for(i=0;i<NewsSlides3.length;i++)
  {
    NewsSlides3[i].style.display="none";
  }
 TechSliderIndex++;
  if(TechSliderIndex > NewsSlides3.length)
  {
    TechSliderIndex=1;
  }
  NewsSlides3[TechSliderIndex-1].style.display="block";
  setTimeout(ShowNewstechnology,2000);
}//END TECHNOLOGY slider