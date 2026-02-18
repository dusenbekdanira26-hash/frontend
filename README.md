# Lab_03 — Tasks Overview

This workspace contains two small React demo apps for Lab 03:

- Task 1: `StepCounter` and `CounterApp` — located in `Lab_03/task1`.
- Task 2: `UserProfile` and `UserApp` — located in `Lab_03/task2`.

Quick run (Windows PowerShell):

```powershell
cd "c:/Users/dyuse/OneDrive/Рабочий стол/lab_3/Lab_03/task1"
npm install
npm run dev

# in a second terminal to run task2
cd "c:/Users/dyuse/OneDrive/Рабочий стол/lab_3/Lab_03/task2"
npm install
npm run dev
```

Suggested git workflow (create at least 3 commits using conventional commits):

```powershell
git init
git add .
git commit -m "feat(task1): add StepCounter and CounterApp scaffold"

# make a focused change (example: styles or README) then commit
git add Lab_03/task1/README.md
git commit -m "docs(task1): add README and run instructions"

git add Lab_03/task2/src/components/UserProfile.jsx
git commit -m "feat(task2): add UserProfile with useEffect and AbortController"
```

Conventional commit examples to satisfy requirement:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for README or documentation

OquLabs protocol notes (student must verify):
- Work in full-screen mode while recording the session.
- Code should be hand-typed by the student (not copy-pasted) to meet OquLabs rules.
- Spend at least 30 minutes actively working; keep a short log if needed.

Primary files:
- [Lab_03/task1/src/components/StepCounter.jsx](Lab_03/task1/src/components/StepCounter.jsx)
- [Lab_03/task1/src/components/CounterApp.jsx](Lab_03/task1/src/components/CounterApp.jsx)
- [Lab_03/task2/src/components/UserProfile.jsx](Lab_03/task2/src/components/UserProfile.jsx)
- [Lab_03/task2/src/App.jsx](Lab_03/task2/src/App.jsx)

If you want, I can generate a single-commit patch or run git commands here — tell me whether you want me to (I cannot sign your commits for you).
