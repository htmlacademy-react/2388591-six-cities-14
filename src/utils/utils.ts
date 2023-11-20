function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
}


export {formatDate};

