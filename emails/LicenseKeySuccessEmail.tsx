import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Heading,
  Row,
  Column,
  Img,
} from "jsx-email";
import React from "react";

export const TemplateName = "LicenseKeySuccessEmail";

const main = {
  backgroundColor: "#F3F4F6",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  display: "flex",
  justifyContent: "center",
  padding: "30px 20px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};

const content = {
  border: "1px solid #D1D5DB",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#FFF",
};

const boxInfos = {
  padding: "0px 20px",
};

const baseUrl = "https://cal.com";

export const Template = ({
  calcomLicenseKey,
  signatureKey,
}: {
  calcomLicenseKey: string;
  signatureKey: string;
}) => (
  <Html>
    <Head />
    <Preview>
      <Preview>Cal.com Purchase Complete</Preview>
    </Preview>
    <Body style={main}>
      <Container>
        <Section style={content}>
          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                as="h2"
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "normal",
                  letterSpacing: "0.24px",
                }}
              >
                Purchase Complete
              </Heading>
              <Text style={paragraph}>
                Thank you for subscribing to self-hosted Cal.com. We have
                generated a license key and it will be active within the next
                few minutes.
              </Text>

              <Text style={paragraph}>
                The license key and signature key below are both required to use
                Cal.com when self hosting. These should be placed in your
                deployments environment variables .
              </Text>

              <code style={code}>
                CALCOM_LICENSE_KEY={calcomLicenseKey}
                <br />
                CAL_SIGNATURE_TOKEN={signatureKey}
              </code>

              <Row style={{ marginTop: 10 }}>
                <Text style={{ ...paragraph }}>
                  If you have any questions, please reach out to us at{" "}
                  <Link href="mailto:support@cal.com">support@cal.com</Link>.
                </Text>
              </Row>
            </Column>
          </Row>
        </Section>
        <Section style={logo}>
          <Img src={`${baseUrl}/logo.svg`} />
        </Section>
      </Container>
    </Body>
  </Html>
);
