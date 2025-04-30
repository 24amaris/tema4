import axios from "axios";

export const getRandomVerse = async () => {
  try {
    console.log("Apelăm API-ul...");
    const response = await axios.get("https://labs.bible.org/api/?passage=random&type=json");
    console.log("Răspuns API:", response.data);

    if (response.data.length > 0) {
      const verse = response.data[0];
      console.log("Verset extras:", verse);
      return `${verse.text} (${verse.bookname} ${verse.chapter}:${verse.verse})`;
    }
    console.error("Date API invalide");
    return "Verset indisponibil";
  } catch (error) {
    console.error("Eroare la API:", error);
    return "Eroare la preluarea versetului.";
  }
};
