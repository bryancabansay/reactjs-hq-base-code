import axios from "axios";

export const getCatFact = async () => {
  return await axios
    .get("https://catfact.ninja/fact")
    .then((result) => {
      return result.data.fact;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
