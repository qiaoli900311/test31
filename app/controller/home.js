'use strict';

const Controller = require('egg').Controller;

/**
 * @controller home
 */
class HomeController extends Controller {
  
  /**
   * @summary index
   * @description say hello when you access
   * @router get /
   * @response 200 msg
   */
  async index() {
    const { ctx } = this;
    ctx.body = {
      msg: 'hi, guy'
    };
  }
}

module.exports = HomeController;
