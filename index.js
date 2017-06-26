const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();