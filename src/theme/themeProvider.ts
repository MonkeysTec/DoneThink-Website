import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3B82F6", // Azul semelhante ao checkmark (pode ajustar para combinar melhor)
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1E293B", // Cor escura para textos e títulos (cinza-azulado escuro)
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#f9fafb", // Leve cinza para fundo de cards
    },
    text: {
      primary: "#1F2937", // Cinza escuro quase preto (texto "doneThink")
      secondary: "#6B7280", // Cinza claro para slogan
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
    },
  },
});

export default theme;
