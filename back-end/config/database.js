module.exports = {
    pmsPool: {
        user: process.env.PMS_USER || 'opera',
        password: process.env.PMS_PASSWORD || 'rhsscopera',
        connectString: process.env.PMS_CONNECTIONSTRING || '192.168.0.9:1521/opera',
        poolMin: 10,
        poolMax: 10,
        poolIncrement: 0
    }
};

