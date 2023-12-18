// Function to fetch data from a fake API
async function fetchData() {
  try {
    // Simulate fetching data from an API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Re-throw the error to be caught by the caller if needed
  }
}

// Function to process the fetched data
async function processData() {
  try {
    // Fetch data asynchronously
    const data = await fetchData();

    // Process the data
    console.log("Fetched data:", data);
    console.log("Data processed successfully!");
  } catch (error) {
    // Handle errors
    console.error("Error in processing data:", error.message);
  }
}

// Execute the program
processData();
