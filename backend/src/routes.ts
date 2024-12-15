import { FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
 } from "fastify";
 import { NutritionController } from "./controllers/NutritionController";

 export async function routes(
    fastify: FastifyInstance,
    options: FastifyPluginOptions
  ) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
      return { hello: "world!!" };
    });

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
      const nutritionController = new NutritionController();
      return nutritionController.createNutrition(request, reply);
    });
  }