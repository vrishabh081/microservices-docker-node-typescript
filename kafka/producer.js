import { kafka } from "./kafka.js";

async function init () {
    const producer = kafka.producer();
    console.log("Producer connecting...");

    await producer.connect();
    console.log("Producer connected successfully");

    console.log("A new message sending...");
    await producer.send({
        topic: "rider-updates",
        messages: [
            {
                partition: 0,
                key: "location-update",
                value: JSON.stringify({name: "Tony stark", loc: "north"})
            }
        ]
    })
    console.log("Message sent...");
}

init()