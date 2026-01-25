# A blog with comments (post, edit and delete options)

with Vercel, share domain, not app link ( you can edit your domain name!!! (keep .vercel.app) )

## Stretch User Stories

🐿️ As a user, I want to categorise my posts during creation so that I can organise my posts and browse other posts by category.
🐿️ As a user, I want to edit my comments on a dedicated route so that I can revise my feedback.
Stretch Requirements
🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.
🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.
🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.

# Reflections
