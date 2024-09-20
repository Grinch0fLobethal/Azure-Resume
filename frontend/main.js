window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();  // You need to actually call the function here
});

const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;  // Default value in case the API call fails

    fetch(functionApi)
        .then(response => {
            if (!response.ok) {  // Check if the response status is OK
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(response => {
            console.log("Website called function API successfully");
            count = response.count; 
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.log("Error fetching visit count:", error);
        });

    return count;  // Default count will be returned if the fetch fails
};
