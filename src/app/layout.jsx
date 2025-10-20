import StyledComponentsRegistry from '../providers/StyledComponentsRegistry';

export default function RootLayout({ children }) {
  return (
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
  );
}