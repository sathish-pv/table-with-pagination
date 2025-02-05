import React from 'react';

export const ProjectsTable = ({ projects }) => {
  return (
    <div>
      <table className='project-table table-bordered'>
        <thead>
          <tr>
            <th >
              S.No.
            </th>
            <th >
              Percentage Funded
            </th>
            <th >
              Amount Pledged
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project['s.no']} >
              <td >
                {project['s.no']}
              </td>
              <td >
                {project['percentage.funded']}
              </td>
              <td >
                {project['amt.pledged']}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};