import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddArticle from './components/AddArticle';
import './App.css';
import React from 'react';

// Create the React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AddArticle />
    </QueryClientProvider>
  );
}

export default App;
