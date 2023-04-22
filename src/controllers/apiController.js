const axios = require('axios')
const linkHeaderParser = require('link-header-parser');

// Ckeck API  

const home = (req, res) => {
    res.status(200).send({
        "messsage": "Api working"
    })
}

const GITHUB_API_BASE_URL = 'https://api.github.com';

const listUsers = async (req, res) => {

    const { since } = req.query

    const { page } = req.query

    let linkHeader = '';

    const filters = {
        since: since,
        per_page: 20,
        page: page
      };

    try {
        const apiResponse = await axios.get(`${GITHUB_API_BASE_URL}/users`, {
          params: filters
        });
        // Extract link header from response and include in response headers
        linkHeader = apiResponse.headers.link;
        res.set('Link', linkHeader);
        // Extract next link and include in response headers, if available
        const linkHeaderParsed = linkHeaderParser(linkHeader);
        const nextLink = linkHeaderParsed.refs && linkHeaderParsed.refs.find(ref => ref.rel === 'next'); // Check if refs array exists
        if (nextLink) {
          res.set('X-Next-Page', nextLink.uri);
        }
        // Return user data
        res.json(apiResponse.data);
      } catch (error) {
        // Handle errors
        console.error(error);

        if (error.response) {
            // The request was made and the server responded with a status code
            const status = error.response.status;
            const message = error.response.data.message;

            if (status === 401) {
                // Unauthorized
                res.status(401).send(`Unauthorized: ${message}`);
            } else if (status === 403) {
                // Forbidden
                res.status(403).send(`Forbidden: ${message}`);
            } else if (status === 404) {
                // Not Found
                res.status(404).send(`Not Found: ${message}`);
            } else if (status >= 400 && status < 500) {
                // Client error
                res.status(status).send(`Client Error: ${message}`);
            } else if (status >= 500) {
                // Server error
                res.status(status).send(`Server Error: ${message}`);
            }
        } else if (error.request) {
            // The request was made but no response was received
            res.status(500).send('No response from server');
        } else {
            // Something happened in setting up the request that triggered an error
            res.status(500).send('Internal Server Error');
        }
    }
}


// return the details of a GitHub user

const details = async (req, res) => {

    const userName = req.params.username

    try {

        const apiResponse = await axios.get(`${GITHUB_API_BASE_URL}/users/${userName}`)

        // Return user data
        res.json(apiResponse.data);

    } catch (error) {
        // Handle errors
        console.error(error);

        if (error.response) {
            // The request was made and the server responded with a status code
            const status = error.response.status;
            const message = error.response.data.message;

            if (status === 401) {
                // Unauthorized
                res.status(401).send(`Unauthorized: ${message}`);
            } else if (status === 403) {
                // Forbidden
                res.status(403).send(`Forbidden: ${message}`);
            } else if (status === 404) {
                // Not Found
                res.status(404).send(`Not Found: ${message}`);
            } else if (status >= 400 && status < 500) {
                // Client error
                res.status(status).send(`Client Error: ${message}`);
            } else if (status >= 500) {
                // Server error
                res.status(status).send(`Server Error: ${message}`);
            }
        } else if (error.request) {
            // The request was made but no response was received
            res.status(500).send('No response from server');
        } else {
            // Something happened in setting up the request that triggered an error
            res.status(500).send('Internal Server Error');
        }
    }
}



// return a list with all user repositories

const repos = async (req, res) => {

    const userName = req.params.username

    try {

        const apiResponse = await axios.get(`${GITHUB_API_BASE_URL}/users/${userName}/repos`)

        // Return user data
        res.json(apiResponse.data);

    }catch (error) {
        // Handle errors
        console.error(error);

        if (error.response) {
            // The request was made and the server responded with a status code
            const status = error.response.status;
            const message = error.response.data.message;

            if (status === 401) {
                // Unauthorized
                res.status(401).send(`Unauthorized: ${message}`);
            } else if (status === 403) {
                // Forbidden
                res.status(403).send(`Forbidden: ${message}`);
            } else if (status === 404) {
                // Not Found
                res.status(404).send(`Not Found: ${message}`);
            } else if (status >= 400 && status < 500) {
                // Client error
                res.status(status).send(`Client Error: ${message}`);
            } else if (status >= 500) {
                // Server error
                res.status(status).send(`Server Error: ${message}`);
            }
        } else if (error.request) {
            // The request was made but no response was received
            res.status(500).send('No response from server');
        } else {
            // Something happened in setting up the request that triggered an error
            res.status(500).send('Internal Server Error');
        }
    }
}


module.exports = {
    home,
    listUsers,
    details,
    repos
}