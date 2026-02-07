# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# annaibah

### Muhamad Hanif Muhsin

```
1. Manaqib An Naibah = Rp 240.000
2. USAMA Hahan = Rp 38.000
3. USAMA Rikma = Rp 19.000
4. Marbot = Rp 50.000
```

### Ahmad Faishal

```
1. Manaqib An Naibah = Rp 80.000
```

### Asep Salaman Parizie

```
1. Manaqib At Taqwa = Rp 100.000
```

### Hj. Noneng Sumiaty

```
1. Manaqib An Naibah = Rp 100.000
2. USAMA = Rp 65.000
3. Manaqib Al Maslul = Rp 50.000
4. Manaqib Pak Bamabang = Rp 50.000
5. Marbot = Rp 50.000
```

### Hj. Imas Hasanah

```
1. Manaqib Al Maslul = Rp 100.000
2. USAMA = Rp 70.000
3. Ceu Ati = Rp 30.000
4. Marbot = Rp 50.000
5. Manaqib At Taqwa = Rp 100.000
```

### Hj. Iis Mintarsih

```
1. Manaqib An-Naibah = Rp 300.000
2. Infaq Guru = Rp 100.000
3. Manaqib At Taqwa = Rp 100.000
```
