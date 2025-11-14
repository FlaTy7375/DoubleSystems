import StyledComponentsRegistry from '../providers/StyledComponentsRegistry';
import { LanguageProvider } from '@/components/translate/LanguageContext'

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
    </LanguageProvider>
  );
}