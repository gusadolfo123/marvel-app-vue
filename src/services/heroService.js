import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`Publiher ${publisher} not correct`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};

export const getHeroesByName = (name) => {
  if (name === "") return [];
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );
};

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
