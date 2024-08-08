import { kafka } from "./kafka.js";

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");

    admin.connect();
    console.log("Admin connected successfully...");

    console.log("Topic creation started");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2
            }
        ]
    })
    console.log("Topic created successfully- rider-updates");

    console.log("Admin", admin)

    console.log("Disconnecting admin...");
    await admin.disconnect();
}

init()