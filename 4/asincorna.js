//JSON
{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "email": "johndoe@email.com",
  "hobbies": ["Reading", "Hiking", "Cooking"]
}

//callback
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Executes the callback function
}
function sayGoodbye() {
  console.log('How are you!');
}
greet('John Doe', sayGoodbye); // Passing sayGoodbye function as a callback

//PROMISES
const myPromise = new Promise((resolve, reject) => {
  // Simulated asynchronous operation (e.g., making an API request)
  setTimeout(() => {
    const success = true; // Simulating a successful operation
    if (success) {
      resolve('Data successfully fetched');
    } else {
      reject('Error: Failed to fetch data');
    }
  }, 1000);
});
myPromise.then(
  (result) => {
    // Handle the successful result (e.g., update UI with the data)
    console.log(result);
  },
  (error) => {
    // Handle the error (e.g., log the error or show an error message)
    console.error(error);
  }
);


//Fetch API Syntax
fetch(url, options)
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
  });

//FETCH API GET
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(handleResponse)
  .then(data => {
    console.log('GET Request Result:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
//FETCH API POST
const newPost = {
  title: 'New Post',
  body: 'This is a new post.',
  userId: 1
};
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newPost)
})
  .then(handleResponse)
  .then(data => {
    console.log('POST Request Result:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
//FETCH API PUT
const updatedPost = {
  id: 1,
  title: 'Updated Post',
  body: 'This post has been updated.',
  userId: 1
};
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedPost)
})
  .then(handleResponse)
  .then(data => {
    console.log('PUT Request Result:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
//FETCH API PATCH
  const updatedData = {
  title: 'Updated Title'
};
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedData)
})
  .then(handleResponse)
  .then(data => {
    console.log('PATCH Request Result:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


 //FETCH API DELETE
 const updatedData = {
  title: 'Updated Title'
};
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedData)
})
  .then(handleResponse)
  .then(data => {
    console.log('PATCH Request Result:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
//AXIOS LIBRARY  >> npm install axios
axios({
  method: 'HTTP_METHOD',
  url: 'URL',
  headers: {
    // Headers (optional)
  },
  data: {
    // Request data (optional)
  }
})
  .then(response => {
    // Handle the successful response
  })
  .catch(error => {
    // Handle errors
  }); 
  
axios({
  method: 'HTTP_METHOD',
  url: 'URL',
  headers: {
    // Headers (optional)
  },
  data: {
    // Request data (optional)
  }
})
  .then(response => {
    // Handle the successful response
  })
  .catch(error => {
    // Handle errors
  });  

