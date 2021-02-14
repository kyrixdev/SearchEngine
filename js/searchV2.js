//response
/*
{
  "data": {
    "pages": {
      "search": {
        "results": [
          {
            "title": "Home",
            "description": "desc",
            "path": "home",
            "locale": "en"
          }
        ]
      }
    }
  }
}
*/
function getQuery() {
  var response = '{"data":{"pages":{"search":{"results":[{"title":"Home","description":"desc","path":"home","locale":"en"},{"title":"Yeet","description":"desc","path":"home","locale":"en"}]}}}}';
  var parsed = JSON.parse(response);
  return parsed;
}
function search() {
  var input = document.getElementById("searchInput").value;
  var query = getQuery(input);
  var results = query.data.pages.search.results;
  var parsed = "";
  for (var x in results) {
      console.log(results[x].title) // LOG
      var title = results[x].title;
      var description = results[x].description;
      var path = results[x].path;
      var locale = results[x].locale;
      var mytitle=  title[x];
      var mydes=  description[x];
      var myPath=  path[x];
      var mylocale=  locale[x];

      for (var i in mytitle) {
        parsed += "title" + ": " + title + "<br/>";          
      }
      for (var i in mydes) {
        parsed += "description" + ": " + description + "<br/>";          
      }
      for (var i in myPath) {
        parsed += "path" + ": " + path + "<br/>";          
      }
      for (var i in mylocale) {
        parsed += "locale" + ": " + locale + "<br/> <br/>";          
      }
    }              
    
    document.getElementById('output').innerHTML = parsed;

}

function ShowResult(){
  console.log(query.data.pages.search.results[0].title);
  var output = document.getElementById('output');
  output.innerHTML = resultObject;
}


