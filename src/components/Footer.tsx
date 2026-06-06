import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "How it Works", "Features", "Contact"],
  },
  {
    title: "Support",
    links: ["FAQ", "Privacy Policy", "Terms of Service", "Help Center"],
  },
  {
    title: "Contact",
    links: ["info@nestlocal.ug", "+256 700 000 000", "Kampala, Uganda"],
  },
];

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#3A4118", color: "#FFFFFF", pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          sx={{ mb: 6 }}
        >
          {/* Brand */}
          <Box sx={{ flex: 1.5 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 2 }}>
              <HomeIcon sx={{ color: "#FFFFFF", fontSize: 28 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#FFFFFF" }}>
                NestLocal
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: "280px" }}
            >
              Connecting Ugandans directly with verified property owners.
              No middlemen, no hidden fees. Just your next home.
            </Typography>

            {/* Social Icons */}
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "8px",
                      "&:hover": {
                        color: "#FFFFFF",
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 18 }} />
                  </IconButton>
                )
              )}
            </Stack>
          </Box>

          {/* Links */}
          {footerLinks.map((section) => (
            <Box key={section.title} sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, color: "#FFFFFF", mb: 2, letterSpacing: 1 }}
              >
                {section.title.toUpperCase()}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link) => (
                  <Typography
                    key={link}
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      cursor: "pointer",
                      "&:hover": { color: "#FFFFFF" },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            pt: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            © 2026 NestLocal. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            Built for Uganda 🇺🇬
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}