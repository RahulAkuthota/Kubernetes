pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "rahulakuthota/my-k8s-app"
        VERSION = "${BUILD_NUMBER}"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${VERSION} ."
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh """
                        echo \$PASS | docker login -u \$USER --password-stdin
                        docker push ${DOCKER_IMAGE}:${VERSION}
                    """
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                    minikube kubectl -- set image deployment/my-k8s-app \
                    my-k8s-app=${DOCKER_IMAGE}:${VERSION}
                """
            }
        }
    }
}
