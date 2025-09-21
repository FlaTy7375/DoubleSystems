import StyledComponentsRegistry from '../providers/StyledComponentsRegistry';
import Header from "@/components/layout/header/header";
import Footer from '@/components/layout/footer/footer';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
        <Header></Header>
          {children}
        <Footer></Footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}