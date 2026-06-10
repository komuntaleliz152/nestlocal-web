import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export const metadata = {
  title: "Contact — NestLocal",
  description:
    "Get in touch with the NestLocal team. Questions, property listings, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <Box sx={{ pt: 10, minHeight: "100vh", backgroundColor: "#F5F5F0" }}>
        <Contact />
      </Box>
      <Footer />
    </main>
  );
}
