exports.res200 = msg => {
    return { status: 200, message: msg || 'Success!' };
};
exports.err404 = msg => {
    return { status: 200, message: msg || 'Nothing found!' };
};
exports.res500 = msg => {
    return { status: 200, message: msg || 'Internal server error!' };
};
exports.res403 = msg => {
    return { status: 200, message: msg || 'No access!' };
};