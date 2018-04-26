'use strict';
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    user_id: DataTypes.INTEGER,
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(255),
    login_count: DataTypes.INTEGER,
    account_type_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
      setterMethods: {
          password(value) {
              this.setDataValue("password", crypto.pbkdf2Sync(value, this.salt, 1000, 64, 'sha512').toString('hex'));
          },
      }
  });

  User.prototype.salt = crypto.randomBytes(16).toString('hex');

  User.prototype.isValidUser = function (password) {
      let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
      return this.hash === hash;
  };

  User.prototype.generateJwt = function() {
        let expiry = new Date();
        expiry.setDate(expiry.getDate() + 7);

        return jwt.sign({
            _id: this.user_id,
            email: this.email,
            exp: parseInt(expiry.getTime() / 1000),
        }, process.env.JWT_SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
    };

  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.AccountType);
    User.hasMany(models.Event);
  };
  return User;
};