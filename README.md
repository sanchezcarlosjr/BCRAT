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
We've connected our notebook to Gear smart contracts to understand, practice and deliver a better product. Find our our example [here](https://notebook.sanchezcarlosjr.com/?c=Gy8TAJwFdsNdM7jwZWxZBpmEe%2F8vVU9X3k9bSYkZkm05Yw86sCAyHqAHeD%2FdL02WFNAG0WGxa%2BIaKjs7DlwuqRygm%2Bf22wEKM%2F%2B%2FtVcb3iRtfWRljOzxleLPnftmln8BE94UCN6UWeLxkSV2dWVhqyocbq3Gx3C%2BQx0yRcRa%2FfOXYP65EGTEOkcCANYuHvpagpaazzzJz6x9P3s0MHAro04PN2oAVkFLAG%2F0Ws6e5%2FDlEzq4vwBg6WZQWjcA9cbXFiaQv%2BLkdXr5Njq%2FP2muLH3onWiJaxhNQd48VF7G5E%2FHVyhYNJR0SEiYOGcrFjr%2Fu5sn%2F9%2BWerI74alJaXjOuLsYj1JMl%2Fw20Pc0qKTUoW9GRaUHqnAM9EuUfkUIlxvWz4%2FswwoOrHZQok5lfEB2bHpQabSDRDyUn6nxz5tRLou%2FhL%2Bt2hRNPcag4jcyKpCJcII4H6nb4oYb0DYo%2BUNnaXXS2CwPCNwIYAc%2BO80DPYVeD34Wff0EF2psEr9zZkUViwpwdbDnarbBa%2FbV9tdZzm8Ct2yAW%2FYbGkCs10BAt0aPgdActNdEzYd7tn7uL67KF0y4c16qLPhqpIKoH2NDrQQ1RdAzZFGrhj1ZyCfx3u63NrKaTiZ6%2BnBg1%2BjZ6JviVo5vxwQ2l9ISUkgiMguBg1OLZj2Iy4Rjc2XGI7Q0Lr5MlKr2O3Tnvbmy1bdfTCDP5hDESJQ2FD1NHOdVcZrukjALHJLOvZvB34sQbRY3GrvEHNiMwxpw2pQQg18TJwk3dBU99xTGwpKQSLHMEV6AtFkwI5QDiM1C%2BhxpE1FKCrqdVcqNbUeShKJ2DT9ez%2FK%2FcnAl1lfIHS5EvmoRsJSBtErUQ7IiKz74Lsp%2F8e6dfTZvjw4XjkVu9qaiK1RqdMCqNws4MEAMjtezvmVEWxrTfIGUzQombGtDHZIvLbfeVfJbtsy37oZ2kY%2F1leVMX1hv965qmvcMmHlLlWLZ2jNWqp2p9z%2F94Kedvh2Ig23GYfdZjMjLOZYVq3wcfhCk3Rg0s%2FlZTYxHRTns8tHCN%2BzEFDt7AsXsOdguNfiDRQZbemGKnloky4b6jn7pw0qOh6XFRnbDwTqnPHZDQW4S2h3aLg025%2BFUoWB7FaIYmtJderdoa1qMOjVtl2dv04vR0BZMgFUiZaRAA1r5J%2BQekp6bfDlUfh5XgZtOnUs8r7LDgZA2kL6XrtZLW3gqhqVUNoYoka6IIcNYYJhg6MyL2RYt0VR1m%2FNODBUOzZAH1E5mjkxeo1JGCGxTSEP6fvwnmRMe15lqRPfRUpt3wFJU1T4jyI%2BCrik%2FitiRkhAdP9M4VHH0%2FDh5byrGGhHDIbZhR07j2Ng4T9ipDiFAOkN30aavimAdMN3HRQyEfk%2BJDDZYL0DxD33J0exmYRZQLHLSwGksFU8kBL0NLZK%2FejkCuEzPKYA61nxIbDn%2Bt21hhb5zF3yLtMO0fgda%2BzRFFmY%2FEVIGNs4OGGkklc7QgtLzNrjyCSepczJNtGwCZfvRUiYDl1MpeJsCkWToHfjWjl1VKzyRBuH8PO2guZaxuYxOOB0OzUi%2FtHAmVCasArYBWrL01zqLDeNlqkJcDorHuDoIoV%2BCEatfzli5TU9L8ABYnSfPcp2EMnO%2F85IbhBCiNNs2PSC7TS%2BOyc6FQTSE4YCYTdgyVEhAipAJS88W2FUWsfx50WAPVGI%2BM2PEWV4wQ2eoWUaNhbUeQmsP5r8yieKzJ7unemA4JwMy2t6OA%2BrZKbtCMi%2BMwHi%2FTlSaNt1egkvhbTNfbPuN121qs3pqNvOpk9pehoudMbLVGDe1%2B%2F%2BOonofpejC1QJ5hVdOi6FeKOndB5iCGPik5Dwg83lwrkJ2tmSRgxXbYD93qBjgbKf3xxYCuIMLGEWskDXYA7GSVPl6MrRlDGOQBLsYGpsJ6qyWH0YkjY2zyQ5on2lK%2Fq9M8vjzsgTt7JIDVSvybd0CapwaLxtPbRBnJO0FvEBkpI82L5KoxzLAnKe9RS2JnPxL0G%2BOrYrfYcac57GG%2FRnR9P2MvQNW1OTaEt7ncUMIyqXgAQMHRop%2FnsHL6Pezpf%2BMKrcZN%2BREcQ2qobinQRmH7wvnwvZANC6Jg1CLEgFm7QQCrgcQpmCj9RoWn49PG3eD%2FITJunOOVcUhCewiTzheNeBU1WICBOMT3wcXd6ONmpvj1kWhtD4fpqIdAmYNyf8zMamK3rbw2DLBS746PpovGyZhbHRqGsGVCZxBMEazp2pZ6qOL1TLXe6D5IGnzHy8ePZTgLxR0hZKt9CFzfSr2%2F7sG)
