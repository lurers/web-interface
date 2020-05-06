// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
var query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
   
      english
     
    }
    coverImage {
      medium
    }
  }
}
`;

// Define our query variables and values that will be used in the query request
var variables = {
    id: Math.floor(Math.random() * 1000) + 2
};

// Define the config we'll need for our Api request
var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

// Make the HTTP Api request



function get_random_title() {
  variables.id = Math.floor((Math.random() * 1000) + 2);
  options.body = JSON.stringify({query:query, variables:variables});


  fetch(url, options).then(handleResponse)
             .then(handleData)
             .catch(handleError);
}


function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data.data.Media.title.english);
    console.log(variables.id);
    document.getElementById("anime").innerHTML = data.data.Media.title.english;
    document.getElementById("anime_image").setAttribute("src", data.data.Media.coverImage.medium);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}

