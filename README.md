<div align="center">
  <img src="hhttps://ibb.co/V9w1RjF" alt="Скриншот 1" border="0">
  <img src="https://ibb.co/WcJ7Sxt" alt="Скриншот 2" border="0">
  <img src="https://ibb.co/FmDT7B4" alt="Скриншот 3" border="0">
</div>

## Тестовое задание

Реализовать форму для добавления данных о человеке с использованием
следующих технологий:
• React для работы с компонентами
• Любой из CSS-препроцессоров (LESS, SASS, Stylus) или CSS-in-JS решений (JSS, Styled Components, Emotion и т.д.) для работы со стилями
• Webpack для сборки проекта

## Методология и процесс разработки формы

### 1. Настройка проекта:

• Инициализация проекта с помощью create-react-app
• Установка styled-components для стилизации
• Установка webpack для сборки

### 2. Структура проекта:

• src/:

- components/:
  - EmployeeForm.js: Основной компонент формы
  - InputField.js: Компонент для текстовых полей
  - SelectField.js: Компонент для поля "Пол"
  - SaveButton.js: Компонент кнопки "Сохранить"

### 3. Разработка компонентов:

• EmployeeForm.js:

- Отображает форму с использованием всех необходимых компонентов (InputField, SelectField, SaveButton)
- Содержит state для хранения значений формы и ошибок валидации
- Обрабатывает изменения в полях формы
- Вызывает функцию валидации при отправке формы
  • InputField.js:
- Отображает текстовое поле ввода
- Принимает props для имени, значения, плейсхолдера, изменения значения и ошибки валидации
- Отображает сообщение об ошибке, если оно есть
  • SelectField.js:
- Отображает выпадающий список для выбора пола
- Принимает props для имени, значения и изменения значения
  • SaveButton.js:
- Отображает кнопку "Сохранить"
- Отправляет форму при нажатии

### 4. Валидация:

• EmployeeForm.js:

- Содержит функцию hook useFormAndValidation для проверки обязательных полей
- Проверяет корректность введенного имени, фамилии, мобильного телефона, даты рожденияи и email
- Устанавливает ошибки в state для отображения в компонентах

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
