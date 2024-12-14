# spendTracker

## About the project

It's 2024, yet some online banks do not provide an easy way to track, group and categorize transactions made over the course of a month. I desperately wanted to get access to this feature and while switching banks or connecting to a third party app may have sovled the problem, those 2 solutions posed their own set of problems and concerns in my particular case.

So I figured I'd start building something along these lines myself. The initial idea is to build a basic standalone application that I can upload my monthly bank reports to and have it do the job for me, with more possible features and improvements on the horizon for future iterations including:

- Implementing user signg in with Google SSO
- Making it cloud based & serverless
- Adding AI features for it to be able to handle reports from any bank that might be formatted differently and in unexpected ways (_We'll see if I ever get this far with this project xD_)
- Adding direct connection to bank APIs in order to skip the file upload step entirely (_This one feels like a long shot for now, however, because of security and compliance reasons_)

### Disclaimer

Because I'm currently running the project locally and uploading files that I manually downloaded from my bank, security is not a factor in the initial version of this project. It will obviously be taken more seriously if the project develops in a direction that requires it, but for the time being if feels a bit YAGNI.

---

## Tech Stack

I'm building this project in a basic NodeJS stack with Express in the backend and React + Vite on the frontend.

On the frontend, my idea is to use the frontend project as a vehicle to properly learn a new styling framework. I'm still making my mind up between Tailwind and ShadCN
When it comes to backend, I'm sticking to the simplest possible implementation because I want to rewrite in Go in a future version, hopefully picking up some skills in that language as I go along.

---
