import { useState, useEffect } from 'react';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!data || !Array.isArray(data)) {
          throw new Error('Invalid data format received');
        }
        
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    
  }, []);

  return { projects, loading, error };
};