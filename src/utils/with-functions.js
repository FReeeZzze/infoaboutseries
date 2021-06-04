export const uniqueNumOfSeasons = (arr) => {
  const seasons = [];

  for (const { season } of arr) {
    const normalizeNumSeason = season.replace(/\D+/gm, '');
    if (!seasons.includes(normalizeNumSeason)) {
      seasons.push(normalizeNumSeason);
    }
  }

  return seasons;
};
