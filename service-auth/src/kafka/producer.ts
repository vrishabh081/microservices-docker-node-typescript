import { kafka } from "../config/kafka"
import { UserCacheInterface } from "../utils/interface";

export const userCacheProducer = async (value:UserCacheInterface) => {
    try {
        // Producer connection-
        const producer = kafka.producer();
        await producer.connect();

        // Send message-
        await producer.send({
            topic: `${process.env.KAFKA_TOPIC_1}`,
            messages: [
                {
                    partition: 0,
                    key: "user-cache",
                    value: JSON.stringify(value)
                }
            ]
        })

        // Producer disconnected-
        await producer.disconnect();
    }
    catch(error){
        console.log("Error is getting in user cache producer")
        console.log(error);
    }
}