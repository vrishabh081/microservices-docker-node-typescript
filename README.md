# Learn microservices, docker, node and typescript

### Architechture-
**Micro-services**

### Tech stack- 
- Docker, 
- Typescript, 
- Node, 
- Express, 
- MongoDB
- Apache Kafka

### External package- 
- Json Web Token (jwt),
- CORS,
- Body Parser,
- MongoDB

### How can we start the project-
1. Should have docker and node in your system.
2. npm i
3. docker run -p 2181:2181 zookeeper.
4.  
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka

5. Start serice auth - (npm run dev)
6. Start service product - (npm run dev)