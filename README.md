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

# Instructions to start Primary Notebook which is based on Factor risks
We've trained a Random Forest that you can checkout on [Gist](https://gist.github.com/sanchezcarlosjr/bfdbf294e8a89e81c005ac9f8a74a413). You can download that model on [IPFS](http://tesis.infura-ipfs.io/ipfs/QmUNXzsrNxYzYpL7qggVybMP61q4aPHocufva9RXtRjxHw)
Primary Notebook runs the model, Replica Notebook calls te Primary Notebook with user factor risks. You must run the code in Notebook on Chromium-based. 
 [Evanotebook Primary](https://notebook.sanchezcarlosjr.com/?u=https://raw.githubusercontent.com/sanchezcarlosjr/mega-hackathon-web3/main/evanotebook-primary.json)
It assigns an entity name (the ``p`` search parameter), so your application url have got to looks like [Evanotebook Replica](https://notebook.sanchezcarlosjr.com/?u=https%3A%2F%2Fraw.githubusercontent.com%2Fsanchezcarlosjr%2FBCRAT%2Fmain%2Fevanotebook-replica.json&factor_risk=https%3A%2F%2Fraw.githubusercontent.com%2Fsanchezcarlosjr%2FBCRAT%2Fmain%2Ffactor-risk-example.json&primary=eceamnulku&m=2), where you must replace primary with previous p search parameter and factork_risk with your favorite storage.
By default, our app uses our primary notebook. However, you can use your own model.

# CNN Training and Data science
One of our goals are to build data mining models that understand mammograms and predict breast cancer developing risk, continuing works. Since our model output is a person's future healthy situation, we'll do descriptive and predictive methods, indeed we're going to apply Machine Learning algorithms to datasets. Of course, we don't expect to replace medical doctors but assist them. We know other computer-aided detection systems have been developed for breast cancer detection but no one applies them to regional cities and they are not free.

An important tool in this context is the Digital Imaging and Communications in Medicine, or DICOM. DICOM is a standard protocol used for the transmission, storage, retrieval, and sharing of medical images. This protocol aids in the visualization and analysis of these images, enabling the identification of potential patterns or traits that might be of particular interest. In the world of data mining, this step is often referred to as "DICOM View."

![image](https://github.com/sanchezcarlosjr/BCRAT/assets/24639141/29c57671-f4d1-45a3-bb7b-6866903d4116)

In the context of mammography analysis, one might utilize the Digital Database for Screening Mammography, or DDSM. DDSM is one of the largest publicly available collections of mammograms. As part of the preprocessing step, the mammograms from DDSM can be analyzed and preprocessed to identify and potentially remove any noise or inconsistencies in the data. This process have involved data cleaning, normalization, transformation, and other techniques to prepare the data for further analysis.

![image](https://github.com/sanchezcarlosjr/BCRAT/assets/24639141/bf8f3aef-9b54-4edd-b777-b81412351388)
DDSM


![image](https://github.com/sanchezcarlosjr/BCRAT/assets/24639141/b2db4467-7724-4276-92b6-397888c17d28)
Preprocessing steps

Finally, the methodology wraps up with the engineering process. This is where we've design and implement a CNN based on the preprocessed data. After training the model, we're going to validate and test it on a separate dataset to ensure its reliability and effectiveness.

![image](https://github.com/sanchezcarlosjr/BCRAT/assets/24639141/a0e0d04d-a459-45aa-96b6-de4c10f42b74)


More information can be found on [here](https://carlos-eduardo-sanchez-torres.sanchezcarlosjr.com/Data-mining-project-Breast-Cancer-risk-estimation-using-data-mining-techniques-at-a-public-Mexican--7a807c1db3b641378180b0c60633c38b)


# Connection between Evanotebook and Gear Protocol

TODO
