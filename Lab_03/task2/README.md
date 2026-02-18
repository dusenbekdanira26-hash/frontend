# Lab 03 — Task 2: UserProfile

How to run:

```
cd Lab_03/task2
npm install
npm run dev
```

Component structure:

- `src/components/UserProfile.jsx` — fetches user data with `useEffect`, manages `user`, `loading`, and `error` state. Uses `AbortController` for cleanup.
- `src/App.jsx` — parent that holds `userId` state and buttons to change it. Passes `userId` to `UserProfile`.

Why `userId` in dependency array:

When `userId` changes we must fetch new data. Placing `userId` in the dependency array makes the effect re-run whenever it changes. The cleanup from the previous effect aborts the previous fetch to avoid race conditions.
