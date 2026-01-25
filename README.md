# A blog with comments (post, edit and delete options)

with Vercel, share domain, not app link ( you can edit your domain name!!! (keep .vercel.app) )

## Stretch User Stories

🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.

# Reflections

I managed to get the set up the basic functionality for this assignment completed fairly quickly and had all basic requirements in place within 1 day. I like working in Next.js so far and I think this helped a lot, as it just makes a bit more sense to me on some ways that purely client side React.

I did have a struggle with implementing my delete button initially, as I tried to apply "use client" to the whole component instead of just the relevant function nested within the component, due to misunderstanding how this could work.

I attempted to implement post sorting by date order as well as by alphabetically by title, but could not get this to work, so any feedback on this would be appreciated.

In terms of stretch goals, I implemented an edit option for comments, although given more time to put it togther I would have liked to make this a simple button that displays a modal, wiht the editing and submission only in the modal. I would also have like to load the existing comment into the text field, so this feels more like an edit that an overwrite, even though the results can be the same.

I would have liked to take a little more time with styling and implemented a few more features, but as I had a pretty heavy technical test due for submission on Sunday ahead of an interview I prioritised that for most of the weekend.
