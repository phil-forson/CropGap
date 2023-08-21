import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.space}>
          <Text style={styles.privacy}>Privacy Policy</Text>
        </View>
        <View>
          <Text style={styles.headers}>Effective Date: [Date]</Text>
        </View>
        <View style={styles.space}>
          <Text>
            This Privacy Policy describes how we collect, use, and disclose
            personal information when you use the tasks management feature
            within our farm management mobile app. We are committed to
            protecting your privacy and ensuring the security of your personal
            information. By using the App and its tasks management feature, you
            consent to the practices described in this Privacy Policy.
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.info}>Information We Collect</Text>
        </View>
        <View>
          <Text style={styles.personal}>Personal Information:</Text>
        </View>
        <View>
          <Text style={styles.headers}>Information Sharing and Disclosure</Text>
        </View>
        <View style={styles.space}>
          <Text>
            We may share your personal information in the following
            circumstances: With Service Providers: We may engage trusted
            third-party service providers to assist us in operating and
            maintaining the App. These providers have limited access to your
            personal information and are obligated to protect its
            confidentiality. For Legal Purposes: We may disclose your
            information if required by law, regulation, legal process, or
            governmental request, or when we believe in good faith that
            disclosure is necessary to protect our rights, enforce our policies,
            or address fraud or security issues. With Your Consent: We may share
            your information with your explicit consent or as otherwise
            disclosed at the time of data collection.
          </Text>
        </View>
        <View>
          <Text style={styles.headers}>Data Security</Text>
        </View>
        <View style={styles.space}>
          <Text>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
            However, please note that no method of transmission or storage over
            the internet is entirely secure, and we cannot guarantee the
            absolute security of your data.
          </Text>
        </View>
        <View>
          <Text style={styles.headers}>Data Retention</Text>
        </View>
        <View style={styles.space}>
          <Text>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law. We will
            securely delete or anonymize your personal information once it is no
            longer needed for its intended purposes.
          </Text>
        </View>

        <View>
          <Text style={styles.headers}>Children's Privacy</Text>
        </View>
        <View style={styles.space}>
          <Text>
            The tasks management feature within the App is not intended for
            individuals under the age of 13. We do not knowingly collect
            personal information from children under 13. If you believe we have
            inadvertently collected personal information from a child under 13,
            please contact us, and we will promptly take appropriate measures to
            delete the information.
          </Text>
        </View>

        <View>
          <Text style={styles.headers}>Changes to this Privacy Policy</Text>
        </View>
        <View>
          <Text>We may update this Privacy Policy</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headers: {
    fontWeight: "700",
    paddingBottom: 1,
  },
  space: {
    paddingBottom: 20,
  },
  info: {
    fontWeight: "700",
    paddingBottom: 3,
    fontSize: 17,
  },
  personal: {
    fontWeight: "700",
    paddingBottom: 6,
    fontSize: 15,
  },
  privacy: {
    paddingTop: 15,
    fontWeight: "500",
    fontSize: 25,
    textAlign: "center",
  },
});
