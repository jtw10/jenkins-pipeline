pipeline {
    agent any
    environment {
        PLACEHOLDER_VARIABLE = 'placeholder'
    }
    stages {
        stage("ECHO TEST") {
            steps {
                echo "test"
            }
        }
        stage("TEST BASH") {
            steps {
                sh "ls -l"
            }
        }
    }
}
