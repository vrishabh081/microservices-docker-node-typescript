import { kafka } from "../config/kafka";
import UserCacheModel from "../model/userCache";

export const consumerFun = async () => {
    try{
        // Consumer connected-
        const consumer = kafka.consumer({
            groupId: `${process.env.KAFKA_GROUP_ID}`
        });
        consumer.connect();

        // Subscribing events-
        await consumer.subscribe({
            topics: [`${process.env.KAFKA_TOPIC_1}`],
            fromBeginning: true
        })

        // Getting messages-
        await consumer.run({
            eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
                // Save user data of auth service-
                const parsedMessage = JSON.parse(message.value?.toString() || '{}');
                const userData = new UserCacheModel(parsedMessage);
                await userData.save();
                console.log("User data has been saved.");
            }
        })
    }
    catch(error){
        console.log("Error is getting in consumer");
        console.log(error);
    }
}