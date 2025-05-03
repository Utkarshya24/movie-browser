// src/utils/localStorage.ts
export const getFavorites = () => {
    try {
      const data = localStorage.getItem("favorites");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };
  
  export const saveFavorites = (favorites: any[]) => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {
      console.error("Failed to save to localStorage");
    }
  };
  