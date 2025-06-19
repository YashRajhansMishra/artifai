import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUsername = async () => {
      if (user) {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setForm((prevForm) => ({ ...prevForm, name: userData.username }));
        }
      }
    };

    fetchUsername();
  }, [user]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (!form.prompt) {
      console.warn('Prompt is required to generate an image!');
      return;
    }

    try {
      setGeneratingImg(true);

      // Make the API request
      const response = await fetch('https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0', {
        // https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: form.prompt }),
      });

      // Check if the response is successful
      if (!response.ok) {
        const errorDetails = await response.text(); // Fetch additional error details
        throw new Error(`HTTP Error ${response.status}: ${errorDetails}`);
      }

      // Handle binary response
      const blob = await response.blob(); // Convert response to a Blob
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64data = reader.result; // Base64-encoded image
        setForm({ ...form, photo: base64data });
      };

      reader.onerror = (error) => {
        throw new Error(`Error reading Blob: ${error.message}`);
      };

      reader.readAsDataURL(blob); // Read Blob as a Base64 string
    } catch (error) {
      console.error('Error generating image:', error.message);
      console.error('Full error details:', error);
    } finally {
      setGeneratingImg(false);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/v1/post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        navigate('/home');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper prompt');
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#FFFFFF] text-[33px]">Generate Image with prompt</h1>
        <p className="mt-2 text-[#7d868d] text-[14px] max-w-[500px]">Write your prompt according to the image you want to generate and share it with the community.</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          {/* <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex. Yash"
            value={form.name}
            handleChange={handleChange}
          /> */}

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative border border-[#c5cbd1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className=" text-white bg-[#035bff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#7d868d] text-[14px]">Once you have created the image you want, you can share it with others in the community.</p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;