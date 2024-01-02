# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Simple Shop site with Redux Toolkit

### Main Focus of this is just to update few things on Tailwind & Redux Toolkit

##### Not really focused on UI much & get the job done

###### Know issues:

1. Id is from API itself so if same item added multiple times (Remove will behave abnormally)
   a. React shows Key warning
   b. If one item is removed all the items with same key will also be removed
