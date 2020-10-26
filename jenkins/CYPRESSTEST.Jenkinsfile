pipeline {
  agent {
    docker { image 'cypress/base:latest' }
  }

  tools {nodejs "node"}

  stages {
    stage('test') {
      steps {          
        sh 'cypress run'
      }
    }
  }
}