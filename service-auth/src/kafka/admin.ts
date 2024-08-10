import { kafka } from "../config/kafka"

export const kafkaAdmin = async () => {
    try{
        // Admin connection-
        const admin = kafka.admin();
        admin.connect();
        console.log("Kafka Connected");

        // Creation of topics-
        await admin.createTopics({
            topics: [
                {
                    topic: "create-user-cache",
                    numPartitions: 1
                }
            ]
        })

        // Disconnected admin-
        await admin.disconnect();
        console.log("Kafka Dsconnected");
    }
    catch(error){;
        console.log("Following error we are getting in kafka")
        console.log(error)
    }
}