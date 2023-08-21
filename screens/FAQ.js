import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function FAQ() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.main}>FAQ</Text>
        </View>
        <View>
          <Text>
            <View>
              <Text style={styles.question}>
                1. What is the tasks management feature in the farm management
                app?
              </Text>
            </View>
            <View>
              <Text style={styles.answer}>
                The tasks management feature is a functionality within our farm
                management mobile app that allows farmers to create, assign, and
                manage various tasks related to their farm activities. It
                enables farmers to set deadlines, receive notifications, and
                stay organized in their daily operations.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                2. What types of tasks can farmers manage using the app?
              </Text>
            </View>
            <View>
              <Text style={styles.answer}>
                Farmers can manage a wide range of tasks using the app,
                including planting, irrigation, fertilization, pest control,
                harvesting, and maintenance activities. The tasks management
                feature provides a centralized platform for farmers to track and
                manage these activities efficiently.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                3. How does the tasks management feature help improve
                productivity?
              </Text>
            </View>
            <View>
              <Text style={styles.answer}>
                The tasks management feature helps farmers improve their
                productivity by providing a centralized platform to manage farm
                activities. It ensures that tasks are completed on time,
                reducing the risk of missed activities or oversights. Farmers
                can set deadlines, receive notifications, and track progress,
                enabling them to stay organized and efficiently manage their
                workload.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                3. Can I assign tasks to other members of my farm team?
              </Text>
            </View>
            <View>
              <Text style={styles.answer}>
                Yes, the tasks management feature allows you to assign tasks to
                other members of your farm team. You can delegate
                responsibilities, set task priorities, and track the status of
                assigned tasks. This promotes collaboration and ensures everyone
                is on the same page.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                4. How does the feature help in optimizing workflow and
                efficiency?
              </Text>
            </View>
            <View>
              <Text style={styles.answer}>
                The tasks management feature helps farmers optimize their
                workflow by providing visibility into task progress and
                identifying potential bottlenecks. By tracking task completion,
                farmers can identify areas that require improvement, allocate
                resources effectively, and streamline their operations for
                increased efficiency and profitability.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                5. Are there notifications to remind me of upcoming tasks or
                deadlines?
              </Text>
            </View>
            <View>
              <Text style={styles.answer}>
                Yes, the tasks management feature includes notifications to
                remind you of upcoming tasks or approaching deadlines. You will
                receive timely notifications on your mobile device, ensuring
                that you stay informed and never miss an important task.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                6. Is my data secure within the app's tasks management feature?
              </Text>
            </View>
            <View>
              <Text style={styles.answer}>
                We take data security seriously. The app employs measures to
                protect your data from unauthorized access, disclosure, or
                alteration. However, it's important to note that no method of
                transmission or storage over the internet is entirely secure. We
                recommend using strong passwords and keeping your device
                protected to further enhance security.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                7. Can I customize the tasks management feature to fit my farm's
                specific needs?
              </Text>
            </View>
            <View>
              <Text style={styles.answer}>
                Yes, the tasks management feature can be customized to fit your
                farm's specific needs. You can tailor the tasks, categories, and
                deadlines to align with your farm's unique requirements. The app
                aims to provide flexibility and adaptability to various farming
                operations.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                8. Is the tasks management feature available offline? k
              </Text>
            </View>
            <View>
              <Text style={styles.answer}>
                The availability of the tasks management feature offline may
                depend on the specific capabilities of the app. Some tasks and
                functionalities may require an internet connection to sync data
                and receive updates. However, certain basic features might be
                accessible offline, allowing you to view and update existing
                tasks.
              </Text>
            </View>
            <View>
              <Text style={styles.question}>
                9. How can I get support or report issues related to the tasks
                management feature?
              </Text>
            </View>
            <View>
              <Text style={styles.answer}>
                If you require support or want to report any issues related to
                the tasks management feature, you can reach out to our support
                team through the app's designated channels. We are here to
                assist you and address any concerns you may have. Remember that
                the answers provided in this FAQ are specific to the tasks
                management feature within the farm management app.
              </Text>
            </View>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 4,
    paddingRight: 3,
    paddingTop: 40,
  },

  question: {
    paddingTop: 12,
    paddingBottom: 3,
    fontWeight: "700",
  },
  main: {
    paddingTop: 15,
    fontWeight: "700",
    fontSize: 17,
  },
  answer: {},
});
