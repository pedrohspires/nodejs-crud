/**
 * Return an object with method to handle fields of http request
 */
module.exports = {
    body: async (req) => {
        let data = '';
        await req.on('data', chunk => {
            data += chunk;
        })
        return JSON.parse(data);
    },

    path: (req) => {
        return req.url;
    }
}