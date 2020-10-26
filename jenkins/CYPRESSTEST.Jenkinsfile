pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    // first stage installs node dependencies and Cypress binary
    stage('Install dependencies') {
      steps {
        sh 'npm i -save express'
        sh 'apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb'
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