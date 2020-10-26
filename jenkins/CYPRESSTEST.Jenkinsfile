pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    // first stage installs node dependencies and Cypress binary
    stage('Install dependencies') {
      steps {
        sh 'apt-get update && apt-get -y install xvfb'
      }
    }   

    stage('build') {
      steps {          
        sh 'npx cypress run'
      }
    }
  }
}