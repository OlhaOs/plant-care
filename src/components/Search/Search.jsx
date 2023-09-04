import { useState } from 'react';

export default function SearchPlant({ value }) {
  const [query, setQuery] = useState('');

  return <div>WE are searching smth{value}</div>;
}
