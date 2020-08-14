import axios from "axios";

const URL = "http://localhost:8080"; //port번호 입력

export const videoFilterAPI = async (videoNum) => {
  try {
    const response = await axios.post(`${URL}/videolist`, {
      videoUrl: videoNum,
    });
    return response;
  } catch (error) {
    return { error };
  }
};

export const loadVideoAPI = async ({}) => {
  try {
    const response = await axios.get(`${URL}/reportvideo`);
    console.log(response);
    return response;
  } catch (error) {
    return { error };
  }
};
