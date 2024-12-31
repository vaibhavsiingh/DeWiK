import React, { useState } from 'react';
import { PinataSDK } from 'pinata-web3';
import { getContract } from '../services/web3';
import WikiABI from '../Wiki.json';
import { useQuery } from '@tanstack/react-query';
import { gql, request } from 'graphql-request';
import './AddArticle.css';

// Initialize Pinata (using the same configuration as before)
const pinata = new PinataSDK({
  pinataJwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwZjk5MzE5NC1jMTY5LTQ3ZWUtYTE4Ny0wYjY0MTI5Njg2MmEiLCJlbWFpbCI6InNjaWVuY2VidXp6d2l0aGRldmFuc2hAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjA0NjliYTg5NTgyOTAzM2I0NDVjIiwic2NvcGVkS2V5U2VjcmV0IjoiMGY4MzUwMWIwNDliMGU0ZjAyNWY3NDQxMmQ4ZjgxZWEwOWQ0ZmYyZmIwZTQxODE2NWM3OTMzNmM3ZTNlYzUxYyIsImV4cCI6MTc1OTYwOTUxNH0.veQFxx61xLXwJDsnmfqhxXfF-3Z479hIiIbKtediSv8',
  pinataGateway: 'scarlet-left-magpie-363.mypinata.cloud',
});

// GraphQL query (unchanged)
const query = gql`
  {
    articleAddeds(orderBy: timestamp, first: 5, orderDirection: desc) {
      id
      Contract_id
      title
      contentHash
    }
    articleUpdateds(first: 5) {
      id
      Contract_id
      title
      contentHash
    }
  }
`;

const url = 'https://api.studio.thegraph.com/query/90743/dewik-v3/version/latest';

function AddArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { data, status } = useQuery({
    queryKey: ['articles'],
    queryFn: async () => await request(url, query),
    staleTime: 60 * 1000,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const jsonToPin = { title, content, timestamp: Date.now() };
      const result = await pinata.upload.json(jsonToPin);
      const contentHash = result.IpfsHash;

      const contractAddress = '0x404952965FD4512655bD3F685524aF4400bEDa46';
      const contract = await getContract(WikiABI, contractAddress);
      const tx = await contract.addArticle(title, contentHash);
      await tx.wait();

      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error submitting article:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-article-container">
      <h2 className="add-article-title">Add Article</h2>

      {error && (
        <div className="error-message">
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="add-article-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={loading}
            placeholder="Enter article title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            disabled={loading}
            placeholder="Enter article content"
          />
        </div>
        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Adding Article...' : 'Add Article'}
        </button>
      </form>

      <div className="recent-articles">
        <h3 className="recent-articles-title">Recent Articles</h3>
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : status === 'error' ? (
          <p>Error occurred querying the Subgraph</p>
        ) : (
          <ul className="articles-list">
            {data?.articleAddeds?.map((article) => (
              <li key={article.id} className="article-item">
                <h4>{article.title}</h4>
                <a 
                  href={`https://scarlet-left-magpie-363.mypinata.cloud/ipfs/${article.contentHash}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Content
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AddArticle;