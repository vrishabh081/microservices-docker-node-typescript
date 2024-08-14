import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: `${process.env.KAKFA_CLIENT_ID}`,
    brokers: [`${process.env.YOUR_IP_ADDRESS}:${process.env.KAFKA_PORT}`]
})