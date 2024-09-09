import { response } from "express";
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {

  constructor() {
    super(`api/burgers`)
    this.router
      .get(``, this.getAllBurgers)
      .post(``, this.createBurger)
      .delete(`/:burgerId`, this.deleteBurger)
  }
  async getAllBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getAllBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(request, response, next) {
    try {
      const burgerData = request.body
      const burger = await burgersService.createBurger(burgerData)
      response.send(burger)
    } catch (error) {
      next(error)
    }
  }


  async deleteBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      const deleteBurger = await burgersService.deleteBurger(burgerId)
      response.send(deleteBurger)
    } catch (error) {
      next(error)
    }
  }



}