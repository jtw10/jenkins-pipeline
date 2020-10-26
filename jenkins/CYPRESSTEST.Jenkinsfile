pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    // first stage installs node dependencies and Cypress binary
    stage('Install dependencies') {
      steps {
        sh 'npm i -save express'
        sh 'npm install cypress --save-dev'
      }
    }   

    stage('build') {
      steps {          
        sh 'cypress run'
      }
    }
  }
}