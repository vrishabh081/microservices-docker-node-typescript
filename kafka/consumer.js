import { kafka } from "./kafka.js";

(async function init () {
    const consumer = kafka.consumer({
        groupId: "user-1"
    });
    await consumer.connect();
    console.log("Consumer connected successfully");

    console.log("Consumer subscribing");
    await consumer.subscribe({
        topics: ["rider-updates"],
        fromBeginning: true
    });
    console.log("Consumer subscribed successfully");

    await consumer.run({
        eachMessage: async({
            topic, partition, message, heartbeat, pause
        }) => {
            console.log(`Topic: ${topic}, Partition: ${partition}, Message: ${message.value.toString()}`)
        }
    })

})()