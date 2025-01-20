export const CharacterGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid sm:grid-cols-2 tablet-mm:grid-cols-2 desktop-p:grid-cols-3 mb-24 gap-8">{children}</div>
);