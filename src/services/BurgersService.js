import { dbContext } from "../db/DbContext.js"

class BurgersService {
  async deleteBurger(burgerId) {
    const burgerToDelete = await dbContext.Burgers.findById(burgerId)
    if (burgerToDelete == null) return
    await burgerToDelete.deleteOne()
    return `${burgerToDelete.name} was deleted`
  }
  async createBurger(burgerData) {
    const burger = await dbContext.Burgers.create(burgerData)
    return burger
  }
  async getAllBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }


}

export const burgersService = new BurgersService()