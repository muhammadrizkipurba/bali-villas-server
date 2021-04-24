const config = {};

config.jwtsecret = 'secretkey';
config.aessecret = 'aessecret';
config.err404 = { status: 404, msg: '404 Error' };
config.errNoData = { status: 404, msg: 'No Data' };
config.err401 = { status: 401, msg: 'Authentication requires' };
config.err500 = { status: 500, msg: 'Server Error' };
config.res200 = { status: 200, msg: 'OK' };

module.exports = config;
