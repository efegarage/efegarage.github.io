    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const url = urlParams.get('url')

    if(!url){

      window.location.href = "https://www.google.com";

    }

    const direction = url.split("https://youtu.be/");
    const app = "vnd.youtube://m.youtube.com/watch?v=" + direction[1];
  
    if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
        window.location = app;
    } 
    else {
        window.location = url;
    }
