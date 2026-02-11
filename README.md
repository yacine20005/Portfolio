# Portfolio

A fully responsive and dynamic personal portfolio website built with the latest web technologies. Designed to showcase projects, skills, and professional experience in an elegant and modern way.

***

### [Live Demo](https://yacine-hamadouche.me/)

***

## Features

- **Dynamic Content**: Portfolio data (projects, experience, skills) is managed centrally in `lib/data.ts` for easy updates.
- **Interactive UI**: Smooth scrolling, engaging animations, and a clean, component-based structure using Shadcn/UI.
- **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
- **Developer-Friendly**: Clean, typed, and well-structured code using TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (with App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Deployment**: Vercel

## Project Structure

The project follows a standard Next.js App Router structure:

```
├── app/                # Main application folder (pages, layout)
├── components/         # Reusable components
│   ├── sections/       # Page sections (Hero, About, etc.)
│   └── ui/             # Shadcn/UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions, type definitions, and data
│   ├── data.ts         # Centralized portfolio content
│   └── utils.ts        # Helper functions
├── public/             # Static assets (images, documents)
```

## Customization

To make this portfolio your own, you'll primarily need to modify the content file:

-   **`lib/data.ts`**: This file exports objects and arrays containing all the text for the site, including your name, bio, links, skills, projects, and work experience. Simply change the values in this file to update the entire site.
-   **`public/`**: Replace the placeholder images and documents (`CV.pdf`) with your own.
-   **`app/globals.css`**: You can tweak the base styling and color variables here to change the overall look and feel.

## Contact


Yacine - [ya.hamadouche@gmail.com](mailto:ya.hamadouche@gmail.com)

