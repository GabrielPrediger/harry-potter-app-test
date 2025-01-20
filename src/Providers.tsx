import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoriteHouseProvider } from "./contexts/FavorteHouseContext";
import { FavoriteCharactersProvider } from "./contexts/FavoriteCharactersContext";


const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <FavoriteHouseProvider>
      <FavoriteCharactersProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </FavoriteCharactersProvider>
    </FavoriteHouseProvider>
  );
}