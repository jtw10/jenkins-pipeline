pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    // first stage installs node dependencies and Cypress binary
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
        sh 'npm run cy:verify'
      }
    }   

    stage('build') {
      steps {          
        sh 'cypress run'
      }
    }
  }
}