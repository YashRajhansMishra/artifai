import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// router.route('/').get((req, res) => {
//   res.send('Hello from ArtifAI!');
// });

// Test Route
router.get('/', (req, res) => {
  res.send('Welcome to getRoutes!');
});

// Route for generating images
router.post('/api/v1/get', async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ imageUrl: `data:image/png;base64,${image}` });
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).send(error?.response?.data?.error?.message || 'Something went wrong');
  }
});

// Post Route for storing data
// router.post('/api/v1/post', async (req, res) => {
//   try {
//     // Here you would handle saving post data to a database if needed
//     res.status(200).send('Post created successfully');
//   } catch (error) {
//     console.error('Error creating post:', error);
//     res.status(500).send('Error creating post');
//   }
// });

export default router;





// import express from 'express';
// import * as dotenv from 'dotenv';
// import OpenAI from "openai";
// // import { Configuration, OpenAIApi } from 'openai';

// dotenv.config();

// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // const configuration = new Configuration({
// //   apiKey: process.env.OPENAI_API_KEY,
// // });

// // const openai = new OpenAIApi(configuration);

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'Hello from ArtifAI' });
// });

// router.route('/').post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const response = await openai.images.generate({
//       prompt: prompt,
//       n: 1, // Number of images to generate
//       size: '1024x1024', // Image size
//   });

//     // const aiResponse = await openai.createImage({
//     //   prompt,
//     //   n: 1,
//     //   size: '1024x1024',
//     //   response_format: 'b64_json',
//     // });

//     console.log(response.data[0].url);
//     // const image = aiResponse.data.data[0].b64_json;
//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error?.response.data.error.message || 'Something went wrong');
//   }
// });

// export default router;
