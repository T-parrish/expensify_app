// syntax for importing mocked libraries
const moment = require.requireActual('moment');

export default (timestamp=0) => {
    return moment(timestamp);
};