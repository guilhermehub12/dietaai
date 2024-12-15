import { DataProps } from "../controllers/NutritionController";
import { GoogleGenerativeAI } from "@google/generative-ai";


class NutritionService {
  async execute({ name, weight, height, age, gender, objective, level }: DataProps) {
    try {
      
    } catch (error) {
      console.log(error);
    }
  }
}

export {
    NutritionService
}