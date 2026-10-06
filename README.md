# PrivaSync
 
A federated learning platform for **privacy-preserving next-word prediction**. Participating clients train a GRU-based language model locally on their own data and send only model updates to a central server, so raw training text never leaves the client.
 
Built as a group project under the mentorship of **PClub, IIT Kanpur**.
 
> Original repository: [pclubiitk/PrivaSync](https://github.com/pclubiitk/PrivaSync)
 
---
 
## Overview
 
In standard machine learning, data is collected in one place and used to train a model. That is a problem for sensitive data such as what people type on their keyboards. PrivaSync uses **federated learning** instead: the model goes to the data, rather than the data going to the model.
 
Training happens in **rounds**, coordinated in real time between a central server and registered clients. The server combines client updates using **Federated Averaging (FedAvg)** to produce an improved global model.
 
## Features
 
- **GRU-based next-word prediction** model
- **Round-based federated training** with selection of a subset of registered clients each round
- **FedAvg aggregation** of client model updates into a new global model
- **Real-time coordination** between server and clients over WebSockets
- **JWT authentication** to verify clients and block unauthorized participation
- **Fault handling** for connection failures, training timeouts and oversized model-update payloads
- **User dashboard** showing the current training round and the user's participation history
- **Admin controls** to start and monitor training rounds
## How It Works
 
1. An admin starts a training round.
2. The server selects a subset of registered users to participate.
3. The server sends the current global model to the selected clients.
4. Each client trains the model locally on its own dataset.
5. Clients return their updated model weights to the server (never their raw data).
6. The server aggregates the received updates using FedAvg to produce the next global model.
7. The process repeats for the next round.
 
## Acknowledgements
 
- Mentors: [Ritika Batra , Yatin Bhojwani, Shivansh Jaiswal , Muragesh Nyamagoud , Austin Shijo , Malgatte Harsh Siddharth]
- [PClub, IIT Kanpur](https://pclub.in)

