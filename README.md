# mernProject
Deploy MERN app on EC2

Problem statement: Project talks about deployment of MERN stack application on EC2

Step Guide to Launching EC2 Instance
Follow these steps to launch your EC2 instance:
1. Log into the AWS Management Console and navigate to the EC2 Dashboard.
2. Click on 'Launch Instance'. Choose 'Ubuntu Server 20.04 LTS' from the list of Amazon Machine Images (AMIs).
3. Select an Instance Type. Choose the 't2.micro' instance type (eligible for the free tier).
4. Configure Instance Details. Ensure the default VPC and public subnet are selected.
5. Add Storage. Allocate 8 GB of storage for your instance. This is the default size but can be adjusted based on your application needs.

<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/ef732cde-398b-4f9c-9723-bde81a8e5704" />
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/767291a2-d990-4acc-bac5-c98c2cd41e22" />
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/da2eed90-78bd-45e8-b7b2-aeebb3d0b3ae" />
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/630f06b3-f3df-450b-9c83-bde62f2036c8" />

Configuring Security Group for Port Access
1. Add Rules to Security Group:
   - Click on 'Add Rule'.
   - For each port (80, 443, 3000, 3001), select 'HTTP', 'HTTPS', or 'Custom TCP' as the type and specify the port.
   - Set the source to 'Anywhere' (0.0.0.0/0) for public access or restrict as needed for security.
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/5fa77d13-b6a7-4cae-99a3-1be9ab67e0f1" />
6. Review and Launch. Review your settings and click on 'Launch'. You will be prompted to select or create a key pair to access your instance remotely.

   Connecting to Your EC2 Instance
Use SSH to connect to your instance. Open your terminal and run the following command (replace 'your-key.pem' and 'your-public-dns' with your key file and instance public DNS):
ssh -i "homeKey.pem" ubuntu@ec2-13-127-53-1.ap-south-1.compute.amazonaws.com
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/b08f2c1e-b125-43e9-ab31-810f343059f2" />

Updating ubuntu instance
sudo apt update && sudo apt upgrade -y

Installing Node.js 22 and npm:
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs



verification:
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/9f2fa69e-ff52-4820-8706-a2c3560a1c26" />

Created database on mongodb atlas named travelmemory
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/a43e8d50-034d-4742-9abb-b0fffffa1780" />

Cloning the Repository

git clone https://github.com/UnpredictablePrashant/TravelMemory.git
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/44da856c-e391-402c-893c-25ec47edff04" />

cd TravelMemory/
cd Backend/

creating .env file in Travelmemory/Backend directory
nano .env
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/57e03dfd-f2be-46e9-96cb-6c6113f3696e" />

 Install Necessary Packages
Npm install

 Run the Backend Application
node index.js
server running successfully on port 3001:
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/b292414b-1e15-4cd1-a5a2-176ef52fc1b6" />

Test the API Endpoint
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/39651f93-d6bd-4db2-b19c-c3fc29b4c96c" />

SSH to Your EC2 Instance
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/941644fc-3a80-4f33-85d0-e6393ae2a619" />

cd TravelMemory/frontend
Create the .env File
echo "REACT_APP_BACKEND_URL=http://13.127.53.1::3001" > .env
npm install
npm start
server successfully started
<img width="979" height="552" alt="image" src="https://github.com/user-attachments/assets/cb6e3ddf-12aa-48b1-b4f4-2e8267003007" />

Accessing the Application
With  below link we can access our frontend application
http://13.127.53.1:3000/
















