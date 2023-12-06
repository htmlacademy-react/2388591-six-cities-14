function getRandomArrayElement<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
}

function getRating(rating: number): string {
  const roundedRating = Math.round(rating);
  return `${roundedRating * 20}%`;
}

function isPlural(count: number, word: string) {
  return count > 1 ? `${word}s` : word;
}

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export {formatDate, getRating, getRandomArrayElement, isPlural, capitalizeFirstLetter};

