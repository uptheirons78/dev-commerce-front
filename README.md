# Dev-Commerce Front-End (using React)

#### Initial Setup [step-01]

* Install React `npx create-react-app dev-commerce-front`;
* Create `user` folder with Signup and Signin Component;
* Install `react-router-dom`;
* Create a Routes Component and render it instead of App;
* Add Home Component;

#### Layout, Menu and Bootstrap 4 [step-02]

* Clean `public/index.html` and add Bootstrap 4 css via CDN;
* Create a Menu Component with Link and withRouter();
* Create a Layout Component with defaultProps;
* Add Menu Compontent to Layout Component;
* Import Layout Component inside existing pages;
* Create .env to import 'secret variables' via config.js;

#### Signup [step-03]

* Create SignUp Form inside `Signup.js`;
* Create `handleChange` and `clickSubmit` handlers in the same file;
* Create `signup` method using fetch() to POST data on the backend inside `auth` folder;
* Add `showError` and `showSuccess` methods show modals on success or show errors to the user;