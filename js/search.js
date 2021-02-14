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

/*
function getQuery(input) {
    var response = '{"data":{"pages":{"search":{"results":[{"title":"Home","description":"desc","path":"home","locale":"en"},{"title":"Yeet","description":"desc","path":"home","locale":"en"}]}}}}';
    var parsed = JSON.parse(response);
    return parsed;
}

function createElement() {
    // Creates the element (React)
}

var createdElements = [];

class searchResults {
    constructor(title, description, path, locale) {
        this.title = title;
        this.description = description;
        this.path = path;
        this.locale = locale;
    }

    createElement() {
        var p = document.createElement("p");
        p.innerHTML = this.title;
        document.getElementById("results").appendChild(p);
        this.p = p;
        createdElements.push(p);
    }

    removeElement() {
        console.log(title);
    }
}

function search() {
    var input = document.getElementById("searchInput").value;
    var query = getQuery(input);
    var results = query.data.pages.search.results;
    
    for (x in results) {
        console.log(results[x].title) // LOG
        var title = results[x].title;
        var description = results[x].description;
        var path = results[x].path;
        var locale = results[x].locale;

        var resultObject = new searchResult(title, description, path, locale);
        resultObject.createElement();
    }
}
*/

/*
class SearchResult extends React.Component {

  render() {
    const element = (
      <div>
        <h1>{String(this.title)}</h1>
        <p>more test!</p>
      </div>
    );

    return element;
  }

  constructor(title, description, path, locale) {
    super();
    this.title = title;
    this.description = description;
    this.path = path;
    this.locale = locale;
  }
}

class SearchResults {

  render() {

  }
  
  display() {
    var response = this.getResults();
    var responseArray = response.data.pages.search.results;

    var i;
    for(i in responseArray) {
      const title = responseArray[i].title;
      const description = responseArray[i].description;
      const path = responseArray[i].path;
      const locale = responseArray[i].locale;
      var serachResult = new SearchResult(title, description, path, locale);
      ReactDOM.render(<SearchResult />, document.getElementById("results"));
    }
  }

  getResults() {
    // RECODE TO SEND REQUEST TO SERVER!!!
    var response = '{"data":{"pages":{"search":{"results":[{"title":"Home","description":"desc","path":"home","locale":"en"},{"title":"Yeet","description":"desc","path":"home","locale":"en"}]}}}}';
    var parsed = JSON.parse(response);
    return parsed;
  }
}

function search() {
  var searchResults = new SearchResults;
  searchResults.display();
}

*/

class searchResult {
  constructor(title, description, path, locale) {
    this.title = title;
    this.description = description;
    this.path = path;
    this.locale = locale;
  }
}

class searchResults extends React.Component {

  render() {
    
  }

  getResults() { // Returns an object of results
    // RECODE TO SEND REQUEST TO SERVER!!!
    var response = '{"data":{"pages":{"search":{"results":[{"title":"Home","description":"desc","path":"home","locale":"en"},{"title":"Yeet","description":"desc","path":"home","locale":"en"}]}}}}';
    var parsed = JSON.parse(response);
    return parsed;
  }
}

function search() {
  ReactDOM.render(<SearchResults />, document.getElementById("results"));
  console.log(getResults())
}