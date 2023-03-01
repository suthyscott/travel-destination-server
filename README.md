## To use server:

1. Fork and clone the repo

2. Run `npm i` in the root folder (travel-destination-server)

3. Create a new db in bit.io or comparable db server and copy the connection string

4. Create a `.env` file and add a `SERVER_PORT` number of your choice (I prefer 4545), and a `CONNECTION_STRING` variable with the connection string from bit.io.

5. Run `nodemon index.js` in your terminal. You should see the select statements from sequelize as well as the `Take us to warp...` message. 

Your server is running!

# API v 2.0 is now released! 
### Changes:
- There is now an endpoint to get a single destination: `/api/destination/{destinationId}`
- The destination table now has a notes column!

To implement these changes, do the following:
1. Run `git pull`
2. In your `index.js` file, comment in line 19 with the `{force: true}` object and comment out line 18 with the standard `sync()` function. Restart your server. Reverse lines 18 & 19 back to the original. This will reset your db complete and you will lose all destinations currently in the db, but will now be able to add in destinations with notes. 