
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  export default async function (req, res) {

	const response = await openai.createImage({
	prompt: generatePrompt(req.body.image) ,
	n: 1,
	size: "1024x1024",
  });

  console.log(response.data.data[0].url)
  
  res.status(200).json({ result: response.data.data[0].url });


}

function generatePrompt(image) {

    return image
}