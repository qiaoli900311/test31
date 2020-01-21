'use strict';

module.exports = () => {
  return {
    logger: {
      level: 'INFO',
      consoleLevel: 'INFO'
    },

    requestLogger: {
      enable: false,
    },
    
    swaggerdoc: {
      enable: false,  // 生产环境下禁用swagger
    },
    
  };
};
