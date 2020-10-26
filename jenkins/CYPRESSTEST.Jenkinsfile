pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('pull repo') {
        steps {    
            sh 'git pull https://github.com/jtw10/jenkins-pipeline'
        }
    }
    stage('build') {
      steps {          
        sh 'npx cypress run --config-file ig-bot/cypress.json --headless'
      }
    }
  }
}