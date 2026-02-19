import { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ResumeContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}
