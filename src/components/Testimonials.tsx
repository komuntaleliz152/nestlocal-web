import { Box, Container, Typography, Stack, Avatar } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    name: "Sarah Nakato",
    role: "Software Engineer, Kampala",
    initials: "SN",
    quote:
      "I wasted two weeks with brokers showing me houses that were already taken. NestLocal's direct owner contact saved me time and a full month's rent in agent fees.",
  },
  {
    name: "James Okello",
    role: "Property Owner, Ntinda",
    initials: "JO",
    quote:
      "I listed my two-bedroom flat and found a tenant in five days — without paying any broker commission. Finally a platform that works for landlords too.",
  },
  {
    name: "Amina Hassan",
    role: "NGO Worker, Kololo",
    initials: "AH",
    quote:
      "Moving back to Uganda from abroad was stressful enough. Knowing every listing on NestLocal is verified gave me peace of mind before I even visited.",
  },
];

export default function Testimonials() {
  return (
    <Box id="testimonials" sx={{ backgroundColor: "#FFFFFF", py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "#4B5320", fontWeight: 600, letterSpacing: 2 }}
          >
            Real Stories
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
            Trusted by Ugandans
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
            Renters and property owners across Kampala are already seeing the
            difference — no brokers, no surprises.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ justifyContent: "center" }}
        >
          {testimonials.map((item) => (
            <Box
              key={item.name}
              sx={{
                flex: 1,
                backgroundColor: "#F5F5F0",
                borderRadius: "16px",
                p: 4,
                border: "1px solid #E0E0E0",
                position: "relative",
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <FormatQuoteIcon
                sx={{
                  fontSize: 40,
                  color: "#4B5320",
                  opacity: 0.2,
                  position: "absolute",
                  top: 16,
                  right: 20,
                }}
              />
              <Typography
                variant="body1"
                sx={{ color: "#1A1A1A", lineHeight: 1.8, mb: 3, fontStyle: "italic" }}
              >
                &ldquo;{item.quote}&rdquo;
              </Typography>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: "#4B5320",
                    width: 48,
                    height: 48,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  {item.initials}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#1A1A1A" }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666666" }}>
                    {item.role}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
