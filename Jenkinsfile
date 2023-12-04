pipeline {
    agent any

    stages {
        stage('Clonar repositorio'){
            steps {
                git branch: 'master', 
                credentialsId: 'git-jenkins', 
                url: 'https://github.com/Darkphoenix98/Microservicio.git'
            }
        }

        stage('Construir image de docker'){
            steps {
                    script {
                        withCredentials([
                            string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                        ]) {
                            sh """
                            docker build --build-arg MONGO_URI=${MONGO_URI} -t proyectos-microservicio:v1 .
                            """  
                        }
                    }
                }
        }

        stage('Desplegar contenedores Docker'){
            steps {
                script {
                    withCredentials([
                            string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        sh """
                            docker-compose -f docker-compose.yml up -d
                        """
                    }
                }
            }
        }
    }
}