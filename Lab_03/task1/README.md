# Lab 03 — Task 1: StepCounter

How to run:

1. cd to this folder:

```
cd Lab_03/task1
```

2. Install and run:

```
npm install
npm run dev
```

Component structure:

- `src/components/StepCounter.jsx` — counter component using props and multiple state values (`count`, `history`, `operationCount`).
- `src/components/CounterApp.jsx` — parent that renders two `StepCounter` instances with different props.

useEffect note: Not used in Task 1 (Task 2 uses useEffect for data fetching).
