'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  validatePlus: {
    enable: true,
    package: 'egg-validate-plus',
  },
  
  utils: {
    enable: true,
    package: '@taccisum/egg-utils',
  },
      
  eureka: {
    enable: true,
    package: '@taccisum/egg-eureka',
  },
      
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc',
  },
      

};
