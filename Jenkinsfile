pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout do código-fonte do repositório Git
                script {
                    checkout scm
                }
            }
        }
	stage('Clean') {
		steps {
			bat 'npm cache clean -f'
		}
	}
        
        stage('Build') {
            steps {
                // Instalar as dependências do projeto React
                bat 'npm install'
                
                // Build do projeto React
                bat 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                // Executar testes (substitua com seu comando de teste)
		bat(script: "npm test C:\\Users\\Ramon Phelipe Padilh\\.jenkins\\workspace\\DevOps\\src\\teste.test.js", returnStatus: true)
            }
        }
        
        stage('Deploy') {
            steps {
                // Implantação (substitua com seus comandos de implantação)
                bat 'npm run deploy'
            }
        }
    }
}

