import { defineStore } from "pinia";
import { getRandomVerse } from "../api/bibleApi";

export const useVerseStore = defineStore("verseStore", {
  state: () => ({
    verses: [],
    currentVerse: "",
  }),
  actions: {
    async fetchVerse() {
      console.log("fetchVerse() a fost apelată!");
      this.currentVerse = "Se încarcă...";
      
      const verse = await getRandomVerse();
      console.log("Verset primit:", verse);
      
      this.currentVerse = verse;

      if (this.verses.length >= 5) {
        this.verses.shift();
      }
      this.verses.push(verse);
    },
  },
});
