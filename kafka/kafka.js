import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    brokers: ["192.168.18.197:9092"],
    clientId: "my-app"
})