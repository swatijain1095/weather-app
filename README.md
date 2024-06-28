**🌦️ Weather App**

This is a dynamic weather app that fetches weather data using the Crossing Weather API and provides comprehensive information about the current day and the week ahead. The app features changing backgrounds and icons to reflect the current weather conditions. Created with Vite, React, TypeScript and Tailwind CSS.

**🌐 Live Demo**

https://weather-app-wizard.vercel.app/


**📸 Preview**

![Application image](https://github.com/swatijain1095/weather-app/assets/29285029/791908b5-ee74-407e-bd41-61bd550ee4e6)

**🚀 Features**

✅ Full Week Information: Get detailed weather information for the entire week.

✅ Current Day Weather: Up-to-date weather data for the current day.

✅ Temperature: Current, minimum, and maximum temperatures.

✅ Humidity: Current humidity levels.

✅ Wind Speed: Wind speed and direction.

✅ Heat Index: If available, the app will display the heat index.

✅ Dynamic Backgrounds: Changing backgrounds to match the weather conditions.

✅ Icons: Weather icons that reflect the current weather.



**🛠️ Technologies Used**

Vite + React

Tailwind CSS

Crossing Weather API




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
