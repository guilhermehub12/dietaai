import { DataProps } from "../controllers/NutritionController";
import { GoogleGenerativeAI } from "@google/generative-ai";

class NutritionService {
  async execute({
    name,
    weight,
    height,
    age,
    gender,
    objective,
    level,
  }: DataProps) {
    try {
      const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Crie uma dieta completa para uma pessoa com nome: ${name} do sexo ${gender} com peso atual: ${weight}kg, altura: ${height}, idade: ${age} anos e com foco e objetivo em ${objective}, atualmente nível de atividade: ${level} e ignore qualquer outro parametro que não seja os passados, retorne em json com as respectivas propriedades, propriedade nome o nome da pessoa, propriedade sexo com sexo, propriedade idade, propriedade altura, propriedade peso, propriedade objetivo com o objetivo atual, propriedade refeições com uma array contendo dentro cada objeto sendo uma refeição da dieta e dentro de cada refeição a propriedade horário com horário da refeição, propriedade nome com nome e a propriedade alimentos com array contendo os alimentos dessa refeição e pode incluir uma propreidade como suplementos contendo array com sugestão de suplemento que é indicado para o sexo dessa pessoa e o objetivo dela e não retorne nenhuma observação alem das passadas no prompt, retorne em json e nenhuma propriedade pode ter acento.`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const jsonString = text.replace(/```json\n/, "").replace(/```/, "");
      const jsonObject = JSON.parse(jsonString);
      console.log(JSON.stringify(text, null, 2));
      return { data: jsonObject };

    } catch (error) {
      console.error(`Erro JSON: ${error}`);
      throw new Error("Erro ao criar a dieta");
    }
  }
}

export { NutritionService };
