pipeline {
  agent any
  tools {nodejs 'node'}
  parameters {
      string(name: 'Username', description: 'Enter your username')
      password(name: 'Password', description: 'Enter your password')
  }
  stages {
    stage('pull repo') {
        steps {    
            sh 'git pull https://github.com/jtw10/jenkins-pipeline'
        }
    }
    stage('run cypress') {
      steps {          
        sh 'npx cypress run --config-file ig-bot/cypress.json --headless'
      }
    }
  }
}