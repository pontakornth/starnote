# Starnote

A simple note taking app for minimalist.

## Features

- [x] Basic Note Taking
- [x] Markdown Support
- [x] CRUD Operations
- [ ] Saving Notes
- [ ] Optional (Implement if can dedicate) saving notes online


## How to setup?

1. Run `npm install` or `yarn` to install dependencies.
2. Use `npm run dev` to start development server.
3. Use `npm run build` to start production build.


## Stack and why

**React**: I am interested in React and I want to practice using it before I get
internship or actual work. It is simple but not much.

**CSS Module**: I actually intended to use some CSS-in-JS solution. It turns out that
there are too few components to even benefit from it. At least, I don't need to worry about
cascading and naming.

**Zustand**: I want to try state management solution but I don't want to use Redux or MobX.
Actually, Starnote could be implemented using React Context and `useState`. But, I want to use
state management because it is simpler for me. Zustand is also minimal.


## Planed Stack

**Firebase**: Firebase is a great way to store data without paying. Its free tier is enough for a
toy project. I might need to reconsider how I store note due to the nature of Firebase.

**Supabase**: It is an opensource alternative to Firebase. It uses PostgreSQL but has similar interface
to Firebase. It also has JavaScript library support.