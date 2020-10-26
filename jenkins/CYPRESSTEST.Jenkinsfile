pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    // clone repo
    stage('clone repo') {
        steps {
            sh 'git https://github.com/jtw10/jenkins-pipeline'
        }
    }

    // stage('Install dependencies') {
    //   steps {
    //     sh 'npm install cypress --save-dev'
    //     sh 'apt-get update && apt-get -y install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb'
    //   }
    // }   

    stage('build') {
      steps {          
        sh 'npx cypress run --headless'
      }
    }
  }
}