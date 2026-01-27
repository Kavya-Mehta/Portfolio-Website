# Portfolio — Kavya Mehta

A creative, interactive portfolio built with **React** and **Vite**. Sections: Hero, About (with profile image), Experience, Skills, Projects, Contact.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Optional: custom profile image**
   - Default profile image is your **GitHub avatar** (always publicly accessible).
   - To use a custom photo: put `profile.jpg` in `public/` and set `profileImage: '/profile.jpg'` in `src/config.js`.

3. **Edit `src/config.js`**
   - `name`, `tagline`, `email`, `linkedin`, `github` — update as needed.
   - `profileImage`: defaults to GitHub avatar; override for a custom image.

4. **Run locally**

   ```bash
   npm run dev
   ```

5. **Build & deploy**

   ```bash
   npm run build
   ```

## Projects

- Projects are in `src/data/projects.js`.
- **Movie Analytics** & **F1 Predictor**: `links` empty; add repo URLs when ready.
- **AWS Cloud**: `unifiedRepos` — Cloud-Native-Webapp + aws-terraform-infra only (2 repos, 1 project).

## Customization

- **Experience** — `src/components/Experience.jsx` (company + role only).
- **Skills** — `src/components/Skills.jsx` (`SKILL_GROUPS`).
- **About** — `src/components/About.jsx`.
