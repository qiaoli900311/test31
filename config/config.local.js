'use strict';

module.exports = () => {
  return {
    
    eureka: {
      enabled: false,
      client: {
        instance: {
          ipAddr: '127.0.0.1',
        },
        server: {
          registerWithEureka: false, // 本地开发时不注册到注册中心
          fetchRegistry: true,
        },
      },
    },
      
  };
};
