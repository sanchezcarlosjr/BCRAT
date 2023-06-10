# Breast Cancer Risk Assessment Tool (BCRAT)

Breast Cancer Risk Assessment Tool (BCRAT) helps women access a tool for detecting and evaluating the risk factor of getting breast cancer in the early stages. BCRAT incentivizes users to upload their information by always protecting their data with the blockchain protocol and getting remote healthcare support by calculating their risks of getting cancer with a machine learning model trained with other people’s data anonymously.

To utilize the tool, people need to upload their basic information: age, sex, height, weight, body measurements, basic family history, and others. We assure people to protect their information by making it untraceable and incapable to associate a person with their data. Subsequently, we utilize machine learning algorithms with all the information available in the app and calculate user’s risks of getting breast cancer so they can access treatment in the early stages.

BCRAT is an app based on the blockchain using Gear protocol and Vara Network. 

Learn more on our [Docs](https://carlos-eduardo-sanchez-torres.sanchezcarlosjr.com/TRHEAD-an-Hackathon-Web3-version-6640d15eee8e4896a3dcbe2ca24a5448)

## Sequence diagram
![sequence-diagram](https://github.com/sanchezcarlosjr/mega-hackathon-web3/assets/98775097/62ad6720-462c-4c95-a2cc-7f4bcbb381dc)

# Instructions to start BCRAT Marketplace
1. Clone 
```bash
git clone https://github.com/sanchezcarlosjr/mega-hackathon-web3.git
```

2. Checkout
```bash
git checkout devel
```

3. Please follow the instructions on that branch

# Instructions to start Primary Notebook
We've trained a Random Forest that you can checkout on https://gist.github.com/sanchezcarlosjr/bfdbf294e8a89e81c005ac9f8a74a413. You can download that model on http://tesis.infura-ipfs.io/ipfs/QmUNXzsrNxYzYpL7qggVybMP61q4aPHocufva9RXtRjxHw
Primary Notebook runs the model, Replica Notebook calls te Primary Notebook with user factor risks. You must run the code in Notebook on Chromium-based. 
 [https://notebook.sanchezcarlosjr.com](https://notebook.sanchezcarlosjr.com/?u=https://raw.githubusercontent.com/sanchezcarlosjr/mega-hackathon-web3/main/evanotebook-primary.json)
It assigns an entity name.
By default, our app uses our primary notebook. However, you can use your own model.


