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
        // there a few default environment variables on Jenkins
        // on local Jenkins machine (assuming port 8080) see
        // http://localhost:8080/pipeline-syntax/globals#env

        // echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'cypress run'
      }
    }
  }
}