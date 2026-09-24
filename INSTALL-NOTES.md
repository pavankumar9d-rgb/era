# Install notes

This workspace was created as a standalone React + Vite project because no existing project directory was attached in the conversation.

The requested React Bits `DitherVeil-JS-CSS` component is wired into `src/App.jsx` and the component source is in `src/components/DitherVeil.jsx` with `src/components/DitherVeil.css`.

The runtime used to prepare this artifact could not reach the npm registry, so `npx shadcn@latest add @react-bits/DitherVeil-JS-CSS` was not executable here. The dependency it needs (`ogl`) is declared in `package.json` so the project installs cleanly on a normal networked machine.
