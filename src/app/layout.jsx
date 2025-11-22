import { LanguageProvider } from '@/components/translate/LanguageContext';
import StyledComponentsRegistry from '../providers/StyledComponentsRegistry';

export default function RootLayout({ children }) {
  return (
        <LanguageProvider>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </LanguageProvider>
  );
}