**Register, Login, get your profile, Logout**

**Add Credentials in config.js**

_Add your mongoDB username and encoded password if it contains special characters_

_Command: npm install to install the app_
_Command to run the app: nodemon index_

**Register the User**
_Method POST_
_http://localhost:8080/api/register_

**Login the user**
_Method POST_
_Enter Email and Password_
_http://localhost:8080/api/login_

**Login user Get your profile**
_Method GET_
_http://localhost:8080/api/profile_

**Logout for loginned user**
_Method GET_
_http://localhost:8080/api/logout_

**This API is built using:**
_express- for handling routes_
_bcrypt - for encrypting the password_
_jsonwebtoken - for generating Auth token_
_mongoose - for connection mongoDB database_
