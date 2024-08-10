import { kafka } from "../config/kafka";

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
                console.log(`Topic: ${topic}, Message: ${message?.value?.toString()}`)
            }
        })
    }
    catch(error){
        console.log("Error is getting in consumer");
        console.log(error);
    }
}