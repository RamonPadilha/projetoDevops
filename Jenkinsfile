pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
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
                bat 'npm install'

                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat(script: "npm test C:\\Users\\Ramon Phelipe Padilh\\.jenkins\\workspace\\DevOps\\src\\teste.test.js", returnStatus: true)
            }
        }

        stage('OWASP Dependency-Check') {
            steps {
                script {
                    def tool = tool name: 'OWASP Dependency-Check', type: 'DependencyCheckBuilder'
                    if (tool) {
                        def cmd = "${tool}/bin/dependency-check.bat"
                        bat "${cmd} --project DevOps --scan src/"
                    } else {
                        error "Ferramenta OWASP Dependency-Check não encontrada. Verifique a configuração global."
                    }
                }
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
