import React, { useState } from 'react';
import { useProjects } from './hooks/useProjects';
import { ProjectsTable } from './components/ProjectsTable';
import { Pagination } from './components/Pagination';

const ITEMS_PER_PAGE = 5;

function App() {
  const { projects, loading, error } = useProjects();
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <p>Error loading projects</p>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div>
        <p>No projects found</p>
        <p>Please try again later</p>
      </div>
    );
  }

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className='container'>
      <h1>
        Kickstarter Projects
      </h1>
      
      <div>
        <ProjectsTable 
          projects={paginatedProjects} 
        />
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export default App;