import { FastifyRequest, FastifyReply } from "fastify";
import { NutritionService } from "../services/NutritionService";

export interface DataProps {
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  objective: string;
  level: string;
}

class NutritionController {
  async createNutrition(request: FastifyRequest, reply: FastifyReply) {
    const { name, weight, height, age, gender, objective, level } = request.body as DataProps;

    const createNutrition = new NutritionService();

    const nutrition = await createNutrition.execute({
      name,
      weight,
      height,
      age,
      gender,
      objective,
      level
    });

    reply.send(nutrition);
  }
}

export {
    NutritionController
}