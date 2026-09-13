import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "react-email";
import * as React from "react";


type SensiWelcomeEmailProps = {
  firstName?: string;
};
/**
 * SENSI Club — Welcome Email
 *
 * Built with react-email's standard components (Html, Head, Preview, Body,
 * Container, Section, Row, Column, Img, Heading, Text, Button, Hr, Link).
 *
 * IMAGES: this component references three static image files —
 *   sensi-logo.png, sensi-pool.jpg, sensi-spa.jpg
 * Drop them into your project's /static (or /public) folder and update
 * `baseUrl` below to wherever they're hosted (e.g. your site's CDN, or
 * Resend's asset hosting). Email clients cannot load images from your local
 * filesystem, so this MUST be a public https URL before sending.
 */

// Email clients need publicly reachable HTTPS URLs; local /static paths only
// work in the React Email preview.
const SENSI_CDN = "https://cdn.prod.website-files.com/64b36dfa6b5e7b810673520b";

// ---- Design tokens ----
const COLORS = {
  pageBg: "#e4dccb",
  cardBg: "#fffdf9",
  outerBorder: "#cbb98a",
  innerBorder: "#e7dcc0",
  ink: "#2b2620",
  body: "#5c5443",
  gold: "#a08a53",
  goldMuted: "#8c7f5f",
  buttonBg: "#2b2620",
  buttonText: "#fffdf9",
};

const FONT_HEADING = "'Radley', Georgia, 'Times New Roman', serif";
const FONT_SCRIPT = "'Cormorant Garamond', Georgia, serif";
const FONT_BODY = "'Inter', Arial, Helvetica, sans-serif";

const POOL_SRC = `${SENSI_CDN}/6628d55e78c46bd5da7f0e25_7-p-1080.webp`;
const SPA_SRC = `${SENSI_CDN}/65d12815677e3e57bbbd2f0b_Spa-34-p-1080.webp`;

const BOOKING_URL =
  "https://securept2.e-gds.com/sensinatureandspa/light/?lang=en&promo=SENSICLUB5";

// ---- Small reusable pieces ----

function EyebrowLabel({ children }: { children: React.ReactNode }) {
  return (
    <Text
      style={{
        margin: "0 0 12px 0",
        fontFamily: FONT_BODY,
        fontSize: "10px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        color: COLORS.gold,
        textAlign: "center" as const,
      }}
    >
      {children}
    </Text>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Heading
      as="h2"
      style={{
        margin: "0 0 18px 0",
        fontFamily: FONT_HEADING,
        fontSize: "25px",
        color: COLORS.ink,
        fontWeight: 400,
        textAlign: "center" as const,
      }}
    >
      {children}
    </Heading>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <Text
      style={{
        margin: 0,
        fontFamily: FONT_BODY,
        fontSize: "14px",
        lineHeight: "1.9",
        color: COLORS.body,
        textAlign: "center" as const,
      }}
    >
      {children}
    </Text>
  );
}

/** The small ✦ flanked by two hairlines used between sections */
function OrnamentalDivider() {
  return (
    <Row style={{ width: "auto", margin: "0 auto" }}>
      <Column
        style={{
          width: "36px",
          height: "1px",
          backgroundColor: COLORS.outerBorder,
          fontSize: "1px",
          lineHeight: "1px",
        }}
      >
        {"\u00A0"}
      </Column>
      <Column style={{ width: "10px", fontSize: "1px", lineHeight: "1px" }}>
        {"\u00A0"}
      </Column>
      <Column
        style={{
          fontFamily: FONT_SCRIPT,
          fontStyle: "italic",
          fontSize: "20px",
          color: COLORS.gold,
          lineHeight: "1",
        }}
      >
        &#10022;
      </Column>
      <Column style={{ width: "10px", fontSize: "1px", lineHeight: "1px" }}>
        {"\u00A0"}
      </Column>
      <Column
        style={{
          width: "36px",
          height: "1px",
          backgroundColor: COLORS.outerBorder,
          fontSize: "1px",
          lineHeight: "1px",
        }}
      >
        {"\u00A0"}
      </Column>
    </Row>
  );
}

/** A thin line — label — thin line divider, used above "Feed Your Senses" */
function LabeledDivider({ label }: { label: string }) {
  return (
    <Row style={{ width: "auto", margin: "0 auto" }}>
      <Column
        style={{
          width: "28px",
          height: "1px",
          backgroundColor: COLORS.innerBorder,
          fontSize: "1px",
          lineHeight: "1px",
        }}
      >
        {"\u00A0"}
      </Column>
      <Column style={{ width: "8px", fontSize: "1px", lineHeight: "1px" }}>
        {"\u00A0"}
      </Column>
      <Column
        style={{
          fontFamily: FONT_BODY,
          fontSize: "10px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: COLORS.gold,
          padding: "0 4px",
          whiteSpace: "nowrap" as const,
        }}
      >
        {label}
      </Column>
      <Column style={{ width: "8px", fontSize: "1px", lineHeight: "1px" }}>
        {"\u00A0"}
      </Column>
      <Column
        style={{
          width: "28px",
          height: "1px",
          backgroundColor: COLORS.innerBorder,
          fontSize: "1px",
          lineHeight: "1px",
        }}
      >
        {"\u00A0"}
      </Column>
    </Row>
  );
}

function FramedImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Section style={{ border: `1px solid ${COLORS.innerBorder}` }}>
      <Img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </Section>
  );
}

const ctaButtonStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: COLORS.buttonBg,
  color: COLORS.buttonText,
  fontFamily: FONT_BODY,
  fontSize: "12px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  textDecoration: "none",
  padding: "17px 44px",
  border: `1px solid ${COLORS.buttonBg}`,
};

// ---- The email ----

export default function SensiWelcomeEmail({ firstName = "there" }: SensiWelcomeEmailProps = {}) {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Radley&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>
        Welcome to SENSI Club — your code SENSICLUB5 is waiting, along with a
        standing invitation to the Atlantic.
      </Preview>
      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: COLORS.pageBg,
          fontFamily: FONT_BODY,
        }}
      >
        <Container
          style={{
            maxWidth: "640px",
            width: "100%",
            backgroundColor: COLORS.cardBg,
            border: `1px solid ${COLORS.outerBorder}`,
            padding: "6px",
            margin: "48px auto",
          }}
        >
          <Section style={{ border: `1px solid ${COLORS.innerBorder}` }}>
            {/* Top eyebrow */}
            <Section style={{ padding: "36px 24px 6px 24px" }}>
              <Text
                style={{
                  margin: 0,
                  fontFamily: FONT_BODY,
                  fontSize: "10px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: COLORS.gold,
                  textAlign: "center" as const,
                }}
              >
                São Miguel &#8211; Azores &#8211; Portugal
              </Text>
            </Section>

            {/* Logo */}
            <Section style={{ padding: "14px 24px 28px 24px", textAlign: "center" as const }}>
              <Text
                style={{
                  margin: 0,
                  fontFamily: FONT_HEADING,
                  fontSize: "40px",
                  letterSpacing: "8px",
                  color: COLORS.ink,
                }}
              >
                SENSI
              </Text>
            </Section>

            {/* Thin gold rule */}
            <Section style={{ padding: "0 24px 32px 24px" }}>
              <OrnamentalDivider />
            </Section>

            {/* Hero image */}
            <Section style={{ padding: "0 36px" }}>
              <FramedImage
                src={POOL_SRC}
                alt="Private plunge pool overlooking the Atlantic at SENSI Azores"
                width={568}
                height={379}
              />
            </Section>

            {/* Hero copy */}
            <Section style={{ padding: "44px 52px 0 52px" }}>
              <EyebrowLabel>Welcome to SENSI Club</EyebrowLabel>
              <Heading
                as="h1"
                style={{
                  margin: "0 0 22px 0",
                  fontFamily: FONT_HEADING,
                  fontSize: "36px",
                  lineHeight: "1.3",
                  color: COLORS.ink,
                  fontWeight: 400,
                  textAlign: "center" as const,
                }}
              >
                You now have a standing
                <br />
                invitation to the Atlantic
              </Heading>
              <Text
                style={{
                  margin: "0 auto",
                  maxWidth: "420px",
                  fontFamily: FONT_BODY,
                  fontSize: "14.5px",
                  lineHeight: "1.9",
                  color: COLORS.body,
                  textAlign: "center" as const,
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_SCRIPT,
                    fontSize: "32px",
                    lineHeight: 0,
                    color: COLORS.ink,
                    fontStyle: "italic",
                    verticalAlign: "-8px",
                    marginRight: "2px",
                  }}
                >
                  D
                </span>
                ear {firstName}, welcome to SENSI Club. From today, you're
                part of a small circle of people who hear about our farmhouse on
                the cliffs of São Miguel before anyone else does — and who stay,
                always, at a member's rate.
              </Text>
            </Section>

            {/* Ornamental divider */}
            <Section style={{ padding: "36px 52px 0 52px" }}>
              <Row style={{ width: "60px", margin: "0 auto" }}>
                <Column
                  style={{
                    width: "60px",
                    height: "1px",
                    backgroundColor: COLORS.innerBorder,
                    fontSize: "1px",
                    lineHeight: "1px",
                  }}
                >
                  {"\u00A0"}
                </Column>
              </Row>
            </Section>

            {/* Code block */}
            <Section style={{ padding: "36px 52px 8px 52px", textAlign: "center" as const }}>
              <table
                role="presentation"
                cellPadding={0}
                cellSpacing={0}
                style={{ margin: "0 auto", border: `1px double ${COLORS.outerBorder}` }}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "34px 56px", textAlign: "center" }}>
                      <Text
                        style={{
                          margin: "0 0 12px 0",
                          fontFamily: FONT_BODY,
                          fontSize: "10px",
                          letterSpacing: "3px",
                          textTransform: "uppercase",
                          color: COLORS.gold,
                        }}
                      >
                        A Welcome Gift From Us
                      </Text>
                      <Text
                        style={{
                          margin: "0 0 12px 0",
                          fontFamily: FONT_HEADING,
                          fontSize: "34px",
                          letterSpacing: "3px",
                          color: COLORS.ink,
                          fontWeight: 400,
                        }}
                      >
                        SENSICLUB5
                      </Text>
                      <Hr
                        style={{
                          width: "18px",
                          margin: "0 auto 12px auto",
                          borderColor: COLORS.innerBorder,
                        }}
                      />
                      <Text
                        style={{
                          margin: 0,
                          fontFamily: FONT_BODY,
                          fontSize: "12.5px",
                          letterSpacing: "0.5px",
                          color: COLORS.goldMuted,
                        }}
                      >
                        use this code at checkout for your member's rate
                        <br />
                        on any reservation, for as long as you're with us
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* CTA */}
            <Section style={{ padding: "28px 52px 6px 52px", textAlign: "center" as const }}>
              <Button href={BOOKING_URL} style={ctaButtonStyle}>
                Book Your First Stay
              </Button>
            </Section>
            <Section style={{ padding: "0 52px 44px 52px" }}>
              <Text
                style={{
                  margin: 0,
                  fontFamily: FONT_BODY,
                  fontSize: "11.5px",
                  color: COLORS.gold,
                  textAlign: "center" as const,
                }}
              >
                valid on direct bookings only
              </Text>
            </Section>

            {/* Section divider with label */}
            <Section style={{ padding: "0 52px" }}>
              <LabeledDivider label="Feed Your Senses" />
            </Section>

            {/* The Retreat */}
            <Section style={{ padding: "40px 52px 0 52px" }}>
              <SectionHeading>Once a farmhouse, still a home</SectionHeading>
              <BodyText>
                Nestled in a protected area above the ocean, with no
                neighbouring houses in sight, SENSI offers a rare kind of
                privacy. The old farmhouse that once stood here was restored,
                not replaced — its walls, its silence, and its sense of place
                all carefully preserved.
              </BodyText>
            </Section>

            {/* Rooms */}
            <Section style={{ padding: "36px 52px 0 52px" }}>
              <SectionHeading>Eight rooms, eight views</SectionHeading>
              <BodyText>
                Each of our eight room types opens onto something different —
                the property's gardens, the folds of the surrounding
                countryside, or an uninterrupted line of ocean. Wherever you
                wake, the Atlantic is close enough to hear.
              </BodyText>
            </Section>

            {/* Spa image */}
            <Section style={{ padding: "40px 36px 0 36px" }}>
              <FramedImage
                src={SPA_SRC}
                alt="A guest receiving a massage at the SENSI spa"
                width={568}
                height={379}
              />
            </Section>

            {/* Spa copy */}
            <Section style={{ padding: "32px 52px 0 52px" }}>
              <EyebrowLabel>Spa &amp; Wellness</EyebrowLabel>
              <SectionHeading>Time, slowed down</SectionHeading>
              <BodyText>
                Our therapists offer a range of massages and treatments
                designed to leave you thoroughly unwound, alongside an
                outdoor pool, a heated indoor pool, a Turkish bath, and a
                sauna.
              </BodyText>
              <Text
                style={{
                  margin: "18px 0 0 0",
                  fontFamily: FONT_SCRIPT,
                  fontSize: "19px",
                  lineHeight: "1.6",
                  color: COLORS.ink,
                  fontStyle: "italic",
                  textAlign: "center" as const,
                }}
              >
                &ldquo;We deliver excellent service with a human touch.&rdquo;
              </Text>
              <Text
                style={{
                  margin: "6px 0 0 0",
                  fontFamily: FONT_BODY,
                  fontSize: "11px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: COLORS.gold,
                  textAlign: "center" as const,
                }}
              >
                Nicole Cabral, Head of F&amp;B
              </Text>
            </Section>

            {/* Table & Terroir */}
            <Section style={{ padding: "40px 52px 0 52px" }}>
              <EyebrowLabel>Table &amp; Terroir</EyebrowLabel>
              <SectionHeading>
                Grown in volcanic soil, caught that morning
              </SectionHeading>
              <BodyText>
                Our kitchen works from a simple conviction: food should
                honour the place it comes from. Vegetables are grown in
                permaculture partnership with local farmers in the fertile
                volcanic earth, and the fish on your plate was, more often
                than not, still in Azorean waters that same morning.
              </BodyText>
            </Section>

            {/* Closing divider */}
            <Section style={{ padding: "44px 52px 0 52px" }}>
              <OrnamentalDivider />
            </Section>

            {/* Closing message */}
            <Section style={{ padding: "36px 52px 8px 52px", textAlign: "center" as const }}>
              <Heading
                as="h2"
                style={{
                  margin: "0 0 16px 0",
                  fontFamily: FONT_HEADING,
                  fontSize: "27px",
                  color: COLORS.ink,
                  fontWeight: 400,
                  textAlign: "center" as const,
                }}
              >
                We hope to host you soon
              </Heading>
              <Text
                style={{
                  margin: "0 auto 30px auto",
                  maxWidth: "400px",
                  fontFamily: FONT_BODY,
                  fontSize: "14px",
                  lineHeight: "1.9",
                  color: COLORS.body,
                  textAlign: "center" as const,
                }}
              >
                Your member's rate has no expiry — it will simply be here,
                whenever the Atlantic calls.
              </Text>
              <Button href={BOOKING_URL} style={ctaButtonStyle}>
                Plan Your Stay
              </Button>
            </Section>

            {/* Footer */}
            <Hr
              style={{
                borderColor: COLORS.innerBorder,
                margin: "48px 52px 0 52px",
              }}
            />
            <Section style={{ padding: "30px 40px 40px 40px", textAlign: "center" as const }}>
              <Text
                style={{
                  margin: "0 auto 18px auto",
                  fontFamily: FONT_HEADING,
                  fontSize: "20px",
                  letterSpacing: "4px",
                  color: COLORS.gold,
                }}
              >
                SENSI
              </Text>
              <Text
                style={{
                  margin: "0 0 8px 0",
                  fontFamily: FONT_BODY,
                  fontSize: "11px",
                  letterSpacing: "0.5px",
                  color: COLORS.gold,
                  textAlign: "center" as const,
                }}
              >
                SENSI Nature and SPA &middot; Rua do Monte n&ordm; 1, 9555-080
                Ginetes, São Miguel, Azores, Portugal
              </Text>
              <Text
                style={{
                  margin: "0 0 8px 0",
                  fontFamily: FONT_BODY,
                  fontSize: "11px",
                  letterSpacing: "0.5px",
                  color: COLORS.gold,
                  textAlign: "center" as const,
                }}
              >
                Tel. +351 296 248 260 &middot; sensi@sensiazores.com
              </Text>
              <Text
                style={{
                  margin: 0,
                  fontFamily: FONT_BODY,
                  fontSize: "11px",
                  letterSpacing: "0.5px",
                  color: COLORS.gold,
                  textAlign: "center" as const,
                }}
              >
                You're receiving this because you're a member of SENSI Club.{" "}
                <Link
                  href={"{{{RESEND_UNSUBSCRIBE_URL}}}"}
                  style={{ color: COLORS.gold, textDecoration: "underline" }}
                >
                  Unsubscribe
                </Link>
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}