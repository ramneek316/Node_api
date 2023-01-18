# Register, Login, get your profile, Logout

## Add Credentials in config.js ##

_Add your mongoDB username and encoded password if it contains special characters_

### INSTALL APP

```
npm install
```

### RUN the APP

```
nodemon index
```

## Register the User

_Method POST_

_http://localhost:8080/api/register_

## Login the user

_Method POST_

_Enter Email and Password_

_http://localhost:8080/api/login_

## Login user Get your profile

_Method GET_

_http://localhost:8080/api/profile_

## Logout for loginned user

_Method GET_

_http://localhost:8080/api/logout_

## This API is built using

- express - for handling routes
- bcrypt - for encrypting the password
- jsonwebtoken - for generating Auth token
- mongoose - for connection mongoDB database
