import { createContext, useContext, useState } from 'react';

const ProjectModalContext = createContext();

export function ProjectModalProvider({ children }) {
  const [activeProject, setActiveProject] = useState(null);
  return (
    <ProjectModalContext.Provider value={{
      activeProject,
      openProject: (project) => setActiveProject(project),
      closeProject: () => setActiveProject(null),
    }}>
      {children}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  return useContext(ProjectModalContext);
}
