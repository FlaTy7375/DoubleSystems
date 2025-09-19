import StyledComponentsRegistry from '../providers/StyledComponentsRegistry';
import Header from "@/components/layout/header/header";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
        <Header></Header>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}