pipeline{
    agent {
        //dockerfile {filename 'Dockerfile'}
        dockerfile true
        
    }
    stages {
        stage('Install') {     
            steps{bat 'npm install'} 
            }
        stage('Build') {
            steps{bat 'npm run-script build'} 
            }
        }
    }

  
