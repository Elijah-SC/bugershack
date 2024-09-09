import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {

  constructor() {
    super(`api/burgers`)
    this.router
      .get(``, this.getAllBurgers)

  }
  getAllBurgers(request, response, next) {
    try {
      // response.send(`Yumm Burgers Controller is loaded`)
      response.send([{ name: `Double Cheeseburger` }, { name: `Original CheeseBurger` }])
    } catch (error) {
      next(error)
    }
  }

}