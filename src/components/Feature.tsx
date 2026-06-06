import { Box, Container, Typography, Stack } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";

const features = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 32, color: "#4B5320" }} />,
    title: "Verified Listings",
    description:
      "Every property is physically verified by our team before being listed. No scams, no fake listings.",
  },
  {
    icon: <MoneyOffIcon sx={{ fontSize: 32, color: "#4B5320" }} />,
    title: "Zero Agent Fees",
    description:
      "Connect directly with property owners. No middlemen means no commissions or hidden charges.",
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 32, color: "#4B5320" }} />,
    title: "Uganda Wide Coverage",
    description:
      "Properties across Kampala, Entebbe, Jinja, Mbarara and more districts added every week.",
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 32, color: "#4B5320" }} />,
    title: "Mobile Friendly",
    description:
      "Search and contact property owners directly from your phone. Works on all devices.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32, color: "#4B5320" }} />,
    title: "Secure & Trusted",
    description:
      "All property owners are vetted and verified. Your safety and security is our top priority.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 32, color: "#4B5320" }} />,
    title: "Fast Response",
    description:
      "Get responses from property owners within 24 hours. No more waiting weeks to hear back.",
  },
];

export default function Features() {
  return (
    <Box
      id="features"
      sx={{ backgroundColor: "#F5F5F0", py: 10 }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "#4B5320", fontWeight: 600, letterSpacing: 2 }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 800,
              color: "#1A1A1A",
              mt: 1,
            }}
          >
            Everything You Need
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666666",
              mt: 2,
              maxWidth: "500px",
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            NestLocal is built specifically for the Ugandan property market.
            Here is what makes us different.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {features.map((feature) => (
            <Box
              key={feature.title}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                p: 4,
                border: "1px solid #E0E0E0",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(75, 83, 32, 0.1)",
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#F5F5F0",
                  borderRadius: "12px",
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                {feature.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#1A1A1A", mb: 1 }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#666666", lineHeight: 1.8 }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}