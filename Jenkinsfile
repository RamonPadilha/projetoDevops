pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'mvn clean compile -U'
            }
        }
        stage('Test') {
            steps {
                bat 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                bat 'mvn install'
	    	}
        }
    }
}