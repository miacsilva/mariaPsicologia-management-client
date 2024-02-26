# Project Name

Maria Luísa Silva - Psicologia
<br>

# Quick Compo

Public Website with access to CRUD operations by administrator and collaborators only
<br>

## Description

This is an app to manage unofficial tournaments within communities. The app helps to organize, manage and track competitions.

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know the page does not exist.
- **Signup:** As an anonymous user I can sign up on the platform so that I can start creating and managing tournaments.
- **Login:** As a user I can login to the platform so that I can access my profile and start creating and managing tournaments.
- **Logout:** As a logged in user I can logout from the platform so no one else can use it.
- **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of tournaments I have created.
- **Add Tournaments:** As a logged in user I can access the add tournament page so that I can create a new tournament.
- **Edit Tournaments:** As a logged in user I can access the edit tournament page so that I can edit the tournament I created.
- **Add Players:** As a user I can add players to a tournament.
- **View Tournament Table:** As a user I want to see the tournament details, players list and the time table.
- **View Ranks:** As a user I can see the rankings list for the tournament.



<br>

# Client / Frontend

## React Router Routes (React App)

| Path                    | Component                      | Permissions                       | Behavior                                                     |
| ----------------------- | ------------------------------ | --------------------------------- | ------------------------------------------------------------ | -------- |
| `/login-admin-mls`      | LoginPage                      | admin/colab only `<PublicRoute>`  | Login form, navigates to home page edit version after login. |
| `/signup-colab`         | SignupPage                     | admin only `<PrivateRoute>`       | Signup form, where admin adds new collaborator.              |
| `/`                     | HomePage                       | public `<Route>`                  | Home page.                                                   |
| `/about`                | AboutPage                      | public `<Route>`                  | About Page                                                   |
| `/about/edit`           | EditAbutPage                   | admin/colab only `<PrivateRoute>` | Edit about page form.                                        |
| `/monthly-subject/edit` | Edit Monthly Subject Component | admin/colab only `<PrivateRoute>` | EditMonthlySubject form.                                     |
| `/therapies`            | TherapiestList                 | public `<Route>`                  | Therapies list.                                              |
| `/therapies/id`         | TherapyDetails                 | public `<Route>`                  | Single Therapy Details.                                      |
| `/therapies/add`        | CreateTherapy                  | admin/colab only `<PrivateRoute>` | Create Therapy list.                                         |
| `/therapies/edit/id`    | EditTherapy                    | admin/colab only `<PrivateRoute>` | Edit Therapy list.                                           |
| `/books`                | Books                          | public `<Route>`                  | Book list.                                                   |
| `/books/id`             | BookDetails                    | public `<Route>`                  | Single Book Details.                                         |
| `/books/add`            | CreateBook                     | admin/colab only `<PrivateRoute>` | Create Book                                                  |
| `/book/edit/id`         | EditBook                       | admin/colab only `<PrivateRoute>` | Edit Book                                                    |
| `/appointments`         | Appointments                   | public `<Route>`                  | Book Appointment and simple therapies display.               |
| `/appointments/book`    | BookAppointments               | public `<Route>`                  | Book Appointment                                             |
| `/contacts`             | Contacts                       | public `<Route>`                  | Contact list.                                                | details. |
| `/contacts/edit`        | EditContacts                   | admin/colab only `<PrivateRoute>` | Contact list.                                                | details. |

## Components

Pages:

- LoginPage

- SignupPage

- HomePage


## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`

<br>

# Server / Backend

## Models

**User model**

```javascript
{
  name: { type: String, required: true, unique: false,  trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: false,
}, {timestamp}
```

**Therapy model**

```javascript
 {
   title: { type: String, required: true, trim: true },
   image: { type: String , default: `link` },
   description: { type: String, required: true }
 }
```

**Book model**

```javascript
{
  title: { type: String, required: true, trim: true  },
  description: { type: String, required: true },
  image: { type: String , default: `link` },
  publishedDate: new Date().toString(),
  publisher: { type: String, required: true, trim: true  },
  author: [{ type: String, required: true, trim: true  }],
  languages: [{ type: String, required: true, trim: true  }],
  pages: { type: number, required: true},
}
```

**About model**

```javascript
{
  name: { type: String, required: true},
  smallAbout: { type: String, required: true },
  bigAbout: { type: String, required: true },
  education: { type: String , required: true },
  images: [{ type: String, trim: true }],
}
```

**Monthly Subject model**

```javascript
{
  title: { type: String, required: true},
  description: { type: String, required: true },
  image: { type: String, required: true }
}
```

**Contact model**

```javascript
{
  phoneNumber: { type: String, required: true},
  address: { type: String, required: true },
  email: { type: String , required: true },
  facebook: { type: String, required: true, trim: true  },
  instagram: [{ type: String, required: true, trim: true  }],
}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                  | Request Body                                                                              | Success status | Error Status | Description                                                                                                                |
| ----------- | -------------------- | ----------------------------------------------------------------------------------------- | -------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/login    `    | Saved session                                                                             | 200            | 404          | Check if user is logged in and return home page                                                                            |
| POST        | `/auth/signup`       | {name, email, password}                                                                   | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in DB |
| POST        | `/auth/login`        | {username, password}                                                                      | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in the session     |
| POST        | `/auth/logout`       |                                                                                           | 204            | 400          | Logs out the user                                                                                                          |
| GET         | `/api/therapies`     |                                                                                           |                | 400          | Show all therapies                                                                                                         |
| GET         | `/api/therapies/:id` |                                                                                           |                |              | Show specific therapy                                                                                                      |
| POST        | `/api/therapies`     | { title, image, description }                                                             | 201            | 400          | Create and save a new therapies                                                                                            |
| PUT         | `/api/therapies/:id` | { title, image, description }                                                             | 200            | 400          | edit tournament                                                                                                            |
| DELETE      | `/api/therapies/:id` |                                                                                           | 201            | 400          | delete therapy                                                                                                             |
| GET         | `/api/books`         |                                                                                           |                | 400          | Show all books                                                                                                             |
| GET         | `/api/books/:id`     |                                                                                           |                |              | show specific book                                                                                                         |
| POST        | `/api/books`         | { name, image, description, publisher, publishedDate, pages, author, languages, booktId } | 200            | 404          | add book                                                                                                                   |
| PUT         | `/api/books/:id`     | { name, image, description, publisher, publishedDate, pages, author, languages, booktId } | 201            | 400          | edit book                                                                                                                  |
| DELETE      | `/api/books/:id`     |                                                                                           | 200            | 400          | delete books                                                                                                               |
| GET         | `/api/about`         |                                                                                           |                | 400          |
| PUT         | `/api/about`         | { name, smallAbout, bigAbout, education, images}                                          | 201            | 400          | edit book                                                                                                                  |
| GET         | `/api/contacts`      |                                                                                           |                | 400          |
| PUT         | `/api/contacts`      | { phoneNumber, address, email, facebook, instagram}                                       | 201            | 400          | edit contacts                                                                                                              |

<br>

## API's

<br>

## Packages

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/25zfiDP0/projeto)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your _public_ presentation slides

### Contributors

Maria Carvalho - <github-username> - <linkedin-profile-link>

Tiago Rato - <github-username> - <linkedin-profile-link>
