pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    // first stage installs node dependencies and Cypress binary
    stage('Install dependencies') {
      steps {
        echo 'test'
      }
    }   

    stage('build') {
      steps {          
        sh 'npx cypress run'
      }
    }
  }
}